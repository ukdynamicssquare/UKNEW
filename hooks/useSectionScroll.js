import { useEffect, useRef } from 'react';

export default function useSectionScroll({ 
  panelSelector = '.panel', 
  excludeSelector = '.horizontal-container'
} = {}) {
  const isScrollingRef = useRef(false);
  const currentSectionRef = useRef(0);

  useEffect(() => {
    let cleanup;
    async function loadGsap() {
      const gsapModule = await import('gsap');
      const ScrollToPluginModule = await import('gsap/ScrollToPlugin');
      const gsap = gsapModule.default;
      const ScrollToPlugin = ScrollToPluginModule.default;
      gsap.registerPlugin(ScrollToPlugin);

      // Pre-set panels for GPU acceleration
      gsap.set(panelSelector, {
        force3D: true,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      });

      const panels = document.querySelectorAll(panelSelector);
      if (!panels.length) return;
      const lastPanelOffset = (panels.length - 1) * window.innerHeight;

      function goToSection(index) {
        if (index < 0 || index >= panels.length) return;
        isScrollingRef.current = true;
        currentSectionRef.current = index;
        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight, autoKill: false },
          duration: 0.85,
          ease: "power3.inOut",
          force3D: true,
          onComplete: () => {
            isScrollingRef.current = false;
          }
        });
      }

      function handleWheel(e) {
        // If the wheel event originates within the horizontal container,
        // let it pass through for the horizontal hook to handle.
        if (e.target.closest(excludeSelector)) {
          return;
        }
        // Prevent overlapping animations.
        if (isScrollingRef.current) {
          e.preventDefault();
          return;
        }
        const currentScroll = window.scrollY;

        // Scrolling down
        if (e.deltaY > 0 && currentSectionRef.current < panels.length - 1) {
          e.preventDefault();
          goToSection(currentSectionRef.current + 1);
        }
        // Scrolling up
        else if (e.deltaY < 0) {
          if (currentScroll > lastPanelOffset) {
            e.preventDefault();
            goToSection(panels.length - 1);
          } else if (currentSectionRef.current > 0) {
            e.preventDefault();
            goToSection(currentSectionRef.current - 1);
          }
        }
      }

      window.addEventListener('wheel', handleWheel, { passive: false });
      cleanup = () => window.removeEventListener('wheel', handleWheel);
    }

    loadGsap();

    return () => {
      if (cleanup) cleanup();
    };
  }, [panelSelector, excludeSelector]);
}
