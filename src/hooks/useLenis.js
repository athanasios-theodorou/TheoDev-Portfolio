import { useEffect } from "react";
import Lenis from "lenis";

export let lenisInstance = null;

/**
 * Custom hook to initialize and manage Lenis smooth scrolling.
 */
export const useLenis = () => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisInstance = lenis;

    // RAF loop for smooth scrolling
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Fix resize of page
    const resizeHandler = () => lenis.resize();
    window.addEventListener("resize", resizeHandler);

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resizeHandler);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};
