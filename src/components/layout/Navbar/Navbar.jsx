import { useState, useEffect } from "react";
import { useActiveSection } from "../../../hooks/useActiveSection";

import { Logo } from "../../ui/Logo/Logo";
import { NavLinks } from "./components/NavLinks";

import classes from "./Navbar.module.css";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const activeSection = useActiveSection(["home", "about", "work", "contact"]);

  const handleNav = (href) => {
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
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

  return (
    <>
      <header className={classes["navbar-header"]}>
        <div
          className={`${classes["navbar-container"]} ${scrolled ? classes.scrolled : ""}`}
        >
          <Logo />
          <nav className={classes["navbar-desktop-nav"]}>
            <NavLinks activeSection={activeSection} onNavigate={handleNav} />
          </nav>
          {/* <NavbarActions />
          <MobileMenuToggle /> */}
        </div>
      </header>
    </>
  );
};
