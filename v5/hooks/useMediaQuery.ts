import { useEffect, useState } from 'react';

/**
 * Custom hook to detect responsive breakpoints
 * Used to switch between hover and click behaviors on mobile
 */

export const BREAKPOINTS = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    desktop: '(min-width: 1024px)',
    largeDesktop: '(min-width: 1440px)',
} as const;

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Create media query list
        const mediaQuery = window.matchMedia(query);

        // Set initial value
        setMatches(mediaQuery.matches);

        // Define listener
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Add listener (using deprecated addListener for broader compatibility)
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            // Fallback for older browsers
            mediaQuery.addListener(handleChange);
        }

        // Cleanup
        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                mediaQuery.removeListener(handleChange);
            }
        };
    }, [query]);

    // Return false during SSR to avoid hydration mismatch
    return mounted ? matches : false;
}

/**
 * Convenience hooks for common breakpoints
 */
export function useIsMobile(): boolean {
    return useMediaQuery(BREAKPOINTS.mobile);
}

export function useIsTablet(): boolean {
    return useMediaQuery(BREAKPOINTS.tablet);
}

export function useIsDesktop(): boolean {
    return useMediaQuery(BREAKPOINTS.desktop);
}

export function useIsLargeDesktop(): boolean {
    return useMediaQuery(BREAKPOINTS.largeDesktop);
}
