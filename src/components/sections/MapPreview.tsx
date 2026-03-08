import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { FranceMap } from "@/components/ui/FranceMap"

const SORTIE_CARDS = [
  {
    station: "Val d'Isere",
    date: "Dim. 15 mars",
    level: "Expert",
    spots: "2/6",
    top: "8%",
    left: "65%",
    delay: 0.5,
  },
  {
    station: "Chamrousse",
    date: "Sam. 14 mars",
    level: "Intermediaire",
    spots: "3/4",
    top: "55%",
    left: "3%",
    delay: 1.0,
  },
  {
    station: "Cauterets",
    date: "Lun. 16 mars",
    level: "Tous niveaux",
    spots: "1/8",
    top: "75%",
    left: "55%",
    delay: 1.5,
  },
] as const

export function MapPreview() {
  return (
    <section className="bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-extrabold md:text-5xl">
            La carte des{" "}
            <span className="italic text-neon-blue">sorties</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="mx-auto mb-12 max-w-xl text-center text-zinc-400">
            Retrouve toutes les sorties planifiees pres de chez toi.
            Rejoins un groupe, partage les frais et rencontre de nouveaux
            riders.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-2 md:p-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-950">
              {/* Map */}
              <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                <FranceMap className="h-full w-auto max-w-full" />
              </div>

              {/* Gradient edges */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/40" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/30 via-transparent to-zinc-950/30" />

              {/* Floating sortie cards */}
              {SORTIE_CARDS.map((card) => (
                <div
                  key={card.station}
                  className="absolute hidden md:block"
                  style={{
                    top: card.top,
                    left: card.left,
                    animation: "float 4s ease-in-out infinite",
                    animationDelay: `${card.delay}s`,
                  }}
                >
                  <div className="w-48 rounded-xl border border-white/10 bg-zinc-900/90 p-3 shadow-xl backdrop-blur-sm">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-neon-blue">
                        {card.date}
                      </span>
                      <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-zinc-300">
                        {card.level}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-white">
                      {card.station}
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500">
                        Places : {card.spots}
                      </span>
                      <span className="text-[10px] font-semibold text-neon-blue">
                        Rejoindre →
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800/80 px-4 py-2 text-xs font-bold backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-neon-blue" />
                45+ stations
              </div>

              <div className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800/80 px-4 py-2 text-xs font-bold backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Sorties disponibles
              </div>

              {/* Search bar */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800/80 px-5 py-2.5 backdrop-blur-sm">
                  <svg
                    className="h-3.5 w-3.5 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="text-xs text-zinc-500">
                    Rechercher une station...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
