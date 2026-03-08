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
    id: "trouve",
    number: "01.",
    title: "Trouve",
    description:
      "Repère les riders autour de toi grâce à la carte interactive. Filtre par niveau, station et disponibilité.",
    highlighted: true,
  },
  {
    id: "cree",
    number: "02.",
    title: "Crée",
    description:
      "Organise ta propre sortie : choisis la date, la station, le nombre de places et le niveau requis.",
    highlighted: false,
  },
  {
    id: "ride",
    number: "03.",
    title: "Ride",
    description:
      "Rejoins le groupe, partage ta session et progresse ensemble. Après la sortie, échangez vos retours.",
    highlighted: false,
  },
] as const

export const sortieStats: readonly SortieStat[] = [
  { value: "2 500+", label: "Sorties organisées" },
  { value: "45+", label: "Stations couvertes" },
  { value: "8 200+", label: "Riders actifs" },
  { value: "4.8/5", label: "Note moyenne" },
] as const
