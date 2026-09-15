import React from "react";
import { SOLUTIONS_DATA } from "../data/websiteData";
import { Sparkles, ArrowRight } from "lucide-react";

export const FencingSolutions: React.FC = () => {
  return (
    <section id="solutions" className="solutions-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge accent">
            <Sparkles size={13} />
            <span>SOLUTIONS CATALOG</span>
          </div>
          <h2 className="custom-title">Fencing for Every Boundary</h2>
          <p className="custom-sub">
            Tailored physical boundary protection for agricultural lands, plots, farms, and homes.
          </p>
        </div>

        {/* 8 Visual Cards Grid */}
        <div className="solutions-image-grid">
          {SOLUTIONS_DATA.map((sol) => (
            <a href="#contact" key={sol.id} className="solution-visual-card">
              <div className="solution-media-box">
                <img src={sol.image} alt={sol.name} className="solution-img" loading="lazy" />
                <div className="solution-tag-badge">{sol.tag}</div>
                <div className="solution-hover-curtain">
                  <span className="curtain-cta">
                    Request Quote <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <div className="solution-info-box">
                <h3 className="solution-item-name">{sol.name}</h3>
                <p className="solution-item-sub">{sol.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .solutions-section {
          background-color: var(--c-surface);
        }

        .solutions-image-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .solution-visual-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--c-border);
          overflow: hidden;
          box-shadow: var(--shadow-subtle);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: var(--transition);
        }

        .solution-visual-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-hover);
          border-color: var(--c-forest);
        }

        .solution-media-box {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .solution-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .solution-visual-card:hover .solution-img {
          transform: scale(1.08);
        }

        .solution-tag-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(15, 23, 32, 0.85);
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
        }

        .solution-hover-curtain {
          position: absolute;
          inset: 0;
          background: rgba(10, 31, 22, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .solution-visual-card:hover .solution-hover-curtain {
          opacity: 1;
        }

        .curtain-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--c-amber);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 800;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .solution-info-box {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .solution-item-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
          margin-bottom: 4px;
        }

        .solution-item-sub {
          font-size: 0.82rem;
          color: var(--c-text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1200px) {
          .solutions-image-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .solutions-image-grid {
            grid-template-columns: 1fr;
          }
          .solution-media-box {
            height: 170px;
          }
        }
      `}</style>
    </section>
  );
};
