import React from "react";
import { FENCING_IMAGES } from "../data/websiteData";
import { Sparkles, ArrowRight, Shield } from "lucide-react";

export const SeeTheDifference: React.FC = () => {
  return (
    <section id="difference" className="difference-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">
            <Sparkles size={13} />
            <span>SEE THE DIFFERENCE</span>
          </div>
          <h2 className="custom-title">A Strong Boundary Starts Here</h2>
          <p className="custom-sub">
            Precision aligned RCC posts and tight galvanized wire tension engineered for decades of endurance.
          </p>
        </div>

        {/* Asymmetrical 2-Column Showcase */}
        <div className="difference-asymmetric-grid">
          {/* Left: Large Anchor Visual */}
          <div className="diff-large-card">
            <img
              src={FENCING_IMAGES.differenceMain}
              alt="Professionally completed RCC post and wire boundary fencing"
              className="diff-hero-img"
              loading="lazy"
            />
            <div className="diff-large-overlay">
              <div className="diff-large-tag">
                <Shield size={14} /> Certified High-Tensile Steel & Reinforced RCC Posts
              </div>
              <h3 className="diff-large-title">Long-Term Boundary Security</h3>
              <p className="diff-large-desc">Zero wire sagging, rust-proof zinc galvanization, and anti-intrusion footing.</p>
            </div>
          </div>

          {/* Right: Stack of 3 Distinct Property Situations */}
          <div className="diff-stack-col">
            {/* 1. Farm Fencing */}
            <a href="#solutions" className="diff-stack-card">
              <div className="stack-img-wrap">
                <img src={FENCING_IMAGES.differenceThumb1} alt="Farm fencing" loading="lazy" />
              </div>
              <div className="stack-text-wrap">
                <span className="stack-pill">01 • AGRICULTURE</span>
                <h4 className="stack-title">Farm & Coconut Fencing</h4>
                <p className="stack-desc">Protects plantation crops from stray cattle & wild boar trespassers.</p>
              </div>
              <ArrowRight size={18} className="stack-arrow" />
            </a>

            {/* 2. Plot Fencing */}
            <a href="#solutions" className="diff-stack-card">
              <div className="stack-img-wrap">
                <img src={FENCING_IMAGES.differenceThumb2} alt="Plot fencing" loading="lazy" />
              </div>
              <div className="stack-text-wrap">
                <span className="stack-pill">02 • REAL ESTATE</span>
                <h4 className="stack-title">Plot & Boundary Demarcation</h4>
                <p className="stack-desc">Prevents encroachment on open residential layouts and investment lands.</p>
              </div>
              <ArrowRight size={18} className="stack-arrow" />
            </a>

            {/* 3. Chain-Link Fencing */}
            <a href="#solutions" className="diff-stack-card">
              <div className="stack-img-wrap">
                <img src={FENCING_IMAGES.differenceThumb3} alt="Chain-link fencing" loading="lazy" />
              </div>
              <div className="stack-text-wrap">
                <span className="stack-pill">03 • PERIMETER</span>
                <h4 className="stack-title">Chain-Link Diamond Mesh</h4>
                <p className="stack-desc">High visibility, neat aesthetics, and impenetrable boundary mesh.</p>
              </div>
              <ArrowRight size={18} className="stack-arrow" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .difference-section {
          background-color: #ffffff;
        }

        .difference-asymmetric-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 28px;
          align-items: stretch;
        }

        .diff-large-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          min-height: 480px;
          box-shadow: var(--shadow-card);
          border: 1px solid var(--c-border);
        }

        .diff-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .diff-large-card:hover .diff-hero-img {
          transform: scale(1.04);
        }

        .diff-large-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 31, 22, 0.92) 0%, rgba(10, 31, 22, 0.3) 55%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          color: #ffffff;
        }

        .diff-large-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: var(--c-amber);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          align-self: flex-start;
          margin-bottom: 12px;
        }

        .diff-large-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .diff-large-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .diff-stack-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: space-between;
        }

        .diff-stack-card {
          display: flex;
          align-items: center;
          gap: 18px;
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          padding: 14px;
          text-decoration: none;
          transition: var(--transition);
        }

        .diff-stack-card:hover {
          transform: translateX(6px);
          background: #ffffff;
          border-color: var(--c-forest);
          box-shadow: var(--shadow-card);
        }

        .stack-img-wrap {
          width: 100px;
          height: 100px;
          border-radius: var(--radius-md);
          overflow: hidden;
          flex-shrink: 0;
        }

        .stack-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .stack-text-wrap {
          flex: 1;
        }

        .stack-pill {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--c-forest);
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }

        .stack-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
          margin-bottom: 3px;
        }

        .stack-desc {
          font-size: 0.82rem;
          color: var(--c-text-muted);
          line-height: 1.35;
        }

        .stack-arrow {
          color: var(--c-text-muted);
          flex-shrink: 0;
          margin-right: 8px;
          transition: var(--transition);
        }

        .diff-stack-card:hover .stack-arrow {
          color: var(--c-forest);
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .difference-asymmetric-grid {
            grid-template-columns: 1fr;
          }
          .diff-large-card {
            min-height: 340px;
          }
        }

        @media (max-width: 640px) {
          .diff-stack-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .stack-img-wrap {
            width: 100%;
            height: 160px;
          }
        }
      `}</style>
    </section>
  );
};
