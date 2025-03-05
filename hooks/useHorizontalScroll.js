import { useEffect } from 'react';

export default function useHorizontalScroll({
  containerSelector = '.horizontal-container',
  slideSelector = '.card-slide',
  scrub = 2 // Adjusted scrub value for smooth horizontal animation
} = {}) {
  useEffect(() => {
    async function loadGsap() {
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const container = document.querySelector(containerSelector);
      const slides = document.querySelectorAll(slideSelector);
      if (!container || !slides.length) return;

      const totalScrollDistance = container.scrollWidth - window.innerWidth;

      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: scrub,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: 1,
            ease: "power1.inOut"
          },
          end: () => "+=" + totalScrollDistance
        }
      });
    }

    loadGsap();
  }, [containerSelector, slideSelector, scrub]);
}
