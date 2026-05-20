import { lenisInstance } from "../../../hooks/useLenis";
import { motion } from "framer-motion";
import { Download, Code2 } from "lucide-react";
import { personal, stats } from "../../../assets/data/portfolio";
import {
  staggerContainer,
  slideInLeft,
  slideInRight,
  zoomIn,
} from "../../../utils/animations.js";
import { StatCard } from "./subcomponents/StatCard";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle.jsx";

import portfolioImage from "../../../assets/images/portfolio.jpg";
import cvFile from "../../../assets/documents/Athanasios-Theodorou-CV.pdf";

import classes from "./About.module.css";

export const About = () => {
  const handleAboutNav = (e, href) => {
    e.preventDefault();

    if (lenisInstance) {
      lenisInstance.scrollTo(href);
    } else {
      // Fallback
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className={classes["about-section"]}>
      <motion.div className={classes["about-container"]}>
        <SectionTitle
          title="About"
          highlight="Me"
          subtitle="Transforming ideas into digital experiences"
          withGlow
          center
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className={classes["about-top-grid"]}
        >
          {/* LEFT ΒΙΟ CONTENT */}
          <motion.div className={classes["about-bio-content"]}>
            <motion.h4
              variants={slideInLeft}
              className={classes["about-hello"]}
            >
              Hello, I'm
            </motion.h4>
            <motion.h2
              variants={slideInRight}
              className={classes["about-name"]}
            >
              {personal.name}
            </motion.h2>
            <motion.p
              variants={slideInLeft}
              className={classes["about-description"]}
            >
              {personal.bio}
            </motion.p>
            <motion.div variants={zoomIn} className={classes["about-actions"]}>
              <motion.a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={classes["about-btn-primary"]}
              >
                <Download size={16} /> Download CV
              </motion.a>
              <motion.a
                href="#work"
                onClick={(e) => handleAboutNav(e, "#work")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={classes["about-btn-secondary"]}
              >
                <Code2 size={16} /> View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT ΒΙΟ CONTENT */}
          <motion.div
            variants={zoomIn}
            className={classes["about-avatar-container"]}
          >
            <div className={classes["about-avatar-premium-glow"]} />
            <div className={classes["about-avatar-circle"]}>
              <img
                src={portfolioImage}
                alt={personal.name}
                className={classes["about-avatar-image"]}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          className={classes["about-stats-grid"]}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
