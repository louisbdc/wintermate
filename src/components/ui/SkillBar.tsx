"use client"

import { useEffect, useRef, useState } from "react"
import type { Skill } from "@/data/team"

interface SkillBarProps {
  readonly skill: Skill
  readonly index: number
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-200">
          {skill.name}
        </span>
        <span className="text-sm font-bold text-neon-blue">{skill.level}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-neon-blue to-sky-400 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  )
}
