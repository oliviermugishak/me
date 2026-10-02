import Eyebrow from "../components/Eyebrow";
import EntryHeading from "../components/EntryHeading";
import ResumeSection from "../components/ResumeSection";
import { usePageMetadata } from "../components/usePageMetadata";
import { email, github } from "../constants";

export default function ResumePage() {
  usePageMetadata({
    title: "Resume — Olivier Mugisha Kwizera",
    description: "Read Olivier Mugisha Kwizera's software engineering resume, including freelance experience, selected projects, skills, and languages.",
    socialDescription: "Freelance software engineer focused on backend, data, and infrastructure work.",
  });

  return (
    <main id="main" className="page-shell inner-page resume-main">
      <div className="resume-topline">
        <div className="inner-heading resume-heading">
          <Eyebrow>Experience &amp; selected work <span className="eyebrow-divider">/</span> 03</Eyebrow>
          <h1>Resume<span className="name-period">.</span></h1>
        </div>
        <button className="print-button" type="button" onClick={() => window.print()}>Print / Save as PDF <span aria-hidden="true">↗</span></button>
      </div>
      <div className="resume-contact">
        <span>Kigali, Rwanda</span>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={github} target="_blank" rel="noopener noreferrer">github.com/oliviermugishak</a>
      </div>
      <div className="resume-content">
        <ResumeSection id="summary-title" label="Summary">
          <p>Freelance software engineer in Kigali, Rwanda, building backend and full-stack applications. My work includes API design, access control, relational databases, Linux, containers, and deployment workflows. I’m looking for an early-career software engineering role focused on backend, data, or infrastructure work.</p>
        </ResumeSection>
        <ResumeSection id="experience-title" label="Experience">
          <EntryHeading title="Freelance Software Engineer" subtitle="Individuals and businesses · Kigali, Rwanda" date="2023–present" />
          <ul className="resume-bullets">
            <li>Build backend services and REST APIs for client work and personal products using Rust, Go, Python, and SQL databases.</li>
            <li>Implement authentication, role-based permissions, relational schemas, and versioned database migrations.</li>
            <li>Prepare Linux and Docker development environments and CI workflows with GitHub Actions; document setup and deployment steps.</li>
          </ul>
        </ResumeSection>
        <ResumeSection id="projects-resume-title" label="Selected projects">
          <div className="resume-projects">
            <article className="resume-project">
              <EntryHeading title="Phantom" href="https://github.com/oliviermugishak/phantom" subtitle="Author · Rust · Linux · Waydroid" date="Open source · MIT" />
              <p>An open-source utility that maps Linux keyboard and mouse input to Android touch events in Waydroid. A Rust host daemon reads evdev input, JSON profiles define the controls, and an Android-side app_process service injects touch and unused-key events. The older uinput path remains as a fallback.</p>
            </article>
            <article className="resume-project">
              <EntryHeading title="Tuma Delivery System" href="https://github.com/oliviermugishak/tuma-delivery-system" subtitle="Rust · Axum · SQLx · PostgreSQL · Flutter" date="In development · V0 skeletons" />
              <p>A delivery-system monorepo containing a Rust/Axum server, PostgreSQL setup, Flutter customer app, web platform, and product and engineering documentation. The repository README labels the server and customer app as V0 skeletons.</p>
            </article>
          </div>
        </ResumeSection>
        <ResumeSection id="skills-resume-title" label="Selected skills">
          <div className="skill-groups">
            <p><strong>Languages</strong><span>Rust, Go, Python, TypeScript, JavaScript, SQL</span></p>
            <p><strong>Backend &amp; data</strong><span>REST APIs, Node.js, PostgreSQL, MySQL, relational design, schema migrations</span></p>
            <p><strong>Systems &amp; delivery</strong><span>Linux, Docker, Docker Compose, Nginx, Git, GitHub Actions, CI/CD</span></p>
            <p><strong>Frontend</strong><span>React, Next.js, Flutter</span></p>
          </div>
        </ResumeSection>
        <ResumeSection id="languages-title" label="Languages" className="resume-languages">
          <p>English · Kinyarwanda · French</p>
        </ResumeSection>
      </div>
    </main>
  );
}
