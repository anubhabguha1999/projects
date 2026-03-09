import "../styles/footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Projects</span>
            <p className="footer-tagline">
              Building the future of the web, one pixel at a time.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#projects">Projects</a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
              </ul>
            </div>

            <div className="footer-link-group">
              <h4>Social</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/anubhabguha1999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/anubhabguha1999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/anubhabguha1999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Projects. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span>Designed with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
