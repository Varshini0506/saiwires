import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { COMPANY_DATA } from "../data/company";
import { MessageCircle, Menu, X, ArrowRight, Home, Info, Wrench, Eye, Video, PhoneCall } from "lucide-react";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home", icon: Home },
    { href: "#about", label: "About Us", icon: Info },
    { href: "#services", label: "Services", icon: Wrench },
    { href: "#projects", label: "Showcase", icon: Eye },
    { href: "#videos", label: "Videos", icon: Video },
    { href: "#contact", label: "Contact Us", icon: PhoneCall },
  ];

  return (
    <>
      <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" onClick={closeMobileMenu}>
            <div className="brand-icon-box">
              <img src="/images/logo.png" alt={COMPANY_DATA.name} className="brand-logo-img" />
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
            <a href="#projects" className="nav-link">Showcase</a>
            <a href="#videos" className="nav-link">Videos</a>
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
              type="button"
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Rendered via Portal at body root for reliable layering */}
      {mobileMenuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="mobile-drawer-overlay"
            onClick={closeMobileMenu}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="mobile-drawer-panel"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobile-drawer-header">
                <div className="nav-brand">
                  <div className="brand-icon-box">
                    <img src="/images/logo.png" alt={COMPANY_DATA.name} className="brand-logo-img" />
                  </div>
                  <div className="brand-text-block">
                    <span className="brand-title">{COMPANY_DATA.name}</span>
                    <span className="brand-subtitle">{COMPANY_DATA.badge}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="mobile-drawer-close"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mobile-drawer-links">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="mobile-nav-item"
                      onClick={closeMobileMenu}
                    >
                      <Icon size={18} className="mobile-nav-icon" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
