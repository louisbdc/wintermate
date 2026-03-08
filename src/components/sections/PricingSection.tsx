import { plans } from "@/data/pricing"
import { DownloadButton } from "@/components/ui/DownloadButton"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function PricingSection() {
  return (
    <section className="glow-top overflow-hidden bg-transparent py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-4xl font-black uppercase leading-tight md:text-6xl">
              Prêt à changer <br />
              <span className="text-neon-orange">ta saison</span> ?
            </h2>
            <p className="mb-12 text-lg text-zinc-400">
              Commence ton essai{" "}
              <span className="font-bold text-neon-orange">GRATUIT</span> de 3
              jours
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mx-auto mb-8 flex max-w-lg flex-col gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex items-center justify-between rounded-2xl border p-6 transition ${
                    plan.highlighted
                      ? "border-neon-orange bg-white/[0.03]"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {plan.savings && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neon-orange px-4 py-1 text-[10px] font-bold uppercase text-white">
                      {plan.savings}
                    </span>
                  )}
                  <p className="text-lg font-bold">{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    {plan.originalPrice && plan.savings && (
                      <span className="text-sm text-zinc-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className="text-xl font-black">{plan.price}</span>
                    <span className="text-sm text-zinc-400">{plan.suffix}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mb-6 text-sm text-zinc-400">
              Sans engagement, annulable à tout moment.
            </p>

            <DownloadButton label="Essayer GRATUITEMENT" />

            {plans[0].perDay && (
              <p className="mt-4 text-xs text-zinc-500">{plans[0].perDay}</p>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
