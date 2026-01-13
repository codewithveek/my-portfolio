'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import { animateSlideInLeft, animateScaleIn, wrapTextInSpans, animateTextReveal } from '@/utils/animationHelpers';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
    const nameRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        // Wrap text in spans for character-by-character animation
        if (nameRef.current) {
            wrapTextInSpans(nameRef.current);
            animateTextReveal('.hero-name', 0);
        }

        // Animate subtitle with delay
        if (subtitleRef.current) {
            animateSlideInLeft(subtitleRef.current, 200);
        }

        // Animate CTA button with delay
        if (ctaRef.current) {
            animateScaleIn(ctaRef.current, 400);
        }
    }, []);

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-white"
            style={{
                borderBottom: '2px solid var(--color-black)',
                paddingTop: '80px', // Account for fixed nav
            }}
        >
            {/* Grid Overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(to right, var(--color-black) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-black) 1px, transparent 1px)
          `,
                    backgroundSize: 'calc(100% / 12) 50px',
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    {/* Name - Character by character reveal */}
                    <h1
                        ref={nameRef}
                        className="hero-name mb-6 font-black"
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'var(--text-h1)',
                            lineHeight: 'var(--leading-tight)',
                            fontWeight: 900,
                        }}
                    >
                        YOUR NAME HERE
                    </h1>

                    {/* Subtitle */}
                    <div
                        ref={subtitleRef}
                        className="mb-8"
                        style={{ opacity: 0 }}
                    >
                        <p
                            className="text-2xl md:text-3xl font-semibold mb-2"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            Full Stack Developer
                        </p>
                        <p className="text-lg md:text-xl text-gray-600">
                            Building digital experiences with precision and creativity
                        </p>
                    </div>

                    {/* CTA Button */}
                    <a
                        ref={ctaRef}
                        onClick={(e) => {
                            e.preventDefault();
                            handleScrollToProjects();
                        }}
                        className="btn-brutalist inline-flex items-center gap-3"
                        style={{ opacity: 0 }}
                    >
                        View Work
                        <ChevronDown size={24} strokeWidth={3} />
                    </a>
                </div>
            </div>
        </section>
    );
}
