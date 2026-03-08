import type { Metric } from "@/data/debriefing"

interface MetricCardProps {
  readonly metric: Metric
}

const STATUS_COLORS = {
  optimal: "text-green-500 border-green-500/30",
  attention: "text-neon-blue border-neon-blue/30",
  critique: "text-red-500 border-red-500/30",
} as const

const STATUS_BG = {
  optimal: "bg-green-500",
  attention: "bg-neon-blue",
  critique: "bg-red-500",
} as const

export function MetricCard({ metric }: MetricCardProps) {
  const colors = STATUS_COLORS[metric.status]
  const progressPercent = Math.min((metric.value / metric.optimal) * 100, 100)

  return (
    <div
      className={`rounded-2xl border p-6 ${colors.split(" ").slice(1).join(" ")} bg-zinc-900`}
    >
      <div className="mb-1 flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${STATUS_BG[metric.status]}`} />
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {metric.label}
        </p>
      </div>
      <p className="mb-3 text-3xl font-black">
        {metric.value}
        <span className="text-sm font-normal text-zinc-500">
          {metric.unit}
        </span>
      </p>
      <div className="mb-3 h-1 overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full ${STATUS_BG[metric.status]}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="text-xs leading-relaxed text-zinc-500">
        {metric.description}
      </p>
      <p className="mt-2 text-[10px] text-zinc-600">
        Optimal : {metric.optimal}
        {metric.unit}
      </p>
    </div>
  )
}
