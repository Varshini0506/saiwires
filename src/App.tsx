import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroShowcase } from "./components/HeroShowcase";
import { VisualIntro } from "./components/VisualIntro";
import { AboutSection } from "./components/AboutSection";
import { FencingServices } from "./components/FencingServices";
import { FencingWorkGallery } from "./components/FencingWorkGallery";
import { ProjectEditorialShowcase } from "./components/ProjectEditorialShowcase";
import { WhyChooseUsSection } from "./components/WhyChooseUsSection";
import { HowItWorksProcess } from "./components/HowItWorksProcess";
import { LargeImageCTA } from "./components/LargeImageCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { COMPANY_DATA } from "./data/company";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export const App: React.FC = () => {
  return (
    <div className="website-root">
      {/* 1. Sticky Premium Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Showcase: Automatic Slider with Real Fencing Images, Thumbnails & Lightbox */}
        <HeroShowcase />

        {/* 3. Visual Introduction: "Fencing That Protects Your Land" Asymmetric Layout */}
        <VisualIntro />

        {/* 4. About Us: Clean Split Section with Large Fencing Image & 4 Highlights */}
        <AboutSection />

        {/* 5. Our Fencing Services: Large Image-First Cards */}
        <FencingServices />

        {/* 6. Work Gallery: Displays ALL Existing Fencing Images in Dynamic Masonry + Full Lightbox */}
        <FencingWorkGallery />

        {/* 7. Project Showcase: "Built For Farms. Built To Last." Editorial Construction Layout */}
        <ProjectEditorialShowcase />

        {/* 8. Why Choose Us: 4 Pillars with Simple Icons & Minimal Text */}
        <WhyChooseUsSection />

        {/* 9. Simple Process: "How It Works" 4-Step Visual Timeline */}
        <HowItWorksProcess />

        {/* 10. Large Image CTA: Full-Width Real Fencing Banner */}
        <LargeImageCTA />

        {/* 11. Contact Us: Split Layout with Fencing Image, Direct Connect & Quote Form */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={COMPANY_DATA.social.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="desktop-floating-wa"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>

      {/* Mobile Sticky Bottom Bar (Call | WhatsApp | Quote) */}
      <div className="mobile-sticky-bottom-bar">
        <div className="mobile-bar-inner">
          <a href={`tel:${COMPANY_DATA.phone}`} className="btn btn-primary btn-sm">
            <Phone size={14} />
            <span>Call</span>
          </a>
          <a
            href={COMPANY_DATA.social.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm"
          >
            <MessageCircle size={14} />
            <span>WhatsApp</span>
          </a>
          <a href="#contact" className="btn btn-accent btn-sm">
            <span>Get Quote</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
