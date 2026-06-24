import { motion } from "framer-motion";
import { Sparkles, Terminal, Zap } from "lucide-react";
import { SectionWrapper } from "../layouts/SectionWrapper";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { ProfileCard } from "../components/ProfileCard";
import { portfolioData } from "../data/portfolioData";
import { fadeIn } from "../utils/motion";

function AboutComponent() {
  const { aboutMe, stats } = portfolioData.personalInfo;

  return (
    <div className="w-full">
      <SectionHeader
        subtitle="Get to Know me"
        title="TURNING IDEAS INTO REALITY"
        highlightWord="REALITY"
        description="Developer by day, problem solver by nature. Let's build something amazing together."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-8">
        {/* Left Column: Profile Info Card */}
        <div className="lg:col-span-5 w-full flex flex-col gap-6">
          <ProfileCard index={0} direction="right" />
        </div>

        {/* Right Column: Personal Narrative & Stat Grid */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          {/* Main Story & Philosophy Glass Card */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="glassmorphism relative rounded-3xl p-6 sm:p-8 flex flex-col gap-6 overflow-hidden border border-white/5 hover:border-[#D6A45C]/20 transition-all duration-500 group shadow-lg"
          >
            {/* Top right decorative ambient gradient glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6E1126]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#6E1126]/10 transition-all duration-500" />

            {/* Upper Badge & Heading */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-1.5 self-start py-1 px-3 rounded-full bg-[#6E1126]/10 border border-[#6E1126]/20 text-[10px] font-bold text-[#D6A45C] uppercase tracking-widest">
                <Terminal className="w-3 h-3 text-[#D6A45C]" />
                <span>My Story</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                Bridging Frontend Artistry with{" "}
                <span className="bg-gradient-to-r from-[#D6A45C] to-[#F5F2EE] bg-clip-text text-transparent">
                  Robust Systems
                </span>
              </h3>
            </div>

            {/* Narrative text blocks */}
            <div className="flex flex-col gap-4 text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              <p className="border-l-2 border-[#6E1126]/30 pl-4">{aboutMe}</p>

              <p className="pl-4">
                Driven by a passion for modern web engineering and AI
                innovation, I build scalable full-stack applications with a
                strong focus on performance, clean architecture, and immersive
                user experiences.
              </p>
            </div>

            {/* Micro details indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 border-t border-white/[0.06] pt-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#6E1126]/10 border border-[#6E1126]/20 text-[#D6A45C] rounded-xl mt-0.5 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                    Pixel-Perfect Aesthetics
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Crafting sleek, high-fidelity user experiences that
                    captivate at first glance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl mt-0.5 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-1">
                    Performance First
                  </h4>
                  <p className="text-xs text-neutral-400">
                    Optimizing core vitals and bundle deliveries for ultra-fast,
                    snappy loading.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 mt-2 w-full">
            {stats.map((stat, i) => (
              <Card
                key={stat.id}
                index={i + 1}
                direction="up"
                className="group relative flex flex-col items-center justify-center text-center py-6 px-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] hover:border-[#D6A45C]/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),_0_0_30px_rgba(214,164,92,0.1)] overflow-hidden"
              >
                {/* Spotlight Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(214,164,92,0.06)_0%,transparent_70%)] pointer-events-none" />

                {/* Animated Top Border Line */}
                <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-transparent via-[#D6A45C]/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                {/* Stat Value with customized neon gradient text */}
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-[#D6A45C] mb-1 group-hover:from-[#D6A45C] group-hover:to-[#F5F2EE] transition-all duration-500 font-sans tracking-tight">
                  {stat.value}
                </span>

                {/* Stat Label */}
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-bold text-neutral-400 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const About = SectionWrapper(AboutComponent, "about");
