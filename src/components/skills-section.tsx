import { useEffect, useMemo, useState } from 'react'
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

const brandIcons = [
  siKotlin, siAndroid, siAndroidstudio, siIntellijidea, siJetpackcompose, siOpenjdk, siGradle,
  siSwift, siApple, siGit, siGithub, siGithubactions, siJenkins, siFirebase, siKtor, siSqlite,
  siMaterialdesign, siFigma, siClaude,
]

function useIsDark() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    const observer = new MutationObserver(() =>
      setDark(document.documentElement.classList.contains('dark')),
    )
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  return dark
}

export function SkillsSection() {
  const dark = useIsDark()
  // Monochrome icons that follow the theme; rebuilt when the theme flips.
  const icons = useMemo(
    () =>
      brandIcons.map((icon) => (
        <svg key={icon.slug} width="100" height="100" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d={icon.path} fill={dark ? '#fafafa' : '#262626'} />
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
                <span className="bg-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                <span>{s}</span>
              </li>
            </BlurFade>
          ))}
        </ul>
      </div>
    </Section>
  )
}
