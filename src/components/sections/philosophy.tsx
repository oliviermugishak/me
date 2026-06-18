"use client";

import { motion } from "framer-motion";
import {
  Cube,
  ArrowsOut,
  Wrench,
  Cursor,
  Brain,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/styles/animations";

const principles = [
  {
    icon: Cube,
    title: "Simplicity",
    description:
      "Simple systems are easier to reason about, debug, and extend. I optimize for clarity before performance — then optimize for real bottlenecks.",
  },
  {
    icon: ArrowsOut,
    title: "Scalability",
    description:
      "Scale is a property of architecture, not code. I design systems that can grow horizontally, fail gracefully, and maintain predictable performance.",
  },
  {
    icon: Wrench,
    title: "Maintainability",
    description:
      "Code is read far more often than written. I prioritize clean interfaces, comprehensive testing, and documentation that explains why, not what.",
  },
  {
    icon: Cursor,
    title: "Developer Experience",
    description:
      "Great DX is a force multiplier. I build tools and systems that respect developers' time — fast feedback loops, clear errors, and sensible defaults.",
  },
  {
    icon: Brain,
    title: "System Thinking",
    description:
      "Every component exists within a larger system. I consider data flow, failure modes, operational load, and business impact before writing a single line.",
  },
];

function Philosophy() {
  return (
    <Section id="philosophy">
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
            Engineering Principles
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Engineering Philosophy
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                variants={fadeInUp}
                className="rounded-xl border border-border-primary bg-bg-surface p-6 group hover:border-accent/30 transition-colors"
              >
                <Icon
                  size={24}
                  className="text-accent mb-4"
                  weight="duotone"
                />
                <h3 className="text-lg font-display font-semibold tracking-tight mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}

export { Philosophy };
