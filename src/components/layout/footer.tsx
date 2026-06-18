import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-primary py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-text-muted hover:text-text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
