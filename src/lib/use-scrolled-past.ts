import { useEffect, useState } from 'react'

const HEADER_HEIGHT = 56

/** True once the element with the given id has scrolled out of view through the top (under the sticky header). */
export function useScrolledPast(id: string) {
  const [past, setPast] = useState(false)
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setPast(!entry.isIntersecting && entry.boundingClientRect.top < HEADER_HEIGHT),
      { rootMargin: `-${HEADER_HEIGHT}px 0px 0px 0px` },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [id])
  return past
}
