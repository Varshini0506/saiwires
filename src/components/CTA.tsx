import React from "react";
import { COMPANY_DATA } from "../data/company";
import { MessageCircle, ArrowRight } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section className="final-cta-section">
      <div className="cta-full-bg">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=85"
          alt="Completed agricultural fencing project Tamil Nadu"
          className="cta-bg-img"
        />
        <div className="cta-overlay-dark" />
      </div>

      <div className="container cta-center-box">
        <h2 className="final-cta-title">Secure Your Land Today</h2>
        <div className="final-cta-buttons">
          <a
            href={COMPANY_DATA.social.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
          >
            <MessageCircle size={20} />
            <span>WhatsApp Us</span>
          </a>

          <a href="#contact" className="btn btn-accent btn-lg">
            <span>Get Free Quote</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <style>{`
        .final-cta-section {
          position: relative;
          padding: 110px 0;
          overflow: hidden;
          color: #ffffff;
        }

        .cta-full-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .cta-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cta-overlay-dark {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(8, 28, 21, 0.92) 0%,
            rgba(27, 67, 50, 0.88) 60%,
            rgba(15, 23, 42, 0.95) 100%
          );
        }

        .cta-center-box {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .final-cta-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 36px;
          letter-spacing: -0.02em;
        }

        .final-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .final-cta-section {
            padding: 70px 0;
          }
          .final-cta-title {
            font-size: 2.3rem;
            margin-bottom: 24px;
          }
          .final-cta-buttons {
            flex-direction: column;
          }
          .final-cta-buttons .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
