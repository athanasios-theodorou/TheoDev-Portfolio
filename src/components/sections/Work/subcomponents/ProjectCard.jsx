import { ExternalLink, ArrowRight } from "lucide-react";

import classes from "./ProjectCard.module.css";

export const ProjectCard = ({ project, onOpen }) => {
  return (
    <div className={`${classes["glass-card"]} ${classes["project-card"]}`}>
      <div className={classes["project-card-header"]}>
        <div className={classes["project-card-bg"]} />
        <img
          src={project.image}
          alt={project.title}
          className={classes["project-card-preview-img"]}
        />

        {/* Status Badge */}
        <div className={classes["project-status-badges"]}>
          <span
            className={`${classes["project-status-badge"]} ${
              classes[`status-${project.status.toLowerCase()}`]
            }`}
          >
            {project.status === "Deployed" ? "● Deployed" : "○ Developing"}
          </span>
        </div>

        <div className={classes["project-card-tags"]}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={classes["project-card-tag"]}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={classes["project-card-body"]}>
        <h3 className={classes["project-card-title"]}>{project.title}</h3>
        <p className={classes["project-card-desc"]}>{project.description}</p>

        <div className={classes["project-card-actions"]}>
          {project.status === "Deployed" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={classes["project-card-link-primary"]}
            >
              Live <ExternalLink size={12} />
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={() => onOpen(project)}
            className={classes["project-card-link-secondary"]}
          >
            Details
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
