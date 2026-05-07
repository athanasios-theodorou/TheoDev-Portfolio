import { personal, skills } from "../../../../assets/data/portfolio";

import classes from "./CodePanel.module.css";

export const CodePanel = () => {
  return (
    <div className={classes["home-code-panel-wrapper"]}>
      {/* Glow */}
      <div className={classes["home-code-panel-glow"]} />

      {/* Main panel */}
      <div className={classes["home-code-panel-body"]}>
        {/* Header */}
        <div className={classes["home-code-panel-header"]}>
          <div className={classes["home-code-panel-dots"]}>
            <span />
            <span />
            <span />
          </div>

          <span className={classes["home-code-panel-title"]}>portfolio.js</span>
        </div>

        {/* Content */}
        <div className={classes["home-code-panel-content"]}>
          {/* const Developer = { */}
          <div>
            <span className={classes["home-code-panel-keyword"]}>const</span>{" "}
            <span className={classes["home-code-panel-variable"]}>
              Developer
            </span>{" "}
            <span className={classes["home-code-panel-punctuation"]}>
              = {"{"}
            </span>
          </div>

          {/* name */}
          <div className={classes["home-code-panel-line-indent"]}>
            <span className={classes["home-code-panel-property"]}>name</span>
            <span className={classes["home-code-panel-punctuation"]}>
              :
            </span>{" "}
            <span className={classes["home-code-panel-string"]}>
              "{personal.name}"
            </span>
            <span className={classes["home-code-panel-punctuation"]}>,</span>
          </div>

          {/* role */}
          <div className={classes["home-code-panel-line-indent"]}>
            <span className={classes["home-code-panel-property"]}>role</span>
            <span className={classes["home-code-panel-punctuation"]}>
              :
            </span>{" "}
            <span className={classes["home-code-panel-string"]}>
              "{personal.tagline}"
            </span>
            <span className={classes["home-code-panel-punctuation"]}>,</span>
          </div>

          {/* passion */}
          <div className={classes["home-code-panel-line-indent"]}>
            <span className={classes["home-code-panel-property"]}>passion</span>
            <span className={classes["home-code-panel-punctuation"]}>
              :
            </span>{" "}
            <span className={classes["home-code-panel-string"]}>
              "Premium Web Experiences"
            </span>
            <span className={classes["home-code-panel-punctuation"]}>,</span>
          </div>

          {/* skills */}
          <div className={classes["home-code-panel-skills-row"]}>
            <span className={classes["home-code-panel-property"]}>skills</span>

            <span className={classes["home-code-panel-punctuation"]}>: [</span>

            <div className={classes["home-code-panel-skills"]}>
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className={classes["home-code-panel-skill-badge"]}
                >
                  "{skill}"{index < skills.length - 1 && ","}
                </span>
              ))}
            </div>

            <span className={classes["home-code-panel-punctuation"]}>],</span>
          </div>

          {/* status */}
          <div className={classes["home-code-panel-line-indent"]}>
            <span className={classes["home-code-panel-property"]}>status</span>
            <span className={classes["home-code-panel-punctuation"]}>
              :
            </span>{" "}
            <span className={classes["home-code-panel-success"]}>
              "Building..."
            </span>
          </div>

          {/* closing bracket */}
          <div>
            <span className={classes["home-code-panel-punctuation"]}>
              {"}"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
