import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { DownloadButton } from "@/components/ui/DownloadButton"
import { ChallengesHero } from "@/components/sections/ChallengesHero"
import { ChallengeCategories } from "@/components/sections/ChallengeCategories"
import { HowChallengesWork } from "@/components/sections/HowChallengesWork"
import { LeaderboardPreview } from "@/components/sections/LeaderboardPreview"

export const metadata: Metadata = {
  title: "Challenges | Winter Mate",
  description:
    "Participe aux défis communautaires Winter Mate. Freestyle, freeride, carving ou best fail : filme ta run et grimpe au classement.",
}

export default function ChallengesPage() {
  return (
    <>
      <Navbar />
      <ChallengesHero />
      <ChallengeCategories />
      <HowChallengesWork />
      <LeaderboardPreview />

      {/* CTA Section */}
      <section className="border-t border-white/5 bg-black py-24">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Pr&ecirc;t &agrave; relever le d&eacute;fi&nbsp;?
          </h2>
          <p className="mb-10 text-sm text-zinc-400">
            T&eacute;l&eacute;charge Winter Mate, choisis un challenge et montre &agrave; la
            communaut&eacute; ce que tu sais faire.
          </p>
          <DownloadButton
            label="Télécharger Winter Mate"
            className="btn-hover inline-block w-full max-w-md rounded-2xl bg-neon-orange py-5 text-center text-sm font-black uppercase tracking-wider text-white transition"
          />
        </div>
      </section>

      {/* Back link */}
      <section className="bg-black pb-16">
        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Retour &agrave; l&apos;accueil
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
