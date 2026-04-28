import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const targetSection = document.getElementById(id);
      if (targetSection) observer.observe(targetSection);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
