import { useScroll, motion } from "framer-motion";

import classes from "./ScrollProgressBar.module.css";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={classes["scroll-progress-bar"]}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};
