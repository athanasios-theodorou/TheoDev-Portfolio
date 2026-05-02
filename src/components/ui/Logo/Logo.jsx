import { motion } from "framer-motion";

import classes from "./Logo.module.css";

export const Logo = ({ onNavigate }) => {
  return (
    <motion.a
      href="#home"
      className={classes["navbar-logo"]}
      onClick={(e) => {
        e.preventDefault();
        onNavigate("#home");
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
    </motion.a>
  );
};
