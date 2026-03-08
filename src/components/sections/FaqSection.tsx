import { faqItems } from "@/data/faq"
import { FaqAccordionItem } from "@/components/ui/FaqAccordionItem"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function FaqSection() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-black uppercase leading-tight md:text-6xl">
              Questions{" "}
              <span className="text-neon-orange">fréquentes</span>
            </h2>
            <p className="mb-12 text-lg text-zinc-400">
              Tout ce que tu dois savoir avant de te lancer.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/5 bg-zinc-900/30 px-6 md:px-8">
            {faqItems.map((item) => (
              <FaqAccordionItem key={item.question} item={item} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
