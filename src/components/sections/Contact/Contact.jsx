import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { ContactDetails } from "./subcomponents/ContactDetails";
import { ContactForm } from "./subcomponents/ContactForm";

import classes from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={classes["contact-section"]}>
      <div className={classes["contact-container"]}>
        <SectionTitle
          title="Contact"
          highlight="Me"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
          center
          withGlow
        />
        <div className={classes["contact-grid"]}>
          {/* LEFT CONTENT */}
          <ContactDetails />

          {/* RIGHT CONTENT */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
