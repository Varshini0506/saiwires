import React, { useState } from "react";
import { Sparkles, ShieldCheck, ArrowLeftRight } from "lucide-react";

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section className="before-after-visual-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>TRANSFORMATION</span>
          </div>
          <h2 className="section-title">Before & After Kambi Veli</h2>
          <p className="section-subtitle">
            Slide horizontally to see the immediate boundary transformation.
          </p>
        </div>

        {/* Interactive Comparison Split Image */}
        <div className="split-compare-box">
          {/* AFTER (Fenced) */}
          <div className="compare-pane after-pane">
            <img
              src="/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg"
              alt="After: Protected land with strong Kambi Veli boundary"
              className="compare-photo"
            />
            <div className="compare-pill pill-after">
              <ShieldCheck size={16} />
              <span>AFTER: KAMBI VELI FENCING</span>
            </div>
          </div>

          {/* BEFORE (Open) */}
          <div
            className="compare-pane before-pane"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <img
              src="/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg"
              alt="Before: Unprotected open agricultural land"
              className="compare-photo tint-before"
            />
            <div className="compare-pill pill-before">
              <span>BEFORE: OPEN LAND</span>
            </div>
          </div>

          {/* Draggable Divider */}
          <div className="divider-line" style={{ left: `${sliderPos}%` }}>
            <div className="divider-dragger">
              <ArrowLeftRight size={18} />
            </div>
          </div>

          {/* Range input slider control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="compare-range-input"
            aria-label="Before and after slider"
          />
        </div>
      </div>

      <style>{`
        .before-after-visual-section {
          background-color: #ffffff;
        }

        .split-compare-box {
          position: relative;
          max-width: 1060px;
          height: 500px;
          margin: 0 auto;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--color-border);
          user-select: none;
        }

        .compare-pane {
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

        .tint-before {
          filter: brightness(0.85) contrast(1.1);
        }

        .compare-pill {
          position: absolute;
          top: 20px;
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
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
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        .pill-before {
          left: 20px;
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }

        .divider-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #ffffff;
          box-shadow: 0 0 12px rgba(0,0,0,0.6);
          z-index: 10;
          pointer-events: none;
          transform: translateX(-50%);
        }

        .divider-dragger {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          background: var(--color-primary);
          color: #ffffff;
          border: 3px solid #ffffff;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4);
        }

        .compare-range-input {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: ew-resize;
          z-index: 20;
        }

        @media (max-width: 768px) {
          .split-compare-box {
            height: 320px;
          }
          .compare-pill {
            font-size: 0.72rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
};
