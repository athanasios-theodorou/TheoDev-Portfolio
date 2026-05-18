import { motion } from "framer-motion";

import classes from "./Logo.module.css";

export const Logo = ({ onNavigate, isStatic = false }) => {
  const Component = isStatic ? "div" : motion.a;

  const motionProps = !isStatic
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
      }
    : {};

  const containerClass = `${classes["navbar-logo"]} ${
    isStatic ? classes["static"] : classes["interactive"]
  }`;

  return (
    <Component
      className={containerClass}
      {...motionProps}
      {...(!isStatic && {
        href: "#home",
        onClick: (e) => {
          e.preventDefault();
          onNavigate?.("#home");
        },
      })}
    >
      <div className={classes["navbar-logo-icon"]}>
        <img
          src="/images/LogoTheoDev.png"
          alt="TheoDev Logo"
          className={classes["navbar-logo-img"]}
        />
      </div>
      <span className={classes["navbar-logo-text"]}>
        Theo<span className={classes["navbar-logo-highlight"]}>Dev</span>
      </span>
    </Component>
  );
};
