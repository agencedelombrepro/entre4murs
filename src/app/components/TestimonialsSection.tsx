import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    location: "L'Aigle (61300)",
    rating: 5,
    text: "Guillaume a entièrement repeint notre maison. Travail impeccable, respect des délais, communication parfaite tout au long du chantier. On recommande les yeux fermés.",
    project: "Rénovation intérieure complète",
    date: "Mars 2026",
  },
  {
    name: "Jean-Pierre D.",
    location: "Verneuil d'Avre et d'Iton",
    rating: 5,
    text: "Ravalement de façade réalisé dans les règles de l'art. Très professionnel, explications claires avant et pendant le chantier. Résultat impeccable.",
    project: "Ravalement de façade",
    date: "Février 2026",
  },
  {
    name: "Marie L.",
    location: "Mortagne-au-Perche",
    rating: 5,
    text: "Nous cherchions un artisan fiable pour notre cuisine et notre salon. Guillaume a été parfait : conseils pertinents, finitions soignées, aucune mauvaise surprise.",
    project: "Peinture cuisine et salon",
    date: "Janvier 2026",
  },
  {
    name: "Thomas R.",
    location: "Argentan (61200)",
    rating: 5,
    text: "Pose de placo et peinture pour un appartement locatif. Travail rapide et propre. Guillaume a su s'adapter à mes contraintes de planning, très réactif.",
    project: "Appartement locatif",
    date: "Décembre 2025",
  },
  {
    name: "Catherine B.",
    location: "L'Aigle (61300)",
    rating: 5,
    text: "Rénovation d'une maison ancienne avec des enduits à la chaux. Un vrai savoir-faire artisanal, respect du bâti ancien. Le résultat est magnifique.",
    project: "Maison ancienne – enduits à la chaux",
    date: "Novembre 2025",
  },
  {
    name: "Pascal F.",
    location: "Nogent-le-Rotrou",
    rating: 5,
    text: "Travaux extérieurs sur notre façade. Guillaume maîtrise parfaitement son métier. Respect des normes DTU, assurance décennale fournie. Que demander de plus ?",
    project: "Peinture extérieure",
    date: "Octobre 2025",
  },
];

const globalStats = [
  { value: "5.0", label: "Note moyenne Google" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "85%", label: "Clients recommandent" },
  { value: "0", label: "Litige en 16 ans" },
];

export default function TestimonialsSection() {
  return (
    <section
      id="avis"
      className="relative py-16"
      style={{ backgroundColor: "var(--beige-light)" }}
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
            <span className="text-xs uppercase tracking-[0.22em] font-semibold" style={{ color: "var(--terracotta)" }}>
              Avis clients
            </span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
          </div>
          <h2
            className="text-3xl md:text-4xl mb-3"
            style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
          >
            Ce que disent{" "}
            <em className="not-italic" style={{ color: "var(--terracotta)" }}>
              nos clients
            </em>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--text-mid)" }}>
            La satisfaction de nos clients est notre priorité. Voici leurs témoignages authentiques.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-5 flex flex-col transition-all duration-300"
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid var(--beige)",
                  boxShadow: "0 1px 4px rgba(31,47,58,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--terracotta)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(201,98,60,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--beige)";
                  e.currentTarget.style.boxShadow = "0 1px 4px rgba(31,47,58,0.04)";
                }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--terracotta)" style={{ color: "var(--terracotta)" }} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed italic flex-1 mb-5" style={{ color: "var(--text-mid)" }}>
                  "{t.text}"
                </p>

                {/* Project tag */}
                <div
                  className="text-[10px] uppercase tracking-widest font-semibold mb-3 pb-3"
                  style={{ color: "var(--terracotta)", borderBottom: "1px solid var(--beige)" }}
                >
                  {t.project}
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--navy)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-gray)" }}>
                      {t.location}
                    </div>
                  </div>
                  <div className="text-xs" style={{ color: "var(--text-light)" }}>
                    {t.date}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden"
          style={{ backgroundColor: "var(--beige)", border: "1px solid var(--beige)" }}
        >
          {globalStats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-5 px-4 text-center"
              style={{ backgroundColor: "var(--white)" }}
            >
              <div
                className="font-bold text-4xl mb-1"
                style={{ fontFamily: "var(--font-serif)", color: "var(--navy)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "var(--text-mid)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Google reviews link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
            style={{ color: "var(--navy)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Voir tous nos avis Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
