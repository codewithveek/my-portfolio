"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/projects";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[300] bg-black/65 p-3 md:p-6 flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="w-full max-w-3xl max-h-[92vh] overflow-y-auto border-[4px] border-border bg-card p-4 md:p-6 shadow-[10px_10px_0_0_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h3
                  id="project-modal-title"
                  className="text-xl md:text-2xl font-black uppercase"
                >
                  {project.title}
                </h3>
                <p className="text-xs uppercase font-bold mt-1">
                  {project.role} · {project.duration}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="border-[3px] border-border px-3 py-1 text-xs font-black uppercase brutal-wipe"
                aria-label="Close project details"
              >
                Close
              </button>
            </div>

            <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden border-[3px] border-border bg-background">
              <Image
                src={project.fullImage || project.thumbnail}
                alt={`${project.title} full preview`}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                className="object-cover"
              />
            </div>

            <p className="text-sm md:text-base font-semibold mb-4">
              {project.fullDescription}
            </p>

            <div className="mb-4">
              <p className="text-xs font-black uppercase mb-2">Highlights</p>
              <ul className="space-y-1">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-xs md:text-sm font-bold uppercase"
                  >
                    - {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-xs font-black uppercase mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center bg-foreground text-background px-2 py-1 text-[10px] font-black uppercase tracking-wide"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-[3px] border-border px-3 py-2 text-xs font-black uppercase brutal-wipe"
                >
                  View Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border-[3px] border-border px-3 py-2 text-xs font-black uppercase brutal-wipe"
                >
                  View Github
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
