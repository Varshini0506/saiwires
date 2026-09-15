import React, { useState, useMemo } from "react";
import { FENCING_PORTFOLIO_IMAGES } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, MapPin } from "lucide-react";

export const FencingWorkGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);

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

  return (
    <section id="gallery" className="gallery-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">Real Site Portfolio</div>
          <h2 className="custom-title">OUR FENCING WORK</h2>
          <p className="custom-sub">
            Browse our actual completed Kambi Veli and land fencing projects across agricultural fields, farms, and plots.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="gallery-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Mixed-Ratio Masonry Portfolio Gallery */}
        <div className="portfolio-masonry-grid">
          {filteredImages.map((item, index) => {
            // Assign varied visual spans for masonry rhythm
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
                  {/* Subtle hover overlay with minimal clean badge */}
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
      </div>

      {/* Lightbox for Gallery */}
      <LightboxModal
        images={filteredImages}
        currentIndex={selectedLightboxIndex}
        onClose={() => setSelectedLightboxIndex(null)}
        onSelectIndex={(idx) => setSelectedLightboxIndex(idx)}
      />
    </section>
  );
};
