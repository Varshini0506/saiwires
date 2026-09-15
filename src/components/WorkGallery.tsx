import React, { useState } from "react";
import { WORK_GALLERY, type GalleryItem } from "../data/visualGallery";
import { Sparkles, Maximize2, X, MessageSquareShare } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export const WorkGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="work-gallery-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>REAL-WORLD INSTALLATIONS</span>
          </div>
          <h2 className="section-title">Our Fencing Work (கம்பி வேலி வேலைகள்)</h2>
          <p className="section-subtitle">
            Browse our completed land fencing, farm boundaries, and Kambi Veli projects across Tamil Nadu.
          </p>
        </div>

        {/* 18-Image Masonry Grid */}
        <div className="masonry-gallery-grid">
          {WORK_GALLERY.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setActiveImage(item)}
            >
              <div className="gallery-img-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-photo"
                  loading="lazy"
                />
                
                {/* Small category tag */}
                <div className="gallery-cat-tag">
                  {item.category}
                </div>

                {item.badge && (
                  <div className="gallery-feature-badge">
                    {item.badge}
                  </div>
                )}

                {/* Minimal Dark Hover Overlay with Title */}
                <div className="gallery-card-overlay">
                  <div className="overlay-bottom-content">
                    <span className="overlay-item-title">{item.title}</span>
                    <span className="overlay-view-hint">
                      <Maximize2 size={14} /> View Full
                    </span>
                  </div>
                </div>
              </div>

              {/* Minimal bottom card name */}
              <div className="card-minimal-label">
                <span className="card-item-name">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div className="gallery-modal-backdrop" onClick={() => setActiveImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Close image preview"
            >
              <X size={20} />
            </button>
            <div className="modal-img-container">
              <img src={activeImage.image} alt={activeImage.title} className="modal-large-img" />
            </div>
            <div className="modal-caption-row">
              <div>
                <span className="modal-cat-label">{activeImage.category}</span>
                <h3 className="modal-img-title">{activeImage.title}</h3>
              </div>
              <div className="modal-action-btns">
                <a
                  href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SRI%20Fence,%20I%20want%20fencing%20like%20${encodeURIComponent(activeImage.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <MessageSquareShare size={15} />
                  <span>Enquire for this Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .work-gallery-section {
          background-color: #ffffff;
        }

        .masonry-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .gallery-card {
          position: relative;
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-primary);
        }

        .gallery-img-wrap {
          position: relative;
          width: 100%;
          height: 260px;
          overflow: hidden;
          background: #f1f5f9;
        }

        .gallery-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .gallery-card:hover .gallery-photo {
          transform: scale(1.08);
        }

        .gallery-cat-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
          z-index: 2;
        }

        .gallery-feature-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--color-accent);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          z-index: 2;
        }

        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8, 28, 21, 0.9) 0%, rgba(8, 28, 21, 0.2) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
        }

        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }

        .overlay-bottom-content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ffffff;
        }

        .overlay-item-title {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .overlay-view-hint {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .card-minimal-label {
          padding: 12px 16px;
          background: #ffffff;
          border-top: 1px solid var(--color-border);
        }

        .card-item-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Lightbox modal */
        .gallery-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .gallery-modal-content {
          background: #ffffff;
          border-radius: var(--radius-xl);
          overflow: hidden;
          max-width: 800px;
          width: 100%;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
          position: relative;
        }

        .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
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

        .modal-img-container {
          height: 480px;
          background: #000000;
        }

        .modal-large-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .modal-caption-row {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .modal-cat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-primary);
        }

        .modal-img-title {
          font-size: 1.25rem;
          color: var(--color-charcoal-dark);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 1024px) {
          .masonry-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .masonry-gallery-grid {
            grid-template-columns: 1fr;
          }
          .gallery-img-wrap {
            height: 220px;
          }
          .modal-img-container {
            height: 300px;
          }
          .modal-caption-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .modal-action-btns {
            width: 100%;
          }
          .modal-action-btns .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
