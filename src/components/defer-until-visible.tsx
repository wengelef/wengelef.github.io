import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react'

// Renders (and so loads and evaluates) heavy sections only once they are near the viewport.
// The placeholder keeps the anchor id and an approximate height so deep links and scroll position stay stable.
export function DeferUntilVisible({
  id,
  minHeight,
  children,
}: {
  id: string
  minHeight: number
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '600px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const placeholder = <div ref={ref} id={id} style={{ minHeight }} className="scroll-mt-14" />
  return visible ? <Suspense fallback={placeholder}>{children}</Suspense> : placeholder
}
