import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Activity, Award, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Github } from "./SocialIcon";
import { createPortal } from "react-dom";

export default function ProjectCard({ project, index, projectImg, insights }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = insights && insights[activeTabIndex] 
    ? insights[activeTabIndex].image 
    : projectImg;

  const subtitle = project.subtitle || "Featured Engineering Application";
  const features = project.features || [];

  // Handle page scroll lock
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [isLightboxOpen]);

  // Handle keyboard events when Lightbox is open
  useEffect(() => {
    if (!isLightboxOpen || !insights || insights.length === 0) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setActiveTabIndex((prev) => (prev + 1) % insights.length);
      } else if (e.key === "ArrowLeft") {
        setActiveTabIndex((prev) => (prev - 1 + insights.length) % insights.length);
      } else if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, insights]);

  const nextImage = (e) => {
    e.stopPropagation();
    if (!insights || insights.length === 0) return;
    setActiveTabIndex((prev) => (prev + 1) % insights.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (!insights || insights.length === 0) return;
    setActiveTabIndex((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-10 lg:gap-16 items-center w-full p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/[0.02] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.07] transition-all duration-500 relative group/card shadow-2xl overflow-hidden`}
    >
      {/* Dynamic Radial Ambient Spotlight following card hover in gold/amber */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-0" />

      {/* Left Block: Landscape Preview Image and Tabs */}
      <div className="w-full lg:w-[48%] flex flex-col gap-4 shrink-0 z-10">
        <motion.div
          initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative group bg-black/40"
        >
          {/* AnimatePresence for smooth crossfade of activeImage */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTabIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              src={activeImage}
              alt={`${project.title} - ${insights && insights[activeTabIndex] ? insights[activeTabIndex].label : 'Overview'}`}
              loading="lazy"
              className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent opacity-60 pointer-events-none" />

          {/* Floating Category Tag */}
          <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/5 text-[9px] uppercase tracking-widest font-extrabold text-amber-400 py-1.5 px-3.5 rounded-full z-20">
            {project.category}
          </span>

          {/* Zoom / Maximize Button (only if insights exist) */}
          {insights && insights.length > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="absolute top-4 right-4 p-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-neutral-400 hover:text-white hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(214,164,92,0.3)] transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer z-20"
              aria-label="View screenshot full screen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          )}

          {/* Floating Navigation Controls (only if there are multiple insights) */}
          {insights && insights.length > 1 && (
            <>
              {/* Left Arrow */}
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-neutral-400 hover:text-white hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(214,164,92,0.3)] transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow */}
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-neutral-400 hover:text-white hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(214,164,92,0.3)] transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Glassmorphic Info Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                <span className="bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>
                    {insights[activeTabIndex].label} • {activeTabIndex + 1} of {insights.length}
                  </span>
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* Carousel Dash Indicators (only if there are multiple insights) */}
        {insights && insights.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-2 select-none">
            {insights.map((insight, tIndex) => (
              <button
                key={insight.label}
                type="button"
                onClick={() => setActiveTabIndex(tIndex)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  activeTabIndex === tIndex
                    ? "w-8 bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]"
                    : "w-2 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to slide ${tIndex + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Block: Content Details */}
      <motion.div
        initial={{ x: index % 2 === 0 ? 80 : -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-start w-full z-10"
      >
        {/* Title & Slogan */}
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E11D48] via-[#D6A45C] to-[#10B981] pb-1">
          {project.title}
        </h3>
        <div className="text-neutral-400 text-xs sm:text-sm font-medium tracking-wide mb-3">
          {subtitle}
        </div>

        {/* Performance metrics display */}
        {project.stats && (
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            {Object.entries(project.stats).map(([key, val]) => (
              <div
                key={key}
                className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider transition-all duration-300 hover:bg-white/[0.06] hover:border-white/10"
              >
                {key === "performance" ||
                key === "accuracy" ||
                key === "score" ||
                key === "optimization" ||
                key === "animation" ||
                key === "engine" ? (
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Award className="w-3.5 h-3.5 text-[#D6A45C]" />
                )}
                <span>
                  {key}:{" "}
                  <span className="text-white font-semibold">
                    {val}
                  </span>
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Gradient accent separator */}
        <div className="w-12 h-[2.5px] bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mb-5" />

        {/* Main Description */}
        <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-6 max-w-2xl">
          {project.description}
        </p>

        {/* Bullets with rotating CSS diamonds */}
        <ul className="flex flex-col gap-3 mb-6">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 font-light"
            >
              <span className="flex-shrink-0 w-2 h-2 rotate-45 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-sm" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold text-neutral-300 bg-white/[0.03] border border-white/[0.08] py-1.5 px-3.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.liveUrl}
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02] flex items-center gap-2"
          >
            <span>View Live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.githubUrl}
            className="border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>
        </div>
      </motion.div>

      {/* Full-Screen Lightbox Overlay using React Portal to escape stacking contexts */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isLightboxOpen && insights && insights.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[99999] flex items-center justify-center p-4 md:p-8"
            >
              {/* Modal Frame Container */}
              <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl h-[85vh] max-h-[85vh] bg-[#0c0c0c] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              >
                {/* Close Button - absolute to modal frame */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute top-4 right-4 p-2.5 rounded-full border border-white/10 bg-neutral-900/80 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(214,164,92,0.3)] transition-all duration-300 cursor-pointer z-50"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* LEFT PANEL: Landscape Preview Image & Carousel Controls */}
                <div className="w-full lg:w-[63%] h-[38vh] lg:h-full relative bg-neutral-950/80 flex flex-col justify-between p-6 border-b lg:border-b-0 lg:border-r border-white/5 select-none">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between w-full">
                    <span className="bg-white/5 border border-white/10 text-[9px] uppercase tracking-widest font-extrabold text-amber-400 py-1.5 px-3.5 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Large Image Box */}
                  <div className="w-full flex-grow flex items-center justify-center overflow-hidden py-4 relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeTabIndex}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.03 }}
                        transition={{ duration: 0.25 }}
                        src={activeImage}
                        alt={`${project.title} - ${insights[activeTabIndex].label}`}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-xl"
                      />
                    </AnimatePresence>

                    {/* Floating Left Arrow (floating outside image container) */}
                    {insights.length > 1 && (
                      <button
                        type="button"
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-black/60 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(214,164,92,0.3)] transition-all duration-300 cursor-pointer z-30"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}

                    {/* Floating Right Arrow (floating outside image container) */}
                    {insights.length > 1 && (
                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/10 bg-black/60 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(214,164,92,0.3)] transition-all duration-300 cursor-pointer z-30"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                  </div>

                  {/* Bottom Counter Indicator */}
                  <div className="flex flex-col items-center gap-3.5 w-full">
                    <span className="bg-black/60 backdrop-blur-md border border-white/5 text-[10px] font-semibold tracking-wider text-white px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>
                        {insights[activeTabIndex].label} • {activeTabIndex + 1} of {insights.length}
                      </span>
                    </span>

                    {/* Carousel dots indicators */}
                    {insights.length > 1 && (
                      <div className="flex items-center gap-1.5">
                        {insights.map((insight, tIndex) => (
                          <button
                            key={`lightbox-dot-${insight.label}`}
                            type="button"
                            onClick={() => setActiveTabIndex(tIndex)}
                            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                              activeTabIndex === tIndex
                                ? "w-8 bg-gradient-to-r from-amber-500 to-orange-500"
                                : "w-2 bg-white/10 hover:bg-white/20"
                            }`}
                            aria-label={`Go to slide ${tIndex + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT PANEL: Tech Case Study details (Scrollable) */}
                <div 
                  data-lenis-prevent
                  className="w-full lg:w-[37%] h-[calc(85vh-38vh)] lg:h-full min-h-0 bg-white/[0.01] backdrop-blur-md p-6 md:p-8 overflow-y-auto flex flex-col gap-7 scrollbar-thin select-text"
                >
                  {/* Header Title section */}
                  <div className="pr-10">
                    <h3 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#E11D48] via-[#D6A45C] to-[#10B981] pb-1">
                      {project.title}
                    </h3>
                    <div className="text-neutral-400 text-xs font-semibold tracking-wider uppercase mt-1">
                      {subtitle}
                    </div>
                    {/* Accent line separator */}
                    <div className="w-12 h-[2.5px] bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mt-4" />
                  </div>

                  {/* Case Study breakdown (with dynamic fallback to default description if caseStudy doesn't exist) */}
                  {project.caseStudy ? (
                    <div className="flex flex-col gap-6 text-sm">
                      {/* Overview */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest">
                          Project Overview
                        </span>
                        <p className="text-neutral-300 font-light leading-relaxed">
                          {project.caseStudy.overview}
                        </p>
                      </div>

                      {/* Engineering Challenge */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-rose-400 font-extrabold uppercase tracking-widest">
                          The Challenge
                        </span>
                        <p className="text-neutral-300 font-light leading-relaxed">
                          {project.caseStudy.challenge}
                        </p>
                      </div>

                      {/* Technical Solution */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">
                          The Solution
                        </span>
                        <p className="text-neutral-300 font-light leading-relaxed">
                          {project.caseStudy.solution}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 text-sm">
                      <div className="flex flex-col gap-2">
                        <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-widest">
                          Overview
                        </span>
                        <p className="text-neutral-300 font-light leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Performance stats bento grid */}
                  {project.stats && (
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest">
                        System Architecture Metrics
                      </span>
                      <div className="grid grid-cols-2 gap-3.5">
                        {Object.entries(project.stats).map(([k, v]) => (
                          <div 
                            key={k}
                            className="bg-white/[0.02] border border-white/5 rounded-xl p-3.5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                          >
                            <span className="text-[9px] text-neutral-500 uppercase font-extrabold tracking-wider">
                              {k}
                            </span>
                            <p className="text-white text-sm font-semibold mt-1">
                              {v}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Achievements Bullet points */}
                  {features.length > 0 && (
                    <div className="flex flex-col gap-3">
                      <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest">
                        Key Features & Milestones
                      </span>
                      <ul className="flex flex-col gap-3.5">
                        {features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-sm mt-1.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] text-neutral-500 font-extrabold uppercase tracking-widest">
                      Tech Stack Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold text-neutral-300 bg-white/[0.03] border border-white/[0.08] py-1.5 px-3 rounded-full hover:bg-white/[0.05] transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call to Actions buttons inside scroll section */}
                  <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/5">
                    <a
                      href={project.liveUrl}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-[1.02] flex items-center gap-2"
                    >
                      <span>View Live</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.div>
  );
}
