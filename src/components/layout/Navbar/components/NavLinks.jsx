import { navLinks } from "../../../../assets/data/portfolio";

import classes from "./NavLinks.module.css";

export const NavLinks = ({
  variant = "desktop",
  activeSection,
  onNavigate,
}) => {
  const isMobile = variant === "mobile";

  return (
    <>
      {navLinks.map((link) => {
        const sectionId = link.href.replace("#", "");
        const isActive = activeSection === sectionId;

        return (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(link.href);
            }}
            className={`${isMobile ? classes["mobile-menu-link-pill"] : classes["navbar-link"]} 
            ${isActive ? classes.active : ""}`}
          >
            {!isMobile && isActive && (
              <div className={classes["navbar-link-active-bg"]} />
            )}
            <span
              className={`${isMobile ? classes["link-text-minimal"] : classes["navbar-link-text"]} 
              ${isActive ? classes.active : ""}`}
            >
              {link.label}
            </span>

            {isMobile && isActive && (
              <div className={classes["link-active-glow"]} />
            )}
          </a>
        );
      })}
    </>
  );
};
