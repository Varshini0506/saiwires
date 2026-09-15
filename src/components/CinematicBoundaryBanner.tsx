import React from "react";
import { FENCING_IMAGES } from "../data/websiteData";
import { ArrowRight, Shield } from "lucide-react";

export const CinematicBoundaryBanner: React.FC = () => {
  return (
    <section className="cinematic-banner-section">
      <div className="banner-bg-wrap">
        <img
          src={FENCING_IMAGES.cinematicBoundary}
          alt="Long stretch of agricultural land fencing Tamil Nadu"
          className="banner-media-img"
          loading="lazy"
        />
        <div className="banner-cinematic-tint" />
      </div>

      <div className="container banner-inner-content">
        <div className="banner-content-card">
          <div className="banner-badge">
            <Shield size={14} />
            <span>PROTECT YOUR INVESTMENT</span>
          </div>

          <h2 className="banner-headline">
            YOUR LAND DESERVES A STRONG BOUNDARY.
          </h2>

          <p className="banner-subline">
            Don't leave your agricultural acres or valuable plots unprotected. Get verified Kambi Veli and boundary security across Tamil Nadu.
          </p>

          <a href="#contact" className="btn btn-accent btn-lg banner-quote-btn">
            <span>Request a Quote</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <style>{`
        .cinematic-banner-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          color: #ffffff;
        }

        .banner-bg-wrap {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .banner-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .banner-cinematic-tint {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10, 31, 22, 0.92) 0%,
            rgba(20, 54, 40, 0.85) 50%,
            rgba(15, 23, 32, 0.92) 100%
          );
        }

        .banner-inner-content {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .banner-content-card {
          max-width: 820px;
          margin: 0 auto;
        }

        .banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--c-gold);
          background: rgba(217, 119, 6, 0.25);
          border: 1px solid rgba(245, 158, 11, 0.5);
          padding: 5px 16px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .banner-headline {
          font-size: 3.2rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 18px;
          letter-spacing: -0.02em;
        }

        .banner-subline {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .cinematic-banner-section {
            padding: 64px 0;
          }
          .banner-headline {
            font-size: 2.1rem;
          }
          .banner-subline {
            font-size: 0.98rem;
          }
          .banner-quote-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
