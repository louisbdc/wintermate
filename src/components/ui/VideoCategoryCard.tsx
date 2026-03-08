import type { VideoCategory } from "@/data/progression"

interface VideoCategoryCardProps {
  readonly category: VideoCategory
}

export function VideoCategoryCard({ category }: VideoCategoryCardProps) {
  return (
    <div className="w-[200px] shrink-0 snap-center rounded-2xl border border-white/5 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 transition-transform duration-500 hover:scale-[1.02]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-blue/10">
        <svg className="h-5 w-5 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>

      <h4 className="mt-4 text-lg font-bold">{category.title}</h4>

      <p className="mt-1 text-2xl font-black text-neon-blue">
        {category.count}
      </p>
      <p className="text-xs text-zinc-500">vidéos</p>

      <span className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
        {category.level}
      </span>
    </div>
  )
}
