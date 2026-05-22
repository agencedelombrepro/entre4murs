import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import MatiereSection from "../components/MatiereSection";
import ServicesSection from "../components/ServicesSection";
import WhySection from "../components/WhySection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Navigation from "../components/Navigation";

const DOMAIN = "https://entre4murs.fr";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Entre 4 Murs – Peintre & Plaquiste L'Aigle (Orne 61) | Artisan depuis 2010</title>
        <meta
          name="description"
          content="Artisan peintre et plaquiste à L'Aigle (61300). Peinture intérieure, extérieure, pose de placo, rénovation complète, ravalement de façade. Assurance décennale. Devis gratuit sous 48h."
        />
        <link rel="canonical" href={DOMAIN} />
        <meta property="og:title" content="Entre 4 Murs – Peintre & Plaquiste L'Aigle (Orne 61)" />
        <meta property="og:description" content="Artisan peintre et plaquiste à L'Aigle. Peinture, placo, rénovation. Assurance décennale. Devis gratuit 48h." />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${DOMAIN}/images/chantier-15.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen" style={{ backgroundColor: "var(--off-white)" }}>
        <Navigation />
        <main>
          <HeroSection />
          <MatiereSection />
          <ServicesSection />
          <WhySection />
          <PortfolioSection />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </>
  );
}
