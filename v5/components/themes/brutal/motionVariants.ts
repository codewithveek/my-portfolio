export const brutalTransition = {
  type: "spring" as const,
  stiffness: 230,
  damping: 22,
  mass: 0.7,
};

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const slideUpVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: brutalTransition },
};

export const slideLeftVariant = {
  hidden: { opacity: 0, x: -56, rotate: -0.8 },
  show: { opacity: 1, x: 0, rotate: 0, transition: brutalTransition },
};

export const slideRightVariant = {
  hidden: { opacity: 0, x: 56, rotate: 0.8 },
  show: { opacity: 1, x: 0, rotate: 0, transition: brutalTransition },
};
