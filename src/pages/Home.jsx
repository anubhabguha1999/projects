import { useRef } from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import SEO from "../components/SEO";
import "../styles/home.css";

export default function Home() {
  const projectsRef = useRef(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <main className="home-page">
      <SEO
        title="Home"
        description="Software Engineer specializing in high-performance web applications, 3D interactive experiences, and AI-powered tools."
        keywords="Anubhab Guha, Software Engineer, React Developer, Three.js, AI Developer, Full Stack Developer, Portfolio"
      />
      <div className="home-bg-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <Hero />

      <section id="projects" className="projects-section" ref={projectsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">
              A collection of digital products and experiments I've built
              lately.
            </p>
          </motion.div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <motion.div
                className="section-header mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="section-title-sm">More Projects</h3>
              </motion.div>
              <div className="projects-grid">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={featuredProjects.length + index}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Have a project in mind?</h2>
            <p>I'm always open to new collaborations and exciting ideas.</p>
            <a href="mailto:your.email@example.com" className="cta-btn">
              Get in touch
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
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
