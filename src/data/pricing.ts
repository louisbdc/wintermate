export interface PricingPlan {
  readonly id: string
  readonly name: string
  readonly price: string
  readonly originalPrice?: string
  readonly suffix: string
  readonly savings?: string
  readonly perDay?: string
  readonly highlighted: boolean
}

export interface Testimonial {
  readonly name: string
  readonly stars: number
  readonly quote: string
}

export interface TimelineStep {
  readonly icon: "lock" | "bell" | "crown"
  readonly title: string
  readonly description: string
  readonly active: boolean
}

export const plans: readonly PricingPlan[] = [
  {
    id: "annual",
    name: "Le Plan Annuel",
    price: "49,99\u00A0\u20AC",
    originalPrice: "179\u00A0\u20AC",
    suffix: "/an",
    savings: "129\u20AC D'\u00C9CONOMIES",
    perDay: "Seulement 0,13\u20AC/jour",
    highlighted: true,
  },
  {
    id: "monthly",
    name: "Le Plan Mensuel",
    price: "14,99\u00A0\u20AC",
    originalPrice: "14,99\u00A0\u20AC",
    suffix: "/mois",
    highlighted: false,
  },
] as const

export const testimonials: readonly Testimonial[] = [
  {
    name: "Come E.",
    stars: 5,
    quote: "J'ai progressé plus en 2 semaines qu'en 3 ans de ski !",
  },
  {
    name: "Lucas M.",
    stars: 5,
    quote: "Les analyses vidéo ont transformé ma technique de carving.",
  },
  {
    name: "Julie R.",
    stars: 5,
    quote: "Le meilleur investissement pour ma saison de ski.",
  },
] as const

export const timelineSteps: readonly TimelineStep[] = [
  {
    icon: "lock",
    title: "Aujourd'hui",
    description:
      "Débloque l'accès illimité à la librairie de vidéos et tous les avantages du Winter Mate Club.",
    active: true,
  },
  {
    icon: "bell",
    title: "Dans 2 jours",
    description:
      "On t'envoie un rappel avant la fin de ton essai gratuit.",
    active: false,
  },
  {
    icon: "crown",
    title: "Dans 3 jours",
    description:
      "Ton abonnement sans engagement démarre, sauf si tu annules avant.",
    active: false,
  },
] as const
