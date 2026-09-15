import React, { useState } from "react";
import { EDITORIAL_SHOWCASE } from "../data/fencingImages";
import type { FencingImageItem } from "../data/fencingImages";
import { LightboxModal } from "./LightboxModal";
import { Maximize2, MapPin } from "lucide-react";

export const ProjectEditorialShowcase: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const showcaseList: FencingImageItem[] = [
    EDITORIAL_SHOWCASE.hero,
    EDITORIAL_SHOWCASE.sideTop,
    EDITORIAL_SHOWCASE.sideBottom,
    EDITORIAL_SHOWCASE.wideBottom,
    EDITORIAL_SHOWCASE.featuredPvc
  ];

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

        {/* Editorial Layout Grid: 1 Large Hero + 2 Stacked Side + 1 Wide Underneath + 1 Highlight */}
        <div className="editorial-mosaic-layout">
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
