import React from "react";
import { PhoneCall, MapPin, Layers, FileText, Hammer, CheckSquare, Sparkles } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNum: "01",
      title: "Contact Us",
      desc: "Share your land location, estimated boundary size, and fencing requirement via call, WhatsApp, or form.",
      icon: PhoneCall,
    },
    {
      stepNum: "02",
      title: "Site Visit & Survey",
      desc: "Our technical surveyor visits your property to inspect boundary lines, evaluate soil, and calculate running feet.",
      icon: MapPin,
    },
    {
      stepNum: "03",
      title: "Select Fencing Type",
      desc: "Choose from barbed wire, chain link mesh, RCC posts, or custom setups based on your security needs and budget.",
      icon: Layers,
    },
    {
      stepNum: "04",
      title: "Transparent Quotation",
      desc: "Receive an itemized quotation outlining post materials, wire gauge, labor costs, and execution timelines.",
      icon: FileText,
    },
    {
      stepNum: "05",
      title: "Professional Installation",
      desc: "Our experienced crew arrives with certified materials, sets deep foundations, aligns posts, and tensions the wire.",
      icon: Hammer,
    },
    {
      stepNum: "06",
      title: "Final Inspection & Handover",
      desc: "Joint boundary inspection to verify wire tension, gate alignment, and total quality satisfaction before final sign-off.",
      icon: CheckSquare,
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge accent">
            <Sparkles size={14} />
            <span>STEP-BY-STEP PROCESS</span>
          </div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            From initial measurement to flawless boundary handover, our structured workflow ensures transparent pricing and hassle-free execution.
          </p>
        </div>

        {/* 6 Step Grid with Connecting Visuals */}
        <div className="steps-grid">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <div key={index} className="step-card">
                <div className="step-number-badge">{step.stepNum}</div>
                <div className="step-icon-wrap">
                  <IconComp size={24} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                {index < steps.length - 1 && <div className="step-connector" />}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Track Banner */}
        <div className="process-bottom-banner">
          <div>
            <h4 className="banner-title">Ready to protect your property boundary?</h4>
            <p className="banner-desc">Book a fast site visit across Coimbatore, Erode, Tiruppur & Salem.</p>
          </div>
          <a href="#contact" className="btn btn-accent btn-lg">
            Schedule Site Survey
          </a>
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: #ffffff;
          position: relative;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px 30px;
          margin-bottom: 56px;
        }

        .step-card {
          position: relative;
          background: var(--color-bg-light);
          padding: 36px 28px 30px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }

        .step-number-badge {
          position: absolute;
          top: -14px;
          right: 24px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          padding: 4px 14px;
          border-radius: var(--radius-full);
          box-shadow: var(--shadow-sm);
        }

        .step-icon-wrap {
          width: 50px;
          height: 50px;
          background: #ffffff;
          color: var(--color-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: var(--shadow-sm);
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 10px;
        }

        .step-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        .process-bottom-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 36px 44px;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          box-shadow: var(--shadow-primary);
        }

        .banner-title {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .banner-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
        }

        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .process-bottom-banner {
            flex-direction: column;
            text-align: center;
            padding: 28px 20px;
          }
          .process-bottom-banner .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
