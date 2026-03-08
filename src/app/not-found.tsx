import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen flex-col items-center justify-center bg-transparent px-6 text-center">
        <p className="mb-4 text-8xl font-black text-neon-orange md:text-9xl">
          404
        </p>
        <h1 className="mb-4 text-3xl font-black md:text-5xl">
          Piste introuvable
        </h1>
        <p className="mb-10 max-w-md text-lg text-zinc-400">
          On dirait que tu t&apos;es perdu hors-piste. Cette page n&apos;existe
          pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="btn-hover inline-block rounded-full bg-neon-orange px-8 py-3 text-sm font-bold text-white transition"
        >
          Retour à l&apos;accueil
        </Link>
      </main>

      <Footer />
    </>
  )
}
