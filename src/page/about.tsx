import { Link } from "react-router";
import Eyebrow from "../components/Eyebrow";
import { usePageMetadata } from "../components/usePageMetadata";
import { email, github } from "../constants";

export default function AboutPage() {
  usePageMetadata({
    title: "About — Olivier Mugisha Kwizera",
    description: "Learn about Olivier Mugisha Kwizera's freelance software engineering work in Kigali and his focus on backend systems, APIs, and infrastructure.",
    socialDescription: "Freelance software engineer in Kigali, Rwanda, focused on backend systems, APIs, and infrastructure.",
  });

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
            <Link className="button-link" to="/resume">Read my resume <span aria-hidden="true">↗</span></Link>
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
