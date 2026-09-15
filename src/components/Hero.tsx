import React from "react";
import { COMPANY_DATA } from "../data/company";
import { FENCING_IMAGES } from "../data/websiteData";
import { MessageCircle, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="original-hero-section">
      {/* Fullscreen cinematic image of agricultural field with clearly visible wire fence */}
      <div className="hero-cinematic-bg">
        <img
          src={FENCING_IMAGES.heroBackground}
          alt="Agricultural field with strong Kambi Veli wire fence running around the land"
          className="hero-media-cover"
        />
        {/* Subtle dark tint for contrast while keeping fencing and green farm completely visible */}
        <div className="hero-lighting-overlay" />
      </div>

      <div className="container hero-content-wrap">
        <div className="hero-text-card">
          {/* Small visual badge */}
          <div className="hero-pill-badge">
            <span>FARM • PLOT • HOME • INDUSTRIAL</span>
          </div>

          <h1 className="hero-headline-main">
            SECURE YOUR LAND. <br />
            <span className="hero-headline-sub">BUILT TO LAST.</span>
          </h1>

          <p className="hero-mini-tagline">
            Kambi Veli & Land Fencing Solutions
          </p>

          <div className="hero-buttons-row">
            <a href="#contact" className="btn btn-accent btn-lg">
              <span>Get a Free Quote</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={COMPANY_DATA.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .original-hero-section {
          position: relative;
          min-height: 88vh;
          display: flex;
          align-items: flex-end; /* Bottom anchored for maximum fence visibility */
          padding-bottom: 56px;
          overflow: hidden;
          color: #ffffff;
        }

        .hero-cinematic-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-media-cover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
        }

        .hero-lighting-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(10, 31, 22, 0.4) 40%,
            rgba(10, 31, 22, 0.88) 100%
          );
        }

        .hero-content-wrap {
          position: relative;
          z-index: 2;
        }

        .hero-text-card {
          max-width: 820px;
          background: rgba(15, 23, 32, 0.72);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-xl);
          padding: 36px 44px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .hero-pill-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--c-gold);
          background: rgba(217, 119, 6, 0.25);
          border: 1px solid rgba(245, 158, 11, 0.5);
          padding: 4px 14px;
          border-radius: var(--radius-full);
          margin-bottom: 14px;
        }

        .hero-headline-main {
          font-size: 3.4rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .hero-headline-sub {
          color: var(--c-gold);
        }

        .hero-mini-tagline {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
          margin-bottom: 26px;
        }

        .hero-buttons-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .original-hero-section {
            min-height: 75vh;
            padding-bottom: 24px;
          }
          .hero-text-card {
            padding: 24px 20px;
          }
          .hero-headline-main {
            font-size: 2.1rem;
          }
          .hero-mini-tagline {
            font-size: 1.05rem;
          }
          .hero-buttons-row {
            flex-direction: column;
            width: 100%;
          }
          .hero-buttons-row .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
