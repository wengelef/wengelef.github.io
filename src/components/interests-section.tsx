import { Dumbbell, Gamepad2, PawPrint, Plane, TrendingUp, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { Section } from '@/components/section'
import { BentoGrid } from '@/components/ui/bento-grid'
import { BlurFade } from '@/components/ui/blur-fade'
import { DottedMap } from '@/components/ui/dotted-map'
import { MagicCard } from '@/components/ui/magic-card'
import { Marquee } from '@/components/ui/marquee'
import { interests } from '@/data/cv'
import { useIsDark } from '@/lib/use-is-dark'
import { cn } from '@/lib/utils'

const photos = Object.values(
  import.meta.glob<string>('@/assets/ari/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' }),
)

function Tile({
  icon: Icon,
  title,
  text,
  tone,
  className,
  delay,
  children,
}: {
  icon: LucideIcon
  title: string
  text: string
  tone: string
  className?: string
  delay: number
  children?: ReactNode
}) {
  const dark = useIsDark()
  return (
    <BlurFade inView delay={delay} className={cn('h-full', className)}>
      <MagicCard
        className="bg-card h-full rounded-xl border [&>div:last-child]:h-full"
        gradientColor={dark ? '#3b2a6b' : '#e9e0ff'}
        gradientFrom="#8b5cf6"
        gradientTo="#c4b5fd"
      >
        <div className="relative flex h-full flex-col overflow-hidden p-5">
          {children}
          <div className="relative mt-auto">
            <span className={cn('mb-3 flex size-10 items-center justify-center rounded-full', tone)}>
              <Icon className="size-5" />
            </span>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground mt-1 text-sm">{text}</p>
          </div>
        </div>
      </MagicCard>
    </BlurFade>
  )
}

export function InterestsSection() {
  const { ari, fitness, finance, travel, gaming } = interests
  return (
    <Section id="interests" title="Interests">
      <BentoGrid className="auto-rows-[15rem] grid-cols-1 md:grid-cols-3">
        <Tile
          icon={PawPrint}
          {...ari}
          tone="bg-amber-500/10 text-amber-600 dark:text-amber-400"
          delay={0}
          className="row-span-2 md:col-span-2"
        >
          {photos.length === 0 && (
            <PawPrint className="text-muted-foreground/10 absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 -rotate-12" />
          )}
          {photos.length > 0 && (
            <Marquee pauseOnHover className="mb-4 [--duration:30s] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {photos.map((src) => (
                <img key={src} src={src} alt="Ari" loading="lazy" className="h-64 w-auto rounded-lg md:h-72 object-cover" />
              ))}
            </Marquee>
          )}
        </Tile>
        <Tile icon={Dumbbell} {...fitness} tone="bg-rose-500/10 text-rose-600 dark:text-rose-400" delay={0.1} />
        <Tile icon={TrendingUp} {...finance} tone="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" delay={0.2} />
        <Tile icon={Gamepad2} {...gaming} tone="bg-sky-500/10 text-sky-600 dark:text-sky-400" delay={0.3} />
        <Tile
          icon={Plane}
          {...travel}
          tone="bg-violet-500/10 text-violet-600 dark:text-violet-400"
          delay={0.4}
          className="md:col-span-2"
        >
          <DottedMap
            preserveAspectRatio="xMidYMid slice"
            className="text-foreground/25 pointer-events-none absolute inset-0 size-full [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
            markers={[{ lat: 50.8, lng: 7.2, size: 0.8 }]}
            markerColor="#8b5cf6"
            pulse
          />
        </Tile>
      </BentoGrid>
    </Section>
  )
}
