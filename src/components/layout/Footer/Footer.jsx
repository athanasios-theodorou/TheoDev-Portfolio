import { MapPin } from "lucide-react";
import { personal } from "../../../assets/data/portfolio";
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
        </div>
      </div>
    </footer>
  );
};
