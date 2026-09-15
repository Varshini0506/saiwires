import React from "react";
import { SERVICES_LIST } from "../data/fencingImages";
import { COMPANY_DATA } from "../data/company";
import { ArrowRight, Check } from "lucide-react";

export const FencingServices: React.FC = () => {
  return (
    <section id="services" className="services-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">Heavy-Duty Solutions</div>
          <h2 className="custom-title">OUR FENCING SERVICES</h2>
          <p className="custom-sub">
            Engineered wire mesh and durable concrete post fencing built specifically for Tamil Nadu lands.
          </p>
        </div>

        {/* Large Image Cards Grid */}
        <div className="services-image-grid">
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="service-large-card">
              {/* Card Image Frame (Image-First) */}
              <div className="service-card-img-wrap">
                <img
                  src={service.image}
                  alt={`${service.name} - ${service.description}`}
                  className="service-card-img"
                  loading="lazy"
                />
                <span className="service-badge-tag">{service.badge}</span>
                <div className="service-img-glass-shade" />
              </div>

              {/* Minimal Card Content */}
              <div className="service-card-body">
                <div className="service-title-row">
                  <h3 className="service-card-title">{service.name}</h3>
                  <span className="service-tamil-tag">{service.tagline}</span>
                </div>
                <p className="service-card-desc">{service.description}</p>

                {/* Micro Benefits Points */}
                <ul className="service-benefits-list">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="service-benefit-item">
                      <Check size={14} className="service-check-icon" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Card CTA Footer */}
                <div className="service-card-action">
                  <a
                    href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SRI%20Fence,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20for%20my%20land.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-quote-btn"
                  >
                    <span>Inquire for {service.name}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
