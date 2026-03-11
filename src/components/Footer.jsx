import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-bg-text">ANUBHAB</div>
      
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Anubhab<span>.</span>
            </Link>
            <p className="footer-description">
              Digital product designer and full-stack developer based in India. 
              Specializing in building high-performance web applications with 
              premium user experiences.
            </p>
            <div className="footer-contact">
              <a href="mailto:anubhabguha19@gmail.com" className="footer-email">
                anubhabguha19@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-group">
              <h4 className="footer-nav-title">Navigation</h4>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><a href="/#projects">Projects</a></li>
                <li><Link to="/about">About Me</Link></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4 className="footer-nav-title">Social</h4>
              <ul className="footer-nav-list">
                <li>
                  <a href="https://github.com/anubhabguha1999" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/anubhab-guha-478967201/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/anubhabguha" target="_blank" rel="noopener noreferrer">
                    Twitter / X
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} Anubhab Guha. Crafted with precision.</p>
          </div>
          
          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
            <span>Back to top</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
