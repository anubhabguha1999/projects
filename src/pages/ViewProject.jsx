import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getProjectById } from "../data/projects";
import ParticleField from "../components/ParticleField";
import SEO from "../components/SEO";
import "../styles/view-project.css";

export default function ViewProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectById(id);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate("/");
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="view-project">
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.title}, ${project.tech.join(", ")}, Anubhab Guha`}
        image={project.screenshots?.[0]}
      />
      <ParticleField />

      <div className="view-project-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="back-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to projects
          </Link>
        </motion.div>

        <header className="project-hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-description">
              {project.longDescription || project.description}
            </p>

            <div className="project-tech-stack">
              {project.tech.map((t) => (
                <span key={t} className="project-tech-badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github &&
                (project.isPrivate ? (
                  <a
                    href={`mailto:your.email@example.com?subject=Request Access to Project: ${project.title}`}
                    className="project-link project-link-secondary"
                    title="This repository is private. Click to request access."
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    Request Access
                  </a>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-secondary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                ))}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-primary"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </header>

        <section className="project-details-grid">
          <motion.div
            className="project-main-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="detail-card">
              <h3>About the project</h3>
              <p>{project.longDescription || project.description}</p>
            </div>

            {project.features && (
              <div className="detail-card">
                <h3>Key Features</h3>
                <ul className="detail-list">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.architecture && (
              <div className="detail-card">
                <h3>Architecture</h3>
                <ul className="detail-list">
                  {project.architecture.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </section>

        <section className="screenshots-section">
          <motion.h2
            className="screenshots-title"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Project Gallery
          </motion.h2>

          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="screenshots-grid">
              {project.screenshots.map((screen, index) => (
                <motion.div
                  key={index}
                  className="screenshot-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedImage(screen)}
                >
                  <img
                    src={screen}
                    alt={`${project.title} screenshot ${index + 1}`}
                  />
                  <div className="screenshot-overlay">
                    <div className="screenshot-overlay-icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div
              className="placeholder-frame"
              style={{
                borderColor: project.color,
                padding: "60px",
                textAlign: "center",
                borderRadius: "12px",
                border: "2px dashed var(--border)",
              }}
            >
              <p style={{ color: "var(--text-secondary)" }}>
                Screenshots for this project will appear here.
              </p>
            </div>
          )}
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Project screenshot full view"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
