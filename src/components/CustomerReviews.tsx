import React from "react";
import { REVIEWS_DATA } from "../data/websiteData";
import { Star, Quote, Sparkles } from "lucide-react";

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="customer-reviews-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge accent">
            <Sparkles size={13} />
            <span>CUSTOMER EXPERIENCES</span>
          </div>
          <h2 className="custom-title">What Our Clients Say</h2>
          <p className="custom-sub">
            Real feedback from farmland owners and property developers who entrusted their boundaries to us.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="reviews-cards-grid">
          {REVIEWS_DATA.map((rev) => (
            <div key={rev.id} className="custom-review-card">
              <div className="review-card-top">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="star-gold" />
                  ))}
                </div>
                <Quote size={24} className="quote-badge" />
              </div>

              <p className="review-quote-text">"{rev.quote}"</p>

              <div className="review-author-box">
                <div className="author-circle">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="author-heading">{rev.author}</h4>
                  <span className="author-subtext">{rev.role} • {rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .customer-reviews-section {
          background-color: var(--c-surface);
        }

        .reviews-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .custom-review-card {
          background: #ffffff;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-subtle);
          transition: var(--transition);
        }

        .custom-review-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
          border-color: var(--c-forest);
        }

        .review-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .review-stars {
          display: flex;
          gap: 3px;
        }

        .star-gold {
          fill: var(--c-amber);
          color: var(--c-amber);
        }

        .quote-badge {
          color: rgba(20, 54, 40, 0.15);
        }

        .review-quote-text {
          font-size: 0.95rem;
          color: var(--c-charcoal);
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 22px;
        }

        .review-author-box {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px dashed var(--c-border);
          padding-top: 14px;
        }

        .author-circle {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, var(--c-forest) 0%, var(--c-forest-light) 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .author-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
          margin-bottom: 2px;
        }

        .author-subtext {
          font-size: 0.75rem;
          color: var(--c-text-muted);
        }

        @media (max-width: 1024px) {
          .reviews-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
