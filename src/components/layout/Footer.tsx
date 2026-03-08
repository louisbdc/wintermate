import Image from "next/image"

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@WINTERACTIVITY" },
  { label: "Instagram", href: "https://www.instagram.com/wintermate_fr/" },
] as const

const PAGE_LINKS = [
  { label: "Progression", href: "/progression" },
  { label: "Challenges", href: "/challenges" },
  { label: "Sorties", href: "/sorties" },
  { label: "Tarifs", href: "/tarifs" },
] as const

export function Footer() {
  return (
    <footer className="relative grid-fade-top border-t border-white/5 bg-transparent py-12">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6">
        {/* Top row: logo + social */}
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.webp"
              alt="Winter Mate"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-montserrat text-sm font-extrabold tracking-tighter">
              WINTER MATE
            </span>
          </a>

          <div className="flex space-x-8 text-xs font-bold uppercase text-zinc-500">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Page links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase text-zinc-500">
          {PAGE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom row: legal */}
        <div className="flex items-center gap-6 text-[10px] text-zinc-700">
          <a href="/support" className="transition hover:text-zinc-400">
            Support
          </a>
          <a href="/confidentialite" className="transition hover:text-zinc-400">
            Confidentialité
          </a>
          <span>&copy; 2026 WINTERACTIVITY. TOUS DROITS RÉSERVÉS.</span>
        </div>
      </div>
    </footer>
  )
}
