import type { DebriefingSession } from "@/data/debriefing"

interface ActionPlanProps {
  readonly session: DebriefingSession
}

const DIFFICULTY_CONFIG = {
  debutant: { label: "Débutant", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  intermediaire: { label: "Intermédiaire", color: "bg-neon-orange/10 text-neon-orange border-neon-orange/20" },
  avance: { label: "Avancé", color: "bg-red-500/10 text-red-400 border-red-500/20" },
} as const

export function ActionPlan({ session }: ActionPlanProps) {
  return (
    <section className="border-t border-white/5 bg-transparent py-16">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-2xl font-black uppercase tracking-tighter md:text-4xl">
          Plan d&apos;Action
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {session.exercises.map((exercise) => {
            const difficulty = DIFFICULTY_CONFIG[exercise.difficulty]
            return (
              <div
                key={exercise.id}
                className="rounded-2xl border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase ${difficulty.color}`}
                  >
                    {difficulty.label}
                  </span>
                  <span className="text-xs text-zinc-500">{exercise.duration}</span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{exercise.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {exercise.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
