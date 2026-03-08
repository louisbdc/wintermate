import Link from "next/link"
import type { FeatureOverview } from "@/data/feature-overview"

interface FeatureOverviewCardProps {
  readonly feature: FeatureOverview
}

export function FeatureOverviewCard({ feature }: FeatureOverviewCardProps) {
  return (
    <Link
      href={feature.href}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition hover:border-white/20"
    >
      {/* Orange accent line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-neon-orange" />

      <h3 className="mb-3 text-2xl font-black uppercase tracking-tight">
        {feature.title}
      </h3>
      <p className="mb-6 text-sm leading-relaxed text-zinc-400">
        {feature.description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-bold text-neon-orange transition group-hover:gap-2">
        Découvrir
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  )
}
