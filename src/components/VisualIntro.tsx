import React, { useState } from "react";
import { FENCING_PORTFOLIO_IMAGES } from "../data/fencingImages";
import type { FencingImageItem } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { ArrowRight, Maximize2, MapPin } from "lucide-react";

export const VisualIntro: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Take the 4 primary fencing images
  const fourImages: FencingImageItem[] = [
    FENCING_PORTFOLIO_IMAGES[0],
    FENCING_PORTFOLIO_IMAGES[1],
    FENCING_PORTFOLIO_IMAGES[2],
    FENCING_PORTFOLIO_IMAGES[3]
  ];

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

        {/* 4 Images Neatly Aligned Grid */}
        <div className="visual-intro-4grid">
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
