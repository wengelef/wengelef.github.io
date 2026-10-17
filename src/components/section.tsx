import type { ReactNode } from 'react'

import { BlurFade } from '@/components/ui/blur-fade'

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-14 px-4 py-14">
      <BlurFade inView>
        <h2 className="mb-8 text-3xl font-bold tracking-tight">{title}</h2>
      </BlurFade>
      {children}
    </section>
  )
}
