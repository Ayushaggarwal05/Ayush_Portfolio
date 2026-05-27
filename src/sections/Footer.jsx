import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter } from "../components/SocialIcon";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const { name, github, linkedin, twitter } = portfolioData.personalInfo;

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full border-t border-white/[0.03] bg-background relative py-12 md:py-16 overflow-hidden">
      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 bg-radial-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10 flex flex-col items-center justify-center text-center gap-8">
        
        {/* Brand/Logo */}
        <a 
          href="#home" 
          onClick={scrollToTop}
          className="text-lg font-extrabold tracking-widest text-white flex items-center gap-1.5 group"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform" />
          <span>RB.</span>
        </a>

        {/* Social Icons row */}
        <div className="flex items-center gap-5">
          <a 
            href={github} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={twitter} 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        <hr className="w-16 border-white/5" />

        {/* Copyright and Credits */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-gray-500 tracking-wide font-light">
          <span>&copy; {new Date().getFullYear()} {name}. All rights reserved.</span>
          <span className="hidden sm:inline text-white/10">|</span>
          <span>Designed & Engineered with premium SaaS aesthetics.</span>
        </div>

        {/* Back to top button */}
        <a 
          href="#home"
          onClick={scrollToTop}
          className="glassmorphism p-2.5 rounded-full text-gray-500 hover:text-white transition-all duration-300 border-white/5 hover:border-white/10 hover:shadow-lg mt-2 group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>

      </div>
    </footer>
  );
}
