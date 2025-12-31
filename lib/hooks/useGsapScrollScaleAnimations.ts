'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsapScrollScaleAnimations = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Page loading animation
    const loadingWrap = document.querySelector('.loading-wrap');
    if (loadingWrap) {
      const loadingItems = loadingWrap.querySelectorAll('.loading__item');
      const fadeInItems = document.querySelectorAll('.loading__fade');

      const pageAppearance = () => {
        // Animate loading items with slide up effect
        gsap.set(loadingItems, { opacity: 0 });
        gsap.to(loadingItems, {
          duration: 1.1,
          ease: 'power4',
          startAt: { y: 120 },
          y: 0,
          opacity: 1,
          delay: 0.8,
          stagger: 0.08,
        });

        // Fade in other elements
        gsap.set(fadeInItems, { opacity: 0 });
        gsap.to(fadeInItems, {
          duration: 0.8,
          ease: 'none',
          opacity: 1,
          delay: 1.2,
        });
      };

      pageAppearance();
    }

    // Scroll-triggered batch animations for cards
    const batchAnimations = () => {
      // Animate cards in batches as they come into view
      ScrollTrigger.batch('.card-animate', {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
          });
        },
        start: 'top 85%',
      });

      // Zoom effect on scroll
      const zoomElements = document.querySelectorAll('.zoom-on-scroll');
      zoomElements.forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.95, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            },
          }
        );
      });
    };

    batchAnimations();

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
