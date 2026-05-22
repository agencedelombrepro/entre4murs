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
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Subtle radial decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(201,98,60,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
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
              className="text-3xl md:text-4xl max-w-2xl leading-tight text-white"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mb-12" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group p-5 transition-all duration-300 relative"
              style={{ backgroundColor: "var(--navy)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(45,69,87,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--navy)")}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              <div
                className="w-9 h-9 flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  backgroundColor: "rgba(201,98,60,0.1)",
                  border: "1px solid rgba(201,98,60,0.25)",
                }}
              >
                <reason.icon size={16} style={{ color: "var(--terracotta)" }} />
              </div>
              <h3
                className="text-sm font-bold text-white mb-2"
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
          className="relative max-w-4xl mx-auto p-7 md:p-10"
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
            className="text-base md:text-lg text-white leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nous ne promettons que ce que nous pouvons tenir. Chaque chantier est une
            signature. Votre satisfaction, notre meilleure publicité depuis 2010.
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span
                className="leading-none"
                style={{
                  fontFamily: "var(--font-handwriting)",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "var(--terracotta)",
                  letterSpacing: "0.01em",
                }}
              >
                Guillaume Etasse
              </span>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                Fondateur · Entre 4 Murs · Artisan depuis 2010
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
