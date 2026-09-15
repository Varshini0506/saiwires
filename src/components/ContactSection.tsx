import React, { useState } from "react";
import { COMPANY_DATA } from "../data/company";
import { CONTACT_BANNER_IMAGE } from "../data/fencingImages";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ShieldAlert } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    fencingType: "Kambi Veli (கம்பி வேலி)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      setErrorMessage("Please fill in your Name, Phone Number, and Property Location.");
      return;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile phone number.");
      return;
    }

    setSubmitted(true);
    setErrorMessage("");

    // Open WhatsApp with prefilled message
    const waText = encodeURIComponent(
      `Hello SAI WIRES AND FENCE,\n*New Enquiry:*\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nFencing: ${formData.fencingType}\nMessage: ${formData.message || "Requesting quotation and site visit."}`
    );
    window.open(`https://wa.me/${COMPANY_DATA.whatsapp}?text=${waText}`, "_blank");
  };

  return (
    <section id="contact" className="contact-section section-space">
      <div className="container">
        {/* Section Header (Short & Sweet) */}
        <div className="custom-header">
          <div className="custom-badge">Get in Touch</div>
          <h2 className="custom-title">CONTACT US</h2>
          <p className="custom-sub">
            Request a site inspection or quick quotation for your land fencing.
          </p>
        </div>

        {/* Split Layout: Left Contact Card, Right Form */}
        <div className="contact-split-grid">
          {/* Left Column: Direct Phone & WhatsApp Pill (Primary Phone Area) */}
          <div className="contact-left-card">
            <div className="contact-image-frame">
              <img
                src={CONTACT_BANNER_IMAGE}
                alt="SAI WIRES AND FENCE Boundary"
                className="contact-real-img"
                loading="lazy"
              />
              <div className="contact-img-badge">
                <span className="contact-tag">Direct Yard &amp; Site Team</span>
              </div>
            </div>

            <div className="contact-quick-pills">
              {/* Primary Call Pill */}
              <a href={`tel:${COMPANY_DATA.phone}`} className="contact-info-pill">
                <div className="pill-icon-wrap call">
                  <Phone size={20} />
                </div>
                <div className="pill-text-wrap">
                  <span className="pill-label">Call Directly</span>
                  <strong className="pill-value">{COMPANY_DATA.displayPhone}</strong>
                </div>
              </a>

              {/* WhatsApp Pill */}
              <a
                href={COMPANY_DATA.social.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-pill"
              >
                <div className="pill-icon-wrap whatsapp">
                  <MessageCircle size={20} />
                </div>
                <div className="pill-text-wrap">
                  <span className="pill-label">WhatsApp Chat</span>
                  <strong className="pill-value">Instant Quotation</strong>
                </div>
              </a>

              {/* Location Pill */}
              <div className="contact-info-pill static">
                <div className="pill-icon-wrap location">
                  <MapPin size={20} />
                </div>
                <div className="pill-text-wrap">
                  <span className="pill-label">Service Area</span>
                  <strong className="pill-value">Tamil Nadu (All Districts)</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Free Quote Form */}
          <div className="contact-right-form-card">
            <div className="form-card-header">
              <h3 className="form-card-title">Get a Free Quote</h3>
              <p className="form-card-subtitle">
                Fill this short form and our team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-box">
                  <CheckCircle2 size={44} className="text-emerald-500" />
                </div>
                <h4 className="success-title">Thank You, {formData.name}!</h4>
                <p className="success-msg">
                  Your enquiry has been received for <strong>{formData.location}</strong>. We will contact you shortly.
                </p>
                <div className="success-actions">
                  <a
                    href={`https://wa.me/${COMPANY_DATA.whatsapp}?text=Hello%20SAI%20WIRES,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.fencingType)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    <MessageCircle size={16} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-primary btn-sm"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quote-form-body">
                {errorMessage && (
                  <div className="form-error-alert">
                    <ShieldAlert size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-field-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-row-2col">
                  <div className="form-field-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="location" className="form-label">
                      Location / District *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Pollachi, Coimbatore"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label htmlFor="fencingType" className="form-label">
                    Fencing Requirement
                  </label>
                  <select
                    id="fencingType"
                    name="fencingType"
                    value={formData.fencingType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Kambi Veli (கம்பி வேலி)">Kambi Veli (கம்பி வேலி)</option>
                    <option value="Chain Link Fencing (செயின் லிங்க் வேலி)">
                      Chain Link Fencing (செயின் லிங்க் வேலி)
                    </option>
                    <option value="Barbed Wire Fencing (முள் கம்பி வேலி)">
                      Barbed Wire Fencing (முள் கம்பி வேலி)
                    </option>
                    <option value="RCC Post Fencing (கான்கிரீட் தூண் வேலி)">
                      RCC Post Fencing (கான்கிரீட் தூண் வேலி)
                    </option>
                    <option value="Farm Fencing (விவசாய நில வேலி)">
                      Farm Fencing (விவசாய நில வேலி)
                    </option>
                    <option value="Plot Fencing (மனை நில வேலி)">
                      Plot Fencing (மனை நில வேலி)
                    </option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label htmlFor="message" className="form-label">
                    Message / Approximate Perimeter (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. 1500 feet perimeter needed."
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-accent btn-lg form-submit-btn">
                  <Send size={18} />
                  <span>Send Enquiry</span>
                </button>

                <p className="form-privacy-note">
                  🔒 Your details are kept private. Direct assistance only.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
