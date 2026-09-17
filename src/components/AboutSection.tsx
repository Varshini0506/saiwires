import React from "react";
import { COMPANY_DATA } from "../data/company";
import { ABOUT_BANNER_IMAGE } from "../data/fencingImages";
import { User, MapPin, Phone, MessageCircle, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-split-section section-space">
      <div className="container">
        <div className="about-split-grid">
          {/* Left Column: Real Site Fencing Image Frame */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img
                src={ABOUT_BANNER_IMAGE}
                alt="SRI SAI WIRE NETTING Work by Mahendran P."
                className="about-featured-img"
                loading="lazy"
              />
              <div className="about-img-badge-overlay">
                <span className="about-badge-exp">{COMPANY_DATA.stats.yearsExperience}</span>
                <div className="about-badge-text-group">
                  <strong className="about-badge-title">Years Experience</strong>
                  <span className="about-badge-sub">Kambi Veli in Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Simplified Founder & Company Info */}
          <div className="about-text-column">
            <div className="custom-badge">About Our Company</div>
            <h2 className="about-main-title">ABOUT US</h2>

            {/* Founder Info Card */}
            <div className="about-founder-box">
              <div className="founder-icon-box">
                <User size={22} />
              </div>
              <div className="founder-details">
                <span className="founder-label">Founder / Owner</span>
                <h3 className="founder-name">{COMPANY_DATA.founder}</h3>
                <div className="founder-meta-row">
                  <span className="founder-location">
                    <MapPin size={14} /> {COMPANY_DATA.location}, Tamil Nadu
                  </span>
                  <a href={`tel:${COMPANY_DATA.phone}`} className="founder-phone-link">
                    <Phone size={14} /> {COMPANY_DATA.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct & Authentic Company Summary */}
            <p className="about-lead-paragraph">
              <strong>{COMPANY_DATA.name}</strong> is led by <strong>{COMPANY_DATA.founder}</strong> based in <strong>{COMPANY_DATA.location}</strong>. We deliver professional Kambi Veli and boundary security using premium Tata & Micon GI wire netting, heavy-duty stone pillars, and 6, 7 & 8 ft precast concrete RCC posts for agricultural farmlands, open plots, and commercial properties across all districts of Tamil Nadu.
            </p>

            {/* Work Capabilities Summary */}
            <div className="about-work-points">
              <div className="about-point-item">
                <ShieldCheck size={18} className="point-icon" />
                <span>Tata & Micon heavy-gauge GI wire netting</span>
              </div>
              <div className="about-point-item">
                <ShieldCheck size={18} className="point-icon" />
                <span>6, 7 & 8 Ft stone pillars & precast RCC posts</span>
              </div>
              <div className="about-point-item">
                <ShieldCheck size={18} className="point-icon" />
                <span>End-to-end installation across all Tamil Nadu locations</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="about-cta-row">
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Quotation</span>
              </a>
              <a href={`tel:${COMPANY_DATA.phone}`} className="btn btn-primary">
                <Phone size={16} />
                <span>Call {COMPANY_DATA.founder}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-founder-box {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #ffffff;
          padding: 18px 22px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          margin-bottom: 20px;
        }

        .founder-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--c-forest) 0%, var(--c-forest-dark) 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .founder-details {
          display: flex;
          flex-direction: column;
        }

        .founder-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
          color: var(--c-amber);
        }

        .founder-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--c-forest-dark);
          line-height: 1.2;
          margin: 2px 0 4px 0;
        }

        .founder-meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        .founder-location {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .founder-phone-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--c-forest);
          font-weight: 700;
          text-decoration: none;
        }

        .founder-phone-link:hover {
          text-decoration: underline;
        }

        .about-work-points {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
          background: rgba(240, 24DF, 245, 0.5);
          padding: 14px 18px;
          border-radius: var(--radius-md);
          border-left: 3px solid var(--c-forest);
        }

        .about-point-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--c-forest-dark);
        }

        .point-icon {
          color: var(--c-forest);
          flex-shrink: 0;
        }

        @media (max-width: 640px) {
          .about-founder-box {
            padding: 14px 16px;
          }
          .founder-name {
            font-size: 1.2rem;
          }
          .founder-meta-row {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};
