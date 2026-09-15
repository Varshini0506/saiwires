import React from "react";
import { ShieldCheck, Ruler, Layers, CheckCircle2 } from "lucide-react";

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Strong Materials",
      desc: "Top-grade galvanized wire and high-density RCC posts built for extreme weather durability."
    },
    {
      icon: Ruler,
      title: "Neat Installation",
      desc: "Laser-straight alignment, uniform pit spacing, and firmly anchored corner support poles."
    },
    {
      icon: Layers,
      title: "Custom Fencing",
      desc: "Custom height options, wire thickness, and mesh spacing matched to your exact boundary needs."
    },
    {
      icon: CheckCircle2,
      title: "Reliable Service",
      desc: "On-time project delivery, direct manufacturer pricing, and dependable customer support."
    }
  ];

  return (
    <section id="why-us" className="why-choose-us-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">Our Commitment</div>
          <h2 className="custom-title">WHY CHOOSE US</h2>
          <p className="custom-sub">
            Built for farm owners, real estate developers, and homeowners who demand long-lasting boundary protection.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="why-cards-grid">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="why-card">
                <div className="why-card-icon-wrap">
                  <Icon size={26} className="why-icon" />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
