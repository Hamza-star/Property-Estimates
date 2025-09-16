import AboutUs from "@/components/AboutUs";
import BrandLogosStrip from "@/components/BrandLogosStrip";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ServicesSection />
      <WorkProcess />
      <BrandLogosStrip />
      <FaqSection />
    </>
  );
}
