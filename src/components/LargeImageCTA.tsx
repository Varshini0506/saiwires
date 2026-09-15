import React from "react";
import { COMPANY_DATA } from "../data/company";
import { CTA_BANNER_IMAGE } from "../data/fencingImages";
import { MessageCircle, ArrowRight, Shield } from "lucide-react";

export const LargeImageCTA: React.FC = () => {
  return (
    <section className="large-image-cta-section">
      {/* Background Real Fencing Image */}
      <img
        src={CTA_BANNER_IMAGE}
        alt="Real Kambi Veli Fencing Boundary"
        className="cta-bg-image"
        loading="lazy"
      />
      <div className="cta-overlay-tint" />

      {/* Foreground Content Card */}
      <div className="container cta-content-container">
        <div className="cta-glass-card">
          <div className="cta-shield-icon">
            <Shield size={28} />
          </div>
          <span className="cta-badge-label">SAI WIRES AND FENCE</span>
          <h2 className="cta-main-heading">READY TO SECURE YOUR LAND?</h2>
          <p className="cta-sub-text">
            Get in touch for your fencing requirement.
          </p>

          <div className="cta-button-group">
            <a href="#contact" className="btn btn-accent btn-lg">
              <span>Get Free Quote</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={COMPANY_DATA.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
