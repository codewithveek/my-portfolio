"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { containerVariants, slideUpVariant } from "./motionVariants";

export default function BrutalProjects() {
  const featured = projects.slice(0, 3);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="projects"
        className="space-y-4"
        variants={slideUpVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-black uppercase">Selected Builds</h2>
        <p className="font-semibold text-sm md:text-base">
          Product and engineering work spanning fintech, e-commerce, and real
          estate use cases.
        </p>
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((project) => (
            <motion.article
              key={project.id}
              className="border-[3px] border-border bg-card p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
              variants={slideUpVariant}
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.14 }}
            >
              <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden border-[3px] border-border bg-background">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-black uppercase mb-2">{project.title}</h3>
              <p className="text-sm font-semibold mb-4">{project.shortDesc}</p>

              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-[3px] border-border px-2 py-1 text-[11px] font-black uppercase brutal-wipe"
                  >
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-[3px] border-border px-2 py-1 text-[11px] font-black uppercase brutal-wipe"
                  >
                    Github
                  </a>
                )}
                <p className="text-xs uppercase font-bold ml-auto">
                  {project.duration}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="inline-block border-[3px] border-border px-3 py-2 text-[11px] font-black uppercase brutal-wipe"
                aria-label={`View details for ${project.title}`}
              >
                View Details
              </button>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <ProjectDetailsModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
