import { useEffect, useState, useRef } from "react";

/**
 * useActiveSection — real-time active navbar section detection.
 *
 * Runs on EVERY requestAnimationFrame so it stays perfectly in sync
 * with Lenis's smooth scroll animation. getBoundingClientRect() always
 * reflects the current visual position whether it was moved by Lenis,
 * native scroll, touch, or keyboard. No scroll events needed.
 *
 * @param {string[]} sectionIds - ordered list of section element IDs
 * @param {number} offset - navbar height to subtract from top (px)
 */
export function useActiveSection(sectionIds, offset = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");
  const activeSectionRef = useRef(sectionIds[0] ?? "");
  const sectionIdsRef = useRef(sectionIds);
  const rafIdRef = useRef(null);

  // Keep sectionIds ref fresh
  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    const compute = () => {
      const ids = sectionIdsRef.current;

      // Edge case: near page bottom → force last section
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 60
      ) {
        const lastId = ids[ids.length - 1];
        if (activeSectionRef.current !== lastId) {
          activeSectionRef.current = lastId;
          setActiveSection(lastId);
        }
        return;
      }

      // Find the section whose top is closest to (but still above) the trigger line.
      // Because getBoundingClientRect is called every frame it reflects Lenis's
      // current interpolated position — perfectly real-time.
      let bestId = ids[0];
      let bestDist = Infinity;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const dist = el.getBoundingClientRect().top - offset;

        // Candidate: section top is at or above the trigger line
        if (dist <= 0 && Math.abs(dist) < bestDist) {
          bestDist = Math.abs(dist);
          bestId = id;
        }
      }

      // Only trigger a React re-render when the value actually changes
      if (bestId !== activeSectionRef.current) {
        activeSectionRef.current = bestId;
        setActiveSection(bestId);
      }
    };

    // Continuous RAF loop — runs every ~16ms, perfectly in sync with Lenis
    const loop = () => {
      compute();
      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []); // empty — section IDs and state live in refs to avoid restarts

  return activeSection;
}
