'use client';

import { useRef } from 'react';
import { animate } from 'animejs';
import { useIsMobile } from '@/hooks/useMediaQuery';
import type { Skill } from '@/data/skills';
import * as Icons from 'lucide-react';

interface HoverExpandCardProps {
    skill: Skill;
}

export function HoverExpandCard({ skill }: HoverExpandCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    const handleExpand = () => {
        if (!cardRef.current) return;

        animate(cardRef.current, {
            width: [120, 250],
            height: [120, 180],
            duration: 300,
            ease: 'out(2)',
        });
    };

    const handleCollapse = () => {
        if (!cardRef.current) return;

        animate(cardRef.current, {
            width: [250, 120],
            height: [180, 120],
            duration: 200,
            ease: 'in(2)',
        });
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            handleExpand();
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            handleCollapse();
        }
    };

    const handleClick = () => {
        if (isMobile) {
            const currentWidth = cardRef.current?.offsetWidth || 120;
            if (currentWidth === 120) {
                handleExpand();
            } else {
                handleCollapse();
            }
        }
    };

    // Get the icon component dynamically (fallback to Code icon)
    const IconComponent = (Icons as any)[skill.icon] || Icons.Code;

    return (
        <div
            ref={cardRef}
            className="bg-white flex flex-col justify-center items-center p-4 overflow-hidden transition-all"
            style={{
                border: '2px solid var(--color-black)',
                borderRadius: 0,
                width: '120px',
                height: '120px',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            aria-label={`${skill.name} - ${skill.proficiency}% proficiency`}
        >
            <div className="text-center">
                <div className="mb-2 flex justify-center">
                    <IconComponent size={32} strokeWidth={2} />
                </div>
                <h4 className="font-bold text-sm">{skill.name}</h4>

                {/* Expanded content - only visible when card is expanded */}
                <div className="mt-4 w-full" style={{ opacity: 0 }}>
                    <div className="text-xs text-gray-600 mb-2">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'} exp.
                    </div>

                    {/* Proficiency Bar */}
                    <div
                        className="w-full h-4 mb-2"
                        style={{ border: '1px solid var(--color-black)' }}
                    >
                        <div
                            className="h-full bg-[var(--color-hover)]"
                            style={{ width: `${skill.proficiency}%` }}
                        />
                    </div>

                    <div className="text-xs text-gray-700 line-clamp-3">
                        {skill.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
