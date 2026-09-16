import React, { useState, useEffect, useRef, useCallback } from "react";
import { SERVICES_LIST } from "../data/fencingImages";
import { COMPANY_DATA } from "../data/company";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";

export const FencingServices: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = SERVICES_LIST.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [total]);

  // Automatic slide loop (every 3.5s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diffX = touchStartX.current - touchEndX.current;
      const threshold = 40;
      if (diffX > threshold) {
        handleNext();
      } else if (diffX < -threshold) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setTimeout(() => setIsPaused(false), 4000);
  }, [handleNext, handlePrev]);

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

        {/* Desktop View: Multi-Column Grid (> 768px) */}
        <div className="services-image-grid desktop-only-grid">
          {SERVICES_LIST.map((service) => (
            <div key={service.id} className="service-large-card">
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

              <div className="service-card-body">
                <div className="service-title-row">
                  <h3 className="service-card-title">{service.name}</h3>
                  <span className="service-tamil-tag">{service.tagline}</span>
                </div>
                <p className="service-card-desc">{service.description}</p>

                <ul className="service-benefits-list">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="service-benefit-item">
                      <Check size={14} className="service-check-icon" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-action">
                  <a
                    href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SAI%20WIRES,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20for%20my%20land.`}
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

        {/* Mobile View: Single Centered Card with Side Arrows (<= 768px) */}
        <div
          className="side-arrow-carousel-wrap mobile-only-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Side Arrow */}
          <button
            type="button"
            className="carousel-side-arrow prev"
            onClick={handlePrev}
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Single Centered Active Card Container */}
          <div className="side-arrow-card-stage services-card-stage">
            {SERVICES_LIST.map((service, index) => (
              <div
                key={service.id}
                className={`service-large-card mobile-slide-card ${index === activeIndex ? "active" : ""}`}
                aria-hidden={index !== activeIndex}
              >
                <div className="service-card-img-wrap">
                  <img
                    src={service.image}
                    alt={`${service.name} - ${service.description}`}
                    className="service-card-img"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <span className="service-badge-tag">{service.badge}</span>
                  <div className="service-img-glass-shade" />
                </div>

                <div className="service-card-body">
                  <div className="service-title-row">
                    <h3 className="service-card-title">{service.name}</h3>
                    <span className="service-tamil-tag">{service.tagline}</span>
                  </div>
                  <p className="service-card-desc">{service.description}</p>

                  <ul className="service-benefits-list">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="service-benefit-item">
                        <Check size={14} className="service-check-icon" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-action">
                    <a
                      href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SAI%20WIRES,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20for%20my%20land.`}
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

          {/* Right Side Arrow */}
          <button
            type="button"
            className="carousel-side-arrow next"
            onClick={handleNext}
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
