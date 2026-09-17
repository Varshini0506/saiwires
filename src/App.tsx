import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroShowcase } from "./components/HeroShowcase";
import { VisualIntro } from "./components/VisualIntro";
import { AboutSection } from "./components/AboutSection";
import { FencingServices } from "./components/FencingServices";
import { ProjectEditorialShowcase } from "./components/ProjectEditorialShowcase";
import { DedicatedGalleryPage } from "./components/DedicatedGalleryPage";
import { SiteVideosShowcase } from "./components/SiteVideosShowcase";
import { HowItWorksProcess } from "./components/HowItWorksProcess";
import { LargeImageCTA } from "./components/LargeImageCTA";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { COMPANY_DATA } from "./data/company";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export const App: React.FC = () => {
  const [isGalleryPage, setIsGalleryPage] = useState<boolean>(() => {
    return window.location.hash === "#gallery-page";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const isGallery = window.location.hash === "#gallery-page";
      setIsGalleryPage(isGallery);
      if (isGallery) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="website-root">
      {/* 1. Sticky Header Navbar */}
      <Navbar />

      <main>
        {isGalleryPage ? (
          /* Full Collection of Real Customer Photos (Opened only upon clicking View More Works) */
          <DedicatedGalleryPage />
        ) : (
          /* Main Landing Page */
          <>
            {/* 2. Hero Section: Real Fencing Photos */}
            <HeroShowcase />

            {/* 3. Short Visual Intro */}
            <VisualIntro />

            {/* 4. About Us: Founder & Company Information */}
            <AboutSection />

            {/* 5. Services Provided */}
            <FencingServices />

            {/* 6. Showcase: Small photo preview + View More Works button */}
            <ProjectEditorialShowcase />

            {/* 7. Videos: 4 Real Customer Videos with Continuous Autoplay */}
            <SiteVideosShowcase />

            {/* 8. Simple 4-Step Process */}
            <HowItWorksProcess />

            {/* 9. Large Real Fencing Banner CTA */}
            <LargeImageCTA />

            {/* 10. Contact Us & Quote Form */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 11. Footer */}
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
