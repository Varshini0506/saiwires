import React, { useState, useEffect } from "react";
import { COMPANY_DATA } from "../data/company";
import { MessageCircle, Phone, Menu, X, Shield, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
          <div className="brand-icon-box">
            <Shield className="brand-shield" size={22} />
          </div>
          <div className="brand-text-block">
            <span className="brand-title">{COMPANY_DATA.name}</span>
            <span className="brand-subtitle">{COMPANY_DATA.badge}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#projects" className="nav-link">Showcase</a>
          <a href="#contact" className="nav-link">Contact Us</a>
        </nav>

        {/* Action CTAs */}
        <div className="nav-actions">
          <a
            href={COMPANY_DATA.social.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm nav-btn-wa"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
          <a href="#contact" className="btn btn-accent btn-sm nav-btn-quote">
            <span>Get Quote</span>
            <ArrowRight size={15} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMobileMenu}>
          <div className="mobile-drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="brand-text-block">
                <span className="brand-title">{COMPANY_DATA.name}</span>
                <span className="brand-subtitle">{COMPANY_DATA.badge}</span>
              </div>
              <button
                className="mobile-drawer-close"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mobile-drawer-links">
              <a href="#home" className="mobile-nav-item" onClick={closeMobileMenu}>
                Home
              </a>
              <a href="#about" className="mobile-nav-item" onClick={closeMobileMenu}>
                About Us
              </a>
              <a href="#services" className="mobile-nav-item" onClick={closeMobileMenu}>
                Services
              </a>
              <a href="#gallery" className="mobile-nav-item" onClick={closeMobileMenu}>
                Work Gallery
              </a>
              <a href="#projects" className="mobile-nav-item" onClick={closeMobileMenu}>
                Project Showcase
              </a>
              <a href="#why-us" className="mobile-nav-item" onClick={closeMobileMenu}>
                Why Choose Us
              </a>
              <a href="#contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                Contact Us
              </a>
            </nav>

            <div className="mobile-drawer-cta-stack">
              <a
                href={`tel:${COMPANY_DATA.phone}`}
                className="btn btn-primary"
                onClick={closeMobileMenu}
              >
                <Phone size={18} />
                <span>Call {COMPANY_DATA.displayPhone}</span>
              </a>
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                onClick={closeMobileMenu}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="#contact"
                className="btn btn-accent"
                onClick={closeMobileMenu}
              >
                <span>Get Free Quotation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
