import { HomeContent } from "./subcomponents/HomeContent";

import classes from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home" className={classes["home-section"]}>
      <div className={classes["home-container"]}>
        <div className={classes["home-grid"]}>
          {/* COMPONENT 1 - LEFT CONTENT */}
          <HomeContent />
          {/* COMPONENT 2 - RIGHT CONTENT */}
          <div></div>
        </div>
      </div>
    </section>
  );
};
