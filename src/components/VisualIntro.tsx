import React, { useState, useEffect, useRef, useCallback } from "react";
import { FENCING_PORTFOLIO_IMAGES } from "../data/fencingImages";
import type { FencingImageItem } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { ArrowRight, Maximize2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

export const VisualIntro: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Take the 4 primary fencing images
  const fourImages: FencingImageItem[] = [
    FENCING_PORTFOLIO_IMAGES[0],
    FENCING_PORTFOLIO_IMAGES[1],
    FENCING_PORTFOLIO_IMAGES[2],
    FENCING_PORTFOLIO_IMAGES[3]
  ];

  const total = fourImages.length;

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

  // Automatic slideshow for mobile view (changes every 3.5s)
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
    <section className="visual-intro-section section-space">
      <div className="container">
        {/* Header Block */}
        <div className="visual-intro-top">
          <div className="custom-badge">Land Protection Specialists</div>
          <h2 className="visual-intro-title">FENCING THAT PROTECTS YOUR LAND</h2>
          <p className="visual-intro-subtext">
            Reliable fencing solutions designed for strong and practical land boundaries.
          </p>
          <div className="visual-intro-action">
            <a href="#about" className="btn btn-primary">
              <span>About Us</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Desktop View: 4 Images Neatly Aligned Grid (min-width: 769px) */}
        <div className="visual-intro-4grid desktop-only-grid">
          {fourImages.map((item, idx) => (
            <div
              key={item.id}
              className="intro-card-item"
              onClick={() => setSelectedPhotoIndex(idx)}
            >
              <div className="intro-card-img-wrap">
                <img
                  src={item.src}
                  alt={item.title}
                  className="intro-card-img"
                  loading="lazy"
                />
                <div className="intro-card-overlay">
                  <div className="intro-card-top-tag">
                    <span className="intro-badge-pill">{item.label}</span>
                  </div>

                  <div className="intro-card-bottom-info">
                    <h3 className="intro-card-title">{item.title}</h3>
                    {item.location && (
                      <p className="intro-card-loc">
                        <MapPin size={13} />
                        <span>{item.location}</span>
                      </p>
                    )}
                    <span className="intro-card-expand">
                      <Maximize2 size={14} /> Click to expand
                    </span>
                  </div>
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
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Single Centered Active Card Container */}
          <div className="side-arrow-card-stage intro-card-stage">
            {fourImages.map((item, idx) => (
              <div
                key={item.id}
                className={`intro-card-item mobile-slide-card ${idx === mobileIndex ? "active" : ""}`}
                onClick={() => setSelectedPhotoIndex(idx)}
                aria-hidden={idx !== mobileIndex}
              >
                <div className="intro-card-img-wrap">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="intro-card-img"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="intro-card-overlay">
                    <div className="intro-card-top-tag">
                      <span className="intro-badge-pill">{item.label}</span>
                    </div>

                    <div className="intro-card-bottom-info">
                      <h3 className="intro-card-title">{item.title}</h3>
                      {item.location && (
                        <p className="intro-card-loc">
                          <MapPin size={13} />
                          <span>{item.location}</span>
                        </p>
                      )}
                      <span className="intro-card-expand">
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
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={fourImages}
        currentIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onSelectIndex={(idx) => setSelectedPhotoIndex(idx)}
      />
    </section>
  );
};
