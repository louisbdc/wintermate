import type { ChallengeCategory } from "@/data/challenges"

interface ChallengeCategoryCardProps {
  readonly category: ChallengeCategory
}

function CategoryIcon({ icon }: { readonly icon: ChallengeCategory["icon"] }) {
  switch (icon) {
    case "freestyle":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.4l-6.4 4.8 2.4-7.2-6-4.8h7.6z" />
        </svg>
      )
    case "freeride":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20l5-7 4 3 5-9 4 6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 20H3" />
        </svg>
      )
    case "carving":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c4-4 6-14 16-16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 4l-3 1 1-3" />
        </svg>
      )
    case "fail":
      return (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
  }
}

export function ChallengeCategoryCard({ category }: ChallengeCategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 transition-opacity duration-300 group-hover:opacity-20`} />

      <div className="relative z-10">
        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${category.color} p-3 text-white`}>
          <CategoryIcon icon={category.icon} />
        </div>

        <h3 className="mb-2 text-xl font-bold uppercase tracking-tight">
          {category.title}
        </h3>

        <p className="text-sm leading-relaxed text-zinc-400">
          {category.description}
        </p>
      </div>
    </div>
  )
}
