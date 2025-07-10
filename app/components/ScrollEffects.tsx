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

    const toggleMobileMenu = () => {
      const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
      const menuBtn = document.querySelector('.mobile-menu-btn') as HTMLElement;
      
      if (mobileMenu && menuBtn) {
        const isHidden = mobileMenu.classList.contains('hidden');
        
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          setTimeout(() => {
            mobileMenu.style.opacity = '1';
            mobileMenu.style.transform = 'translateY(0)';
          }, 10);
          menuBtn.classList.add('active');
        } else {
          mobileMenu.style.opacity = '0';
          mobileMenu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
          }, 300);
          menuBtn.classList.remove('active');
        }
      }
    };

    // Add click handler for scroll to top button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    // Add click handler for mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-menu a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
        const menuBtn = document.querySelector('.mobile-menu-btn') as HTMLElement;
        
        if (mobileMenu && menuBtn) {
          mobileMenu.style.opacity = '0';
          mobileMenu.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            mobileMenu.classList.add('hidden');
          }, 300);
          menuBtn.classList.remove('active');
        }
      });
    });

    // Initialize mobile menu styles
    const mobileMenu = document.querySelector('.mobile-menu') as HTMLElement;
    if (mobileMenu) {
      mobileMenu.style.opacity = '0';
      mobileMenu.style.transform = 'translateY(-10px)';
      mobileMenu.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    }

    window.addEventListener('scroll', handleScroll);
    
    // Initialize on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollToTopBtn) {
        scrollToTopBtn.removeEventListener('click', scrollToTop);
      }
      if (mobileMenuBtn) {
        mobileMenuBtn.removeEventListener('click', toggleMobileMenu);
      }
    };
  }, []);

  return null;
}
