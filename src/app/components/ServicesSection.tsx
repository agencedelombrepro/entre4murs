import { motion } from "motion/react";
import { Paintbrush, Building, Layers, Home, Hammer, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Paintbrush,
    title: "Peinture intérieure",
    href: "/peinture-interieure",
    description:
      "Transformation complète de vos espaces de vie. Préparation minutieuse des supports, application experte, finitions haut de gamme.",
    features: ["Préparation des supports", "Peintures écologiques Sikkens", "Finitions décoratives", "Conseils couleur"],
  },
  {
    icon: Building,
    title: "Peinture extérieure",
    href: "/peinture-exterieure",
    description:
      "Protection durable et esthétique de vos façades. Travaux adaptés au climat normand, matériaux résistants aux intempéries.",
    features: ["Ravalement de façade", "Traitement anti-mousse", "Peintures respirantes", "Garantie décennale"],
  },
  {
    icon: Layers,
    title: "Pose de placo",
    href: "/pose-placo-platrerie",
    description:
      "Cloisonnement et aménagement d'espaces sur mesure. Isolation phonique et thermique, finitions prêtes à peindre.",
    features: ["Cloisons & doublages", "Plafonds suspendus", "Isolation intégrée", "Découpes précises"],
  },
  {
    icon: Home,
    title: "Rénovation intérieure",
    href: "/renovation-interieure",
    description:
      "Réhabilitation complète de votre habitat. De la conception à la réalisation, un accompagnement sur-mesure pour chaque projet.",
    features: ["Cuisine & salle de bain", "Parquets & revêtements", "Coordination métiers", "Suivi de chantier"],
  },
  {
    icon: Hammer,
    title: "Ravalement de façade",
    href: "/ravalement-facade",
    description:
      "Remise à neuf de vos murs extérieurs. Diagnostic, traitement des pathologies, application d'enduits et peintures adaptés.",
    features: ["Diagnostic façade", "Réparation fissures", "Enduits de façade", "Conformité DTU"],
  },
  {
    icon: Sparkles,
    title: "Enduits & finitions",
    href: "/enduits-finitions-decoratives",
    description:
      "Le détail qui fait la différence. Enduits décoratifs, effets matière, finitions contemporaines pour un rendu unique.",
    features: ["Enduits à la chaux", "Béton ciré", "Stucco vénitien", "Textures personnalisées"],
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
              Nos services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl max-w-lg leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Une expertise complète{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                à votre service
              </em>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-mid)" }}>
              Du simple rafraîchissement à la rénovation totale, nous maîtrisons tous les aspects de votre projet.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full p-5 border flex flex-col transition-all duration-300"
                style={{
                  borderColor: "var(--beige)",
                  backgroundColor: "var(--white)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--terracotta)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(201,98,60,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--beige)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-8 bottom-8 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "var(--terracotta)" }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--beige-light)",
                    border: "1px solid var(--beige)",
                  }}
                >
                  <service.icon
                    size={18}
                    style={{ color: "var(--navy)" }}
                    className="group-hover:text-[--terracotta] transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: "var(--text-mid)" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-gray)" }}>
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--terracotta)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:gap-2.5"
                  style={{ color: "var(--terracotta)" }}
                >
                  En savoir plus
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm mb-5" style={{ color: "var(--text-gray)" }}>
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--navy)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--navy-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--navy)")}
          >
            Discutons de votre projet
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
