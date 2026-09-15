import React from "react";
import { SERVICE_LOCATIONS } from "../data/faq";
import { MapPin, PhoneCall, Sparkles, Navigation } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export const ServiceAreas: React.FC = () => {
  return (
    <section className="service-areas-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>COVERAGE REGION</span>
          </div>
          <h2 className="section-title">Serving Customers Across Tamil Nadu</h2>
          <p className="section-subtitle">
            Our specialized fencing crews and material delivery vehicles serve agricultural lands, farms, and industrial layouts across Kongu Nadu and Central Tamil Nadu.
          </p>
        </div>

        {/* District & Taluk Cards Grid */}
        <div className="districts-grid">
          {SERVICE_LOCATIONS.map((loc, idx) => (
            <div key={idx} className="district-card">
              <div className="district-card-header">
                <div className="district-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="district-name">{loc.district} District</h3>
                  <span className="district-tag">{loc.tag}</span>
                </div>
              </div>

              <div className="taluks-container">
                <span className="taluk-label">Key Service Areas:</span>
                <div className="taluk-pills">
                  {loc.regions.map((region, rIdx) => (
                    <span key={rIdx} className="taluk-badge">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Hub Information Box */}
        <div className="coverage-notice-card">
          <div className="notice-left">
            <div className="notice-icon">
              <Navigation size={24} />
            </div>
            <div>
              <h4 className="notice-heading">Do you have land in another Tamil Nadu district?</h4>
              <p className="notice-body">
                We regularly undertake projects of 1 acre and above anywhere in Tamil Nadu. Contact our site engineering team to check schedule availability.
              </p>
            </div>
          </div>
          <a href={`tel:${COMPANY_DATA.phone}`} className="btn btn-primary">
            <PhoneCall size={16} />
            <span>Check My Location</span>
          </a>
        </div>
        <p className="location-disclaimer">* Sample service locations shown for demonstration. All service areas can be configured centrally.</p>
      </div>

      <style>{`
        .service-areas-section {
          background-color: var(--color-bg-surface);
        }

        .districts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .district-card {
          background: #ffffff;
          padding: 24px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .district-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--color-primary-light);
        }

        .district-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--color-border);
        }

        .district-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: #ecfdf5;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .district-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          line-height: 1.2;
        }

        .district-tag {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .taluks-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .taluk-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-text-muted);
        }

        .taluk-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .taluk-badge {
          background: var(--color-bg-light);
          color: var(--color-charcoal);
          font-size: 0.82rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }

        .coverage-notice-card {
          background: #ffffff;
          padding: 24px 32px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          box-shadow: var(--shadow-sm);
        }

        .notice-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .notice-icon {
          width: 48px;
          height: 48px;
          background: #fef3c7;
          color: #d97706;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .notice-heading {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 4px;
        }

        .notice-body {
          font-size: 0.88rem;
          color: var(--color-text-muted);
        }

        .location-disclaimer {
          text-align: center;
          margin-top: 14px;
          font-size: 0.75rem;
          color: var(--color-text-light);
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .districts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .districts-grid {
            grid-template-columns: 1fr;
          }
          .coverage-notice-card {
            flex-direction: column;
            text-align: left;
            align-items: flex-start;
          }
          .coverage-notice-card .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
