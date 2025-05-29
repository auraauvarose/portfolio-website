import React, { useEffect, useState } from 'react';
import { db, ref, get, set } from '../firebase'; // Adjust the import path as necessary

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    const counterRef = ref(db, 'visitorCount');
    get(counterRef)
      .then(snapshot => {
        let count = snapshot.exists() ? snapshot.val() : 0;
        // increment
        set(counterRef, count + 1).then(() => setVisitorCount(count + 1));
      })
      .catch(() => setVisitorCount(null));
  }, []);

  return (
    <footer className="bg-secondary dark:bg-secondary-dark py-8 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Crafted with <span className="text-red-500 animate-pulse">❤</span> by {name}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          Website dibuka <span>{visitorCount !== null ? visitorCount : '...'}</span> kali.
        </p>
      </div>
    </footer>
  );
};

export default Footer;