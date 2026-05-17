import { Mail, MapPin } from "lucide-react";
import { personal } from "../../../../assets/data/portfolio";
import { SocialMedia } from "../../../ui/SocialMedia/SocialMedia";

import classes from "./ContactDetails.module.css";

export const ContactDetails = () => {
  return (
    <div className={classes["contact-left-col"]}>
      {/* Description */}
      <div>
        <h3 className={classes["contact-header-title"]}>Let's work together</h3>
        <p className={classes["contact-header-desc"]}>
          I'm always looking for exciting new projects. Whether you need a
          website, a web app, or just want to collaborate — feel free to reach
          out!
        </p>
      </div>

      {/* Contact info */}
      <div className={classes["contact-info-list"]}>
        <div className={classes["contact-info-item"]}>
          <div className={classes["contact-info-icon"]}>
            <Mail size={16} />
          </div>
          <div>
            <p className={classes["contact-info-label"]}>Email</p>
            <a
              href={`mailto:${personal.email}`}
              className={classes["contact-info-value"]}
            >
              {personal.email}
            </a>
          </div>
        </div>
        <div className={classes["contact-info-item"]}>
          <div className={classes["contact-info-icon"]}>
            <MapPin size={16} />
          </div>
          <div>
            <p className={classes["contact-info-label"]}>Location</p>
            <p className={classes["contact-info-value"]}>{personal.location}</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <p className={classes["contact-social-label"]}>Find me on</p>
          <SocialMedia />
        </div>

        {/* Available Card */}
        <div className={classes["contact-available-card"]}>
          <span className={classes["contact-available-dot"]} />
          <span className={classes["contact-available-label"]}>
            Open to full-time, contract, and freelance
          </span>
        </div>
      </div>
    </div>
  );
};
