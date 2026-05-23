import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import CTASection from "../components/CTASection";
import { MapPin, Phone, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const DOMAIN = "https://entre4murs.fr";

interface CityPageProps {
  city: string;
}

type ServiceSlug = "peinture-interieure" | "peinture-exterieure" | "pose-placo" | "renovation-interieure" | "ravalement-facade" | "enduits-finitions";

const serviceMap: Record<ServiceSlug, { label: string; href: string; description: string }> = {
  "peinture-interieure": { label: "Peinture intérieure", href: "/peinture-interieure", description: "Préparation, application, finitions haut de gamme" },
  "peinture-exterieure": { label: "Peinture extérieure", href: "/peinture-exterieure", description: "Façades protégées, produits adaptés au climat normand" },
  "pose-placo": { label: "Pose de placo", href: "/pose-placo-platrerie", description: "Cloisons, doublages, plafonds suspendus" },
  "renovation-interieure": { label: "Rénovation intérieure", href: "/renovation-interieure", description: "De la démolition à la finition, un seul artisan" },
  "ravalement-facade": { label: "Ravalement de façade", href: "/ravalement-facade", description: "Diagnostic, traitement, enduits, garantie décennale" },
  "enduits-finitions": { label: "Enduits & finitions", href: "/enduits-finitions-decoratives", description: "Béton ciré, chaux, stucco vénitien, tadelakt" },
};

const cityData: Record<string, {
  name: string;
  displayName: string;
  department: string;
  postalCode: string;
  population: string;
  description: string;
  localChallenges: string[];
  localProjects: string[];
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroPhoto: string;
  photos: string[];
  serviceHighlights: ServiceSlug[];
  nearbyCity?: string;
  nearbyCityHref?: string;
  faq: { question: string; answer: string }[];
}> = {
  laigle: {
    name: "L'Aigle",
    displayName: "L'Aigle",
    department: "Orne",
    postalCode: "61300",
    population: "8 000",
    description: "Chef-lieu de canton dynamique au cœur de l'Orne, L'Aigle bénéficie d'un patrimoine architectural riche mêlant bâtiments anciens et constructions modernes. Notre siège social est basé ici — vous bénéficiez de notre réactivité maximale.",
    localChallenges: [
      "Rénovation de maisons de ville du centre historique",
      "Ravalement des façades en pierre calcaire locale",
      "Adaptation des bâtiments anciens aux normes thermiques",
      "Traitement de l'humidité dans les caves et rez-de-chaussée",
    ],
    localProjects: [
      "Rénovation complète d'une maison de maître rue Gambetta",
      "Ravalement de façade d'un immeuble avenue de la République",
      "Transformation d'un commerce en habitation centre-ville",
      "Rénovation intérieure d'un appartement sous les toits",
    ],
    seoTitle: "Peintre L'Aigle (61300) | Artisan Peinture & Placo | Entre 4 Murs",
    metaDescription: "Artisan peintre et plaquiste à L'Aigle (61300). Entre 4 Murs : peinture intérieure, extérieure, pose de placo, rénovation. Devis gratuit sous 48h. Assurance décennale.",
    h1: "Peintre à L'Aigle : votre artisan depuis 2010",
    intro: "Basé au cœur de L'Aigle, Entre 4 Murs accompagne les particuliers et professionnels dans leurs projets de peinture, placo et rénovation intérieure. Connaissance approfondie du bâti local, des matériaux adaptés au climat normand, et une approche sur-mesure pour chaque chantier.",
    heroPhoto: "/images/chantier-01.jpg",
    photos: ["/images/chantier-26.jpg", "/images/chantier-21.jpg", "/images/chantier-35.jpg"],
    serviceHighlights: ["peinture-interieure", "pose-placo", "renovation-interieure"],
    faq: [
      { question: "Intervenez-vous dans tout L'Aigle ?", answer: "Oui, nous intervenons dans toute la commune de L'Aigle ainsi que dans les villages environnants dans un rayon de 50km. Étant basés sur L'Aigle, nous sommes particulièrement réactifs sur la commune." },
      { question: "Quel est le délai pour un devis à L'Aigle ?", answer: "Nous nous engageons à vous fournir un devis détaillé sous 48h maximum après visite sur site. Pour les chantiers urgents, nous pouvons souvent intervenir plus rapidement." },
      { question: "Quels types de bâtiments rénovez-vous à L'Aigle ?", answer: "Nous intervenons sur tous types de bâtiments : maisons de ville anciennes, pavillons récents, appartements, commerces, et locaux professionnels." },
      { question: "Proposez-vous des conseils pour la rénovation énergétique ?", answer: "Absolument. Nous vous orientons vers les solutions de peinture et d'isolation adaptées pour améliorer les performances thermiques de votre habitat." },
    ],
  },
  verneuil: {
    name: "Verneuil d'Avre et d'Iton",
    displayName: "Verneuil d'Avre et d'Iton",
    department: "Eure",
    postalCode: "27130",
    population: "6 000",
    description: "Cité médiévale de caractère, Verneuil-sur-Avre séduit par son patrimoine exceptionnel. Ses maisons à pans de bois et ses façades en pierre demandent un savoir-faire spécifique que nous avons développé au fil de nombreux chantiers.",
    localChallenges: [
      "Restauration des façades à colombages",
      "Peinture sur supports anciens en respectant les matériaux d'origine",
      "Traitement des boiseries extérieures exposées",
      "Respect du cahier des charges des Bâtiments de France",
    ],
    localProjects: [
      "Restauration d'une maison à colombages rue de la Madeleine",
      "Ravalement d'une façade en grès roussard",
      "Rénovation intérieure d'un ancien commerce rue Notre-Dame",
      "Peinture décorative dans une demeure du XVIIe siècle",
    ],
    seoTitle: "Peintre Verneuil d'Avre et d'Iton | Rénovation Patrimoine | Entre 4 Murs",
    metaDescription: "Artisan peintre à Verneuil d'Avre et d'Iton. Spécialiste des bâtiments anciens et du patrimoine. Peinture, placo, rénovation. Devis gratuit.",
    h1: "Artisan peintre à Verneuil d'Avre et d'Iton",
    intro: "Verneuil-sur-Avre mérite un artisan qui comprend son patrimoine. Entre 4 Murs intervient avec expertise sur les bâtiments anciens et les constructions récentes, en respectant l'identité architecturale de cette cité médiévale. À 25km de L'Aigle, nous intervenons régulièrement sur ce territoire.",
    heroPhoto: "/images/chantier-03.jpg",
    photos: ["/images/chantier-25.jpg", "/images/chantier-06.jpg", "/images/chantier-07.jpg"],
    serviceHighlights: ["ravalement-facade", "enduits-finitions", "peinture-interieure"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Travaillez-vous sur les bâtiments classés ?", answer: "Oui, nous avons l'habitude d'intervenir sur des bâtiments soumis aux règles du patrimoine. Nous veillons à utiliser des matériaux et techniques compatibles avec les exigences des Bâtiments de France." },
      { question: "Quelles peintures utilisez-vous sur les façades anciennes ?", answer: "Nous privilégions les peintures minérales et à la chaux, respirantes, qui respectent le bâti ancien et assurent une bonne régulation de l'humidité." },
      { question: "Combien de temps dure un ravalement de façade à Verneuil ?", answer: "Cela dépend de la surface et de l'état du support. Comptez en moyenne 2 à 4 semaines pour une maison de ville, avec préparation minutieuse des supports." },
      { question: "Proposez-vous des finitions décoratives ?", answer: "Absolument. Nous maîtrisons les techniques décoratives traditionnelles (faux-bois, patines, enduits à la chaux) parfaitement adaptées aux intérieurs de caractère." },
    ],
  },
  mortagne: {
    name: "Mortagne-au-Perche",
    displayName: "Mortagne-au-Perche",
    department: "Orne",
    postalCode: "61400",
    population: "4 000",
    description: "Capitale du Perche ornais, Mortagne-au-Perche allie charme historique et dynamisme. Ses maisons bourgeoises et son architecture typique requièrent une approche respectueuse et experte.",
    localChallenges: [
      "Rénovation des maisons bourgeoises du centre historique",
      "Peinture sur enduits anciens à la chaux",
      "Isolation thermique par l'intérieur des murs épais",
      "Conservation des moulures et éléments décoratifs",
    ],
    localProjects: [
      "Rénovation d'une maison bourgeoise place du Général de Gaulle",
      "Peinture intérieure d'un hôtel particulier",
      "Ravalement d'une façade rue du Portail Saint-Denis",
      "Transformation de combles en espace habitable",
    ],
    seoTitle: "Peintre Mortagne-au-Perche | Rénovation Maisons Bourgeoises | Entre 4 Murs",
    metaDescription: "Artisan peintre à Mortagne-au-Perche. Spécialiste rénovation maisons bourgeoises du Perche. Peinture, placo, enduits. Devis gratuit.",
    h1: "Peintre professionnel à Mortagne-au-Perche",
    intro: "Au cœur du Perche, Entre 4 Murs met son expertise au service de votre patrimoine. Qu'il s'agisse de rénover une maison bourgeoise ou de rafraîchir un intérieur contemporain, nous adaptons nos techniques à chaque projet autour de Mortagne-au-Perche.",
    heroPhoto: "/images/chantier-21.jpg",
    photos: ["/images/chantier-26.jpg", "/images/chantier-22.jpg", "/images/chantier-12.jpg"],
    serviceHighlights: ["peinture-interieure", "enduits-finitions", "renovation-interieure"],
    nearbyCity: "Tourouvre-au-Perche",
    nearbyCityHref: "/peintre-tourouvre-au-perche",
    faq: [
      { question: "Comment restaurez-vous les moulures anciennes ?", answer: "Nous procédons à un décapage doux, réparons les éléments abîmés avec des enduits adaptés, puis appliquons des peintures compatibles avec les supports anciens. Chaque moulure retrouve son relief d'origine." },
      { question: "Travaillez-vous en hauteur pour les façades ?", answer: "Oui, nous disposons de l'équipement nécessaire (échafaudages, nacelles) et respectons toutes les normes de sécurité pour intervenir sur des bâtiments de plusieurs étages." },
      { question: "Quelle est la meilleure période pour un ravalement à Mortagne ?", answer: "Idéalement entre avril et octobre, lorsque les conditions météo sont favorables. Toutefois, certains travaux intérieurs peuvent être réalisés toute l'année." },
      { question: "Proposez-vous un suivi après travaux ?", answer: "Oui, nous restons disponibles et assurons un suivi qualité. Notre garantie décennale couvre tous nos chantiers." },
    ],
  },
  nogent: {
    name: "Nogent-le-Rotrou",
    displayName: "Nogent-le-Rotrou",
    department: "Eure-et-Loir",
    postalCode: "28400",
    population: "10 000",
    description: "Ville-porte du Perche en Eure-et-Loir, Nogent-le-Rotrou présente un patrimoine bâti diversifié, du médiéval au moderne, offrant des défis techniques variés.",
    localChallenges: [
      "Ravalement des façades du centre médiéval",
      "Rénovation d'appartements dans les immeubles des années 70-80",
      "Traitement des façades exposées aux intempéries",
      "Harmonisation des couleurs dans les rues historiques",
    ],
    localProjects: [
      "Ravalement façade d'un immeuble rue Gouverneur",
      "Rénovation complète d'un appartement centre-ville",
      "Peinture extérieure d'un pavillon des quartiers résidentiels",
      "Transformation d'un local commercial en loft",
    ],
    seoTitle: "Peintre Nogent-le-Rotrou | Peinture & Ravalement 28 | Entre 4 Murs",
    metaDescription: "Artisan peintre à Nogent-le-Rotrou (28). Peinture, placo, ravalement de façade. Entre 4 Murs intervient depuis L'Aigle. Devis gratuit.",
    h1: "Artisan peintre à Nogent-le-Rotrou et environs",
    intro: "Depuis L'Aigle, nous intervenons régulièrement à Nogent-le-Rotrou et dans le secteur. Notre connaissance du territoire et notre réactivité font de nous le partenaire idéal pour vos travaux de peinture et rénovation dans la région.",
    heroPhoto: "/images/chantier-06.jpg",
    photos: ["/images/chantier-16.jpg", "/images/chantier-17.jpg", "/images/chantier-09.jpg"],
    serviceHighlights: ["ravalement-facade", "peinture-exterieure", "renovation-interieure"],
    nearbyCity: "Mortagne-au-Perche",
    nearbyCityHref: "/peintre-mortagne-au-perche",
    faq: [
      { question: "Vous déplacez-vous vraiment jusqu'à Nogent-le-Rotrou ?", answer: "Oui, Nogent-le-Rotrou fait partie de notre zone d'intervention régulière. Nous y réalisons plusieurs chantiers par an et connaissons bien la ville." },
      { question: "Quels sont vos tarifs pour un déplacement à Nogent ?", answer: "Les frais de déplacement sont inclus dans nos devis. Nous regroupons parfois plusieurs chantiers pour optimiser les coûts." },
      { question: "Intervenez-vous sur les copropriétés ?", answer: "Oui, nous travaillons aussi bien pour des particuliers que pour des syndics de copropriété. Devis adaptés aux travaux en parties communes." },
      { question: "Quelle est votre spécialité à Nogent ?", answer: "Nous excellons dans la rénovation d'appartements et le ravalement de façades d'immeubles, tout en maîtrisant parfaitement la restauration du bâti ancien." },
    ],
  },
  gace: {
    name: "Gacé",
    displayName: "Gacé",
    department: "Orne",
    postalCode: "61230",
    population: "2 000",
    description: "Bourg rural typique de l'Orne, Gacé concentre un habitat traditionnel normand où les maisons en pierre et les longères demandent un savoir-faire adapté.",
    localChallenges: [
      "Rénovation de longères normandes",
      "Peinture sur pierre et torchis",
      "Extension et modernisation de maisons anciennes",
      "Création d'espaces modernes dans le bâti ancien",
    ],
    localProjects: [
      "Rénovation complète d'une longère",
      "Peinture intérieure d'une ferme rénovée",
      "Ravalement d'une maison de bourg",
      "Transformation de dépendances en habitation",
    ],
    seoTitle: "Peintre Gacé (61230) | Rénovation Longères Normandes | Entre 4 Murs",
    metaDescription: "Artisan peintre à Gacé (61230). Spécialiste longères normandes, maisons en pierre. Peinture, placo, rénovation. Devis gratuit.",
    h1: "Peintre à Gacé : spécialiste des longères normandes",
    intro: "À Gacé et dans les villages alentours, Entre 4 Murs accompagne vos projets de rénovation. Longères, maisons de bourg, fermes réhabilitées : nous maîtrisons les spécificités du bâti rural normand.",
    heroPhoto: "/images/chantier-15.jpg",
    photos: ["/images/chantier-07.jpg", "/images/chantier-08.jpg", "/images/chantier-35.jpg"],
    serviceHighlights: ["peinture-interieure", "ravalement-facade", "pose-placo"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Savez-vous travailler sur les longères ?", answer: "Oui, c'est l'une de nos spécialités. Nous connaissons les contraintes des longères normandes : murs épais, humidité, supports anciens. Nous adaptons nos techniques en conséquence." },
      { question: "Comment traitez-vous l'humidité dans les vieilles maisons ?", answer: "Nous utilisons des peintures et enduits respirants qui permettent aux murs de réguler l'humidité naturellement. Un diagnostic préalable est toujours réalisé." },
      { question: "Travaillez-vous dans les hameaux isolés ?", answer: "Oui, nous intervenons dans tous les villages et hameaux du secteur. L'éloignement n'est pas un problème pour nous." },
      { question: "Pouvez-vous coordonner avec d'autres corps de métier ?", answer: "Absolument. Nous avons l'habitude de travailler en coordination avec des électriciens, plombiers, charpentiers pour les rénovations complètes." },
    ],
  },
  argentan: {
    name: "Argentan",
    displayName: "Argentan",
    department: "Orne",
    postalCode: "61200",
    population: "14 000",
    description: "Sous-préfecture de l'Orne, Argentan offre un marché dynamique pour les artisans du bâtiment, avec une demande variée allant du patrimoine ancien aux constructions récentes.",
    localChallenges: [
      "Rénovation d'immeubles en centre-ville",
      "Ravalement de façades de commerces",
      "Peinture de pavillons en zones résidentielles",
      "Travaux en copropriété",
    ],
    localProjects: [
      "Ravalement d'un immeuble rue Saint-Martin",
      "Rénovation d'appartements locatifs",
      "Peinture commerciale pour des boutiques",
      "Réhabilitation de pavillons années 70",
    ],
    seoTitle: "Peintre Argentan (61200) | Peinture & Ravalement Professionnel | Entre 4 Murs",
    metaDescription: "Artisan peintre à Argentan (61200). Peinture intérieure, extérieure, ravalement de façade, placo. Entre 4 Murs. Devis gratuit sous 48h.",
    h1: "Peintre professionnel à Argentan",
    intro: "Entre 4 Murs intervient régulièrement à Argentan pour des chantiers de peinture, ravalement et rénovation. Particuliers, bailleurs, syndics : nous adaptons nos prestations à vos besoins sur Argentan et dans les communes environnantes.",
    heroPhoto: "/images/chantier-03.jpg",
    photos: ["/images/chantier-09.jpg", "/images/chantier-22.jpg", "/images/chantier-26.jpg"],
    serviceHighlights: ["peinture-interieure", "ravalement-facade", "renovation-interieure"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Travaillez-vous pour les bailleurs et investisseurs ?", answer: "Oui, nous accompagnons régulièrement des bailleurs dans la remise en état de leurs biens locatifs. Devis rapides, chantiers coordonnés, respect des budgets." },
      { question: "Intervenez-vous sur les commerces d'Argentan ?", answer: "Oui, nous réalisons des travaux de peinture pour des commerces, avec adaptation aux contraintes d'horaires et de continuité d'activité." },
      { question: "Proposez-vous des tarifs dégressifs pour plusieurs logements ?", answer: "Oui, pour les chantiers groupés ou les bailleurs avec plusieurs biens, nous étudions des tarifs préférentiels." },
      { question: "Quelle est votre réactivité sur Argentan ?", answer: "Nous nous déplaçons régulièrement sur Argentan. Pour un devis, comptez 48h maximum après premier contact." },
    ],
  },
  tourouvre: {
    name: "Tourouvre-au-Perche",
    displayName: "Tourouvre-au-Perche",
    department: "Orne",
    postalCode: "61190",
    population: "3 500",
    description: "Commune nouvelle du Perche ornais, Tourouvre-au-Perche combine hameaux ruraux et bourg-centre, offrant une diversité de projets de rénovation.",
    localChallenges: [
      "Rénovation de maisons de bourg",
      "Restauration de fermes et dépendances",
      "Modernisation tout en conservant le cachet",
      "Isolation et peinture de bâtiments agricoles reconvertis",
    ],
    localProjects: [
      "Rénovation d'une ancienne ferme en habitation",
      "Peinture d'une maison de bourg",
      "Ravalement d'une grange aménagée",
      "Transformation d'un corps de ferme",
    ],
    seoTitle: "Peintre Tourouvre-au-Perche | Rénovation Fermes Perche | Entre 4 Murs",
    metaDescription: "Artisan peintre à Tourouvre-au-Perche. Spécialiste rénovation fermes et maisons du Perche ornais. Devis gratuit.",
    h1: "Artisan peintre à Tourouvre-au-Perche",
    intro: "Dans le Perche ornais, Entre 4 Murs accompagne vos projets de rénovation avec une approche respectueuse du patrimoine local. Fermes, maisons de bourg, dépendances : chaque chantier autour de Tourouvre-au-Perche bénéficie de notre expertise.",
    heroPhoto: "/images/chantier-15.jpg",
    photos: ["/images/chantier-35.jpg", "/images/chantier-07.jpg", "/images/chantier-25.jpg"],
    serviceHighlights: ["renovation-interieure", "ravalement-facade", "enduits-finitions"],
    nearbyCity: "Mortagne-au-Perche",
    nearbyCityHref: "/peintre-mortagne-au-perche",
    faq: [
      { question: "Connaissez-vous le patrimoine bâti du Perche ?", answer: "Oui, nous intervenons régulièrement dans le Perche et connaissons ses spécificités : maisons en pierre, toitures pentues, matériaux traditionnels. Nous adaptons nos techniques." },
      { question: "Travaillez-vous sur les granges aménagées ?", answer: "Oui, c'est un type de chantier que nous apprécions particulièrement. Nous savons valoriser les volumes et les matériaux bruts tout en apportant le confort moderne." },
      { question: "Proposez-vous des couleurs adaptées au Perche ?", answer: "Absolument. Nous vous conseillons sur les teintes qui s'harmonisent avec l'environnement et le bâti local, tout en respectant vos goûts personnels." },
      { question: "Intervenez-vous dans les hameaux de la commune nouvelle ?", answer: "Oui, nous couvrons l'ensemble de Tourouvre-au-Perche, y compris les hameaux et villages intégrés à la commune nouvelle." },
    ],
  },
  saintsulpice: {
    name: "Saint-Sulpice-sur-Risle",
    displayName: "Saint-Sulpice-sur-Risle",
    department: "Orne",
    postalCode: "61300",
    population: "1 500",
    description: "Village typique de l'Orne traversé par la Risle, Saint-Sulpice offre un cadre rural paisible à quelques kilomètres de L'Aigle.",
    localChallenges: [
      "Rénovation de maisons de village",
      "Traitement de l'humidité liée à la proximité de la rivière",
      "Peinture sur bâti ancien en pierre",
      "Aménagement de combles et extensions",
    ],
    localProjects: [
      "Rénovation d'une maison de village",
      "Peinture intérieure d'une longère",
      "Ravalement d'une façade en pierre",
      "Aménagement de combles avec placo et peinture",
    ],
    seoTitle: "Peintre Saint-Sulpice-sur-Risle | Rénovation Maisons Village | Entre 4 Murs",
    metaDescription: "Artisan peintre à Saint-Sulpice-sur-Risle. Proche de L'Aigle. Peinture, placo, rénovation maisons village. Devis gratuit.",
    h1: "Peintre à Saint-Sulpice-sur-Risle",
    intro: "Entre 4 Murs intervient à Saint-Sulpice-sur-Risle et dans les villages environnants. Notre proximité géographique avec L'Aigle garantit un service réactif et des tarifs compétitifs.",
    heroPhoto: "/images/chantier-01.jpg",
    photos: ["/images/chantier-35.jpg", "/images/chantier-09.jpg", "/images/chantier-22.jpg"],
    serviceHighlights: ["peinture-interieure", "pose-placo", "renovation-interieure"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Comment gérez-vous les problèmes d'humidité liés à la Risle ?", answer: "Nous utilisons des matériaux respirants (peintures minérales, enduits à la chaux) qui permettent une bonne régulation de l'humidité. Un diagnostic précis est toujours réalisé avant travaux." },
      { question: "Travaillez-vous sur les petits chantiers ?", answer: "Oui, nous ne refusons aucun chantier, quelle que soit sa taille. Une chambre à rafraîchir ou une maison complète : chaque projet reçoit la même attention." },
      { question: "Êtes-vous disponible rapidement ?", answer: "Saint-Sulpice étant très proche de L'Aigle, nous pouvons intervenir rapidement pour un devis ou un dépannage urgent." },
      { question: "Proposez-vous des solutions pour les combles ?", answer: "Oui, nous réalisons l'aménagement complet de combles : pose de placo, isolation, peinture, finitions. Un espace perdu devient habitable." },
    ],
  },
  rai: {
    name: "Rai",
    displayName: "Rai",
    department: "Orne",
    postalCode: "61270",
    population: "1 800",
    description: "Commune proche de L'Aigle, Rai bénéficie d'un tissu pavillonnaire développé et d'un habitat rural traditionnel.",
    localChallenges: [
      "Rénovation de pavillons des années 70-90",
      "Ravalement de maisons de bourg",
      "Extension et agrandissement",
      "Mise aux normes et modernisation",
    ],
    localProjects: [
      "Rénovation complète d'un pavillon",
      "Peinture intérieure d'une maison récente",
      "Ravalement de façade avec isolation thermique extérieure",
      "Aménagement d'une extension",
    ],
    seoTitle: "Peintre Rai (61270) | Rénovation Pavillons Orne | Entre 4 Murs",
    metaDescription: "Artisan peintre à Rai (61270). Rénovation pavillons, maisons de village. Proche de L'Aigle. Devis gratuit.",
    h1: "Peintre à Rai : votre artisan local",
    intro: "À deux pas de L'Aigle, nous intervenons régulièrement à Rai. Pavillons, maisons de bourg, extensions : Entre 4 Murs vous accompagne dans tous vos projets de peinture et rénovation.",
    heroPhoto: "/images/chantier-03.jpg",
    photos: ["/images/chantier-26.jpg", "/images/chantier-09.jpg", "/images/chantier-22.jpg"],
    serviceHighlights: ["peinture-interieure", "peinture-exterieure", "renovation-interieure"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Spécialisez-vous dans les pavillons ?", answer: "Oui, nous avons une grande expérience de la rénovation de pavillons : rafraîchissement, changement de couleurs, modernisation des intérieurs." },
      { question: "Travaillez-vous sur les extensions récentes ?", answer: "Absolument. Nous assurons la peinture et les finitions des extensions neuves, en harmonie avec l'existant ou dans un style contemporain." },
      { question: "Proposez-vous l'isolation par l'extérieur avec ravalement ?", answer: "Nous ne posons pas nous-mêmes l'isolation thermique extérieure, mais nous pouvons coordonner avec des entreprises partenaires et assurer la finition." },
      { question: "Quel est le délai pour intervenir à Rai ?", answer: "Rai étant tout proche, nous pouvons nous déplacer très rapidement. Devis sous 24 à 48h, et intervention possible dans la semaine selon notre planning." },
    ],
  },
  aube: {
    name: "Aube",
    displayName: "Aube",
    department: "Orne",
    postalCode: "61270",
    population: "1 400",
    description: "Village rural de l'Orne, Aube conserve un charme authentique avec ses maisons en pierre et son environnement préservé.",
    localChallenges: [
      "Rénovation de maisons anciennes en pierre",
      "Ravalement respectueux du bâti traditionnel",
      "Aménagement de granges et dépendances",
      "Peinture sur supports anciens",
    ],
    localProjects: [
      "Rénovation d'une maison de village en pierre",
      "Transformation d'une grange en habitation",
      "Ravalement de façade en pierre calcaire",
      "Peinture intérieure d'une longère rénovée",
    ],
    seoTitle: "Peintre Aube (61270) | Rénovation Maisons Pierre Orne | Entre 4 Murs",
    metaDescription: "Artisan peintre à Aube (61). Rénovation maisons en pierre, longères. Proche de L'Aigle. Devis gratuit.",
    h1: "Artisan peintre à Aube",
    intro: "Village par village, Entre 4 Murs construit sa réputation dans l'Orne. À Aube, nous intervenons sur tous types de chantiers avec le même engagement qualité, en respectant le charme des maisons en pierre du territoire.",
    heroPhoto: "/images/chantier-15.jpg",
    photos: ["/images/chantier-07.jpg", "/images/chantier-08.jpg", "/images/chantier-25.jpg"],
    serviceHighlights: ["renovation-interieure", "enduits-finitions", "ravalement-facade"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Travaillez-vous dans les petits villages ?", answer: "Oui, absolument. Aube fait partie intégrante de notre zone d'intervention. La taille du village ou l'éloignement n'influencent pas notre tarification de base." },
      { question: "Comment respectez-vous le cachet des maisons anciennes ?", answer: "Nous utilisons des techniques et matériaux compatibles avec le bâti ancien : chaux, peintures minérales, préparation soignée des supports." },
      { question: "Pouvez-vous transformer des dépendances ?", answer: "Oui, nous participons à l'aménagement de granges, anciennes étables ou autres dépendances en espaces habitables." },
      { question: "Quel budget prévoir pour une maison de village ?", answer: "Cela dépend de nombreux critères. Nous établissons systématiquement un devis détaillé gratuit après visite sur site." },
    ],
  },
  crulai: {
    name: "Crulai",
    displayName: "Crulai",
    department: "Orne",
    postalCode: "61300",
    population: "450",
    description: "Petit village de l'Orne au patrimoine rural préservé, à quelques minutes de L'Aigle. Un cadre authentique pour des chantiers qui demandent soin et discrétion.",
    localChallenges: [
      "Rénovation de maisons de campagne isolées",
      "Restauration du bâti ancien",
      "Travaux sur dépendances agricoles",
      "Respect de l'authenticité rurale",
    ],
    localProjects: [
      "Rénovation d'une ancienne fermette",
      "Ravalement d'une maison de campagne",
      "Peinture d'un corps de ferme rénové",
      "Aménagement d'une dépendance en studio",
    ],
    seoTitle: "Peintre Crulai (61300) | Rénovation Maisons Campagne | Entre 4 Murs",
    metaDescription: "Artisan peintre à Crulai (61300). Très proche de L'Aigle. Rénovation maisons campagne. Devis gratuit.",
    h1: "Peintre à Crulai et alentours",
    intro: "Dans les petits villages comme Crulai, Entre 4 Murs apporte son expertise et sa disponibilité. Nous aimons les chantiers ruraux où la qualité du travail fait toute la différence.",
    heroPhoto: "/images/chantier-01.jpg",
    photos: ["/images/chantier-07.jpg", "/images/chantier-08.jpg", "/images/chantier-09.jpg"],
    serviceHighlights: ["peinture-interieure", "renovation-interieure", "ravalement-facade"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Vous déplacez-vous vraiment dans les petits villages ?", answer: "Oui, sans aucun problème. Crulai fait partie de notre secteur habituel, à quelques minutes de notre base à L'Aigle." },
      { question: "Comment gérez-vous les chantiers isolés ?", answer: "Nous organisons nos chantiers de manière efficace, en prévoyant les approvisionnements à l'avance. Vous ne payez pas le prix de l'isolement." },
      { question: "Travaillez-vous sur les anciennes fermes ?", answer: "Oui, c'est un type de projet que nous maîtrisons bien. Réhabilitation complète ou simple rafraîchissement, nous adaptons notre intervention." },
      { question: "Pouvez-vous conseiller sur les couleurs pour une maison de campagne ?", answer: "Absolument. Nous vous orientons vers des teintes harmonieuses avec l'environnement rural, en tenant compte de l'architecture et de vos goûts." },
    ],
  },
  chandai: {
    name: "Chandai",
    displayName: "Chandai",
    department: "Orne",
    postalCode: "61300",
    population: "550",
    description: "Village normand typique, Chandai offre un cadre rural paisible à proximité immédiate de L'Aigle. Ses maisons en pierre et en torchis témoignent du bâti traditionnel de la région.",
    localChallenges: [
      "Rénovation de maisons de village en pierre et torchis",
      "Ravalement de façades traditionnelles",
      "Transformation de bâtiments agricoles",
      "Mise en valeur des matériaux locaux",
    ],
    localProjects: [
      "Rénovation d'une maison de village",
      "Peinture d'une grange aménagée",
      "Ravalement d'une façade en pierre et torchis",
      "Aménagement de combles avec placo et isolation",
    ],
    seoTitle: "Peintre Chandai (61300) | Artisan Rénovation Village | Entre 4 Murs",
    metaDescription: "Artisan peintre à Chandai (61). Proche de L'Aigle. Rénovation maisons village, peinture, placo. Devis gratuit.",
    h1: "Peintre à Chandai : artisan de confiance",
    intro: "Proche de L'Aigle, Chandai bénéficie de notre réactivité et de notre connaissance du territoire ornais. Entre 4 Murs vous accompagne avec professionnalisme et proximité.",
    heroPhoto: "/images/chantier-01.jpg",
    photos: ["/images/chantier-35.jpg", "/images/chantier-07.jpg", "/images/chantier-09.jpg"],
    serviceHighlights: ["peinture-interieure", "pose-placo", "renovation-interieure"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Quelle est votre zone d'intervention autour de Chandai ?", answer: "Chandai étant très proche de L'Aigle, nous intervenons très rapidement. Devis sous 24h, intervention possible dans la semaine." },
      { question: "Travaillez-vous en toute saison ?", answer: "Les travaux intérieurs peuvent être réalisés toute l'année. Pour l'extérieur, nous privilégions la période d'avril à octobre." },
      { question: "Comment assurez-vous la propreté du chantier ?", answer: "Nous protégeons systématiquement les sols et le mobilier, nettoyons quotidiennement, et effectuons un nettoyage final complet." },
      { question: "Proposez-vous un paiement échelonné ?", answer: "Pour les chantiers importants, oui. Nous établissons un échéancier de paiement en fonction de l'avancement." },
    ],
  },
  moulins: {
    name: "Moulins-la-Marche",
    displayName: "Moulins-la-Marche",
    department: "Orne",
    postalCode: "61380",
    population: "800",
    description: "Bourg rural de l'Orne, Moulins-la-Marche combine habitat traditionnel et développement pavillonnaire récent.",
    localChallenges: [
      "Rénovation de maisons de bourg",
      "Peinture de pavillons récents",
      "Ravalement de commerces et bâtiments publics",
      "Harmonisation ancien/moderne",
    ],
    localProjects: [
      "Rénovation d'une maison de bourg",
      "Peinture intérieure d'un pavillon",
      "Ravalement de façade centre-bourg",
      "Aménagement intérieur d'une maison rénovée",
    ],
    seoTitle: "Peintre Moulins-la-Marche | Peinture & Ravalement | Entre 4 Murs",
    metaDescription: "Artisan peintre à Moulins-la-Marche (Orne). Peinture, placo, rénovation. Devis gratuit.",
    h1: "Artisan peintre à Moulins-la-Marche",
    intro: "À Moulins-la-Marche, Entre 4 Murs intervient sur tous types de bâtiments avec le même engagement de qualité artisanale. Proche de L'Aigle, notre réactivité est un atout pour votre projet.",
    heroPhoto: "/images/chantier-03.jpg",
    photos: ["/images/chantier-09.jpg", "/images/chantier-22.jpg", "/images/chantier-26.jpg"],
    serviceHighlights: ["peinture-interieure", "ravalement-facade", "renovation-interieure"],
    nearbyCity: "L'Aigle",
    nearbyCityHref: "/peintre-laigle",
    faq: [
      { question: "Intervenez-vous pour les professionnels ?", answer: "Oui, nous travaillons aussi bien pour des particuliers que pour des artisans, commerçants, ou collectivités locales." },
      { question: "Pouvez-vous intervenir rapidement en cas d'urgence ?", answer: "Pour les urgences (dégât des eaux, sinistre), nous faisons notre maximum pour intervenir rapidement. Contactez-nous directement." },
      { question: "Quelle garantie offrez-vous ?", answer: "Tous nos chantiers sont couverts par notre assurance décennale. Nous garantissons également la qualité de nos prestations." },
      { question: "Comment se déroule un chantier type ?", answer: "Visite et devis gratuits, planification ensemble, protection des lieux, réalisation, nettoyage final, réception avec vous." },
    ],
  },
  longny: {
    name: "Longny-les-Villages",
    displayName: "Longny-les-Villages",
    department: "Orne",
    postalCode: "61290",
    population: "1 500",
    description: "Commune nouvelle regroupant plusieurs villages du Perche ornais, Longny-les-Villages offre un territoire étendu avec un patrimoine bâti diversifié.",
    localChallenges: [
      "Rénovation dispersée sur plusieurs hameaux",
      "Restauration de maisons percheronnes",
      "Transformation de corps de ferme",
      "Respect du patrimoine du Perche",
    ],
    localProjects: [
      "Rénovation d'une maison percheron",
      "Peinture d'un corps de ferme aménagé",
      "Ravalement de maisons de village",
      "Aménagement de dépendances en studio",
    ],
    seoTitle: "Peintre Longny-les-Villages | Rénovation Perche 61 | Entre 4 Murs",
    metaDescription: "Artisan peintre à Longny-les-Villages (Orne). Spécialiste Perche ornais. Peinture, placo, rénovation. Devis gratuit.",
    h1: "Peintre à Longny-les-Villages et villages associés",
    intro: "Dans le Perche ornais, Entre 4 Murs couvre l'ensemble de Longny-les-Villages et ses villages associés. Notre connaissance du territoire et des matériaux traditionnels garantit votre satisfaction.",
    heroPhoto: "/images/chantier-15.jpg",
    photos: ["/images/chantier-26.jpg", "/images/chantier-21.jpg", "/images/chantier-35.jpg"],
    serviceHighlights: ["renovation-interieure", "enduits-finitions", "ravalement-facade"],
    nearbyCity: "Mortagne-au-Perche",
    nearbyCityHref: "/peintre-mortagne-au-perche",
    faq: [
      { question: "Couvrez-vous tous les villages de la commune nouvelle ?", answer: "Oui, nous intervenons dans tous les villages qui composent Longny-les-Villages. Notre rayon d'action couvre largement ce territoire." },
      { question: "Connaissez-vous les maisons percheronnes ?", answer: "Oui, nous avons l'habitude de travailler sur le patrimoine typique du Perche. Nous connaissons les matériaux traditionnels et les techniques adaptées." },
      { question: "Peut-on vous contacter pour un simple conseil ?", answer: "Absolument. Nous sommes disponibles pour vous conseiller gratuitement, même si vous n'êtes pas encore décidé." },
      { question: "Quel est votre engagement qualité ?", answer: "Travaux conformes aux normes DTU, assurance décennale, aucune sous-traitance, suivi personnalisé. Notre signature depuis 2010." },
    ],
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--beige)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left transition-colors gap-4"
        style={{ color: open ? "var(--terracotta)" : "var(--navy)" }}
      >
        <span className="font-semibold text-sm pr-4">{question}</span>
        <ChevronDown
          size={16}
          className="flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "var(--terracotta)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CityPage({ city }: CityPageProps) {
  const data = cityData[city];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}>
            Ville non trouvée
          </h1>
          <Link to="/" className="text-sm" style={{ color: "var(--terracotta)" }}>
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const citySlugMap: Record<string, string> = {
    laigle: "peintre-laigle",
    verneuil: "peintre-verneuil-davre-et-diton",
    mortagne: "peintre-mortagne-au-perche",
    nogent: "peintre-nogent-le-rotrou",
    gace: "peintre-gace",
    argentan: "peintre-argentan",
    tourouvre: "peintre-tourouvre-au-perche",
    saintsulpice: "peintre-saint-sulpice-sur-risle",
    rai: "peintre-rai",
    aube: "peintre-aube",
    crulai: "peintre-crulai",
    chandai: "peintre-chandai",
    moulins: "peintre-moulins-la-marche",
    longny: "peintre-longny-les-villages",
  };
  const canonicalPath = citySlugMap[city] ?? city;

  return (
    <>
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={`${DOMAIN}/${canonicalPath}`} />
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`${DOMAIN}/${canonicalPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${DOMAIN}${data.heroPhoto}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Entre 4 Murs",
          "description": data.metaDescription,
          "url": `${DOMAIN}/${canonicalPath}`,
          "telephone": "06XXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "L'Aigle",
            "addressLocality": data.name,
            "postalCode": data.postalCode,
            "addressCountry": "FR"
          },
          "areaServed": data.name,
          "priceRange": "€€"
        })}</script>
      </Helmet>

    <div className="min-h-screen" style={{ backgroundColor: "var(--off-white)" }}>
      <Navigation />

      {/* Hero */}
      <section className="relative flex flex-col lg:flex-row min-h-[58vh]">
        <div
          className="relative flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-28 pb-12 lg:pt-20 lg:pb-12 lg:w-[52%]"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} style={{ color: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--terracotta)" }}>
                {data.displayName} · {data.postalCode} · {data.department}
              </span>
            </div>
            <h1
              className="text-3xl md:text-4xl text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {data.h1}
            </h1>
            <p className="text-sm leading-relaxed mb-7 max-w-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              {data.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+33681601519"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{ backgroundColor: "var(--terracotta)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
              >
                <Phone size={14} />
                Appeler maintenant
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,98,60,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
              >
                Demander un devis
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative lg:w-[48%] h-56 lg:h-auto overflow-hidden">
          <motion.img
            src={data.heroPhoto}
            alt={`Chantier peinture rénovation ${data.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--navy) 0%, transparent 30%)" }} />
          <div
            className="absolute bottom-4 left-4 lg:left-auto lg:right-4 px-3 py-2"
            style={{ backgroundColor: "rgba(31,47,58,0.9)", border: "1px solid rgba(201,98,60,0.3)" }}
          >
            <div className="text-[10px] uppercase tracking-widest font-semibold mb-0.5" style={{ color: "var(--terracotta)" }}>
              Zone d'intervention
            </div>
            <div className="text-xs font-semibold text-white">{data.displayName} · Orne</div>
          </div>
        </div>
      </section>

      {/* Description + Local projects */}
      <section className="py-14" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--terracotta)" }}>
                  Notre expertise locale
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}>
                {data.displayName}, un territoire que nous connaissons
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-mid)" }}>
                {data.description}
              </p>
              <ul className="space-y-2.5">
                {data.localChallenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: "var(--terracotta)", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm" style={{ color: "var(--text-dark)" }}>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}>
                Exemples de réalisations à {data.displayName}
              </h3>
              <div className="space-y-2 mb-8">
                {data.localProjects.map((project) => (
                  <motion.div
                    key={project}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-3 p-3.5 border transition-all"
                    style={{ borderColor: "var(--beige)", backgroundColor: "var(--off-white)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--terracotta)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--beige)")}
                  >
                    <div className="w-1.5 h-1.5 mt-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--terracotta)" }} />
                    <span className="text-sm" style={{ color: "var(--text-dark)" }}>{project}</span>
                  </motion.div>
                ))}
              </div>

              {/* Photo gallery */}
              <div className="grid grid-cols-3 gap-2">
                {data.photos.map((photo, i) => (
                  <motion.div
                    key={photo}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="overflow-hidden"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <motion.img
                      src={photo}
                      alt={`Chantier ${data.name}`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="py-14" style={{ backgroundColor: "var(--beige-light)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Nos services à {data.displayName}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl" style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}>
              Les prestations les plus demandées dans votre secteur
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {data.serviceHighlights.map((slug, i) => {
              const s = serviceMap[slug];
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={s.href}
                    className="flex flex-col p-5 h-full transition-all duration-250 group"
                    style={{ backgroundColor: "var(--white)", border: "1px solid var(--beige)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(201,98,60,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="text-xs uppercase tracking-widest font-semibold mb-2"
                      style={{ color: "var(--terracotta)" }}
                    >
                      {s.label}
                    </div>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-mid)" }}>
                      {s.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider group-hover:gap-2.5 transition-all" style={{ color: "var(--navy)" }}>
                      Voir le détail
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14" style={{ backgroundColor: "var(--off-white)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Questions fréquentes
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}>
              {data.displayName} — ce que vous demandez souvent
            </h2>
          </motion.div>
          <div>
            {data.faq.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Internal links — nearby city + back to home */}
      <section className="py-10" style={{ backgroundColor: "var(--white)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--terracotta)" }}>
                Maillage territorial
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/"
                  className="text-xs font-medium px-3 py-1.5 transition-all"
                  style={{ border: "1px solid var(--beige)", color: "var(--text-mid)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)"; (e.currentTarget as HTMLElement).style.color = "var(--terracotta)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)"; (e.currentTarget as HTMLElement).style.color = "var(--text-mid)"; }}
                >
                  ← Accueil
                </Link>
                {data.nearbyCity && data.nearbyCityHref && (
                  <Link
                    to={data.nearbyCityHref}
                    className="text-xs font-medium px-3 py-1.5 transition-all"
                    style={{ border: "1px solid var(--beige)", color: "var(--text-mid)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)"; (e.currentTarget as HTMLElement).style.color = "var(--terracotta)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)"; (e.currentTarget as HTMLElement).style.color = "var(--text-mid)"; }}
                  >
                    Peintre {data.nearbyCity} →
                  </Link>
                )}
                <Link
                  to="/#services"
                  className="text-xs font-medium px-3 py-1.5 transition-all"
                  style={{ border: "1px solid var(--beige)", color: "var(--text-mid)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)"; (e.currentTarget as HTMLElement).style.color = "var(--terracotta)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)"; (e.currentTarget as HTMLElement).style.color = "var(--text-mid)"; }}
                >
                  Tous nos services
                </Link>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white flex-shrink-0 transition-all"
              style={{ backgroundColor: "var(--terracotta)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
            >
              Demander un devis gratuit
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
    </>
  );
}
