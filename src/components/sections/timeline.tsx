"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { fadeInUp, staggerContainer } from "@/styles/animations";
import { timeline } from "@/content/timeline";

function Timeline() {
  return (
    <Section id="timeline">
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
            Journey
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Engineering Timeline
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-primary md:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex md:w-1/2 justify-end">
                  {index % 2 !== 0 && (
                    <div className="text-right">
                      <span className="text-xs font-mono text-accent mb-1 block">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-display font-semibold tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm text-text-muted mt-2 max-w-md ml-auto">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
                  <div
                    className={`w-3 h-3 rounded-full border-2 ${
                      event.type === "milestone"
                        ? "bg-accent border-accent"
                        : "bg-bg-primary border-text-muted"
                    }`}
                  />
                </div>

                <div className="md:hidden pl-10">
                  <span className="text-xs font-mono text-accent mb-1 block">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-display font-semibold tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-2">
                    {event.description}
                  </p>
                </div>

                <div className="hidden md:w-1/2 md:block">
                  {index % 2 === 0 && (
                    <div>
                      <span className="text-xs font-mono text-accent mb-1 block">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-display font-semibold tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm text-text-muted mt-2 max-w-md">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export { Timeline };
