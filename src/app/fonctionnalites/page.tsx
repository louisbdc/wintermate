import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { FeatureOverviewCard } from "@/components/ui/FeatureOverviewCard"
import { featureOverviews } from "@/data/feature-overview"

export const metadata: Metadata = {
  title: "Fonctionnalités | Winter Mate",
  description:
    "Découvre toutes les fonctionnalités de Winter Mate : progression, challenges, sorties entre riders et analyse vidéo par des coachs pros.",
}

export default function FonctionnalitesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-transparent pt-32 pb-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h1 className="mb-4 text-4xl font-black uppercase leading-tight md:text-6xl">
                Toutes les{" "}
                <span className="text-neon-blue">fonctionnalités</span>
              </h1>
              <p className="text-lg text-zinc-400">
                Winter Mate regroupe tout ce dont tu as besoin pour progresser,
                te challenger et partager ta passion du ski.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {featureOverviews.map((feature) => (
                <FeatureOverviewCard key={feature.id} feature={feature} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </>
  )
}
