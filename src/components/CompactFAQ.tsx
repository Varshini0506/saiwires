import React, { useState } from "react";
import { FAQS_COMPACT } from "../data/websiteData";
import { ChevronDown, Sparkles } from "lucide-react";

export const CompactFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="compact-faq-section section-space">
      <div className="container">
        {/* Section Header */}
        <div className="custom-header">
          <div className="custom-badge">
            <Sparkles size={13} />
            <span>FREQUENT QUESTIONS</span>
          </div>
          <h2 className="custom-title">Frequently Asked Questions</h2>
          <p className="custom-sub">
            Clear answers regarding Kambi Veli, site measurements, and quotation calculations.
          </p>
        </div>

        {/* Compact Accordion */}
        <div className="compact-accordion-wrapper">
          {FAQS_COMPACT.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.id} className={`faq-compact-card ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-trigger-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{item.q}</span>
                  <div className={`faq-arrow-circle ${isOpen ? "rotated" : ""}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .compact-faq-section {
          background-color: #ffffff;
        }

        .compact-accordion-wrapper {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-compact-card {
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-compact-card.open {
          border-color: var(--c-forest);
          background: #ffffff;
          box-shadow: var(--shadow-subtle);
        }

        .faq-trigger-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        .faq-q-text {
          font-size: 1rem;
          font-weight: 800;
          color: var(--c-charcoal-dark);
          padding-right: 14px;
        }

        .faq-compact-card.open .faq-q-text {
          color: var(--c-forest);
        }

        .faq-arrow-circle {
          width: 30px;
          height: 30px;
          border-radius: var(--radius-full);
          background: #ffffff;
          color: var(--c-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition);
        }

        .faq-arrow-circle.rotated {
          transform: rotate(180deg);
          background: var(--c-forest);
          color: #ffffff;
        }

        .faq-answer-pane {
          padding: 0 20px 16px 20px;
          font-size: 0.9rem;
          color: var(--c-text-main);
          line-height: 1.55;
          border-top: 1px dashed var(--c-border);
          padding-top: 12px;
        }
      `}</style>
    </section>
  );
};
