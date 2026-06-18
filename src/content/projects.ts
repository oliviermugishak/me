import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ridsr",
    title: "RIDSR",
    tagline: "National Disease Surveillance & Response Platform",
    description:
      "A government-grade digital platform for the Rwanda Ministry of Health enabling real-time disease monitoring, outbreak response, and data-driven public health decisions across all 30 districts.",
    problem:
      "Rwanda lacked a unified digital system for health facilities nationwide to report, track, and respond to notifiable disease cases in real time.",
    context:
      "Built for the Rwanda Biomedical Centre (RBC) to connect every health facility into a single surveillance network with role-based access for health workers, district officers, and national coordinators.",
    architecture:
      "Next.js 16 with App Router, MongoDB for case/patient/facility data, NextAuth for JWT-based role access, Socket.io for real-time alerts, and jsPDF for automated PDF report generation.",
    challenges: [
      "Designing a role-based access system with 5 distinct permission levels",
      "Building offline-capable case reporting for facilities with intermittent connectivity",
      "Implementing a validation workflow with lab result integration",
    ],
    tradeoffs: [
      "Chose MongoDB for flexible case data over relational rigidity",
      "Server-side rendering for dashboard performance over client-side convenience",
      "JWT auth over session-based for stateless scaling across districts",
    ],
    outcomes: [
      "Covers all 30 districts across Rwanda's 5 provinces",
      "Real-time case tracking with automated alert escalation",
      "Role-specific dashboards for 5 user types",
    ],
    techStack: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/fireboykm00/ridsr-web",
    demoUrl: "https://ridsr-web.vercel.app",
    featured: true,
  },
  {
    id: "gura",
    title: "GURA",
    tagline: "Local discovery marketplace",
    description:
      "A marketplace platform connecting local buyers and sellers. Features real-time chat, geolocation-based discovery, and a reputation system built from scratch.",
    problem:
      "Existing local marketplaces are either generic or focused on specific verticals. GURA provides a dedicated, modern platform for local commerce.",
    context:
      "Observing friction in local buying and selling, I wanted to build a platform that prioritizes trust, proximity, and user experience.",
    architecture:
      "Microservices architecture with Go backend, React frontend, PostgreSQL for transactions, and Redis for real-time features.",
    challenges: [
      "Implementing real-time chat at scale",
      "Building a reliable geolocation search",
      "Designing a fraud-resistant reputation system",
    ],
    tradeoffs: [
      "Chose microservices over monolith for team scaling",
      "Prioritized eventual consistency in chat over strong consistency",
      "Opted for PostgreSQL over specialized search DB initially",
    ],
    outcomes: [
      "Launched beta in Kigali with 200+ listings",
      "Average response time under 2 seconds",
      "Zero downtime in first 3 months",
    ],
    techStack: ["Go", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    githubUrl: "https://github.com/oliviermugishak/gura",
    featured: true,
  },
  {
    id: "dbi",
    title: "DBI Rwanda",
    tagline: "Digital Business Institute Platform",
    description:
      "A trade and investment platform for the Rwanda ICT Chamber's Digital Business Institute, featuring company certification, an accredited training academy, and a professional network directory.",
    problem:
      "Rwandan ICT companies needed a credible certification system and a centralized platform to showcase verified capabilities and connect with global expertise.",
    context:
      "Built as the capacity-building arm of the Rwanda ICT Chamber to accelerate digitalization of Rwandan businesses and expand digital exports.",
    architecture:
      "Next.js with App Router, Tailwind CSS design system, Framer Motion animations, and a modular component architecture with Radix UI primitives.",
    challenges: [
      "Building a certification workflow with multi-step verification",
      "Designing a scalable directory of verified ICT companies",
      "Integrating an academy platform with professional training pipelines",
    ],
    tradeoffs: [
      "Next.js SSR for SEO-critical public pages over pure SPA",
      "Radix UI for accessible components over fully custom builds",
      "Static generation for directory pages over dynamic rendering",
    ],
    outcomes: [
      "Trust certification program for Rwandan ICT companies",
      "Accredited training academy with professional certifications",
      "Digital Professionals Network connecting local with global expertise",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"],
    githubUrl: "https://github.com/fireboykm00/dbi.rw",
    featured: true,
  },
];
