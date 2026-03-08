import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SkillBar } from "@/components/ui/SkillBar"
import { Timeline } from "@/components/ui/Timeline"
import { teamMembers, getTeamMemberBySlug } from "@/data/team"
import type { Metadata } from "next"

interface PageProps {
  readonly params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)
  if (!member) return { title: "Membre introuvable" }

  return {
    title: `${member.name} | Winter Mate`,
    description: member.description,
  }
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params
  const member = getTeamMemberBySlug(slug)

  if (!member) notFound()

  const otherMembers = teamMembers.filter((m) => m.slug !== slug)

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] pt-20">
        <div className="absolute inset-0">
          <Image
            src={member.image}
            alt={member.alt}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 flex min-h-[70vh] items-end">
          <div className="container mx-auto px-6 pb-16">
            <Link
              href="/#equipe"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour à l&apos;équipe
            </Link>
            <p className="mb-2 text-sm font-bold uppercase tracking-widest text-neon-orange">
              {member.role}
            </p>
            <h1 className="mb-4 text-5xl font-black md:text-7xl">
              {member.displayName}
            </h1>
            <p className="max-w-xl text-lg text-zinc-300">{member.title}</p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-b border-white/5 bg-zinc-950">
        <div className="container mx-auto grid grid-cols-2 gap-px md:grid-cols-4">
          {member.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center border-r border-white/5 px-6 py-8 last:border-r-0"
            >
              <span className="text-3xl font-black text-neon-orange md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-center text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Detail View (Bio + Skills) ── */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Left - Bio */}
            <div className="lg:col-span-7">
              <h2 className="mb-8 text-3xl font-black md:text-4xl">
                Biographie
              </h2>
              <div className="space-y-6">
                {member.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-zinc-400 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-12 flex flex-wrap gap-3">
                {member.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-neon-orange/20 bg-neon-orange/5 px-4 py-2 text-xs font-semibold text-neon-orange"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Skills */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8">
                <h3 className="mb-8 text-xl font-bold">
                  Empreinte de Compétences
                </h3>
                <div className="space-y-5">
                  {member.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
                <p className="mt-6 text-center text-xs text-zinc-600">
                  Évaluation sur une échelle de 0 à 100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="border-t border-white/5 bg-zinc-950 py-20">
        <div className="container mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-3xl font-black md:text-4xl">
            Chronologie
          </h2>
          <Timeline entries={member.timeline} />
        </div>
      </section>

      {/* ── Other Members ── */}
      <section className="border-t border-white/5 bg-black py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-10 text-2xl font-black">
            Découvrir le reste de l&apos;équipe
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {otherMembers.map((other) => (
              <Link
                key={other.slug}
                href={`/equipe/${other.slug}`}
                className="group flex items-center gap-6 rounded-2xl border border-white/5 bg-zinc-900/50 p-4 transition hover:border-neon-orange/20 hover:bg-zinc-900"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={other.image}
                    alt={other.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-neon-orange">
                    {other.role}
                  </p>
                  <h3 className="text-lg font-bold">{other.name}</h3>
                  <p className="text-sm text-zinc-500">{other.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
