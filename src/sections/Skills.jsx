import { motion } from "framer-motion";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";

const row1Skills = [
  {
    name: "JavaScript (ES6+)",
    icon: "https://cdn.simpleicons.org/javascript",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript",
    color: "#3178C6",
  },
  {
    name: "HTML5 & CSS3",
    icon: "https://cdn.simpleicons.org/html5",
    color: "#E34F26",
  },
  {
    name: "Python",
    icon: "https://cdn.simpleicons.org/python",
    color: "#3776AB",
  },
  {
    name: "React.js",
    icon: "https://cdn.simpleicons.org/react",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
    color: "#A855F7",
  },
  {
    name: "Node.js & Express",
    icon: "https://cdn.simpleicons.org/nodedotjs",
    color: "#339933",
  },
  {
    name: "Redux / Zustand",
    icon: "https://cdn.simpleicons.org/redux",
    color: "#764ABC",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer/ffffff",
    color: "#F107A3",
  },
  {
    name: "Tauri",
    icon: "https://cdn.simpleicons.org/tauri",
    color: "#FFC131",
  },
  {
    name: "Pandas",
    icon: "https://cdn.simpleicons.org/pandas",
    color: "#150458",
  },
  {
    name: "NumPy",
    icon: "https://cdn.simpleicons.org/numpy",
    color: "#013243",
  },
];

const row2Skills = [
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss",
    color: "#06B6D4",
  },
  {
    name: "PostCSS",
    icon: "https://cdn.simpleicons.org/postcss",
    color: "#DD3A0A",
  },
  {
    name: "CSS Modules / Sass",
    icon: "https://cdn.simpleicons.org/sass",
    color: "#CC6699",
  },
  {
    name: "Git & GitHub",
    icon: "https://cdn.simpleicons.org/git",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/ffffff",
    color: "#FFFFFF",
  },
  {
    name: "MongoDB & PostgreSQL",
    icon: "https://cdn.simpleicons.org/mongodb",
    color: "#47A248",
  },
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker",
    color: "#2496ED",
  },
  {
    name: "Vercel / AWS",
    icon: "https://cdn.simpleicons.org/vercel/ffffff",
    color: "#EC4899",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/ffffff",
    color: "#FFFFFF",
  },
  {
    name: "AWS",
    icon: "https://cdn.simpleicons.org/amazonwebservices",
    color: "#FF9900",
  },
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman",
    color: "#FF6C37",
  },
  {
    name: "VS Code",
    icon: "https://cdn.simpleicons.org/visualstudiocode/007acc",
    color: "#007ACC",
  },
  {
    name: "Firebase",
    icon: "https://cdn.simpleicons.org/firebase",
    color: "#FFCA28",
  },
];

function SkillsComponent() {
  // Duplicate arrays to ensure seamless infinite looping
  const row1 = [...row1Skills, ...row1Skills];
  const row2 = [...row2Skills, ...row2Skills];

  return (
    <div className="w-full relative flex flex-col gap-12 sm:gap-16 overflow-visible">
      {/* Ambient Gold & Amber Light Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[800px] h-[300px] bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-600/5 rounded-full blur-[120px] pointer-events-none -z-20 select-none" />
      <div
        className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-amber-400/5 rounded-full blur-[90px] pointer-events-none -z-20 select-none animate-pulse"
        style={{ animationDuration: "10s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none -z-20 select-none animate-pulse"
        style={{ animationDuration: "14s" }}
      />

      <SectionHeader
        subtitle="MY ARSENAL"
        title="TECHNOLOGIES I MASTER"
        highlightWord="I MASTER"
        description="Building modern web experiences with cutting-edge tools and frameworks"
        className="relative z-10"
      />

      <div className="flex flex-col gap-14 w-full select-none relative z-10">
        {/* Row 1: Left to Right Marquee */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-2 pointer-events-auto">
          {/* Edge gradient masks for premium fade-out effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-left flex gap-16 items-center">
            {row1.map((skill, index) => (
              <div
                key={`${skill.name}-row1-${index}`}
                className="group flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 cursor-pointer shrink-0 relative transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-115"
              >
                {/* Brand-colored shine background glow on hover */}
                <div
                  className="absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500 -z-10 pointer-events-none blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                  }}
                />

                <img
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  style={{
                    filter: `drop-shadow(0 0 10px ${skill.color}35)`,
                  }}
                />

                <span className="mt-3 text-[10px] sm:text-xs font-semibold text-gray-500 group-hover:text-white transition-colors duration-500 text-center pointer-events-none tracking-wider">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-4 pointer-events-auto">
          {/* Edge gradient masks for premium fade-out effect */}
          <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-right flex gap-16 items-center">
            {row2.map((skill, index) => (
              <div
                key={`${skill.name}-row2-${index}`}
                className="group flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 cursor-pointer shrink-0 relative transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-115"
              >
                {/* Brand-colored shine background glow on hover */}
                <div
                  className="absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500 -z-10 pointer-events-none blur-xl"
                  style={{
                    background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`,
                  }}
                />

                <img
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                  style={{
                    filter: `drop-shadow(0 0 10px ${skill.color}35)`,
                  }}
                />

                <span className="mt-3 text-[10px] sm:text-xs font-semibold text-gray-500 group-hover:text-white transition-colors duration-500 text-center pointer-events-none tracking-wider">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Skills = SectionWrapper(SkillsComponent, "skills");
