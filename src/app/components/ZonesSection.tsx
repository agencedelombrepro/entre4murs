import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { MapContainer, TileLayer, Circle, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ZonesMap.css";

const LAIGLE: [number, number] = [48.7730, 0.6241];

const zones = [
  {
    name: "L'Aigle",
    label: "L'Aigle",
    lat: 48.7730, lng: 0.6241,
    postalCode: "61300",
    href: "/peintre-laigle",
    note: "Siège — réactivité maximale",
    dept: "Orne (61)",
    tags: ["Siège de l'agence", "Priorité 1", "Devis sous 24h"],
    featured: true,
  },
  {
    name: "Verneuil d'Avre et d'Iton",
    label: "Verneuil",
    lat: 48.7340, lng: 0.9289,
    postalCode: "27130",
    href: "/peintre-verneuil-davre-et-diton",
    note: "Bâtiments anciens & patrimoine",
    dept: "Eure (27)",
    tags: ["Bâti ancien", "Patrimoine"],
    featured: false,
  },
  {
    name: "Argentan",
    label: "Argentan",
    lat: 48.7448, lng: -0.0225,
    postalCode: "61200",
    href: "/peintre-argentan",
    note: "Sous-préfecture de l'Orne",
    dept: "Orne (61)",
    tags: ["Sous-préfecture", "Zone urbaine"],
    featured: false,
  },
  {
    name: "Mortagne-au-Perche",
    label: "Mortagne",
    lat: 48.5186, lng: 0.5484,
    postalCode: "61400",
    href: "/peintre-mortagne-au-perche",
    note: "Maisons bourgeoises du Perche",
    dept: "Orne (61)",
    tags: ["Bâti bourgeois", "Perche ornais"],
    featured: false,
  },
  {
    name: "Nogent-le-Rotrou",
    label: "Nogent",
    lat: 48.3217, lng: 0.8240,
    postalCode: "28400",
    href: "/peintre-nogent-le-rotrou",
    note: "Porte du Perche, Eure-et-Loir",
    dept: "Eure-et-Loir (28)",
    tags: ["Porte du Perche", "Hors zone — sur demande"],
    featured: false,
  },
  {
    name: "Gacé",
    label: "Gacé",
    lat: 48.7885, lng: 0.2993,
    postalCode: "61230",
    href: "/peintre-gace",
    note: "Longères & bâti rural normand",
    dept: "Orne (61)",
    tags: ["Bâti rural", "Longères"],
    featured: false,
  },
  {
    name: "Tourouvre-au-Perche",
    label: "Tourouvre",
    lat: 48.6156, lng: 0.6086,
    postalCode: "61190",
    href: "/peintre-tourouvre-au-perche",
    note: "Fermes & corps de ferme",
    dept: "Orne (61)",
    tags: ["Corps de ferme", "Perche"],
    featured: false,
  },
  {
    name: "Saint-Sulpice-sur-Risle",
    label: "St-Sulpice",
    lat: 48.7629, lng: 0.7177,
    postalCode: "61300",
    href: "/peintre-saint-sulpice-sur-risle",
    note: "Village proche de L'Aigle",
    dept: "Orne (61)",
    tags: ["Proche L'Aigle", "Pavillons"],
    featured: false,
  },
  {
    name: "Raï",
    label: "Raï",
    lat: 48.7367, lng: 0.5508,
    postalCode: "61270",
    href: "/peintre-rai",
    note: "Pavillons & maisons de bourg",
    dept: "Orne (61)",
    tags: ["Bourg rural", "Pavillons"],
    featured: false,
  },
  {
    name: "Aube",
    label: "Aube",
    lat: 48.7283, lng: 0.5925,
    postalCode: "61270",
    href: "/peintre-aube",
    note: "Maisons en pierre de l'Orne",
    dept: "Orne (61)",
    tags: ["Pierre normande", "Maisons de caractère"],
    featured: false,
  },
  {
    name: "Crulai",
    label: "Crulai",
    lat: 48.7895, lng: 0.5847,
    postalCode: "61300",
    href: "/peintre-crulai",
    note: "Maisons de campagne",
    dept: "Orne (61)",
    tags: ["Campagne normande"],
    featured: false,
  },
  {
    name: "Chandai",
    label: "Chandai",
    lat: 48.7589, lng: 0.5875,
    postalCode: "61300",
    href: "/peintre-chandai",
    note: "Village normand typique",
    dept: "Orne (61)",
    tags: ["Village normand"],
    featured: false,
  },
  {
    name: "Moulins-la-Marche",
    label: "Moulins",
    lat: 48.6777, lng: 0.3827,
    postalCode: "61380",
    href: "/peintre-moulins-la-marche",
    note: "Bourg rural de l'Orne",
    dept: "Orne (61)",
    tags: ["Bourg rural"],
    featured: false,
  },
  {
    name: "Longny-les-Villages",
    label: "Longny",
    lat: 48.5229, lng: 0.7485,
    postalCode: "61290",
    href: "/peintre-longny-les-villages",
    note: "Perche ornais & communes",
    dept: "Orne (61)",
    tags: ["Perche ornais"],
    featured: false,
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
          {/* ── Leaflet Map ── */}
          <div
            style={{
              height: 460,
              border: "1px solid var(--beige)",
              overflow: "hidden",
            }}
          >
            <MapContainer
              center={[48.66, 0.46]}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributeurs'
                url="https://tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
              />

              {/* 50 km radius circle */}
              <Circle
                center={LAIGLE}
                radius={50000}
                pathOptions={{
                  color: "#C9623C",
                  fillColor: "#C9623C",
                  fillOpacity: 0.04,
                  weight: 1.5,
                  dashArray: "6 5",
                }}
              />

              {/* City markers */}
              {zones.map((zone) => {
                const isSelected = selected.name === zone.name;
                const isFeatured = zone.featured;
                return (
                  <CircleMarker
                    key={zone.name}
                    center={[zone.lat, zone.lng]}
                    radius={isFeatured ? 9 : isSelected ? 7 : 5}
                    pathOptions={{
                      fillColor: isFeatured || isSelected ? "#C9623C" : "#1F2F3A",
                      fillOpacity: isFeatured ? 1 : isSelected ? 0.9 : 0.55,
                      color: "white",
                      weight: isFeatured || isSelected ? 2 : 1.5,
                    }}
                    eventHandlers={{ click: () => setSelected(zone) }}
                  >
                    <Tooltip
                      permanent
                      direction="top"
                      offset={[0, isFeatured ? -12 : -8]}
                      className={`e4m-zone-label${isFeatured ? " e4m-featured" : ""}${isSelected ? " e4m-selected" : ""}`}
                    >
                      {zone.label}
                    </Tooltip>
                  </CircleMarker>
                );
              })}

            </MapContainer>
          </div>

          {/* ── Info Panel ── */}
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
