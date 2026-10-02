import { Link } from "react-router";
import Eyebrow from "../components/Eyebrow";
import { usePageMetadata } from "../components/usePageMetadata";

export default function NotFoundPage() {
  usePageMetadata({
    title: "Page not found — Olivier Mugisha Kwizera",
    description: "The requested page could not be found.",
    socialDescription: "The requested page could not be found.",
  });

  return (
    <main id="main" className="page-shell inner-page">
      <div className="inner-heading">
        <Eyebrow>Not found</Eyebrow>
        <h1>404<span className="name-period">.</span></h1>
        <p className="inner-deck">That page doesn’t exist.</p>
        <p><Link className="underlined-link" to="/">Return home</Link></p>
      </div>
    </main>
  );
}
