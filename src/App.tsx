import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollRobot from './components/ScrollRobot';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 via-slate-950 to-red-950 text-gray-100 relative overflow-hidden">
          {/* Overlay avec dégradé riche et animé */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-950/40 via-primary-900/20 via-accent-900/20 to-red-950/40 pointer-events-none z-0"></div>
          {/* Particules de fond animées */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%)] bg-[radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.1),transparent_50%)] pointer-events-none z-0"></div>
          {/* Lignes de lumière subtiles */}
          <div className="fixed inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.03)_50%,transparent_70%)] pointer-events-none z-0"></div>
          <div className="relative z-10">
            <ScrollRobot />
            <Navigation activeSection={activeSection} />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
