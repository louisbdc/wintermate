import { pillars } from "@/data/progression"
import { PillarCard } from "@/components/ui/PillarCard"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function ThreePillars() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-4xl font-black uppercase md:text-6xl">
            3 piliers pour{" "}
            <span className="text-neon-orange">progresser</span>.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-zinc-400">
            Une méthode complète qui combine théorie, pratique et analyse pour
            une progression rapide et durable.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.id} delay={index * 150}>
              <PillarCard pillar={pillar} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
