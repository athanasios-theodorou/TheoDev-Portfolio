import { useEffect } from "react";
import { X } from "lucide-react";

import classes from "./ProjectModal.module.css";

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      window.scrollTo(0, scrollY);
    };
  }, []);

  if (!project) return null;

  return (
    <div className={classes["project-modal-overlay"]} onClick={onClose}>
      <div
        className={classes["project-modal-container"]}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={classes["project-modal-close"]} onClick={onClose}>
          <X size={24} />
        </button>

        <div className={classes["project-modal-layout"]}>
          {/* Project Intro Bar */}
          <div className={classes["project-modal-intro-bar"]}>
            <div className={classes["intro-bar-left"]}>
              <span className={classes["intro-meta-label"]}>Project No.</span>
              <span className={classes["intro-meta-value"]}>
                {String(project.id).padStart(3, "0")}
              </span>
              <div className={classes["intro-meta-divider"]} />
              <span className={classes["intro-meta-label"]}>Status</span>
              <span
                className={`${classes["project-status-dot"]} ${
                  classes[`dot-${project.status.replace("-", "")}`]
                }`}
              />
              <span className={classes["intro-meta-value"]}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Title */}
          <h2 className={classes["project-modal-elite-title"]}>
            {project.title}
          </h2>

          {/* Project Gallery Section */}
          <div className={classes["project-modal-gallery-section"]}>
            <div className={classes["gallery-main-frame"]}>
              <img
                src={project.image}
                alt={project.title}
                className={classes["gallery-img"]}
              />
            </div>
            <div className={classes["gallery-tags-floating"]}>
              {project.tags.map((tag) => (
                <span key={tag} className={classes["floating-tag"]}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Narrative / Details Section */}
          <div className={classes["narrative-grid"]}>
            <div>
              <h4 className={classes["narrative-subtitle"]}>
                Project Synopsis
              </h4>
              <p className={classes["narrative-desc-lead"]}>
                {project.description}
              </p>
              <p className={classes["narrative-desc-full"]}>
                {project.extendedDescription}
              </p>
            </div>

            <div>
              <div className={classes["specs-elite-grid"]}>
                <div className={classes["elite-spec"]}>
                  <span className={classes["spec-elite-label"]}>
                    Engineering Focus
                  </span>
                  <p className={classes["spec-elite-value"]}>
                    {project.tags[0]}
                  </p>
                </div>
                <div className={classes["elite-spec"]}>
                  <span className={classes["spec-elite-label"]}>
                    Execution Status
                  </span>
                  <p className={classes["spec-elite-value"]}>
                    {project.status === "Deployed"
                      ? "Success & Live"
                      : "Active Prototype"}
                  </p>
                </div>
                <div className={classes["elite-spec"]}>
                  <span className={classes["spec-elite-label"]}>
                    Project Ownership
                  </span>
                  <p className={classes["spec-elite-value"]}>
                    Athanasios Theodorou
                  </p>
                </div>
              </div>

              <div className={classes["narrative-actions-elite"]}>
                {project.status === "Deployed" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${classes["elite-action-btn"]} ${classes["primary"]}`}
                  >
                    Open Experience
                  </a>
                )}
                <button
                  className={`${classes["elite-action-btn"]} ${classes["secondary"]}`}
                  onClick={onClose}
                >
                  Close Perspective
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
