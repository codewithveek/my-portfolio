'use client';

import { useStackingEffect } from '@/hooks/useStackingEffect';
import { HoverExpandCard } from '@/components/interactive/HoverExpandCard';
import { skills } from '@/data/skills';

interface SkillsSectionProps {
    index: number;
    totalSections: number;
}

export function SkillsSection({ index, totalSections }: SkillsSectionProps) {
    const { ref, style } = useStackingEffect({ index, totalSections });

    return (
        <section
            id="skills"
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
                        Skills & Tools
                    </h2>
                    <div
                        className="flex-1 h-0.5 bg-black"
                        style={{ height: '2px' }}
                    />
                </div>

                {/* Skills by Category */}
                <div className="space-y-12">
                    {skills.map((category) => (
                        <div key={category.category}>
                            <h3 className="text-2xl font-bold mb-6">{category.category}</h3>

                            <div className="flex flex-wrap gap-6">
                                {category.items.map((skill) => (
                                    <HoverExpandCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
