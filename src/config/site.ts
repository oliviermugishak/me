export const siteConfig = {
  name: "Olivier Kwizera",
  title: "Software Engineer",
  description:
    "Building scalable systems, backend platforms, and developer tools.",
  url: "https://olivierkwizera.dev",
  location: "Kigali, Rwanda",
  email: "hello@olivierkwizera.dev",
  links: {
    github: "https://github.com/olivier",
    linkedin: "https://linkedin.com/in/olivier",
    twitter: "https://twitter.com/olivier",
  },
  resumeUrl: "/resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
