import type { Plugin } from 'vite'

import { jobs, links, profile, projects, skills } from '../src/data/cv.ts'

const siteUrl = 'https://wengelef.github.io'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Static content for crawlers that don't run JS; React replaces it on mount.
function fallbackHtml() {
  const jobsHtml = jobs
    .map(
      (j) => `<section><h3>${escapeHtml(j.title)}, ${escapeHtml(j.companyName)}</h3>
<p>${escapeHtml(j.time)}</p>
<ul>${j.items.map((i) => `<li>${escapeHtml(i)}</li>`).join('')}</ul></section>`,
    )
    .join('\n')
  const projectsHtml = projects
    .map((p) => `<li><a href="${escapeHtml(p.url)}">${escapeHtml(p.title)}</a>: ${escapeHtml(p.texts.join('. '))}</li>`)
    .join('')
  return `<main hidden>
<h1>${escapeHtml(profile.name)}</h1>
<p>${escapeHtml(profile.title)}</p>
<h2>Skills</h2>
<ul>${skills
  .map((s) => `<li><strong>${escapeHtml(s.title)}</strong>: ${escapeHtml(s.summary)} (${escapeHtml(s.tags.join(', '))})</li>`)
  .join('')}</ul>
<h2>Experience</h2>
${jobsHtml}
<h2>Projects</h2>
<ul>${projectsHtml}</ul>
</main>`
}

function personJsonLd() {
  const current = jobs.find((j) => j.current)
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    url: `${siteUrl}/`,
    image: `${siteUrl}/og.png`,
    ...(current && { worksFor: { '@type': 'Organization', name: current.companyName } }),
    sameAs: Object.values(links).filter(Boolean),
  }
}

// The hero image is the LCP element but is only discovered once the JS has rendered it, so preload it.
// The media queries mirror the <source> / <img> pair in hero.tsx.
function heroPreloads(files: string[]) {
  const preload = (re: RegExp, media: string) => {
    const file = files.find((f) => re.test(f))
    return file && `<link rel="preload" as="image" href="/${file}" media="${media}" fetchpriority="high" />`
  }
  return [
    preload(/^assets\/avatar_xs-[\w-]+\.webp$/, '(max-width: 1023px)'),
    preload(/^assets\/avatar-[\w-]+\.webp$/, '(min-width: 1024px)'),
  ].filter(Boolean)
}

export function seo(): Plugin {
  return {
    name: 'seo',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        // `<` is escaped so the JSON can never close the script tag.
        const jsonLd = JSON.stringify(personJsonLd()).replace(/</g, '<')
        const head = [...heroPreloads(Object.keys(ctx.bundle ?? {})), `<script type="application/ld+json">${jsonLd}</script>`]
        return html
          .replace('</head>', `    ${head.join('\n    ')}\n  </head>`)
          .replace('<div id="root"></div>', `<div id="root">${fallbackHtml()}</div>`)
      },
    },
  }
}
