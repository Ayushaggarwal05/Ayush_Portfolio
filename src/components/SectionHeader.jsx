import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

export function SectionHeader({
  subtitle,
  title,
  description,
  className = "",
  highlightWord = "",
}) {
  const renderTitle = () => {
    if (!highlightWord) return title;

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      variants={textVariant(0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`text-center max-w-6xl mx-auto mb-12 md:mb-16 ${className}`}
    >
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.2em] font-bold text-pink-500 mb-2 block">
          // {subtitle}
        </span>
      )}

      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 font-serif">
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-sm sm:text-base md:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
