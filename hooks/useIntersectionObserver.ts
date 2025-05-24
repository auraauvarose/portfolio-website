import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean; // Keep the option, but change default
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = false }: IntersectionObserverOptions = {} // Default triggerOnce to false
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && element) { 
            observer.unobserve(element);
          }
        } else {
          // Only set to false if not triggerOnce, to allow re-triggering
          if (!triggerOnce) {
            setIsIntersecting(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) { 
        observer.unobserve(element);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [elementRef, threshold, root, rootMargin, triggerOnce, elementRef.current]); // Added elementRef.current to deps for safety if ref changes

  return isIntersecting;
}

export default useIntersectionObserver;