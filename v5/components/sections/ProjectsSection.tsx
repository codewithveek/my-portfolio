"use client";

import { useStackingEffect } from "@/hooks/useStackingEffect";
import { ProjectCard } from "@/components/interactive/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectsSectionProps {
  index: number;
  totalSections: number;
}

export function ProjectsSection({
  index,
  totalSections,
}: ProjectsSectionProps) {
  const { ref, style } = useStackingEffect({ index, totalSections });

  const storyCards = [
    "Work featured in design showcases and communities.",
    "Where I learned the discipline and chaos of design.",
    "Catching the latest trends and UX events.",
    "From startups to scale-ups, I leave a product footprint.",
    "Passion projects in emerging spaces.",
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="container mx-auto"
      style={{
        ...style,
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="section-panel">
        <div className="section-heading">
          <h2 className="section-title">Selected projects</h2>
          <div className="section-rule" />
        </div>

        <p className="kicker mb-4">Swipe to explore highlights</p>

        <div className="tilt-track mb-10">
          {storyCards.map((copy, index) => (
            <motion.article
              key={copy}
              className="tilt-card"
              initial={{ opacity: 0, y: 18, rotate: index % 2 === 0 ? -5 : 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? -5 : 5,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2) }}
            >
              <div className="tilt-card-media" />
              <p className="serif-display text-[28px] leading-[1.05] text-[var(--text)]">
                {copy}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
