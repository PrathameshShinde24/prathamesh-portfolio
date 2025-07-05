import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Navigation />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="hero" className="py-10 sm:py-16 md:py-20">
          <Hero />
        </section>

        <section id="about" className="py-10 sm:py-16 md:py-20">
          <About />
        </section>

        <section id="skills" className="py-10 sm:py-16 md:py-20">
          <Skills />
        </section>

        <section id="projects" className="py-10 sm:py-16 md:py-20">
          <Projects />
        </section>

        <section id="education" className="py-10 sm:py-16 md:py-20">
          <Education />
        </section>

        <section id="contact" className="py-10 sm:py-16 md:py-20">
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
