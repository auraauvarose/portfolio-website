import React from 'react';
import { PERSONAL_INFO } from '../constants'; // For CV link

interface HeroSectionProps {
  id: string;
  name: string;
  title: string;
  tagline: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, name, title, tagline }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
     if (contactSection) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      const sectionTop = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-primary dark:bg-primary-dark relative overflow-hidden pt-20 transition-colors duration-300">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-sky-500/20 dark:bg-sky-600/30 rounded-full filter blur-3xl opacity-30 dark:opacity-50 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/20 dark:bg-indigo-600/30 rounded-full filter blur-3xl opacity-30 dark:opacity-50 animate-pulse-slow" style={{animationDelay: '1.2s'}}></div>
      
      <div className="text-center z-10 p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold opacity-0 animate-fade-in-up">
          <span className="block text-text-primary dark:text-text-primary-dark">Hello, I'm</span>
          <span className="block text-accent dark:text-accent-dark mt-2 md:mt-4">{name}</span>
        </h1>
        <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {title}
        </p>
        <p className="mt-4 text-md sm:text-lg md:text-xl text-text-secondary dark:text-text-secondary-dark max-w-xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {tagline}
        </p>
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToContact}
            className="bg-accent dark:bg-accent-dark hover:bg-accent-hover dark:hover:bg-accent-hover-dark text-white dark:text-primary-dark font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-offset-primary-dark focus:ring-offset-opacity-50"
          >
            Get in Touch
          </button>
          {PERSONAL_INFO.cvUrl && (
             <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent dark:border-accent-dark text-accent dark:text-accent-dark hover:bg-accent dark:hover:bg-accent-dark hover:text-white dark:hover:text-primary-dark font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-offset-primary-dark focus:ring-offset-opacity-50"
             >
                Download CV
             </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;