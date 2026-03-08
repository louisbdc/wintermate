import { methodologySteps } from "@/data/progression"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function MethodologyTimeline() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-4xl font-black uppercase md:text-6xl">
            La méthode{" "}
            <span className="text-neon-orange">Winter Mate</span>.
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-zinc-400">
            Un cycle d&apos;apprentissage simple et efficace pour progresser à
            chaque session.
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-xl">
          {methodologySteps.map((step, index) => {
            const isLast = index === methodologySteps.length - 1

            return (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neon-orange text-sm font-black text-white">
                      {step.number}
                    </div>
                    {!isLast && (
                      <div className="mt-2 h-full w-px bg-zinc-800" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
