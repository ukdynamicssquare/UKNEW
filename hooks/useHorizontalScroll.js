import { useEffect } from 'react';

export default function useHorizontalScroll({
  containerSelector = '.horizontal-container',
  slideSelector = '.card-slide',
  scrub = 1
} = {}) {
  useEffect(() => {
    async function loadGsap() {
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      // Select the container and all slide elements
      const container = document.querySelector(containerSelector);
      const slides = document.querySelectorAll(slideSelector);
      if (!container || !slides.length) return;

      // Calculate the total horizontal scroll distance: container's full scroll width minus viewport width.
      const totalScrollDistance = container.scrollWidth - window.innerWidth;

      // Create a horizontal tween that moves the slides as the user scrolls vertically.
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: scrub,
          // Snap to each slide (progress values: 0, 0.5, 1 for 3 slides, for example)
          snap: 1 / (slides.length - 1),
          // End after scrolling enough to cover the total horizontal distance.
          end: () => "+=" + totalScrollDistance
        }
      });
    }

    loadGsap();
  }, [containerSelector, slideSelector, scrub]);
}
