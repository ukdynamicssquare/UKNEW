import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

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

      let panels = gsap.utils.toArray('.panel');
      let isScrolling = false;

      function goToSection(i) {
        if (isScrolling) return;
        isScrolling = true;
        gsap.to(window, {
          scrollTo: { y: i * window.innerHeight, autoKill: false, ease: "power3.inOut" },
          duration: 0.85,
          onComplete: () => { isScrolling = false; }
        });
      }

      // Clear any previous triggers to avoid duplicate work
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      panels.forEach((eachPanel, i) => {
        // Trigger for scrolling down: fire when top of panel reaches 80% of viewport
        ScrollTrigger.create({
          trigger: eachPanel,
          start: "top 80%",
          onEnter: () => goToSection(i)
        });

        // Trigger for scrolling up: fire when bottom of panel reaches 20% of viewport
        ScrollTrigger.create({
          trigger: eachPanel,
          start: "bottom 20%",
          onEnterBack: () => goToSection(i)
        });
      });
    }
    loadGsap();
  }, []);

  return (
   <>
    <Head>
        <title>Home</title>
        <meta name="robots" content="noindex, nofollow"></meta>
    </Head>
    <div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-primary text-white text-center p-4"
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      >
        <h1>Section 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula.</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-secondary text-white text-center p-4"
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      >
        <h1>Section 2</h1>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-success text-white text-center p-4"
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      >
        <h1>Section 3</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-danger text-white text-center p-4"
        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
      >
        <h1>Section 4</h1>
        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
      </div>
    </div>
   </>
  );
}
