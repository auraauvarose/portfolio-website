import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.25 });
  const isContentInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isSectionInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={titleRef}
          initial={{ y: 40, opacity: 0 }}
          animate={isTitleInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-accent dark:text-accent-dark ${titleClassName}`}
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isContentInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={contentClassName}
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Section;
