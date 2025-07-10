'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement;
      const scrollToTopBtn = document.querySelector('.scroll-to-top') as HTMLElement;
      
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = `${Math.min(scrollPercent, 100)}%`;
      }
      
      // Show/hide scroll to top button
      if (scrollToTopBtn) {
        if (window.scrollY > 500) {
          scrollToTopBtn.style.opacity = '1';
          scrollToTopBtn.style.pointerEvents = 'auto';
        } else {
          scrollToTopBtn.style.opacity = '0';
          scrollToTopBtn.style.pointerEvents = 'none';
        }
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

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Add click handler for scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    window.addEventListener('scroll', handleScroll);
    
    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return null;
}
