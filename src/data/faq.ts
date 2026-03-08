export interface FaqItem {
  readonly question: string
  readonly answer: string
}

export const faqItems: readonly FaqItem[] = [
  {
    question: "Winter Mate est-il adapté aux débutants ?",
    answer:
      "Absolument ! Notre librairie vidéo couvre tous les niveaux, du grand débutant au skieur confirmé. Le test de niveau te propose un programme personnalisé adapté à ton expérience.",
  },
  {
    question: "Comment fonctionne l'analyse vidéo ?",
    answer:
      "Filme ta descente depuis l'app ou importe une vidéo. Un coach professionnel analyse ta technique et te livre un débriefing personnalisé sous 24h avec tes points forts et axes d'amélioration.",
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer:
      "Oui, sans engagement. Tu peux annuler ton abonnement à tout moment depuis les paramètres de l'app. Tu conserves l'accès jusqu'à la fin de ta période en cours.",
  },
  {
    question: "L'app fonctionne-t-elle hors connexion ?",
    answer:
      "Les tutoriels vidéo peuvent être téléchargés pour un visionnage hors ligne. La carte interactive et les fonctionnalités sociales nécessitent une connexion internet.",
  },
  {
    question: "Dans quelles stations l'app est-elle disponible ?",
    answer:
      "Winter Mate fonctionne dans toutes les stations de ski. La carte interactive couvre plus de 45 stations en France et en Europe, avec de nouvelles stations ajoutées régulièrement.",
  },
] as const
