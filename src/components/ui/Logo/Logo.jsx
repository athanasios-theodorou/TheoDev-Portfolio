import classes from "./Logo.module.css";

export const Logo = ({ onNavigate }) => {
  return (
    <a
      href="#home"
      className={classes["navbar-logo"]}
      onClick={(e) => {
        e.preventDefault();
        onNavigate("#home");
      }}
    >
      <div className={classes["navbar-logo-icon"]}>
        <img
          src="/images/LogoTheoDev.png"
          alt="TheoDev Logo"
          className={classes["navbar-logo-img"]}
        />
      </div>
      <span className={classes["navbar-logo-text"]}>
        Theo<span className={classes["navbar-logo-highlight"]}>Dev</span>
      </span>
    </a>
  );
};
