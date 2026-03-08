export interface AppFeature {
  readonly id: string
  readonly subtitle: string
  readonly title: string
  readonly description: string
  readonly highlights: readonly string[]
  readonly image: string
}

export const appFeatures: readonly AppFeature[] = [
  {
    id: "challenges",
    subtitle: "Compétition",
    title: "Défis & Challenges",
    description:
      "Lance des défis à la communauté ou relève ceux des autres. Freestyle, freeride, carving ou best fail :chaque catégorie a son leaderboard.",
    highlights: [
      "4 catégories de défis",
      "Classement communautaire",
      "Votes et réactions",
    ],
    image: "/images/features/challenges.png",
  },
  {
    id: "carte",
    subtitle: "Social",
    title: "Carte Interactive",
    description:
      "Repère les riders autour de toi en temps réel. Organise des sorties, rejoins un groupe et ne ride plus jamais seul.",
    highlights: [
      "Riders en temps réel",
      "Création de sorties",
      "45+ stations couvertes",
    ],
    image: "/images/features/carte.png",
  },
  {
    id: "communaute",
    subtitle: "Réseau",
    title: "Communauté",
    description:
      "Rejoins plus de 12 500 skieurs passionnés. Partage tes sessions, échange des conseils et progresse ensemble.",
    highlights: [
      "12 500+ membres actifs",
      "Partage de sessions",
      "Entraide et conseils",
    ],
    image: "/images/features/communaute.png",
  },
  {
    id: "test-niveau",
    subtitle: "Progression",
    title: "Test de Niveau",
    description:
      "Évalue ton niveau actuel avec notre test complet. Obtiens un programme personnalisé adapté à tes objectifs.",
    highlights: [
      "Évaluation complète",
      "Programme sur mesure",
      "Suivi de progression",
    ],
    image: "/images/features/test-niveau.png",
  },
  {
    id: "librairie",
    subtitle: "Apprentissage",
    title: "Librairie Vidéo 4K",
    description:
      "Plus de 200 tutoriels filmés par des pros. Chaque mouvement est décomposé en slow-motion avec des exercices pratiques.",
    highlights: [
      "200+ tutoriels",
      "Qualité 4K",
      "Exercices pratiques",
    ],
    image: "/images/features/librairie.png",
  },
] as const
