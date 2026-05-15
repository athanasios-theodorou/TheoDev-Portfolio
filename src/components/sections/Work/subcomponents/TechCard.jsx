import { useState } from "react";
import { motion } from "framer-motion";
import { zoomIn } from "../../../../utils/animations.js";
import { Code2 } from "lucide-react";

import classes from "./TechCard.module.css";

export const TechCard = ({ tech, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={zoomIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      custom={index * 0.05}
      whileHover={{
        y: -8,
        rotate: 2,
        scale: 1.1,
        transition: {
          type: "spring",
          stiffness: 120,
          damping: 30,
        },
      }}
      className={`${classes["glass-card"]} ${classes["tech-card"]}`}
    >
      <div className={classes["tech-card-icon-wrapper"]}>
        <div className={classes["tech-card-glow"]} />
        {!imgError ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className={classes["tech-card-icon"]}
            onError={() => setImgError(true)}
          />
        ) : (
          <Code2 size={24} color="var(--primary)" />
        )}
      </div>
      <span className={classes["tech-card-name"]}>{tech.name}</span>
    </motion.div>
  );
};
