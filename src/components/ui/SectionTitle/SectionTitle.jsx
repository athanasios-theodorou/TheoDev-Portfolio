import classes from "./SectionTitle.module.css";

export const SectionTitle = ({
  title,
  highlight,
  subtitle,
  center = true,
  withGlow = false,
}) => {
  return (
    <div
      className={`${classes["section-title-wrapper"]} ${center ? classes.center : ""}`}
    >
      {withGlow && <div className={classes["premium-title-glow"]} />}

      <div className={classes["section-header-container"]}>
        <div className={`${classes["section-header-line"]} ${classes.left}`} />

        <h2 className={classes["section-heading"]}>
          {title}{" "}
          {highlight && (
            <span className={classes["glow-text-primary"]}>{highlight}</span>
          )}
        </h2>

        <div className={`${classes["section-header-line"]} ${classes.right}`} />
      </div>

      {subtitle && (
        <p className={classes["section-subtitle"]}>
          <span className={classes["section-subtitle-content"]}>
            {subtitle}
          </span>
        </p>
      )}
    </div>
  );
};
