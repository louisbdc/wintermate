import { appFeatures } from "@/data/app-features"
import { FeaturePhoneMockup } from "@/components/ui/FeaturePhoneMockup"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export function FeaturesShowcase() {
  return (
    <section className="bg-transparent py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 text-4xl font-black uppercase leading-tight md:text-6xl">
              Tout pour <span className="text-neon-blue">progresser</span>
            </h2>
            <p className="text-lg text-zinc-400">
              Découvre les fonctionnalités qui font de Winter Mate ton
              compagnon de ski indispensable.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-32">
          {appFeatures.map((feature, index) => {
            const isEven = index % 2 === 0

            return (
              <ScrollReveal
                key={feature.id}
                direction={isEven ? "left" : "right"}
              >
                <div
                  className={`flex flex-col items-center gap-12 md:flex-row ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Phone mockup */}
                  <div className="w-full md:w-5/12">
                    <FeaturePhoneMockup
                      image={feature.image}
                      alt={feature.title}
                    />
                  </div>

                  {/* Text content */}
                  <div className="w-full md:w-7/12">
                    <p className="mb-2 text-sm font-bold uppercase tracking-widest text-neon-blue">
                      {feature.subtitle}
                    </p>
                    <h3 className="mb-4 text-3xl font-black md:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed text-zinc-400">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-3 text-sm text-zinc-300"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-neon-blue" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
