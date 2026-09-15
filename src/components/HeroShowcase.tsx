import React, { useState, useEffect } from "react";
import { HERO_SLIDES } from "../data/fencingImages";
import { ShieldCheck } from "lucide-react";

export const HeroShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload hero images on mount for instantaneous switching
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.src;
    });
  }, []);

  // Automatic 2-second slideshow loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-showcase-section">
      {/* Background Slideshow Layer with Smooth Crossfade */}
      <div className="hero-slider-stage">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide-item ${idx === currentIndex ? "active" : ""}`}
            aria-hidden={idx !== currentIndex}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="hero-slide-bg-img"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            {/* Dark gradient overlay keeping the fencing image clearly visible and text readable */}
            <div className="hero-gradient-overlay" />
          </div>
        ))}
      </div>

      {/* Main Hero Foreground Content */}
      <div className="container hero-content-container">
        <div className="hero-clean-layout">
          {/* Text Information Panel (Minimal & Elegant) */}
          <div className="hero-text-card">
            {/* Small Badge Label */}
            <div className="hero-badge-pill">
              <ShieldCheck size={16} />
              <span>KAMBI VELI &amp; LAND FENCING</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-main-title">
              Strong Boundaries. <br />
              <span className="hero-title-highlight">Secure Lands.</span>
            </h1>

            {/* Short & Sweet Description */}
            <p className="hero-tagline-text">
              Fencing solutions for farms, agricultural lands, and plots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
