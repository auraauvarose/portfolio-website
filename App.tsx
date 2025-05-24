
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/ProjectsSection'; // Corrected import path to actual file
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen
import { NAV_ITEMS, PERSONAL_INFO, SKILLS_DATA, CERTIFICATES_DATA, EXPERIENCE_DATA } from './constants'; // Updated constant name

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoading, setIsLoading] = useState<boolean>(true); // State for loading screen

  const sectionObserverOptions = {
    root: null,
    rootMargin: "-40% 0px -60% 0px",
    threshold: 0,
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Don't set up observers if still loading

    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(item => {
      const sectionElement = document.getElementById(item.sectionId);
      if (sectionElement) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.sectionId);
          }
        }, sectionObserverOptions);
        observer.observe(sectionElement);
        observers.push(observer);
      }
    });

     const homeElement = document.getElementById('home');
     if (homeElement && window.scrollY < homeElement.offsetHeight / 2) {
        setActiveSection('home');
     }

    return () => observers.forEach(obs => obs.disconnect());
  }, [isLoading]); // Re-run when isLoading changes


  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-primary dark:bg-primary-dark transition-colors duration-300">
      <Navbar navItems={NAV_ITEMS} name={PERSONAL_INFO.name} activeSectionId={activeSection} />
      <main className="flex-grow">
        <HeroSection id="home" name={PERSONAL_INFO.name} title={PERSONAL_INFO.title} tagline={PERSONAL_INFO.tagline} />
        <AboutSection id="about" bio={PERSONAL_INFO.bio} />
        <SkillsSection id="skills" skillsData={SKILLS_DATA} /> {/* Prop name updated for clarity */}
        <CertificatesSection id="certificates" certificates={CERTIFICATES_DATA} /> {/* Updated component and prop */}
        <ExperienceSection id="experience" experiences={EXPERIENCE_DATA} />
        <ContactSection id="contact" email={PERSONAL_INFO.contact.email} linkedIn={PERSONAL_INFO.contact.linkedin} github={PERSONAL_INFO.contact.github} />
      </main>
      <Footer name={PERSONAL_INFO.name}/>
    </div>
  );
};

export default App;