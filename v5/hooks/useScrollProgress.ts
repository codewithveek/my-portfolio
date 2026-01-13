import { useEffect, useState } from 'react';
import { debounce } from '../utils/debounce';

export function useScrollProgress(elementId?: string): number {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const calculateProgress = () => {
            if (elementId) {
                // Calculate progress relative to a specific element
                const element = document.getElementById(elementId);
                if (!element) return;

                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;

                // Progress from 0 (element at bottom of viewport) to 1 (element at top)
                const scrolled = windowHeight - elementTop;
                const total = windowHeight + elementHeight;
                const elementProgress = Math.max(0, Math.min(1, scrolled / total));

                setProgress(elementProgress);
            } else {
                // Calculate overall page scroll progress
                const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
                const height =
                    document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) || 0;

                setProgress(scrolled);
            }
        };

        // Debounce scroll handler for performance (16ms ≈ 60fps)
        const handleScroll = debounce(calculateProgress, 16);

        // Initial calculation
        calculateProgress();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [elementId]);

    return progress;
}
