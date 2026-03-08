import type { Testimonial } from "@/data/pricing"

interface TestimonialCardProps {
  readonly testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="w-[300px] shrink-0 snap-center rounded-2xl border border-white/5 bg-zinc-900 p-6 md:w-[350px]">
      <div className="mb-3 text-sm">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <span key={i} className="text-yellow-400">
            &#9733;
          </span>
        ))}
      </div>
      <p className="mb-4 text-sm leading-relaxed text-zinc-300">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="text-sm font-bold">{testimonial.name}</p>
    </div>
  )
}
