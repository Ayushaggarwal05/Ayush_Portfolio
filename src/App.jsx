import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen relative font-sans selection:bg-pink-500 selection:text-white antialiased overflow-x-hidden">
      {/* Floating Header Navbar */}
      <Navbar />

      {/* Visual Section Flows */}
      <main className="relative w-full">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}

export default App;
