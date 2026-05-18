import { MapPin } from "lucide-react";
import { personal, navLinks } from "../../../assets/data/portfolio";
import { Logo } from "../../ui/Logo/Logo";

import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-gradient-line"]} />

      <div className={classes["footer-container"]}>
        <div className={classes["footer-grid"]}>
          {/* Column 1: Brand & Identity */}
          <div className={classes["footer-col-brand"]}>
            <div className={classes["footer-logo"]}>
              <Logo />
            </div>

            <p className={classes["footer-tagline"]}>
              {personal.name} <br />
              <span className={classes["footer-nickname"]}>
                ({personal.alias})
              </span>
            </p>
            <div className={classes["footer-location"]}>
              <MapPin size={14} className={classes["footer-icon-primary"]} />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={classes["footer-col-links"]}>
            <h4 className={classes["footer-col-title"]}>Quick Links</h4>
            <nav className={classes["footer-nav-vertical"]}>
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={classes["footer-nav-link"]}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
