import { motion } from "motion/react";
import { Shield, Users, Clock, CheckCircle2, MessageSquare, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Garantie décennale active",
    description:
      "Tous nos chantiers sont couverts par une assurance décennale complète. Votre investissement est protégé pendant 10 ans après la réception des travaux.",
  },
  {
    icon: Users,
    title: "Aucune sous-traitance",
    description:
      "Guillaume et son équipe permanente interviennent sur 100% de vos travaux. Pas d'intermédiaire, pas de surprise : vous savez qui travaille chez vous.",
  },
  {
    icon: Clock,
    title: "Respect strict des délais",
    description:
      "Planning établi ensemble et tenu. Suivi rigoureux de l'avancement, communication régulière à chaque étape du chantier.",
  },
  {
    icon: CheckCircle2,
    title: "Conformité DTU",
    description:
      "Application stricte des normes techniques du bâtiment (DTU). Travaux conformes aux règles de l'art, sans compromis sur la qualité.",
  },
  {
    icon: MessageSquare,
    title: "Communication transparente",
    description:
      "Explications claires avant et pendant les travaux. Nous restons joignables tout au long du chantier pour répondre à vos questions.",
  },
  {
    icon: Award,
    title: "16 ans d'expérience",
    description:
      "Artisan depuis 2010 dans l'Orne. Plus de 500 chantiers réalisés entre L'Aigle, Argentan, Verneuil et le Perche.",
  },
];

export default function WhySection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span
              className="text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ color: "var(--terracotta)" }}
            >
              Pourquoi nous choisir
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl max-w-2xl leading-tight text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Parce que vos travaux méritent{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                un artisan de confiance
              </em>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Vous avez peur des retards, du travail bâclé, du manque de communication ?
              C'est pour ça que nous avons construit notre réputation sur la transparence.
            </p>
          </div>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mb-20" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 transition-all duration-300 relative"
              style={{ backgroundColor: "var(--navy)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(45,69,87,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--navy)")}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              <div
                className="w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(201,98,60,0.1)",
                  border: "1px solid rgba(201,98,60,0.25)",
                }}
              >
                <reason.icon size={22} style={{ color: "var(--terracotta)" }} />
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Guillaume quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto p-10 md:p-14"
          style={{
            borderLeft: "3px solid var(--terracotta)",
            backgroundColor: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            className="absolute -top-4 -left-3 text-6xl font-serif opacity-30"
            style={{ color: "var(--terracotta)" }}
          >
            "
          </div>
          <blockquote
            className="text-xl md:text-2xl text-white leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nous ne promettons que ce que nous pouvons tenir. Chaque chantier est une
            signature. Votre satisfaction, notre meilleure publicité depuis 2010.
          </blockquote>
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 flex items-center justify-center text-xl font-bold flex-shrink-0"
              style={{
                backgroundColor: "rgba(201,98,60,0.15)",
                border: "1px solid rgba(201,98,60,0.3)",
                color: "var(--terracotta)",
                fontFamily: "var(--font-serif)",
              }}
            >
              GE
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Guillaume Etasse</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Fondateur · Entre 4 Murs · Artisan depuis 2010
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
