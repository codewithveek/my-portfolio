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
    <div className="group border-b border-[#003b00] pb-8 last:border-0 last:pb-0">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="text-gray-500 whitespace-nowrap font-mono text-sm">
          drwxr-xr-x 2 veek staff 4096 {date}
        </div>

        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
              ./{project.title.toLowerCase().replace(/\s+/g, "-")}
            </h3>
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  [src]
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  [run]
                </a>
              )}
            </div>
          </div>

          <p className="text-gray-400 mb-4 text-sm md:text-base">
            {project.shortDesc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-yellow-500 bg-[#001a00] px-2 py-1 border border-[#003b00]"
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
