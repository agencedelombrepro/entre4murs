import { motion } from "motion/react";
import { MessageCircle, Search, FileCheck, Paintbrush2 } from "lucide-react";

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
    <section
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "var(--beige-light)" }}
    >
      {/* Large background number decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[18rem] font-bold leading-none select-none pointer-events-none opacity-[0.035]"
        style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
      >
        4
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Comment ça marche
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
          </div>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
          >
            De la demande au{" "}
            <em className="not-italic" style={{ color: "var(--terracotta)" }}>
              chantier terminé
            </em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Connector line (between steps, desktop only) */}
              {i < 3 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 h-px z-10"
                  style={{ backgroundColor: "var(--beige)" }}
                />
              )}

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-6 h-full flex flex-col"
                style={{ backgroundColor: "var(--white)", border: "1px solid var(--beige)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--terracotta)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(201,98,60,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--beige)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-14 h-14 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: "rgba(201,98,60,0.08)",
                      border: "1px solid rgba(201,98,60,0.2)",
                    }}
                  >
                    <step.icon size={24} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-serif)", color: "rgba(201,98,60,0.15)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-mid)" }}>
                  {step.description}
                </p>

                {/* Detail badge */}
                <div
                  className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1.5 self-start"
                  style={{
                    backgroundColor: "rgba(201,98,60,0.08)",
                    color: "var(--terracotta)",
                    border: "1px solid rgba(201,98,60,0.2)",
                  }}
                >
                  {step.detail}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--terracotta)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
          >
            Démarrer votre projet — devis gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
