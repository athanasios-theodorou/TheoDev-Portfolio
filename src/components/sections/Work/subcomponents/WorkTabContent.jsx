import {
  projects,
  certificates,
  techStack,
} from "../../../../assets/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { CertCard } from "./CertCard";
import { TechCard } from "./TechCard";

import classes from "./WorkTabContent.module.css";

export const WorkTabContent = ({ activeTab, onOpenProject }) => {
  return (
    <div>
      {activeTab === "projects" && (
        <div key="projects" className={classes["work-projects-grid"]}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
            />
          ))}
        </div>
      )}

      {activeTab === "certificates" && (
        <div key="certificates" className={classes["work-certs-grid"]}>
          {certificates.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      )}

      {activeTab === "techstack" && (
        <div key="techstack" className={classes["tech-stack-organized"]}>
          {techStack.map((group) => (
            <div key={group.category}>
              <div className={classes["tech-category-header-centered"]}>
                <div className={classes["tech-category-separator"]} />
                <h3 className={classes["tech-category-title-elite"]}>
                  {group.category}
                </h3>
                <div className={classes["tech-category-separator"]} />
              </div>
              <div className={classes["work-tech-grid-elite"]}>
                {group.techs.map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
