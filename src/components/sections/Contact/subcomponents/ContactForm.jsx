import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  slideInRight,
  staggerContainer,
  fadeUp,
} from "../../../../utils/animations";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useContactForm } from "../../../../hooks/useContactForm";

import classes from "./ContactForm.module.css";

export const ContactForm = () => {
  const formRef = useRef(null);

  // Sticky effect for form fields (staggered stack)
  const { scrollYProgress: formScroll } = useScroll({
    target: formRef,
    offset: ["start end", "end start"],
  });
  const formStickyY = useTransform(formScroll, [0, 1], [30, -30]);
  const formSmoothStickyY = useSpring(formStickyY, {
    stiffness: 100,
    damping: 20,
  });

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
    <motion.div
      ref={formRef}
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      style={{ y: formSmoothStickyY }}
      className={classes["contact-form-col"]}
    >
      <motion.form
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className={classes["contact-form"]}
        onSubmit={handleSubmit}
      >
        {/* Honeypot (anti-bot hidden field) */}
        <input
          type="text"
          name="botcheck"
          value={form.botcheck}
          onChange={handleChange}
          autoComplete="off"
          tabIndex="-1"
          style={{ display: "none" }}
        />

        {/* Full Name */}
        <motion.div
          variants={fadeUp}
          custom={0.1}
          className={classes["contact-input-group"]}
        >
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
        </motion.div>

        {/* Email */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          className={classes["contact-input-group"]}
        >
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
        </motion.div>

        {/* Subject */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className={classes["contact-input-group"]}
        >
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
        </motion.div>

        {/* Message */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          className={classes["contact-input-group"]}
        >
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
        </motion.div>

        {/* Submit Button */}
        <motion.button
          variants={fadeUp}
          custom={0.5}
          whileHover={status === "idle" ? { scale: 1.02 } : {}}
          whileTap={status === "idle" ? { scale: 0.98 } : {}}
          className={`${classes["contact-submit-btn"]} ${getButtonStateClass()}`}
          type="submit"
          disabled={status !== "idle"}
        >
          {renderButtonContent()}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};
