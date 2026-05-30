import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export function SectionWrapper(Component, idName) {
  return function HOC() {
    // Gradual progression of the radial grid texture across sections
    let gridOpacity = "opacity-0";
    if (idName === "about" || idName === "services") {
      gridOpacity = "opacity-[0.04]";
    } else if (idName === "skills") {
      gridOpacity = "opacity-[0.10]"; // Subtle grid becomes visible
    } else if (idName === "experience") {
      gridOpacity = "opacity-[0.16]"; // Grid becomes slightly stronger
    } else if (idName === "projects") {
      gridOpacity = "opacity-[0.12]";
    } else if (idName === "github-activity") {
      gridOpacity = "opacity-[0.22]"; // Peak visual richness
    } else if (idName === "contact") {
      gridOpacity = "opacity-[0.06]"; // Fades back out into darkness
    }

    return (
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        id={idName}
        className="w-full relative py-20 md:py-28 overflow-hidden border-b border-white/[0.02]"
      >
        {/* Subtle background progressive glow grid texture */}
        <div className={`absolute inset-0 bg-radial-grid ${gridOpacity} pointer-events-none transition-opacity duration-1000`} />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
          <Component />
        </div>
      </motion.section>
    );
  };
}
