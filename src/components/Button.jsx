import { motion } from "framer-motion";

export function Button({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "", 
  icon: Icon = null,
  href = null,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 gap-2 cursor-pointer outline-none focus:ring-2 focus:ring-primary/50";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#6E1126] via-[#D6A45C] to-[#4A0E1A] text-white shadow-lg shadow-[#D6A45C]/10 hover:shadow-[#D6A45C]/25 border border-transparent",
    secondary: "glassmorphism text-white hover:bg-white/10 border-white/10",
    outline: "border border-[#D6A45C]/50 hover:border-[#D6A45C] text-[#D6A45C] hover:text-white bg-transparent hover:bg-[#6E1126]/10",
    text: "text-gray-400 hover:text-white bg-transparent px-3 py-2"
  };

  const buttonContent = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: `group ${baseStyles} ${variants[variant]} ${className}`,
    onClick,
    ...props
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...motionProps}>
      {buttonContent}
    </motion.button>
  );
}
