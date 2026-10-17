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
  siJetpackcompose,
  siKotlin,
  siKtor,
  siMaterialdesign,
  siOpenjdk,
  siSqlite,
  siSwift,
} from 'simple-icons'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { IconCloud } from '@/components/ui/icon-cloud'
import { skills } from '@/data/cv'
import { useIsDark } from '@/lib/use-is-dark'

const brandIcons = [
  siKotlin, siAndroid, siAndroidstudio, siIntellijidea, siJetpackcompose, siOpenjdk, siGradle,
  siSwift, siApple, siGit, siGithub, siGithubactions, siJenkins, siFirebase, siKtor, siSqlite,
  siMaterialdesign, siFigma, siClaude,
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
        <BlurFade inView className="flex justify-center">
          <div className="max-w-full [&_canvas]:h-auto [&_canvas]:max-w-full">
            <IconCloud icons={icons} showControl={false} />
          </div>
        </BlurFade>
        <ul className="space-y-3">
          {skills.map((s, i) => (
            <BlurFade key={s} inView delay={0.05 * i}>
              <li className="text-muted-foreground flex gap-3 leading-snug">
                <span className="bg-brand mt-2 size-1.5 shrink-0 rounded-full" />
                <span>{s}</span>
              </li>
            </BlurFade>
          ))}
        </ul>
      </div>
    </Section>
  )
}
