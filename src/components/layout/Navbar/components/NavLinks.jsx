import { navLinks } from "../../../../assets/data/portfolio";

import classes from "./NavLinks.module.css";

export const NavLinks = ({ activeSection, onNavigate }) => {
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
            className={classes["navbar-link"]}
          >
            {isActive && <div className={classes["navbar-link-active-bg"]} />}
            <span
              className={`${classes["navbar-link-text"]} 
              ${isActive ? classes["navbarLinkTextActive"] : ""}`}
            >
              {link.label}
            </span>
          </a>
        );
      })}
    </>
  );
};
