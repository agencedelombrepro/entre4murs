import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const matieres = [
  {
    id: "peinture",
    title: "Peinture",
    subtitle: "Intérieure & extérieure",
    description: "Des finitions impeccables, couche après couche. Conseils couleur, peintures écologiques, préparation des supports.",
    photo: "/images/chantier-03.jpg",
    accent: "var(--terracotta)",
  },
  {
    id: "placo",
    title: "Placo",
    subtitle: "Cloisons & doublages",
    description: "La matière brute, sculptée avec précision. Plafonds suspendus, isolation intégrée, finitions prêtes à peindre.",
    photo: "/images/chantier-35.jpg",
    accent: "var(--navy)",
  },
  {
    id: "renovation",
    title: "Rénovation",
    subtitle: "Intérieure complète",
    description: "Révéler les espaces, sublimer les volumes. De la conception à la réalisation, un accompagnement sur-mesure.",
    photo: "/images/chantier-21.jpg",
    accent: "var(--terracotta)",
  },
];

export default function MatiereSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const quoteY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "var(--off-white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span
              className="text-xs uppercase tracking-[0.22em] font-semibold"
              style={{ color: "var(--terracotta)" }}
            >
              Notre savoir-faire
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
          </div>
          <h2
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
          >
            La matière au service
            <br />
            <em className="not-italic" style={{ color: "var(--terracotta)" }}>
              de vos espaces
            </em>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-mid)" }}>
            Chaque chantier est une histoire. Chaque mur, une toile. Chaque finition, une signature.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {matieres.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden"
              style={{ height: 300 }}
            >
              {/* Photo */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={m.photo}
                  alt={`${m.title} Entre 4 Murs`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(31,47,58,0.92) 30%, rgba(31,47,58,0.2) 70%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div
                  className="w-10 h-0.5 mb-4 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: m.accent }}
                />
                <div
                  className="text-xs uppercase tracking-widest font-semibold mb-1"
                  style={{ color: m.accent }}
                >
                  {m.subtitle}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {m.title}
                </h3>
                <p
                  className="text-sm text-white/70 leading-relaxed translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400"
                >
                  {m.description}
                </p>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-12 group-hover:h-12 transition-all duration-500"
                style={{ borderTop: `2px solid ${m.accent}`, borderRight: `2px solid ${m.accent}` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Editorial quote */}
        <motion.div
          style={{ y: quoteY }}
          className="relative max-w-4xl mx-auto text-center py-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-8xl leading-none opacity-10 font-serif"
              style={{ color: "var(--navy)" }}
            >
              "
            </div>
            <blockquote
              className="text-xl md:text-2xl font-bold leading-tight mb-5 relative z-10"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Le vrai luxe, c'est la qualité{" "}
              <span style={{ color: "var(--terracotta)" }}>du travail invisible.</span>
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span
                className="text-xs uppercase tracking-[0.2em] font-semibold"
                style={{ color: "var(--text-mid)" }}
              >
                Guillaume Etasse — Fondateur Entre 4 Murs
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
