import Image from "next/image"
import Link from "next/link"
import { PhoneMockup } from "@/components/ui/PhoneMockup"

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen items-center bg-cover bg-center pt-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,#000000_100%),url('https://images.unsplash.com/photo-1482867996988-29ec3a0f1fa1?q=80&w=2070&auto=format&fit=crop')]">
      <div className="container mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
        <div className="z-10 text-center md:text-left">
          <h1 className="mb-6 text-5xl leading-tight font-extrabold md:text-7xl">
            Ton coach de ski pro,{" "}
            <span className="italic text-neon-orange">partout</span>.
          </h1>
          <p className="mb-8 max-w-lg text-lg text-zinc-400 md:text-xl">
            L&apos;alliance de l&apos;expertise de{" "}
            <span className="font-bold italic text-white">Winteractivity</span>{" "}
            et du coaching pro. Analyse vidéo, tutoriels 4K et communauté.
          </p>

          {/* Social proof */}
          <div className="mb-8 flex items-center justify-center gap-3 md:justify-start">
            <div className="flex -space-x-2">
              {["bg-neon-orange", "bg-amber-500", "bg-yellow-500", "bg-orange-600"].map((bg, i) => (
                <div
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-black text-[10px] font-bold ${bg}`}
                >
                  {["MF", "ES", "LM", "JR"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-300">
              <span className="font-bold text-white">12 500+</span> skieurs nous font confiance
            </p>
          </div>

          {/* CTA */}
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Link
              href="/debriefing/demo"
              className="btn-hover inline-block rounded-full bg-neon-orange px-8 py-3 text-sm font-bold text-white transition"
            >
              Voir un exemple d&apos;analyse
            </Link>
          </div>

          {/* Store badges */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="https://apps.apple.com/fr/app/winter-mate/id6752944989"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Image
                src="/images/badges/app-store.svg"
                alt="Télécharger sur l'App Store"
                width={200}
                height={67}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.winteracademynew&hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <Image
                src="/images/badges/google-play.webp"
                alt="Disponible sur Google Play"
                width={224}
                height={67}
              />
            </a>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-500 md:text-left">
            Disponible sur iOS & Android
          </p>
        </div>

        <PhoneMockup />
      </div>
    </header>
  )
}
