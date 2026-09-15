import React from "react";
import { FEATURED_PROJECTS } from "../data/visualGallery";
import { Sparkles, MapPin, Shield } from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="featured-projects-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge accent">
            <Sparkles size={14} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">Fencing That Protects Your Property</h2>
          <p className="section-subtitle">
            Engineered boundary strength for agricultural acreage, farmhouses, and layout plots across Tamil Nadu.
          </p>
        </div>

        {/* Dynamic Bento/Masonry Grid of 6 Projects */}
        <div className="featured-bento-grid">
          {FEATURED_PROJECTS.map((proj) => (
            <div key={proj.id} className={`bento-card ${proj.spanClass || ""}`}>
              <img src={proj.image} alt={proj.title} className="bento-bg-img" loading="lazy" />
              <div className="bento-overlay" />
              <div className="bento-content">
                <div className="bento-tags-row">
                  <span className="bento-type-badge">
                    <Shield size={12} /> {proj.type}
                  </span>
                  <span className="bento-size-badge">{proj.size}</span>
                </div>
                <h3 className="bento-title">{proj.title}</h3>
                <div className="bento-loc">
                  <MapPin size={14} />
                  <span>{proj.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .featured-projects-section {
          background-color: var(--color-bg-surface);
        }

        .featured-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 280px;
          gap: 24px;
        }

        .bento-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .bento-card.span-wide {
          grid-column: span 2;
        }

        .bento-card.span-portrait {
          grid-column: span 1;
        }

        .bento-card.span-standard {
          grid-column: span 1;
        }

        .bento-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .bento-card:hover .bento-bg-img {
          transform: scale(1.06);
        }

        .bento-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(8, 28, 21, 0.95) 0%,
            rgba(8, 28, 21, 0.4) 50%,
            transparent 100%
          );
        }

        .bento-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          color: #ffffff;
          z-index: 2;
        }

        .bento-tags-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .bento-type-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(217, 119, 6, 0.9);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .bento-size-badge {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
        }

        .bento-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .bento-loc {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          color: #fcd34d;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .featured-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 250px;
          }
          .bento-card.span-wide {
            grid-column: span 2;
          }
        }

        @media (max-width: 640px) {
          .featured-bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
          .bento-card.span-wide,
          .bento-card.span-portrait,
          .bento-card.span-standard {
            grid-column: span 1;
          }
          .bento-title {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
};
