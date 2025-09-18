import AboutUs from "@/components/AboutUs";
import BlogsSection from "@/components/BlogsSection";
import BrandLogosStrip from "@/components/BrandLogosStrip";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoHero from "@/components/VideoHero";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutUs />
      <ServicesSection />
      {/* <OurJourney /> */}
      <BrandLogosStrip />
      <VideoHero />
      <WorkProcess />
      <BlogsSection />
      <FaqSection />
    </>
  );
}
