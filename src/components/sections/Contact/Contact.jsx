import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { ContactDetails } from "./subcomponents/ContactDetails";

import classes from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={classes["contact-section"]}>
      <SectionTitle
        title="Contact"
        highlight="Me"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        center
        withGlow
      />
      <div className={classes["contact-container"]}>
        <div className={classes["contact-grid"]}>
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};
