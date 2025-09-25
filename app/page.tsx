import AboutUs from "@/components/AboutUs";
import BlogsSection from "@/components/BlogsSection";
import BrandLogosStrip from "@/components/BrandLogosStrip";
import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import MovingLine from "@/components/MovingLine";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import VideoHero from "@/components/VideoHero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
// import AboutUs from "./about/page";

export default function Home() {
  return (
    <>
      <MovingLine />
      <HeroSection />

      <AboutUs />
      {/* <AboutUs /> */}
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
