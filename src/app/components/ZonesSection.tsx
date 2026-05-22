import { motion } from "motion/react";
import { Link } from "react-router";
import { MapPin, ArrowRight } from "lucide-react";

const zones = [
  { name: "L'Aigle", postalCode: "61300", href: "/peintre-laigle", note: "Siège — réactivité maximale", featured: true },
  { name: "Verneuil d'Avre et d'Iton", postalCode: "27130", href: "/peintre-verneuil-davre-et-diton", note: "Bâtiments anciens & patrimoine" },
  { name: "Argentan", postalCode: "61200", href: "/peintre-argentan", note: "Sous-préfecture de l'Orne" },
  { name: "Mortagne-au-Perche", postalCode: "61400", href: "/peintre-mortagne-au-perche", note: "Maisons bourgeoises du Perche" },
  { name: "Nogent-le-Rotrou", postalCode: "28400", href: "/peintre-nogent-le-rotrou", note: "Porte du Perche, Eure-et-Loir" },
  { name: "Gacé", postalCode: "61230", href: "/peintre-gace", note: "Longères & bâti rural normand" },
  { name: "Tourouvre-au-Perche", postalCode: "61190", href: "/peintre-tourouvre-au-perche", note: "Fermes & corps de ferme" },
  { name: "Saint-Sulpice-sur-Risle", postalCode: "61300", href: "/peintre-saint-sulpice-sur-risle", note: "Village proche de L'Aigle" },
  { name: "Rai", postalCode: "61270", href: "/peintre-rai", note: "Pavillons & maisons de bourg" },
  { name: "Aube", postalCode: "61270", href: "/peintre-aube", note: "Maisons en pierre de l'Orne" },
  { name: "Crulai", postalCode: "61300", href: "/peintre-crulai", note: "Maisons de campagne" },
  { name: "Chandai", postalCode: "61300", href: "/peintre-chandai", note: "Village normand typique" },
  { name: "Moulins-la-Marche", postalCode: "61380", href: "/peintre-moulins-la-marche", note: "Bourg rural de l'Orne" },
  { name: "Longny-les-Villages", postalCode: "61290", href: "/peintre-longny-les-villages", note: "Perche ornais & communes" },
];

export default function ZonesSection() {
  return (
    <section
      id="zones"
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
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Zones d'intervention
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="text-3xl md:text-4xl leading-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
            >
              L'Aigle et{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                50 km alentour
              </em>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-mid)" }}>
              Déplacement inclus dans le devis. Aucun supplément pour les communes du secteur.
            </p>
          </div>
        </motion.div>

        {/* Zone grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {zones.map((zone, i) => (
            <motion.div
              key={zone.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to={zone.href}
                className="group flex flex-col p-4 h-full transition-all duration-200"
                style={{
                  border: zone.featured
                    ? "1px solid var(--terracotta)"
                    : "1px solid var(--beige)",
                  backgroundColor: zone.featured ? "rgba(201,98,60,0.04)" : "var(--off-white)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--terracotta)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,98,60,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (!zone.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "var(--off-white)";
                  }
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <MapPin
                    size={13}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: zone.featured ? "var(--terracotta)" : "var(--text-gray)" }}
                  />
                  <span
                    className="text-[10px] font-mono"
                    style={{ color: zone.featured ? "var(--terracotta)" : "var(--text-light)" }}
                  >
                    {zone.postalCode}
                  </span>
                </div>
                <div
                  className="text-sm font-semibold mb-1 leading-snug"
                  style={{ color: "var(--navy)", fontFamily: "var(--font-serif)" }}
                >
                  {zone.name}
                </div>
                <div
                  className="text-[11px] leading-snug flex-1"
                  style={{ color: "var(--text-gray)" }}
                >
                  {zone.note}
                </div>
                <div
                  className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: "var(--terracotta)" }}
                >
                  Voir la page
                  <ArrowRight size={10} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-xs mt-6 text-center"
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
