import { useState } from "react";
import { ArrowUp, Mail, MapPin, Send, CheckCircle2, Terminal, ExternalLink } from "lucide-react";
import { Github, Linkedin, Twitter } from "../components/SocialIcon";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const { name, github, linkedin, twitter, email, location, tagline } = portfolioData.personalInfo;

  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribeEmail) return;
    setLoading(true);
    
    // Simulate premium backend subscription call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setSubscribeEmail("");
      
      // Reset success status after a while
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }, 1000);
  };

  return (
    <footer className="w-full border-t border-white/[0.05] bg-[#07070a] relative pt-20 pb-10 overflow-hidden">
      {/* Premium backdrop ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gradient-to-b from-amber-400/5 via-purple-500/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
      
      {/* Decorative Grid Texture */}
      <div className="absolute inset-0 bg-radial-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand & Status Capsule */}
          <div className="flex flex-col items-start gap-4">
            {/* Logo / Brand Name */}
            <a
              href="#home"
              onClick={scrollToTop}
              className="flex items-center gap-2 group transition-all duration-300 select-none"
            >
              <div className="relative flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#fbbf24] group-hover:scale-125 transition-transform duration-300 animate-pulse" />
              </div>
              <span className="font-serif italic font-extrabold text-2xl tracking-tighter text-white group-hover:text-amber-400 transition-colors duration-300">
                AA
              </span>
            </a>

            {/* Status availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/15 text-[10px] font-semibold text-emerald-400 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              Available for Hire
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mt-2 max-w-xs">
              {tagline}
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full glassmorphism text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] group"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full glassmorphism text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href={twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full glassmorphism text-neutral-400 hover:text-white hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)] group"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 relative">
              <span>Navigation</span>
              <span className="absolute left-0 -bottom-1.5 w-6 h-[1.5px] bg-amber-400/50 rounded-full" />
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Expertise" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Work" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-neutral-400 hover:text-amber-400 transition-colors duration-300 text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-amber-400 group-hover:scale-150 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Custom Tech Stack Tags */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 relative">
              <span>Core Stack</span>
              <span className="absolute left-0 -bottom-1.5 w-6 h-[1.5px] bg-amber-400/50 rounded-full" />
            </h4>
            <div className="flex flex-wrap gap-2 max-w-xs">
              {portfolioData.personalInfo.expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium text-neutral-400 glassmorphism hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter & Inquiries */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 relative">
              <span>Get In Touch</span>
              <span className="absolute left-0 -bottom-1.5 w-6 h-[1.5px] bg-amber-400/50 rounded-full" />
            </h4>

            {/* Email and location rows */}
            <div className="flex flex-col gap-3 w-full mb-6">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 hover:text-amber-400 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.05] flex items-center justify-center group-hover:border-amber-400/20 group-hover:bg-amber-400/5 transition-all duration-300 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 transition-colors duration-300" />
                </div>
                <span className="truncate select-all">{email}</span>
              </a>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-400 cursor-default shrink-0">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.05] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                </div>
                <span>{location}</span>
              </div>
            </div>

            {/* Subscribe container */}
            <form onSubmit={handleSubscribe} className="relative w-full">
              <label htmlFor="footer-subscribe" className="text-[10px] text-neutral-500 font-bold tracking-wider uppercase mb-2 block">
                Stay updated
              </label>
              <div className="relative flex items-center">
                <input
                  id="footer-subscribe"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  disabled={loading || subscribed}
                  className="w-full pl-3 pr-10 py-2 bg-neutral-900/60 border border-white/[0.08] focus:border-amber-400/30 focus:ring-1 focus:ring-amber-400/10 rounded-xl text-xs text-white placeholder-neutral-600 outline-none transition-all duration-300 backdrop-blur-md"
                />
                <button
                  type="submit"
                  disabled={loading || subscribed || !subscribeEmail}
                  className="absolute right-1 py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Subscribe"
                >
                  {loading ? (
                    <span className="w-3 h-3 border-2 border-neutral-400 border-t-white rounded-full animate-spin block" />
                  ) : subscribed ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Send className="w-3 h-3" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="absolute left-0 -bottom-5 text-[10px] text-emerald-400 font-medium tracking-wide">
                  Successfully subscribed! ✨
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Horizontal Divider */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright & Info */}
          <div className="text-xs text-neutral-500 font-light tracking-wide text-center sm:text-left order-2 sm:order-1">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </div>

          {/* Slogan */}
          <div className="text-[11px] text-neutral-600 font-light tracking-wider flex items-center gap-1.5 order-1 sm:order-2">
            <Terminal className="w-3 h-3 text-purple-500 animate-pulse" />
            <span>Designed & Engineered with premium SaaS aesthetics</span>
          </div>

          {/* Back to top button */}
          <a
            href="#home"
            onClick={scrollToTop}
            className="glassmorphism p-2.5 rounded-full text-neutral-400 hover:text-amber-400 border-white/5 hover:border-amber-400/20 shadow-lg hover:-translate-y-1 transition-all duration-300 order-3 group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

