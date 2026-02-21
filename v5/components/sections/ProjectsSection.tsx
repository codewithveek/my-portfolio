"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/interactive/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mb-8">
        <span className="text-[#008f11]">veek@portfolio</span>:
        <span className="text-blue-500">~/projects</span>$ ls -la
      </div>

      <div className="terminal-window">
        <div className="terminal-header">
          <span>total {projects.length * 4}</span>
          <span>drwxr-xr-x</span>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
