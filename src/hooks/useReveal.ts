import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    const el = ref.current
    if (!el) return
    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child))
    return () => observer.disconnect()
  }, [])

  return ref
}
