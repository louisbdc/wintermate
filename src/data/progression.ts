export interface Pillar {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: "video" | "test" | "analysis"
  readonly features: readonly string[]
}

export interface VideoCategory {
  readonly id: string
  readonly title: string
  readonly count: number
  readonly level: string
}

export interface MethodologyStep {
  readonly number: string
  readonly title: string
  readonly description: string
}

export const pillars: readonly Pillar[] = [
  {
    id: "library",
    title: "Librairie Vidéo",
    description: "Plus de 200 tutoriels 4K filmés et commentés par des pros du freeride et du ski alpin.",
    icon: "video",
    features: ["Tutoriels par niveau", "Slow-motion détaillé", "Exercices pratiques", "Mises à jour régulières"],
  },
  {
    id: "test",
    title: "Test de Niveau",
    description: "Évalue ton niveau actuel et obtiens un programme personnalisé adapté à tes objectifs.",
    icon: "test",
    features: ["Évaluation complète", "Résultats détaillés", "Programme sur mesure", "Suivi de progression"],
  },
  {
    id: "analysis",
    title: "Analyse Vidéo",
    description: "Envoie ta vidéo et reçois un débriefing personnalisé par notre équipe de coachs en moins de 24h.",
    icon: "analysis",
    features: ["Analyse par un coach pro", "Débriefing personnalisé sous 24h", "Points forts et axes d'amélioration", "Plan d'action concret"],
  },
] as const

export const videoCategories: readonly VideoCategory[] = [
  { id: "carving", title: "Carving", count: 45, level: "Tous niveaux" },
  { id: "freeride", title: "Freeride", count: 38, level: "Intermédiaire+" },
  { id: "freestyle", title: "Freestyle", count: 32, level: "Tous niveaux" },
  { id: "technique", title: "Technique Pure", count: 52, level: "Débutant+" },
  { id: "securite", title: "Sécurité", count: 18, level: "Tous niveaux" },
] as const

export const methodologySteps: readonly MethodologyStep[] = [
  {
    number: "01",
    title: "Évalue ton niveau",
    description: "Passe le test de niveau pour identifier tes forces et tes axes d'amélioration.",
  },
  {
    number: "02",
    title: "Apprends la théorie",
    description: "Regarde les tutoriels adaptés à ton niveau dans la librairie vidéo.",
  },
  {
    number: "03",
    title: "Pratique sur le terrain",
    description: "Applique les exercices lors de tes sessions de ski.",
  },
  {
    number: "04",
    title: "Analyse et ajuste",
    description: "Envoie tes vidéos pour un débriefing personnalisé et affine ta technique.",
  },
] as const
