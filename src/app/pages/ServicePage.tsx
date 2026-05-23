import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ChevronDown, ArrowRight, Phone, Shield, Award, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import Navigation from "../components/Navigation";
import CTASection from "../components/CTASection";

const DOMAIN = "https://entre4murs.fr";

export type ServiceSlug =
  | "peinture-interieure"
  | "peinture-exterieure"
  | "pose-placo"
  | "renovation-interieure"
  | "ravalement-facade"
  | "enduits-finitions";

interface ServiceData {
  slug: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  heroPhoto: string;
  label: string;
  title: string;
  titleAccent: string;
  intro: string;
  description: string;
  prestations: { title: string; items: string[] }[];
  photos: { src: string; alt: string; caption: string }[];
  faqs: { q: string; a: string }[];
  pourquoi: string[];
}

const services: Record<ServiceSlug, ServiceData> = {
  "peinture-interieure": {
    slug: "peinture-interieure",
    metaTitle: "Peinture intérieure L'Aigle Orne — Entre 4 Murs, artisan qualifié",
    metaDescription:
      "Peinture intérieure à L'Aigle et dans l'Orne : préparation des supports, peintures Sikkens, finitions haut de gamme. Devis gratuit sous 48h.",
    heroPhoto: "/images/chantier-03.jpg",
    label: "Peinture intérieure",
    title: "Un intérieur",
    titleAccent: "sublimé couche après couche",
    intro: "Artisan peintre à L'Aigle depuis 2010",
    description:
      "La peinture intérieure, c'est bien plus que du coloris. C'est la préparation minutieuse des supports, le choix des produits adaptés à chaque pièce, et des finitions qui tiennent dans le temps. Chez Entre 4 Murs, chaque chantier est traité avec la même exigence — qu'il s'agisse d'un rafraîchissement ou d'une rénovation complète.",
    prestations: [
      {
        title: "Préparation des supports",
        items: [
          "Rebouchage, enduits de lissage",
          "Décapage et ponçage des anciennes couches",
          "Application de primaires d'accrochage",
          "Protection des sols et éléments hors travaux",
        ],
      },
      {
        title: "Application et finitions",
        items: [
          "Peintures acryliques et glycéro haut de gamme (Sikkens, Tollens)",
          "Mat velouté, satiné, laqué selon les pièces",
          "Finitions décoratives et effets matière",
          "Conseils couleur personnalisés inclus",
        ],
      },
      {
        title: "Types de travaux",
        items: [
          "Chambres, salons, couloirs, cuisines",
          "Plafonds et poutres apparentes",
          "Boiseries, huisseries, menuiseries",
          "Appartements locatifs et résidences principales",
        ],
      },
    ],
    photos: [
      { src: "/images/chantier-03.jpg", alt: "Chambre peinture bleue mauve L'Aigle", caption: "Chambre — teinte bleue mauve, L'Aigle" },
      { src: "/images/chantier-01.jpg", alt: "Chambre sous pente peinture Orne", caption: "Chambre sous combles — finitions sur pente" },
      { src: "/images/chantier-06.jpg", alt: "Rénovation peinture intérieure en cours", caption: "Rénovation intérieure — préparation des supports" },
      { src: "/images/chantier-09.jpg", alt: "Peinture intérieure artisan Orne", caption: "Salon — peinture haut de gamme" },
    ],
    faqs: [
      {
        q: "Combien de couches de peinture appliquez-vous ?",
        a: "En général, deux couches de peinture de finition après la sous-couche primaire. Sur des supports difficiles (taches, anciennes couleurs foncées), nous pouvons aller jusqu'à trois couches pour garantir un résultat homogène et durable.",
      },
      {
        q: "Quelles marques de peinture utilisez-vous ?",
        a: "Nous travaillons principalement avec Sikkens et Tollens — deux références professionnelles reconnues pour leur tenue dans le temps, leur facilité d'application et leur gamme de finitions. Nous pouvons également travailler avec des peintures écologiques à faibles COV selon vos souhaits.",
      },
      {
        q: "Faut-il vider les pièces avant le chantier ?",
        a: "Idéalement oui, pour les grandes pièces. Nous pouvons déplacer les meubles légers si nécessaire et couvrons systématiquement les sols et éléments non peints avec des bâches de protection professionnelles.",
      },
      {
        q: "Combien de temps dure un chantier de peinture intérieure ?",
        a: "Cela dépend de la surface et de l'état des supports. Une chambre standard se réalise en 1 à 2 jours. Un appartement complet peut prendre 3 à 5 jours. Nous établissons un planning précis lors de la visite de devis.",
      },
      {
        q: "Intervenez-vous dans toute l'Orne ?",
        a: "Oui, notre zone d'intervention couvre L'Aigle et un rayon d'environ 50 km : Verneuil, Argentan, Mortagne-au-Perche, Nogent-le-Rotrou, Gacé, et toutes les communes de l'Orne. Le déplacement est inclus dans notre devis.",
      },
    ],
    pourquoi: [
      "Maîtrise parfaite des supports difficiles (pans de bois, plâtre ancien, enduits…)",
      "Conseils couleur et finitions adaptés à votre luminosité",
      "Produits professionnels pour une tenue garantie dans le temps",
      "Chantier propre : bâches, protection systématique, nettoyage en fin de prestation",
    ],
  },

  "peinture-exterieure": {
    slug: "peinture-exterieure",
    metaTitle: "Peinture extérieure L'Aigle Orne — ravalement, façade, garantie décennale",
    metaDescription:
      "Peinture extérieure et ravalement de façade dans l'Orne. Artisan qualifié, assurance décennale, conformité DTU. Devis gratuit à L'Aigle.",
    heroPhoto: "/images/chantier-15.jpg",
    label: "Peinture extérieure",
    title: "Votre façade,",
    titleAccent: "protégée et embellie",
    intro: "Ravalement et peinture extérieure dans l'Orne",
    description:
      "La peinture extérieure doit faire face aux intempéries normandes : humidité, gel, UV. Chez Entre 4 Murs, nous sélectionnons des systèmes de peinture adaptés au climat local et à la nature de vos façades (enduit, béton, brique, torchis…). Tous nos travaux extérieurs sont réalisés dans le respect des normes DTU et couverts par notre assurance décennale.",
    prestations: [
      {
        title: "Diagnostic et préparation",
        items: [
          "Inspection visuelle et relevé des pathologies",
          "Traitement des fissures et désordres",
          "Application d'anti-mousse, traitement hydrofuge",
          "Nettoyage haute pression si nécessaire",
        ],
      },
      {
        title: "Application",
        items: [
          "Peintures minérales, acryliques, siloxane selon support",
          "Peintures respirantes adaptées aux façades anciennes",
          "Application par rouleau, pinceau ou airless",
          "Finitions soignées autour des menuiseries et encadrements",
        ],
      },
      {
        title: "Garanties et conformité",
        items: [
          "Travaux conformes aux normes DTU 42.1 et 59.1",
          "Assurance décennale fournie",
          "Attestation d'assurance disponible sur demande",
          "Rapport de chantier remis en fin de travaux",
        ],
      },
    ],
    photos: [
      { src: "/images/chantier-15.jpg", alt: "Rénovation façade ferme normande L'Aigle", caption: "Ferme normande rénovée — L'Aigle, Orne" },
      { src: "/images/chantier-16.jpg", alt: "Peinture extérieure maison Orne", caption: "Maison individuelle — peinture façade" },
      { src: "/images/chantier-17.jpg", alt: "Ravalement artisan Orne", caption: "Ravalement complet — traitement des fissures" },
      { src: "/images/chantier-18.jpg", alt: "Enduits façade extérieure Orne", caption: "Enduit de façade — finitions naturelles" },
    ],
    faqs: [
      {
        q: "Quelle est la durée de vie d'une peinture extérieure ?",
        a: "Avec des produits professionnels et une bonne préparation des supports, une peinture extérieure dure entre 8 et 15 ans. La durée dépend de l'exposition (orientation, proximité de végétation) et du type de produit utilisé.",
      },
      {
        q: "Quand peut-on réaliser des travaux de peinture extérieure ?",
        a: "Les travaux extérieurs s'effectuent idéalement entre avril et octobre, par températures comprises entre 8°C et 35°C, hors pluie et gel. Nous planifions les chantiers en tenant compte des prévisions météo.",
      },
      {
        q: "La garantie décennale couvre-t-elle bien la peinture extérieure ?",
        a: "Oui. Tous nos chantiers de peinture extérieure et ravalement sont couverts par notre assurance décennale. Nous vous remettons l'attestation d'assurance avant le début des travaux.",
      },
      {
        q: "Faut-il obtenir une autorisation pour un ravalement de façade ?",
        a: "Dans certaines communes et pour les bâtiments classés, une déclaration préalable peut être nécessaire. Nous vous conseillons sur les démarches à effectuer en mairie selon l'emplacement de votre bien.",
      },
    ],
    pourquoi: [
      "Expertise des façades normandes : torchis, pierre, enduit, brique",
      "Sélection de produits respirants adaptés aux bâtiments anciens",
      "Conformité DTU et remise d'attestation décennale avant le chantier",
      "Travaux réalisés sans sous-traitance — Guillaume intervient lui-même",
    ],
  },

  "pose-placo": {
    slug: "pose-placo",
    metaTitle: "Plaquiste L'Aigle Orne — pose placo, cloisons, plafonds suspendus",
    metaDescription:
      "Pose de plaques de plâtre à L'Aigle et dans l'Orne. Cloisons, doublages, plafonds suspendus, isolation intégrée. Artisan plaquiste depuis 2010.",
    heroPhoto: "/images/chantier-35.jpg",
    label: "Pose de placo",
    title: "Aménager, cloisonner,",
    titleAccent: "structurer vos espaces",
    intro: "Artisan plaquiste à L'Aigle depuis 2010",
    description:
      "La pose de plaques de plâtre est un métier de précision. Cloisons, doublages, plafonds suspendus, trémies, niche encastrée — chaque élément doit être parfaitement d'aplomb, bien ancré, et traité pour recevoir la finition finale. Entre 4 Murs maîtrise l'ensemble de la filière sèche, du calepinage à l'enduit de finition.",
    prestations: [
      {
        title: "Cloisons et doublages",
        items: [
          "Cloisons de distribution (72/48/36)",
          "Doublages thermiques et phoniques",
          "Cloisons courbes et formes spéciales",
          "Adaptation aux supports existants (béton, bois, pierre)",
        ],
      },
      {
        title: "Plafonds et combles",
        items: [
          "Faux-plafonds suspendus",
          "Plafonds tendus avec ossature",
          "Aménagement de combles perdus ou habitables",
          "Traitement des rampants sous toiture",
        ],
      },
      {
        title: "Isolation et finitions",
        items: [
          "Isolation thermique intégrée (laine de verre, roche)",
          "Isolation acoustique inter-logements",
          "Bandes et joints de finition (Q3/Q4)",
          "Prêt à peindre — finitions lisses ou grain",
        ],
      },
    ],
    photos: [
      { src: "/images/chantier-35.jpg", alt: "Aménagement combles placo Orne", caption: "Combles aménagés — placo sur charpente" },
      { src: "/images/chantier-31.jpg", alt: "Carrelage mural placo salle de bain", caption: "Salle de bain — cloison et carrelage mural" },
      { src: "/images/chantier-07.jpg", alt: "Pose placo cloison artisan L'Aigle", caption: "Cloison de distribution — en cours de pose" },
      { src: "/images/chantier-08.jpg", alt: "Placo combles rénovation Orne", caption: "Aménagement de combles — isolation et placo" },
    ],
    faqs: [
      {
        q: "Quelle épaisseur de plaque utilise-t-on selon les usages ?",
        a: "Pour les cloisons standard, nous utilisons des plaques BA13 (13 mm). Pour les cloisons phoniques ou les salles humides, nous optons pour des plaques hydrofuges (BA13H) ou phoniques (BA13A). Pour les doublages sur murs froids, nous préférons souvent des complexes isolants avec une épaisseur adaptée.",
      },
      {
        q: "Combien de temps dure un chantier de cloisons ?",
        a: "La pose d'une cloison simple de 10 m² prend une journée. Un aménagement de combles complet peut nécessiter 3 à 7 jours selon la surface et les contraintes d'accès. Nous ajustons le planning selon vos contraintes.",
      },
      {
        q: "Peut-on poser du carrelage directement sur du placo ?",
        a: "Oui, à condition d'utiliser des plaques hydrofuges (type Knauf Aquapanel ou plaques H1) dans les zones humides. Nous gérons l'ensemble de la prestation, de la pose de placo à la finition carrelage.",
      },
      {
        q: "Le placo est-il compatible avec les maisons anciennes ?",
        a: "Absolument. Dans les maisons en pans de bois ou en pierre normande, le placo (notamment les doublages) permet d'améliorer le confort thermique et acoustique sans dénaturer le bâti. Nous adaptons les techniques aux contraintes du bâtiment.",
      },
    ],
    pourquoi: [
      "Maîtrise de la filière sèche de A à Z : ossature, isolation, finition",
      "Qualité de joints Q3/Q4 prêts pour la peinture directe",
      "Adapté aux bâtiments anciens comme aux constructions neuves",
      "Coordination avec les autres corps de métier si nécessaire",
    ],
  },

  "renovation-interieure": {
    slug: "renovation-interieure",
    metaTitle: "Rénovation intérieure L'Aigle Orne — entreprise artisanale, devis gratuit",
    metaDescription:
      "Rénovation intérieure complète à L'Aigle et dans l'Orne. Cuisine, salle de bain, salon, appartement. Entre 4 Murs, artisan depuis 2010.",
    heroPhoto: "/images/chantier-26.jpg",
    label: "Rénovation intérieure",
    title: "Votre rénovation,",
    titleAccent: "un projet entre de bonnes mains",
    intro: "Rénovation complète dans l'Orne depuis 2010",
    description:
      "La rénovation intérieure, c'est souvent plusieurs métiers à coordonner. Chez Entre 4 Murs, nous prenons en charge la globalité du projet : démolition, cloisons, isolation, revêtements, peinture — tout sous la responsabilité d'un seul artisan. Pas de sous-traitance, une interlocution claire, un résultat cohérent.",
    prestations: [
      {
        title: "Démolition et gros œuvre léger",
        items: [
          "Dépose des anciens revêtements",
          "Abattement de cloisons non porteuses",
          "Evacuation des gravats",
          "Rebouchage et ragréage des supports",
        ],
      },
      {
        title: "Second œuvre et finitions",
        items: [
          "Pose de cloisons (placo, briques)",
          "Carrelage, faïence, parquet stratifié",
          "Boiseries décoratives et moulures",
          "Peinture et revêtements muraux",
        ],
      },
      {
        title: "Pièces spécifiques",
        items: [
          "Cuisine : faïences, crédences, finitions",
          "Salle de bain : carrelage, douche à l'italienne",
          "Salons et séjours : enduits décoratifs",
          "Appartements locatifs : remise en état complète",
        ],
      },
    ],
    photos: [
      { src: "/images/chantier-26.jpg", alt: "Rénovation salon boiseries Orne", caption: "Salon rénové — boiseries et revêtements" },
      { src: "/images/chantier-21.jpg", alt: "Salle de bain rénovation marbre bleu Orne", caption: "Salle de bain haut de gamme — carrelage marbre bleu" },
      { src: "/images/chantier-22.jpg", alt: "Rénovation intérieure complète résidence Orne", caption: "Rénovation complète — résidence Orne" },
      { src: "/images/chantier-09.jpg", alt: "Cuisine rénovation artisan L'Aigle", caption: "Cuisine rénovée — faïences et finitions" },
    ],
    faqs: [
      {
        q: "Vous occupez-vous de l'ensemble du projet ou seulement d'une partie ?",
        a: "Selon vos besoins, nous pouvons intervenir sur tout ou partie du chantier. Nous gérons l'ensemble de la rénovation intérieure (placo, revêtements, peinture) et pouvons nous coordonner avec vos autres corps de métier (plombier, électricien).",
      },
      {
        q: "Proposez-vous un suivi de chantier ?",
        a: "Oui. Nous établissons un planning détaillé en amont et assurons une communication régulière tout au long du chantier. Vous êtes informé de l'avancement à chaque étape.",
      },
      {
        q: "Pouvez-vous rénover un appartement en location habité ?",
        a: "Oui, selon le type de travaux. Pour les rénovations lourdes, il est préférable que le logement soit libre. Pour des rafraîchissements (peinture, revêtements), nous adaptons notre planning pour limiter la gêne.",
      },
      {
        q: "Faites-vous les plans et l'avant-projet ?",
        a: "Nous ne sommes pas architectes, mais nous pouvons vous accompagner dans la définition du projet : choix des matériaux, configuration des pièces, cohérence de l'ensemble. Pour les projets complexes, nous travaillons avec des architectes partenaires.",
      },
    ],
    pourquoi: [
      "Un seul interlocuteur pour toute la rénovation",
      "Aucune sous-traitance : Guillaume sur le chantier du premier au dernier jour",
      "Coordination incluse avec les autres corps de métier",
      "16 ans de chantiers de rénovation dans l'Orne",
    ],
  },

  "ravalement-facade": {
    slug: "ravalement-facade",
    metaTitle: "Ravalement de façade L'Aigle Orne — artisan qualifié, garantie décennale",
    metaDescription:
      "Ravalement de façade à L'Aigle et dans l'Orne. Diagnostic, traitement des pathologies, enduits, peinture. Conformité DTU, assurance décennale.",
    heroPhoto: "/images/chantier-15.jpg",
    label: "Ravalement de façade",
    title: "Ravalement de façade,",
    titleAccent: "fait dans les règles de l'art",
    intro: "Ravalement conforme DTU dans l'Orne depuis 2010",
    description:
      "Le ravalement de façade est un chantier technique qui engage la durabilité de votre bien sur 10 à 20 ans. Il ne s'improvise pas. Chez Entre 4 Murs, chaque chantier commence par un diagnostic rigoureux : fissures, remontées capillaires, décollements d'enduit, mousse ou lichen. Nous traitons les pathologies avant d'appliquer tout revêtement.",
    prestations: [
      {
        title: "Diagnostic et traitement",
        items: [
          "Inspection complète de la façade",
          "Traitement anti-mousse et hydrofuge",
          "Réparation des fissures (microfissures à lézardes)",
          "Reprise des joints de maçonnerie si nécessaire",
        ],
      },
      {
        title: "Enduits et revêtements",
        items: [
          "Enduit monocouche ou bicouche",
          "Enduits à la chaux pour bâtiments anciens",
          "Enduits minéraux, acryliques, silicone",
          "Peinture façade respirante finition lisse ou grattée",
        ],
      },
      {
        title: "Finitions et garanties",
        items: [
          "Finitions soignées autour des baies et couvertines",
          "Conformité DTU 26.1, DTU 59.1, DTU 42.1",
          "Assurance décennale fournie avant le démarrage",
          "Rapport de chantier avec photos avant/après",
        ],
      },
    ],
    photos: [
      { src: "/images/chantier-15.jpg", alt: "Ravalement ferme normande L'Aigle Orne", caption: "Réhabilitation façade — ferme normande, L'Aigle" },
      { src: "/images/chantier-19.jpg", alt: "Ravalement façade enduit Orne", caption: "Ravalement enduit monocouche — Orne" },
      { src: "/images/chantier-20.jpg", alt: "Traitement façade humidité Orne", caption: "Traitement anti-humidité avant ravalement" },
      { src: "/images/chantier-16.jpg", alt: "Peinture façade maison Orne", caption: "Peinture façade après ravalement" },
    ],
    faqs: [
      {
        q: "À quelle fréquence faut-il ravaler une façade ?",
        a: "La réglementation impose un ravalement tous les 10 ans dans certaines communes. Dans les faits, la durée de vie d'un ravalement bien réalisé est de 15 à 20 ans. L'exposition aux intempéries, notamment en Normandie, accélère parfois le vieillissement.",
      },
      {
        q: "Y a-t-il des aides financières pour le ravalement ?",
        a: "Dans certains cas, des aides locales ou des déductions fiscales peuvent s'appliquer. Nous vous conseillons de vous renseigner en mairie. Si le ravalement est combiné à une isolation extérieure, des aides comme MaPrimeRénov' peuvent être mobilisables.",
      },
      {
        q: "Faut-il une déclaration préalable pour un ravalement ?",
        a: "Dans beaucoup de communes, un changement de couleur ou de matériau nécessite une déclaration préalable. Nous vous accompagnons dans ces démarches et vous conseillons sur les teintes validées par les ABF si votre bien est en zone protégée.",
      },
      {
        q: "Intervenez-vous sur des maisons en pierre ou à pans de bois ?",
        a: "Oui, c'est même notre spécialité. L'Orne est riche en bâtiments anciens qui demandent des matériaux adaptés (enduits à la chaux, peintures minérales). Nous maîtrisons la restauration du bâti traditionnel normand.",
      },
    ],
    pourquoi: [
      "Diagnostic systématique avant tout traitement",
      "Maîtrise des pathologies de façades normandes (humidité, gel, lichen)",
      "Enduits à la chaux pour bâtiments classés ou sensibles",
      "Assurance décennale fournie avant le démarrage du chantier",
    ],
  },

  "enduits-finitions": {
    slug: "enduits-finitions",
    metaTitle: "Enduits décoratifs et finitions artisanales — Entre 4 Murs, L'Aigle Orne",
    metaDescription:
      "Enduits à la chaux, béton ciré, stucco vénitien, tadelakt dans l'Orne. Artisan finisseur à L'Aigle depuis 2010. Devis gratuit.",
    heroPhoto: "/images/chantier-21.jpg",
    label: "Enduits & finitions",
    title: "La matière brute,",
    titleAccent: "au service de vos espaces",
    intro: "Enduits décoratifs artisanaux dans l'Orne",
    description:
      "Les enduits décoratifs et finitions artisanales transforment un espace ordinaire en un lieu singulier. Béton ciré, stucco vénitien, tadelakt, chaux naturelle — ces matières nobles demandent un savoir-faire précis, acquis par des années de pratique. Entre 4 Murs vous propose un niveau de finition rare, habituellement réservé aux réalisations haut de gamme.",
    prestations: [
      {
        title: "Enduits à la chaux",
        items: [
          "Chaux naturelle aérienne et hydraulique",
          "Finitions talochées, grattées, lissées",
          "Compatible avec les bâtiments anciens et classés",
          "Régulation hygrométrique naturelle",
        ],
      },
      {
        title: "Effets matière contemporains",
        items: [
          "Béton ciré (plans de travail, sols, murs)",
          "Stucco vénitien et marbre en poudre",
          "Tadelakt (salle de bain, douche à l'italienne)",
          "Badigeon et laits de chaux colorés",
        ],
      },
      {
        title: "Finitions décorative",
        items: [
          "Effets patinés et vieillis",
          "Décors peints et trompe-l'œil",
          "Reprises sur boiseries et encadrements",
          "Revêtements muraux textile et papier",
        ],
      },
    ],
    photos: [
      { src: "/images/chantier-21.jpg", alt: "Carrelage marbre bleu salle de bain haut de gamme Orne", caption: "Salle de bain — carrelage grand format effet marbre" },
      { src: "/images/chantier-26.jpg", alt: "Boiseries décoratives salon Orne", caption: "Salon — boiseries décoratives et finitions" },
      { src: "/images/chantier-25.jpg", alt: "Finitions artisanales enduit Orne", caption: "Enduit lissé — finitions haut de gamme" },
      { src: "/images/chantier-12.jpg", alt: "Béton ciré enduit décoratif artisan L'Aigle", caption: "Enduit décoratif — effet béton" },
    ],
    faqs: [
      {
        q: "Le béton ciré convient-il aux pièces humides ?",
        a: "Oui, à condition d'appliquer un vernis de protection adapté (polyuréthane ou cire hydrofuge). Le béton ciré est particulièrement prisé pour les douches, les plans vasque et les plans de travail de cuisine.",
      },
      {
        q: "Le tadelakt est-il vraiment étanche ?",
        a: "Le tadelakt est un enduit à base de chaux naturelle rendue imperméable par un traitement au savon de Marseille. Correctement posé, il est parfaitement adapté aux douches et hammams. C'est un savoir-faire qui demande de l'expérience.",
      },
      {
        q: "Peut-on appliquer des enduits à la chaux sur des murs en placo ?",
        a: "Oui, à condition de bien préparer le support (enduit d'accrochage). La chaux s'applique sur placo, mais aussi sur béton, brique, pierre et torchis. Elle est particulièrement adaptée aux maisons anciennes pour sa respirabilité.",
      },
      {
        q: "Combien coûte un mur en stucco vénitien ?",
        a: "Le stucco vénitien est une finition artisanale qui requiert plusieurs journées de travail et des matières premières nobles. Le tarif est sensiblement supérieur à une peinture classique. Contactez-nous pour un devis précis selon la surface et le rendu souhaité.",
      },
    ],
    pourquoi: [
      "Savoir-faire rare dans la région — finitions habituellement réservées au secteur haut de gamme",
      "Maîtrise des matières naturelles : chaux, plâtre, argile",
      "Résultat unique, personnalisé selon votre intérieur et vos goûts",
      "Conseils sur les techniques les mieux adaptées à votre projet",
    ],
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--beige)" }}>
      <button
        className="w-full flex items-center justify-between py-4 text-left gap-4"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={16} style={{ color: "var(--terracotta)" }} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ServicePageProps {
  service: ServiceSlug;
}

export default function ServicePage({ service }: ServicePageProps) {
  const data = services[service];

  const slugMap: Record<ServiceSlug, string> = {
    "peinture-interieure": "peinture-interieure",
    "peinture-exterieure": "peinture-exterieure",
    "pose-placo": "pose-placo-platrerie",
    "renovation-interieure": "renovation-interieure",
    "ravalement-facade": "ravalement-facade",
    "enduits-finitions": "enduits-finitions-decoratives",
  };

  return (
    <>
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`${DOMAIN}/${slugMap[service]}`} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`${DOMAIN}/${slugMap[service]}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${DOMAIN}${data.heroPhoto}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.label,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Entre 4 Murs",
            "telephone": "06XXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "L'Aigle",
              "postalCode": "61300",
              "addressCountry": "FR"
            }
          },
          "areaServed": "Orne",
          "description": data.metaDescription,
          "url": `${DOMAIN}/${slugMap[service]}`
        })}</script>
      </Helmet>

    <div className="min-h-screen" style={{ backgroundColor: "var(--off-white)" }}>
      <Navigation />

      {/* Hero */}
      <section className="relative flex flex-col lg:flex-row min-h-[60vh]">
        {/* Left navy */}
        <div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-28 pb-12 lg:pt-20 lg:pb-12 lg:w-[52%]"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-xs font-medium mb-8 transition-colors hover:opacity-80"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <ArrowLeft size={13} />
            Retour aux services
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              {data.intro}
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-serif)" }} className="mb-4 text-white">
            <span
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                lineHeight: 1.1,
                display: "block",
                fontWeight: 700,
              }}
            >
              {data.title}
            </span>
            <span
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                lineHeight: 1.1,
                display: "block",
                fontWeight: 700,
                color: "var(--terracotta)",
              }}
            >
              {data.titleAccent}
            </span>
          </h1>

          <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
            {data.description}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { icon: Shield, label: "Assurance décennale" },
              { icon: Award, label: "Conformité DTU" },
              { icon: CheckCircle2, label: "Devis gratuit 48h" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5"
                style={{
                  border: "1px solid rgba(201,98,60,0.35)",
                  backgroundColor: "rgba(201,98,60,0.08)",
                }}
              >
                <Icon size={13} style={{ color: "var(--terracotta)" }} />
                <span className="text-xs text-white/80 font-medium">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "var(--terracotta)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
            >
              Demander un devis gratuit
              <ArrowRight size={15} />
            </a>
            <a
              href="tel:+33681601519"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,98,60,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
            >
              <Phone size={14} />
              06 81 60 15 19
            </a>
          </div>
        </div>

        {/* Right photo */}
        <div className="relative lg:w-[48%] h-56 lg:h-auto overflow-hidden">
          <img
            src={data.heroPhoto}
            alt={`${data.label} — Entre 4 Murs, L'Aigle Orne`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-y-0 left-0 w-12 hidden lg:block"
            style={{ background: "linear-gradient(to right, var(--navy), transparent)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(31,47,58,0.1)" }} />
          <div
            className="absolute bottom-5 left-5 lg:left-auto lg:right-5 px-3 py-2"
            style={{ backgroundColor: "rgba(31,47,58,0.9)", border: "1px solid rgba(201,98,60,0.3)" }}
          >
            <div className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: "var(--terracotta)" }}>
              {data.label}
            </div>
            <div className="text-xs font-semibold text-white">Entre 4 Murs · L'Aigle, Orne</div>
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-16" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Ce que nous faisons
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Nos prestations en {data.label.toLowerCase()}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {data.prestations.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-5"
                style={{ backgroundColor: "var(--white)", border: "1px solid var(--beige)" }}
              >
                <div
                  className="text-xs uppercase tracking-widest font-semibold mb-3 pb-3"
                  style={{ color: "var(--terracotta)", borderBottom: "1px solid var(--beige)" }}
                >
                  {p.title}
                </div>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-mid)" }}>
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: "var(--terracotta)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16" style={{ backgroundColor: "var(--beige-light)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Réalisations
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Exemples de chantiers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <motion.img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ background: "linear-gradient(to top, rgba(31,47,58,0.88) 50%, transparent)" }}
                >
                  <p className="text-xs text-white/80 leading-snug">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous */}
      <section className="py-16" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
                <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                  Notre différence
                </span>
              </div>
              <h2
                className="text-2xl md:text-3xl text-white mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Pourquoi choisir Entre 4 Murs{" "}
                <span style={{ color: "var(--terracotta)" }}>pour votre {data.label.toLowerCase()} ?</span>
              </h2>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {data.pourquoi.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--terracotta)" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ backgroundColor: "var(--beige-light)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Questions fréquentes
              </span>
            </div>
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Tout ce que vous voulez savoir
            </h2>
          </motion.div>

          <div>
            {data.faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
    </>
  );
}
