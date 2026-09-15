import React from "react";
import { FENCING_IMAGES } from "../data/websiteData";
import { ShieldCheck, Wrench, Ruler, CheckCircle2, FileText, Headphones, Sparkles } from "lucide-react";

export const WhyCustomersChooseUs: React.FC = () => {
  const points = [
    {
      title: "Strong Materials",
      desc: "Heavy-gauge hot-dip galvanized GI wire and high-density RCC posts built for 20+ years.",
      icon: ShieldCheck,
    },
    {
      title: "Neat Installation",
      desc: "Systematic deep digging, uniform line tensioning, and robust corner anchoring.",
      icon: Wrench,
    },
    {
      title: "Custom Measurements",
      desc: "Every acre and boundary shape is surveyed to fit exact land terrain and contours.",
      icon: Ruler,
    },
    {
      title: "Practical Solutions",
      desc: "Solutions adapted to crop protection, wild animal deterrence, and plot demarcation.",
      icon: CheckCircle2,
    },
    {
      title: "Transparent Quotations",
      desc: "Itemized running-feet pricing with zero surprise charges or hidden material surcharges.",
      icon: FileText,
    },
    {
      title: "Professional Support",
      desc: "Dedicated site engineers guiding you from initial survey to final boundary handover.",
      icon: Headphones,
    },
  ];

  return (
    <section id="why-us" className="why-us-visual-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">
            <Sparkles size={13} />
            <span>THE SRI FENCE ADVANTAGE</span>
          </div>
          <h2 className="custom-title">Why Customers Choose Us</h2>
          <p className="custom-sub">
            Built on verified materials, disciplined craftsmanship, and honest project execution.
          </p>
        </div>

        {/* Visual Section: Background Fencing Photo + Floating Blocks */}
        <div className="why-us-backdrop-card">
          <img
            src={FENCING_IMAGES.whyChooseMain}
            alt="Fencing materials and installation"
            className="why-backdrop-img"
            loading="lazy"
          />
          <div className="why-dark-layer" />

          <div className="why-floating-grid">
            {points.map((p, i) => {
              const IconComp = p.icon;
              return (
                <div key={i} className="why-glass-card">
                  <div className="why-icon-bubble">
                    <IconComp size={20} />
                  </div>
                  <h3 className="why-card-h">{p.title}</h3>
                  <p className="why-card-p">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .why-us-visual-section {
          background-color: #ffffff;
        }

        .why-us-backdrop-card {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          padding: 48px 36px;
          border: 1px solid var(--c-border);
          box-shadow: var(--shadow-card);
        }

        .why-backdrop-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        .why-dark-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10, 31, 22, 0.94) 0%,
            rgba(15, 23, 32, 0.92) 100%
          );
          z-index: 2;
        }

        .why-floating-grid {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .why-glass-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: var(--radius-lg);
          padding: 24px;
          color: #ffffff;
          transition: var(--transition);
        }

        .why-glass-card:hover {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-4px);
          border-color: var(--c-gold);
        }

        .why-icon-bubble {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--c-amber);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .why-card-h {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .why-card-p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .why-floating-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-us-backdrop-card {
            padding: 24px 16px;
          }
          .why-floating-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
