import { useRef } from "react";
import { useMobile } from "../../../../hooks/useMobile.js";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Award } from "lucide-react";

import classes from "./CertCard.module.css";

export const CertCard = ({ cert, index }) => {
  const certRef = useRef(null);
  const isMobile = useMobile();

  const { scrollYProgress } = useScroll({
    target: certRef,
    offset: ["start end", "end start"],
  });

  const parallaxRange = isMobile ? 8 : 25;
  const stickyY = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxRange, -parallaxRange],
  );
  const smoothStickyY = useSpring(stickyY, { stiffness: 100, damping: 25 });

  const entranceVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }
    : {
        hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.05,
          },
        },
      };

  return (
    <motion.div
      ref={certRef}
      variants={entranceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      style={{ y: smoothStickyY }}
      whileHover={{ x: 5 }}
      className={`${classes["glass-card"]} ${classes["cert-card"]}`}
    >
      <div className={classes["cert-card-num"]}>
        {(index + 1).toString().padStart(2, "0")}
      </div>
      <div className={classes["cert-card-content"]}>
        <p className={classes["cert-card-title"]}>{cert.title}</p>
        <p className={classes["cert-card-meta"]}>
          {cert.issuer} · {cert.year}
        </p>
      </div>
      <Award size={16} className={classes["cert-card-icon"]} />
    </motion.div>
  );
};
