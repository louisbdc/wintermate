"use client"

import { useState } from "react"
import type { FaqItem } from "@/data/faq"

interface FaqAccordionItemProps {
  readonly item: FaqItem
}

export function FaqAccordionItem({ item }: FaqAccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/5">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-sm font-bold md:text-base">
          {item.question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-neon-blue transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-zinc-400">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}
