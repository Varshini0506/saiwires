import React from "react";
import { SERVICE_LOCATIONS_LIST } from "../data/websiteData";
import { MapPin, Phone, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export const ServiceAreaGrid: React.FC = () => {
  return (
    <section className="service-area-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">
            <Sparkles size={13} />
            <span>REGIONAL COVERAGE</span>
          </div>
          <h2 className="custom-title">FENCING SERVICES ACROSS TAMIL NADU</h2>
          <p className="custom-sub">
            Our material supply and dedicated fencing teams serve properties across Western and Central Tamil Nadu.
          </p>
        </div>

        {/* Elegant Location Chips Grid */}
        <div className="locations-chips-layout">
          {SERVICE_LOCATIONS_LIST.map((place, idx) => (
            <div key={idx} className="location-card-chip">
              <div className="loc-pin-box">
                <MapPin size={18} />
              </div>
              <span className="loc-name">{place}</span>
            </div>
          ))}
        </div>

        {/* Fast Action Location Bar */}
        <div className="loc-fast-bar">
          <div className="loc-fast-left">
            <span className="loc-fast-tag">Need fencing elsewhere in Tamil Nadu?</span>
            <span className="loc-fast-text">We undertake large acre projects anywhere in the state.</span>
          </div>
          <a href={`tel:${COMPANY_DATA.phone}`} className="btn btn-primary btn-sm">
            <Phone size={15} />
            <span>Call {COMPANY_DATA.displayPhone}</span>
          </a>
        </div>
      </div>

      <style>{`
        .service-area-section {
          background-color: #ffffff;
        }

        .locations-chips-layout {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .location-card-chip {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: var(--radius-md);
          padding: 16px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: var(--transition);
        }

        .location-card-chip:hover {
          transform: translateY(-3px);
          border-color: var(--c-forest);
          background: #ffffff;
          box-shadow: var(--shadow-subtle);
        }

        .loc-pin-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: #ecfdf5;
          color: var(--c-forest);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .loc-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
        }

        .loc-fast-bar {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          padding: 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .loc-fast-left {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .loc-fast-tag {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
        }

        .loc-fast-text {
          font-size: 0.85rem;
          color: var(--c-text-muted);
        }

        @media (max-width: 1024px) {
          .locations-chips-layout {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .locations-chips-layout {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .loc-fast-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .loc-fast-bar .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
