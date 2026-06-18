import { PageTransition } from "@/components/layout/page-transition";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Philosophy } from "@/components/sections/philosophy";
import { TechStack } from "@/components/sections/tech-stack";
import { Timeline } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <About />
      <Projects />
      <Philosophy />
      <TechStack />
      <Timeline />
      <Contact />
    </PageTransition>
  );
}
