import { motion, useScroll, useSpring } from 'motion/react'
import { useRef } from 'react'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import { jobs } from '@/data/cv'

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 65%', 'end 65%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <Section id="experience" title="Experience">
      <div ref={ref} className="relative">
        {/* rail + scroll-linked beam */}
        <div className="bg-border absolute top-2 bottom-2 left-[7px] w-0.5 md:left-[11px]">
          <motion.div
            style={{ scaleY: progress }}
            className="absolute inset-0 origin-top bg-gradient-to-b from-sky-400 via-violet-500 to-fuchsia-500"
          />
        </div>

        <ol className="space-y-12">
          {jobs.map((job) => (
            <li key={job.companyName} className="relative pl-9 md:pl-14">
              <span className="bg-background absolute top-1.5 left-0 flex size-4 items-center justify-center rounded-full border-2 md:size-6">
                <span
                  className={
                    job.current
                      ? 'size-2 animate-pulse rounded-full bg-emerald-500 md:size-3'
                      : 'bg-brand size-1.5 rounded-full md:size-2'
                  }
                />
              </span>
              <BlurFade inView>
                <div className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                  {job.time}
                </div>
                <h3 className="mt-1 text-2xl font-semibold">{job.companyName}</h3>
                <div className="text-muted-foreground">{job.title}</div>
                <ul className="mt-4 space-y-2">
                  {job.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-snug">
                      <span className="bg-muted-foreground mt-2 size-1.5 shrink-0 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </BlurFade>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
