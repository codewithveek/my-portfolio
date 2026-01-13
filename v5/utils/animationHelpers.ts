import { animate, stagger } from 'animejs';
/**
 * Animation configuration presets for anime.js
 * Based on brutalist portfolio requirements
 */

export const EASING = {
    EXPO_OUT: 'easeOutExpo',
    QUART_OUT: 'easeOutQuart',
    QUAD_OUT: 'easeOutQuad',
    QUAD_IN: 'easeInQuad',
    SPRING: 'spring(1, 80, 10, 0)',
} as const;

export const DURATION = {
    FAST: 200,
    NORMAL: 400,
    MEDIUM: 500,
    SLOW: 600,
    SLOWER: 800,
} as const;

export const STAGGER = {
    SMALL: 50,
    MEDIUM: 100,
    LARGE: 200,
} as const;

/**
 * Stacking animation configuration
 * For scroll-triggered stacking sections
 */
export const stackingConfig = {
    duration: DURATION.SLOW,
    easing: EASING.EXPO_OUT,
    scaleFrom: 1.0,
    scaleTo: 0.95,
    translateYOffset: 20, // pixels per stacked section
};

/**
 * Card expand/collapse animation
 * For click-to-expand project cards
 */
export const expandCardConfig = {
    duration: DURATION.MEDIUM,
    easing: EASING.QUART_OUT,
};

/**
 * Hover expand animation
 * For hover-to-expand skill cards
 */
export const hoverExpandConfig = {
    expandDuration: 300,
    collapseDuration: 200,
    expandEasing: EASING.QUAD_OUT,
    collapseEasing: EASING.QUAD_IN,
};

/**
 * Page load animations
 */
export const pageLoadConfig = {
    duration: DURATION.SLOWER,
    easing: EASING.EXPO_OUT,
    stagger: STAGGER.MEDIUM,
};

/**
 * Text reveal character-by-character animation
 */
export const textRevealConfig = {
    duration: DURATION.SLOW,
    easing: EASING.QUAD_OUT,
    stagger: STAGGER.SMALL,
    translateY: 100,
};

/**
 * Helper function to split text into characters for animation
 */
export function wrapTextInSpans(element: HTMLElement): void {
    const text = element.textContent || '';
    element.innerHTML = '';

    text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.style.display = 'inline-block';
        span.textContent = char === ' ' ? '\u00A0' : char; // Non-breaking space
        element.appendChild(span);
    });
}

/**
 * Animate stacking effect for a section
 */
export function animateStacking(
    target: HTMLElement,
    progress: number,
    index: number
): void {
    const scale = 1 - (progress * 0.05 * index);
    const translateY = progress * stackingConfig.translateYOffset * index;

    animate(target, {
        scale: scale,
        translateY: -translateY,
        duration: stackingConfig.duration,
        easing: stackingConfig.easing,
    });
}

/**
 * Animate card expansion
 */
export function animateCardExpand(
    target: HTMLElement,
    isExpanded: boolean,
    collapsedHeight: number
): void {
    animate(target, {
        height: isExpanded ? 'auto' : collapsedHeight,
        duration: expandCardConfig.duration,
        easing: expandCardConfig.easing,
    });
}

/**
 * Fade in animation with stagger
 */
export function animateFadeInStagger(selector: string): void {
    animate(selector, {
        opacity: [0, 1],
        translateY: [100, 0],
        delay: stagger(STAGGER.MEDIUM),
        duration: pageLoadConfig.duration,
        easing: pageLoadConfig.easing,
    });
}

/**
 * Text reveal animation
 */
export function animateTextReveal(selector: string, delay = 0): void {
    animate(`${selector} .char`, {
        translateY: [textRevealConfig.translateY, 0],
        opacity: [0, 1],
        delay: stagger(textRevealConfig.stagger, { start: delay }),
        duration: textRevealConfig.duration,
        easing: textRevealConfig.easing,
    });
}

/**
 * Slide in from left animation
 */
export function animateSlideInLeft(
    target: HTMLElement | string,
    delay = 0
): void {
    animate(target, {
        translateX: [-100, 0],
        opacity: [0, 1],
        delay,
        duration: DURATION.SLOWER,
        easing: EASING.EXPO_OUT,
    });
}

/**
 * Scale in animation (for buttons)
 */
export function animateScaleIn(target: HTMLElement | string, delay = 0): void {
    animate(target, {
        scale: [0, 1],
        opacity: [0, 1],
        delay,
        duration: DURATION.SLOW,
        easing: EASING.EXPO_OUT,
    });
}
