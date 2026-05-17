import { useState, useRef } from "react";

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "",
};

const WEB3FORMS_KEY = "6ba03c5f-bc05-4861-9a79-6345bba0ffa8";

export const useContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState("idle");

  // timestamp (anti-bot speed check)
  const startTimeRef = useRef(null);

  const handleChange = (e) => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now(); // on first interaction
    }

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    try {
      // BOT CHECK #1: honeypot
      if (form.botcheck) {
        setStatus("idle");
        return;
      }

      // BOT CHECK #2: speed check
      if (startTimeRef.current && Date.now() - startTimeRef.current < 3000) {
        setStatus("idle");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          botcheck: form.botcheck, // required for honeypot detection on backend too
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");

        // reset form + timer
        setTimeout(() => {
          setStatus("idle");
          setForm(INITIAL_FORM_STATE);

          startTimeRef.current = null;
        }, 3000);
      } else {
        console.error(data);
        setStatus("idle");
      }
    } catch (error) {
      console.error("FORM ERROR:", error);
      setStatus("idle");
    }
  };

  return { form, status, handleChange, handleSubmit };
};
