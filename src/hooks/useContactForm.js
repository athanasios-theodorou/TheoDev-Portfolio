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
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  // timestamp (anti-bot speed check)
  const startTimeRef = useRef(null);

  /**
   * Validates form fields against specific portfolio-optimized constraints.
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  const validateForm = () => {
    const newErrors = {};

    // 1. Name validation (required, length limits)
    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (form.name.trim().length > 50) {
      newErrors.name = "Name cannot exceed 50 characters.";
    }

    // 2. Email validation (required, standard regex format verification)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 3. Subject validation (required, length limits)
    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
    } else if (form.subject.trim().length < 4) {
      newErrors.subject = "Subject must be at least 4 characters.";
    } else if (form.subject.trim().length > 100) {
      newErrors.subject = "Subject cannot exceed 100 characters.";
    }

    // 4. Message validation (required, optimized min length for quick messages)
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (form.message.trim().length > 2000) {
      newErrors.message = "Message cannot exceed 2000 characters.";
    }

    setErrors(newErrors);

    // Form is valid only if the newErrors object has zero keys
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now(); // on first interaction
    }

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Dynamically clear the field's error message as the user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

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
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          botcheck: form.botcheck,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");

        // reset form + errors + timer
        setTimeout(() => {
          setStatus("idle");
          setForm(INITIAL_FORM_STATE);
          setErrors({});
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

  return { form, errors, status, handleChange, handleSubmit };
};
