import { useState, useEffect } from "react";
import { useSmoothScroll } from "../../../hooks/useSmoothScroll";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

import classes from "./ScrollToTopButton.module.css";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    scrollTo(0);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleScrollToTop}
          className={classes["scroll-to-top-btn"]}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
