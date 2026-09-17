import React from "react";
import { COMPANY_DATA } from "../data/company";
import { Phone, MessageCircle, MapPin, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-main-container">
        <div className="footer-columns-grid">
          {/* Brand Info Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <img src="/images/logo.png" alt={COMPANY_DATA.name} className="brand-logo-img" />
              </div>
              <div className="footer-brand-title-wrap">
                <span className="footer-brand-name">{COMPANY_DATA.name}</span>
                <span className="footer-brand-badge">{COMPANY_DATA.badge}</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Tamil Nadu contractor for heavy-gauge Kambi Veli, GI wire mesh, and precast concrete RCC posts.
            </p>
            <div className="footer-social-strip">
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn wa"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${COMPANY_DATA.phone}`}
                className="footer-social-btn phone"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Showcase</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Fencing Types</h4>
            <ul className="footer-nav-list">
              <li><a href="#services">Kambi Veli (கம்பி வேலி)</a></li>
              <li><a href="#services">Chain Link Fencing</a></li>
              <li><a href="#services">Barbed Wire Fencing</a></li>
              <li><a href="#services">RCC Post Fencing</a></li>
              <li><a href="#services">Farm Fencing</a></li>
              <li><a href="#services">Plot Fencing</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Phone size={16} />
                <div>
                  <span className="label">Phone:</span>
                  <a href={`tel:${COMPANY_DATA.phone}`} className="val">{COMPANY_DATA.displayPhone}</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MessageCircle size={16} />
                <div>
                  <span className="label">WhatsApp:</span>
                  <a href={COMPANY_DATA.social.whatsappUrl} target="_blank" rel="noopener noreferrer" className="val">
                    Chat with Us
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} />
                <div>
                  <span className="label">Service Area:</span>
                  <span className="val">{COMPANY_DATA.state}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom-strip">
          <p className="footer-copy-text">
            &copy; {new Date().getFullYear()} <strong>{COMPANY_DATA.name}</strong>. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};
