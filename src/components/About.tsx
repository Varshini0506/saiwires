import React from "react";
import { COMPANY_DATA } from "../data/company";
import { ShieldCheck, MapPin, Sparkles, Building2, Trees, Shield } from "lucide-react";

export const About: React.FC = () => {
  const highlights = [
    {
      title: "Agricultural Land Fencing",
      desc: "Prevent animal trespassing & secure crop yields.",
      icon: Trees,
    },
    {
      title: "Farm & Coconut Grove Boundaries",
      desc: "Long-term demarcation with RCC poles & high tensile GI wire.",
      icon: ShieldCheck,
    },
    {
      title: "Residential Plot Protection",
      desc: "Safeguard vacant layout sites from illegal encroachment.",
      icon: Shield,
    },
    {
      title: "Commercial & Industrial Enclosures",
      desc: "Secure compounds, factories, logistics hubs & solar plants.",
      icon: Building2,
    },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Showcase with Stats Box */}
          <div className="about-visual-col">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=80"
                alt="Strong land fencing posts and wire boundaries in Tamil Nadu"
                className="about-main-img"
              />
              <div className="image-experience-badge">
                <span className="badge-num">{COMPANY_DATA.stats.yearsExperience}</span>
                <span className="badge-text">Years of Trusted Service</span>
              </div>
            </div>

            {/* Secondary Floating Feature Card */}
            <div className="about-floating-feature">
              <div className="floating-feature-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="feature-title">Tamil Nadu Wide Service</h4>
                <p className="feature-desc">Coimbatore, Erode, Tiruppur, Salem & Neighboring Districts</p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Highlights */}
          <div className="about-content-col">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>ABOUT {COMPANY_DATA.name}</span>
            </div>

            <h2 className="about-heading">
              Dedicated Boundary Protection for Every Acre of Your Valuable Land
            </h2>

            <p className="about-lead-text">
              At <strong>{COMPANY_DATA.name}</strong>, we specialize in delivering heavy-duty, long-lasting land fencing and boundary protection solutions across Tamil Nadu. Whether you own acres of agricultural farmland, a residential layout plot, or a commercial estate, we protect your property rights with rock-solid physical boundaries.
            </p>

            <p className="about-sub-text">
              Our team understands local soil variations, terrain slopes, and weather demands. We utilize hot-dip galvanized GI wire, pre-stressed RCC poles, heavy-duty stone pillars, and precision tensioning methods to ensure your fence stands strong for decades without sagging or rusting.
            </p>

            {/* Core Capability Pillars */}
            <div className="about-highlights-grid">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="about-highlight-card">
                    <div className="highlight-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="highlight-title">{item.title}</h4>
                      <p className="highlight-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Statistics Bar (Sample / Demo company statistics) */}
            <div className="about-stats-container">
              <div className="stat-card">
                <span className="stat-value">{COMPANY_DATA.stats.yearsExperience}</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{COMPANY_DATA.stats.projectsCompleted}</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{COMPANY_DATA.stats.customerSatisfaction}</span>
                <span className="stat-label">Customer Focus</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{COMPANY_DATA.stats.fencingSolutions}</span>
                <span className="stat-label">Fencing Solutions</span>
              </div>
            </div>
            <p className="stat-disclaimer">* Demo business statistics showcasing capabilities and track record across Tamil Nadu.</p>

            {/* Action buttons */}
            <div className="about-cta-row">
              <a href="#services" className="btn btn-primary">
                Explore Fencing Solutions
              </a>
              <a href="#contact" className="btn btn-outline">
                Request Free Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: #ffffff;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        .about-visual-col {
          position: relative;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .about-main-img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .about-image-wrapper:hover .about-main-img {
          transform: scale(1.03);
        }

        .image-experience-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 16px 22px;
          border-radius: var(--radius-lg);
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          border: 1px solid rgba(255,255,255,0.15);
        }

        .badge-num {
          display: block;
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1;
          color: #fcd34d;
        }

        .badge-text {
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.9);
        }

        .about-floating-feature {
          position: absolute;
          bottom: -24px;
          right: -20px;
          background: #ffffff;
          padding: 18px 24px;
          border-radius: var(--radius-lg);
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 340px;
        }

        .floating-feature-icon {
          width: 44px;
          height: 44px;
          background: #ecfdf5;
          color: var(--color-primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 2px;
          color: var(--color-charcoal-dark);
        }

        .feature-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.3;
        }

        .about-heading {
          font-size: 2.3rem;
          line-height: 1.25;
          margin-bottom: 20px;
          color: var(--color-charcoal-dark);
        }

        .about-lead-text {
          font-size: 1.05rem;
          color: var(--color-charcoal);
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .about-sub-text {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.65;
          margin-bottom: 28px;
        }

        .about-highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .about-highlight-card {
          display: flex;
          gap: 12px;
          padding: 14px;
          background: var(--color-bg-light);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .about-highlight-card:hover {
          transform: translateY(-2px);
          border-color: var(--color-primary-light);
        }

        .highlight-icon-box {
          width: 36px;
          height: 36px;
          background: #ffffff;
          color: var(--color-primary);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: var(--shadow-sm);
        }

        .highlight-title {
          font-size: 0.92rem;
          font-weight: 700;
          margin-bottom: 3px;
          color: var(--color-charcoal-dark);
        }

        .highlight-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.35;
        }

        .about-stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 20px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          margin-bottom: 8px;
        }

        .stat-card {
          text-align: center;
        }

        .stat-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .stat-disclaimer {
          font-size: 0.75rem;
          color: var(--color-text-light);
          font-style: italic;
          margin-bottom: 28px;
        }

        .about-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-main-img {
            height: 380px;
          }
          .about-floating-feature {
            position: static;
            margin-top: 16px;
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .about-heading {
            font-size: 1.85rem;
          }
          .about-highlights-grid {
            grid-template-columns: 1fr;
          }
          .about-stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .about-cta-row {
            flex-direction: column;
          }
          .about-cta-row .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
