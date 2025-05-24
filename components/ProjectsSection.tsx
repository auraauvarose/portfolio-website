import React from 'react';
import Section from './Section';
import CertificateCard from './ProjectCard'; // Updated import path to actual file
import { Certificate } from '../types'; // Updated type

interface CertificatesSectionProps {
  id: string;
  certificates: Certificate[]; // Updated prop name and type
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ id, certificates }) => {
  return (
    <Section id={id} title="My Certificates" className="bg-primary dark:bg-primary-dark transition-colors duration-300"> {/* Title updated */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.id} certificate={certificate} animationDelay={`${index * 0.1}s`} />
        ))}
      </div>
    </Section>
  );
};

export default CertificatesSection;