import { leaderboardPreview } from "@/data/challenges"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function LeaderboardPreview() {
  const first = leaderboardPreview[0]
  const second = leaderboardPreview[1]
  const third = leaderboardPreview[2]

  return (
    <section className="border-t border-white/5 bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-extrabold md:text-4xl">
            Leaderboard
          </h2>
          <p className="mx-auto mb-16 max-w-md text-center text-sm text-zinc-500">
            Les riders qui dominent le classement cette semaine.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mx-auto flex max-w-xl items-end justify-center gap-4">
            {/* 2nd place */}
            <div className="flex w-1/3 flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-3xl">
                {second.avatar}
              </div>
              <div className="w-full rounded-t-2xl border border-white/10 bg-zinc-900/50 px-4 py-8 text-center">
                <p className="text-sm font-bold">{second.name}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {second.points.toLocaleString("fr-FR")} pts
                </p>
              </div>
            </div>

            {/* 1st place */}
            <div className="flex w-1/3 flex-col items-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon-orange bg-neon-orange/10 text-4xl shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                {first.avatar}
              </div>
              <div className="w-full rounded-t-2xl border border-neon-orange/30 bg-neon-orange/5 px-4 py-12 text-center">
                <p className="text-lg font-black">{first.name}</p>
                <p className="mt-1 text-sm font-semibold text-neon-orange">
                  {first.points.toLocaleString("fr-FR")} pts
                </p>
              </div>
            </div>

            {/* 3rd place */}
            <div className="flex w-1/3 flex-col items-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-3xl">
                {third.avatar}
              </div>
              <div className="w-full rounded-t-2xl border border-white/10 bg-zinc-900/50 px-4 py-6 text-center">
                <p className="text-sm font-bold">{third.name}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {third.points.toLocaleString("fr-FR")} pts
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
