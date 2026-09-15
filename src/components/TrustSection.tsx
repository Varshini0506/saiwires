import React from "react";
import { ShieldCheck, HardHat, Sliders, CheckCircle } from "lucide-react";

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      title: "Quality Materials",
      icon: ShieldCheck,
    },
    {
      title: "Strong Installation",
      icon: HardHat,
    },
    {
      title: "Custom Solutions",
      icon: Sliders,
    },
    {
      title: "Reliable Service",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="trust-strip-section">
      <div className="container">
        <div className="trust-strip-grid">
          {trustPoints.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="trust-strip-item">
                <div className="trust-icon-box">
                  <IconComp size={24} />
                </div>
                <span className="trust-strip-label">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .trust-strip-section {
          background-color: #ffffff;
          padding: 36px 0;
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }

        .trust-strip-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          align-items: center;
        }

        .trust-strip-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          padding: 10px 16px;
        }

        .trust-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: #ecfdf5;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .trust-strip-label {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          letter-spacing: -0.01em;
        }

        @media (max-width: 1024px) {
          .trust-strip-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .trust-strip-item {
            justify-content: flex-start;
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
