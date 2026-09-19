import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollRobot from './components/ScrollRobot';
import LoadingScreen from './components/LoadingScreen';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'gallery', 'skills', 'experience', 'projects', 'education', 'contact'];
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
        <div className="app-shell relative min-h-screen overflow-x-hidden bg-slate-950 font-sans text-gray-100">
          <div className="app-atmosphere pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_12%_8%,rgba(212,175,55,0.08),transparent_36%),radial-gradient(circle_at_88%_18%,rgba(37,99,235,0.12),transparent_40%)]" />
          <div className="relative z-10">
            <ScrollRobot />
            <Navigation activeSection={activeSection} />
            <Hero />
            <About />
            <Gallery />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
            <WhatsAppFloat />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
