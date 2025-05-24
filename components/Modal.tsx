import React, { useEffect, useRef } from 'react';
import { CloseIcon } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Trap focus (basic implementation)
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Ensure cleanup
    };
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300 animate-fade-in-up"
      onClick={onClose} // Close on overlay click
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
    >
      <div 
        ref={modalRef}
        className="bg-secondary dark:bg-secondary-dark rounded-xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transition-transform duration-300 transform scale-95 group-hover:scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
        tabIndex={-1} // Make it focusable
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-secondary dark:text-text-secondary-dark hover:text-accent dark:hover:text-accent-dark rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        {title && (
          <h2 id="modal-title" className="text-2xl font-semibold text-accent dark:text-accent-dark mb-4 pr-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;