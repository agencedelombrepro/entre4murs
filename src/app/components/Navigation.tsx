import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 421 497"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="matrix(1,0,0,1,-891.904,-228.908)">
        <g transform="matrix(0.00255892,-0.910707,2.04706,0.00575185,237.313,1388.06)">
          <path
            d="M730.423,410.923L760.439,382.017L962.73,381.764L962.73,330.86L962.652,318.568L1020.72,318.495L1227.33,374.924L1239.42,384.332L1274.24,410.718L1275.39,410.717L1171.04,523.598L785.072,523.744L730.365,411.423L729.904,411.424L730.218,411.121L730.121,410.923L730.423,410.923ZM1207.49,410.827L1011.47,411.072L1011.47,430.629L962.73,430.629L962.73,411.133L786.254,411.353L828.424,499.336L1132.03,499.221L1207.49,410.827ZM1141.53,381.541L1011.47,346.019L1011.47,381.703L1141.53,381.541Z"
            fill="#C9623C"
          />
        </g>
      </g>
    </svg>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Avis clients", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(31,47,58,0.97)" : "rgba(31,47,58,1)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <LogoIcon className="w-10 h-10 flex-shrink-0" />
            <div className="flex flex-col leading-tight">
              <span
                className="font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem" }}
              >
                Entre 4 Murs
              </span>
              <span className="text-[10px] text-[#C9623C] uppercase tracking-[0.15em] font-medium">
                Artisan Peintre · L'Aigle
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA phone */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+33XXXXXXXXX"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-none transition-all duration-200 group"
              style={{ backgroundColor: "#C9623C" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B5502A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9623C")}
            >
              <Phone size={15} />
              <span>Devis gratuit</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-1"
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60]"
          style={{ backgroundColor: "rgba(31,47,58,0.98)" }}
        >
          <div className="flex flex-col h-full px-8 pt-6 pb-12">
            <div className="flex items-center justify-between mb-12">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <LogoIcon className="w-10 h-10" />
                <span className="font-bold text-white text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                  Entre 4 Murs
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1"
                aria-label="Fermer le menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-[#C9623C] transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="tel:+33XXXXXXXXX"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-3 py-4 text-white font-semibold text-lg"
              style={{ backgroundColor: "#C9623C" }}
            >
              <Phone size={20} />
              Appeler maintenant
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
