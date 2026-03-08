import Image from "next/image"
import Link from "next/link"
import type { TeamMember } from "@/data/team"

interface TeamCardProps {
  readonly member: TeamMember
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <Link
      href={`/equipe/${member.slug}`}
      className="group w-[300px] shrink-0 snap-center md:w-[450px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 transition-transform duration-500 group-hover:scale-[1.02]">
        <Image
          src={member.image}
          alt={member.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 300px, 450px"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neon-orange">
            {member.role}
          </p>
          <h4 className="text-2xl font-black">{member.displayName}</h4>
          <p className="mt-2 text-sm text-zinc-300">Voir le profil →</p>
        </div>
      </div>
      <div className="mt-6 px-4">
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-neon-orange">
          {member.role}
        </p>
        <h4 className="text-xl font-bold">{member.name}</h4>
        <p className="text-sm text-zinc-500">{member.title}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-400">
          {member.description}
        </p>
      </div>
    </Link>
  )
}
