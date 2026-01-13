'use client';

import { useState, useRef } from 'react';
import { animate } from 'animejs';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        if (!cardRef.current || !contentRef.current) return;

        const newExpandedState = !isExpanded;

        if (newExpandedState) {
            // Expanding
            const fullHeight = cardRef.current.scrollHeight;

            animate(cardRef.current, {
                height: [cardRef.current.offsetHeight, fullHeight],
                duration: 500,
                easing: 'easeOutQuart',
            });

            // Increase border width
            animate(cardRef.current, {
                borderWidth: ['2px', '3px'],
                duration: 300,
                easing: 'easeOutQuad',
            });
        } else {
            // Collapsing
            animate(cardRef.current, {
                height: [cardRef.current.offsetHeight, 250],
                duration: 400,
                easing: 'easeInQuart',
            });

            // Decrease border width
            animate(cardRef.current, {
                borderWidth: ['3px', '2px'],
                duration: 300,
                easing: 'easeInQuad',
            });
        }

        setIsExpanded(newExpandedState);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
        }
    };

    return (
        <div
            ref={cardRef}
            className="bg-white overflow-hidden cursor-pointer"
            style={{
                border: '2px solid var(--color-black)',
                borderRadius: 0,
                height: isExpanded ? 'auto' : '250px',
            }}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            role="button"
            aria-expanded={isExpanded}
            aria-label={`${project.title} - Click to ${isExpanded ? 'collapse' : 'expand'}`}
            tabIndex={0}
        >
            {/* Collapsed Content - Always Visible */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.shortDesc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-semibold uppercase bg-[var(--color-hover)] text-black"
                            style={{ border: '1px solid var(--color-black)' }}
                        >
                            {tech}
                        </span>
                    ))}
                    {project.techStack.length > 4 && (
                        <span
                            className="px-3 py-1 text-xs font-semibold uppercase bg-gray-200 text-black"
                            style={{ border: '1px solid var(--color-black)' }}
                        >
                            +{project.techStack.length - 4} more
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2 text-sm font-semibold">
                    <span>{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
                    <span className="uppercase">{isExpanded ? 'Less' : 'More'} Details</span>
                </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
                <div ref={contentRef} className="px-6 pb-6">
                    <div className="mb-6">
                        <h4 className="text-lg font-bold mb-2">Full Description</h4>
                        <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
                    </div>

                    <div className="mb-4">
                        <h4 className="text-lg font-bold mb-2">All Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-semibold uppercase bg-[var(--color-hover)] text-black"
                                    style={{ border: '1px solid var(--color-black)' }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <h4 className="text-sm font-bold uppercase mb-1">Role</h4>
                            <p className="text-gray-700">{project.role}</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold uppercase mb-1">Duration</h4>
                            <p className="text-gray-700">{project.duration}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold mb-2">Highlights</h4>
                        <ul className="list-none space-y-2">
                            {project.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-[var(--color-accent)] font-bold">•</span>
                                    <span className="text-gray-700">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-hover)] text-black font-bold uppercase hover:bg-black hover:text-[var(--color-hover)] transition-colors"
                                style={{ border: '2px solid var(--color-black)' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={18} />
                                View Live
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase hover:bg-black hover:text-white transition-colors"
                                style={{ border: '2px solid var(--color-black)' }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={18} />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
