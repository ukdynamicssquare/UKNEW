import { useEffect } from 'react';

const useGsapScrollCards = (containerRef) => {
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/ScrollToPlugin'),
    ]).then(([gsapModule, ScrollTriggerModule, ScrollToPluginModule]) => {
      const gsap = gsapModule.gsap;
      gsap.registerPlugin(
        ScrollTriggerModule.default,
        ScrollToPluginModule.default
      );

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.cards',
            pin: true,
            start: 'top 20%',
            // start: 'top-=160px top',
            // start: 'center center',
            // end: '+=2000',
            end: () => `+=${window.innerHeight * 2}`,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.addLabel('card1');
        tl.to('.card1', { scale: 0.95, yPercent: 0, opacity: 1, duration: 0.5 });

        tl.from('.card2', { yPercent: 75, opacity: 0 });
        tl.addLabel('card2');
        tl.to('.card1', { scale: 0.925, yPercent: -0.75, opacity: 1 }, '-=0.3');
        tl.to('.card2', { yPercent: 0, opacity: 1 });

        tl.from('.card3', { yPercent: 75, opacity: 0 });
        tl.addLabel('card3');
        tl.to('.card2', { scale: 0.95, yPercent: -0.5, opacity: 1 }, '-=0.3');
        tl.to('.card3', { yPercent: 0, opacity: 1 });

        tl.from('.card4', { yPercent: 75, opacity: 0 });
        tl.addLabel('card4');
        tl.to('.card3', { scale: 0.97, yPercent: -0.4, opacity: 1 }, '-=0.3');
        tl.to('.card4', { yPercent: 0, opacity: 1 });

        tl.from('.card5', { yPercent: 75, opacity: 0 });
        tl.addLabel('card5');
        tl.to('.card4', { scale: 0.99, yPercent: -0.3, opacity: 1 }, '-=0.3');
        tl.to('.card5', { yPercent: 0, opacity: 1 });
      }, containerRef);

      return () => ctx.revert();
    });
  }, [containerRef]);
};

export default useGsapScrollCards;
