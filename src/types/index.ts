export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  context: string;
  architecture: string;
  challenges: string[];
  tradeoffs: string[];
  outcomes: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "milestone" | "achievement";
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
