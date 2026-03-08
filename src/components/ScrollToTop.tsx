"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  useEffect(() => {
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a")
      if (!target) return
      const href = target.getAttribute("href")
      if (!href?.includes("#")) return

      const hash = href.split("#")[1]
      if (!hash) return

      const el = document.getElementById(hash)
      if (!el) return

      e.preventDefault()
      el.scrollIntoView({ behavior: "smooth" })
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return null
}
