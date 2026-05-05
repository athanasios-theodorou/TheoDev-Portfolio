import classes from "./HomeContent.module.css";

export const HomeContent = () => {
  return (
    <div className={classes["home-content"]}>
      <div>
        <h1>
          <span className={classes["home-h1-first"]}>Athanasios</span>
          <span className={classes["home-h1-second"]}>Theodorou</span>
        </h1>
      </div>
      <p className={classes["home-bio"]}>
        Specialized in architecting high-performance interfaces and turning
        complex code into elegant digital products.
      </p>
      <div className={classes["home-actions"]}>
        <a className={classes["home-btn-primary"]}>View Projects</a>
        <a className={classes["home-btn-secondary"]}>Let's Talk</a>
      </div>
    </div>
  );
};
