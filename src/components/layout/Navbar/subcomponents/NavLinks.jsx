import { motion } from "framer-motion";
import { navLinks } from "../../../../assets/data/portfolio";
import { staggerReveal } from "../../../../utils/animations";
import classes from "./NavLinks.module.css";

export const NavLinks = ({
  variant = "desktop",
  activeSection,
  onNavigate,
}) => {
  const isMobile = variant === "mobile";

  return (
    <>
      {navLinks.map((link, index) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.href);
            }}
            className={`${isMobile ? classes["mobile-menu-link-pill"] : classes["navbar-link"]} 
            ${isActive ? classes.active : ""}`}
            initial={isMobile ? "initial" : false}
            animate={isMobile ? "animate" : false}
            custom={index}
            variants={staggerReveal}
          >
            {!isMobile && isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className={classes["navbar-link-active-bg"]}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span
              className={`${isMobile ? classes["link-text-minimal"] : classes["navbar-link-text"]} 
              ${isActive ? classes.active : ""}`}
            >
              {link.label}
            </span>

            {isMobile && isActive && (
              <motion.div
                layoutId="mobileActiveIndicatorCenter"
                className={classes["link-active-glow"]}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}
          </motion.a>
        );
      })}
    </>
  );
};
