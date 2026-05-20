import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import EmergencyCTA from "@/components/EmergencyCTA";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <Testimonials />
        <EmergencyCTA />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
