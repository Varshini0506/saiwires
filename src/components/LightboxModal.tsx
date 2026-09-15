import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import type { FencingImageItem } from "../data/fencingImages";

interface LightboxModalProps {
  images: FencingImageItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onSelectIndex
}) => {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < images.length;
  const currentItem = isOpen ? images[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prev = (currentIndex - 1 + images.length) % images.length;
    onSelectIndex(prev);
  }, [currentIndex, images.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const next = (currentIndex + 1) % images.length;
    onSelectIndex(next);
  }, [currentIndex, images.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="lightbox-btn lightbox-close"
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          className="lightbox-btn lightbox-prev"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          className="lightbox-btn lightbox-next"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Main Image Frame */}
        <div className="lightbox-image-wrap">
          <img
            src={currentItem.src}
            alt={currentItem.title}
            className="lightbox-img"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="lightbox-caption-bar">
          <div className="lightbox-meta-main">
            <div className="lightbox-badges">
              <span className="lightbox-badge-category">{currentItem.category}</span>
              {currentItem.highlight && (
                <span className="lightbox-badge-highlight">{currentItem.highlight}</span>
              )}
            </div>
            <h3 className="lightbox-title">{currentItem.title}</h3>
            <p className="lightbox-desc">{currentItem.description}</p>
          </div>

          <div className="lightbox-meta-side">
            {currentItem.location && (
              <div className="lightbox-location">
                <MapPin size={15} />
                <span>{currentItem.location}</span>
              </div>
            )}
            <div className="lightbox-counter">
              <span>{currentIndex + 1}</span> / <span>{images.length}</span>
            </div>
          </div>
        </div>

        {/* Thumbnails Strip */}
        <div className="lightbox-thumbnails">
          {images.map((item, idx) => (
            <button
              key={item.id}
              className={`lightbox-thumb-btn ${idx === currentIndex ? "active" : ""}`}
              onClick={() => onSelectIndex(idx)}
              aria-label={`View ${item.title}`}
            >
              <img src={item.src} alt={item.title} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
