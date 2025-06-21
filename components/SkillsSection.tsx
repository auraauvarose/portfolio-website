import React, { useRef, useState } from 'react';
import Section from './Section';
import { SkillCategory, Skill } from '../types';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Modal from './Modal'; // Import Modal
import { CertificateIconSkill } from '../constants'; // Placeholder icon

interface SkillItemProps {
  skill: Skill;
  onSkillClick: (skill: Skill) => void;
  animationDelay: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, onSkillClick, animationDelay }) => {
  const itemRef = useRef<HTMLButtonElement | null>(null);
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.2 });

  return (
    <button
      ref={itemRef}
      onClick={() => onSkillClick(skill)}
      className={`bg-slate-200 dark:bg-slate-700 text-text-secondary dark:text-text-secondary-dark px-4 py-2 rounded-full text-sm font-medium shadow-md hover:bg-accent dark:hover:bg-accent-dark hover:text-white dark:hover:text-primary-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? animationDelay : undefined }}
      aria-label={`View details for ${skill.name}`}
    >
      {skill.name}
    </button>
  );
}

interface SkillCardProps {
  category: SkillCategory;
  onSkillClick: (skill: Skill) => void;
  animationDelay: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, onSkillClick, animationDelay }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 });

  return (
    <div 
      ref={cardRef}
      className={`bg-secondary dark:bg-secondary-dark p-6 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: isVisible ? animationDelay : undefined }}
    >
      <h3 className="text-2xl font-semibold text-accent dark:text-accent-dark mb-6">{category.name}</h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, index) => (
          <SkillItem 
            key={skill.name} 
            skill={skill} 
            onSkillClick={onSkillClick}
            animationDelay={`${index * 0.05}s`} // Stagger individual skill animation
          />
        ))}
      </div>
    </div>
  );
};

interface SkillsSectionProps {
  id: string;
  skillsData: SkillCategory[]; // Renamed from skills
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, skillsData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <>
      <Section id={id} title="My Skills" className="bg-primary dark:bg-primary-dark transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillsData.map((category, index) => (
            <SkillCard 
              key={category.name} 
              category={category}
              onSkillClick={handleSkillClick}
              animationDelay={`${index * 0.1}s`} 
            />
          ))}
        </div>
      </Section>

      {selectedSkill && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedSkill.name}>
          <div className="text-center p-2">
            {selectedSkill.imageUrl ? (
              <img 
                src={selectedSkill.imageUrl} 
                alt={selectedSkill.name} 
                className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-4 rounded-lg shadow-md bg-slate-100 dark:bg-slate-700 p-2" 
              />
            ) : (
              <CertificateIconSkill className="w-32 h-32 md:w-40 md:h-40 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
            )}
            <p className="text-text-secondary dark:text-text-secondary-dark text-base leading-relaxed">
              {selectedSkill.description || "No description available."}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SkillsSection;
// bagian ini adalah bagian akhir dari komponen SkillsSection yang mengelola modal dan interaksi pengguna
// yang berkaitan dengan keterampilan yang ditampilkan.