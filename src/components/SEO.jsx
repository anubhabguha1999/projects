import { useEffect } from "react";

export default function SEO({ title, description, keywords, image, url }) {
  useEffect(() => {
    // Update title
    document.title = title
      ? `${title} | Anubhab Guha`
      : "Anubhab Guha | Software Engineer & 3D Portfolio";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        description ||
          "Portfolio of Anubhab Guha, a Software Engineer specializing in high-performance web applications and 3D experiences.",
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        keywords ||
          "Anubhab Guha, Software Engineer, React Developer, Three.js, AI Developer",
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle)
      ogTitle.setAttribute(
        "content",
        title || "Anubhab Guha | Software Engineer & 3D Portfolio",
      );

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription)
      ogDescription.setAttribute(
        "content",
        description || "Explore the projects of Anubhab Guha.",
      );

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", url || window.location.href);

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute("content", image);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]',
    );
    if (twitterTitle)
      twitterTitle.setAttribute(
        "content",
        title || "Anubhab Guha | Software Engineer & 3D Portfolio",
      );

    const twitterDescription = document.querySelector(
      'meta[property="twitter:description"]',
    );
    if (twitterDescription)
      twitterDescription.setAttribute(
        "content",
        description || "Explore the projects of Anubhab Guha.",
      );

    if (image) {
      const twitterImage = document.querySelector(
        'meta[property="twitter:image"]',
      );
      if (twitterImage) twitterImage.setAttribute("content", image);
    }

    // Update Canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url || window.location.href);
  }, [title, description, keywords, image, url]);

  return null;
}
