import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position motion values for zero-latency inner dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring values for physics-based trailing outer ring - snappier response
  const springConfig = { damping: 30, stiffness: 450, mass: 0.4 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only track cursor on desktop device configurations
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if hovering over clickable or input controls
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block select-none pointer-events-none">
      {/* Trailing Targeting Brackets (Fluid Motion) */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 pointer-events-none z-[999999] flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 24,
        }}
      >
        {/* Top-Left Bracket */}
        <div className={`absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] rounded-tl-sm transition-all duration-300 ${
          isHovered ? "border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "border-amber-500/40"
        }`} />
        
        {/* Top-Right Bracket */}
        <div className={`absolute top-0 right-0 w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] rounded-tr-sm transition-all duration-300 ${
          isHovered ? "border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "border-amber-500/40"
        }`} />
        
        {/* Bottom-Left Bracket */}
        <div className={`absolute bottom-0 left-0 w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] rounded-bl-sm transition-all duration-300 ${
          isHovered ? "border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "border-amber-500/40"
        }`} />
        
        {/* Bottom-Right Bracket */}
        <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] rounded-br-sm transition-all duration-300 ${
          isHovered ? "border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "border-amber-500/40"
        }`} />
      </motion.div>

      {/* Center Target Dot (Zero Latency) */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full bg-gradient-to-r from-amber-500 to-orange-500 pointer-events-none z-[999999] shadow-[0_0_10px_rgba(245,158,11,0.65)]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 1.35 : 1,
        }}
      />
    </div>
  );
}
