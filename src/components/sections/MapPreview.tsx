import { ScrollReveal } from "@/components/ui/ScrollReveal"

const MAP_PINS = [
  { top: "22%", left: "35%", delay: 0 },
  { top: "38%", left: "52%", delay: 0.4 },
  { top: "30%", left: "60%", delay: 0.8 },
  { top: "50%", left: "42%", delay: 1.2 },
  { top: "45%", left: "68%", delay: 0.6 },
  { top: "28%", left: "75%", delay: 1.0 },
  { top: "55%", left: "55%", delay: 1.4 },
  { top: "35%", left: "30%", delay: 0.2 },
] as const

export function MapPreview() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="mb-4 text-center text-3xl font-extrabold md:text-5xl">
            La carte des{" "}
            <span className="italic text-neon-orange">riders</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="mx-auto mb-12 max-w-xl text-center text-zinc-400">
            Visualise en temps réel les riders et les sorties autour de toi.
            Plus besoin de chercher, la communauté est déjà là.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            {/* Map grid background */}
            <div className="relative aspect-[16/9]">
              <svg
                className="absolute inset-0 h-full w-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Stylized terrain shapes */}
              <svg
                className="absolute inset-0 h-full w-full opacity-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 450"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 300 Q200 200 400 280 T800 250 L800 450 L0 450 Z"
                  fill="white"
                />
                <path
                  d="M0 350 Q300 280 500 320 T800 300 L800 450 L0 450 Z"
                  fill="white"
                />
              </svg>

              {/* Animated pin markers */}
              {MAP_PINS.map((pin, index) => (
                <div
                  key={index}
                  className="absolute"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <div
                    className="h-3 w-3 rounded-full bg-neon-orange shadow-[0_0_12px_rgba(249,115,22,0.6)]"
                    style={{
                      animation: `pulse-point 2s infinite`,
                      animationDelay: `${pin.delay}s`,
                    }}
                  />
                </div>
              ))}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50" />

              {/* Annotation badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800/80 px-4 py-2 text-xs font-bold backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-neon-orange" />
                45+ stations
              </div>

              <div className="absolute right-6 bottom-6 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-800/80 px-4 py-2 text-xs font-bold backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Riders en temps réel
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
