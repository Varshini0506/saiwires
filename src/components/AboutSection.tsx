import React from "react";
import { COMPANY_DATA } from "../data/company";
import { ABOUT_BANNER_IMAGE } from "../data/fencingImages";
import { ShieldCheck, Wrench, Sparkles, Clock, ArrowRight, MessageCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Quality Materials",
      desc: "Heavy GI wire, rust-proof mesh, and precast concrete RCC posts."
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      desc: "Accurate alignment, firm pit depth, and tight corner anchoring."
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      desc: "Tailored fencing heights and mesh sizes for your property."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      desc: "Fast site visits, direct transparent pricing, and on-time completion."
    }
  ];

  return (
    <section id="about" className="about-split-section section-space">
      <div className="container">
        <div className="about-split-grid">
          {/* Left Column: Premium Fencing Image Showcase Frame */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img
                src={ABOUT_BANNER_IMAGE}
                alt="SAI WIRES AND FENCE Installation"
                className="about-featured-img"
                loading="lazy"
              />
              <div className="about-img-badge-overlay">
                <span className="about-badge-exp">{COMPANY_DATA.stats.yearsExperience}</span>
                <div className="about-badge-text-group">
                  <strong className="about-badge-title">Years Experience</strong>
                  <span className="about-badge-sub">Quality Fencing in Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Short Text & Highlights */}
          <div className="about-text-column">
            <div className="custom-badge">About Our Company</div>
            <h2 className="about-main-title">ABOUT US</h2>
            <p className="about-lead-paragraph">
              We provide Kambi Veli and land fencing solutions for agricultural lands, farms, plots, homes, and commercial properties.
            </p>

            {/* 4 Clean Highlights */}
            <div className="about-highlights-grid">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="about-highlight-card">
                    <div className="about-icon-box">
                      <Icon size={20} className="about-icon" />
                    </div>
                    <div className="about-highlight-text">
                      <h4 className="about-highlight-title">{item.title}</h4>
                      <p className="about-highlight-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="about-cta-row">
              <a href="#services" className="btn btn-primary">
                <span>View Services</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
