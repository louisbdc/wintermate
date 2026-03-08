export interface ChallengeCategory {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: "freestyle" | "freeride" | "carving" | "fail"
  readonly color: string
}

export interface ChallengeStep {
  readonly number: string
  readonly title: string
  readonly description: string
}

export interface LeaderboardEntry {
  readonly rank: number
  readonly name: string
  readonly points: number
  readonly avatar: string
}

export const challengeCategories: readonly ChallengeCategory[] = [
  {
    id: "freestyle",
    title: "Freestyle",
    description: "Tricks, grabs et rotations. Montre ton style en park ou hors-piste.",
    icon: "freestyle",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "freeride",
    title: "Freeride",
    description: "Les plus belles lignes en hors-piste. Fluidité et engagement.",
    icon: "freeride",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "carving",
    title: "Carving",
    description: "Inclinaison maximale et coupes parfaites sur piste damée.",
    icon: "carving",
    color: "from-neon-blue to-sky-400",
  },
  {
    id: "fail",
    title: "Best Fail",
    description: "Les gamelles les plus épiques. Parce qu'on apprend aussi en tombant.",
    icon: "fail",
    color: "from-red-500 to-rose-600",
  },
] as const

export const challengeSteps: readonly ChallengeStep[] = [
  {
    number: "01",
    title: "Choisis un défi",
    description: "Parcours les catégories et trouve le challenge qui te correspond.",
  },
  {
    number: "02",
    title: "Filme ta run",
    description: "Enregistre ta vidéo directement depuis l'app ou importe-la.",
  },
  {
    number: "03",
    title: "Soumets ta vidéo",
    description: "Poste ta run et laisse la communauté voter.",
  },
  {
    number: "04",
    title: "Monte au classement",
    description: "Accumule des points et grimpe dans le leaderboard.",
  },
] as const

export const leaderboardPreview: readonly LeaderboardEntry[] = [
  { rank: 1, name: "Mathys F.", points: 2450, avatar: "🥇" },
  { rank: 2, name: "Lucas M.", points: 2180, avatar: "🥈" },
  { rank: 3, name: "Julie R.", points: 1920, avatar: "🥉" },
] as const
