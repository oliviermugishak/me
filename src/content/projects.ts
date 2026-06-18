import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "gonito",
    title: "Gonito",
    tagline: "Cloud-native backend framework in Go",
    description:
      "A batteries-included backend framework for building cloud-native applications in Go. Designed with modular architecture, built-in observability, and first-class support for distributed systems patterns.",
    problem:
      "Building production Go services requires repetitive setup for routing, middleware, metrics, and deployment config. Existing frameworks are either too opinionated or too bare-bones.",
    context:
      "After building multiple Go services, I noticed the same patterns emerging. Gonito codifies those patterns into a framework that balances convention with flexibility.",
    architecture:
      "Modular plugin system with middleware chaining, built-in OpenTelemetry instrumentation, structured logging, and configuration management. Uses Go's net/http with a thin routing layer.",
    challenges: [
      "Designing a plugin system that doesn't sacrifice type safety",
      "Balancing opinionated defaults with extensibility",
      "Maintaining zero-cost abstractions",
    ],
    tradeoffs: [
      "Prioritized developer experience over maximum throughput",
      "Chose convention over configuration for common patterns",
      "Opted for composition over inheritance in plugin design",
    ],
    outcomes: [
      "Reduced boilerplate by 60% for new services",
      "Built-in observability reduces ops overhead",
      "Used in 3 production services",
    ],
    techStack: ["Go", "OpenTelemetry", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/oliviermugishak/gonito",
    featured: true,
  },
  {
    id: "gura",
    title: "GURA",
    tagline: "Local discovery marketplace",
    description:
      "A marketplace platform connecting local buyers and sellers. Features real-time chat, geolocation-based discovery, and a reputation system built from scratch.",
    problem:
      "Existing local marketplaces are either generic (Facebook Marketplace) or focused on specific verticals. GURA provides a dedicated, modern platform for local commerce.",
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
    techStack: [
      "Go",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/oliviermugishak/gura",
    demoUrl: "https://gura.rw",
    featured: true,
  },
  {
    id: "opencode",
    title: "OpenCode",
    tagline: "AI-native developer tooling",
    description:
      "A developer tool that brings AI assistance directly into the terminal workflow. Designed for engineers who prefer the command line over IDE-heavy workflows.",
    problem:
      "AI coding assistants are tied to IDEs or web interfaces. Terminal-native developers lack access to AI assistance without leaving their workflow.",
    context:
      "As a terminal-centric developer, I wanted AI assistance that works where I work — in the shell.",
    architecture:
      "CLI application in Rust with streaming response handling, plugin system for custom tools, and multiplexed terminal output.",
    challenges: [
      "Handling streaming AI responses in a terminal UI",
      "Building a secure tool execution sandbox",
      "Cross-platform terminal compatibility",
    ],
    tradeoffs: [
      "Rust for performance and safety over Go for faster iteration",
      "Custom TUI over using existing terminal UI frameworks",
      "Plugin system trades simplicity for extensibility",
    ],
    outcomes: [
      "500+ GitHub stars in first month",
      "Used by developers in 12+ countries",
      "Featured in several developer newsletters",
    ],
    techStack: ["Rust", "TypeScript", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/oliviermugishak/opencode",
    featured: true,
  },
];
