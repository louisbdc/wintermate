import { features } from "@/data/features"
import { FeatureCard } from "@/components/ui/FeatureCard"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function ConceptSection() {
  return (
    <section id="concept" className="border-b border-white/5 bg-transparent py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.number} delay={index * 150}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
