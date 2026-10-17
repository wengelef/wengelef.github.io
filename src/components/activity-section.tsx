import { useEffect, useRef } from 'react'
import { ActivityCalendar, type Activity } from 'react-activity-calendar'
import 'react-activity-calendar/tooltips.css'

import { Section } from '@/components/section'
import { BlurFade } from '@/components/ui/blur-fade'
import contributions from '@/data/contributions.json'
import { useIsDark } from '@/lib/use-is-dark'

const data = contributions as Activity[]
const total = data.reduce((sum, d) => sum + d.count, 0)

export function ActivitySection() {
  const dark = useIsDark()
  const scroller = useRef<HTMLDivElement>(null)
  // Start at the most recent weeks when the calendar is wider than the screen.
  useEffect(() => {
    const el = scroller.current?.querySelector<HTMLElement>('.react-activity-calendar__scroll-container')
    if (!el) return
    const toEnd = () => el.scrollTo({ left: el.scrollWidth })
    const observer = new ResizeObserver(toEnd)
    observer.observe(el)
    toEnd()
    return () => observer.disconnect()
  }, [])
  if (data.length === 0) return null

  return (
    <Section id="activity" title="Activity">
      <BlurFade inView>
        <div ref={scroller} className="pb-2">
          <ActivityCalendar
            data={data}
            colorScheme={dark ? 'dark' : 'light'}
            theme={{
              light: ['#ebebeb', '#171717'],
              dark: ['#262626', '#fafafa'],
            }}
            showTotalCount={false}
            blockSize={12}
            blockMargin={4}
            tooltips={{
              activity: {
                text: (a) => `${a.count} contribution${a.count === 1 ? '' : 's'} on ${a.date}`,
              },
            }}
          />
        </div>
        <p className="text-muted-foreground mt-3 text-sm">
          {total} contributions in the last year on{' '}
          <a
            href="https://github.com/wengelef"
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            GitHub
          </a>
        </p>
      </BlurFade>
    </Section>
  )
}
