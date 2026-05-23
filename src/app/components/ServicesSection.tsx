import { motion } from "motion/react";
import { Paintbrush, Building, Layers, Home, Hammer, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    number: "01",
    icon: Paintbrush,
    title: "Peinture intérieure",
    href: "/peinture-interieure",
    description: "Préparation des supports, peintures Sikkens, finitions décoratives et conseils couleur.",
    tags: ["Finitions haut de gamme", "Peintures écologiques"],
  },
  {
    number: "02",
    icon: Building,
    title: "Peinture extérieure",
    href: "/peinture-exterieure",
    description: "Protection durable adaptée au climat normand. Traitements anti-mousse et peintures respirantes.",
    tags: ["Garantie décennale", "Anti-mousse"],
  },
  {
    number: "03",
    icon: Layers,
    title: "Pose de placo",
    href: "/pose-placo-platrerie",
    description: "Cloisons, doublages et plafonds suspendus avec isolation phonique et thermique intégrée.",
    tags: ["Isolation intégrée", "Finitions à peindre"],
  },
  {
    number: "04",
    icon: Home,
    title: "Rénovation intérieure",
    href: "/renovation-interieure",
    description: "Réhabilitation complète — cuisine, salle de bain, coordination des corps de métier.",
    tags: ["Coordination métiers", "Suivi de chantier"],
  },
  {
    number: "05",
    icon: Hammer,
    title: "Ravalement de façade",
    href: "/ravalement-facade",
    description: "Diagnostic, traitement des fissures et pathologies, enduits et peintures de façade conformes DTU.",
    tags: ["Conformité DTU", "Réparation fissures"],
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Enduits & finitions décoratives",
    href: "/enduits-finitions-decoratives",
    description: "Enduits à la chaux, béton ciré, stucco vénitien — des textures uniques pour des espaces singuliers.",
    tags: ["Béton ciré", "Stucco vénitien"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16"
      style={{ backgroundColor: "var(--white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Nos services
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Une expertise complète{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>à votre service</em>
            </h2>
          </div>
          <p className="text-sm max-w-xs" style={{ color: "var(--text-mid)" }}>
            Du simple rafraîchissement à la rénovation totale, nous maîtrisons chaque étape de votre projet.
          </p>
        </motion.div>

        {/* Services list */}
        <div style={{ borderTop: "1px solid var(--beige)" }}>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              style={{ borderBottom: "1px solid var(--beige)" }}
            >
              <Link
                to={service.href}
                className="group flex items-center gap-4 md:gap-6 py-4 px-2 transition-all duration-200"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--beige-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {/* Number */}
                <span
                  className="text-2xl font-bold leading-none flex-shrink-0 w-8 transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "rgba(201,98,60,0.2)",
                  }}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    border: "1px solid var(--beige)",
                    backgroundColor: "var(--off-white)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,98,60,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--off-white)";
                  }}
                >
                  <service.icon size={15} style={{ color: "var(--navy)" }} />
                </div>

                {/* Title + description */}
                <div className="flex-1 min-w-0">
                  <div
                    className="text-sm font-bold mb-0.5 group-hover:text-[var(--terracotta)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                  >
                    {service.title}
                  </div>
                  <div className="text-xs leading-relaxed hidden md:block" style={{ color: "var(--text-gray)" }}>
                    {service.description}
                  </div>
                </div>

                {/* Tags */}
                <div className="hidden lg:flex gap-2 flex-shrink-0">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 uppercase tracking-wide font-medium"
                      style={{ backgroundColor: "var(--beige-light)", color: "var(--text-gray)", border: "1px solid var(--beige)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={15}
                  className="flex-shrink-0 transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  style={{ color: "var(--terracotta)" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm" style={{ color: "var(--text-gray)" }}>
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--navy)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--navy-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--navy)")}
          >
            Discutons de votre projet
            <ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
