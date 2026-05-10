import { motion } from "framer-motion";
import { Code2, Award, Globe } from "lucide-react";
import { zoomIn } from "../../../../utils/animations";

import classes from "./StatCard.module.css";

const iconMap = {
  code: Code2,
  award: Award,
  globe: Globe,
};

export const StatCard = ({ stat, index }) => {
  const Icon = iconMap[stat.icon] || Code2;

  return (
    <motion.div
      variants={zoomIn}
      custom={0.2 + index * 0.15}
      className={classes["concept-stat-card"]}
    >
      <div className={classes["stat-header"]}>
        <div className={classes["stat-icon-box"]}>
          <Icon size={24} />
        </div>
        <span className={classes["stat-number-big"]}>{stat.value}</span>
      </div>

      <div className={classes["stat-label-group"]}>
        <span className={classes["stat-main-label"]}>{stat.label}</span>
        <span className={classes["stat-sub-label"]}>{stat.description}</span>
      </div>
    </motion.div>
  );
};
