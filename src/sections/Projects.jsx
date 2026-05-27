import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Activity, Award } from "lucide-react";
import { Github } from "../components/SocialIcon";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { portfolioData } from "../data/portfolioData";
import { fadeIn } from "../utils/motion";

function ProjectsComponent() {
  const allProjects = portfolioData.projects;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(allProjects.map(proj => proj.category))];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(proj => proj.category === filter);

  return (
    <div className="w-full">
      <SectionHeader 
        subtitle="My Work"
        title="Featured Projects"
        highlightWord="Projects"
        description="A curated selection of applications built with high fidelity frontend engineering and performance audit values."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`text-xs sm:text-sm font-semibold uppercase tracking-wider py-2.5 px-6 rounded-full border transition-all duration-300 cursor-pointer ${
              filter === cat
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-lg shadow-pink-500/15"
                : "glassmorphism text-gray-400 hover:text-white border-white/5 hover:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid with AnimatePresence */}
      <motion.div 
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              className="w-full"
            >
              <Card 
                animate={false} 
                className="h-full flex flex-col p-0 overflow-hidden relative group hover:border-purple-500/20"
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-500/10 transition-all duration-500" />

                {/* Project Image Container */}
                <div className="w-full h-48 sm:h-64 overflow-hidden relative bg-black/40">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                  
                  {/* Category Tag on Image */}
                  <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-md border border-white/5 text-[10px] uppercase tracking-widest font-extrabold text-pink-400 py-1.5 px-3.5 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">{project.title}</h3>
                    
                    {/* Performance metrics display (matches reference mockup vibe) */}
                    <div className="flex flex-wrap items-center gap-3">
                      {project.stats && Object.entries(project.stats).map(([key, val]) => (
                        <div key={key} className="flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-md px-2.5 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          {key === "performance" || key === "score" ? (
                            <Activity className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Award className="w-3.5 h-3.5 text-purple-400" />
                          )}
                          <span>{key}: {val}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold text-gray-300 bg-white/[0.04] py-1 px-3 rounded-full border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <hr className="w-full border-white/5" />

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.liveUrl}
                        className="glassmorphism text-xs font-semibold uppercase tracking-wider py-2.5 px-5 rounded-full text-white hover:bg-white/10 transition-all duration-300 border-white/5 hover:border-white/10 flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export const Projects = SectionWrapper(ProjectsComponent, "projects");
