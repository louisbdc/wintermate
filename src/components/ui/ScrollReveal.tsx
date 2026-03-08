"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

type Direction = "up" | "left" | "right" | "none"

interface ScrollRevealProps {
  readonly children: ReactNode
  readonly delay?: number
  readonly direction?: Direction
  readonly className?: string
}

function getTransform(direction: Direction): string {
  switch (direction) {
    case "up":
      return "translateY(30px)"
    case "left":
      return "translateX(-30px)"
    case "right":
      return "translateX(30px)"
    case "none":
      return "none"
  }
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : getTransform(direction),
        transition: `opacity 0.6s ease-out, transform 0.6s ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
