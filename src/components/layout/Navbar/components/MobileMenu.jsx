import { motion } from "framer-motion";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { personal } from "../../../../assets/data/portfolio";

import classes from "./MobileMenu.module.css";

export const MobileMenu = ({
  activeSection,
  handleNav,
  handleReturn,
  theme,
  toggleTheme,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        y: 20,
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      }}
      className={classes["mobile-menu-overlay"]}
    >
      <div className={classes["mobile-menu-glass"]} />
      <div className={classes["mobile-menu-bg-glow-center"]} />
      <div className={classes["mobile-menu-content-centered"]}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className={classes["mobile-menu-header-centered"]}
        >
          <span className={classes["mobile-menu-label-architect"]}>
            NAVIGATION
          </span>
          <div className={classes["label-dots"]} />
        </motion.div>
        <nav className={classes["mobile-menu-nav-centered"]}>
          <NavLinks
            variant="mobile"
            activeSection={activeSection}
            onNavigate={handleNav}
          />
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            onClick={handleReturn}
            className={classes["mobile-menu-back-btn"]}
          >
            <ArrowLeft size={16} /> <span>Back to Site</span>
          </motion.button>
        </nav>

        <div className={classes["mobile-menu-footer-hub"]}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={classes["mobile-actions-hub-vertical"]}
          >
            <button
              onClick={toggleTheme}
              className={`${classes["hub-action-btn-theme-full"]} ${classes["glow-box-primary"]}`}
            >
              {theme === "dark" ? (
                <Sun className={classes["sparkle-primary"]} size={16} />
              ) : (
                <Moon className={classes["sparkle-primary"]} size={16} />
              )}
              <span>Switch to {theme === "dark" ? "Light" : "Dark"} Mode</span>
            </button>

            <a
              href={`mailto:${personal.email}`}
              className={`${classes["hub-action-btn-hire-full"]} ${classes["btn-shimmer-lite"]}`}
            >
              <span>Available for Projects</span>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
