export const staggerReveal = {
  initial: { y: 20, opacity: 0 },
  animate: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + index * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Slow, premium transition variants
export const slowStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const slowFadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slowSlideInLeft = {
  hidden: { opacity: 0, x: -100, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slowSlideInRight = {
  hidden: { opacity: 0, x: 100, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slowZoomIn = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(15px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
  },
};
