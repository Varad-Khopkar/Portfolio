import { useState, useEffect } from 'react';
import { ParallaxBackground } from './components/ParallaxBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { SecuritySurface } from './components/SecuritySurface';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { SecurityStack } from './components/SecurityStack';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { Skills } from './components/Skills';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleCustomOpen = () => setCommandPaletteOpen(true);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => window.removeEventListener('open-command-palette', handleCustomOpen);
  }, []);

  return (
    <div className="min-h-screen relative text-slate-900 flex flex-col font-sans selection:bg-blue-600/10 selection:text-blue-700">
      {/* Global Interactive Parallax Background Grid */}
      <ParallaxBackground />

      {/* Sticky Top Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Portfolio Content strictly sourced from Resume & LinkedIn */}
      <main className="flex-1 relative z-10">
        <Hero />
        <QuickStats />
        <SecuritySurface />
        <About />
        <Experience />
        <SecurityStack />
        <Education />
        <Projects />
        <Certifications />
        <Leadership />
        <Skills />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Production Footer */}
      <Footer />

      {/* Interactive Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
