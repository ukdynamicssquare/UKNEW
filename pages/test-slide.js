import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  useEffect(() => {
    async function loadGsap() {
      const gsapModule = await import('gsap');
      const ScrollTriggerModule = await import('gsap/ScrollTrigger');
      const ScrollToPluginModule = await import('gsap/ScrollToPlugin');
      const gsap = gsapModule.default;
      const ScrollTrigger = ScrollTriggerModule.default;
      const ScrollToPlugin = ScrollToPluginModule.default;

      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      // Get all panels and use a flag to prevent overlapping scroll animations
      let panels = gsap.utils.toArray('.panel');
      let isScrolling = false;

      function goToSection(i) {
        if (isScrolling) return; // Prevent overlapping animations
        isScrolling = true;
        gsap.to(window, {
          scrollTo: { y: i * window.innerHeight, autoKill: false, ease: "power3.inOut" },
          duration: 0.85,
          onComplete: () => {
            isScrolling = false; // Reset flag when done
          }
        });
      }

      // Kill any existing ScrollTriggers to avoid duplicates
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      panels.forEach((eachPanel, i) => {
        // Trigger on scrolling down: when top of panel hits bottom of viewport
        ScrollTrigger.create({
          trigger: eachPanel,
          start: "top bottom",
          onEnter: () => goToSection(i)
        });

        // Trigger on scrolling up: when top of panel hits top of viewport
        ScrollTrigger.create({
          trigger: eachPanel,
          start: "top top",
          onEnterBack: () => goToSection(i)
        });
      });
    }
    loadGsap();
  }, []);

  return (
    <div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-primary text-white text-center p-4"
        style={{ willChange: 'transform, opacity' }}
      >
        <h1>Section 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula.</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-secondary text-white text-center p-4"
        style={{ willChange: 'transform, opacity' }}
      >
        <h1>Section 2</h1>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-success text-white text-center p-4"
        style={{ willChange: 'transform, opacity' }}
      >
        <h1>Section 3</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-danger text-white text-center p-4"
        style={{ willChange: 'transform, opacity' }}
      >
        <h1>Section 4</h1>
        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
      </div>
    </div>
  );
}
