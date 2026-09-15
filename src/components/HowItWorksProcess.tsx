import React from "react";
import { PhoneCall, MapPin, Calculator, ShieldCheck } from "lucide-react";

export const HowItWorksProcess: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Contact Us",
      subtitle: "Call or WhatsApp",
      desc: "Reach out with your land location, perimeter length, and preferred fencing type.",
      icon: PhoneCall
    },
    {
      num: "02",
      title: "Site Visit",
      subtitle: "Boundary Survey",
      desc: "Our field team inspects your ground terrain, boundary corners, and measurement lines.",
      icon: MapPin
    },
    {
      num: "03",
      title: "Quotation",
      subtitle: "Transparent Pricing",
      desc: "Get an itemized quote with material specifications and fixed installation timeline.",
      icon: Calculator
    },
    {
      num: "04",
      title: "Installation",
      subtitle: "Turnkey Handover",
      desc: "Expert pole foundation casting, tight wire mesh stretching, and secure corner locking.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="how-it-works-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">Simple &amp; Hassle-Free</div>
          <h2 className="custom-title">HOW IT WORKS</h2>
          <p className="custom-sub">
            From initial inquiry to completed boundary handover in 4 simple steps.
          </p>
        </div>

        {/* Clean 4-Step Timeline Grid */}
        <div className="process-timeline-grid">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="process-step-card">
                <div className="process-step-top">
                  <span className="process-step-num">{step.num}</span>
                  <div className="process-step-icon-wrap">
                    <Icon size={20} className="process-icon" />
                  </div>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <span className="process-step-sub">{step.subtitle}</span>
                <p className="process-step-desc">{step.desc}</p>
                {idx < steps.length - 1 && <div className="process-connector-line" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
