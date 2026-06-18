
# ROLE

You are a senior product designer, staff frontend engineer, design systems architect, and award-winning portfolio creator.

Your task is to design and implement a world-class personal portfolio website for a software engineer.

This is NOT a template portfolio.

This is a premium engineering portfolio that should immediately communicate:

"Systems Engineer. Product Builder. Future Founder."

The portfolio should feel like a product created by someone who understands architecture, scalability, developer experience, distributed systems, and product thinking.

The design should be memorable, intentional, and unique.

Avoid anything that resembles a portfolio template.

---

# PORTFOLIO OWNER

Name:
Olivier Kwizera

Title:
Software Engineer
Backend Engineer
Product Builder

Location:
Kigali, Rwanda

Email:
[placeholder]

GitHub:
[placeholder]

LinkedIn:
[placeholder]

Portfolio Domain:
[placeholder]

---

# PERSONAL STORY

Olivier is a self-taught software engineer with strong experience building backend systems, APIs, full-stack applications, developer tools, and cloud-native software.

He specializes in:

* Go
* TypeScript
* JavaScript
* Rust
* Java
* Spring Boot
* React
* Next.js
* Node.js
* Express
* PostgreSQL
* MongoDB
* Docker
* Linux

His focus is not building simple CRUD apps.

His focus is:

* Software Architecture
* System Design
* Distributed Systems
* Backend Engineering
* Developer Tooling
* Infrastructure
* Product Building
* Open Source

He is currently building:

1. Gonito
   A cloud-native backend framework written in Go.

2. GURA
   A local discovery marketplace connecting buyers and sellers.

His long-term goal is building globally impactful software companies.

---

# CORE MESSAGE

Visitors should immediately understand:

* This engineer builds systems.
* This engineer understands architecture.
* This engineer ships products.
* This engineer can work on real production software.
* This engineer is ambitious.
* This engineer is not another tutorial developer.

---

# TECHNOLOGY STACK

Framework:

* Next.js 15+
* React 19+
* TypeScript (strict mode)

Styling:

* Tailwind CSS v4

Animations:

* Framer Motion

Icons:

* Phosphor Icons React

State:

* React Server Components first
* Minimal client components

Validation:

* Zod

Email:

* Resend

Analytics:

* Vercel Analytics

Deployment:

* Vercel

---

# UI LIBRARIES

Do NOT use:

* shadcn/ui
* Material UI
* Chakra UI
* Ant Design
* Mantine
* Bootstrap
* DaisyUI
* Any prebuilt component library

Build everything from scratch.

Use:

* Tailwind CSS
* Radix UI primitives only when accessibility is needed
* class-variance-authority (CVA)

The design system must be fully custom.

---

# DESIGN PHILOSOPHY

Visual references:

* Linear → spacing and motion
* Stripe → typography hierarchy
* Vercel → polish and refinement
* Raycast → interaction quality

The design must NOT feel like a clone.

Every spacing value, animation, and color decision should feel intentional.

No generic portfolio sections.

No template appearance.

No default Tailwind look.

No obvious AI-generated design patterns.

---

# TYPOGRAPHY

Display Font:
Geist Sans

Body Font:
Inter

Monospace:
Geist Mono

Requirements:

* Strong visual hierarchy
* Large display typography
* Tight heading tracking
* Comfortable body reading width
* Tabular numbers where appropriate
* Excellent readability

Typography should be a major visual feature.

---

# COLOR SYSTEM

Use CSS custom properties.

Background:
# 09090b

Surface:
# 111113

Border:
rgba(255,255,255,0.06)

Text Primary:
# fafafa

Text Muted:
# 71717a

Accent:
# 6366f1

Rules:

* One primary accent color only
* No rainbow gradients
* No excessive glow effects
* Premium dark mode aesthetic
* Minimal but sophisticated

---

# DESIGN SYSTEM

Build custom components:

* Button
* Card
* Badge
* Section
* Container
* Project Card
* Timeline
* Tech Pill
* Code Snippet
* Stat Card

All reusable.

All strongly typed.

All variant-driven via CVA.

---

# ANIMATION SYSTEM

Framer Motion only.

Page transitions:

opacity: 0 -> 1
translateY: 12px -> 0

spring:
stiffness: 80
damping: 20

