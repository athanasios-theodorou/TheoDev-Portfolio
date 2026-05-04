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
