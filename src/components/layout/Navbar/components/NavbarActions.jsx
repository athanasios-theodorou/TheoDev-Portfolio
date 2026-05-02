import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { personal } from "../../../../assets/data/portfolio";

import classes from "./NavbarActions.module.css";

export const NavbarActions = ({
  menuOpen,
  onToggleMenu,
  theme,
  toggleTheme,
}) => {
  return (
    <div className={classes["navbar-actions"]}>
      {/* Theme Switcher */}
      <motion.div
        initial="initial"
        whileHover="hover"
        className={classes["navbar-theme-wrapper"]}
      >
        <motion.span
          variants={{
            initial: { x: 10, opacity: 0 },
            hover: { x: 0, opacity: 1 },
          }}
          className={classes["theme-btn-text"]}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </motion.span>

        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className={classes["navbar-theme-icon-btn"]}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun size={18} className={classes["theme-sparkle-icon"]} />
          ) : (
            <Moon size={18} className={classes["theme-sparkle-icon"]} />
          )}
          <div className={classes["theme-icon-glow"]} />
        </motion.button>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href={`mailto:${personal.email}`}
        whileHover={{ scale: 1.05 }}
        className={classes["navbar-cta"]}
      >
        <div className={classes["navbar-cta-shine"]} />
        <span className={classes["navbar-cta-dot"]} />
        <span className={classes["navbar-cta-text"]}>Available</span>
      </motion.a>

      {/* Hamburger Toggle */}
      <button
        className={classes["navbar-mobile-toggle"]}
        onClick={onToggleMenu}
      >
        <AnimatePresence mode="wait">
          {menuOpen ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={20} color="var(--text-primary)" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu size={20} color="var(--text-primary)" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
