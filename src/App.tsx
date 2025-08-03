import React, { useState } from 'react';
import { Home, User, Code, GraduationCap, Mail, Menu, X } from 'lucide-react';

import ThemeSwitcher from './components/ThemeSwitcher';
import NavButton from './components/NavButton';

import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollToSection('home')} className="font-bold text-xl text-gray-900 dark:text-white transition-colors">Jit Roy</button>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2">
                <NavButton id="home" icon={Home} label="Home" isActive={activeSection === 'home'} onClick={() => scrollToSection('home')} />
                <NavButton id="skills" icon={Code} label="Skills" isActive={activeSection === 'skills'} onClick={() => scrollToSection('skills')} />
                <NavButton id="projects" icon={GraduationCap} label="Projects" isActive={activeSection === 'projects'} onClick={() => scrollToSection('projects')} />
                <NavButton id="about" icon={User} label="About" isActive={activeSection === 'about'} onClick={() => scrollToSection('about')} />
                <NavButton id="contact" icon={Mail} label="Contact" isActive={activeSection === 'contact'} onClick={() => scrollToSection('contact')} />
              </div>
              <ThemeSwitcher />
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-lg text-gray-700 dark:text-gray-300 transition-colors">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden flex flex-col gap-4 py-2">
              <NavButton id="home" icon={Home} label="Home" isActive={activeSection === 'home'} onClick={() => scrollToSection('home')} />
              <NavButton id="skills" icon={Code} label="Skills" isActive={activeSection === 'skills'} onClick={() => scrollToSection('skills')} />
              <NavButton id="projects" icon={GraduationCap} label="Projects" isActive={activeSection === 'projects'} onClick={() => scrollToSection('projects')} />
              <NavButton id="about" icon={User} label="About" isActive={activeSection === 'about'} onClick={() => scrollToSection('about')} />
              <NavButton id="contact" icon={Mail} label="Contact" isActive={activeSection === 'contact'} onClick={() => scrollToSection('contact')} />
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="home">
          <HomePage scrollToSection={scrollToSection} />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;