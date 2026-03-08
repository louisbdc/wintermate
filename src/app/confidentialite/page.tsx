import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de Confidentialite | Winter Mate",
  description:
    "Decouvrez comment Winter Mate collecte, utilise et protege vos donnees personnelles.",
}

export default function ConfidentialitePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="container mx-auto max-w-3xl px-6">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">
            Politique de Confidentialite
          </h1>
          <p className="mb-12 text-sm text-zinc-500">
            Derniere mise a jour : 14/11/2025
          </p>

          <p className="mb-12 text-base leading-relaxed text-zinc-400">
            Winter Mate (&laquo; nous &raquo;, &laquo; notre &raquo;,
            &laquo; l&apos;application &raquo;) attache une grande importance
            a la protection de vos donnees personnelles. Cette politique
            explique quelles donnees nous collectons, comment elles sont
            utilisees, et quels sont vos droits conformement au Reglement
            General sur la Protection des Donnees (RGPD) et aux regles de
            l&apos;App Store.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              1. Donnees que nous collectons
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  1.1. Informations de compte
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Nom et prenom
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Adresse e-mail
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Photo de profil
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Identifiant utilisateur (UID Firebase)
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  1.2. Contenu utilisateur
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Photos et videos ajoutees dans l&apos;app
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Messages echanges avec les coachs ou la communaute
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Commentaires, publications, interactions sociales
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  1.3. Donnees techniques
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Donnees de performance (latence, chargement video, etc.)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Donnees de pannes (Crashlytics)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Modele de l&apos;appareil, systeme d&apos;exploitation
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  1.4. Localisation (si activee)
                </h3>
                <p className="text-sm text-zinc-400">
                  Localisation approximative pour certaines fonctionnalites
                  (sorties, meteo...). Optionnelle et toujours soumise a
                  votre consentement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              2. Comment nous utilisons vos donnees
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">
                  Fonctionnalites principales
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Creer et gerer votre compte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Vous permettre d&apos;envoyer des videos pour coaching
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Fournir des analyses videos personnalisees
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Vous connecter avec la communaute
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Ameliorer la stabilite et les performances
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neon-orange/20 bg-neon-orange/5 p-6">
                <h3 className="mb-3 text-lg font-bold text-neon-orange">
                  Pas d&apos;utilisation publicitaire
                </h3>
                <ul className="space-y-2 text-sm text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Aucun tracking publicitaire
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Aucune revente de donnees
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Aucun partage avec des annonceurs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Aucun suivi inter-applications
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="mb-3 text-lg font-bold">Communications</h3>
                <p className="mb-3 text-sm text-zinc-400">
                  Nous pouvons utiliser votre e-mail pour :
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Vous envoyer des informations sur votre compte
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Vous notifier de nouvelles fonctionnalites
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                    Vous envoyer, si vous l&apos;acceptez, une newsletter
                    (desinscription possible a tout moment)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              3. Partage de donnees
            </h2>
            <p className="mb-6 text-sm text-zinc-400">
              Nous partageons uniquement ce qui est necessaire au
              fonctionnement de l&apos;application :
            </p>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="text-base font-bold">Firebase (Google)</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Auth, Firestore, Crashlytics, Performance Monitoring.
                  Hebergement securise des donnees et gestion du compte.
                </p>
              </div>
              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
                <h3 className="text-base font-bold">Cloudflare Stream</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Stockage et streaming securise des videos.
                </p>
              </div>
              <div className="rounded-2xl border border-neon-orange/20 bg-neon-orange/5 p-6">
                <h3 className="text-base font-bold text-neon-orange">
                  Aucun partenaire publicitaire
                </h3>
                <p className="mt-1 text-sm text-zinc-300">
                  Jamais de revente ou partage a des tiers non essentiels.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              4. Conservation des donnees
            </h2>
            <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
              <p className="mb-4 text-sm text-zinc-400">
                Vos donnees sont conservees tant que votre compte est actif.
                Vous pouvez :
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Supprimer vos videos
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Modifier votre profil
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Demander la suppression complete de votre compte (avec
                  toutes vos donnees)
                </li>
              </ul>
              <p className="mt-4 text-sm text-zinc-300">
                Par simple demande a :{" "}
                <a
                  href="mailto:hello@wintermate.fr"
                  className="text-neon-orange transition hover:underline"
                >
                  hello@wintermate.fr
                </a>
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">
              5. Vos droits (RGPD)
            </h2>
            <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
              <p className="mb-4 text-sm text-zinc-400">
                Vous pouvez a tout moment :
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Acceder a vos donnees
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Modifier vos donnees
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Demander leur suppression
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Retirer votre consentement (newsletter, localisation...)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Obtenir une copie exportee de vos donnees
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">6. Securite</h2>
            <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-6">
              <p className="mb-4 text-sm text-zinc-400">
                Nous protegeons vos donnees via :
              </p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Cryptage HTTPS
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Stockage securise Firebase et Cloudflare
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Acces strictement limite a l&apos;equipe
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-orange" />
                  Journalisation interne pour prevenir les acces non
                  autorises
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 text-center">
            <h2 className="mb-2 text-xl font-bold">7. Contact</h2>
            <p className="mb-6 text-sm text-zinc-400">
              Pour toute question concernant cette politique ou vos droits :
            </p>
            <a
              href="mailto:hello@wintermate.fr"
              className="btn-hover inline-block rounded-full bg-white px-8 py-3 font-bold text-black transition"
            >
              hello@wintermate.fr
            </a>
            <p className="mt-4 text-xs text-zinc-600">
              Winter Mate SAS - France
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
