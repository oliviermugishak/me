"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { techCategories } from "@/content/tech-stack";

const categoryIcons: Record<string, string> = {
  Languages: "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-500/20",
  Frontend: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/20",
  Backend: "bg-gradient-to-br from-violet-500/20 to-violet-600/10 border-violet-500/20",
  Databases: "bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-amber-500/20",
  Infrastructure: "bg-gradient-to-br from-rose-500/20 to-rose-600/10 border-rose-500/20",
};

function TechStack() {
  return (
    <Section id="stack">
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
            Tooling
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Technology Stack
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted mt-3 max-w-lg"
          >
            Languages, frameworks, and infrastructure I work with regularly.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={fadeInUp}
              className={`rounded-xl border p-6 ${
                categoryIcons[category.category] ||
                "bg-bg-surface border-border-primary"
              }`}
            >
              <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export { TechStack };
