import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProgressionHero } from "@/components/sections/ProgressionHero"
import { ThreePillars } from "@/components/sections/ThreePillars"
import { VideoLibraryPreview } from "@/components/sections/VideoLibraryPreview"
import { MethodologyTimeline } from "@/components/sections/MethodologyTimeline"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { DownloadButton } from "@/components/ui/DownloadButton"

export const metadata: Metadata = {
  title: "Progression - Winter Mate | Librairie vidéo, test de niveau et analyse",
  description:
    "Progresse à chaque descente grâce à la librairie vidéo 4K, le test de niveau personnalisé et l'analyse vidéo par des coachs professionnels. Découvre la méthode Winter Mate.",
  openGraph: {
    title: "Progression - Winter Mate",
    description:
      "Librairie vidéo 4K, test de niveau et analyse personnalisée pour progresser en ski.",
    type: "website",
  },
}

export default function ProgressionPage() {
  return (
    <>
      <Navbar />
      <ProgressionHero />
      <ThreePillars />
      <VideoLibraryPreview />
      <MethodologyTimeline />

      <section className="bg-transparent py-24">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-4xl font-black uppercase md:text-6xl">
              Prêt à <span className="text-neon-orange">progresser</span> ?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-400">
              Rejoins plus de 430 000 skieurs qui utilisent Winter Mate pour
              améliorer leur technique chaque saison.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <DownloadButton
              label="Télécharger Winter Mate"
              className="btn-hover inline-block rounded-2xl bg-neon-orange px-10 py-5 text-sm font-black uppercase tracking-wider text-white transition"
            />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
