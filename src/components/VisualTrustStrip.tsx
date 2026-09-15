import React from "react";
import { ShieldCheck, HardHat, Sliders, CheckCircle } from "lucide-react";

export const VisualTrustStrip: React.FC = () => {
  const trustItems = [
    {
      title: "Quality Materials",
      sub: "IS Standard Galvanized Wire",
      icon: ShieldCheck,
    },
    {
      title: "Skilled Installation",
      sub: "Experienced On-Site Craftsmen",
      icon: HardHat,
    },
    {
      title: "Custom Fencing",
      sub: "Tailored to Land & Terrain",
      icon: Sliders,
    },
    {
      title: "Reliable Service",
      sub: "Prompt Site Handover",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="trust-strip-bar">
      <div className="container">
        <div className="trust-strip-grid">
          {trustItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="trust-item-pill">
                <div className="trust-item-icon">
                  <IconComp size={22} />
                </div>
                <div className="trust-item-text">
                  <span className="trust-item-title">{item.title}</span>
                  <span className="trust-item-sub">{item.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .trust-strip-bar {
          background: #ffffff;
          border-bottom: 1px solid var(--c-border);
          padding: 20px 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .trust-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .trust-item-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: var(--c-surface);
          border: 1px solid var(--c-border);
        }

        .trust-item-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: #ecfdf5;
          color: var(--c-forest);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-item-text {
          display: flex;
          flex-direction: column;
        }

        .trust-item-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
          line-height: 1.2;
        }

        .trust-item-sub {
          font-size: 0.75rem;
          color: var(--c-text-muted);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .trust-strip-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
