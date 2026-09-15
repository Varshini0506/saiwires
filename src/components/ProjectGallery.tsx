import React, { useState } from "react";
import { GALLERY_PHOTOS, type GalleryPhoto } from "../data/websiteData";
import { Sparkles, Maximize2, X, MessageSquareShare, MapPin } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

type CategoryFilter = "ALL" | "AGRICULTURAL" | "CHAIN LINK" | "BOUNDARY" | "FARM" | "RCC POSTS" | "INSTALLATION";

export const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>("ALL");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const categories: CategoryFilter[] = [
    "ALL",
    "AGRICULTURAL",
    "CHAIN LINK",
    "BOUNDARY",
    "FARM",
    "RCC POSTS",
    "INSTALLATION",
  ];

  const filteredPhotos =
    filter === "ALL"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="gallery-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">
            <Sparkles size={13} />
            <span>PROOF OF WORK</span>
          </div>
          <h2 className="custom-title">Our Fencing Work (கம்பி வேலி வேலைகள்)</h2>
          <p className="custom-sub">
            Real completed fencing installations across farmlands, plots, estates, and agricultural properties in Tamil Nadu.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="gallery-filter-chips">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial / Masonry Layout */}
        <div className="gallery-masonry-layout">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`gallery-editorial-card aspect-${photo.aspect}`}
              onClick={() => setLightboxPhoto(photo)}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="gallery-editorial-img"
                loading="lazy"
              />
              <div className="gallery-category-badge">{photo.category}</div>

              <div className="gallery-hover-curtain">
                <div className="curtain-content">
                  <div className="curtain-loc">
                    <MapPin size={12} /> {photo.location}
                  </div>
                  <h4 className="curtain-title">{photo.title}</h4>
                  <span className="curtain-expand-btn">
                    <Maximize2 size={13} /> View Full Photo
                  </span>
                </div>
              </div>

              <div className="gallery-caption-strip">
                <span className="caption-text">{photo.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="lightbox-backdrop" onClick={() => setLightboxPhoto(null)}>
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxPhoto(null)}
              aria-label="Close photo"
            >
              <X size={22} />
            </button>
            <div className="lightbox-img-box">
              <img src={lightboxPhoto.image} alt={lightboxPhoto.title} />
            </div>
            <div className="lightbox-meta-bar">
              <div>
                <span className="lightbox-cat">{lightboxPhoto.category} • {lightboxPhoto.location}</span>
                <h3 className="lightbox-title">{lightboxPhoto.title}</h3>
              </div>
              <a
                href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SRI%20Fence,%20I%20would%20like%20to%20get%20a%20quote%20for%20fencing%20like:%20${encodeURIComponent(lightboxPhoto.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquareShare size={15} />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          background-color: #ffffff;
        }

        .gallery-filter-chips {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 36px;
        }

        .filter-chip {
          padding: 7px 16px;
          border-radius: var(--radius-full);
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--c-text-muted);
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-chip:hover {
          color: var(--c-forest);
          border-color: var(--c-forest);
        }

        .filter-chip.active {
          background: var(--c-forest);
          color: #ffffff;
          border-color: var(--c-forest);
          box-shadow: 0 4px 12px rgba(20, 54, 40, 0.25);
        }

        .gallery-masonry-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .gallery-editorial-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          box-shadow: var(--shadow-subtle);
          cursor: pointer;
          height: 270px;
          transition: var(--transition);
        }

        .gallery-editorial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-hover);
          border-color: var(--c-forest);
        }

        .gallery-editorial-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .gallery-editorial-card:hover .gallery-editorial-img {
          transform: scale(1.08);
        }

        .gallery-category-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 32, 0.85);
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .gallery-hover-curtain {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 31, 22, 0.95) 0%, rgba(10, 31, 22, 0.3) 50%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 18px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
        }

        .gallery-editorial-card:hover .gallery-hover-curtain {
          opacity: 1;
        }

        .curtain-content {
          color: #ffffff;
          width: 100%;
        }

        .curtain-loc {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--c-gold);
          font-weight: 700;
          margin-bottom: 2px;
        }

        .curtain-title {
          font-size: 1.05rem;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .curtain-expand-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .gallery-caption-strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.95);
          border-top: 1px solid var(--c-border);
          transition: opacity 0.2s;
        }

        .gallery-editorial-card:hover .gallery-caption-strip {
          opacity: 0;
        }

        .caption-text {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--c-charcoal-dark);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 20, 15, 0.9);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox-frame {
          background: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          max-width: 860px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
        }

        .lightbox-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .lightbox-img-box {
          height: 480px;
          background: #000000;
        }

        .lightbox-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .lightbox-meta-bar {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .lightbox-cat {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--c-forest);
          text-transform: uppercase;
        }

        .lightbox-title {
          font-size: 1.3rem;
          color: var(--c-charcoal-dark);
        }

        @media (max-width: 1024px) {
          .gallery-masonry-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gallery-masonry-layout {
            grid-template-columns: 1fr;
          }
          .lightbox-img-box {
            height: 300px;
          }
          .lightbox-meta-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .lightbox-meta-bar .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
