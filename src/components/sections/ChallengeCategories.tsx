import { challengeCategories } from "@/data/challenges"
import { ChallengeCategoryCard } from "@/components/ui/ChallengeCategoryCard"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function ChallengeCategories() {
  return (
    <section className="border-t border-white/5 bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            Choisis ta cat&eacute;gorie
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-sm text-zinc-500">
            Quatre disciplines, un seul objectif&nbsp;: prouver que tu es le
            meilleur.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {challengeCategories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 100}>
              <ChallengeCategoryCard category={category} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
