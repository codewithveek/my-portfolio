import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] {
    const {
        threshold = 0.1,
        root = null,
        rootMargin = '0px',
        freezeOnceVisible = false,
    } = options;

    const elementRef = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // If already intersected and should freeze, don't set up observer
        if (freezeOnceVisible && isIntersecting) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isElementIntersecting = entry.isIntersecting;

                setIsIntersecting(isElementIntersecting);

                // If should freeze once visible and now visible, unobserve
                if (freezeOnceVisible && isElementIntersecting) {
                    observer.unobserve(element);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible, isIntersecting]);

    return [elementRef, isIntersecting];
}
