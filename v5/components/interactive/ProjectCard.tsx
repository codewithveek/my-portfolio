import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="group border-b border-border pb-8 last:border-0 last:pb-0">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="text-dim whitespace-nowrap font-mono text-sm">
          drwxr-xr-x 2 veek staff 4096 {date}
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-accent group-hover:opacity-80 transition-opacity">
              ./{project.title.toLowerCase().replace(/\s+/g, "-")}
            </h3>
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dim hover:text-foreground transition-colors"
                >
                  [src]
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dim hover:text-foreground transition-colors"
                >
                  [run]
                </a>
              )}
            </div>
          </div>

          <p className="text-foreground opacity-80 mb-4 text-sm md:text-base">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-foreground bg-background px-2 py-1 border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
