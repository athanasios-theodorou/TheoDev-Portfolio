import { useRef } from "react";
import { useMobile } from "../../../../hooks/useMobile.js";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

import classes from "./ProjectCard.module.css";

export const ProjectCard = ({ project, onOpen, index }) => {
  const cardRef = useRef(null);
  const isMobile = useMobile();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const parallaxRange = isMobile ? 10 : 40;
  const stickyY = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxRange, -parallaxRange],
  );
  const smoothStickyY = useSpring(stickyY, { stiffness: 100, damping: 20 });

  const entranceVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }
    : {
        hidden: { opacity: 0, y: 100, rotateY: 15 },
        visible: {
          opacity: 1,
          y: 0,
          rotateY: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.05,
          },
        },
      };

  return (
    <motion.div className={classes["work-project-grid"]}>
      <motion.div
        ref={cardRef}
        variants={entranceVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        style={{ y: smoothStickyY }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className={`${classes["glass-card"]} ${classes["project-card"]}`}
      >
        <div className={classes["project-card-header"]}>
          <div className={classes["project-card-bg"]} />
          <img
            src={project.image}
            alt={project.title}
            className={classes["project-card-preview-img"]}
          />

          {/* Status Badge */}
          <div className={classes["project-status-badges"]}>
            <span
              className={`${classes["project-status-badge"]} ${
                classes[`status-${project.status.toLowerCase()}`]
              }`}
            >
              {project.status === "Deployed" ? "● Deployed" : "○ Developing"}
            </span>
          </div>

          <div className={classes["project-card-tags"]}>
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={classes["project-card-tag"]}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={classes["project-card-body"]}>
          <h3 className={classes["project-card-title"]}>{project.title}</h3>
          <p className={classes["project-card-desc"]}>{project.description}</p>

          <div className={classes["project-card-actions"]}>
            {project.status === "Deployed" ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes["project-card-link-primary"]}
              >
                Live <ExternalLink size={12} />
              </a>
            ) : (
              <div />
            )}

            <button
              onClick={() => onOpen(project)}
              className={classes["project-card-link-secondary"]}
            >
              Details
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
