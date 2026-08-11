import { motion } from "framer-motion";
import { GitBranch, GitCommit, ExternalLink } from "lucide-react";
import { Github } from "../components/SocialIcon";
import { SectionWrapper } from "../layouts/SectionWrapper";

function GithubActivityComponent() {
  return (
    <div className="w-full relative">
      {/* Premium ambient backdrop glow layers in warm amber/gold - seamlessly feathered */}
      <div className="absolute top-[5%] left-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-amber-500/[0.02] via-orange-500/[0.06] to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-yellow-500/[0.02] via-amber-500/[0.06] to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Center horizontal ambient brush glow highlight for premium visual lift */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70%] aspect-[2/1] rounded-full bg-gradient-to-r from-transparent via-amber-500/[0.03] to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Customized Section Header matching mockup perfectly */}
      <div className="flex flex-col items-center justify-center relative z-10 mb-16 md:mb-20">
        {/* Open Source Pill Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2.5 bg-neutral-900/60 border border-white/5 px-5 py-2 rounded-full text-neutral-300 text-xs font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-lg shadow-black/20"
        >
          <GitBranch className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Open Source</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 text-center font-serif"
        >
          GITHUB <span className="text-gradient">ACTIVITY</span>
        </motion.h2>

        {/* Slogan Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg text-neutral-400 font-light max-w-xl text-center leading-relaxed"
        >
          Consistent contributions and continuous learning
        </motion.p>
      </div>

      {/* Glassmorphic Contribution Card */}
      <motion.div
        initial={{ y: 65, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto rounded-3xl border border-white/[0.04] bg-neutral-950/40 hover:border-amber-500/15 backdrop-blur-md p-6 sm:p-8 lg:p-10 shadow-2xl relative group/card transition-all duration-500 overflow-hidden z-10"
      >
        {/* Ambient backing highlight in amber/gold following card hover */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-full blur-3xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-0" />

        {/* Card Header Line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.03] pb-6 mb-8 relative z-10">
          <div className="flex items-center gap-3">
            {/* Live GitHub Avatar with Amber Halo Glow and Pulse Active Dot */}
            <div className="relative group/avatar w-10 h-10 shrink-0">
              <div className="absolute -inset-[1px] rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 opacity-60 group-hover/avatar:opacity-100 blur-[2px] transition-opacity duration-300 pointer-events-none" />
              <img
                src="https://github.com/Ayushaggarwal05.png"
                alt="Ayush Aggarwal"
                className="w-full h-full rounded-full object-cover border border-white/10 relative z-10 hover:border-amber-500/20 transition-all duration-300 shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-neutral-950 rounded-full z-20 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-wide leading-tight">
                Ayush Aggarwal
              </h4>
              <span className="text-xs text-neutral-400 hover:text-amber-400 transition-colors duration-300">
                @Ayushaggarwal05
              </span>
            </div>
          </div>

          {/* Contributions Legend spectrum matching gold/amber hues */}
          <div className="flex items-center gap-2.5 text-xs text-neutral-400 bg-black/20 px-3.5 py-1.5 border border-white/5 rounded-full shadow-inner">
            <span>Less</span>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-neutral-900 border border-white/5" />
              <span className="w-3 h-3 rounded-sm bg-amber-950/60 border border-white/5" />
              <span className="w-3 h-3 rounded-sm bg-amber-800 border border-white/5" />
              <span className="w-3 h-3 rounded-sm bg-amber-600 border border-white/5" />
              <span className="w-3 h-3 rounded-sm bg-amber-400 border border-white/5" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Contributions SVG Graph Container with touch scrolling capabilities */}
        <div className="w-full overflow-x-auto scrollbar-thin select-none relative z-10 pb-4 mb-8">
          <div className="min-w-[850px] h-[160px] flex items-center justify-center px-6 bg-neutral-950/30 border border-white/5 rounded-2xl py-6 hover:border-white/10 transition-all duration-300">
            {/* Invert(1) makes the bright light-gray uncommitted squares turn into beautiful, dark low-contrast charcoal boxes.
                Hue-rotate(180deg) returns the inverted color back precisely to our gorgeous gold/amber hue (complementary inversion shift). */}
            <img
              src="https://ghchart.rshah.org/f59e0b/Ayushaggarwal05"
              alt="Ayush Aggarwal's GitHub Contributions"
              style={{
                filter:
                  "invert(1) hue-rotate(180deg) brightness(1.2) contrast(1.15)",
              }}
              className="w-full h-full object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Action Button CTA */}
        <div className="flex justify-center relative z-10">
          <a
            href="https://github.com/Ayushaggarwal05"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative overflow-hidden px-8 py-3.5 rounded-full text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 shadow-lg hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.12)] text-xs font-semibold tracking-wider uppercase cursor-pointer"
          >
            <Github className="w-4 h-4 text-neutral-400 group-hover/btn:text-amber-400 transition-colors" />
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export const GithubActivity = SectionWrapper(
  GithubActivityComponent,
  "github-activity",
);
