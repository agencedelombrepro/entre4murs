import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MessageCircle, Search, FileCheck, Paintbrush2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Premier contact",
    description: "Appelez-nous ou remplissez le formulaire. Nous répondons sous 24h et planifions une visite.",
    detail: "Gratuit & sans engagement",
  },
  {
    number: "02",
    icon: Search,
    title: "Visite & diagnostic",
    description: "Guillaume se déplace sur place pour examiner les supports et comprendre vos attentes.",
    detail: "Déplacement offert",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Devis détaillé",
    description: "Vous recevez un devis clair, poste par poste, sous 48h. Aucune mauvaise surprise.",
    detail: "Remis sous 48h",
  },
  {
    number: "04",
    icon: Paintbrush2,
    title: "Réalisation",
    description: "Guillaume intervient lui-même avec son équipe. Chantier propre, suivi régulier.",
    detail: "Sans sous-traitance",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: "var(--navy)" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(201,98,60,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Comment ça marche
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
          </div>
          <h2
            className="text-3xl md:text-4xl text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            De la demande au{" "}
            <em className="not-italic" style={{ color: "var(--terracotta)" }}>
              chantier terminé
            </em>
          </h2>
        </motion.div>

        {/* Frise */}
        <div className="relative">

          {/* ── Animated line ── */}
          <div className="absolute top-[2.75rem] left-[calc(12.5%+2.25rem)] right-[calc(12.5%+2.25rem)] hidden lg:block pointer-events-none">
            <svg
              width="100%" height="2"
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
              overflow="visible"
            >
              <motion.path
                d="M 0,1 L 1000,1"
                stroke="rgba(201,98,60,0.35)"
                strokeWidth="1"
                strokeDasharray="7 5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          </div>

          {/* ── Steps ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-2">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center">

                {/* Circle */}
                <div className="relative mb-8">
                  {/* Pulsing outer ring */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      inset: "-8px",
                      border: "1px solid rgba(201,98,60,0.22)",
                      borderRadius: "50%",
                    }}
                    animate={isInView ? {
                      scale: [1, 1.25, 1],
                      opacity: [0.4, 0, 0.4],
                    } : {}}
                    transition={{
                      duration: 2.8,
                      delay: 1.4 + i * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main circle */}
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.7 + i * 0.18,
                    }}
                    className="w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center relative z-10"
                    style={{
                      backgroundColor: "rgba(201,98,60,0.12)",
                      border: "1.5px solid var(--terracotta)",
                    }}
                  >
                    <step.icon size={20} style={{ color: "var(--terracotta)" }} />
                  </motion.div>

                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 1.0 + i * 0.18, duration: 0.3 }}
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold z-20"
                    style={{ backgroundColor: "var(--terracotta)", color: "white" }}
                  >
                    {i + 1}
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Large ghost number */}
                  <div
                    className="text-6xl font-bold leading-none mb-2 select-none"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "rgba(255,255,255,0.04)",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </div>

                  <h3
                    className="text-sm font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-4 max-w-[180px] mx-auto"
                    style={{ color: "rgba(255,255,255,0.48)" }}
                  >
                    {step.description}
                  </p>
                  <div
                    className="inline-block text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1"
                    style={{
                      backgroundColor: "rgba(201,98,60,0.1)",
                      color: "var(--terracotta)",
                      border: "1px solid rgba(201,98,60,0.25)",
                    }}
                  >
                    {step.detail}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--terracotta)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
          >
            Démarrer votre projet — devis gratuit
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
