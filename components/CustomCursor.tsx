import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'text-input'>('default');
  const { theme } = useContext(ThemeContext); // To potentially adjust styles if needed, though CSS handles it

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    const handleMouseEnter = () => {
        if(!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], [data-cursor-pointer]')) {
        setCursorType('pointer');
      } else if (target.closest('input[type="text"], input[type="email"], textarea, [data-cursor-text]')) {
        setCursorType('text-input');
      } else {
        setCursorType('default');
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver, true); // Use capture phase

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver, true);
    };
  }, [isVisible]);

  const cursorClasses = `custom-cursor ${
    cursorType === 'pointer' ? 'pointer' : ''
  } ${
    cursorType === 'text-input' ? 'text-input' : ''
  }`;
  
  // Apply theme class for CSS to pick up, though mix-blend-mode handles color mostly
  const themeClass = theme === 'dark' ? 'dark-theme-active' : 'light-theme-active';


  return (
    <div
      className={`${cursorClasses} ${themeClass}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`, // Center cursor
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CustomCursor;