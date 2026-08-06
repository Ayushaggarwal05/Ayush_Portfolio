import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioData } from "../data/portfolioData";
import { fadeIn } from "../utils/motion";

function ExperienceComponent() {
  const experiences = portfolioData.experience || [];

  return (
    <div className="w-full relative">
      {/* Background ambient lighting effects */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] aspect-square rounded-full bg-gradient-to-tr from-[#6E1126]/5 to-[#4A0E1A]/10 blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] aspect-square rounded-full bg-gradient-to-br from-[#D6A45C]/5 to-transparent blur-[100px] pointer-events-none z-0" />

      <SectionHeader
        subtitle="My Journey"
        title="PROFESSIONAL EXPERIENCE"
        highlightWord="EXPERIENCE"
        description="A timeline of my professional career, internships, and key engineering roles."
      />

      <div className="relative flex flex-col items-center mt-12 md:mt-20">
        {/* Central Vertical Line for Desktop Timeline */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#D6A45C]/20 via-[#6E1126]/30 to-[#4A0E1A]/10 pointer-events-none hidden md:block" />

        <div className="flex flex-col gap-12 md:gap-16 w-full relative z-10">
          {experiences.map((exp, index) => {
            const bulletPoints = exp.points || (exp.description
              ? exp.description
                  .split(". ")
                  .map((sentence) => sentence.trim())
                  .filter((sentence) => sentence.length > 0)
              : []);

            const isEven = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row w-full ${
                  isEven ? "md:flex-row-reverse" : ""
                } justify-between items-start md:items-stretch relative group/row`}
              >
                {/* Timeline Dot (Desktop center, Mobile left aligned) */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 rounded-full bg-[#070707] border-2 border-[#D6A45C] shadow-[0_0_12px_#D6A45C] z-20 flex items-center justify-center group-hover/row:scale-125 group-hover/row:border-amber-400 group-hover/row:shadow-[0_0_16px_rgba(251,191,36,0.8)] transition-all duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6E1126] group-hover/row:bg-amber-400 transition-colors duration-500" />
                </div>

                {/* Left/Right Container 1: Date & Duration (Timeline Left/Right side) */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] flex ${
                    isEven ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"
                  } pl-14 md:pl-0 pr-0 items-center`}
                >
                  <motion.div
                    variants={fadeIn(isEven ? "left" : "right", "spring", index * 0.2, 0.75)}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-full py-2 px-5 text-sm font-semibold text-neutral-300 backdrop-blur-md shadow-md group-hover/row:border-[#D6A45C]/30 group-hover/row:text-white transition-all duration-500 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-[#D6A45C] group-hover/row:animate-pulse" />
                    <span>{exp.duration}</span>
                  </motion.div>
                </div>

                {/* Divider Column Spacer for spacing alignment */}
                <div className="w-12 h-0 hidden md:block" />

                {/* Left/Right Container 2: Main Glass Card content */}
                <div className="w-full md:w-[calc(50%-40px)] pl-14 md:pl-0 pr-0">
                  <motion.div
                    variants={fadeIn(isEven ? "right" : "left", "spring", index * 0.25, 0.75)}
                    viewport={{ once: true }}
                    className="glassmorphism rounded-3xl p-6 sm:p-8 flex flex-col gap-6 border border-white/5 hover:border-[#D6A45C]/20 hover:shadow-[0_20px_50px_rgba(74,14,26,0.25)] transition-all duration-500 relative group overflow-hidden"
                  >
                    {/* Animated top accent gradient line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D6A45C] to-transparent opacity-60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                    {/* Corner gradient glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#6E1126]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#6E1126]/10 transition-all duration-500" />

                    {/* Card Header info */}
                    <div className="flex flex-col gap-2 relative z-10">
                      <div className="flex items-center gap-4">
                        {/* Company logo icon container */}
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6E1126]/20 to-[#4A0E1A]/40 border border-white/5 flex items-center justify-center text-[#D6A45C] shadow-inner shrink-0 group-hover:border-[#D6A45C]/30 group-hover:shadow-[0_0_15px_rgba(110,17,38,0.3)] transition-all duration-500 select-none">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug group-hover:text-[#D6A45C] transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-[#D6A45C] tracking-wide mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Content - Bullet Points */}
                    {bulletPoints.length > 0 && (
                      <ul className="flex flex-col gap-3.5 relative z-10 text-neutral-400 text-sm leading-relaxed pl-1.5">
                        {bulletPoints.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-[#D6A45C] to-amber-300 mt-2 shrink-0 shadow-[0_0_6px_rgba(214,164,92,0.6)]" />
                            <span className="group-hover:text-neutral-300 transition-colors duration-300">
                              {point.endsWith(".") ? point : `${point}.`}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technologies/Skills Tags */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.04] mt-2 relative z-10">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-neutral-400 shadow-sm transition-all duration-300 hover:border-[#D6A45C]/30 hover:bg-[#D6A45C]/5 hover:text-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const Experience = SectionWrapper(ExperienceComponent, "experience");
