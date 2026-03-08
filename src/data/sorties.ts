export interface SortieFeature {
  readonly id: string
  readonly number: string
  readonly title: string
  readonly description: string
  readonly highlighted: boolean
}

export interface SortieStat {
  readonly value: string
  readonly label: string
}

export const sortieFeatures: readonly SortieFeature[] = [
  {
    id: "planifie",
    number: "01.",
    title: "Planifie",
    description:
      "Cree une sortie en choisissant la date, la station, le nombre de places et le niveau requis. Partage les frais de trajet ou de forfait avec le groupe.",
    highlighted: false,
  },
  {
    id: "rejoins",
    number: "02.",
    title: "Rejoins",
    description:
      "Parcours la carte ou la liste des sorties disponibles. Filtre par station, date et niveau pour trouver la session qui te correspond.",
    highlighted: false,
  },
  {
    id: "ride",
    number: "03.",
    title: "Ride",
    description:
      "Retrouve ton groupe sur les pistes, rencontre de nouveaux riders et partage tes sessions. La montagne, c'est mieux a plusieurs.",
    highlighted: false,
  },
] as const

export const sortieStats: readonly SortieStat[] = [
  { value: "2 500+", label: "Sorties organisées" },
  { value: "45+", label: "Stations couvertes" },
  { value: "8 200+", label: "Riders actifs" },
  { value: "4.8/5", label: "Note moyenne" },
] as const
