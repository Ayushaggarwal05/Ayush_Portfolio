import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

// Scan all image files inside projects_ss subfolders
const projectImages = import.meta.glob("../assets/projects_ss/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// Map project folder names to their IDs in portfolioData
const folderToProjIdMap = {
  asta: "proj-1",
  spatialstudio: "proj-2",
  crewflow: "proj-3",
  kisansaathi: "proj-4",
  netflixgpt: "proj-5",
  ryzeredesign: "proj-6",
  traveller: "proj-7",
  game: "proj-8",
};

// Create a map of project ID to list of screenshot resolved URLs and labels
const projectInsightsMap = {};

Object.entries(projectImages).forEach(([filePath, resolvedUrl]) => {
  // filePath format: "../assets/projects_ss/crewflow/1_overview.webp"
  const pathParts = filePath.split("/");
  if (pathParts.length >= 4) {
    const folderName = pathParts[pathParts.length - 2];
    const fileNameWithExt = pathParts[pathParts.length - 1];
    const projId = folderToProjIdMap[folderName];

    if (projId) {
      if (!projectInsightsMap[projId]) {
        projectInsightsMap[projId] = [];
      }

      // Format filename into a beautiful tab label
      // Remove extension (e.g. ".webp")
      const cleanName = fileNameWithExt.substring(0, fileNameWithExt.lastIndexOf("."));
      
      // Remove leading number sorting prefixes (e.g. "1_", "2_") if present
      let cleanLabel = cleanName.replace(/^\d+[-_]/, "");
      
      // Capitalize first letter of each word and replace dashes/underscores with spaces
      const formattedLabel = cleanLabel
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      projectInsightsMap[projId].push({
        label: formattedLabel,
        image: resolvedUrl,
        filename: fileNameWithExt, // used for alphabetical/numeric sorting
      });
    }
  }
});

// Sort the insights inside each project and clean up empty ones
Object.keys(projectInsightsMap).forEach((projId) => {
  if (projectInsightsMap[projId].length > 0) {
    projectInsightsMap[projId].sort((a, b) => a.filename.localeCompare(b.filename));
  } else {
    // If a project has no local images in its folder, fall back to its default image
    delete projectInsightsMap[projId];
  }
});

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
            const insights = projectInsightsMap[project.id];

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                projectImg={project.image}
                insights={insights}
              />
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
