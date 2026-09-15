import React from "react";
import { FENCING_TYPES_CARDS } from "../data/visualGallery";
import { Sparkles, ArrowRight } from "lucide-react";

export const FencingTypes: React.FC = () => {
  return (
    <section id="fencing-types" className="fencing-types-visual-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge accent">
            <Sparkles size={14} />
            <span>FENCING OPTIONS</span>
          </div>
          <h2 className="section-title">Types of Fencing (வேலி வகைகள்)</h2>
          <p className="section-subtitle">
            Choose from our proven fencing types for agricultural land, farms, and plots.
          </p>
        </div>

        {/* 6 Visual Image Cards Grid */}
        <div className="fencing-cards-grid">
          {FENCING_TYPES_CARDS.map((card) => (
            <a href="#contact" key={card.id} className="fencing-image-card">
              <div className="fencing-card-media">
                <img src={card.image} alt={card.name} className="fencing-card-img" loading="lazy" />
                <div className="fencing-tag">{card.tag}</div>
                <div className="fencing-card-hover-overlay">
                  <span className="hover-action-text">
                    Get Quote <ArrowRight size={14} />
                  </span>
                </div>
              </div>
              <div className="fencing-card-footer">
                <h3 className="fencing-card-name">{card.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .fencing-types-visual-section {
          background-color: var(--color-bg-surface);
        }

        .fencing-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .fencing-image-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .fencing-image-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-primary);
        }

        .fencing-card-media {
          position: relative;
          height: 240px;
          overflow: hidden;
        }

        .fencing-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .fencing-image-card:hover .fencing-card-img {
          transform: scale(1.08);
        }

        .fencing-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
        }

        .fencing-card-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(27, 67, 50, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .fencing-image-card:hover .fencing-card-hover-overlay {
          opacity: 1;
        }

        .hover-action-text {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          background: var(--color-accent);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
        }

        .fencing-card-footer {
          padding: 16px 20px;
          text-align: center;
          background: #ffffff;
          border-top: 1px solid var(--color-border);
        }

        .fencing-card-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--color-charcoal-dark);
          transition: color 0.2s;
        }

        .fencing-image-card:hover .fencing-card-name {
          color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .fencing-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .fencing-cards-grid {
            grid-template-columns: 1fr;
          }
          .fencing-card-media {
            height: 200px;
          }
        }
      `}</style>
    </section>
  );
};
