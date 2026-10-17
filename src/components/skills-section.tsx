import { Blocks, Bot, Globe, ShieldCheck, Smartphone, Users } from 'lucide-react'
import { useMemo } from 'react'
import {
  siAndroid,
  siAndroidstudio,
  siApple,
  siClaude,
  siFigma,
  siFirebase,
  siGit,
  siGithub,
  siGithubactions,
  siGradle,
  siIntellijidea,
  siJenkins,
  siJavascript,
  siJetpackcompose,
  siKotlin,
  siKtor,
  siMaterialdesign,
  siOpenjdk,
  siReact,
  siSqlite,
  siSwift,
  siTailwindcss,
  siTypescript,
  siVite,
} from 'simple-icons'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { IconCloud } from '@/components/ui/icon-cloud'
import { MagicCard } from '@/components/ui/magic-card'
import { type SkillGroup, skills } from '@/data/cv'
import { useIsDark } from '@/lib/use-is-dark'

const groupIcons: Record<SkillGroup['icon'], { icon: typeof Smartphone; tone: string }> = {
  mobile: { icon: Smartphone, tone: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  web: { icon: Globe, tone: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' },
  architecture: { icon: Blocks, tone: 'bg-sky-500/10 text-sky-600 dark:text-sky-400' },
  quality: { icon: ShieldCheck, tone: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
  agentic: { icon: Bot, tone: 'bg-violet-500/10 text-violet-600 dark:text-violet-400' },
  team: { icon: Users, tone: 'bg-rose-500/10 text-rose-600 dark:text-rose-400' },
}

const brandIcons = [
  siKotlin, siAndroid, siAndroidstudio, siIntellijidea, siJetpackcompose, siOpenjdk, siGradle,
  siSwift, siApple, siGit, siGithub, siGithubactions, siJenkins, siFirebase, siKtor, siSqlite,
  siMaterialdesign, siFigma, siClaude, siReact, siTypescript, siJavascript, siVite, siTailwindcss,
]

// Brand color of a logo, falling back to the text color when it would vanish on the current background.
function readableHex(hex: string, dark: boolean) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  if (dark && luminance < 0.08) return '#fafafa'
  if (!dark && luminance > 0.9) return '#262626'
  return `#${hex}`
}

export function SkillsSection() {
  const dark = useIsDark()
  // Brand-colored icons, adjusted for contrast; rebuilt when the theme flips.
  const icons = useMemo(
    () =>
      brandIcons.map((icon) => (
        <svg key={icon.slug} width="100" height="100" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d={icon.path} fill={readableHex(icon.hex, dark)} />
        </svg>
      )),
    [dark],
  )

  return (
    <Section id="skills" title="Skills">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <BlurFade inView className="flex justify-center md:order-last">
          <div className="max-w-full [&_canvas]:h-auto [&_canvas]:max-w-full">
            <IconCloud icons={icons} showControl={false} />
          </div>
        </BlurFade>
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
          {skills.map((s, i) => {
            const { icon: Icon, tone } = groupIcons[s.icon]
            return (
              <BlurFade key={s.title} inView delay={0.08 * i} className="lg:last:col-span-2">
                <li className="h-full">
                  <MagicCard
                    className="bg-card h-full rounded-xl border"
                    gradientColor={dark ? '#3b2a6b' : '#e9e0ff'}
                    gradientFrom="#8b5cf6"
                    gradientTo="#c4b5fd"
                  >
                    <div className="space-y-3 p-4">
                      <div className="flex items-center gap-3">
                        <span className={`flex size-9 shrink-0 items-center justify-center rounded-full ${tone}`}>
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-medium">{s.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-snug">{s.summary}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {s.tags.map((t) => (
                          <span key={t} className="bg-muted/50 rounded-full border px-2 py-0.5 text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </MagicCard>
                </li>
              </BlurFade>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
