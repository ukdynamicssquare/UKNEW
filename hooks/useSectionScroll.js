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

      // Optimize for GPU acceleration
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
          duration: 0.45, // Slower for smoothness
          ease: "power3.inOut",
          force3D: true,
          onComplete: () => {
            isScrollingRef.current = false;
          }
        });
      }

      function handleWheel(e) {
        if (e.target.closest(excludeSelector)) return; // Ignore horizontal scroll areas
        if (isScrollingRef.current) {
          e.preventDefault();
          return;
        }
        const currentScroll = window.scrollY;

        if (e.deltaY > 0 && currentSectionRef.current < panels.length - 1) {
          e.preventDefault();
          goToSection(currentSectionRef.current + 1);
        } else if (e.deltaY < 0) {
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
