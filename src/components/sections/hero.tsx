"use client";

import { motion } from "framer-motion";
import { ArrowRight, GithubLogo, Envelope } from "@phosphor-icons/react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/styles/animations";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.08), transparent)`,
        }}
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(ellipse 50% 30% at 80% 80%, rgba(99, 102, 241, 0.04), transparent)`,
        }}
      />
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[1.05] mb-6"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">
              scalable systems
            </span>
            ,<br />
            backend platforms,
            <br />
            and developer tools.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-10"
          >
            I architect and build production software in Go, TypeScript, and
            Rust. Focused on distributed systems, developer tooling, and
            platforms that scale.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight size={18} weight="bold" />
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/olivier"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubLogo size={18} />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#contact">
                <Envelope size={18} />
                Contact
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export { Hero };
