import { useState } from "react";
import { Code2 } from "lucide-react";

import classes from "./TechCard.module.css";

export const TechCard = ({ tech }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`${classes["glass-card"]} ${classes["tech-card"]}`}>
      <div className={classes["tech-card-icon-wrapper"]}>
        <div className={classes["tech-card-glow"]} />
        {!imgError ? (
          <img
            src={tech.icon}
            alt={tech.name}
            className={classes["tech-card-icon"]}
            onError={() => setImgError(true)}
          />
        ) : (
          <Code2 size={24} color="var(--primary)" />
        )}
      </div>
      <span className={classes["tech-card-name"]}>{tech.name}</span>
    </div>
  );
};
