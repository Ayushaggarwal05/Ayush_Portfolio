import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Home,
  User,
  Sparkles,
  Code,
  Briefcase,
  Mail,
  ChevronDown,
  FolderGit,
} from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { scrollToSection } from "../utils/scroll";
import logoName from "../assets/logo_name.webp";

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User, hasDropdown: true },
  { id: "services", label: "Expertise", icon: Sparkles },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Work", icon: FolderGit },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(id, 80);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      {/* Floating Glassmorphic Container */}
      <div
        className={`mx-auto max-w-8xl rounded-full border transition-all duration-500 flex items-center justify-between hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] ${
          scrolled
            ? "bg-neutral-950/70 backdrop-blur-xl border-white/10 shadow-2xl py-2.5 px-6"
            : "bg-neutral-950/20 backdrop-blur-lg border-white/[0.05] shadow-lg py-3.5 px-6"
        }`}
      >
        {/* Logo / Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 group transition-all duration-300 hover:opacity-90 select-none py-1"
        >
          <img
            src={logoName}
            alt="Logo"
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links — sliding pill via Framer Motion layoutId */}
        <div className="hidden md:flex bg-neutral-900/60 border border-white/[0.08] backdrop-blur-md rounded-full p-1.5 items-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <ul className="flex items-center gap-0.5">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="relative">
                  {/* Sliding background pill — animates between active items */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-amber-500/[0.08] border border-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.06),inset_0_1px_1px_rgba(245,158,11,0.15)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                        mass: 0.8,
                      }}
                    />
                  )}
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`relative z-10 text-xs lg:text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 px-3 lg:px-4 rounded-full flex items-center gap-1.5 lg:gap-2 group ${
                      isActive
                        ? "text-white"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {IconComponent && (
                      <IconComponent
                        className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${
                          isActive ? "text-amber-400" : "text-neutral-400 group-hover:text-white"
                        } transition-colors duration-200`}
                      />
                    )}
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3 h-3 lg:w-3.5 lg:h-3.5 ${
                          isActive ? "text-white" : "text-neutral-500 group-hover:text-white"
                        } transition-colors duration-200 ml-0.5`}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="relative group overflow-hidden text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-full text-white border border-[#D6A45C]/35 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 hidden md:flex items-center gap-2 shadow-[0_0_15px_rgba(214,164,92,0.12)] hover:border-[#D6A45C]/60 hover:shadow-[0_0_25px_rgba(214,164,92,0.45),inset_0_0_8px_rgba(214,164,92,0.1)] hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Internal glowing backdrop */}
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#D6A45C]/15 to-[#6E1126]/15 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D6A45C] animate-pulse shadow-[0_0_8px_#D6A45C]" />
            <span>Hire Me</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-[#D6A45C]/20 to-[#6E1126]/20 transition-transform duration-500 ease-out" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white focus:outline-none p-2 rounded-full border border-white/[0.08] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute left-4 right-4 mt-3 rounded-2xl border border-white/10 bg-neutral-950/95 backdrop-blur-2xl p-6 shadow-2xl transition-all duration-300 ease-out origin-top ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="w-full">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-base font-medium tracking-wide block py-2.5 px-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-amber-400 bg-amber-500/[0.08] border border-amber-500/20 shadow-inner"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {IconComponent && (
                        <IconComponent
                          className={`w-5 h-5 ${isActive ? "text-amber-400" : "text-neutral-400"}`}
                        />
                      )}
                      <span>{link.label}</span>
                    </div>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                    ) : (
                      link.hasDropdown && (
                        <ChevronDown className="w-4 h-4 text-neutral-600" />
                      )
                    )}
                  </div>
                </a>
              </li>
            );
          })}
          <li className="mt-2 pt-4 border-t border-white/[0.06]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="w-full py-3 px-4 rounded-xl text-center block text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#D6A45C] to-[#6E1126] shadow-[0_4px_15px_rgba(214,164,92,0.3)] hover:opacity-90 active:scale-[0.98] transition-all duration-300"
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
