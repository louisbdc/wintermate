"use client"

import { useEffect, useRef, useState, useCallback } from "react"

function SkierIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-blue/30 bg-zinc-950 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="-translate-x-px text-neon-blue"
      >
        <circle cx="14.5" cy="3" r="2.5" fill="currentColor" />
        <path
          d="M14.5 5.5L11 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11 12L14 16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 12L7.5 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12.5 8L17.5 11.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 17.5L16 20.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function buildCurvePath(
  points: readonly { x: number; y: number }[]
): string {
  if (points.length < 2) return ""
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const midY = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`
  }
  return d
}

interface LayoutData {
  readonly width: number
  readonly height: number
  readonly pathD: string
  readonly points: readonly { x: number; y: number }[]
}

export function SkierTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const [layout, setLayout] = useState<LayoutData | null>(null)
  const [totalLength, setTotalLength] = useState(0)
  const [progress, setProgress] = useState(0)
  const [skierPos, setSkierPos] = useState<{
    x: number
    y: number
  } | null>(null)

  const measure = useCallback(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return
    const w = parent.offsetWidth
    const h = parent.offsetHeight
    if (w === 0 || h === 0) return

    const features = parent.querySelectorAll("[data-feature]")
    if (features.length < 2) return

    const points = Array.from(features).map((f, i) => {
      const fe = f as HTMLElement
      return {
        x: (i % 2 === 0 ? 0.20 : 0.80) * w,
        y: fe.offsetTop + fe.offsetHeight / 2,
      }
    })

    setLayout({
      width: w,
      height: h,
      pathD: buildCurvePath(points),
      points,
    })
  }, [])

  useEffect(() => {
    if (pathRef.current && layout?.pathD) {
      setTotalLength(pathRef.current.getTotalLength())
    }
  }, [layout?.pathD])

  const handleScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const vc = window.innerHeight / 2
    const p = Math.max(0, Math.min(1, (vc - rect.top) / rect.height))
    setProgress(p)

    if (pathRef.current && totalLength > 0) {
      const pt = pathRef.current.getPointAtLength(p * totalLength)
      setSkierPos({ x: pt.x, y: pt.y })
    }
  }, [totalLength])

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return
    const ro = new ResizeObserver(() => measure())
    ro.observe(parent)
    measure()
    return () => ro.disconnect()
  }, [measure])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  if (!layout) {
    return (
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 hidden md:block"
      />
    )
  }

  const dashOffset =
    totalLength > 0 ? totalLength * (1 - progress) : totalLength

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 hidden md:block"
    >
      <svg
        width={layout.width}
        height={layout.height}
        className="absolute inset-0"
        fill="none"
      >
        {/* Background path */}
        <path
          ref={pathRef}
          d={layout.pathD}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
        />

        {totalLength > 0 && (
          <>
            {/* Active glow */}
            <path
              d={layout.pathD}
              stroke="rgba(59,130,246,0.1)"
              strokeWidth="8"
              strokeDasharray={totalLength}
              strokeDashoffset={dashOffset}
            />

            {/* Active path */}
            <path
              d={layout.pathD}
              stroke="rgba(59,130,246,0.4)"
              strokeWidth="2"
              strokeDasharray={totalLength}
              strokeDashoffset={dashOffset}
            />
          </>
        )}

        {/* Feature dots */}
        {layout.points.map((pt, i) => {
          const isActive =
            layout.height > 0 && progress >= pt.y / layout.height - 0.01
          return (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={5}
              fill={isActive ? "#3B82F6" : "#09090b"}
              stroke={isActive ? "#3B82F6" : "rgba(255,255,255,0.2)"}
              strokeWidth={2}
            />
          )
        })}
      </svg>

      {/* Skier icon */}
      {skierPos && (
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: skierPos.x, top: skierPos.y }}
        >
          <SkierIcon />
        </div>
      )}
    </div>
  )
}
