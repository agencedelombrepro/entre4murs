import { motion } from "motion/react";
import { MessageCircle, Search, FileCheck, Paintbrush2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Premier contact",
    description: "Appelez-nous ou remplissez le formulaire. Nous répondons sous 24h et planifions une visite à votre convenance.",
    detail: "Gratuit & sans engagement",
  },
  {
    number: "02",
    icon: Search,
    title: "Visite & diagnostic",
    description: "Guillaume se déplace sur place pour examiner les supports, prendre les mesures et comprendre vos attentes.",
    detail: "Déplacement offert",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Devis détaillé",
    description: "Vous recevez un devis clair, poste par poste, sous 48h. Aucune mauvaise surprise : tout est écrit noir sur blanc.",
    detail: "Remis sous 48h",
  },
  {
    number: "04",
    icon: Paintbrush2,
    title: "Réalisation",
    description: "Guillaume intervient lui-même, avec son équipe. Chantier propre, suivi régulier, réception avec vous à la fin.",
    detail: "Sans sous-traitance",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "var(--off-white)" }}>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Comment ça marche
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              De la demande au{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                chantier terminé
              </em>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-mid)" }}>
            Un processus clair, sans surprise, du premier appel jusqu'à la remise des clés.
          </p>
        </motion.div>
      </div>

      {/* Steps — full-width typographic strips */}
      <div style={{ borderTop: "1px solid var(--beige)" }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative"
            style={{ borderBottom: "1px solid var(--beige)" }}
          >
            {/* Hover left accent */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "var(--terracotta)" }}
            />

            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center gap-6 md:gap-10 py-6 md:py-7">

                {/* Big number */}
                <div
                  className="flex-shrink-0 w-16 md:w-24 text-right leading-none select-none"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                    fontWeight: 700,
                    color: "var(--terracotta)",
                    opacity: 0.22,
                  }}
                >
                  {step.number}
                </div>

                {/* Thin vertical divider */}
                <div className="hidden md:block w-px self-stretch" style={{ backgroundColor: "var(--beige)" }} />

                {/* Icon + title block */}
                <div className="flex items-center gap-4 flex-shrink-0 w-48 md:w-56">
                  <div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[var(--terracotta)]"
                    style={{
                      border: "1px solid var(--beige)",
                      backgroundColor: "var(--white)",
                    }}
                  >
                    <step.icon size={16} style={{ color: "var(--navy)" }} />
                  </div>
                  <h3
                    className="text-sm font-bold leading-snug"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="flex-1 text-sm leading-relaxed hidden md:block"
                  style={{ color: "var(--text-mid)" }}
                >
                  {step.description}
                </p>

                {/* Badge */}
                <div
                  className="flex-shrink-0 text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 whitespace-nowrap"
                  style={{
                    backgroundColor: "rgba(201,98,60,0.08)",
                    color: "var(--terracotta)",
                    border: "1px solid rgba(201,98,60,0.2)",
                  }}
                >
                  {step.detail}
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--text-gray)" }}>
          Prêt à démarrer ?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
          style={{ backgroundColor: "var(--terracotta)" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
        >
          Démarrer votre projet — devis gratuit
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>

    </section>
  );
}
