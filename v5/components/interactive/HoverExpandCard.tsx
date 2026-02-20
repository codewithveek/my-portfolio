"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";
import type { Skill } from "@/data/skills";
import {
  Code,
  FileCode,
  Braces,
  Globe,
  Palette,
  Server,
  Database,
  Cloud,
  GitBranch,
  Container,
  Terminal,
  Workflow,
  Cpu,
  type LucideIcon,
} from "lucide-react";

interface HoverExpandCardProps {
  skill: Skill;
}

export function HoverExpandCard({ skill }: HoverExpandCardProps) {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const iconMap: Record<string, LucideIcon> = {
    javascript: FileCode,
    typescript: Braces,
    react: Code,
    nextjs: Globe,
    vue: Palette,
    html: FileCode,
    css: Palette,
    tailwind: Palette,
    nodejs: Server,
    python: Terminal,
    express: Server,
    graphql: Workflow,
    api: Workflow,
    postgresql: Database,
    mongodb: Database,
    redis: Database,
    firebase: Cloud,
    docker: Container,
    aws: Cloud,
    git: GitBranch,
    cicd: Workflow,
    linux: Terminal,
  };

  const handleHoverStart = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleHoverEnd = () => {
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  // Get the icon component dynamically (fallback to Code icon)
  const IconComponent = iconMap[skill.icon.toLowerCase()] ?? Cpu;

  return (
    <motion.div
      className="rounded-2xl border border-[var(--line)] bg-[#12182a] p-4 overflow-hidden w-[164px]"
      animate={{ height: isExpanded ? 228 : 124 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${skill.name} - ${skill.proficiency}% proficiency`}
    >
      <div className="w-full">
        <div className="mb-2 flex justify-between items-center">
          <IconComponent size={28} strokeWidth={2} />
          <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)]">
            {skill.proficiency}%
          </span>
        </div>
        <h4 className="font-semibold text-sm text-[var(--text)] mb-2">
          {skill.name}
        </h4>

        <div className="w-full h-1.5 rounded-full bg-[#26314d] overflow-hidden mb-3">
          <motion.div
            className="h-full bg-[#6e84d4]"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-xs text-[var(--text-muted)] mb-2">
                {skill.years} {skill.years === 1 ? "year" : "years"} experience
              </div>

              <div className="text-xs leading-relaxed text-[var(--text-muted)] line-clamp-4">
                {skill.description}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
