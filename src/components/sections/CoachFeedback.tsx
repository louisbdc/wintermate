import Image from "next/image"
import type { DebriefingSession } from "@/data/debriefing"
import { DownloadButton } from "@/components/ui/DownloadButton"

interface CoachFeedbackProps {
  readonly session: DebriefingSession
}

const CATEGORY_CONFIG = {
  positif: { label: "Points positifs", color: "bg-green-500", textColor: "text-green-400" },
  amelioration: { label: "Axes d'amélioration", color: "bg-neon-orange", textColor: "text-neon-orange" },
  exercice: { label: "Exercices", color: "bg-blue-500", textColor: "text-blue-400" },
} as const

export function CoachFeedback({ session }: CoachFeedbackProps) {
  const positifs = session.coachNotes.filter((n) => n.category === "positif")
  const ameliorations = session.coachNotes.filter((n) => n.category === "amelioration")

  return (
    <section className="border-t border-white/5 bg-zinc-950 py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm md:p-12">
          <div className="mb-8 flex items-center gap-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20">
              <Image
                src={session.coachImage}
                alt={session.coachName}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tighter md:text-2xl">
                Débriefing de {session.coachName.split(" ")[0]}
              </h2>
              <p className="text-xs text-zinc-500">Moniteur Diplômé</p>
            </div>
          </div>

          {positifs.length > 0 && (
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${CATEGORY_CONFIG.positif.color}`} />
                <h3 className={`text-sm font-bold uppercase tracking-widest ${CATEGORY_CONFIG.positif.textColor}`}>
                  {CATEGORY_CONFIG.positif.label}
                </h3>
              </div>
              <div className="space-y-4">
                {positifs.map((note) => (
                  <div key={note.id}>
                    <p className="mb-1 font-bold">{note.title}</p>
                    <p className="text-sm leading-relaxed text-zinc-400">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {ameliorations.length > 0 && (
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${CATEGORY_CONFIG.amelioration.color}`} />
                <h3 className={`text-sm font-bold uppercase tracking-widest ${CATEGORY_CONFIG.amelioration.textColor}`}>
                  {CATEGORY_CONFIG.amelioration.label}
                </h3>
              </div>
              <div className="space-y-4">
                {ameliorations.map((note) => (
                  <div key={note.id}>
                    <p className="mb-1 font-bold">{note.title}</p>
                    <p className="text-sm leading-relaxed text-zinc-400">{note.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <DownloadButton
            label="Réserver une session"
            className="btn-hover mt-4 inline-block rounded-xl bg-white px-8 py-4 font-bold text-black transition"
          />
        </div>
      </div>
    </section>
  )
}
