"use client";

import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.04;

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      {/* Header */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          text="projects"
          className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm"
        />
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 2}
          text="i like to build things"
          className="text-4xl font-bold tracking-tighter sm:text-5xl"
          yOffset={6}
        />
        <BlurFadeText
          delay={BLUR_FADE_DELAY * 3}
          text="I've worked on different projects including web apps, dashboards, and platforms. Each project helped me improve my skills and solve real problems. Here are a few highlights."
          className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-2xl mx-auto"
          yOffset={6}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {DATA.projects.map((project, i) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 4 + i * 0.05}
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
