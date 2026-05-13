import { useState } from "react";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { WorkTabContent } from "./subcomponents/WorkTabContent";
import { WorkTabs } from "./subcomponents/WorkTabs";
import { ProjectModal } from "./subcomponents/ProjectModal";

import classes from "./Work.module.css";

export const Work = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className={classes["work-section"]}>
      <div className={classes["work-container"]}>
        <SectionTitle
          title="Work"
          highlight="Showcase"
          subtitle={
            <>
              Explore my journey through projects, certifications, and technical
              expertise.
              <br />
              Each section represents a milestone in my continuous learning
              path.
            </>
          }
          center
          withGlow
        />

        {/* Work tabs */}
        <WorkTabs activeTab={activeTab} onChangeTab={setActiveTab} />

        {/* Work tab content */}
        <WorkTabContent
          activeTab={activeTab}
          onOpenProject={setActiveProject}
        />
      </div>

      {/* Project modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
