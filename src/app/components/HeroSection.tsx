import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Shield, Award, CheckCircle2, Phone, Star } from "lucide-react";
import { useRef } from "react";

const titleWords = ["Artisan peintre", "& plaquiste", "à L'Aigle,", "dans l'Orne."];

const stats = [
  { value: "16", unit: "ans", label: "D'expérience" },
  { value: "500+", unit: "", label: "Chantiers réalisés" },
  { value: "100%", unit: "", label: "Sans sous-traitance" },
  { value: "0", unit: "", label: "Litige en 16 ans" },
];

const badges = [
  { icon: Shield, label: "Assurance décennale" },
  { icon: Award, label: "Conformité DTU" },
  { icon: CheckCircle2, label: "Devis gratuit 48h" },
];

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Main grid: left navy content + right photo */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-screen">
        {/* LEFT — Navy content */}
        <motion.div
          className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-28 pb-16 lg:pt-0 lg:pb-0 lg:w-[52%]"
          style={{ backgroundColor: "var(--navy)", y: contentY }}
        >
          {/* "Depuis 2010" badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-5"
          >
            <div
              className="h-px w-8"
              style={{ backgroundColor: "var(--terracotta)" }}
            />
            <span
              className="text-xs uppercase tracking-[0.25em] font-semibold"
              style={{ color: "var(--terracotta)" }}
            >
              Depuis 2010 · L'Aigle, Orne
            </span>
          </motion.div>

          {/* Main title */}
          <h1 className="mb-4 text-white">
            {titleWords.map((word, wi) => (
              <motion.span
                key={wi}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + wi * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
                style={{
                  fontSize: "clamp(1.9rem, 4vw, 3rem)",
                  lineHeight: 1.1,
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  color: wi === 2 || wi === 3 ? "var(--terracotta)" : "white",
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-sm mb-6 max-w-md leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Rénovation intérieure de qualité. Travaux conformes DTU, assurance décennale,
            aucun chantier sous-traité — votre projet entre les mains d'un artisan.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm"
                style={{
                  border: "1px solid rgba(201,98,60,0.35)",
                  backgroundColor: "rgba(201,98,60,0.08)",
                }}
              >
                <Icon size={14} style={{ color: "var(--terracotta)" }} />
                <span className="text-xs text-white/80 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="flex flex-col sm:flex-row gap-3 mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200"
              style={{ backgroundColor: "var(--terracotta)" }}
            >
              Demander un devis gratuit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#realisations"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,98,60,0.6)";
                e.currentTarget.style.color = "var(--terracotta)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "white";
              }}
            >
              Voir nos réalisations
            </motion.a>
          </motion.div>

          {/* Phone + stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35, duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <a
              href="tel:+33XXXXXXXXX"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(201,98,60,0.15)", border: "1px solid rgba(201,98,60,0.3)" }}
              >
                <Phone size={16} style={{ color: "var(--terracotta)" }} />
              </div>
              <div>
                <div className="text-xs text-white/50 mb-0.5">Appel gratuit</div>
                <div className="font-semibold text-sm tracking-wide">06 XX XX XX XX</div>
              </div>
            </a>
            <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={13} fill="var(--terracotta)" style={{ color: "var(--terracotta)" }} />
                ))}
              </div>
              <div className="text-xs text-white/50">+50 avis clients Google</div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — Photo */}
        <div className="relative lg:w-[48%] h-64 lg:h-auto overflow-hidden">
          <motion.img
            style={{ y: photoY }}
            src="/images/chantier-15.jpg"
            alt="Chantier rénovation Entre 4 Murs — Ferme normande, L'Aigle Orne"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Navy overlay gradient on left edge */}
          <div
            className="absolute inset-y-0 left-0 w-16 hidden lg:block"
            style={{ background: "linear-gradient(to right, var(--navy), transparent)" }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ background: "rgba(31,47,58,0.12)" }} />

          {/* Floating project badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-[220px]"
          >
            <div
              className="p-4 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(31,47,58,0.92)", border: "1px solid rgba(201,98,60,0.3)" }}
            >
              <div className="text-[10px] uppercase tracking-widest text-[#C9623C] font-semibold mb-1">
                Chantier récent
              </div>
              <div className="text-sm font-semibold text-white">
                Rénovation complète · L'Aigle
              </div>
              <div className="text-xs text-white/50 mt-1">
                Peinture · Placo · Carrelage
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        className="w-full grid grid-cols-2 md:grid-cols-4"
        style={{ backgroundColor: "var(--beige-light)" }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-4 px-4 text-center"
            style={{ borderRight: i < 3 ? "1px solid var(--beige)" : "none" }}
          >
            <div
              className="font-bold mb-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.6rem",
                color: "var(--navy)",
              }}
            >
              {stat.value}
              <span style={{ color: "var(--terracotta)", fontSize: "1.4rem" }}>{stat.unit}</span>
            </div>
            <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-mid)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
