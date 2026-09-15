import React from "react";
import { COMPANY_DATA } from "../data/company";
import { FENCING_IMAGES } from "../data/websiteData";
import { MessageCircle, ArrowRight } from "lucide-react";

export const FinalVisualCTA: React.FC = () => {
  return (
    <section className="final-visual-cta-section">
      <div className="final-cta-bg">
        <img
          src={FENCING_IMAGES.finalCta}
          alt="Completed Kambi Veli fencing project background"
          className="final-cta-media"
          loading="lazy"
        />
        <div className="final-cta-dark-filter" />
      </div>

      <div className="container final-cta-container">
        <div className="final-cta-box">
          <h2 className="final-cta-title">READY TO SECURE YOUR LAND?</h2>
          <p className="final-cta-desc">
            Let's plan the right fencing solution for your property.
          </p>

          <div className="final-cta-btn-group">
            <a href="#contact" className="btn btn-accent btn-lg">
              <span>Get Free Quote</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={COMPANY_DATA.social.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .final-visual-cta-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
          color: #ffffff;
        }

        .final-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .final-cta-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .final-cta-dark-filter {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10, 31, 22, 0.94) 0%,
            rgba(20, 54, 40, 0.88) 50%,
            rgba(15, 23, 32, 0.95) 100%
          );
        }

        .final-cta-container {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .final-cta-box {
          max-width: 780px;
          margin: 0 auto;
        }

        .final-cta-title {
          font-size: 3.4rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }

        .final-cta-desc {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 34px;
        }

        .final-cta-btn-group {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .final-visual-cta-section {
            padding: 64px 0;
          }
          .final-cta-title {
            font-size: 2.1rem;
          }
          .final-cta-desc {
            font-size: 1.05rem;
          }
          .final-cta-btn-group {
            flex-direction: column;
          }
          .final-cta-btn-group .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
