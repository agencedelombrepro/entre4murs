import { motion } from "motion/react";
import { Shield, Users, Award, CheckCircle2, MessageSquare, Clock } from "lucide-react";

const featured = [
  {
    stat: "10",
    unit: "ans",
    icon: Shield,
    title: "Garantie décennale",
    description:
      "Chaque chantier couvert 10 ans après réception. Votre investissement est protégé, quoi qu'il arrive.",
  },
  {
    stat: "100%",
    unit: "",
    icon: Users,
    title: "Aucune sous-traitance",
    description:
      "Guillaume et son équipe permanente interviennent sur la totalité de vos travaux. Pas d'intermédiaire.",
  },
];

const compact = [
  { stat: "16", unit: "ans", icon: Award, title: "D'expérience artisanale" },
  { stat: "500+", unit: "", icon: CheckCircle2, title: "Chantiers réalisés" },
  { stat: "DTU", unit: "", icon: Clock, title: "Conformité technique" },
  { stat: "24h", unit: "", icon: MessageSquare, title: "Délai de réponse" },
];

export default function WhySection() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 80% 20%, rgba(201,98,60,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(201,98,60,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Pourquoi nous choisir
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-3xl md:text-5xl leading-tight text-white"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Des engagements{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                gravés dans le béton.
              </em>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Retards, travail bâclé, sous-traitants inconnus — nous avons construit notre réputation pour que vous n'ayez jamais à vous en inquiéter.
            </p>
          </div>
        </motion.div>

        {/* Featured cards — 2 large */}
        <div className="grid md:grid-cols-2 gap-px mb-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
          {featured.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 md:p-10 overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "var(--navy)", minHeight: 240 }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(45,69,87,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--navy)")}
            >
              {/* Terracotta left bar on hover */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "var(--terracotta)" }}
              />

              {/* Icon top-right */}
              <div
                className="absolute top-8 right-8 w-9 h-9 flex items-center justify-center"
                style={{
                  border: "1px solid rgba(201,98,60,0.35)",
                  backgroundColor: "rgba(201,98,60,0.08)",
                }}
              >
                <item.icon size={16} style={{ color: "var(--terracotta)" }} />
              </div>

              {/* Giant stat */}
              <div className="mb-6">
                <span
                  className="leading-none select-none"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                    fontWeight: 700,
                    color: "var(--terracotta)",
                    display: "inline",
                  }}
                >
                  {item.stat}
                </span>
                {item.unit && (
                  <span
                    className="ml-2 text-xl font-semibold"
                    style={{ color: "rgba(201,98,60,0.6)", fontFamily: "var(--font-serif)" }}
                  >
                    {item.unit}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                {item.description}
              </p>

              {/* Bottom terracotta accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                style={{
                  width: "3rem",
                  backgroundColor: "var(--terracotta)",
                  opacity: 0.4,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Compact stats strip — 4 items */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16"
          style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
        >
          {compact.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 md:p-8 flex flex-col gap-3 transition-all duration-300"
              style={{ backgroundColor: "var(--navy)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(45,69,87,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--navy)")}
            >
              {/* Top accent bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "var(--terracotta)" }}
              />

              <item.icon size={16} style={{ color: "var(--terracotta)", opacity: 0.8 }} />

              <div
                className="leading-none font-bold"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  color: "var(--terracotta)",
                }}
              >
                {item.stat}
                {item.unit && (
                  <span className="text-base ml-1" style={{ color: "rgba(201,98,60,0.55)" }}>
                    {item.unit}
                  </span>
                )}
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.55)" }}>
                {item.title}
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
