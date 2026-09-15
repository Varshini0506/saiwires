import React from "react";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { Star, Quote, MapPin, Sparkles } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Read authentic feedback from farm owners, property developers, and plot owners who trusted Sri Fence Solutions.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="test-card-top">
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
                </div>
                <Quote size={28} className="quote-icon" />
              </div>

              <p className="test-content">"{t.content}"</p>

              <div className="test-author-row">
                <div className="author-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role} • {t.propertyType}</p>
                  <div className="author-loc">
                    <MapPin size={12} />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="testimonial-disclaimer">* Sample client testimonials structured for demonstration; editable centrally in data files.</p>
      </div>

      <style>{`
        .testimonials-section {
          background-color: #ffffff;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 16px;
        }

        .testimonial-card {
          background: var(--color-bg-light);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 32px;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }

        .test-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
        }

        .star-filled {
          fill: #f59e0b;
          color: #f59e0b;
        }

        .quote-icon {
          color: rgba(27, 67, 50, 0.15);
        }

        .test-content {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--color-charcoal);
          font-style: italic;
          margin-bottom: 24px;
        }

        .test-author-row {
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid var(--color-border);
          padding-top: 16px;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 2px;
        }

        .author-role {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 2px;
        }

        .author-loc {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-primary);
        }

        .testimonial-disclaimer {
          text-align: center;
          font-size: 0.75rem;
          color: var(--color-text-light);
          font-style: italic;
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .testimonial-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};
