import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  project: string;
  message: string;
}

const cities = [
  "L'Aigle", "Verneuil d'Avre et d'Iton", "Mortagne-au-Perche", "Nogent-le-Rotrou",
  "Gacé", "Argentan", "Tourouvre-au-Perche", "Saint-Sulpice-sur-Risle",
  "Rai", "Aube", "Crulai", "Chandai", "Moulins-la-Marche", "Longny-les-Villages",
  "Autre commune de l'Orne",
];

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/#realisations" },
  { label: "Avis clients", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
];

const cityLinks = [
  { label: "Peintre L'Aigle", href: "/peintre-laigle" },
  { label: "Peintre Verneuil", href: "/peintre-verneuil-davre-et-diton" },
  { label: "Peintre Mortagne", href: "/peintre-mortagne-au-perche" },
  { label: "Peintre Argentan", href: "/peintre-argentan" },
  { label: "Peintre Nogent", href: "/peintre-nogent-le-rotrou" },
  { label: "Peintre Gacé", href: "/peintre-gace" },
];

function InputStyle({ label, id, type = "text", required, placeholder, value, onChange }: {
  label: string; id: string; type?: string; required?: boolean;
  placeholder?: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
        {label} {required && <span style={{ color: "var(--terracotta)" }}>*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 text-sm transition-all duration-200 outline-none"
        style={{
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "white",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--terracotta)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
      />
    </div>
  );
}

export default function CTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: "", phone: "", email: "", city: "", project: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData) => (val: string) => setFormData((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* CTA Section */}
      <section
        id="contact"
        className="relative py-24 overflow-hidden"
        style={{ backgroundColor: "var(--navy)" }}
      >
        {/* Background photo with overlay */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/chantier-26.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, var(--navy) 50%, rgba(31,47,58,0.7) 100%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
                Devis gratuit
              </span>
              <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Parlons de{" "}
              <em className="not-italic" style={{ color: "var(--terracotta)" }}>
                votre projet
              </em>
            </h2>
            <p className="text-sm max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Devis gratuit et détaillé sous 48h. Déplacement sans engagement dans un rayon de 50km autour de L'Aigle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-serif)" }}>
                Contactez-nous directement
              </h3>

              <div className="space-y-5 mb-10">
                <motion.a
                  href="tel:+33XXXXXXXXX"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ backgroundColor: "rgba(201,98,60,0.15)", border: "1px solid rgba(201,98,60,0.3)" }}
                  >
                    <Phone size={18} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Téléphone</div>
                    <div className="text-lg font-semibold text-white group-hover:text-[var(--terracotta)] transition-colors">
                      06 XX XX XX XX
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">Lun–Ven 8h–18h · Sam 9h–12h</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:contact@entre4murs.fr"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-200"
                    style={{ backgroundColor: "rgba(201,98,60,0.15)", border: "1px solid rgba(201,98,60,0.3)" }}
                  >
                    <Mail size={18} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-lg font-semibold text-white group-hover:text-[var(--terracotta)] transition-colors">
                      contact@entre4murs.fr
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">Réponse sous 24h</div>
                  </div>
                </motion.a>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,98,60,0.15)", border: "1px solid rgba(201,98,60,0.3)" }}
                  >
                    <MapPin size={18} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Zone d'intervention</div>
                    <div className="text-lg font-semibold text-white">L'Aigle et environs</div>
                    <div className="text-xs text-white/40 mt-0.5">Rayon 50km · Orne (61)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,98,60,0.15)", border: "1px solid rgba(201,98,60,0.3)" }}
                  >
                    <Clock size={18} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Délai devis</div>
                    <div className="text-lg font-semibold text-white">Sous 48h maximum</div>
                    <div className="text-xs text-white/40 mt-0.5">Gratuit · Sans engagement</div>
                  </div>
                </div>
              </div>

              {/* Engagement bloc */}
              <div
                className="p-6"
                style={{ borderLeft: "3px solid var(--terracotta)", backgroundColor: "rgba(201,98,60,0.06)" }}
              >
                <p className="text-sm font-semibold text-white mb-3">Notre engagement qualité</p>
                <ul className="space-y-2">
                  {[
                    "Réponse personnalisée à chaque demande",
                    "Devis détaillé et transparent",
                    "Visite sur site si nécessaire",
                    "Conseils gratuits sans obligation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <CheckCircle2 size={13} style={{ color: "var(--terracotta)", flexShrink: 0, marginTop: 1 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12"
                  style={{ border: "1px solid rgba(201,98,60,0.3)", backgroundColor: "rgba(201,98,60,0.06)" }}
                >
                  <CheckCircle2 size={48} style={{ color: "var(--terracotta)" }} className="mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                    Message reçu !
                  </h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    Nous vous répondrons sous 48h avec un devis personnalisé.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <InputStyle label="Nom complet" id="name" required placeholder="Jean Dupont" value={formData.name} onChange={update("name")} />
                    <InputStyle label="Téléphone" id="phone" type="tel" required placeholder="06 12 34 56 78" value={formData.phone} onChange={update("phone")} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <InputStyle label="Email" id="email" type="email" required placeholder="jean@exemple.fr" value={formData.email} onChange={update("email")} />
                    <div>
                      <label htmlFor="city" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                        Ville <span style={{ color: "var(--terracotta)" }}>*</span>
                      </label>
                      <select
                        id="city"
                        required
                        value={formData.city}
                        onChange={(e) => update("city")(e.target.value)}
                        className="w-full px-4 py-3 text-sm transition-all duration-200 outline-none"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: formData.city ? "white" : "rgba(255,255,255,0.35)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--terracotta)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                      >
                        <option value="">Votre commune</option>
                        {cities.map((c) => (
                          <option key={c} value={c} style={{ backgroundColor: "var(--navy)", color: "white" }}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Type de projet <span style={{ color: "var(--terracotta)" }}>*</span>
                    </label>
                    <select
                      id="project"
                      required
                      value={formData.project}
                      onChange={(e) => update("project")(e.target.value)}
                      className="w-full px-4 py-3 text-sm transition-all duration-200 outline-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: formData.project ? "white" : "rgba(255,255,255,0.35)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--terracotta)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    >
                      <option value="">Sélectionnez</option>
                      <option value="peinture-interieure" style={{ backgroundColor: "var(--navy)" }}>Peinture intérieure</option>
                      <option value="peinture-exterieure" style={{ backgroundColor: "var(--navy)" }}>Peinture extérieure</option>
                      <option value="placo" style={{ backgroundColor: "var(--navy)" }}>Pose de placo</option>
                      <option value="renovation" style={{ backgroundColor: "var(--navy)" }}>Rénovation intérieure</option>
                      <option value="ravalement" style={{ backgroundColor: "var(--navy)" }}>Ravalement de façade</option>
                      <option value="enduits" style={{ backgroundColor: "var(--navy)" }}>Enduits & finitions</option>
                      <option value="autre" style={{ backgroundColor: "var(--navy)" }}>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Décrivez votre projet <span style={{ color: "var(--terracotta)" }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => update("message")(e.target.value)}
                      placeholder="Surface approximative, état actuel, délais souhaités, autres informations utiles..."
                      className="w-full px-4 py-3 text-sm transition-all duration-200 outline-none resize-none"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--terracotta)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full py-4 text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200"
                    style={{ backgroundColor: "var(--terracotta)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
                  >
                    Envoyer ma demande de devis
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.3)" }}>
                    Vos données sont confidentielles et ne seront jamais partagées à des tiers.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex"
        style={{ boxShadow: "0 -2px 16px rgba(31,47,58,0.15)" }}
      >
        <a
          href="tel:+33XXXXXXXXX"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <Phone size={16} />
          Appeler
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white"
          style={{ backgroundColor: "var(--terracotta)" }}
        >
          <ArrowRight size={16} />
          Devis gratuit
        </a>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "var(--navy-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Entre 4 Murs
              </div>
              <div className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--terracotta)" }}>
                Artisan Peintre & Plaquiste
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Artisan basé à L'Aigle dans l'Orne, intervenant dans un rayon de 50km.
                Assurance décennale · Conformité DTU · Depuis 2010.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                Navigation
              </div>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Villes */}
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                Zones d'intervention
              </div>
              <ul className="space-y-2">
                {cityLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              © {new Date().getFullYear()} Entre 4 Murs — Guillaume Etasse. Tous droits réservés.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.25)" }}>
                Mentions légales
              </a>
              <a href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.25)" }}>
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
