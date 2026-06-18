export const siteConfig = {
  name: "Olivier Mugisha K",
  fullName: "KWIZERA MUGISHA OLIVIER",
  title: "Software Development Student",
  description:
    "Building practical projects, learning backend systems, and growing as a developer.",
  url: "https://olivierkwizera.dev",
  location: "Kigali, Rwanda",
  email: "kwizeramugishaolivier0@gmail.com",
  phone: "+250 796 003 228",
  links: {
    github: "https://github.com/oliviermugishak",
  },
  resumeUrl: "/resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
