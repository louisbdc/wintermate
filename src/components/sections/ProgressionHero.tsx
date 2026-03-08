import Link from "next/link"
import { DownloadButton } from "@/components/ui/DownloadButton"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function ProgressionHero() {
  return (
    <header className="relative flex min-h-[70vh] items-center bg-transparent pt-24 pb-16">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-7xl">
            Progresse à{" "}
            <span className="italic text-neon-orange">chaque descente</span>.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Librairie vidéo, test de niveau et analyse personnalisée : tout ce
            qu&apos;il faut pour passer au niveau supérieur.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/debriefing/demo"
              className="btn-hover inline-block rounded-2xl bg-neon-orange px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition"
            >
              Voir un exemple d&apos;analyse
            </Link>
            <DownloadButton
              label="Télécharger l'app"
              className="btn-hover inline-block rounded-2xl border border-white/10 bg-zinc-900 px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:border-white/20"
            />
          </div>
        </ScrollReveal>
      </div>
    </header>
  )
}
