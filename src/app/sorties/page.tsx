import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SortiesHero } from "@/components/sections/SortiesHero"
import { MapPreview } from "@/components/sections/MapPreview"
import { SortieFeatures } from "@/components/sections/SortieFeatures"
import { SortieStats } from "@/components/sections/SortieStats"
import { DownloadButton } from "@/components/ui/DownloadButton"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const metadata: Metadata = {
  title: "Sorties - Winter Mate | Trouve des riders et organise tes sessions",
  description:
    "Rejoins la communauté Winter Mate : trouve des riders près de toi, organise des sorties ski et snowboard, et ne ride plus jamais seul.",
}

export default function SortiesPage() {
  return (
    <>
      <Navbar />
      <SortiesHero />
      <MapPreview />
      <SortieFeatures />
      <SortieStats />

      {/* Final CTA */}
      <section className="border-t border-white/5 bg-transparent py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
              Prêt à rider{" "}
              <span className="italic text-neon-blue">ensemble</span> ?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mx-auto mb-10 max-w-lg text-zinc-400">
              Télécharge Winter Mate, rejoins la communauté et trouve tes
              prochains compagnons de ride en quelques secondes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex justify-center">
              <DownloadButton label="TÉLÉCHARGER WINTER MATE" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
