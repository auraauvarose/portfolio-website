import React, { useRef } from 'react';
import Section from './Section';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AboutSectionProps {
  id: string;
  bio: string[];
}

const AnimatedParagraph: React.FC<{ text: string; delay: string }> = ({ text, delay }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2 }); // triggerOnce is false by default

  return (
    <p 
      ref={ref}
      className={`text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
      style={{ animationDelay: isVisible ? delay : undefined}}
    >
      {text}
    </p>
  );
};

const AboutSection: React.FC<AboutSectionProps> = ({ id, bio }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const isImgVisible = useIntersectionObserver(imgRef, { threshold: 0.2 }); // triggerOnce is false by default

  return (
    <Section id={id} title="About Me" className="bg-secondary dark:bg-secondary-dark transition-colors duration-300" observeTitle={true}>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {bio.map((paragraph, index) => (
          <AnimatedParagraph key={index} text={paragraph} delay={`${index * 0.15}s`} />
        ))}
         <img 
            ref={imgRef}
            src="/assets/profile.jpg" // Update with your image path
            alt="Alex Doe Portrait" 
            className={`mt-10 mx-auto w-48 h-48 rounded-full object-cover shadow-xl transition-all duration-500 ease-out ${isImgVisible ? 'opacity-100 translate-y-0 animate-fade-in-up' : 'opacity-0 translate-y-5'}`}
            style={{ animationDelay: isImgVisible ? `${bio.length * 0.15}s` : undefined }}
          />
      </div>
    </Section>
  );
};

export default AboutSection;