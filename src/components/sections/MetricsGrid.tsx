import type { DebriefingSession } from "@/data/debriefing"
import { MetricCard } from "@/components/ui/MetricCard"

interface MetricsGridProps {
  readonly session: DebriefingSession
}

export function MetricsGrid({ session }: MetricsGridProps) {
  return (
    <section className="border-t border-white/5 bg-black py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter md:text-4xl">
          Métriques Techniques
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {session.metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  )
}
