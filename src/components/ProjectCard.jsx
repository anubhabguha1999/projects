import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/project-card.css";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate relative mouse position (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Convert to rotation values (-15 to 15 degrees)
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-perspective"
    >
      <Link
        to={`/view-project/${project.id}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 ? "all 0.5s ease-out" : "none",
          display: "block",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div className="project-card-image">
          {project.screenshots?.[0] ? (
            <img src={project.screenshots[0]} alt={project.title} />
          ) : (
            <div
              className="project-card-placeholder"
              style={{
                backgroundColor: project.color,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontWeight: "700", color: "white" }}>
                {project.title}
              </span>
            </div>
          )}
          <div className="project-card-image-overlay" />
          {project.featured && (
            <div className="project-card-featured">Featured</div>
          )}
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>

          <div className="project-card-tags">
            {project.tech.slice(0, 3).map((tag) => (
              <span key={tag} className="project-card-tag">
                {tag}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="project-card-tag">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <div className="project-card-arrow">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        <div
          className="project-card-glare"
          style={{
            background: `radial-gradient(circle at ${(rotate.y / 20) * 50 + 50}% ${(rotate.x / -20) * 50 + 50}%, rgba(255, 255, 255, 0.1) 0%, transparent 80%)`,
          }}
        />
      </Link>
    </motion.div>
  );
}
