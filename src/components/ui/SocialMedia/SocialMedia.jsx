import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { personal } from "../../../assets/data/portfolio";

import classes from "./SocialMedia.module.css";

const socialLinks = [
  { Icon: FaGithub, href: personal.links.github, label: "GitHub" },
  { Icon: FaLinkedin, href: personal.links.linkedin, label: "LinkedIn" },
  { Icon: FaFacebook, href: personal.links.facebook, label: "Facebook" },
  { Icon: FaInstagram, href: personal.links.instagram, label: "Instagram" },
  { Icon: FaTelegram, href: personal.links.telegram, label: "Telegram" },
];

export const SocialMedia = () => {
  return (
    <div className={classes["social-list"]}>
      {socialLinks.map(({ Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classes["social-link"]}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
};
