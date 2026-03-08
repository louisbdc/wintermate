import { teamMembers } from "@/data/team"
import { TeamCard } from "@/components/ui/TeamCard"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function TeamSection() {
  return (
    <section id="equipe" className="overflow-hidden bg-transparent py-24">
      <div className="container mx-auto mb-12 px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-4xl leading-none font-black uppercase text-center md:text-left md:text-6xl">
            Le Collectif <br />
            <span className="text-neon-blue">Winteractivity</span>.
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400">
            L&apos;expertise de la montagne au service de la tech. Plus de 430 000
            skieurs nous font confiance.
          </p>
        </ScrollReveal>
      </div>

      <div className="hide-scrollbar flex snap-x snap-mandatory space-x-6 overflow-x-auto px-6 pb-12 md:px-[10%]">
        {teamMembers.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
        <div className="w-24 shrink-0 md:w-[20%]" />
      </div>
    </section>
  )
}