Cards:

hover scale:
1.02

Section reveals:

staggerChildren:
0.08s

Rules:

* Respect prefers-reduced-motion
* No excessive movement
* No parallax abuse
* No distracting animations

Motion should feel premium.

Not flashy.

---

# WEBSITE STRUCTURE

## HERO

Large statement.

Example structure:

Software Engineer

Building scalable systems,
backend platforms,
and developer tools.

Supporting text explaining expertise.

CTA buttons:

* View Projects
* GitHub
* Contact

Include subtle animated background.

No stock illustrations.

No developer cartoons.

---

## ABOUT

Tell a compelling story.

Focus on:

* Why software
* Why systems
* Why product building

Avoid clichés.

Do not use:

"Passionate developer"

"Love coding"

"Hardworking"

Show evidence through achievements.

---

## FEATURED PROJECTS

The most important section.

Show 3-5 flagship projects only.

For each project include:

* Problem
* Context
* Architecture
* Challenges
* Tradeoffs
* Outcomes
* Tech Stack
* GitHub Link
* Demo Link

Treat every project as a mini case study.

Depth over quantity.

---

## ENGINEERING PHILOSOPHY

Dedicated section.

Topics:

* Simplicity
* Scalability
* Maintainability
* Developer Experience
* System Thinking

Use short statements.

High signal.

No motivational quotes.

---

## TECH STACK

Interactive categorized grid.

Languages:
Go
Rust
TypeScript
Java
Python

Frontend:
React
Next.js
Flutter

Backend:
Go
Spring Boot
Node.js
Express

Databases:
PostgreSQL
MongoDB
Redis

Infrastructure:
Docker
Linux
GitHub Actions

---

## OPEN SOURCE

Show:

* Contributions
* Maintained projects
* Framework work
* Libraries

Emphasize consistency.

---

## GITHUB INTEGRATION

Use GitHub REST API.

Implementation:

* Next.js Route Handlers
* Server-side fetching
* Cache:
  revalidate = 3600

Show:

* Pinned repositories
* Contribution metrics
* Commit activity
* Stars
* Languages

Fallback UI for failures.

The GitHub section should feel alive.

Real data only.

Evidence over claims.

---

## TIMELINE

Journey timeline.

Example:

Started Programming

Full-Stack Development

Backend Engineering

Framework Development

Systems Design

Future Startup Builder

Make it visual.

---

## CONTACT

Professional contact section.

Include:

* Email
* GitHub
* LinkedIn
* Resume Download

Contact Form:

Stack:

* Resend
* Zod
* Next.js API Route

Validation:

Shared schema between frontend and backend.

---

# PERFORMANCE

Requirements:

* Lighthouse 95+
* Accessibility 100
* SEO 100
* Best Practices 100

Optimize:

* Images
* Fonts
* Metadata
* Open Graph
* Structured Data

---

# ACCESSIBILITY

WCAG AA minimum.

Requirements:

* Keyboard navigation
* Focus states
* Screen reader support
* Semantic HTML
* Proper ARIA labels

---

# SEO

Generate:

* Metadata
* Open Graph
* Twitter Cards
* robots.txt
* sitemap.xml

---

# SECURITY

Implement:

* CSP headers
* Secure form handling
* Rate limiting

Rate limiting:

Upstash Redis

Protect contact form from abuse.

---

# FOLDER STRUCTURE

/src
/app
/components
/ui
/sections
/layout
/hooks
/lib
/styles
/types
/content
/config

Use clean architecture.

Avoid deeply nested folders.

---

# NON-GOALS

Do NOT:

* Use shadcn/ui
* Use component libraries
* Use placeholder content
* Use lorem ipsum
* Use stock images
* Use generic project cards
* Use template layouts
* Use CSS-in-JS
* Add unnecessary dependencies

---

# FINAL OBJECTIVE

The finished portfolio should make a recruiter, founder, engineering manager, or startup CTO think:

"This person can build real systems."

"This person understands engineering beyond frameworks."

"This person is worth interviewing."

Generate a complete production-ready codebase with:

* Architecture
* Components
* Design system
* Pages
* Content structure
* Animations
* API integrations
* SEO
* Accessibility
* Performance optimizations
* Deployment configuration
