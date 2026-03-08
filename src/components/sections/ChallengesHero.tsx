import { DownloadButton } from "@/components/ui/DownloadButton"

export function ChallengesHero() {
  return (
    <section className="bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-widest text-neon-blue">
          Challenges
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl leading-tight font-extrabold md:text-6xl">
          D&eacute;fie la{" "}
          <span className="italic text-neon-blue">communaut&eacute;</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
          Participe aux d&eacute;fis hebdomadaires, filme tes runs et grimpe dans le
          classement. Freestyle, freeride, carving ou best fail&nbsp;: il y a un
          challenge pour chaque rider.
        </p>

        <div className="mt-10 flex justify-center">
          <DownloadButton
            label="Relever le d&eacute;fi"
            className="btn-hover inline-block rounded-2xl bg-neon-blue px-10 py-5 text-sm font-black uppercase tracking-wider text-white transition"
          />
        </div>
      </div>
    </section>
  )
}
