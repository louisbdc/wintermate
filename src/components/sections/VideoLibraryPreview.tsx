import { videoCategories } from "@/data/progression"
import { VideoCategoryCard } from "@/components/ui/VideoCategoryCard"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function VideoLibraryPreview() {
  return (
    <section className="overflow-hidden bg-transparent py-24">
      <div className="container mx-auto mb-12 px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-4xl font-black uppercase md:text-left md:text-6xl">
            <span className="text-neon-blue">200+</span> tutoriels vidéo.
          </h2>
          <p className="max-w-2xl text-lg text-zinc-400">
            Du débutant au skieur confirmé, retrouve des tutoriels 4K filmés et
            commentés par des professionnels pour chaque discipline.
          </p>
        </ScrollReveal>
      </div>

      <div className="hide-scrollbar flex snap-x snap-mandatory space-x-6 overflow-x-auto px-6 pb-12 md:px-[10%]">
        {videoCategories.map((category) => (
          <VideoCategoryCard key={category.id} category={category} />
        ))}
        <div className="w-24 shrink-0 md:w-[20%]" />
      </div>
    </section>
  )
}
