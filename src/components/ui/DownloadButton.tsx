"use client"

import { useEffect, useState } from "react"
import { STORE_LINKS } from "@/data/store-links"

type Platform = "ios" | "android" | "unknown"

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown"
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod|macintosh/.test(ua) && "ontouchend" in document) {
    return "ios"
  }
  if (/android/.test(ua)) return "android"
  return "unknown"
}

function getStoreUrl(platform: Platform): string {
  if (platform === "ios") return STORE_LINKS.appStore
  if (platform === "android") return STORE_LINKS.playStore
  return STORE_LINKS.appStore
}

function getStoreLabel(platform: Platform): string {
  if (platform === "android") return "Ouvrir sur Google Play"
  return "Ouvrir sur l'App Store"
}

interface DownloadButtonProps {
  readonly label?: string
  readonly className?: string
}

export function DownloadButton({ label, className }: DownloadButtonProps) {
  const [platform, setPlatform] = useState<Platform>("unknown")

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  const url = getStoreUrl(platform)
  const text = label ?? getStoreLabel(platform)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "btn-hover inline-block w-full max-w-lg rounded-2xl bg-neon-orange py-5 text-center text-sm font-black uppercase tracking-wider text-white transition"
      }
    >
      {text}
    </a>
  )
}
