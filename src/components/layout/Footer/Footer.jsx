import { useSmoothScroll } from "../../../hooks/useSmoothScroll";
import { MapPin, Mail } from "lucide-react";
import { personal, navLinks } from "../../../assets/data/portfolio";
import { Logo } from "../../ui/Logo/Logo";
import { SocialMedia } from "../../ui/SocialMedia/SocialMedia";

import classes from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = useSmoothScroll();

  const handleFooterNav = (e, href) => {
    e.preventDefault();
    scrollTo(href);
  };

  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-gradient-line"]} />

      <div className={classes["footer-container"]}>
        <div className={classes["footer-grid"]}>
          {/* Column 1: Brand & Identity */}
          <div className={classes["footer-col-brand"]}>
            <div className={classes["footer-logo"]}>
              <Logo isStatic />
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
                  onClick={(e) => handleFooterNav(e, href)}
                  className={classes["footer-nav-link"]}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className={classes["footer-col-social"]}>
            <h4 className={classes["footer-col-title"]}>Connect</h4>
            <div className={classes["footer-contact-info"]}>
              <a
                href={`mailto:${personal.email}`}
                className={classes["footer-contact-link"]}
              >
                <Mail size={14} className={classes["footer-icon-primary"]} />
                <span>{personal.email}</span>
              </a>
            </div>
            <div className={classes["footer-social-wrapper"]}>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className={classes["footer-bottom"]}>
        <div className={classes["footer-bottom-divider"]} />
        <div className={classes["footer-bottom-content"]}>
          <p className={classes["footer-copyright"]}>
            © {year} {personal.name} - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
