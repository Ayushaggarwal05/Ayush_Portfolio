/**
 * scrollToSection — smooth-scroll to a section by ID.
 *
 * Uses Lenis (if initialised) for the buttery physics-based scroll,
 * falls back to native smooth scroll on elements that haven't loaded yet.
 *
 * @param {string} id - the section element's id
 * @param {number} offset - px to subtract from top (navbar height)
 */
export function scrollToSection(id, offset = 80) {
  const element = document.getElementById(id);
  if (!element) return;

  // Prefer Lenis if available — it handles easing beautifully
  if (window.__lenis) {
    window.__lenis.scrollTo(element, {
      offset: -offset,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    return;
  }

  // Fallback: native smooth scroll with manual offset
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const offsetPosition = elementRect - bodyRect - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
