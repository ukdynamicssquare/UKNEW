import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  useEffect(() => {
    let isScrolling = false;
    let currentSection = 0;

    async function loadGsap() {
      const gsapModule = await import('gsap');
      const ScrollToPluginModule = await import('gsap/ScrollToPlugin');
      const gsap = gsapModule.default;
      const ScrollToPlugin = ScrollToPluginModule.default;
      gsap.registerPlugin(ScrollToPlugin);

      // Pre-set panels with GPU acceleration hints
      gsap.set('.panel', {
        force3D: true,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      });

      // Select all panels (our full-page sections)
      const panels = document.querySelectorAll('.panel');
      // Determine the offset of the last panel (full viewport per panel)
      const lastPanelOffset = (panels.length - 1) * window.innerHeight;

      // Optionally, check if a footer exists and get its height.
      // (Since your footer is in _app.js, it’s not part of this component.)
      const footer = document.querySelector('footer');
      const footerHeight = footer ? footer.offsetHeight : 0;

      function goToSection(index) {
        if (index < 0 || index >= panels.length) return;
        isScrolling = true;
        currentSection = index;
        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight, autoKill: false },
          duration: 0.85,
          ease: "power3.inOut",
          force3D: true,
          onComplete: () => {
            isScrolling = false;
          }
        });
      }

      function handleWheel(e) {
        if (isScrolling) {
          e.preventDefault();
          return;
        }
        const currentScroll = window.scrollY;

        // Scrolling down: if not at the last panel, go to next panel
        if (e.deltaY > 0 && currentSection < panels.length - 1) {
          e.preventDefault();
          goToSection(currentSection + 1);
        }
        // Scrolling up: if user is below the last panel (in the footer area),
        // or in the middle of panels, then adjust accordingly.
        else if (e.deltaY < 0) {
          // If current scroll is beyond the last panel (i.e. footer is visible),
          // snap back to the last panel.
          if (currentScroll > lastPanelOffset) {
            e.preventDefault();
            goToSection(panels.length - 1);
          } else if (currentSection > 0) {
            e.preventDefault();
            goToSection(currentSection - 1);
          }
        }
      }

      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }

    const cleanupPromise = loadGsap();
    return () => {
      cleanupPromise.then((cleanup) => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, []);

  return (
    <div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-primary text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 1</h1>
        <p>Content for Section 1</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-secondary text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 2</h1>
        <p>Content for Section 2</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-success text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 3</h1>
        <p>Content for Section 3</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-danger text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 4</h1>
        <p>Content for Section 4</p>
      </div>
      {/* Footer is assumed to be rendered globally (e.g. in _app.js) */}
    </div>
  );
}
