import Image from "next/image"
import Link from "next/link"

export function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative h-[520px] w-64 overflow-hidden rounded-[3rem] border-[6px] border-zinc-800 bg-black shadow-[0_0_60px_rgba(0,0,0,1)] md:h-[660px] md:w-80">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 z-40 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black md:h-[26px] md:w-[110px]" />

        {/* iOS Status Bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[9px] font-semibold text-white md:text-[10px]">
          <span>10:56</span>
          <div className="flex items-center gap-1">
            {/* Signal bars */}
            <svg className="h-3 w-3" viewBox="0 0 16 16" fill="white">
              <rect x="1" y="11" width="2" height="4" rx="0.5" />
              <rect x="5" y="8" width="2" height="7" rx="0.5" />
              <rect x="9" y="5" width="2" height="10" rx="0.5" />
              <rect x="13" y="1" width="2" height="14" rx="0.5" opacity="0.3" />
            </svg>
            {/* WiFi */}
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="white">
              <path d="M12 18l-1.4-1.4c.8-.8 1.8-.8 2.8 0L12 18zm-3.5-3.5l1.4 1.4c1.2-1.2 3-1.2 4.2 0l1.4-1.4c-1.9-1.9-5.1-1.9-7 0zm-2.8-2.8l1.4 1.4c2.6-2.6 6.8-2.6 9.4 0l1.4-1.4c-3.4-3.4-8.8-3.4-12.2 0z" />
            </svg>
            {/* Battery */}
            <svg className="h-3 w-5" viewBox="0 0 28 14" fill="none">
              <rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="white" strokeWidth="1" />
              <rect x="2" y="2" width="14" height="10" rx="1.5" fill="white" />
              <rect x="25" y="4" width="2.5" height="6" rx="1" fill="white" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* App Content */}
        <div className="flex h-[calc(100%-24px)] flex-col px-4 pb-2 md:h-[calc(100%-28px)]">
          {/* App Header */}
          <div className="mb-3 flex items-center justify-between pt-2 md:mb-4">
            {/* Search icon */}
            <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            {/* Title */}
            <p className="text-[11px] font-bold text-white md:text-xs">
              Analyse vidéo
            </p>
            {/* Right icons */}
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
          </div>

          {/* Analysis Viewport */}
          <div className="relative mb-3 flex-1 overflow-hidden rounded-2xl bg-zinc-900 md:mb-4 md:rounded-3xl">
            <Image
              src="/images/analyse_ski.webp"
              alt="Analyse Ski"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 256px, 320px"
            />

            <div className="scan-line" />

            {/* Analysis points */}
            <div className="analysis-point top-[38%] left-[70%]" />
            <div className="analysis-point top-[46%] left-[65%]" />
            <div className="analysis-point top-[57%] left-[58%]" />
            <div className="analysis-point top-[68%] left-[52%]" />
            <div className="analysis-point top-[77%] left-[46%]" />

            {/* Skeleton overlay */}
            <svg
              className="absolute inset-0 h-full w-full text-neon-blue opacity-60"
              viewBox="0 0 100 100"
            >
              <line x1="70" y1="38" x2="65" y2="46" stroke="currentColor" strokeWidth="0.7" />
              <line x1="65" y1="46" x2="58" y2="57" stroke="currentColor" strokeWidth="0.7" />
              <line x1="58" y1="57" x2="52" y2="68" stroke="currentColor" strokeWidth="0.7" />
              <line x1="52" y1="68" x2="46" y2="77" stroke="currentColor" strokeWidth="0.7" />
              <line x1="46" y1="77" x2="32" y2="82" stroke="currentColor" strokeWidth="0.4" />
              <path d="M 48.8 72.8 A 8 8 0 0 0 41.3 78.7" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 0.8" />
            </svg>

            {/* Angle info card */}
            <div className="absolute right-3 bottom-3 left-3 rounded-lg border border-white/10 bg-black/80 px-3 py-2 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold text-neon-blue md:text-[10px]">
                  ANGLE CARRE : 64°
                </span>
                <span className="text-[9px] font-medium text-white md:text-[10px]">OPTIMAL</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/debriefing/demo"
            className="btn-hover mb-2 block w-full rounded-xl bg-white py-2.5 text-center text-[10px] font-black uppercase tracking-tighter text-black md:py-3 md:text-xs"
          >
            Voir le débriefing
          </Link>

          {/* Bottom Tab Bar */}
          <div className="flex items-center justify-around rounded-2xl border-t border-white/5 bg-zinc-900/80 px-2 py-2 backdrop-blur-sm">
            {/* Ski / Technique */}
            <button className="flex flex-col items-center gap-0.5">
              <svg className="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="4" r="2" />
                <path d="M7 21l3-9 2 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 7l-6 8" strokeLinecap="round" />
              </svg>
              <span className="text-[7px] text-zinc-500">Technique</span>
            </button>
            {/* Mountain / Carte */}
            <button className="flex flex-col items-center gap-0.5">
              <svg className="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21l4-10 4 10" />
                <path d="M2 21l6-12 4 6" />
              </svg>
              <span className="text-[7px] text-zinc-500">Carte</span>
            </button>
            {/* WM Center Logo */}
            <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white">
              <Image
                src="/images/logo.webp"
                alt="Winter Mate"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
            {/* Trophy / Progression */}
            <button className="flex flex-col items-center gap-0.5">
              <svg className="h-4 w-4 text-neon-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h2" />
                <path d="M18 9h2a2 2 0 002-2V5a2 2 0 00-2-2h-2" />
                <rect x="6" y="3" width="12" height="12" rx="2" />
                <path d="M12 15v4" />
                <path d="M8 21h8" />
              </svg>
              <span className="text-[7px] text-neon-blue">Progrès</span>
            </button>
            {/* Profile */}
            <button className="flex flex-col items-center gap-0.5">
              <svg className="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21a8 8 0 00-16 0" />
              </svg>
              <span className="text-[7px] text-zinc-500">Profil</span>
            </button>
          </div>

          {/* Home Indicator */}
          <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -z-10 h-[400px] w-[400px] rounded-full bg-white/5 blur-[120px]" />
    </div>
  )
}
