import { useState } from "react";

import { Sun, Moon, Menu, X } from "lucide-react";
import { personal } from "../../../../assets/data/portfolio";
import classes from "./NavbarActions.module.css";

export const NavbarActions = ({ menuOpen, onToggleMenu }) => {
  const [theme, setTheme] = useState("dark"); // Default Dark

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className={classes["navbar-actions"]}>
      {/* Theme Switcher */}
      <div className={classes["navbar-theme-wrapper"]}>
        <span className={classes["theme-btn-text"]}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>

        <button
          onClick={toggleTheme}
          className={classes["navbar-theme-icon-btn"]}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun size={18} className={classes["theme-sparkle-icon"]} />
          ) : (
            <Moon size={18} className={classes["theme-sparkle-icon"]} />
          )}
          <div className={classes["theme-icon-glow"]} />
        </button>
      </div>

      {/* CTA Button */}
      <a href={`mailto:${personal.email}`} className={classes["navbar-cta"]}>
        <div className={classes["navbar-cta-shine"]} />
        <span className={classes["navbar-cta-dot"]} />
        <span className={classes["navbar-cta-text"]}>Available</span>
      </a>

      {/* Hamburger Toggle */}
      <button
        className={classes["navbar-mobile-toggle"]}
        onClick={onToggleMenu}
      >
        {menuOpen ? (
          <div>
            <X size={20} color="var(--text-primary)" />
          </div>
        ) : (
          <div>
            <Menu size={20} color="var(--text-primary)" />
          </div>
        )}
      </button>
    </div>
  );
};
