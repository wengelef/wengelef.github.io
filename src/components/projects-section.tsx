import { ArrowUpRight } from 'lucide-react'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { projects } from '@/data/cv'

export function ProjectsSection() {
  return (
    <Section id="projects" title="Backlog">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <BlurFade key={p.title} inView delay={0.08 * i}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="bg-card hover:bg-accent group block h-full rounded-xl border p-5 transition-colors"
            >
              <div className="flex items-center justify-between font-semibold">
                {p.title}
                <ArrowUpRight className="text-muted-foreground size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <ul className="text-muted-foreground mt-2 space-y-1 text-sm">
                {p.texts.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </a>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}
