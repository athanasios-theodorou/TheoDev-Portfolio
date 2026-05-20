import classes from "./BackgroundScene.module.css";

export const BackgroundScene = () => {
  return (
    <div className={classes["scene-bg-wrapper"]} aria-hidden="true">
      {/* Global Fixed Grid (Now on top of orbs for visibility) */}
      <div className={classes["scene-bg-grid"]} />

      {/* Subtle Vignette/Atmosphere */}
      <div className={classes["scene-bg-vignette"]} />
    </div>
  );
};
