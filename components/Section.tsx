import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  observeTitle?: boolean; 
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  children, 
  className = "", 
  titleClassName = "", 
  contentClassName = "",
  observeTitle = true 
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  
  // triggerOnce is false by default in useIntersectionObserver now
  const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const isTitleVisible = observeTitle 
    ? useIntersectionObserver(titleRef, { threshold: 0.25 }) 
    : isSectionVisible;

  // For children container, use section visibility to start its animation
  const isContentContainerVisible = useIntersectionObserver(sectionRef, {threshold: 0.15 });


  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 ${className} transition-opacity duration-500 ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}
      // Add a key that changes with visibility to force re-render for re-animation if pure CSS class toggling isn't enough
      // key={id + (isSectionVisible ? '-visible' : '-hidden')} 
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-accent dark:text-accent-dark ${titleClassName} ${isTitleVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          {title}
        </h2>
        {/* The direct children passed to Section are usually animated by themselves if they are lists of cards etc.
            This contentClassName is for the wrapper around those children if needed.
            The animation for children (like cards in a grid) is handled by their own useIntersectionObserver hooks.
        */}
        <div className={`${contentClassName} ${isContentContainerVisible ? '' : 'opacity-0'}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;