import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { FENCING_PORTFOLIO_IMAGES } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, MapPin, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export const DedicatedGalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
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

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setSlideDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setSlideDirection("next");
    setCurrentIndex((prev) => (prev + 1) % total);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  }, [total]);

  // Auto-slide every 4 seconds continuously across all images
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      setSlideDirection("next");
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total, isPaused]);

  // Touch swipe support on mobile
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

  const currentItem = filteredImages[currentIndex] || FENCING_PORTFOLIO_IMAGES[0];

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
          {/* Section Header with Simple English */}
          <div className="custom-header">
            <div className="custom-badge">
              <Sparkles size={14} />
              <span>All Real Photos</span>
            </div>
            <h1 className="custom-title">COMPLETE PROJECT PHOTOS</h1>
            <p className="custom-sub">
              See all our fencing photos from actual customer sites across Tamil Nadu. Use the left and right arrows to see all photos.
            </p>
          </div>

          {/* Filter Category Tabs */}
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

          {/* Single Card Carousel with Side Navigation Arrows: ← [ ONE IMAGE ] → */}
          <div
            className="full-gallery-carousel-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Side Navigation Arrow */}
            <button
              type="button"
              className="gallery-side-arrow prev"
              onClick={handlePrev}
              aria-label="Previous work image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Single Active Image Card Container */}
            <div className="gallery-single-card-stage">
              <div
                key={`${currentItem.id}-${currentIndex}`}
                className={`gallery-active-card animate-slide-${slideDirection}`}
                onClick={() => setSelectedLightboxIndex(currentIndex)}
              >
                <div className="gallery-active-img-wrap">
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="gallery-active-photo"
                  />
                  <div className="gallery-card-badge-top">
                    <span className="gallery-cat-pill">{currentItem.label}</span>
                    {currentItem.highlight && (
                      <span className="gallery-highlight-pill">{currentItem.highlight}</span>
                    )}
                  </div>
                  <div className="gallery-zoom-prompt">
                    <Maximize2 size={16} /> Click to expand
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="gallery-active-meta">
                  <div className="gallery-meta-left">
                    <h3 className="gallery-work-title">{currentItem.title}</h3>
                    <p className="gallery-work-desc">{currentItem.description}</p>
                    {currentItem.location && (
                      <span className="gallery-work-loc">
                        <MapPin size={14} /> {currentItem.location}
                      </span>
                    )}
                  </div>

                  <div className="gallery-counter-badge">
                    <span className="counter-current">{currentIndex + 1}</span>
                    <span className="counter-total">/ {total}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Navigation Arrow */}
            <button
              type="button"
              className="gallery-side-arrow next"
              onClick={handleNext}
              aria-label="Next work image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Thumbnail / Dot Quick Navigation Strip */}
          <div className="gallery-thumbnail-strip">
            {filteredImages.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                className={`gallery-thumb-btn ${idx === currentIndex ? "active" : ""}`}
                onClick={() => {
                  setSlideDirection(idx > currentIndex ? "next" : "prev");
                  setCurrentIndex(idx);
                }}
                aria-label={`View photo ${idx + 1}`}
              >
                <img src={img.src} alt={img.title} className="thumb-mini-img" />
              </button>
            ))}
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

        {/* Lightbox Modal */}
        <LightboxModal
          images={filteredImages}
          currentIndex={selectedLightboxIndex}
          onClose={() => setSelectedLightboxIndex(null)}
          onSelectIndex={(idx) => setSelectedLightboxIndex(idx)}
        />
      </section>

      <style>{`
        .full-gallery-carousel-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          max-width: 980px;
          margin: 36px auto 24px auto;
          position: relative;
        }

        .gallery-side-arrow {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-charcoal-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          box-shadow: var(--shadow-md);
          transition: all 0.25s ease;
          z-index: 10;
        }

        .gallery-side-arrow:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          transform: scale(1.1);
          box-shadow: var(--shadow-lg);
        }

        .gallery-single-card-stage {
          flex: 1;
          min-width: 0;
          max-width: 820px;
          overflow: hidden;
          border-radius: var(--radius-xl);
        }

        .gallery-active-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-xl);
          cursor: pointer;
        }

        /* Horizontal Slide Animations */
        .animate-slide-next {
          animation: slideInFromRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slide-prev {
          animation: slideInFromLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideInFromRight {
          from {
            transform: translateX(60px);
            opacity: 0.4;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          from {
            transform: translateX(-60px);
            opacity: 0.4;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .gallery-active-img-wrap {
          position: relative;
          width: 100%;
          height: 480px;
          background: #0f172a;
          overflow: hidden;
        }

        .gallery-active-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .gallery-active-card:hover .gallery-active-photo {
          transform: scale(1.03);
        }

        .gallery-card-badge-top {
          position: absolute;
          top: 18px;
          left: 18px;
          display: flex;
          gap: 8px;
          z-index: 5;
        }

        .gallery-cat-pill {
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
        }

        .gallery-highlight-pill {
          background: var(--color-accent);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }

        .gallery-zoom-prompt {
          position: absolute;
          bottom: 18px;
          right: 18px;
          background: rgba(0, 0, 0, 0.7);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(4px);
        }

        .gallery-active-meta {
          padding: 24px 28px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          background: #ffffff;
        }

        .gallery-meta-left {
          flex: 1;
        }

        .gallery-work-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-charcoal-dark);
          line-height: 1.25;
          margin-bottom: 8px;
        }

        .gallery-work-desc {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .gallery-work-loc {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--color-primary);
        }

        .gallery-counter-badge {
          background: rgba(16, 56, 39, 0.08);
          border-radius: var(--radius-md);
          padding: 8px 14px;
          font-weight: 800;
          white-space: nowrap;
        }

        .counter-current {
          color: var(--color-primary);
          font-size: 1.25rem;
        }

        .counter-total {
          color: var(--color-text-muted);
          font-size: 0.88rem;
        }

        .gallery-thumbnail-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          max-width: 900px;
          margin: 16px auto 36px auto;
          overflow-x: auto;
          padding: 8px 4px;
        }

        .gallery-thumb-btn {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 2px solid transparent;
          background: #000000;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
          opacity: 0.6;
          transition: all 0.2s ease;
        }

        .gallery-thumb-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .gallery-thumb-btn.active {
          border-color: var(--color-primary);
          opacity: 1;
          box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.3);
          transform: translateY(-3px);
        }

        .thumb-mini-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .full-gallery-carousel-wrapper {
            gap: 8px;
            margin: 20px 0 16px 0;
          }
          .gallery-side-arrow {
            width: 40px;
            height: 40px;
          }
          .gallery-active-img-wrap {
            height: 280px;
          }
          .gallery-active-meta {
            padding: 16px;
            flex-direction: column;
            gap: 12px;
          }
          .gallery-work-title {
            font-size: 1.15rem;
          }
          .gallery-work-desc {
            font-size: 0.85rem;
          }
          .gallery-thumb-btn {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
};
