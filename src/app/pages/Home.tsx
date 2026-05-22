import HeroSection from "../components/HeroSection";
import MatiereSection from "../components/MatiereSection";
import ServicesSection from "../components/ServicesSection";
import WhySection from "../components/WhySection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
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
  );
}
