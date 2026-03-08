import Link from "next/link"
import type { DebriefingSession } from "@/data/debriefing"
import { ScoreRing } from "@/components/ui/ScoreRing"

interface DebriefingHeroProps {
  readonly session: DebriefingSession
}

export function DebriefingHero({ session }: DebriefingHeroProps) {
  return (
    <section className="border-b border-white/5 bg-transparent pt-28 pb-16">
      <div className="container mx-auto px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour
        </Link>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm font-bold">
                {session.skierInitials}
              </div>
              <div className="flex gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                  {session.date}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                  {session.location}
                </span>
                <span className="rounded-full border border-neon-orange/30 bg-neon-orange/10 px-3 py-1 text-xs text-neon-orange">
                  {session.discipline}
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-black uppercase md:text-6xl">
              Débriefing
            </h1>
            <p className="mt-2 text-lg text-zinc-400">
              Analyse technique de{" "}
              <span className="font-bold text-white">{session.skierName}</span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ScoreRing score={session.globalScore} />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Score Global
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
