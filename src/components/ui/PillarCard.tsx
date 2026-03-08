import type { Pillar } from "@/data/progression"

interface PillarCardProps {
  readonly pillar: Pillar
}

function PillarIcon({ icon }: { readonly icon: Pillar["icon"] }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-blue/5">
      {icon === "video" && (
        <svg className="h-7 w-7 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      )}
      {icon === "test" && (
        <svg className="h-7 w-7 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      )}
      {icon === "analysis" && (
        <svg className="h-7 w-7 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      )}
    </div>
  )
}

export function PillarCard({ pillar }: PillarCardProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-zinc-900 p-8 transition-transform duration-500 hover:scale-[1.02]">
      <PillarIcon icon={pillar.icon} />

      <h3 className="mt-6 text-xl font-bold uppercase tracking-tight">
        {pillar.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        {pillar.description}
      </p>

      <ul className="mt-6 space-y-3">
        {pillar.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
