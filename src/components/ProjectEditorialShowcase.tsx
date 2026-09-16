import React, { useState, useEffect, useRef, useCallback } from "react";
import { EDITORIAL_SHOWCASE } from "../data/fencingImages";
import type { FencingImageItem } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectEditorialShowcase: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const showcaseList: FencingImageItem[] = [
    EDITORIAL_SHOWCASE.hero,
    EDITORIAL_SHOWCASE.sideTop,
    EDITORIAL_SHOWCASE.sideBottom,
    EDITORIAL_SHOWCASE.wideBottom,
    EDITORIAL_SHOWCASE.featuredPvc
  ];

  const total = showcaseList.length;

  const handlePrev = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + total) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [total]);

  const handleNext = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 4000);
  }, [total]);

  // Auto-play slideshow for mobile view (changes every 3.5s)
  useEffect(() => {
    if (isPaused) return;
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
    <section id="projects" className="editorial-showcase-section section-space">
      <div className="container">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="custom-badge">Quality Construction Portfolio</div>
          <h2 className="editorial-main-title">BUILT FOR FARMS. BUILT TO LAST.</h2>
          <p className="editorial-sub-text">
            Engineered boundaries built with precision concrete casting, high-grade galvanized wire mesh, and rock-solid anchoring.
          </p>
        </div>

        {/* Desktop View: Editorial Layout Grid (min-width: 769px) */}
        <div className="editorial-mosaic-layout desktop-only-grid">
          {/* Top Row: 1 Mega Image + 2 Stacked Side Images */}
          <div className="editorial-top-row">
            {/* Mega Large Image (Left) */}
            <div
              className="editorial-item editorial-mega-item"
              onClick={() => setLightboxIndex(0)}
            >
              <img
                src={EDITORIAL_SHOWCASE.hero.src}
                alt={EDITORIAL_SHOWCASE.hero.title}
                className="editorial-img"
                loading="lazy"
              />
              <div className="editorial-item-content">
                <span className="editorial-pill">Primary Acreage Project</span>
                <h3 className="editorial-title">{EDITORIAL_SHOWCASE.hero.title}</h3>
                <p className="editorial-desc">{EDITORIAL_SHOWCASE.hero.description}</p>
                <div className="editorial-meta-row">
                  <span className="editorial-loc">
                    <MapPin size={14} /> {EDITORIAL_SHOWCASE.hero.location}
                  </span>
                  <span className="editorial-zoom-btn">
                    <Maximize2 size={16} /> Expand
                  </span>
                </div>
              </div>
            </div>

            {/* Two Stacked Smaller Images (Right) */}
            <div className="editorial-side-stack">
              <div
                className="editorial-item editorial-side-item"
                onClick={() => setLightboxIndex(1)}
              >
                <img
                  src={EDITORIAL_SHOWCASE.sideTop.src}
                  alt={EDITORIAL_SHOWCASE.sideTop.title}
                  className="editorial-img"
                  loading="lazy"
                />
                <div className="editorial-item-content compact">
                  <span className="editorial-pill">{EDITORIAL_SHOWCASE.sideTop.label}</span>
                  <h4 className="editorial-title compact">{EDITORIAL_SHOWCASE.sideTop.title}</h4>
                  <span className="editorial-zoom-btn compact">
                    <Maximize2 size={14} /> View
                  </span>
                </div>
              </div>

              <div
                className="editorial-item editorial-side-item"
                onClick={() => setLightboxIndex(2)}
              >
                <img
                  src={EDITORIAL_SHOWCASE.sideBottom.src}
                  alt={EDITORIAL_SHOWCASE.sideBottom.title}
                  className="editorial-img"
                  loading="lazy"
                />
                <div className="editorial-item-content compact">
                  <span className="editorial-pill">{EDITORIAL_SHOWCASE.sideBottom.label}</span>
                  <h4 className="editorial-title compact">{EDITORIAL_SHOWCASE.sideBottom.title}</h4>
                  <span className="editorial-zoom-btn compact">
                    <Maximize2 size={14} /> View
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Wide Panoramic Image Banner + PVC Field Guard */}
          <div className="editorial-bottom-row">
            {/* Wide Panoramic Image */}
            <div
              className="editorial-item editorial-wide-banner-item"
              onClick={() => setLightboxIndex(3)}
            >
              <img
                src={EDITORIAL_SHOWCASE.wideBottom.src}
                alt={EDITORIAL_SHOWCASE.wideBottom.title}
                className="editorial-img"
                loading="lazy"
              />
              <div className="editorial-item-content">
                <span className="editorial-pill">{EDITORIAL_SHOWCASE.wideBottom.label}</span>
                <h3 className="editorial-title">{EDITORIAL_SHOWCASE.wideBottom.title}</h3>
                <p className="editorial-desc">{EDITORIAL_SHOWCASE.wideBottom.description}</p>
                <div className="editorial-meta-row">
                  <span className="editorial-loc">
                    <MapPin size={14} /> {EDITORIAL_SHOWCASE.wideBottom.location}
                  </span>
                  <span className="editorial-zoom-btn">
                    <Maximize2 size={16} /> Expand
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Highlight Box */}
            <div
              className="editorial-item editorial-highlight-item"
              onClick={() => setLightboxIndex(4)}
            >
              <img
                src={EDITORIAL_SHOWCASE.featuredPvc.src}
                alt={EDITORIAL_SHOWCASE.featuredPvc.title}
                className="editorial-img"
                loading="lazy"
              />
              <div className="editorial-item-content compact">
                <span className="editorial-pill">{EDITORIAL_SHOWCASE.featuredPvc.label}</span>
                <h4 className="editorial-title compact">{EDITORIAL_SHOWCASE.featuredPvc.title}</h4>
                <p className="editorial-desc compact">{EDITORIAL_SHOWCASE.featuredPvc.description}</p>
                <span className="editorial-zoom-btn compact">
                  <Maximize2 size={14} /> View
                </span>
              </div>
            </div>
          </div>
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
            aria-label="Previous showcase project"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Single Centered Active Card Container */}
          <div className="side-arrow-card-stage editorial-card-stage">
            {showcaseList.map((item, idx) => (
              <div
                key={item.id}
                className={`mobile-slide-card editorial-mobile-card ${idx === mobileIndex ? "active" : ""}`}
                onClick={() => setLightboxIndex(idx)}
                aria-hidden={idx !== mobileIndex}
              >
                <div className="editorial-item editorial-mobile-frame">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="editorial-img"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="editorial-item-content mobile-editorial-overlay">
                    <span className="editorial-pill">{item.label || "Project Feature"}</span>
                    <h3 className="editorial-title">{item.title}</h3>
                    {item.description && (
                      <p className="editorial-desc">{item.description}</p>
                    )}
                    <div className="editorial-meta-row">
                      {item.location && (
                        <span className="editorial-loc">
                          <MapPin size={13} /> {item.location}
                        </span>
                      )}
                      <span className="editorial-zoom-btn">
                        <Maximize2 size={14} /> Expand
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
            aria-label="Next showcase project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Lightbox for Editorial Showcase */}
      <LightboxModal
        images={showcaseList}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
