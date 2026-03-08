"use client"

import Image from "next/image"
import { useState } from "react"
import { DownloadButton } from "@/components/ui/DownloadButton"

const NAV_LINKS = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/#equipe", label: "L'Équipe" },
  { href: "/tarifs", label: "Tarifs" },
] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="frost-glass fixed z-50 w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.webp"
            alt="Winter Mate"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-montserrat text-xl font-extrabold tracking-tighter text-white">
            WINTER MATE
          </span>
        </a>

        <div className="hidden space-x-8 text-sm font-semibold uppercase tracking-widest md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-neon-orange"
            >
              {link.label}
            </a>
          ))}
        </div>

        <DownloadButton
          label="REJOINDRE"
          className="btn-hover hidden rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition md:inline-block"
        />

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-widest">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-neon-orange"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <DownloadButton
              label="REJOINDRE"
              className="btn-hover inline-block rounded-full bg-white px-6 py-2 text-center text-sm font-bold text-black transition"
            />
          </div>
        </div>
      )}
    </nav>
  )
}
