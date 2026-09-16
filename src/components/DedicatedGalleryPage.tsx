import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { FENCING_PORTFOLIO_IMAGES } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, MapPin, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export const DedicatedGalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const categories = ["All", "Farm Fencing", "Kambi Veli", "Chain Link", "Boundary Fencing", "RCC Posts"];

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return FENCING_PORTFOLIO_IMAGES;
    return FENCING_PORTFOLIO_IMAGES.filter(
      (img) =>
        img.category === activeCategory ||
        img.label === activeCategory ||
        img.tags.some((t) => t.toLowerCase().includes(activeCategory.toLowerCase()))
    );
  }, [activeCategory]);

  const total = filteredImages.length;

  // Reset mobile index when category changes
  useEffect(() => {
    setMobileIndex(0);
  }, [activeCategory]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setMobileIndex((prev) => (prev - 1 + total) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setMobileIndex((prev) => (prev + 1) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [total]);

  // Auto-play slideshow for mobile view (changes every 3.5s)
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % total);
    }, 3500);

    return () => clearInterval(interval);
  }, [total, isPaused]);

  // Handle swipe navigation on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = useCallback(() => {
    if (touchStartX.current !== null && touchEndX.current !== null && total > 1) {
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
  }, [total, handleNext, handlePrev]);

  return (
    <div className="dedicated-gallery-page">
      {/* Top Banner Navigation */}
      <div className="gallery-page-topbar">
        <div className="container">
          <a href="#home" className="gallery-back-link">
            <ArrowLeft size={16} />
            <span>Back to Main Website</span>
          </a>
        </div>
      </div>

      <section className="gallery-section section-space">
        <div className="container">
          {/* Section Header */}
          <div className="custom-header">
            <div className="custom-badge">
              <Sparkles size={14} />
              <span>Complete Works Portfolio</span>
            </div>
            <h1 className="custom-title">OUR WORKS</h1>
            <p className="custom-sub">
              Explore our complete collection of real Kambi Veli and land fencing installations across Tamil Nadu. Filter by category below.
            </p>
          </div>

          {/* Filter Category Tabs (ONLY ON DEDICATED GALLERY PAGE) */}
          <div className="gallery-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Desktop View: Dynamic Mixed-Ratio Masonry Portfolio Gallery (min-width: 769px) */}
          <div className="portfolio-masonry-grid desktop-only-grid">
            {filteredImages.map((item, index) => {
              const spanClass =
                item.aspectRatio === "portrait"
                  ? "grid-item-portrait"
                  : item.aspectRatio === "wide"
                  ? "grid-item-wide"
                  : index === 0
                  ? "grid-item-featured"
                  : "grid-item-standard";

              return (
                <div
                  key={item.id}
                  className={`masonry-gallery-item ${spanClass}`}
                  onClick={() => setSelectedLightboxIndex(index)}
                >
                  <div className="gallery-img-container">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-work-img"
                      loading="lazy"
                    />
                    <div className="gallery-hover-overlay">
                      <div className="gallery-hover-top">
                        <span className="gallery-hover-pill">{item.label}</span>
                        {item.highlight && (
                          <span className="gallery-hover-subpill">{item.highlight}</span>
                        )}
                      </div>

                      <div className="gallery-hover-bottom">
                        <h4 className="gallery-item-title">{item.title}</h4>
                        {item.location && (
                          <p className="gallery-item-location">
                            <MapPin size={13} />
                            <span>{item.location}</span>
                          </p>
                        )}
                        <span className="gallery-click-zoom">
                          <Maximize2 size={16} /> Click to expand
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
              aria-label="Previous project photo"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Single Centered Active Card Container */}
            <div className="side-arrow-card-stage gallery-card-stage">
              {filteredImages.map((item, index) => (
                <div
                  key={item.id}
                  className={`masonry-gallery-item mobile-slide-card ${index === mobileIndex ? "active" : ""}`}
                  onClick={() => setSelectedLightboxIndex(index)}
                  aria-hidden={index !== mobileIndex}
                >
                  <div className="gallery-img-container mobile-img-frame">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-work-img"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="gallery-hover-overlay mobile-overlay-always">
                      <div className="gallery-hover-top">
                        <span className="gallery-hover-pill">{item.label}</span>
                        {item.highlight && (
                          <span className="gallery-hover-subpill">{item.highlight}</span>
                        )}
                      </div>

                      <div className="gallery-hover-bottom">
                        <h4 className="gallery-item-title">{item.title}</h4>
                        {item.location && (
                          <p className="gallery-item-location">
                            <MapPin size={13} />
                            <span>{item.location}</span>
                          </p>
                        )}
                        <span className="gallery-click-zoom">
                          <Maximize2 size={14} /> Click to expand
                        </span>
                      </div>
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
              aria-label="Next project photo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Gallery Page CTA Card */}
          <div className="gallery-page-cta-box">
            <h3 className="gallery-page-cta-title">Need custom fencing for your farmland or plot?</h3>
            <p className="gallery-page-cta-sub">
              Contact our site specialists for direct yard pricing and fast survey.
            </p>
            <div className="gallery-page-cta-buttons">
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>WhatsApp Quotation</span>
                <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-accent">
                <span>Request Site Visit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lightbox for Gallery */}
        <LightboxModal
          images={filteredImages}
          currentIndex={selectedLightboxIndex}
          onClose={() => setSelectedLightboxIndex(null)}
          onSelectIndex={(idx) => setSelectedLightboxIndex(idx)}
        />
      </section>
    </div>
  );
};
