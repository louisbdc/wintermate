import { DownloadButton } from "@/components/ui/DownloadButton"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function SortiesHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-transparent pt-28 pb-20">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-7xl">
            Ne ride plus{" "}
            <span className="italic text-neon-blue">jamais seul</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            Planifie des sorties, partage les frais et rencontre de nouveaux
            riders. Organise tes sessions de ski en quelques clics.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex justify-center">
            <DownloadButton label="REJOINDRE LA COMMUNAUTÉ" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
