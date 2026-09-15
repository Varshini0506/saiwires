import React, { useState } from "react";
import { PROJECTS_DATA, type ProjectItem } from "../data/projects";
import { MapPin, Maximize2, Shield, Sparkles } from "lucide-react";

type CategoryType = "All" | "Agricultural" | "Farm" | "Residential" | "Commercial" | "Industrial";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: CategoryType[] = ["All", "Agricultural", "Farm", "Residential", "Commercial", "Industrial"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>PORTFOLIO & GALLERY</span>
          </div>
          <h2 className="section-title">Our Recent Fencing Projects</h2>
          <p className="section-subtitle">
            Explore our real-world completed perimeter fencing installations across farms, plots, estates, and industrial layouts in Tamil Nadu.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9 Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setActiveProject(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-cat-badge">{project.category}</div>
                <div className="project-overlay">
                  <div className="overlay-content">
                    <span className="overlay-view-btn">
                      <Maximize2 size={16} /> View Details
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-body">
                <div className="project-location-row">
                  <MapPin size={14} className="location-pin" />
                  <span>{project.location}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-specs">
                  <div className="spec-tag">
                    <Shield size={12} />
                    <span>{project.fencingType}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      {activeProject && (
        <div className="project-modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="project-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img-wrap">
              <img src={activeProject.image} alt={activeProject.title} />
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close details"
              >
                ✕
              </button>
            </div>
            <div className="modal-details">
              <span className="modal-category">{activeProject.category} Land Fencing</span>
              <h3 className="modal-title">{activeProject.title}</h3>
              <p className="modal-location">📍 {activeProject.location}</p>
              <p className="modal-desc-full">{activeProject.description}</p>
              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="meta-label">Project Scope:</span>
                  <span className="meta-val">{activeProject.size}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-label">Fencing Material:</span>
                  <span className="meta-val">{activeProject.fencingType}</span>
                </div>
              </div>
              <div className="modal-btn-row">
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="btn btn-primary"
                  style={{ flex: 1, justifyContent: "center" }}
                >
                  Request Similar Fencing
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          background-color: var(--color-bg-light);
        }

        .category-filter-bar {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 44px;
        }

        .cat-filter-btn {
          padding: 8px 20px;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-border);
          background: #ffffff;
          color: var(--color-text-muted);
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .cat-filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        .cat-filter-btn.active {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .project-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-xl);
        }

        .project-image-container {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.08);
        }

        .project-cat-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(15, 23, 42, 0.8);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          backdrop-filter: blur(4px);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(27, 67, 50, 0.75);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.6);
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.85rem;
        }

        .project-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-location-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--color-primary);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .project-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
          margin-bottom: 8px;
          line-height: 1.35;
        }

        .project-desc {
          font-size: 0.88rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .project-specs {
          border-top: 1px dashed var(--color-border);
          padding-top: 12px;
        }

        .spec-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--color-charcoal);
          background: var(--color-bg-light);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        /* Project Modal */
        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .project-modal-box {
          background: #ffffff;
          max-width: 680px;
          width: 100%;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          position: relative;
        }

        .modal-img-wrap {
          position: relative;
          height: 280px;
        }

        .modal-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: rgba(0, 0, 0, 0.7);
          color: #ffffff;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
        }

        .modal-details {
          padding: 28px;
        }

        .modal-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--color-primary);
          background: #ecfdf5;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 10px;
        }

        .modal-title {
          font-size: 1.5rem;
          color: var(--color-charcoal-dark);
          margin-bottom: 6px;
        }

        .modal-location {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-bottom: 16px;
        }

        .modal-desc-full {
          font-size: 0.98rem;
          color: var(--color-charcoal);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .modal-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          background: var(--color-bg-light);
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .meta-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--color-text-muted);
        }

        .meta-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-charcoal-dark);
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .modal-meta-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
