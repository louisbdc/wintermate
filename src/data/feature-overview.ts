export interface FeatureOverview {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly href: string
}

export const featureOverviews: readonly FeatureOverview[] = [
  {
    id: "progression",
    title: "Progression",
    description:
      "Librairie vidéo 4K, test de niveau et analyse personnalisée. Tout pour progresser à chaque descente.",
    href: "/progression",
  },
  {
    id: "challenges",
    title: "Challenges",
    description:
      "Défie la communauté dans 4 catégories. Freestyle, freeride, carving ou best fail :grimpe au classement.",
    href: "/challenges",
  },
  {
    id: "sorties",
    title: "Sorties",
    description:
      "Ne ride plus jamais seul. Trouve des riders, organise des sorties et partage tes sessions.",
    href: "/sorties",
  },
  {
    id: "analyse",
    title: "Analyse Vidéo",
    description:
      "Envoie ta vidéo et reçois un débriefing détaillé par nos coachs professionnels.",
    href: "/debriefing/demo",
  },
] as const
