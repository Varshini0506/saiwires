import React, { useState } from "react";
import { FENCING_IMAGES } from "../data/websiteData";
import { Sparkles, ArrowLeftRight, ShieldCheck, AlertTriangle } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  const [slider, setSlider] = useState<number>(50);

  return (
    <section id="transformation" className="transformation-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge accent">
            <Sparkles size={13} />
            <span>TRANSFORMATION</span>
          </div>
          <h2 className="custom-title">Before & After Kambi Veli</h2>
          <p className="custom-sub">
            From open and vulnerable land to permanently protected and demarcated property.
          </p>
        </div>

        {/* Comparison Showcase */}
        <div className="comparison-viewport">
          {/* AFTER (Fenced) */}
          <div className="compare-layer after-layer">
            <img
              src={FENCING_IMAGES.afterLand}
              alt="After: Professionally Fenced Property with Kambi Veli"
              className="compare-photo"
            />
            <div className="compare-pill pill-after">
              <ShieldCheck size={16} />
              <span>AFTER: PROFESSIONALLY FENCED PROPERTY</span>
            </div>
          </div>

          {/* BEFORE (Open) */}
          <div
            className="compare-layer before-layer"
            style={{ clipPath: `polygon(0 0, ${slider}% 0, ${slider}% 100%, 0 100%)` }}
          >
            <img
              src={FENCING_IMAGES.beforeLand}
              alt="Before: Open / Unfenced Land"
              className="compare-photo tint-unfenced"
            />
            <div className="compare-pill pill-before">
              <AlertTriangle size={15} />
              <span>BEFORE: OPEN / UNFENCED LAND</span>
            </div>
          </div>

          {/* Slider line & handle */}
          <div className="slider-dragger-line" style={{ left: `${slider}%` }}>
            <div className="dragger-handle">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          {/* Slider input control */}
          <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={(e) => setSlider(Number(e.target.value))}
            className="slider-range-control"
            aria-label="Drag before and after comparison"
          />
        </div>
      </div>

      <style>{`
        .transformation-section {
          background-color: var(--c-surface);
        }

        .comparison-viewport {
          position: relative;
          max-width: 1040px;
          height: 480px;
          margin: 0 auto;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-hover);
          border: 1px solid var(--c-border);
          user-select: none;
        }

        .compare-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .compare-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .tint-unfenced {
          filter: brightness(0.85) contrast(1.1);
        }

        .compare-pill {
          position: absolute;
          top: 20px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 5;
        }

        .pill-after {
          right: 20px;
          background: rgba(16, 185, 129, 0.95);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
        }

        .pill-before {
          left: 20px;
          background: rgba(15, 23, 32, 0.88);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25);
        }

        .slider-dragger-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #ffffff;
          box-shadow: 0 0 14px rgba(0,0,0,0.6);
          z-index: 10;
          pointer-events: none;
          transform: translateX(-50%);
        }

        .dragger-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          background: var(--c-forest);
          color: #ffffff;
          border: 3px solid #ffffff;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.35);
        }

        .slider-range-control {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: ew-resize;
          z-index: 20;
        }

        @media (max-width: 768px) {
          .comparison-viewport {
            height: 320px;
          }
          .compare-pill {
            font-size: 0.7rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
};
