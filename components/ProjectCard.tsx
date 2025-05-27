import React, { useRef, useState } from 'react';
import { Certificate } from '../types'; // Updated type
import { ExternalLinkIcon, GitHubIcon } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Modal from './Modal'; // Import Modal

interface CertificateCardProps {
  certificate: Certificate; // Updated prop name and type
  animationDelay: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, animationDelay }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.2 }); // triggerOnce is false by default

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div 
        ref={cardRef}
        className={`bg-secondary dark:bg-secondary-dark rounded-xl overflow-hidden shadow-2xl flex flex-col group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: isVisible ? animationDelay : undefined }}
      >
        <div className="aspect-w-16 aspect-h-9 overflow-hidden cursor-pointer" onClick={openModal} role="button" tabIndex={0} aria-label={`View image for ${certificate.title}`}>
          <img 
            src={certificate.imageUrl} 
            alt={certificate.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-semibold text-accent dark:text-accent-dark mb-2">{certificate.title}</h3>
          {certificate.issuedBy && (
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-2">Issued by: {certificate.issuedBy}</p>
          )}
          <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed mb-4 flex-grow">{certificate.description}</p>
          <div className="mb-4">
            {certificate.tags.map((tag) => (
              <span key={tag} className="inline-block bg-slate-200 dark:bg-slate-700 text-text-secondary dark:text-text-secondary-dark text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
            {certificate.certificateUrl && (
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark font-medium transition-colors duration-300 text-sm"
                aria-label={`View certificate for ${certificate.title}`}
              >
                Link <ExternalLinkIcon />
              </a>
            )}
            {certificate.liveUrl && (
              <a
                href={certificate.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent dark:text-accent-dark hover:text-accent-hover dark:hover:text-accent-hover-dark font-medium transition-colors duration-300 text-sm"
                aria-label={`Live demo or related link for ${certificate.title}`}
              >
                Live Demo <ExternalLinkIcon />
              </a>
            )}
            {certificate.repoUrl && (
              <a
                href={certificate.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark font-medium transition-colors duration-300 text-sm"
                aria-label={`Source code or repository for ${certificate.title}`}
              >
                <GitHubIcon className="w-4 h-4 mr-1.5" /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
      
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={certificate.title}>
          <img 
            src={certificate.imageUrl} 
            alt={certificate.title} 
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg" 
          />
        </Modal>
      )}
    </>
  );
};

export default CertificateCard;