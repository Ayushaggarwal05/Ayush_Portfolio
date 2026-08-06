import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowDown, Activity, Award } from "lucide-react";
import { Github } from "../components/SocialIcon";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";

import crewflowImg from "../assets/projects_ss/Crewflow_ss.png";
import kisanSaathiImg from "../assets/projects_ss/Kisan_saathi_ss.webp";
import netflixGptImg from "../assets/projects_ss/Netflix-gpt_ss.png";
import ryzeRedesignImg from "../assets/projects_ss/ryze-redesign-ss.png";
import travellerImg from "../assets/projects_ss/Traveller_ss.webp";
import gameImg from "../assets/projects_ss/game_ss.png";

const projectImageMap = {
  "proj-3": crewflowImg,
  "proj-4": kisanSaathiImg,
  "proj-5": netflixGptImg,
  "proj-6": ryzeRedesignImg,
  "proj-7": travellerImg,
  "proj-8": gameImg,
};

function ProjectsComponent() {
  const allProjects = portfolioData.projects;
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    "All",
    ...new Set(allProjects.map((proj) => proj.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((proj) => proj.category === filter);

  // Show only 3 projects initially, expand if showAll is true
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <div className="w-full relative">
      {/* Premium ambient backdrop lighting blobs in rich gold/amber - seamlessly feathered */}
      <div className="absolute top-[5%] left-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-amber-500/[0.02] via-orange-500/[0.06] to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-yellow-500/[0.02] via-amber-500/[0.06] to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Center horizontal ambient brush glow highlight for premium visual lift */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70%] aspect-[2/1] rounded-full bg-gradient-to-r from-transparent via-amber-500/[0.03] to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Decorative vertical lines on the sides for desktop structure */}
      <div className="absolute left-[-20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />
      <div className="absolute right-[-20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block" />

      <SectionHeader
        subtitle="My Work"
        title="FEATURED PROJECTS"
        highlightWord="PROJECTS"
        description="A curated selection of applications built with high fidelity frontend engineering and performance audit values."
        className="relative z-10"
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16 sm:mb-20 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilter(cat);
              setShowAll(false); // Reset expansion upon changing filters
            }}
            className={`text-xs sm:text-sm font-semibold uppercase tracking-wider py-2.5 px-6 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === cat
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-lg shadow-amber-500/15"
                : "glassmorphism text-neutral-400 hover:text-white border-white/5 hover:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Editorial Horizontal Projects Stack */}
      <div className="flex flex-col gap-10 sm:gap-14 w-full relative z-10">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => {
            const subtitle =
              project.subtitle || "Featured Engineering Application";
            const features = project.features || [];
            const projectImg = projectImageMap[project.id] || project.image;

            return (
              <motion.div
                layout
                key={project.id}
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

                {/* Left Block: Landscape Preview Image with Left-to-Center Animation */}
                <motion.div
                  initial={{ x: index % 2 === 0 ? -80 : 80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-[48%] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative group bg-black/40 shrink-0 z-10"
                >
                  <img
                    src={projectImg}
                    alt={project.title}
                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent opacity-60" />

                  {/* Floating Category Tag */}
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/5 text-[9px] uppercase tracking-widest font-extrabold text-amber-400 py-1.5 px-3.5 rounded-full">
                    {project.category}
                  </span>
                </motion.div>

                {/* Right Block: Content Details with Right-to-Center Animation */}
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

                  {/* Performance metrics display (matches reference mockup vibe) */}
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
                        {/* 45-degree rotated CSS square forms a perfect diamond! */}
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
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Show-Limit Expansion Toggle Button */}
      {filteredProjects.length > 3 && (
        <div className="flex justify-center mt-12 sm:mt-16 relative z-10">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="relative group overflow-hidden px-8 py-3.5 rounded-full text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-lg hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.12)] text-xs font-semibold tracking-wider uppercase cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "View More Projects"}</span>
            <motion.span
              animate={{ y: showAll ? -2 : 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.8,
              }}
            >
              <ArrowDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </motion.span>
          </button>
        </div>
      )}
    </div>
  );
}

export const Projects = SectionWrapper(ProjectsComponent, "projects");
