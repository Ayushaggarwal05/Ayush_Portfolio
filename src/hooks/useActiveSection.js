import { useEffect, useState } from "react";

export function useActiveSection(sectionIds, threshold = 0.2) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-30% 0px -40% 0px", // focus on the middle section of the viewport
      threshold,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
