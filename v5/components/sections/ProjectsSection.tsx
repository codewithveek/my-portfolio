'use client';

import { useStackingEffect } from '@/hooks/useStackingEffect';
import { ProjectCard } from '@/components/interactive/ProjectCard';
import { projects } from '@/data/projects';

interface ProjectsSectionProps {
    index: number;
    totalSections: number;
}

export function ProjectsSection({ index, totalSections }: ProjectsSectionProps) {
    const { ref, style } = useStackingEffect({ index, totalSections });

    return (
        <section
            id="projects"
            ref={ref}
            className="bg-white"
            style={{
                ...style,
                border: '2px solid var(--color-black)',
                padding: 'var(--section-padding) var(--gutter)',
                marginBottom: 'var(--space-md)',
            }}
        >
            <div className="container mx-auto">
                {/* Section Title with Line */}
                <div className="flex items-center mb-12">
                    <h2
                        className="text-5xl font-bold uppercase mr-8 whitespace-nowrap"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Featured Work
                    </h2>
                    <div
                        className="flex-1 h-0.5 bg-black"
                        style={{ height: '2px' }}
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
