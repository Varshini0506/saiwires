import React from "react";
import { PhoneCall, MapPin, Ruler, FileCheck, Hammer, Sparkles } from "lucide-react";

export const OurProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Requirement",
      sub: "Share land location & fence type via call, WhatsApp, or form.",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "Site Visit",
      sub: "Our technical team visits your land to survey terrain & boundary markers.",
      icon: MapPin,
    },
    {
      num: "03",
      title: "Measurement",
      sub: "Accurate running-feet calculation and corner post alignment planning.",
      icon: Ruler,
    },
    {
      num: "04",
      title: "Quotation",
      sub: "Clear, itemized pricing for wire gauge, posts, and installation labor.",
      icon: FileCheck,
    },
    {
      num: "05",
      title: "Installation",
      sub: "Deep post foundation, uniform line tensioning, and final handover.",
      icon: Hammer,
    },
  ];

  return (
    <section id="process" className="process-timeline-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge accent">
            <Sparkles size={13} />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="custom-title">Our 5-Step Execution Process</h2>
          <p className="custom-sub">
            From your first message to completed boundary handover, transparent and hassle-free.
          </p>
        </div>

        {/* 5-Step Horizontal Timeline Grid */}
        <div className="timeline-process-grid">
          {steps.map((st, i) => {
            const IconComp = st.icon;
            return (
              <div key={i} className="timeline-step-node">
                <div className="step-num-pill">{st.num}</div>
                <div className="step-icon-box">
                  <IconComp size={22} />
                </div>
                <h3 className="step-node-title">{st.title}</h3>
                <p className="step-node-desc">{st.sub}</p>
                {i < steps.length - 1 && <div className="step-chain-line" />}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .process-timeline-section {
          background-color: var(--c-surface);
        }

        .timeline-process-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          position: relative;
        }

        .timeline-step-node {
          position: relative;
          background: #ffffff;
          border: 1px solid var(--c-border);
          border-radius: var(--radius-lg);
          padding: 28px 18px 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-subtle);
          transition: var(--transition);
        }

        .timeline-step-node:hover {
          transform: translateY(-5px);
          border-color: var(--c-forest);
          box-shadow: var(--shadow-card);
        }

        .step-num-pill {
          position: absolute;
          top: -12px;
          background: var(--c-forest);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 3px 12px;
          border-radius: var(--radius-full);
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .step-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: #ecfdf5;
          color: var(--c-forest);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }

        .timeline-step-node:hover .step-icon-box {
          background: var(--c-forest);
          color: #ffffff;
        }

        .step-node-title {
          font-size: 1rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .step-node-desc {
          font-size: 0.78rem;
          color: var(--c-text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .timeline-process-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .timeline-process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
