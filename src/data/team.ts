export interface TimelineEntry {
  readonly year: string
  readonly title: string
  readonly description: string
}

export interface Skill {
  readonly name: string
  readonly level: number
}

export interface Stat {
  readonly value: string
  readonly label: string
}

export interface TeamMember {
  readonly slug: string
  readonly name: string
  readonly displayName: string
  readonly role: string
  readonly title: string
  readonly description: string
  readonly image: string
  readonly alt: string
  readonly bio: readonly string[]
  readonly highlights: readonly string[]
  readonly stats: readonly Stat[]
  readonly skills: readonly Skill[]
  readonly timeline: readonly TimelineEntry[]
}

export const teamMembers: readonly TeamMember[] = [
  {
    slug: "mathys-fornasier",
    name: "Mathys Fornasier",
    displayName: "MATHYS FORNASIER",
    role: "Co-Fondateur",
    title: "Skieur Pro FWT & Créateur de Winter Mate",
    description:
      "Né à Chamrousse, formé au ski alpin classique puis passé au freeride. Mentoré par Mickaël Bimboes, il fusionne freestyle et big mountain sur le circuit FWT Challenger.",
    image: "/images/team/mathys.png",
    alt: "Mathys Fornasier en freeride",
    bio: [
      "Mathys Fornasier, né en 2001, représente la convergence entre l'héritage du ski alpin classique et les nouvelles exigences du freeride de haut niveau. Originaire de Chamrousse, station iséroise emblématique située à proximité de Grenoble, il a bénéficié d'un environnement propice au développement d'une technique de ski pure et agressive dès son plus jeune âge.",
      "Ayant commencé à skier peu après ses premiers pas, il a intégré le club de ski local de Chamrousse, où il a acquis les bases fondamentales de la compétition alpine. C'est cependant son désir d'exploration et de créativité qui l'a poussé à délaisser les piquets pour les pentes vierges.",
      "La rencontre avec Mickaël Bimboes a été déterminante. Ce dernier, décelant le potentiel technique exceptionnel du jeune skieur, a pris le rôle de mentor. Ensemble, ils ont arpenté les massifs français, Mathys absorbant l'expérience tactique de Bimboes tandis que ce dernier s'inspirait de la fluidité et des capacités acrobatiques de son « apprenti ». Cette synergie lui a permis de se qualifier rapidement pour le Freeride World Tour, une ascension météoritique qui a surpris de nombreux observateurs.",
      "En compétition, Fornasier se distingue par une capacité à intégrer des figures de freestyle (360, backflip) dans des lignes de freeride engagées, une compétence devenue indispensable pour performer sur le circuit moderne.",
      "L'un de ses traits les plus distinctifs est sa capacité à transformer son expertise technique en un produit numérique innovant. Le 1er décembre 2025, il a lancé Winter Mate, une application mobile destinée à structurer l'apprentissage du ski pour tous les niveaux. Plus de 12 500 téléchargements en moins de trois mois témoignent d'un succès immédiat. Winter Mate repose sur une librairie de plus de 150 tutoriels vidéo, un service d'analyse personnalisée par des experts, et une communauté de skieurs pour partager sorties et défis.",
    ],
    highlights: [
      "11ème au classement FWT Challenger 2026",
      "Créateur de Winter Mate, 12 500+ téléchargements en 3 mois",
      "Spécialiste fusion freestyle × freeride",
      "Formé au club de ski de Chamrousse",
    ],
    stats: [
      { value: "12 500+", label: "Téléchargements Winter Mate" },
      { value: "150+", label: "Tutoriels vidéo" },
      { value: "11ème", label: "FWT Challenger 2026" },
      { value: "25 ans", label: "Compétiteur FWT" },
    ],
    skills: [
      { name: "Ski Freeride", level: 92 },
      { name: "Freestyle (tricks en ligne)", level: 88 },
      { name: "Ski Alpin / Technique", level: 90 },
      { name: "Pédagogie & Transmission", level: 85 },
      { name: "Entrepreneuriat Digital", level: 80 },
      { name: "Lecture de terrain", level: 87 },
    ],
    timeline: [
      {
        year: "2025 - Présent",
        title: "Lancement de Winter Mate",
        description:
          "Création et lancement de l'application mobile d'apprentissage du ski. 12 500+ téléchargements en 3 mois.",
      },
      {
        year: "2024 - 2026",
        title: "Circuit FWT Challenger",
        description:
          "Qualification et progression sur le Freeride World Tour Challenger. 11ème au classement général 2026.",
      },
      {
        year: "2020 - 2024",
        title: "Mentorat Winteractivity",
        description:
          "Intégration au collectif Winteractivity sous le mentorat de Mickaël Bimboes. Développement en big mountain.",
      },
      {
        year: "2015 - 2020",
        title: "Formation Alpine, Club de Chamrousse",
        description:
          "Entraînement intensif en ski alpin compétitif. Acquisition des bases techniques et transition progressive vers le freeride.",
      },
      {
        year: "2001",
        title: "Naissance à Chamrousse",
        description:
          "Premiers pas sur les skis dans la station iséroise, berceau de sa passion pour la montagne.",
      },
    ],
  },
  {
    slug: "emiliano-silva",
    name: "Emiliano Silva",
    displayName: "EMILIANO SILVA",
    role: "Ambassadeur & Vidéaste",
    title: "Skieur Big Mountain & Créateur de Contenu",
    description:
      "Basé à Courchevel, spécialiste des sauts de barres rocheuses massifs. Ses vidéos de drops à plus de 18 mètres cumulent des millions de vues sur sa chaîne de 183K abonnés.",
    image: "/images/team/emiliano.jpg",
    alt: "Emiliano Silva en big mountain",
    bio: [
      "Emiliano Silva, skieur de 25 ans basé à Courchevel, représente la branche « vlogging » et haute performance du collectif Winteractivity. Son profil illustre parfaitement l'athlète moderne dont la valeur est autant liée à sa capacité à capturer des images impressionnantes qu'à ses résultats en compétition.",
      "Silva s'est fait un nom grâce à un ski extrêmement engagé, caractérisé par des sauts de barres rocheuses massifs. Ses vidéos, souvent intitulées « 60 ft Freeride Skiing » (référence à des sauts de plus de 18 mètres), cumulent des milliers de vues et témoignent d'un engagement physique hors du commun. Résidant au cœur des 3 Vallées, il exploite les terrains de Courchevel et Val Thorens pour produire un contenu qui allie esthétique et adrénaline.",
      "Bien qu'il participe aux compétitions de qualification du FWT, comme le North Face Frontier en Nouvelle-Zélande où il a terminé 10ème en 2024, Silva privilégie la liberté de création offerte par la production indépendante. Sa chaîne YouTube, forte de 183 000 abonnés, sert de plateforme pour ses vlogs immersifs où il partage son quotidien de skieur pro, ses succès mais aussi ses échecs.",
      "Son modèle économique repose sur des partenariats stratégiques avec des marques majeures : Columbia pour l'équipement textile, Majesty pour les skis, Arva pour la sécurité avalanche, Vuarnet pour l'optique et Insta360 pour la captation vidéo immersive. Ces collaborations sont intégrées de manière organique dans son contenu, renforçant son image d'athlète testeur et expert.",
      "La relation de Silva avec sa communauté est entretenue par une transparence sur son matériel et une pédagogie sur la sécurité. Il utilise son influence pour rappeler les dangers de la montagne, notamment lors des débuts de saison où la couche de neige peut masquer des rochers dangereux.",
    ],
    highlights: [
      "183 000 abonnés YouTube",
      "10ème au North Face Frontier FWT 2024",
      "Spécialiste drops massifs (18m+)",
      "Partenaire Columbia, Majesty, Arva, Vuarnet, Insta360",
    ],
    stats: [
      { value: "183K", label: "Abonnés YouTube" },
      { value: "18m+", label: "Record de drop" },
      { value: "10ème", label: "North Face Frontier 2024" },
      { value: "5", label: "Sponsors majeurs" },
    ],
    skills: [
      { name: "Big Mountain / Engagement", level: 96 },
      { name: "Production Vidéo / Vlog", level: 92 },
      { name: "Sauts & Barres Rocheuses", level: 95 },
      { name: "Storytelling & Communauté", level: 88 },
      { name: "Sécurité Avalanche", level: 82 },
      { name: "Ski en conditions extrêmes", level: 90 },
    ],
    timeline: [
      {
        year: "2024 - Présent",
        title: "Membre clé du collectif Winteractivity",
        description:
          "Production régulière de vlogs immersifs en 4K. Apport d'une touche d'audace et d'esthétique au collectif.",
      },
      {
        year: "2024",
        title: "North Face Frontier, Nouvelle-Zélande",
        description:
          "10ème place sur la compétition FWT Qualifier au bout du monde. Première expérience internationale majeure.",
      },
      {
        year: "2022 - 2024",
        title: "Explosion YouTube : 183K abonnés",
        description:
          "Développement de sa chaîne avec des vidéos de drops massifs (60 ft Freeride Skiing). Partenariats avec Columbia, Majesty, Arva, Vuarnet et Insta360.",
      },
      {
        year: "2020 - 2022",
        title: "Installation à Courchevel",
        description:
          "Spécialisation en big mountain dans les 3 Vallées. Début de la production de contenu vidéo sur YouTube.",
      },
      {
        year: "~2001",
        title: "Naissance",
        description:
          "Grandit avec la passion du ski et de l'image. Les premières descentes forgent un goût pour l'engagement extrême.",
      },
    ],
  },
  {
    slug: "mickael-bimboes",
    name: "Mickaël Bimboes",
    displayName: "MICKAËL BIMBOES",
    role: "Fondateur Winteractivity",
    title: "Ex-Top 3 Mondial FWT & Entrepreneur",
    description:
      "Né à Metz, loin des Alpes, il a forgé sa légende à la force du poignet. Vainqueur de l'Xtreme de Verbier 2018, 3ème mondial FWT, et créateur de Winteractivity (434K abonnés).",
    image: "/images/team/michael.jpeg",
    alt: "Mickaël Bimboes, fondateur de Winteractivity",
    bio: [
      "Mickaël Bimboes, né le 23 août 1986 à Metz, occupe une place singulière dans l'histoire du ski français. Son origine géographique, loin des massifs alpins traditionnels, constitue un élément fondamental de sa narration personnelle et de sa rigueur professionnelle. Contrairement à de nombreux coureurs nés « sur les skis » en haute altitude, Bimboes a dû forger sa légitimité par une approche analytique et une polyvalence sportive rare.",
      "Diplômé en STAPS à Metz, il a acquis une compréhension théorique du mouvement et de la physiologie de l'effort qu'il a ensuite appliquée à sa pratique du ski, du snowboard et de la voile, disciplines dans lesquelles il est moniteur diplômé. Cette double compétence, théorique et pratique, explique en partie sa capacité ultérieure à vulgariser la technique du ski pour un large public.",
      "Sa période active en compétition, de 2013 à 2023, l'a vu progresser sur le circuit mondial du Freeride World Tour avec une régularité impressionnante. Champion de France en 2017, il enchaîne avec une saison 2018 exceptionnelle : victoire à Fieberbrunn, victoire à l'Xtreme de Verbier (la face la plus mythique du freeride) et 3ème place au classement mondial. Cette performance sur le Bec des Rosses a démontré sa capacité à gérer une pression psychologique extrême tout en proposant une lecture de face créative et fluide.",
      "À l'issue de la saison 2019, Bimboes a opéré un pivot stratégique vers la création de contenu, anticipant la montée en puissance de l'influence numérique. Ce tournant s'est concrétisé par le développement de Winteractivity, une marque ombrelle regroupant plusieurs chaînes YouTube aux thématiques distinctes. La chaîne principale se concentre sur l'adrénaline et l'aventure en montagne, tandis que WACADEMIE s'adresse aux passionnés de technique. Parallèlement, il a investi les créneaux du mode de vie avec « Passion Rénovation » et le secteur automobile avec « WA T'AUTO ».",
      "La chaîne Winteractivity, forte de ses 434 000 abonnés, ne se contente pas de diffuser des exploits sportifs. Elle propose un contenu narratif où le risque et la vulnérabilité occupent une place centrale. Des vidéos traitant de blessures graves ou des risques d'avalanche servent de vecteurs pédagogiques puissants. En scénarisant la réalité du terrain, Bimboes transforme l'athlète en éducateur, renforçant sa crédibilité auprès d'une communauté qui valorise l'authenticité.",
    ],
    highlights: [
      "Champion de France 2017",
      "Vainqueur Xtreme de Verbier 2018",
      "3ème mondial FWT 2018",
      "434 000 abonnés, Winteractivity",
      "Moniteur diplômé ski, snowboard & voile",
    ],
    stats: [
      { value: "434K", label: "Abonnés YouTube" },
      { value: "Top 3", label: "Mondial FWT 2018" },
      { value: "10 ans", label: "Carrière FWT (2013-2023)" },
      { value: "4", label: "Chaînes YouTube" },
    ],
    skills: [
      { name: "Freeride Compétition (FWT)", level: 97 },
      { name: "Création de Contenu", level: 94 },
      { name: "Pédagogie & Vulgarisation", level: 92 },
      { name: "Entrepreneuriat Digital", level: 90 },
      { name: "Snowboard", level: 80 },
      { name: "Gestion de communauté", level: 88 },
    ],
    timeline: [
      {
        year: "2023",
        title: "Retour victorieux au FWT Qualifier, Le Dévoluy",
        description:
          "1er en catégorie snowboard sous le pseudonyme « Mike Bim ». Preuve d'une polyvalence toujours intacte.",
      },
      {
        year: "2019 - Présent",
        title: "Pivot vers Winteractivity",
        description:
          "Création de l'écosystème Winteractivity : chaîne principale (434K abonnés), WACADEMIE, Passion Rénovation et WA T'AUTO.",
      },
      {
        year: "2018",
        title: "Saison historique : 3ème mondial FWT",
        description:
          "Victoire à Fieberbrunn, victoire à l'Xtreme de Verbier (Bec des Rosses), 3ème place au classement mondial. Sommet de sa carrière compétitive.",
      },
      {
        year: "2017",
        title: "Champion de France de Freeride",
        description:
          "Consécration nationale, marquant sa légitimité technique au plus haut niveau français.",
      },
      {
        year: "2013 - 2017",
        title: "Ascension sur le circuit FWT",
        description:
          "Installation à Courchevel, puis Bozel (3 Vallées). Progression régulière sur le Freeride World Tour.",
      },
      {
        year: "~2008",
        title: "Diplôme STAPS, Metz",
        description:
          "Formation en sciences du sport. Obtention des diplômes de moniteur de ski, snowboard et voile.",
      },
      {
        year: "1986",
        title: "Naissance à Metz",
        description:
          "Né loin des Alpes, il devra forger sa légitimité par une rigueur et une polyvalence hors du commun.",
      },
    ],
  },
] as const

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug)
}
