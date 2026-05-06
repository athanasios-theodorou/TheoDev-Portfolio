import { Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import {
  slowStagger,
  slowFadeUp,
  slowSlideInLeft,
  slowSlideInRight,
} from "../../../../utils/animations.js";

import { TypeWriter } from "./TypeWriter.jsx";

import classes from "./HomeContent.module.css";

export const HomeContent = ({ shouldAnimate }) => {
  return (
    <motion.div
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={slowStagger}
      className={classes["home-content"]}
    >
      <motion.div variants={slowStagger}>
        <h1>
          <motion.span
            variants={slowSlideInLeft}
            className={classes["home-h1-first"]}
          >
            Athanasios
          </motion.span>
          <motion.span
            variants={slowSlideInRight}
            className={classes["home-h1-second"]}
          >
            Theodorou
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        variants={slowFadeUp}
        className={classes["home-typewriter-wrapper"]}
      >
        <TypeWriter />
      </motion.div>

      <motion.p variants={slowFadeUp} className={classes["home-bio"]}>
        Specialized in architecting high-performance interfaces and turning
        complex code into elegant digital products.
      </motion.p>

      <motion.div variants={slowFadeUp} className={classes["home-actions"]}>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes["home-btn-primary"]}
        >
          <Code2 size={16} /> View Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes["home-btn-secondary"]}
        >
          <Mail size={16} />
          Let's Talk
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
