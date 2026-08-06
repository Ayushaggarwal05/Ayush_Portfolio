import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, staggerContainer } from "../utils/motion";
import { scrollToSection } from "../utils/scroll";
import { Button } from "../components/Button";
import LightRays from "../components/LightRays";

export function Hero() {
  const { name, tagline } = portfolioData.personalInfo;

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    scrollToSection(id, 80);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center pt-36 pb-32 overflow-hidden bg-[#030303]"
    >
      {/* 1. PREMIUM BACKGROUND SYSTEM & WEBGL LIGHTRAYS */}
      {/* Layered deep radial blur lighting spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] bg-[#6E1126]/12 rounded-full blur-[140px] pointer-events-none animate-pulse-slow select-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#4A0E1A]/8 rounded-full blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#D6A45C]/6 rounded-full blur-[130px] pointer-events-none select-none z-0" />

      {/* Hardware-accelerated delicate stars field overlay */}
      <div className="absolute inset-0 opacity-45 pointer-events-none select-none z-0">
        <div className="absolute top-[12%] left-[18%] w-1 h-1 bg-white rounded-full animate-ping opacity-60 duration-[5s]" />
        <div className="absolute top-[35%] right-[12%] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-40 animate-pulse duration-[3s]" />
        <div className="absolute top-[22%] right-[28%] w-[2px] h-[2px] bg-white rounded-full opacity-30 animate-pulse duration-[4s]" />
        <div className="absolute bottom-[38%] left-[8%] w-[1.5px] h-[1.5px] bg-white rounded-full opacity-50 duration-[6s]" />
        <div className="absolute bottom-[25%] right-[22%] w-[1px] h-[1px] bg-white rounded-full opacity-45 animate-pulse duration-[5s]" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none select-none z-0" />

      {/* Radial lighting blur mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none select-none z-0" />

      {/* WebGL LightRays interactive light projection */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-85 select-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#D6A45C"
          raysSpeed={0.8}
          lightSpread={1.4}
          rayLength={2.0}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.3}
          noiseAmount={0.03}
          distortion={0.1}
          followMouse={true}
          mouseInfluence={0.1}
        />
      </div>

      {/* 2. MAIN IMMERSIVE CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10 text-center flex flex-col items-center justify-center">
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center"
        >
          {/* Glassmorphic Badge (Welcome Tag) */}
          <motion.div
            variants={fadeIn("up", "spring", 0.15, 0.6)}
            className="glassmorphism text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-white/90 py-2 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center gap-2 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
            <span>⚡ENGINEERING INTELLIGENT DIGITAL EXPERIENCES⚡</span>
          </motion.div>

          {/* Typography Oversized Apple-Style Title with High-Contrast Multi-Stop Glow Gradient */}
          <motion.h1
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-black tracking-[-0.04em] leading-[0.9] text-white max-w-5xl mb-6 select-none"
          >
            <span className="bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#D6A45C] text-transparent block pb-3 leading-none">
              {name}
            </span>
          </motion.h1>

          {/* Subtitle / Role Description - Styled with vibrant split-word visual gradients */}
          <motion.p
            variants={fadeIn("up", "spring", 0.45, 0.75)}
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-neutral-300 max-w-3xl mb-4 select-none"
          >
            <span>Full Stack </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D6A45C] to-[#F5F2EE] font-extrabold">
              Developer
            </span>
            <span className="text-neutral-500 font-medium"> & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6E1126] via-[#D6A45C] to-[#F5F2EE] font-black">
              AI Engineer
            </span>
          </motion.p>

          {/* Spacing & Leading Optimized Tagline */}
          <motion.p
            variants={fadeIn("up", "spring", 0.6, 0.75)}
            className="text-sm sm:text-base md:text-lg text-neutral-400 font-light max-w-2xl leading-relaxed mb-12 tracking-wide"
          >
            {tagline}
          </motion.p>

          {/* Premium Redesigned Action Buttons */}
          <motion.div
            variants={fadeIn("up", "spring", 0.75, 0.75)}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto relative z-20"
          >
            <Button
              variant="primary"
              onClick={(e) => handleScrollTo(e, "projects")}
              icon={ArrowRight}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold shadow-[0_0_35px_rgba(214,164,92,0.2)] hover:shadow-[0_0_45px_rgba(214,164,92,0.4)] border border-white/10 transition-all duration-300"
            >
              View Featured Work
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-white/5 border border-white/10 hover:border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. CINEMATIC GLOWING HORIZON CURVE */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[100vw] h-[60px] md:h-[90px] rounded-t-[100%] border-t border-white/[0.12] bg-gradient-to-b from-white/[0.03] to-transparent shadow-[inset_0_15px_30px_rgba(255,255,255,0.02),0_-20px_60px_rgba(217,70,239,0.18),0_-8px_20px_rgba(255,255,255,0.08)] pointer-events-none select-none z-10 animate-pulse-slow" /> */}
      {/* 3. CINEMATIC GLOWING HORIZON CURVE */}

      <div
        className="
          absolute
          bottom-[-125px]
          left-1/2
          -translate-x-1/2
          w-[170vw]
          md:w-[130vw]
          h-[220px]
          rounded-t-[100%]
          border-t
          border-white/25
          pointer-events-none
          select-none
          z-10
        "
        style={{
          boxShadow: `
      0 -2px 12px rgba(255,255,255,0.7),
      0 -8px 40px rgba(255,255,255,0.18),
      0 -25px 90px rgba(110,17,38,0.18)
    `,
        }}
      />
      {/* Smooth bottom transition overlay to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none select-none z-10" />

      {/* 4. SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block select-none">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "about")}
          className="text-neutral-500 hover:text-white transition-colors duration-500 flex flex-col items-center gap-2.5 group text-xs uppercase tracking-[0.25em] font-semibold"
        >
          <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border border-white/15 flex justify-center p-1.5 bg-neutral-950/20 backdrop-blur-md">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D6A45C] to-[#6E1126] shadow-[0_0_6px_#D6A45C]"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
