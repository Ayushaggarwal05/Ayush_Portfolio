import { Card } from "./Card";
import { portfolioData } from "../data/portfolioData";
import {
  MapPin,
  Mail,
  Cpu,
  ShieldCheck,
  Globe,
  Code,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "./SocialIcon";

// Custom skill icon helper to map context-specific indicators to skill pills
const getSkillIcon = (skill) => {
  switch (skill.toLowerCase()) {
    case "react.js":
    case "react":
      return Cpu;
    case "typescript":
      return ShieldCheck;
    case "node.js":
    case "node":
      return Globe;
    case "python":
      return Code;
    case "next.js":
    case "next":
      return Sparkles;
    default:
      return Code;
  }
};

// Premium Cinematic Profile Card component matching the mockup spec exactly
export function ProfileCard({
  className = "",
  index = 0,
  direction = "right",
}) {
  const {
    name,
    title,
    location,
    email,
    github,
    linkedin,
    twitter,
    avatar,
    status,
    expertise,
  } = portfolioData.personalInfo;

  return (
    <Card
      index={index}
      direction={direction}
      className={`relative overflow-hidden group flex flex-col items-center rounded-3xl w-full ${className}`.trim()}
    >
      {/* Subtle ambient lighting backdrop glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-[#4A0E1A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#4A0E1A]/15 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#6E1126]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#6E1126]/10 transition-all duration-500" />

      {/* 1. Availability Status Tag in top corner */}
      {status && (
        <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 py-1.5 px-3.5 rounded-full text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-widest shadow-[0_2px_10px_rgba(16,185,129,0.05)] select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>{status}</span>
        </div>
      )}

      {/* 2. Centered Avatar Photo Section with Gradient Glow Ring */}
      <div className="flex flex-col items-center text-center mt-6">
        <div className="relative group/avatar cursor-pointer mb-6">
          {/* Pulsating colorful gradient glow circle background */}
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-[#D6A45C] via-[#6E1126] to-[#4A0E1A] opacity-75 group-hover/avatar:opacity-100 group-hover/avatar:scale-[1.03] transition-all duration-500 blur-[3px]" />

          {/* Inner separator backdrop spacer */}
          <div className="absolute inset-[-1px] rounded-full bg-[#030303] z-0" />

          {/* Profile Picture Frame */}
          <div className="w-32 h-32 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-white/10 p-1 relative z-10 bg-black/40">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover/avatar:scale-110"
            />
          </div>

          {/* Secondary glowing check status dot */}
          <div className="absolute bottom-1 right-2 w-4.5 h-4.5 bg-emerald-500 border-[3.5px] border-[#030303] rounded-full z-20 shadow-lg shadow-emerald-500/25" />
        </div>

        {/* 3. Typography Hierarchy Details */}
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2.5">
          {name}
        </h3>

        {/* Dynamic Glassmorphic Role Pill Badge */}
        <div className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-semibold text-[#D6A45C] shadow-md backdrop-blur-md hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 select-none">
          <Cpu className="w-3.5 h-3.5 text-[#D6A45C] animate-pulse" />
          <span>Full Stack & AI Engineer</span>
        </div>

        {/* Location Display */}
        <div className="flex items-center gap-1.5 text-neutral-400 text-xs sm:text-sm mt-4 select-none">
          <MapPin className="w-4 h-4 text-[#D6A45C]" />
          <span>{location}</span>
        </div>

        {/* 4. Glass-rimmed Social Button Grid */}
        <div className="flex items-center gap-4 mt-7">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-white shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.08)] hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-[#0077b5] shadow-md hover:shadow-[0_0_15px_rgba(0,119,181,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-[#1da1f2] shadow-md hover:shadow-[0_0_15px_rgba(29,161,242,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-gray-400 hover:text-[#D6A45C] shadow-md hover:shadow-[0_0_15px_rgba(214,164,92,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="relative w-full flex items-center justify-center my-8">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* 5. Core Expertise Section */}
      {expertise && expertise.length > 0 && (
        <div className="w-full flex flex-col items-center text-center">
          {/* Section Heading */}
          <span
            className="
        text-[10px] sm:text-xs
        font-bold
        tracking-[0.35em]
        text-neutral-500
        uppercase
        mb-5
        select-none
      "
          >
            Core Expertise
          </span>

          {/* Skills Grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-md">
            {expertise.map((skill) => {
              const SkillIcon = getSkillIcon(skill);

              return (
                <div
                  key={skill}
                  className="
              group
              relative
              inline-flex
              items-center
              gap-2
              py-2
              px-4
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              text-sm
              font-medium
              text-neutral-300
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.04)]
              hover:bg-white/[0.08]
              hover:border-[#D6A45C]/30
              hover:shadow-[0_0_25px_rgba(214,164,92,0.12)]
              hover:text-white
              transition-all
              duration-300
              cursor-default
              select-none
            "
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-[#D6A45C]/0 group-hover:bg-[#D6A45C]/[0.06] transition-all duration-300" />

                  {/* Icon */}
                  <SkillIcon className="relative z-10 w-4 h-4 text-[#D6A45C] group-hover:text-[#F5F2EE] transition-colors duration-300" />

                  {/* Text */}
                  <span className="relative z-10">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Card>
  );
}
