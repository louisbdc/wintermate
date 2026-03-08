import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TestimonialCard } from "@/components/ui/TestimonialCard"
import { TimelineStep } from "@/components/ui/TimelineStep"
import { DownloadButton } from "@/components/ui/DownloadButton"
import { plans, testimonials, timelineSteps } from "@/data/pricing"

export const metadata: Metadata = {
  title: "Tarifs | Winter Mate",
  description:
    "Commence ton essai gratuit de 3 jours. Accès illimité à la librairie de vidéos et tous les avantages du Winter Mate Club.",
  openGraph: {
    title: "Tarifs | Winter Mate",
    description:
      "Commence ton essai gratuit de 3 jours. Accès illimité à la librairie de vidéos et tous les avantages du Winter Mate Club.",
    images: ["/images/og-image.jpg"],
  },
}

export default function TarifsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-transparent pt-32 pb-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="mx-auto max-w-lg text-3xl leading-tight font-black md:text-5xl">
            Commence ton essai{" "}
            <span className="text-neon-blue">GRATUIT</span> de 3 jours pour
            continuer
          </h1>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-transparent py-12">
        <div className="container mx-auto px-6">
          <h2 className="mb-8 text-xl font-bold">
            Ils en parlent mieux que nous :
          </h2>
        </div>
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:px-[10%]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
          <div className="w-6 shrink-0" />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-transparent py-12">
        <div className="mx-auto max-w-lg px-6">
          {timelineSteps.map((step, i) => (
            <TimelineStep
              key={step.title}
              step={step}
              isLast={i === timelineSteps.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Plan Selection */}
      <section className="bg-transparent py-12">
        <div className="mx-auto max-w-lg px-6">
          <h2 className="mb-8 text-center text-2xl font-black">
            Prêt à changer ta saison ?
          </h2>

          <div className="flex flex-col gap-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex items-center justify-between rounded-2xl border p-6 transition ${
                  plan.highlighted
                    ? "border-neon-blue bg-white/[0.03]"
                    : "border-white/10"
                }`}
              >
                {plan.savings && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neon-blue px-4 py-1 text-[10px] font-bold uppercase text-white">
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

          <p className="mt-6 text-center text-sm text-zinc-400">
            Sans engagement, annulable à tout moment.
          </p>

          <div className="mt-6">
            <DownloadButton label="Essayer GRATUITEMENT" className="btn-hover block w-full rounded-2xl bg-neon-blue py-5 text-center text-sm font-black uppercase tracking-wider text-white transition" />
          </div>

          {plans[0].perDay && (
            <p className="mt-4 text-center text-xs text-zinc-500">
              {plans[0].perDay}
            </p>
          )}
        </div>
      </section>

      {/* Back link */}
      <section className="bg-transparent pb-16">
        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
