import { challengeSteps } from "@/data/challenges"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function HowChallengesWork() {
  return (
    <section className="border-t border-white/5 bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            Comment &ccedil;a marche
          </h2>
          <p className="mx-auto mb-16 max-w-md text-center text-sm text-zinc-500">
            Du d&eacute;fi au podium en 4 &eacute;tapes simples.
          </p>
        </ScrollReveal>

        <div className="mx-auto max-w-2xl">
          {challengeSteps.map((step, index) => {
            const isLast = index === challengeSteps.length - 1

            return (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="flex gap-6">
                  {/* Timeline column */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-neon-blue bg-neon-blue/10 font-montserrat text-sm font-black text-neon-blue">
                      {step.number}
                    </div>
                    {!isLast && (
                      <div className="my-2 h-full w-px bg-gradient-to-b from-neon-blue/40 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={isLast ? "pb-0" : "pb-10"}>
                    <h3 className="mb-1 text-lg font-bold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
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
