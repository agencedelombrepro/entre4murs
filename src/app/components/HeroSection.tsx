import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Shield, Award, CheckCircle2, Phone, Star } from "lucide-react";
import { useRef } from "react";

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

  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section ref={ref} className="relative flex flex-col overflow-hidden" style={{ minHeight: "100svh" }}>
      {/* Background photo — parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: photoY, scale: 1.08 }}
      >
        <img
          src="/images/chantier-01.jpg"
          alt="Chantier rénovation Entre 4 Murs — Artisan peintre L'Aigle Orne"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(15,25,33,0.88) 0%, rgba(15,25,33,0.55) 55%, rgba(15,25,33,0.15) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(15,25,33,0.75) 0%, transparent 50%)",
        }}
      />

      {/* Artisan stamp — top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ delay: 1.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-28 right-10 hidden lg:block z-10"
      >
        <svg width="118" height="118" viewBox="0 0 118 118" aria-hidden="true" style={{ color: "var(--terracotta)", opacity: 0.9 }}>
          <defs>
            <path id="stamp-arc" d="M59,59 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
          </defs>
          <circle cx="59" cy="59" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2.5" />
          <circle cx="59" cy="59" r="46" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <text fontSize="7.4" fontFamily="Inter, sans-serif" fontWeight="600" fill="currentColor" letterSpacing="2.6">
            <textPath href="#stamp-arc">ARTISAN PEINTRE · L'AIGLE 61 · DEPUIS 2010 ·&nbsp;&nbsp;</textPath>
          </text>
          <text x="59" y="54" textAnchor="middle" fontSize="15.5" fontFamily="'Caveat', cursive" fontWeight="700" fill="currentColor">Guillaume</text>
          <text x="59" y="70" textAnchor="middle" fontSize="15.5" fontFamily="'Caveat', cursive" fontWeight="700" fill="currentColor">Etasse</text>
          <line x1="40" y1="61" x2="47" y2="61" stroke="currentColor" strokeWidth="0.8" />
          <line x1="71" y1="61" x2="78" y2="61" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-end pb-12 px-8 md:px-14 lg:px-20 pt-32"
        style={{ y: contentY }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="h-px w-8" style={{ backgroundColor: "var(--terracotta)" }} />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: "var(--terracotta)" }}>
            Depuis 2010 · L'Aigle, Orne
          </span>
        </motion.div>

        {/* Handwritten note */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-4"
          style={{
            fontFamily: "var(--font-handwriting)",
            fontSize: "1.2rem",
            color: "rgba(201,98,60,0.8)",
            transform: "rotate(-0.5deg)",
          }}
        >
          votre artisan de confiance dans l'Orne
        </motion.div>

        {/* Main title */}
        <h1 className="mb-6 max-w-3xl">
          {["Artisan peintre", "& plaquiste", "à L'Aigle,", "dans l'Orne."].map((word, wi) => (
            <motion.span
              key={wi}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block"
              style={{
                fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
                lineHeight: 1.05,
                fontFamily: "var(--font-serif)",
                fontWeight: 700,
                color: wi >= 2 ? "var(--terracotta)" : "white",
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="text-sm mb-6 max-w-lg leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Rénovation intérieure de qualité. Travaux conformes DTU, assurance décennale,
          aucun chantier sous-traité — votre projet entre les mains d'un artisan.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-3 py-1.5"
              style={{
                border: "1px solid rgba(201,98,60,0.35)",
                backgroundColor: "rgba(201,98,60,0.1)",
                backdropFilter: "blur(4px)",
              }}
            >
              <Icon size={13} style={{ color: "var(--terracotta)" }} />
              <span className="text-xs text-white/80 font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--terracotta)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--terracotta)")}
          >
            Demander un devis gratuit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#realisations"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(4px)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(201,98,60,0.6)";
              e.currentTarget.style.color = "var(--terracotta)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
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
            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
          >
            <div
              className="w-10 h-10 flex items-center justify-center"
              style={{ backgroundColor: "rgba(201,98,60,0.2)", border: "1px solid rgba(201,98,60,0.4)" }}
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

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4"
        style={{ backgroundColor: "rgba(15,25,33,0.85)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-4 px-4 text-center"
            style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
          >
            <div
              className="font-bold mb-0.5"
              style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "white" }}
            >
              {stat.value}
              <span style={{ color: "var(--terracotta)", fontSize: "1.3rem" }}>{stat.unit}</span>
            </div>
            <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
