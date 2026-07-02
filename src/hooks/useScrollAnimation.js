import { useEffect } from 'react';

/**
 * Custom React Hook to handle scroll animations using IntersectionObserver.
 * Elements with class 'animate-item' will be animated when they enter the viewport.
 * Standard animation classes: 'fade-up', 'fade-left', 'fade-right', 'zoom-in'.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '0px',
      threshold: 0.15 // trigger when 15% of the element is visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
          // Once the animation triggers, we can unobserve if we want a one-shot animation
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-item');

    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
