import { useEffect, useRef } from 'react';

export default function useSectionScroll({ 
  panelSelector = '.panel', 
  excludeSelector = '.horizontal-container' 
} = {}) {
  const isScrollingRef = useRef(false);
  const currentSectionRef = useRef(0);
  let panels = [];

  useEffect(() => {
    if (window.innerWidth < 768) return;


    let cleanupFn;

    async function loadGsap() {
      const gsapModule = await import('gsap');
      const ScrollToPluginModule = await import('gsap/ScrollToPlugin');
      const gsap = gsapModule.default;
      const ScrollToPlugin = ScrollToPluginModule.default;
      gsap.registerPlugin(ScrollToPlugin);

      // prepare panels
      gsap.set(panelSelector, {
        force3D: true,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      });
      panels = Array.from(document.querySelectorAll(panelSelector));
      if (!panels.length) return;
      const lastPanelOffset = (panels.length - 1) * window.innerHeight;

      // swipe threshold (deltaY must exceed this to count)
      const SWIPE_THRESHOLD = 20;

      // core scroll-to-section
      function goToSection(index) {
        if (index < 0 || index >= panels.length) return;
        isScrollingRef.current = true;
        currentSectionRef.current = index;

        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight, autoKill: false },
          duration: 0.45,
          ease: 'power3.inOut',
          force3D: true,
          onComplete: () => {
            isScrollingRef.current = false;
          }
        });
      }

      // wheel / trackpad handler
      function handleWheel(e) {
        if (e.target.closest(excludeSelector)) return;
        if (isScrollingRef.current) {
          e.preventDefault();
          return;
        }
        // ignore small deltas
        if (Math.abs(e.deltaY) < SWIPE_THRESHOLD) {
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

      // keyboard handler
      function handleKeyDown(e) {
        if (isScrollingRef.current) return;
        if (e.key === 'ArrowDown' && currentSectionRef.current < panels.length - 1) {
          e.preventDefault();
          goToSection(currentSectionRef.current + 1);
        } else if (e.key === 'ArrowUp' && currentSectionRef.current > 0) {
          e.preventDefault();
          goToSection(currentSectionRef.current - 1);
        }
      }

      // attach listeners
      window.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);

      // cleanup
      cleanupFn = () => {
        window.removeEventListener('wheel', handleWheel);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }

    loadGsap();

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, [panelSelector, excludeSelector]);

  // exposed programmatic control
  function goToSection(index) {
    if (index < 0 || index >= panels.length) return;
    currentSectionRef.current = index;
    isScrollingRef.current = true;

    import('gsap').then(({ default: gsap }) => {
      import('gsap/ScrollToPlugin').then(({ default: ScrollToPlugin }) => {
        gsap.registerPlugin(ScrollToPlugin);
        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight, autoKill: false },
          duration: 0.45,
          ease: 'power3.inOut',
          force3D: true,
          onComplete: () => {
            isScrollingRef.current = false;
          }
        });
      });
    });
  }

  return { goToSection };
}
