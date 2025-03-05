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

      // Pre-set panels for GPU acceleration
      gsap.set('.panel', {
        force3D: true,
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden'
      });

      const panels = document.querySelectorAll('.panel');

      function goToSection(index) {
        if (index < 0 || index >= panels.length) return;
        isScrolling = true;
        currentSection = index;
        gsap.to(window, {
          scrollTo: { y: index * window.innerHeight, autoKill: false },
          duration: 0.65,
          ease: "power3.inOut",
          force3D: true,
          onComplete: () => {
            isScrolling = false;
          }
        });
      }

      function handleWheel(e) {
        // Prevent additional scroll events while animating
        if (isScrolling) {
          e.preventDefault();
          return;
        }
        // Scrolling down
        if (e.deltaY > 0 && currentSection < panels.length - 1) {
          e.preventDefault();
          goToSection(currentSection + 1);
        }
        // Scrolling up
        else if (e.deltaY < 0 && currentSection > 0) {
          e.preventDefault();
          goToSection(currentSection - 1);
        }
      }

      // Attach the wheel event listener with passive set to false
      window.addEventListener('wheel', handleWheel, { passive: false });

      // Cleanup on unmount
      return () => {
        window.removeEventListener('wheel', handleWheel);
      };
    }

    const cleanupPromise = loadGsap();

    // Cleanup if needed (in case loadGsap returns a cleanup function)
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
    </div>
  );
}
