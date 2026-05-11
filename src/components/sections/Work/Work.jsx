import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { WorkTabContent } from "./subcomponents/WorkTabContent";
import { WorkTabs } from "./subcomponents/WorkTabs";

import classes from "./Work.module.css";

export const Work = () => {
  return (
    <section id="work" className={classes["portfolio-section"]}>
      <div className={classes["portfolio-container"]}>
        <SectionTitle
          title="Work"
          highlight="Showcase"
          subtitle="Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path."
        />

        {/* Work tabs */}
        <WorkTabs />

        {/* Work tab content */}
        <WorkTabContent />
      </div>
    </section>
  );
};
