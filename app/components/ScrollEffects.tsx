'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = `${Math.min(scrollPercent, 100)}%`;
      }
    };

    const handleScroll = () => {
      updateScrollProgress();
      
      // Add parallax effect to background elements
      const scrolled = window.scrollY;
      const parallax = document.querySelectorAll('.parallax');
      parallax.forEach((element) => {
        const speed = 0.5;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
