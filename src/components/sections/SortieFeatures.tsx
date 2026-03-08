import { sortieFeatures } from "@/data/sorties"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function SortieFeatures() {
  return (
    <section className="border-y border-white/5 bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-16 text-center text-3xl font-extrabold md:text-5xl">
            Comment ça{" "}
            <span className="italic text-neon-orange">marche</span> ?
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-3">
          {sortieFeatures.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 150}>
              <div className="space-y-4">
                <div
                  className={`text-4xl font-black ${
                    feature.highlighted
                      ? "text-neon-orange"
                      : "text-white"
                  }`}
                >
                  {feature.number}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tighter">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
