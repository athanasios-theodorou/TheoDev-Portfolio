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
    <div className={classes["mobile-menu-overlay"]}>
      <div className={classes["mobile-menu-glass"]} />
      <div className={classes["mobile-menu-bg-glow-center"]} />
      <div className={classes["mobile-menu-content-centered"]}>
        <div className={classes["mobile-menu-header-centered"]}>
          <span className={classes["mobile-menu-label-architect"]}>
            NAVIGATION
          </span>
          <div className={classes["label-dots"]} />
        </div>
        <nav className={classes["mobile-menu-nav-centered"]}>
          <NavLinks
            variant="mobile"
            activeSection={activeSection}
            onNavigate={handleNav}
          />
          <button
            onClick={handleReturn}
            className={classes["mobile-menu-back-btn"]}
          >
            <ArrowLeft size={16} /> <span>Back to Site</span>
          </button>
        </nav>

        <div className={classes["mobile-menu-footer-hub"]}>
          <div className={classes["mobile-actions-hub-vertical"]}>
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
          </div>
        </div>
      </div>
    </div>
  );
};
