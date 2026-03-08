import Link from "next/link"
import type { Feature } from "@/data/features"

interface FeatureCardProps {
  readonly feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const content = (
    <div className="space-y-4">
      <div className="text-4xl font-black text-white transition-colors duration-300 group-hover:text-neon-blue">
        {feature.number}
      </div>
      <h3 className="text-2xl font-bold uppercase tracking-tighter">
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500">
        {feature.description}
      </p>
      {feature.href && (
        <span className="inline-flex items-center gap-1 text-sm font-bold text-neon-blue">
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
      )}
    </div>
  )

  if (feature.href) {
    return (
      <Link href={feature.href} className="group">
        {content}
      </Link>
    )
  }

  return <div className="group">{content}</div>
}
