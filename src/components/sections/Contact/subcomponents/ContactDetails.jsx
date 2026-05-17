import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { slideInLeft } from "../../../../utils/animations";
import { personal } from "../../../../assets/data/portfolio";
import { SocialMedia } from "../../../ui/SocialMedia/SocialMedia";

import classes from "./ContactDetails.module.css";

export const ContactDetails = () => {
  const leftColRef = useRef(null);

  // Sticky effect for left column components
  const { scrollYProgress: leftScroll } = useScroll({
    target: leftColRef,
    offset: ["start end", "end start"],
  });
  const leftStickyY = useTransform(leftScroll, [0, 1], [40, -40]);
  const leftSmoothStickyY = useSpring(leftStickyY, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={leftColRef}
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{ y: leftSmoothStickyY }}
      className={classes["contact-left-col"]}
    >
      {/* Description */}
      <div>
        <h3 className={classes["contact-header-title"]}>Let's work together</h3>
        <p className={classes["contact-header-desc"]}>
          I'm always looking for exciting new projects. Whether you need a
          website, a web app, or just want to collaborate — feel free to reach
          out!
        </p>
      </div>

      {/* Contact info */}
      <div className={classes["contact-info-list"]}>
        <div className={classes["contact-info-item"]}>
          <div className={classes["contact-info-icon"]}>
            <Mail size={16} />
          </div>
          <div>
            <p className={classes["contact-info-label"]}>Email</p>
            <a
              href={`mailto:${personal.email}`}
              className={classes["contact-info-value"]}
            >
              {personal.email}
            </a>
          </div>
        </div>
        <div className={classes["contact-info-item"]}>
          <div className={classes["contact-info-icon"]}>
            <MapPin size={16} />
          </div>
          <div>
            <p className={classes["contact-info-label"]}>Location</p>
            <p className={classes["contact-info-value"]}>{personal.location}</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <p className={classes["contact-social-label"]}>Find me on</p>
          <SocialMedia />
        </div>

        {/* Available Card */}
        <div className={classes["contact-available-card"]}>
          <span className={classes["contact-available-dot"]} />
          <span className={classes["contact-available-label"]}>
            Open to full-time, contract, and freelance
          </span>
        </div>
      </div>
    </motion.div>
  );
};
