import { certificates } from "../../../../assets/data/portfolio";
import { CertCard } from "./CertCard";

import classes from "./WorkTabContent.module.css";

export const WorkTabContent = () => {
  return (
    <div className={classes["work-content-area-elite"]}>
      <div key="certificates" className={classes["work-certs-grid"]}>
        {certificates.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </div>
  );
};
