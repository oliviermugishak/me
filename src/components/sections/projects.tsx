"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GithubLogo,
  CaretRight,
} from "@phosphor-icons/react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, scaleOnHover } from "@/styles/animations";
import { projects } from "@/content/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      {...scaleOnHover}
      className="group relative rounded-xl border border-border-primary bg-bg-surface p-6 md:p-8"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs text-text-muted font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight mt-1">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted mt-1">{project.tagline}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <GithubLogo size={18} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ArrowUpRight size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-3">
        {project.description}
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Problem
          </h4>
          <p className="text-sm text-text-primary leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
            Architecture
          </h4>
          <p className="text-sm text-text-primary leading-relaxed">
            {project.architecture}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="accent">
            {tech}
          </Badge>
        ))}
      </div>

      <details className="group/details">
        <summary className="flex items-center gap-2 text-sm text-text-muted hover:text-text-primary cursor-pointer transition-colors list-none">
          <CaretRight
            size={14}
            className="transition-transform group-open/details:rotate-90"
            weight="bold"
          />
          <span>Challenges & Tradeoffs</span>
        </summary>
        <div className="mt-4 space-y-4 pl-5">
          <div>
            <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
              Challenges
            </h4>
            <ul className="space-y-1">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="text-sm text-text-primary flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-amber-500 shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
              Tradeoffs
            </h4>
            <ul className="space-y-1">
              {project.tradeoffs.map((tradeoff) => (
                <li
                  key={tradeoff}
                  className="text-sm text-text-primary flex items-start gap-2"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-blue-500 shrink-0" />
                  {tradeoff}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>

      {project.outcomes && (
        <div className="mt-6 pt-6 border-t border-border-primary">
          <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-3">
            Outcomes
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="text-sm text-text-primary bg-white/[0.03] rounded-lg px-3 py-2"
              >
                {outcome}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}

function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
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
            Featured Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-display font-bold tracking-tight"
          >
            Flagship Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-text-muted mt-3 max-w-lg"
          >
            Each project is a case study in architecture, tradeoffs, and
            real-world outcomes.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export { Projects };
