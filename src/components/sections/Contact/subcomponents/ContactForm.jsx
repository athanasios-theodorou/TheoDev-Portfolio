import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useContactForm } from "../../../../hooks/useContactForm";

import classes from "./ContactForm.module.css";

export const ContactForm = () => {
  const { form, status, handleChange, handleSubmit } = useContactForm();

  const getButtonStateClass = () => {
    if (status === "sending") return classes["contact-submit-btn--sending"];
    if (status === "sent") return classes["contact-submit-btn--sent"];
    return "";
  };

  const renderButtonContent = () => {
    if (status === "sending") {
      return (
        <>
          <Loader2 size={16} /> Sending...
        </>
      );
    }

    if (status === "sent") {
      return (
        <>
          <CheckCircle2 size={16} /> Message Sent!
        </>
      );
    }

    return (
      <>
        <Send size={16} /> Send Message
      </>
    );
  };

  return (
    <div className={classes["contact-form-col"]}>
      <form className={classes["contact-form"]} onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Full Name</label>
          <input
            className={classes["contact-input"]}
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Email</label>
          <input
            className={classes["contact-input"]}
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Subject */}
        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Subject</label>
          <input
            className={classes["contact-input"]}
            type="text"
            name="subject"
            placeholder="Project inquiry"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className={classes["contact-input-group"]}>
          <label className={classes["contact-input-label"]}>Message</label>
          <textarea
            className={
              classes["contact-input"] + " " + classes["contact-textarea"]
            }
            name="message"
            placeholder="Tell me about your project, idea or question..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          className={`${classes["contact-submit-btn"]} ${getButtonStateClass()}`}
          type="submit"
          disabled={status !== "idle"}
        >
          {renderButtonContent()}
        </button>
      </form>
    </div>
  );
};
