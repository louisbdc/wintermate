import type { TimelineEntry } from "@/data/team"

interface TimelineProps {
  readonly entries: readonly TimelineEntry[]
}

export function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative space-y-8 pl-8">
      <div className="absolute bottom-0 left-[17.5px] top-0 w-px bg-gradient-to-b from-neon-blue via-neon-blue/40 to-transparent" />
      {entries.map((entry, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-5 top-1.5 h-3 w-3 rounded-full border-2 border-neon-blue bg-black" />
          <span className="text-xs font-bold uppercase tracking-widest text-neon-blue">
            {entry.year}
          </span>
          <h4 className="mt-1 text-base font-bold text-white">
            {entry.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            {entry.description}
          </p>
        </div>
      ))}
    </div>
  )
}
