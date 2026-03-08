export interface JointAngle {
  readonly joint: string
  readonly angle: number
  readonly optimal: number
  readonly status: "optimal" | "attention" | "critique"
}

export interface Metric {
  readonly id: string
  readonly label: string
  readonly value: number
  readonly unit: string
  readonly optimal: number
  readonly status: "optimal" | "attention" | "critique"
  readonly description: string
}

export interface CoachNote {
  readonly id: string
  readonly category: "positif" | "amelioration" | "exercice"
  readonly title: string
  readonly content: string
}

export interface Exercise {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly difficulty: "debutant" | "intermediaire" | "avance"
  readonly duration: string
}

export interface DebriefingSession {
  readonly id: string
  readonly skierName: string
  readonly skierInitials: string
  readonly date: string
  readonly location: string
  readonly discipline: string
  readonly globalScore: number
  readonly imageSrc: string
  readonly jointAngles: readonly JointAngle[]
  readonly metrics: readonly Metric[]
  readonly coachNotes: readonly CoachNote[]
  readonly exercises: readonly Exercise[]
  readonly coachName: string
  readonly coachImage: string
}

export const demoDebriefing: DebriefingSession = {
  id: "demo",
  skierName: "Mathys Fornasier",
  skierInitials: "MF",
  date: "8 mars 2026",
  location: "Les 2 Alpes",
  discipline: "Carving",
  globalScore: 78,
  imageSrc: "/images/analyse_ski.png",
  coachName: "Mathys Fornasier",
  coachImage: "/images/team/mathys.png",
  jointAngles: [
    { joint: "Genou gauche", angle: 64, optimal: 60, status: "optimal" },
    { joint: "Hanche", angle: 42, optimal: 45, status: "attention" },
    { joint: "Cheville", angle: 28, optimal: 25, status: "optimal" },
    { joint: "Épaules", angle: 15, optimal: 10, status: "attention" },
    { joint: "Bassin", angle: 38, optimal: 40, status: "optimal" },
  ],
  metrics: [
    {
      id: "angle-carre",
      label: "Angle Carré",
      value: 64,
      unit: "°",
      optimal: 60,
      status: "optimal",
      description: "Angle entre le tibia et la pente. Excellent engagement des carres.",
    },
    {
      id: "inclinaison",
      label: "Inclinaison",
      value: 42,
      unit: "°",
      optimal: 45,
      status: "attention",
      description: "Inclinaison du buste par rapport à la verticale. Légèrement insuffisante.",
    },
    {
      id: "angulation",
      label: "Angulation",
      value: 28,
      unit: "°",
      optimal: 25,
      status: "optimal",
      description: "Séparation haut/bas du corps. Bonne dissociation.",
    },
    {
      id: "centrage",
      label: "Centrage",
      value: 72,
      unit: "%",
      optimal: 80,
      status: "attention",
      description: "Position avant/arrière sur le ski. Légèrement en arrière.",
    },
    {
      id: "symetrie",
      label: "Symétrie",
      value: 88,
      unit: "%",
      optimal: 90,
      status: "optimal",
      description: "Équilibre entre les virages à gauche et à droite.",
    },
    {
      id: "timing",
      label: "Timing",
      value: 91,
      unit: "%",
      optimal: 85,
      status: "optimal",
      description: "Coordination du déclenchement de virage. Excellent rythme.",
    },
  ],
  coachNotes: [
    {
      id: "1",
      category: "positif",
      title: "Engagement des carres",
      content:
        "Ton angle carré à 64° montre un excellent engagement. La prise de carre est franche et progressive, c'est exactement ce qu'on recherche en carving.",
    },
    {
      id: "2",
      category: "positif",
      title: "Timing de virage",
      content:
        "Le rythme est très régulier, les transitions sont fluides. Tu enchaînes les virages avec une belle constance.",
    },
    {
      id: "3",
      category: "amelioration",
      title: "Inclinaison du buste",
      content:
        "Tu pourrais gagner 3° d'inclinaison supplémentaire. Pense à projeter davantage l'épaule intérieure vers l'aval en début de virage.",
    },
    {
      id: "4",
      category: "amelioration",
      title: "Centrage avant/arrière",
      content:
        "Tu es légèrement en position arrière dans la phase de conduite. Travaille la pression sur le tibia pour rester centré sur l'avant du ski.",
    },
  ],
  exercises: [
    {
      id: "1",
      title: "Exercice du bâton avancé",
      description:
        "Ski avec les deux bâtons tenus horizontalement devant toi pour forcer l'inclinaison du buste vers l'aval.",
      difficulty: "intermediaire",
      duration: "15 min",
    },
    {
      id: "2",
      title: "Pression tibiale",
      description:
        "Descente en chasse-neige lent en maintenant un contact permanent du tibia sur la languette de la chaussure.",
      difficulty: "debutant",
      duration: "10 min",
    },
    {
      id: "3",
      title: "Carving sur un ski",
      description:
        "Enchaîner des virages carvés sur un seul ski pour renforcer l'équilibre et le centrage.",
      difficulty: "avance",
      duration: "20 min",
    },
  ],
} as const

export function getDebriefingById(
  id: string,
): DebriefingSession | undefined {
  if (id === "demo") return demoDebriefing
  return undefined
}
