import React, { useState, useEffect, useContext } from 'react';
import { NavItem } from '../types';
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from '../constants';
import { ThemeContext } from '../contexts/ThemeContext';
import MusicToggle from './MusicToggle';

interface NavbarProps {
  navItems: NavItem[];
  name: string;         // Nama untuk halaman/page
  navbarName: string;   // Nama khusus untuk Navbar
  activeSectionId: string;
}

const Navbar: React.FC<NavbarProps> = ({ navItems, name, navbarName, activeSectionId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate offset for fixed navbar height
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80; // 80 is h-20
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu on navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = (sectionId: string) => 
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      activeSectionId === sectionId 
      ? 'text-accent dark:text-accent-dark' 
      : 'text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark'
    }`;
  
  const mobileNavLinkClasses = (sectionId: string) =>
    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
      activeSectionId === sectionId
      ? 'text-accent dark:text-accent-dark bg-slate-200 dark:bg-slate-700'
      : 'text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-slate-200 dark:hover:bg-slate-700'
    }`;


  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-secondary/90 dark:bg-secondary-dark/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="text-2xl font-bold text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark transition-colors"
            >
              {navbarName}
            </a>
          </div>
          {/* Tambahkan ini untuk menu desktop */}
          <div className="hidden md:flex items-center gap-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.sectionId}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId); }}
                className={navLinkClasses(item.sectionId)}
                aria-current={activeSectionId === item.sectionId ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-x-2">
            <MusicToggle />
            {/* Theme toggle desktop */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="hidden md:inline-flex ml-6 p-2 rounded-full text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent dark:focus:ring-accent-dark"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              className="md:hidden p-2 rounded-full text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark focus:outline-none"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            {/* Hamburger menu mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden bg-secondary/95 dark:bg-secondary-dark/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.sectionId}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId); }}
                 className={mobileNavLinkClasses(item.sectionId)}
                 aria-current={activeSectionId === item.sectionId ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

