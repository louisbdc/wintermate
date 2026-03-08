import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support & Assistance | Winter Mate",
  description:
    "Besoin d'aide avec Winter Mate ? Retrouve ici les solutions aux problèmes fréquents et nos coordonnées de contact.",
}

export default function SupportPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-transparent pt-28 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">
            Support & Assistance
          </h1>
          <p className="mb-12 text-lg text-zinc-400">
            Si tu rencontres un problème, un bug, une erreur, ou si tu as une
            question sur ton abonnement, on est là pour t&apos;aider
            rapidement.
          </p>

          {/* Contact rapide */}
          <section className="mb-12 rounded-2xl border border-neon-blue/20 bg-neon-blue/5 p-8">
            <h2 className="mb-4 text-2xl font-bold">Contact rapide</h2>
            <p className="text-zinc-300">
              <span className="font-semibold text-white">
                Email support :
              </span>{" "}
              <a
                href="mailto:hello@wintermate.fr"
                className="text-neon-blue transition hover:underline"
              >
                hello@wintermate.fr
              </a>
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Temps de réponse moyen : entre 24h et 48h (hors week-end).
            </p>
          </section>

          {/* Problèmes techniques */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              Problèmes techniques fréquents
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  L&apos;app ne s&apos;ouvre pas / crash
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Redémarre ton téléphone
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Vérifie que tu as la dernière version de l&apos;app
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Si ça persiste : note le modèle de ton appareil + version
                    iOS/Android et contacte-nous
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  Problème de téléchargement / upload vidéo
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Vérifie ta connexion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Réduis la qualité de la vidéo si elle dépasse 4K
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Réessaie après avoir relancé l&apos;app
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  Problème de notifications
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Va dans Réglages &gt; Notifications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Active les notifications pour Winter Mate
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Problèmes de compte */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Problèmes de compte</h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  Impossible de se connecter
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Vérifie ton e-mail
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Essaie &quot;Mot de passe oublié&quot;
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Si tu as changé d&apos;e-mail, contacte-nous
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  Changement d&apos;abonnement
                </h3>
                <p className="mb-3 text-sm text-zinc-400">
                  Nous t&apos;aidons à :
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Mettre fin à un abonnement
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Changer d&apos;offre
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                    Gérer la facturation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support coaching vidéo */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              Support coaching vidéo
            </h2>
            <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
              <p className="mb-3 text-sm text-zinc-400">
                Si tu as un problème avec :
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                  L&apos;envoi de vidéos
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                  L&apos;analyse
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-blue" />
                  Un retour coach manquant
                </li>
              </ul>
              <p className="mt-4 text-sm text-zinc-300">
                Contacte-nous avec ton{" "}
                <span className="font-semibold text-white">
                  UID utilisateur
                </span>{" "}
                (visible dans ton profil).
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 text-center">
            <h2 className="mb-2 text-xl font-bold">
              Besoin d&apos;une info ? D&apos;un conseil ?
            </h2>
            <p className="mb-6 text-zinc-400">On est disponibles !</p>
            <a
              href="mailto:hello@wintermate.fr"
              className="btn-hover inline-block rounded-full bg-white px-8 py-3 font-bold text-black transition"
            >
              hello@wintermate.fr
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
