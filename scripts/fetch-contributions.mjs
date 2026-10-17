// Fetches the GitHub contribution calendar for every login in src/data/github.json,
// sums the counts per date and writes src/data/contributions.json.
// Never fails the build: without a token or on error the existing file is kept.
import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const outFile = new URL('../src/data/contributions.json', import.meta.url)
const { logins } = JSON.parse(readFileSync(new URL('../src/data/github.json', import.meta.url), 'utf8'))

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar { weeks { contributionDays { date contributionCount } } }
    }
  }
}`

async function fetchLogin(login, token) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', 'User-Agent': 'cv-site' },
    body: JSON.stringify({ query, variables: { login } }),
  })
  if (!res.ok) throw new Error(`${login}: HTTP ${res.status}`)
  const json = await res.json()
  const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks
  if (!weeks) throw new Error(`${login}: ${JSON.stringify(json.errors ?? json)}`)
  return weeks.flatMap((w) => w.contributionDays)
}

function levelFor(count, max) {
  if (count <= 0) return 0
  return Math.min(4, Math.ceil((count / max) * 4))
}

async function main() {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    console.warn('fetch-contributions: GITHUB_TOKEN not set, keeping existing data')
    if (!existsSync(outFile)) writeFileSync(outFile, '[]\n')
    return
  }

  const totals = new Map()
  for (const login of logins) {
    for (const { date, contributionCount } of await fetchLogin(login, token)) {
      totals.set(date, (totals.get(date) ?? 0) + contributionCount)
    }
  }

  const dates = [...totals.keys()].sort()
  const max = Math.max(1, ...totals.values())
  const data = dates.map((date) => ({ date, count: totals.get(date), level: levelFor(totals.get(date), max) }))
  writeFileSync(outFile, JSON.stringify(data) + '\n')
  console.log(`fetch-contributions: wrote ${data.length} days, ${data.reduce((s, d) => s + d.count, 0)} contributions`)
}

main().catch((err) => {
  console.warn(`fetch-contributions: ${err.message}, keeping existing data`)
  if (!existsSync(outFile)) writeFileSync(outFile, '[]\n')
})
