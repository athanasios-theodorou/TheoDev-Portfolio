import { Download, Code2 } from "lucide-react";
import { personal } from "../../../assets/data/portfolio";
import portfolioImage from "../../../assets/images/portfolio.jpg";
import classes from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={classes["about-section"]}>
      <div className={classes["about-container"]}>
        <div className={classes["about-top-grid"]}>
          {/* LEFT ΒΙΟ CONTENT */}
          <div className={classes["about-bio-content"]}>
            <h4 className={classes["about-hello"]}>Hello, I'm</h4>
            <h2 className={classes["about-name"]}>{personal.name}</h2>
            <p className={classes["about-description"]}>{personal.bio}</p>
            <div className={classes["about-actions"]}>
              <a className={classes["about-btn-primary"]}>
                <Download size={16} /> Download CV
              </a>
              <a className={classes["about-btn-secondary"]}>
                <Code2 size={16} /> View Projects
              </a>
            </div>
          </div>

          {/* RIGHT ΒΙΟ CONTENT */}
          <div className={classes["about-avatar-container"]}>
            <div className={classes["about-avatar-premium-glow"]} />
            <div className={classes["about-avatar-circle"]}>
              <img
                src={portfolioImage}
                alt={personal.name}
                className={classes["about-avatar-image"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
