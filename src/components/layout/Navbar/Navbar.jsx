import { useState, useEffect } from "react";
import { lenisInstance } from "../../../hooks/useLenis";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../../../hooks/useActiveSection";

import { Logo } from "../../ui/Logo/Logo";
import { NavLinks } from "./subcomponents/NavLinks";
import { NavbarActions } from "./subcomponents/NavbarActions";
import { MobileMenu } from "./subcomponents/MobileMenu";

import classes from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection(["home", "about", "work", "contact"]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleNav = (href) => {
    setMenuOpen(false);

    if (lenisInstance) {
      lenisInstance.start();
      lenisInstance.scrollTo(href); // Scroll lenis
    } else {
      // Fallback
      document.querySelector(href)?.scrollIntoView();
    }
  };

  // scroll effect
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll on mobile menu
  useEffect(() => {
    if (!lenisInstance) return;

    if (menuOpen) {
      lenisInstance.stop();
    } else {
      lenisInstance.start();
    }

    return () => lenisInstance.start();
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={classes["navbar-header"]}
      >
        <div
          className={`${classes["navbar-container"]} ${scrolled ? classes.scrolled : ""}`}
        >
          <Logo onNavigate={handleNav} />

          <nav className={classes["navbar-desktop-nav"]}>
            <NavLinks
              variant="desktop"
              activeSection={activeSection}
              onNavigate={handleNav}
            />
          </nav>

          <NavbarActions
            menuOpen={menuOpen}
            onToggleMenu={() => setMenuOpen((prev) => !prev)}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </div>
      </motion.header>
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            key="mobile-menu"
            activeSection={activeSection}
            handleNav={handleNav}
            handleReturn={() => setMenuOpen(false)}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}
      </AnimatePresence>
    </>
  );
};
