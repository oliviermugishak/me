import type { ComponentType, ReactNode } from "react";

type SitePage = "home" | "about" | "resume";

const email = "kwizeramugishaolivier0@gmail.com";
const github = "https://github.com/oliviermugishak";

function Header({ activePage }: { activePage: SitePage }) {
  const navItems: { label: string; href: string; page: SitePage }[] = [
    { label: "Home", href: "/", page: "home" },
    { label: "About", href: "/about.html", page: "about" },
    { label: "Resume", href: "/resume.html", page: "resume" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Olivier Mugisha Kwizera, home">
          <span>OMK</span><span className="brand-period">.</span>
        </a>
        <nav aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.page}
              href={item.href}
              aria-current={activePage === item.page ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer page-shell">
      <span>Olivier Mugisha Kwizera <span className="brand-period">·</span> Kigali, Rwanda</span>
      <div className="footer-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href={`mailto:${email}`}>Email <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}

function SiteLayout({ activePage, children }: { activePage: SitePage; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </>
  );
}

function SectionIndex({ number, children }: { number: string; children: ReactNode }) {
  return <p className="section-index">{number} <span>/</span> {children}</p>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" aria-hidden="true" />
      {children}
    </p>
  );
}

function HomePage() {
  return (
    <main id="main">
      <section className="home-hero page-shell" aria-labelledby="hero-title">
        <div className="hero-main">
          <Eyebrow>Software Engineer <span className="eyebrow-divider">/</span> Kigali, Rwanda</Eyebrow>
          <h1 id="hero-title" className="hero-name">
            <span>Olivier</span><span>Mugisha</span>
            <span className="name-accent">Kwizera<span className="name-period">.</span></span>
          </h1>
          <p className="hero-role">Backend systems, APIs &amp; infrastructure.</p>
          <p className="hero-intro">I freelance in Kigali, building backend and full-stack applications for client work and personal products. My work spans API design, access control, relational databases, Linux, containers, and deployment workflows.</p>
          <div className="hero-actions">
            <a className="button-link" href="/resume.html">Read my resume <span aria-hidden="true">↗</span></a>
            <a className="underlined-link" href={`mailto:${email}`}>Email me</a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Contact details">
          <p className="aside-label">A little context</p>
          <dl className="profile-list">
            <div><dt>Based in</dt><dd>Kigali, Rwanda</dd></div>
            <div><dt>Focus</dt><dd>Backend systems<br />APIs &amp; infrastructure</dd></div>
            <div><dt>Contact</dt><dd><a href={`mailto:${email}`}>Send an email <span aria-hidden="true">↗</span></a></dd></div>
            <div><dt>Code</dt><dd><a href={github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></dd></div>
          </dl>
        </aside>
        <div className="hero-index" aria-hidden="true"><span>01</span> / 03</div>
      </section>

      <section className="content-section page-shell" aria-labelledby="projects-title">
        <div className="section-heading">
          <SectionIndex number="01">Selected work</SectionIndex>
          <h2 id="projects-title">Projects</h2>
          <p className="section-note">A closer look at the systems I’ve been building.</p>
        </div>
        <div className="project-list">
          <article className="project-row">
            <p className="project-number" aria-label="Project 1">01</p>
            <div className="project-copy">
              <div className="project-title-line">
                <h3>Phantom</h3>
                <span className="project-status"><span className="status-dot" aria-hidden="true" />Open source · MIT</span>
              </div>
              <p>A Rust/Linux utility that maps keyboard and mouse input to Android touch events in Waydroid. A Linux host daemon captures input, JSON profiles define the controls, and an Android-side service injects the events.</p>
              <p className="project-contribution"><span>Contribution</span> Author</p>
            </div>
            <div className="project-meta">
              <p>Rust · Linux · Waydroid</p>
              <a className="repo-link" href="https://github.com/oliviermugishak/phantom" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article className="project-row">
            <p className="project-number" aria-label="Project 2">02</p>
            <div className="project-copy">
              <div className="project-title-line">
                <h3>Tuma Delivery System</h3>
                <span className="project-status">In development · V0 skeletons</span>
              </div>
              <p>A delivery-system monorepo with a Rust/Axum server, PostgreSQL setup, Flutter customer app, web platform, and product and engineering documentation. The README labels the server and customer app as V0 skeletons.</p>
            </div>
            <div className="project-meta">
              <p>Rust · Axum · PostgreSQL · Flutter</p>
              <a className="repo-link" href="https://github.com/oliviermugishak/tuma-delivery-system" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="skills-band" aria-labelledby="skills-title">
        <div className="page-shell skills-inner">
          <div>
            <SectionIndex number="02">Selected skills</SectionIndex>
            <h2 id="skills-title">Tools I work with</h2>
          </div>
          <p className="skills-line">Rust <span>·</span> Go <span>·</span> Python <span>·</span> TypeScript <span>·</span> SQL <span>·</span> REST APIs <span>·</span> PostgreSQL <span>·</span> Linux <span>·</span> Docker <span>·</span> CI/CD</p>
        </div>
      </section>

      <section className="contact-section page-shell" aria-labelledby="contact-title">
        <SectionIndex number="03">Get in touch</SectionIndex>
        <div className="contact-bottom">
          <h2 id="contact-title">Have a role or<br />project in mind?</h2>
          <a className="contact-email" href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}

function AboutPage() {
  return (
    <main id="main" className="page-shell inner-page">
      <div className="inner-heading">
        <Eyebrow>A little about me <span className="eyebrow-divider">/</span> 02</Eyebrow>
        <h1>About<span className="name-period">.</span></h1>
        <p className="inner-deck">Software engineer based in Kigali, Rwanda.</p>
      </div>
      <div className="about-layout">
        <div className="about-copy">
          <p className="about-lead">I’m a freelance software engineer working with individuals and businesses in Kigali. Since 2023, I’ve built backend and full-stack applications for client work and personal products.</p>
          <p>My work includes API design, access control, relational databases, and the Linux, container, and CI workflows used to run and maintain software. I’m looking for an early-career engineering role focused on backend, data, or infrastructure work.</p>
          <p>Alongside freelance work, I’m the author of <a href="https://github.com/oliviermugishak/phantom" target="_blank" rel="noopener noreferrer">Phantom</a>, an open-source Rust/Linux utility for mapping keyboard and mouse input to Android touch events in Waydroid. It connects Linux input capture and profile-based controls to an Android-side event injector.</p>
          <p>I’m interested in the engineering behind software: clear APIs, reliable access rules, data that stays structured, and systems that connect across operating environments.</p>
          <div className="about-actions">
            <a className="button-link" href="/resume.html">Read my resume <span aria-hidden="true">↗</span></a>
            <a className="underlined-link" href={`mailto:${email}`}>Get in touch</a>
          </div>
        </div>
        <aside className="about-aside" aria-label="Profile">
          <div className="aside-note"><span className="aside-label">01 / Location</span><p>Kigali<br />Rwanda</p></div>
          <div className="aside-note"><span className="aside-label">02 / Work</span><p>Freelance software engineering<br />2023–present</p></div>
          <div className="aside-note"><span className="aside-label">03 / Links</span><p><a href={github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a><br /><a href={`mailto:${email}`}>Email <span aria-hidden="true">↗</span></a></p></div>
        </aside>
      </div>
    </main>
  );
}

function ResumeSection({
  id,
  label,
  children,
  className = "",
}: {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`resume-section ${className}`.trim()} aria-labelledby={id}>
      <h2 id={id} className="resume-label">{label}</h2>
      <div className="resume-detail">{children}</div>
    </section>
  );
}

function EntryHeading({
  title,
  href,
  subtitle,
  date,
}: {
  title: string;
  href?: string;
  subtitle: string;
  date?: string;
}) {
  return (
    <div className="resume-entry-heading">
      <div>
        <h3>{href ? <a href={href} target="_blank" rel="noopener noreferrer">{title} <span className="external-mark" aria-hidden="true">↗</span></a> : title}</h3>
        <p className="entry-place">{subtitle}</p>
      </div>
      {date && <p className="entry-date">{date}</p>}
    </div>
  );
}

function ResumePage() {
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

const pages: Record<SitePage, ComponentType> = {
  home: HomePage,
  about: AboutPage,
  resume: ResumePage,
};

export default function App({ page }: { page: SitePage }) {
  const Page = pages[page];

  return (
    <SiteLayout activePage={page}>
      <Page />
    </SiteLayout>
  );
}
