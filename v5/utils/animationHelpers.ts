export const MOTION = {
  duration: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.55,
  },
  ease: {
    smooth: [0.22, 1, 0.36, 1] as const,
    standard: [0.4, 0, 0.2, 1] as const,
  },
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION.duration.normal,
      ease: MOTION.ease.smooth,
    },
  },
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export function splitTextCharacters(text: string): string[] {
  return Array.from(text);
}
