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

]

export function getProjectById(id) {
  return projects.find(p => p.id === id)
}
