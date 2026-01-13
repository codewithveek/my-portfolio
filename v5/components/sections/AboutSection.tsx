'use client';

import { useStackingEffect } from '@/hooks/useStackingEffect';

interface AboutSectionProps {
    index: number;
    totalSections: number;
}

export function AboutSection({ index, totalSections }: AboutSectionProps) {
    const { ref, style } = useStackingEffect({ index, totalSections });

    return (
        <section
            id="about"
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
                        className="text-5xl font-bold uppercase mr-8"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        About
                    </h2>
                    <div
                        className="flex-1 h-0.5 bg-black"
                        style={{ height: '2px' }}
                    />
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image/Graphic Column */}
                    <div
                        className="aspect-square bg-gray-100 flex items-center justify-center"
                        style={{ border: '2px solid var(--color-black)' }}
                    >
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">👨‍💻</div>
                            <p className="text-sm font-mono text-gray-500">
                                [Your Photo or Abstract Graphic]
                            </p>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Who I Am</h3>

                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            I'm a passionate full-stack developer with 6+ years of experience building
                            scalable web applications. My expertise spans modern JavaScript frameworks,
                            backend systems, and cloud infrastructure.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            I believe in writing clean, maintainable code and creating user experiences
                            that are both beautiful and functional. My approach combines technical
                            excellence with a deep understanding of user needs.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            Currently, I'm focused on building performant web applications using React,
                            Next.js, and Node.js, while exploring the latest in web technologies and
                            best practices.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700">
                            When I'm not coding, you'll find me contributing to open-source projects,
                            writing technical articles, or exploring new frameworks and tools.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
