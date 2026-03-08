import { sortieStats } from "@/data/sorties"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function SortieStats() {
  return (
    <section className="bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
            {sortieStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
