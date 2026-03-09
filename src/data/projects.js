// ============================================================
// PROJECT DATA - Add your projects here!
// ============================================================
// To add a new project:
// 1. Add a new object to this array
// 2. Drop screenshots in src/assets/<project-id>/
// 3. Import them and add to the screenshots array
// ============================================================

// Example screenshot imports:
import gitReviewerScreen1 from '../assets/git-code-reviewer/screenshot1.png'
import gitReviewerScreen2 from '../assets/git-code-reviewer/screenshot2.png'
import prGeneratorImg from '../assets/pr-generator/image.png'
import forgeImg1 from '../assets/forge-developers/image.png'
import forgeImg2 from '../assets/forge-developers/image copy.png'
import forgeImg3 from '../assets/forge-developers/image copy 2.png'
import ytDownloaderImg1 from '../assets/youtube-downloader/image.png'
import ytDownloaderImg2 from '../assets/youtube-downloader/image copy.png'
import ytDownloaderImg3 from '../assets/youtube-downloader/image copy 2.png'

export const projects = [
  {
    id: "git-code-reviewer",
    title: "GIT Code Reviewer",
    description: "A Chrome extension that performs static code analysis directly on GitHub, providing real-time code quality scores and improvement suggestions.",
    longDescription: "GIT Code Reviewer is a powerful Chrome extension that integrates seamlessly with GitHub to analyze your code in real-time. It uses Babel AST parsing for JavaScript/TypeScript and regex-based analysis for Python to detect complexity issues, security vulnerabilities, style violations, and performance bottlenecks. Features include a beautiful side panel UI with health scoring, dark/light themes, and export capabilities.",
    tech: ["React", "TypeScript", "Vite", "Babel AST", "Chrome Extension", "Framer Motion"],
    screenshots: [gitReviewerScreen1, gitReviewerScreen2],
    github: "https://github.com/anubhabguha1999/git-code-reviewer",
    live: "",
    featured: true,
    color: "#6c5ce7",
  },
  {
    id: "pr-generator",
    title: "Automated AI PR Reviewer",
    description: "Automated code review system using OpenAI GPT-4o, BullMQ, and AST parsing for deep architectural insights.",
    longDescription: "A highly scalable backend service that automatically triggers reviews on GitHub Pull Requests. It combines Babel AST parsing for structural code analysis with OpenAI GPT-4o for nuanced architectural feedback. The system is built on a resilient worker-queue architecture using Redis and BullMQ to handle large-scale analysis without degrading performance. Key features include quality scoring (0-100), technical debt detection, and insightful performance optimization suggestions delivered directly as PR comments.",
    features: [
      "Automated PR Reviews: Triggers on pull_request opened/synchronize events.",
      "AST Parsing: Uses @babel/parser to detect complex patterns.",
      "AI Insights: OpenAI GPT-4o integration for architectural feedback.",
      "Scalable: BullMQ & Redis for background processing.",
      "Quality Scoring: 0–100 scoring system based on detected issues."
    ],
    architecture: [
      "Webhook Handler: Receives events from GitHub.",
      "Redis Job Queue: Decouples heavy processing.",
      "Worker Service: Processes code analysis asynchronously.",
      "GitHub Service: Handles file retrieval and commenting.",
      "Database: MongoDB stores review results and historical scores."
    ],
    tech: ["Node.js", "GPT-4o", "BullMQ", "Redis", "MongoDB", "Babel AST"],
    screenshots: [prGeneratorImg],
    github: "https://github.com/anubhabguha1999/pr-generator",
    live: "",
    featured: true,
    color: "#4b7bec",
  },
  {
    id: "forge-developers",
    title: "Forge Developers",
    description: "A comprehensive DevTools SaaS platform featuring Postman-like API testing controls and developer productivity suites.",
    longDescription: "Forge Developers is a professional SaaS environment designed to centralize developer workflows. Its core feature is a robust API Request Builder with Postman-like controls, allowing developers to execute GET, POST, PUT, and DELETE requests, manage complex headers, and inspect JSON responses in a structured environment. Built with a focus on modern UX, it serves as a central hub for testing and managing API-driven applications.",
    features: [
      "API Tester: Full request/response lifecycle management similar to Postman.",
      "Custom Headers: Dynamic header injection for authenticated requests.",
      "Response Visualization: Pretty-printed JSON response viewer.",
      "Workspace History: Keep track of all your past requests and configurations.",
      "SaaS Ready: Designed with scalability and user multitenancy in mind."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Clerk"],
    screenshots: [forgeImg1, forgeImg2, forgeImg3],
    github: "https://github.com/anubhabguha1999/devtools-saas",
    live: "https://forge-developers.vercel.app/",
    featured: true,
    color: "#00cec9",
  },
  {
    id: "youtube-downloader-pro",
    title: "YouTube Downloader Pro",
    description: "A high-performance video downloader capable of fetching 4K content and converting media with ease.",
    longDescription: "YouTube Downloader Pro is a robust, full-stack application designed for high-resolution video retrieval. It features an intuitive dashboard where users can input YouTube URLs, select from multiple resolutions (up to 4K), and extract high-quality MP3 audio. The application utilizes advanced stream processing to ensure fast downloads and integrates with a clean, responsive UI for an optimal user experience across all devices.",
    features: [
      "4K Video Support: Download videos in the highest available quality.",
      "MP3 Extraction: High-bitrate audio conversion for playlists and single tracks.",
      "Batch Processing: Efficient handling of multiple download requests.",
      "Real-time Progress: Live status tracking for all active downloads.",
      "Responsive UI: Seamless experience on mobile and desktop browsers."
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "ffmpeg"],
    screenshots: [ytDownloaderImg1, ytDownloaderImg2, ytDownloaderImg3],
    github: "https://github.com/anubhabguha1999/youtube-downloader-pro",
    live: "https://youtube-downloader-pro-psi.vercel.app/",
    featured: true,
    color: "#ff0000",
  },
]

export function getProjectById(id) {
  return projects.find(p => p.id === id)
}
