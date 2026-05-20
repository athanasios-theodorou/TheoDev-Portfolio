import { lenisInstance } from "./useLenis";

export const useSmoothScroll = () => {
  const scrollTo = (target) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target);
    } else {
      if (target === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return scrollTo;
};
