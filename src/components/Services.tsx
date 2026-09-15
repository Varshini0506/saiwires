import React, { useState } from "react";
import { SERVICES_DATA, type ServiceItem } from "../data/services";
import { 
  Tractor, 
  Grid, 
  ShieldAlert, 
  Columns, 
  Trees, 
  Home, 
  Factory, 
  Sliders, 
  ArrowRight, 
  Check, 
  X, 
  MessageSquareShare,
  Sparkles
} from "lucide-react";
import { COMPANY_DATA } from "../data/company";

// Map icon names to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Tractor,
  Grid,
  ShieldAlert,
  Columns,
  Trees,
  Home,
  Factory,
  Sliders,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>SOLUTIONS CATALOG</span>
          </div>
          <h2 className="section-title">Our Fencing Solutions</h2>
          <p className="section-subtitle">
            Choose the right fencing solution for your land and property. We engineer durable perimeter boundaries with verified IS-standard materials and experienced on-site craftsmen.
          </p>
        </div>

        {/* Services 8-Card Grid */}
        <div className="services-grid">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Columns;
            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <div className="service-image-box">
                  <img src={service.image} alt={service.title} className="service-thumb-img" loading="lazy" />
                  <div className="service-image-overlay" />
                </div>

                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.shortDesc}</p>

                  <div className="service-features-list">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="service-feature-item">
                        <Check size={14} className="feature-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="service-card-footer">
                    <button
                      onClick={() => openModal(service)}
                      className="btn-service-learn"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SRI%20Fence,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-service-inquire"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquareShare size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for detailed service view */}
      {selectedService && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="service-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              <X size={20} />
            </button>

            <div className="modal-media-header">
              <img src={selectedService.image} alt={selectedService.title} className="modal-banner-img" />
              <div className="modal-media-overlay">
                <span className="modal-tag">{selectedService.tag}</span>
                <h3 className="modal-title">{selectedService.title}</h3>
              </div>
            </div>

            <div className="modal-content-body">
              <p className="modal-full-desc">{selectedService.fullDesc}</p>

              <div className="modal-section-block">
                <h4 className="modal-block-title">Key Specifications & Benefits</h4>
                <div className="modal-features-grid">
                  {selectedService.features.map((item, idx) => (
                    <div key={idx} className="modal-feat-item">
                      <Check size={16} className="text-emerald" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-best-for-box">
                <span className="best-for-label">Best Suited For:</span>
                <span className="best-for-text">{selectedService.bestFor}</span>
              </div>

              <div className="modal-action-row">
                <a
                  href={`#contact`}
                  onClick={closeModal}
                  className="btn btn-accent"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Request Quote for this Solution
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SRI%20Fence,%20I%20would%20like%20a%20quotation%20for%20${encodeURIComponent(selectedService.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .services-section {
          background-color: var(--color-bg-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .service-card {
          background: var(--color-bg-card);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-primary-light);
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
          background: #ffffff;
        }

        .service-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: #ecfdf5;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s, color 0.2s;
        }

        .service-card:hover .service-icon-box {
          background: var(--color-primary);
          color: #ffffff;
        }

        .service-tag {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          background: #f1f5f9;
          color: var(--color-charcoal);
        }

        .service-image-box {
          position: relative;
          height: 160px;
          overflow: hidden;
        }

        .service-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-thumb-img {
          transform: scale(1.08);
        }

        .service-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%);
        }

        .service-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .service-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .service-card-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .service-features-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 20px;
          padding-top: 12px;
          border-top: 1px dashed var(--color-border);
        }

        .service-feature-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-charcoal);
        }

        .feature-check {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .service-card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .btn-service-learn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 14px;
          border-radius: var(--radius-md);
          background: #f1f5f9;
          color: var(--color-primary-dark);
          border: 1px solid var(--color-border);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-service-learn:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        .btn-service-inquire {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: #dcfce7;
          color: #15803d;
          border: 1px solid #bbf7d0;
          transition: all 0.2s ease;
        }

        .btn-service-inquire:hover {
          background: #22c55e;
          color: #ffffff;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(4px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .service-modal-card {
          background: #ffffff;
          max-width: 640px;
          width: 100%;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background-color 0.2s;
        }

        .modal-close-btn:hover {
          background: rgba(0, 0, 0, 0.85);
        }

        .modal-media-header {
          position: relative;
          height: 220px;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }

        .modal-tag {
          align-self: flex-start;
          background: var(--color-accent);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .modal-title {
          font-size: 1.6rem;
          color: #ffffff;
        }

        .modal-content-body {
          padding: 24px;
        }

        .modal-full-desc {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--color-charcoal);
          margin-bottom: 20px;
        }

        .modal-section-block {
          margin-bottom: 20px;
        }

        .modal-block-title {
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-muted);
          margin-bottom: 10px;
        }

        .modal-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .modal-feat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-charcoal-dark);
          background: #f8fafc;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .text-emerald {
          color: #059669;
          flex-shrink: 0;
        }

        .modal-best-for-box {
          background: #ecfdf5;
          border-left: 4px solid var(--color-primary);
          padding: 12px 16px;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 24px;
        }

        .best-for-label {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-primary-dark);
          display: block;
        }

        .best-for-text {
          font-size: 0.9rem;
          color: #065f46;
        }

        .modal-action-row {
          display: flex;
          gap: 12px;
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .modal-features-grid {
            grid-template-columns: 1fr;
          }
          .modal-action-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};
