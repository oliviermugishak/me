import { email, github } from "../constants";

export default function Footer() {
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
