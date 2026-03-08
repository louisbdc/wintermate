export interface Feature {
  readonly number: string
  readonly title: string
  readonly description: string
  readonly highlighted: boolean
  readonly href?: string
}

export const features: readonly Feature[] = [
  {
    number: "01.",
    title: "Analyse & Coaching",
    description:
      "Notre équipe de coachs pros analyse vos vidéos et identifie vos défauts posturaux, avec un débriefing personnalisé de Mathys sous 24h.",
    highlighted: false,
    href: "/progression",
  },
  {
    number: "02.",
    title: "L'Académie",
    description:
      "Plus de 200 modules vidéos pour corriger chaque détail : inclinaison, angulation, gestion du relief et carving extrême.",
    highlighted: false,
    href: "/progression",
  },
  {
    number: "03.",
    title: "Le Réseau",
    description:
      "Rejoins les membres du collectif sur le terrain. La carte interactive te permet de ne plus jamais rider seul.",
    highlighted: false,
    href: "/sorties",
  },
] as const
