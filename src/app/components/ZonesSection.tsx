import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Coordonnées SVG calculées depuis GPS réels (centre L'Aigle 48.773°N, 0.624°E)
// Scale : 50 km = 130 px — viewBox 380×390, centre (190, 195)
const zones = [
  {
    name: "L'Aigle",
    label: "L'Aigle",
    postalCode: "61300",
    href: "/peintre-laigle",
    note: "Siège — réactivité maximale",
    dept: "Orne (61)",
    tags: ["Siège de l'agence", "Priorité 1", "Devis sous 24h"],
    featured: true,
    svgX: 190, svgY: 195,
    lx: 8, ly: -10,
  },
  {
    name: "Verneuil d'Avre et d'Iton",
    label: "Verneuil",
    postalCode: "27130",
    href: "/peintre-verneuil-davre-et-diton",
    note: "Bâtiments anciens & patrimoine",
    dept: "Eure (27)",
    tags: ["Bâti ancien", "Patrimoine"],
    featured: false,
    svgX: 275, svgY: 205,
    lx: 7, ly: -8,
  },
  {
    name: "Argentan",
    label: "Argentan",
    postalCode: "61200",
    href: "/peintre-argentan",
    note: "Sous-préfecture de l'Orne",
    dept: "Orne (61)",
    tags: ["Sous-préfecture", "Zone urbaine"],
    featured: false,
    svgX: 76, svgY: 203,
    lx: 7, ly: -8,
  },
  {
    name: "Mortagne-au-Perche",
    label: "Mortagne",
    postalCode: "61400",
    href: "/peintre-mortagne-au-perche",
    note: "Maisons bourgeoises du Perche",
    dept: "Orne (61)",
    tags: ["Bâti bourgeois", "Perche ornais"],
    featured: false,
    svgX: 176, svgY: 269,
    lx: 7, ly: 13,
  },
  {
    name: "Nogent-le-Rotrou",
    label: "Nogent",
    postalCode: "28400",
    href: "/peintre-nogent-le-rotrou",
    note: "Porte du Perche, Eure-et-Loir",
    dept: "Eure-et-Loir (28)",
    tags: ["Porte du Perche", "Hors zone — sur demande"],
    featured: false,
    svgX: 228, svgY: 325,
    lx: 7, ly: -8,
  },
  {
    name: "Gacé",
    label: "Gacé",
    postalCode: "61230",
    href: "/peintre-gace",
    note: "Longères & bâti rural normand",
    dept: "Orne (61)",
    tags: ["Bâti rural", "Longères"],
    featured: false,
    svgX: 128, svgY: 189,
    lx: -7, ly: -8,
  },
  {
    name: "Tourouvre-au-Perche",
    label: "Tourouvre",
    postalCode: "61190",
    href: "/peintre-tourouvre-au-perche",
    note: "Fermes & corps de ferme",
    dept: "Orne (61)",
    tags: ["Corps de ferme", "Perche"],
    featured: false,
    svgX: 185, svgY: 245,
    lx: 7, ly: 13,
  },
  {
    name: "Saint-Sulpice-sur-Risle",
    label: "St-Sulpice",
    postalCode: "61300",
    href: "/peintre-saint-sulpice-sur-risle",
    note: "Village proche de L'Aigle",
    dept: "Orne (61)",
    tags: ["Proche L'Aigle", "Pavillons"],
    featured: false,
    svgX: 217, svgY: 208,
    lx: 7, ly: -8,
  },
  {
    name: "Raï",
    label: "Raï",
    postalCode: "61270",
    href: "/peintre-rai",
    note: "Pavillons & maisons de bourg",
    dept: "Orne (61)",
    tags: ["Bourg rural", "Pavillons"],
    featured: false,
    svgX: 161, svgY: 213,
    lx: -6, ly: -8,
  },
  {
    name: "Aube",
    label: "Aube",
    postalCode: "61270",
    href: "/peintre-aube",
    note: "Maisons en pierre de l'Orne",
    dept: "Orne (61)",
    tags: ["Pierre normande", "Maisons de caractère"],
    featured: false,
    svgX: 166, svgY: 222,
    lx: -6, ly: 13,
  },
  {
    name: "Crulai",
    label: "Crulai",
    postalCode: "61300",
    href: "/peintre-crulai",
    note: "Maisons de campagne",
    dept: "Orne (61)",
    tags: ["Campagne normande"],
    featured: false,
    svgX: 181, svgY: 181,
    lx: -6, ly: -8,
  },
  {
    name: "Chandai",
    label: "Chandai",
    postalCode: "61300",
    href: "/peintre-chandai",
    note: "Village normand typique",
    dept: "Orne (61)",
    tags: ["Village normand"],
    featured: false,
    svgX: 180, svgY: 210,
    lx: -6, ly: 13,
  },
  {
    name: "Moulins-la-Marche",
    label: "Moulins",
    postalCode: "61380",
    href: "/peintre-moulins-la-marche",
    note: "Bourg rural de l'Orne",
    dept: "Orne (61)",
    tags: ["Bourg rural"],
    featured: false,
    svgX: 143, svgY: 229,
    lx: -6, ly: -8,
  },
  {
    name: "Longny-les-Villages",
    label: "Longny",
    postalCode: "61290",
    href: "/peintre-longny-les-villages",
    note: "Perche ornais & communes",
    dept: "Orne (61)",
    tags: ["Perche ornais"],
    featured: false,
    svgX: 213, svgY: 269,
    lx: 7, ly: 13,
  },
];

export default function ZonesSection() {
  const [selected, setSelected] = useState(zones[0]);

  return (
    <section id="zones" className="relative py-16" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Zones d'intervention
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-3xl md:text-4xl leading-tight" style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}>
              L'Aigle et{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>50 km alentour</em>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-mid)" }}>
              Déplacement inclus dans le devis — aucun supplément pour les communes du secteur.
            </p>
          </div>
        </motion.div>

        {/* Map + Panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid lg:grid-cols-[1fr,340px] gap-4"
        >

          {/* ── SVG Map ── */}
          <div
            className="relative overflow-hidden"
            style={{ border: "1px solid var(--beige)", backgroundColor: "var(--beige-light)" }}
          >
            <svg
              viewBox="0 0 380 390"
              className="w-full h-full"
              style={{ display: "block" }}
            >
              {/* Grid paper background */}
              <defs>
                <pattern id="zones-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(31,47,58,0.06)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="380" height="390" fill="url(#zones-grid)" />

              {/* 50km radius circle */}
              <circle
                cx="190" cy="195" r="130"
                fill="rgba(201,98,60,0.04)"
                stroke="rgba(201,98,60,0.35)"
                strokeWidth="1"
                strokeDasharray="5 4"
              />
              {/* "50 km" label on circle */}
              <text x="326" y="192" fontSize="8" fill="rgba(201,98,60,0.6)" fontFamily="Inter, sans-serif" fontWeight="500">
                50 km
              </text>

              {/* City dots + labels */}
              {zones.map((zone) => {
                const isSelected = selected.name === zone.name;
                const isFeatured = zone.featured;

                return (
                  <g
                    key={zone.name}
                    onClick={() => setSelected(zone)}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Selection ring */}
                    {isSelected && (
                      <motion.circle
                        cx={zone.svgX} cy={zone.svgY}
                        r={isFeatured ? 14 : 10}
                        fill="none"
                        stroke="var(--terracotta)"
                        strokeWidth="1"
                        strokeOpacity="0.4"
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.25 }}
                      />
                    )}

                    {/* Dot */}
                    <circle
                      cx={zone.svgX}
                      cy={zone.svgY}
                      r={isFeatured ? 7 : isSelected ? 5 : 3.5}
                      fill={isFeatured ? "var(--terracotta)" : isSelected ? "var(--terracotta)" : "var(--navy)"}
                      fillOpacity={isFeatured ? 1 : isSelected ? 0.9 : 0.55}
                    />

                    {/* Label */}
                    <text
                      x={zone.svgX + zone.lx}
                      y={zone.svgY + zone.ly}
                      fontSize={isFeatured ? "9.5" : "7.5"}
                      fontWeight={isFeatured || isSelected ? "700" : "500"}
                      fontFamily="Inter, sans-serif"
                      fill={isFeatured ? "var(--terracotta)" : isSelected ? "var(--navy)" : "rgba(31,47,58,0.65)"}
                      textAnchor={zone.lx < 0 ? "end" : "start"}
                    >
                      {zone.label}
                    </text>
                  </g>
                );
              })}

              {/* Watermark */}
              <text x="10" y="383" fontSize="7" fill="rgba(31,47,58,0.3)" fontFamily="Inter, sans-serif">
                © Entre 4 Murs — Zone 50 km
              </text>
            </svg>
          </div>

          {/* ── Info panel ── */}
          <div
            className="flex flex-col"
            style={{ border: "1px solid var(--beige)", backgroundColor: "var(--off-white)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full p-6"
              >
                {/* Name + postal code */}
                <div className="flex items-start justify-between mb-1">
                  <h3
                    className="text-2xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
                  >
                    {selected.name}
                  </h3>
                  <span
                    className="text-xl font-bold flex-shrink-0 ml-3"
                    style={{ color: "var(--terracotta)", fontFamily: "var(--font-serif)" }}
                  >
                    {selected.postalCode}
                  </span>
                </div>

                <p className="text-sm mb-4" style={{ color: "var(--text-mid)" }}>
                  {selected.note}
                </p>

                {/* Featured badge */}
                {selected.featured && (
                  <div
                    className="inline-flex self-start text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 mb-4"
                    style={{
                      backgroundColor: "rgba(201,98,60,0.1)",
                      color: "var(--terracotta)",
                      border: "1px solid rgba(201,98,60,0.25)",
                    }}
                  >
                    Siège de l'agence
                  </div>
                )}

                <div className="h-px mb-4" style={{ backgroundColor: "var(--beige)" }} />

                {/* Tags */}
                <ul className="space-y-2.5 mb-5 flex-1">
                  <li className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-mid)" }}>
                    <div className="w-3 h-3 border flex-shrink-0 mt-0.5" style={{ borderColor: "var(--terracotta)" }} />
                    {selected.dept}
                  </li>
                  {selected.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text-mid)" }}>
                      <div className="w-3 h-3 border flex-shrink-0 mt-0.5" style={{ borderColor: "var(--beige)" }} />
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="h-px mb-4" style={{ backgroundColor: "var(--beige)" }} />

                {/* CTA */}
                <Link
                  to={selected.href}
                  className="group flex items-center justify-between px-4 py-3 text-sm font-semibold transition-all duration-200"
                  style={{
                    border: "1px solid var(--navy)",
                    color: "var(--navy)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--navy)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--navy)";
                  }}
                >
                  Voir la page peintre
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs mt-5 text-center"
          style={{ color: "var(--text-light)" }}
        >
          Vous ne trouvez pas votre commune ?{" "}
          <a href="#contact" className="underline underline-offset-2 hover:opacity-70 transition-opacity" style={{ color: "var(--terracotta)" }}>
            Contactez-nous
          </a>{" "}
          — nous étudions toute demande dans un rayon élargi.
        </motion.p>
      </div>
    </section>
  );
}
