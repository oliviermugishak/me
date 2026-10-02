import { Link } from "react-router";
import Eyebrow from "../components/Eyebrow";
import SectionIndex from "../components/SectionIndex";
import { usePageMetadata } from "../components/usePageMetadata";
import { email, github } from "../constants";

export default function HomePage() {
  usePageMetadata({
    title: "Olivier Mugisha Kwizera — Software Engineer",
    description: "Olivier Mugisha Kwizera is a freelance software engineer in Kigali focused on backend systems, APIs, and infrastructure.",
    socialDescription: "Backend systems, APIs, and infrastructure. Based in Kigali, Rwanda.",
  });

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
            <Link className="button-link" to="/resume">Read my resume <span aria-hidden="true">↗</span></Link>
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
