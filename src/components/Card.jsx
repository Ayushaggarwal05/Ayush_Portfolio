import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

export function Card({ 
  children, 
  className = "", 
  animate = true, 
  index = 0,
  direction = "up",
  ...props 
}) {
  const cardClasses = `glassmorphism rounded-2xl p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/15 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6),_0_0_40px_-10px_rgba(192,132,252,0.12)] ${className}`;

  if (!animate) {
    return (
      <div className={cardClasses} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn(direction, "spring", index * 0.15, 0.75)}
      className={cardClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
}
