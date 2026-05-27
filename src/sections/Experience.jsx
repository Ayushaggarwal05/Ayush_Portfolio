import { Briefcase, Calendar } from "lucide-react";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { portfolioData } from "../data/portfolioData";

function ExperienceComponent() {
  const experiences = portfolioData.experience;

  return (
    <div className="w-full">
      <SectionHeader 
        subtitle="Journey"
        title="Experience Timeline"
        highlightWord="Timeline"
        description="A chronology of my professional roles, milestones, and contributions in full stack engineering."
      />

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto mt-12 pl-6 sm:pl-12">
        {/* Vertical line indicator */}
        <div className="absolute left-[10px] sm:left-[22px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500/20" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              
              {/* Pulse Indicator dot */}
              <div className="absolute -left-[20px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-background border-4 border-purple-500 z-10 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping absolute" />
              </div>

              {/* Card wrapper */}
              <Card 
                index={index} 
                direction="left" 
                className="hover:border-purple-500/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/5 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-pink-400" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mt-0.5">{exp.company}</p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 border border-purple-500/20 py-1 px-3.5 rounded-full self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {exp.description}
                </p>
              </Card>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Experience = SectionWrapper(ExperienceComponent, "experience");
