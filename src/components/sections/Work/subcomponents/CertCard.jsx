import classes from "./CertCard.module.css";

import { Award } from "lucide-react";

export const CertCard = ({ cert, index }) => {
  return (
    <div className={`${classes["glass-card"]} ${classes["cert-card"]}`}>
      <div className={classes["cert-card-num"]}>
        {(index + 1).toString().padStart(2, "0")}
      </div>
      <div className={classes["cert-card-content"]}>
        <p className={classes["cert-card-title"]}>{cert.title}</p>
        <p className={classes["cert-card-meta"]}>
          {cert.issuer} · {cert.year}
        </p>
      </div>
      <Award size={16} className={classes["cert-card-icon"]} />
    </div>
  );
};
