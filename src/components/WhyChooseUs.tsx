import React from "react";
import { ShieldCheck, HardHat, Sliders, DollarSign, Zap, Headphones, CheckCircle } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "Strong & Certified Materials",
      desc: "We exclusively utilize heavy-gauge hot-dipped galvanized GI wires and high-density precast RCC concrete posts designed for 20+ years of harsh outdoor durability.",
      icon: ShieldCheck,
      badge: "Quality First",
    },
    {
      title: "Professional Installation",
      desc: "Our experienced on-site fencing crews follow systematic ground digging, corner strut reinforcement, and uniform wire tensioning protocols for zero fence sagging.",
      icon: HardHat,
      badge: "Skilled Labor",
    },
    {
      title: "Customized Solutions",
      desc: "Every plot of land is unique. We tailor fence heights, post spacing, mesh apertures, and entrance gates to suit your terrain, slope, and specific security goals.",
      icon: Sliders,
      badge: "Tailored Engineering",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear and straightforward quotations based on exact running feet measurements with zero hidden charges or surprise surcharges.",
      icon: DollarSign,
      badge: "No Hidden Costs",
    },
    {
      title: "Quick Execution",
      desc: "Prompt site measurement, organized material logistics, and rapid team deployment ensure your project is completed on or ahead of scheduled deadlines.",
      icon: Zap,
      badge: "On-Time Completion",
    },
    {
      title: "Dedicated Customer Support",
      desc: "Personalized assistance from your first site enquiry through installation, final boundary inspection, and ongoing post-handover guidance.",
      icon: Headphones,
      badge: "Reliable Support",
    },
  ];

  return (
    <section id="why-us" className="why-us-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <CheckCircle size={14} />
            <span>THE SRI FENCE ADVANTAGE</span>
          </div>
          <h2 className="section-title">Why Choose SRI FENCE SOLUTIONS?</h2>
          <p className="section-subtitle">
            We combine high-grade agricultural & industrial fencing materials with seasoned craftsmanship to guarantee superior perimeter security across Tamil Nadu.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="why-grid">
          {reasons.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div key={index} className="why-card">
                <div className="why-card-top">
                  <div className="why-icon-box">
                    <IconComp size={24} />
                  </div>
                  <span className="why-pill">{item.badge}</span>
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .why-us-section {
          background-color: var(--color-bg-surface);
          position: relative;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .why-card {
          background: #ffffff;
          padding: 32px 28px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
          display: flex;
          flex-direction: column;
        }

        .why-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--color-primary-light);
        }

        .why-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .why-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
        }

        .why-card:hover .why-icon-box {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          color: #ffffff;
        }

        .why-pill {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          background: #f8fafc;
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
        }

        .why-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 12px;
        }

        .why-card-desc {
          font-size: 0.925rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
          .why-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
};
