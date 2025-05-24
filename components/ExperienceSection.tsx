import React, { useRef } from 'react';
import Section from './Section';
import { Experience } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ExperienceCardProps {
  experience: Experience;
  animationDelay: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, animationDelay }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 }); // triggerOnce is false by default

  return (
    <div 
      ref={cardRef}
      className={`relative pl-12 pb-8 border-l-2 border-accent/30 dark:border-accent-dark/30 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? animationDelay : undefined }}
    >
      <div className="absolute -left-[11px] top-0 w-5 h-5 bg-accent dark:bg-accent-dark rounded-full border-4 border-secondary dark:border-secondary-dark shadow-md"></div>
      {experience.logoUrl && (
        <img src={experience.logoUrl} alt={`${experience.company} logo`} className="absolute -left-[26px] top-8 w-12 h-12 p-1 bg-secondary dark:bg-secondary-dark rounded-full shadow-lg object-contain hidden sm:block transform transition-all duration-300 group-hover:scale-110" loading="lazy" />
      )}
      <div className="ml-4 group"> {/* Added group for potential hover effects on parent */}
        <h3 className="text-xl font-semibold text-accent dark:text-accent-dark">{experience.role}</h3>
        <p className="text-md text-text-secondary dark:text-text-secondary-dark font-medium">{experience.company}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{experience.duration}</p>
        <ul className="list-disc list-outside ml-5 space-y-1.5 text-text-secondary dark:text-text-secondary-dark text-sm">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ExperienceSectionProps {
  id: string;
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, experiences }) => {
  return (
    <Section id={id} title="My Experience" className="bg-secondary dark:bg-secondary-dark transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} animationDelay={`${index * 0.15}s`} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;