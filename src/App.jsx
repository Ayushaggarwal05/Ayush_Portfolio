import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { GithubActivity } from "./sections/GithubActivity";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="bg-[#070707] text-foreground min-h-screen relative font-sans selection:bg-[#D6A45C] selection:text-black antialiased overflow-x-hidden">
      {/* Global Ambient Background System */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base dark canvas */}
        <div className="absolute inset-0 bg-[#070707]" />

        {/* Cinematic SVG Noise Texture Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* Global Continuous Ambient Glows */}
        {/* Top-Left Wine Glow (Hero / About) */}
        <div className="absolute top-[2%] left-[-15%] w-[80vw] sm:w-[60vw] h-[80vw] sm:h-[60vw] rounded-full bg-[#4A0E1A] opacity-[0.16] blur-[130px] md:blur-[160px] will-change-transform" />
        
        {/* Center-Right Burgundy Glow (Skills / Experience) */}
        <div className="absolute top-[32%] right-[-15%] w-[95vw] sm:w-[70vw] h-[95vw] sm:h-[70vw] rounded-full bg-[#6E1126] opacity-[0.12] blur-[150px] md:blur-[180px] will-change-transform" />
        
        {/* Center-Left Wine Glow (Experience / Projects) */}
        <div className="absolute top-[52%] left-[-10%] w-[80vw] sm:w-[60vw] h-[80vw] sm:h-[60vw] rounded-full bg-[#4A0E1A] opacity-[0.10] blur-[140px] md:blur-[170px] will-change-transform" />

        {/* Bottom-Right Gold Glow (Projects / Github) */}
        <div className="absolute top-[72%] right-[-10%] w-[85vw] sm:w-[65vw] h-[85vw] sm:h-[65vw] rounded-full bg-[#D6A45C] opacity-[0.08] blur-[140px] md:blur-[170px] will-change-transform" />

        {/* Bottom Wine/Burgundy Glow (Footer) */}
        <div className="absolute bottom-[2%] left-[10%] w-[70vw] sm:w-[50vw] h-[70vw] sm:h-[50vw] rounded-full bg-[#6E1126] opacity-[0.10] blur-[120px] md:blur-[150px] will-change-transform" />
      </div>

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Visual Section Flows */}
      <main className="relative w-full z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <GithubActivity />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;
