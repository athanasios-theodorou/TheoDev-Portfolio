import { useState, useEffect } from "react";

import { HomeContent } from "./subcomponents/HomeContent";
import { CodePanel } from "./subcomponents/CodePanel";

import classes from "./Home.module.css";

const ANIMATION_DELAY = 600;

export const Home = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Small delay to ensure background/grid is visible first
  useEffect(() => {
    const animationDelayTimer = setTimeout(() => {
      setShouldAnimate(true);
    }, ANIMATION_DELAY);

    return () => clearTimeout(animationDelayTimer);
  }, []);

  return (
    <section id="home" className={classes["home-section"]}>
      <div className={classes["home-container"]}>
        <div className={classes["home-grid"]}>
          {/* LEFT CONTENT */}
          <HomeContent shouldAnimate={shouldAnimate} />
          {/* RIGHT CONTENT */}
          <CodePanel />
        </div>
      </div>
    </section>
  );
};
