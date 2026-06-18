"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, Check } from "@phosphor-icons/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { siteConfig } from "@/config/site";

function Contact() {
  const [state, setState] = useState<"idle" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setState("sent");
        form.reset();
      }
    } catch {
      // silently fail, show a message
    }
  };

  return (
    <Section id="contact">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4 block"
          >
            Get in Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Contact
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted mt-3 max-w-lg"
          >
            Have a project, opportunity, or just want to talk systems?
            Reach out.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="rounded-xl border border-border-primary bg-bg-surface p-6">
              <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-text-muted block">Email</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-text-primary hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-text-muted block">
                    Location
                  </span>
                  <span className="text-sm text-text-primary">
                    {siteConfig.location}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-text-muted block">Links</span>
                  <div className="flex gap-4 mt-1">
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-primary hover:text-accent transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-primary hover:text-accent transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            {state === "sent" ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
                <Check
                  size={32}
                  className="text-emerald-500 mx-auto mb-4"
                  weight="duotone"
                />
                <h3 className="text-lg font-display font-semibold mb-2">
                  Message sent
                </h3>
                <p className="text-sm text-text-muted">
                  Thanks for reaching out. I&apos;ll respond within 24 hours.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                  onClick={() => setState("idle")}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-muted mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border-primary bg-bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-muted mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border-primary bg-bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-muted mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border-primary bg-bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <PaperPlaneTilt size={16} weight="bold" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { Contact };
