'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

interface StatCounterProps {
  value: string
  label: string
}

export function StatCounter({ value, label }: StatCounterProps) {
  const reducedMotion = useReducedMotion()
  const [displayed, setDisplayed] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  const numericPart = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (reducedMotion) { setDisplayed(value); return }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1200
          const start = performance.now()
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayed(Math.floor(eased * numericPart) + suffix)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [numericPart, suffix, value, reducedMotion])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-[--accent] mb-1">{displayed}</div>
      <div className="text-sm text-[--text-secondary]">{label}</div>
    </div>
  )
}
