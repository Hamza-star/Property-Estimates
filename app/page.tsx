import AboutUs from "@/components/AboutUs";
import BlogsSection from "@/components/BlogsSection";
import BrandLogosStrip from "@/components/BrandLogosStrip";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VideoHero from "@/components/VideoHero";
import WorkProcess from "@/components/WorkProcess";
import ProjectsPage from "./projects/page";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import MovingLine from "@/components/MovingLine";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <MovingLine />
      <HeroSection />

      <AboutUs />
      <VideoHero />
      <ServicesSection />
      {/* <OurJourney /> */}
      <BrandLogosStrip />
      <WorkProcess />
      {/* <ProjectsPage /> */}
      <WhyChooseUs />
      <BlogsSection />
      <CtaSection />
      <Testimonials />
      {/* <FaqSection /> */}
    </>
  );
}
