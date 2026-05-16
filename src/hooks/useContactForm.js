import { useState } from "react";
import { personal } from "../assets/data/portfolio";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const useContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${personal.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...form,
            _subject: `New Portfolio Message: ${form.subject || "Inquiry"}`,
            _captcha: "false",
          }),
        },
      );

      const data = await response.json();

      if (data.success === true || data.success === "true") {
        setStatus("sent");

        setTimeout(() => {
          setStatus("idle");
          setForm(INITIAL_FORM_STATE);
        }, 3000);
      } else {
        throw new Error("FormSubmit Error");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return {
    form,
    status,
    handleChange,
    handleSubmit,
  };
};
