"use client"

import { useEffect, useRef, useState } from "react"

interface UseScrollRevealOptions {
  readonly threshold?: number
  readonly rootMargin?: string
}

export function useScrollReveal({
  threshold = 0.2,
  rootMargin = "0px",
}: UseScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}
