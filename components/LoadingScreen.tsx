import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary dark:bg-primary-dark transition-colors duration-300">
      <div className="loader"></div>
      <p className="mt-4 text-text-secondary dark:text-text-secondary-dark text-lg font-medium">
        Loading Portfolio...
      </p>
    </div>
  );
};

export default LoadingScreen;