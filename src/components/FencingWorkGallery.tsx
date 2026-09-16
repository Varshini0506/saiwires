import React, { useState, useEffect, useRef, useCallback } from "react";
import { FENCING_PORTFOLIO_IMAGES } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, MapPin, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

export const FencingWorkGallery: React.FC = () => {
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Main Page shows ONLY a limited preview of the "All" collection (no category buttons)
  const previewImages = FENCING_PORTFOLIO_IMAGES.slice(0, 4);
  const total = previewImages.length;

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
    <section id="works" className="gallery-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">
            <Sparkles size={14} />
            <span>Real Site Portfolio</span>
          </div>
          <h2 className="custom-title">OUR WORKS</h2>
          <p className="custom-sub">
            Browse our actual completed Kambi Veli and land fencing projects across agricultural fields, farms, and plots.
          </p>
        </div>

        {/* Desktop View: Limited Preview Grid (min-width: 769px, NO category filters) */}
        <div className="portfolio-masonry-grid desktop-only-grid">
          {previewImages.map((item, index) => {
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

        {/* Mobile View: Single Centered Card with Side Arrows (<= 768px, NO category filters) */}
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
            {previewImages.map((item, index) => (
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

        {/* View More Button Linking to the Dedicated Full Gallery Page */}
        <div className="gallery-preview-action-row">
          <a href="#gallery-page" className="btn btn-primary btn-lg gallery-view-more-btn">
            <span>View More Works</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Lightbox for Preview Gallery */}
      <LightboxModal
        images={previewImages}
        currentIndex={selectedLightboxIndex}
        onClose={() => setSelectedLightboxIndex(null)}
        onSelectIndex={(idx) => setSelectedLightboxIndex(idx)}
      />
    </section>
  );
};
