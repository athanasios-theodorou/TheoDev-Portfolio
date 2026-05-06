import { useState, useEffect } from "react";

import classes from "./TypeWriter.module.css";

const WORDS = [
  "Software Engineer",
  "React Developer",
  "UI/UX Craftsman",
  "Front-End Builder",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const PAUSE_DURATION = 2500;

export const TypeWriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = WORDS[wordIndex];

  useEffect(() => {
    let timeout;

    // Typing
    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, TYPING_SPEED);
    }

    // Pause before deleting
    else if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION);
    }

    // Deleting
    else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(text.slice(0, -1));
      }, DELETING_SPEED);
    }

    // Move to next word
    else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWord]);

  return (
    <span className={classes["typewriter-container"]}>
      <span className={classes["typewriter-text"]}>{text}</span>
      <span className={classes["typewriter-cursor"]} />
    </span>
  );
};
