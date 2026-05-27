import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

export function SectionWrapper(Component, idName) {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        id={idName}
        className="w-full relative py-20 md:py-28 overflow-hidden border-b border-white/[0.03]"
      >
        {/* Subtle background glow grid texture */}
        <div className="absolute inset-0 bg-radial-grid opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
          <Component />
        </div>
      </motion.section>
    );
  };
}
