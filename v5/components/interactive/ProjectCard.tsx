"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const gradients = [
    "linear-gradient(145deg, #3a4778, #1b2237)",
    "linear-gradient(145deg, #3f5d74, #15232f)",
    "linear-gradient(145deg, #4f3b75, #1f1835)",
    "linear-gradient(145deg, #4f4e74, #1f2038)",
  ];

  const visual = gradients[project.id % gradients.length];

  return (
    <motion.article
      className="rounded-3xl overflow-hidden"
      style={{
        border: "1px solid var(--line)",
        background: "linear-gradient(180deg, #12192a, #0f1422)",
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-[260px] md:h-[300px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ background: visual }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.45 }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,7,12,0.78))]" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[80%]">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] rounded-full bg-[#0f1423]/75 text-[var(--text)] border border-[#5a6486]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-1">{project.duration}</p>
            <h3 className="text-2xl serif-display leading-[1.05] text-[var(--text)]">
              {project.title}
            </h3>
          </div>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              View
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="p-5 md:p-6">
        <p className="text-[var(--text-muted)] mb-4 leading-relaxed">
          {project.shortDesc}
        </p>

        <p className="text-sm text-[var(--text-muted)]/90 mb-5 leading-relaxed">
          {project.fullDescription}
        </p>

        <div className="flex items-center justify-between gap-3">
          <span className="ghost-chip">{project.role}</span>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              GitHub
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
