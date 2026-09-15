import React, { useState } from "react";
import { FAQ_DATA } from "../data/faq";
import { ChevronDown, HelpCircle, Sparkles, PhoneCall } from "lucide-react";
import { COMPANY_DATA } from "../data/company";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="faq-layout-grid">
          {/* Left Column: FAQ Context & Direct Help Card */}
          <div className="faq-info-col">
            <div className="section-badge accent">
              <Sparkles size={14} />
              <span>COMMONLY ASKED QUESTIONS</span>
            </div>
            <h2 className="faq-heading">Got Questions About Land Fencing?</h2>
            <p className="faq-subtext">
              Here are clear answers regarding our materials, on-site measurement process, quotation estimates, and fence durability.
            </p>

            <div className="faq-help-card">
              <div className="help-icon-wrap">
                <HelpCircle size={24} />
              </div>
              <h4 className="help-title">Have a specific question about your plot?</h4>
              <p className="help-desc">
                Speak directly with our land fencing specialist. We provide instant advice on suitable fencing options.
              </p>
              <a href={`tel:${COMPANY_DATA.phone}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <PhoneCall size={16} />
                <span>Call {COMPANY_DATA.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="faq-accordion-col">
            <div className="accordion-wrapper">
              {FAQ_DATA.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`accordion-item ${isOpen ? "open" : ""}`}
                  >
                    <button
                      className="accordion-header-btn"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="accordion-question">{faq.question}</span>
                      <div className={`accordion-icon-box ${isOpen ? "rotate" : ""}`}>
                        <ChevronDown size={20} />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="accordion-body-content">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--color-bg-light);
        }

        .faq-layout-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.25fr;
          gap: 50px;
          align-items: flex-start;
        }

        .faq-heading {
          font-size: 2.3rem;
          color: var(--color-charcoal-dark);
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .faq-subtext {
          font-size: 1rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 32px;
        }

        .faq-help-card {
          background: #ffffff;
          padding: 28px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
        }

        .help-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: #ecfdf5;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        .help-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 8px;
        }

        .help-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 20px;
        }

        /* Accordion items */
        .accordion-wrapper {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .accordion-item {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .accordion-item.open {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-md);
        }

        .accordion-header-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: inherit;
        }

        .accordion-question {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          padding-right: 16px;
          line-height: 1.4;
        }

        .accordion-item.open .accordion-question {
          color: var(--color-primary);
        }

        .accordion-icon-box {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          background: var(--color-bg-light);
          color: var(--color-charcoal);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition-normal), background-color var(--transition-normal), color var(--transition-normal);
        }

        .accordion-icon-box.rotate {
          transform: rotate(180deg);
          background: var(--color-primary);
          color: #ffffff;
        }

        .accordion-body-content {
          padding: 0 24px 22px 24px;
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--color-charcoal);
          border-top: 1px dashed #f1f5f9;
          padding-top: 14px;
        }

        @media (max-width: 1024px) {
          .faq-layout-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .faq-heading {
            font-size: 1.85rem;
          }
          .accordion-header-btn {
            padding: 16px 18px;
          }
          .accordion-question {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};
