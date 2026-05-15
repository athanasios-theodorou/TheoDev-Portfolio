import { motion } from "framer-motion";
import { Code2, Award, Layers } from "lucide-react";

import classes from "./WorkTabs.module.css";

const TABS = [
  { id: "projects", label: "Projects", Icon: Code2 },
  { id: "certificates", label: "Certificates", Icon: Award },
  { id: "techstack", label: "Tech Stack", Icon: Layers },
];

export const WorkTabs = ({ activeTab, onChangeTab }) => {
  return (
    <div className={classes["work-tabs-nav"]}>
      <div className={classes["work-tabs-container"]}>
        {TABS.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onChangeTab(id)}
              className={`${classes["work-tab-btn-elite"]} ${isActive ? classes.active : ""}`}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-highlight"
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                  }}
                  className={classes["work-tab-highlight"]}
                />
              )}
              <span className={classes["work-tab-label-elite"]}>
                <Icon size={16} className={classes["tab-icon-elite"]} />
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
