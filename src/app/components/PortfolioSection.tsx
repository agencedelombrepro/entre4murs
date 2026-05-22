import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

type Category = "Tout" | "Intérieur" | "Extérieur" | "Placo & finitions";

interface Project {
  id: number;
  src: string;
  title: string;
  location: string;
  category: Exclude<Category, "Tout">;
  description: string;
}

const projects: Project[] = [
  { id: 1, src: "/images/chantier-15.jpg", title: "Rénovation complète", location: "L'Aigle", category: "Extérieur", description: "Réhabilitation d'une ferme normande avec création d'espace pool terrace. Enduits et peintures extérieures." },
  { id: 2, src: "/images/chantier-21.jpg", title: "Salle de bain haut de gamme", location: "Orne", category: "Intérieur", description: "Pose de carrelage grand format effet marbre bleu. Finitions salle de douche à l'italienne." },
  { id: 3, src: "/images/chantier-01.jpg", title: "Chambre sous combles", location: "L'Aigle", category: "Intérieur", description: "Peinture intérieure d'une chambre sous pente. Finitions soignées sur support en pente." },
  { id: 4, src: "/images/chantier-35.jpg", title: "Aménagement combles", location: "Orne (61)", category: "Placo & finitions", description: "Pose de placo et isolation sur charpente apparente. Aménagement de l'espace sous toiture." },
  { id: 5, src: "/images/chantier-03.jpg", title: "Chambre de caractère", location: "L'Aigle", category: "Intérieur", description: "Peinture intérieure dans un bleu mauve chaleureux. Finitions propres et lissées." },
  { id: 6, src: "/images/chantier-26.jpg", title: "Pièce avec boiseries", location: "Orne", category: "Intérieur", description: "Pose de boiseries décoratif et carrelage. Rénovation complète d'un salon." },
  { id: 7, src: "/images/chantier-31.jpg", title: "Carrelage mural", location: "Orne", category: "Placo & finitions", description: "Pose de carrelage mural grand format gris. Salle de bain en cours de rénovation." },
  { id: 8, src: "/images/chantier-06.jpg", title: "Chantier en cours", location: "L'Aigle", category: "Intérieur", description: "Rénovation intérieure en cours — préparation des surfaces et première couche." },
  { id: 9, src: "/images/chantier-22.jpg", title: "Réalisation artisanale", location: "Orne (61)", category: "Intérieur", description: "Travaux de finitions haut de gamme dans une résidence de l'Orne." },
];

const categories: Category[] = ["Tout", "Intérieur", "Extérieur", "Placo & finitions"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tout");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = activeCategory === "Tout"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="realisations"
      className="relative py-16"
      style={{ backgroundColor: "var(--off-white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Nos réalisations
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              Plus de 500 chantiers{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                dans l'Orne
              </em>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-mid)" }}>
              Chaque projet est unique. Découvrez quelques réalisations récentes autour de L'Aigle.
            </p>
          </div>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                backgroundColor: activeCategory === cat ? "var(--navy)" : "transparent",
                color: activeCategory === cat ? "white" : "var(--text-mid)",
                border: `1px solid ${activeCategory === cat ? "var(--navy)" : "var(--beige)"}`,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative cursor-pointer overflow-hidden"
                style={{ aspectRatio: i % 5 === 0 ? "1/1.3" : "1/1" }}
                onClick={() => setSelected(project)}
              >
                <motion.img
                  src={project.src}
                  alt={`${project.title} – ${project.location}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5"
                  style={{ background: "linear-gradient(to top, rgba(31,47,58,0.92) 40%, transparent)" }}
                >
                  <div className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: "var(--terracotta)" }}>
                    {project.category}
                  </div>
                  <div className="text-sm font-bold text-white">{project.title}</div>
                  <div className="text-xs text-white/60">{project.location}</div>
                </div>
                {/* Zoom icon */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: "var(--terracotta)" }}
                >
                  <ZoomIn size={14} color="white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm mb-4" style={{ color: "var(--text-gray)" }}>
            Un projet similaire ? Parlons-en.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
            style={{ backgroundColor: "var(--terracotta)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
          >
            Demander un devis gratuit
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: "rgba(31,47,58,0.95)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
              style={{ backgroundColor: "var(--white)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-2/3 flex-shrink-0">
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div
                    className="text-[10px] uppercase tracking-widest font-semibold mb-2"
                    style={{ color: "var(--terracotta)" }}
                  >
                    {selected.category}
                  </div>
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                  >
                    {selected.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--text-mid)" }}>
                    {selected.location}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                    {selected.description}
                  </p>
                </div>
                <motion.a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--terracotta)" }}
                >
                  Un projet similaire ?
                </motion.a>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(31,47,58,0.8)", color: "white" }}
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
