import { motion } from "framer-motion";
import { fadeUp } from "../../../utils/animations";

import classes from "./SectionTitle.module.css";

export const SectionTitle = ({
  title,
  highlight,
  subtitle,
  center = true,
  withGlow = false,
}) => {
  return (
    <div
      className={`${classes["section-title-wrapper"]} ${center ? classes.center : ""}`}
    >
      {withGlow && <div className={classes["premium-title-glow"]} />}

      <div className={classes["section-header-container"]}>
        <motion.div
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`${classes["section-header-line"]} ${classes.left}`}
        />

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          custom={0.2}
          className={classes["section-heading"]}
        >
          {title}{" "}
          {highlight && (
            <span className={classes["glow-text-primary"]}>{highlight}</span>
          )}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={`${classes["section-header-line"]} ${classes.right}`}
        />
      </div>

      {subtitle && (
        <motion.p
          className="section-subtitle"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.6 }}
          custom={0.4}
        >
          <span className="section-subtitle-content">{subtitle}</span>
        </motion.p>
      )}
    </div>
  );
};
