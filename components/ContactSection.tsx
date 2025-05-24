import React, { useRef } from 'react';
import Section from './Section';
import { EmailIcon, LinkedInIcon, GitHubIcon } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  animationDelay: string;
  isExternal?: boolean;
}

const AnimatedContactLink: React.FC<ContactLinkProps> = ({ href, icon, text, animationDelay, isExternal }) => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const isVisible = useIntersectionObserver(linkRef, { threshold: 0.5 }); // triggerOnce is false by default

  return (
    <a
      ref={linkRef}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`flex items-center text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark text-lg font-medium transition-all duration-300 ease-out transform hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-3'}`}
      style={{ animationDelay: isVisible ? animationDelay : undefined }}
    >
      {icon} {text}
    </a>
  );
};

interface ContactSectionProps {
  id: string;
  email: string;
  linkedIn: string;
  github: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, email, linkedIn, github }) => {
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const isParaVisible = useIntersectionObserver(paraRef, { threshold: 0.5 }); // triggerOnce is false by default
  
  return (
    <Section id={id} title="HUBUNGI SAYA" className="bg-primary dark:bg-primary-dark transition-colors duration-300">
      <div className="max-w-xl mx-auto text-center">
        <p 
          ref={paraRef}
          className={`text-lg text-text-secondary dark:text-text-secondary-dark mb-8 transition-all duration-500 ease-out ${isParaVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-3'}`}
        >
          Aku sangat senang mendengar darimu! Jika kamu memiliki pertanyaan, ingin berkolaborasi, atau hanya ingin menyapa, jangan ragu untuk menghubungiku melalui email atau media sosial di bawah ini.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <AnimatedContactLink
            href={`mailto:${email}`}
            icon={<EmailIcon className="w-7 h-7 mr-3" />}
            text={email}
            animationDelay="0.1s"
          />
          <AnimatedContactLink
            href={github}
            icon={<GitHubIcon className="w-7 h-7 mr-3" />}
            text="GitHub"
            animationDelay="0.3s"
            isExternal
          />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;