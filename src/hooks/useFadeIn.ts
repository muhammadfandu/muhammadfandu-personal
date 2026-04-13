import { useEffect, useRef, useState } from 'react';

export function useFadeIn<T extends HTMLElement>(options?: { delay?: number }) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), options?.delay || 0);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options?.delay]);

  return { ref, isVisible, className: isVisible ? 'fade-in visible' : 'fade-in' };
}

export function useMountFadeIn<T extends HTMLElement>(options?: { delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), options?.delay || 0);
    return () => clearTimeout(timer);
  }, [options?.delay]);

  return { className: isVisible ? 'fade-in visible' : 'fade-in' };
}