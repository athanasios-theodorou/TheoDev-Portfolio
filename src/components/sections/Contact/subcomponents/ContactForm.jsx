import classes from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <div className={classes["contact-form-col"]}>
      <form className={classes["contact-form"]}>
        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Full name</label>
          <input
            className={classes["contact-input"]}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Email</label>
          <input
            className={classes["contact-input"]}
            type="email"
            name="email"
            placeholder="Example@gmail.com"
          />
        </div>

        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Subject</label>
          <input
            className={classes["contact-input"]}
            type="text"
            name="subject"
            placeholder="Project inquiry"
          />
        </div>

        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Message</label>
          <textarea
            className={
              classes["contact-input"] + " " + classes["contact-textarea"]
            }
            name="message"
            placeholder="Tell me about your project, idea or question..."
          />
        </div>

        <button className={classes["contact-submit-btn"]} type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};
