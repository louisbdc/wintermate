import Image from "next/image"
import type { DebriefingSession } from "@/data/debriefing"

interface VideoAnalysisProps {
  readonly session: DebriefingSession
}

const STATUS_COLORS = {
  optimal: "text-green-400",
  attention: "text-neon-orange",
  critique: "text-red-400",
} as const

export function VideoAnalysis({ session }: VideoAnalysisProps) {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter md:text-4xl">
          Analyse Vidéo
        </h2>

        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900">
            <span className="absolute top-4 left-4 z-30 rounded-full border border-neon-orange/30 bg-black/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-neon-orange backdrop-blur-md">
              Analyse Pro
            </span>

            <div className="relative aspect-[4/5]">
              <Image
                src={session.imageSrc}
                alt="Analyse technique"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />

              <div className="scan-line" />

              {/* Analysis points */}
              <div className="analysis-point top-[38%] left-[70%]" />
              <div className="analysis-point top-[46%] left-[65%]" />
              <div className="analysis-point top-[57%] left-[58%]" />
              <div className="analysis-point top-[68%] left-[52%]" />
              <div className="analysis-point top-[77%] left-[46%]" />

              {/* Skeleton overlay */}
              <svg
                className="absolute inset-0 h-full w-full text-neon-orange opacity-60"
                viewBox="0 0 100 100"
              >
                <line x1="70" y1="38" x2="65" y2="46" stroke="currentColor" strokeWidth="0.7" />
                <line x1="65" y1="46" x2="58" y2="57" stroke="currentColor" strokeWidth="0.7" />
                <line x1="58" y1="57" x2="52" y2="68" stroke="currentColor" strokeWidth="0.7" />
                <line x1="52" y1="68" x2="46" y2="77" stroke="currentColor" strokeWidth="0.7" />
                <line x1="46" y1="77" x2="32" y2="82" stroke="currentColor" strokeWidth="0.4" />
                <path d="M 48.8 72.8 A 8 8 0 0 0 41.3 78.7" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 0.8" />
              </svg>
            </div>
          </div>

          {/* Joint angles row */}
          <div className="mt-6 flex flex-wrap gap-3">
            {session.jointAngles.map((joint) => (
              <div
                key={joint.joint}
                className="rounded-xl border border-white/10 bg-black/80 px-4 py-2 backdrop-blur-md"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  {joint.joint}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-lg font-black ${STATUS_COLORS[joint.status]}`}>
                    {joint.angle}°
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    opt. {joint.optimal}°
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
