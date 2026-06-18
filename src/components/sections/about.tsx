"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/styles/animations";

function About() {
  return (
    <Section id="about" size="lg">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 md:gap-20"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Systems-first engineering.
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I started building software because I wanted to understand how
                complex systems work. Not just how to use frameworks, but how
                to design architectures that scale, evolve, and survive
                production.
              </p>
              <p>
                My focus is on backend engineering, distributed systems, and
                developer tooling. I build in Go, Rust, and TypeScript —
                choosing the right tool for each layer of the stack.
              </p>
              <p>
                Currently building Gonito, a cloud-native backend framework in
                Go, and GURA, a local discovery marketplace. Both are
                production systems that solve real problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <div className="rounded-xl border border-border-primary bg-bg-surface p-6">
              <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                {[
                  "Software Architecture & System Design",
                  "Distributed Systems & Backend Engineering",
                  "Developer Tooling & Infrastructure",
                  "Product Building & Open Source",
                ].map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-text-primary">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border-primary bg-bg-surface p-6">
              <h3 className="text-sm font-medium text-text-muted mb-4 uppercase tracking-wider">
                Currently Building
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Gonito", desc: "Cloud-native Go backend framework" },
                  { name: "GURA", desc: "Local discovery marketplace" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-text-primary">
                        {item.name}
                      </span>
                      <span className="text-sm text-text-muted ml-2">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { About };
