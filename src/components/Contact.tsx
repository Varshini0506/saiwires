import React, { useState } from "react";
import { COMPANY_DATA } from "../data/company";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles,
  AlertCircle
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    landType: "Agricultural Land",
    approxLandSize: "",
    fencingType: "Chain Link Fencing",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const landTypes = [
    "Agricultural Farmland",
    "Coconut / Arecanut Grove",
    "Residential Plot / Layout",
    "Farmhouse / Villa Estate",
    "Commercial Property",
    "Industrial Factory / Warehouse",
    "Other Land Boundary"
  ];

  const fencingTypes = [
    "Chain Link Mesh Fencing",
    "Barbed Wire Fencing (Heavy GI)",
    "Precast RCC Concrete Post Fencing",
    "Farm & Cattle Knot Mesh Fencing",
    "Industrial Anti-Cut & Concertina Razor",
    "Stone Pillar + Barbed Setup",
    "Custom Boundary Solution"
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.location.trim()) errors.location = "Please enter your land location/district";
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate static submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>CONTACT & FREE ESTIMATION</span>
          </div>
          <h2 className="section-title">Let's Discuss Your Fencing Requirement</h2>
          <p className="section-subtitle">
            Get in touch for site measurements, material advice, or a tailored estimate. Our fencing engineers are ready to assist you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Business Contact Info & Quick Actions */}
          <div className="contact-info-panel">
            <div className="info-panel-header">
              <h3 className="panel-title">SRI FENCE SOLUTIONS</h3>
              <p className="panel-tagline">"Strong Boundaries. Secure Lands."</p>
            </div>

            <div className="info-items-list">
              <a href={`tel:${COMPANY_DATA.phone}`} className="info-item-link">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-label">Direct Phone / Call Now</span>
                  <span className="info-value">{COMPANY_DATA.displayPhone}</span>
                </div>
              </a>

              <a href={`mailto:${COMPANY_DATA.email}`} className="info-item-link">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Email Enquiry</span>
                  <span className="info-value">{COMPANY_DATA.email}</span>
                </div>
              </a>

              <div className="info-item-static">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Service Headquarters</span>
                  <span className="info-value">{COMPANY_DATA.address}</span>
                </div>
              </div>

              <div className="info-item-static">
                <div className="info-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="info-label">Operational Hours</span>
                  <span className="info-value">{COMPANY_DATA.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="direct-connect-box">
              <h4 className="direct-title">Instant Response on WhatsApp</h4>
              <p className="direct-desc">Send photos of your land or GPS location for instant feasibility feedback.</p>
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp ({COMPANY_DATA.displayPhone})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Request Form */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="success-title">Thank You, {formData.name}!</h3>
                <p className="success-message">
                  Your fencing request for <strong>{formData.landType}</strong> in <strong>{formData.location}</strong> has been received successfully.
                </p>
                <p className="success-sub">
                  Our regional fencing specialist will contact you at <strong>{formData.phone}</strong> shortly to discuss site measurements and provide an accurate quotation.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      location: "",
                      landType: "Agricultural Land",
                      approxLandSize: "",
                      fencingType: "Chain Link Fencing",
                      message: "",
                    });
                  }}
                  style={{ marginTop: "20px" }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form" noValidate>
                <h3 className="form-title">Request a Free Project Quotation</h3>
                <p className="form-desc">Fill in your requirements below for a detailed cost estimation.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`form-input ${formErrors.name ? "error" : ""}`}
                    />
                    {formErrors.name && (
                      <span className="field-error">
                        <AlertCircle size={13} /> {formErrors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 63699 31669"
                      className={`form-input ${formErrors.phone ? "error" : ""}`}
                    />
                    {formErrors.phone && (
                      <span className="field-error">
                        <AlertCircle size={13} /> {formErrors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="location" className="form-label">
                      Land Location / District <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Pollachi, Coimbatore"
                      className={`form-input ${formErrors.location ? "error" : ""}`}
                    />
                    {formErrors.location && (
                      <span className="field-error">
                        <AlertCircle size={13} /> {formErrors.location}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="approxLandSize" className="form-label">
                      Approx. Land Size / Running Feet
                    </label>
                    <input
                      type="text"
                      id="approxLandSize"
                      name="approxLandSize"
                      value={formData.approxLandSize}
                      onChange={handleChange}
                      placeholder="e.g. 2 Acres / 1,200 Running Feet"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="landType" className="form-label">
                      Type of Land Property
                    </label>
                    <select
                      id="landType"
                      name="landType"
                      value={formData.landType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {landTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fencingType" className="form-label">
                      Preferred Fencing Type
                    </label>
                    <select
                      id="fencingType"
                      name="fencingType"
                      value={formData.fencingType}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {fencingTypes.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Additional Requirements / Special Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details such as terrain type, gate requirement, urgent timeline, etc."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-accent btn-lg"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Request a Free Quote</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="form-privacy-note">
                  🔒 We respect your privacy. Your information is strictly used to evaluate your fencing requirement.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: #ffffff;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.25fr;
          gap: 48px;
          align-items: flex-start;
        }

        .contact-info-panel {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 40px;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
        }

        .info-panel-header {
          margin-bottom: 28px;
          border-bottom: 1px solid rgba(255,255,255,0.15);
          padding-bottom: 20px;
        }

        .panel-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .panel-tagline {
          font-size: 0.88rem;
          color: #fcd34d;
          font-weight: 600;
        }

        .info-items-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 32px;
        }

        .info-item-link, .info-item-static {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          color: #ffffff;
          text-decoration: none;
        }

        .info-item-link:hover .info-value {
          color: #fcd34d;
        }

        .info-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #fcd34d;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2px;
        }

        .info-value {
          display: block;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .direct-connect-box {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          padding: 22px;
        }

        .direct-title {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .direct-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          line-height: 1.4;
        }

        /* Form styling */
        .contact-form-panel {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          padding: 40px;
          box-shadow: var(--shadow-lg);
        }

        .form-title {
          font-size: 1.65rem;
          color: var(--color-charcoal-dark);
          margin-bottom: 6px;
        }

        .form-desc {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 6px;
        }

        .req {
          color: #dc2626;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          font-size: 0.925rem;
          color: var(--color-charcoal-dark);
          background: var(--color-bg-light);
          transition: all var(--transition-fast);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          background: #ffffff;
          box-shadow: 0 0 0 3px var(--color-primary-glow);
        }

        .form-input.error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .field-error {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          color: #ef4444;
          margin-top: 4px;
          font-weight: 600;
        }

        .form-privacy-note {
          font-size: 0.78rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-top: 14px;
        }

        /* Success screen */
        .form-success-box {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon-wrap {
          color: #10b981;
          margin-bottom: 16px;
        }

        .success-title {
          font-size: 1.8rem;
          color: var(--color-charcoal-dark);
          margin-bottom: 12px;
        }

        .success-message {
          font-size: 1.05rem;
          color: var(--color-charcoal);
          margin-bottom: 8px;
        }

        .success-sub {
          font-size: 0.92rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 auto;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .contact-form-panel, .contact-info-panel {
            padding: 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .form-title {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </section>
  );
};
