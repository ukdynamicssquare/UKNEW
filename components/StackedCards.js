"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const StackCardsScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // Disable for mobile devices
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cards',
          pin: true,
          // pinSpacing: true,
          // markers: true,
          start: 'center center',
          end: '+=2000',
          scrub: 1,
        },
      });

      tl.addLabel('card1');
      tl.to('.card1', {
        scale: 0.95,
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      });

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

      // Final tweaks
      // tl.to('.card1', { scale: 0.925, yPercent: -1.5, opacity: 0.9 }, '-=0.3');
      // tl.to('.card2', { scale: 0.95, yPercent: -1.125, opacity: 0.9 }, '-=0.3');
      // tl.to('.card3', { scale: 0.98, yPercent: -0.85, opacity: 0.9 }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
   <section>
     <div className="container" ref={containerRef}>
      <div className="row">
        <div className="col-12">
          <div className="cards">
            <div className="custom-card card1" id="1" style={{ zIndex: 2 }}>
              <h1>Slide 1</h1>
            </div>
            <div className="custom-card card2" id="2" style={{ zIndex: 3 }}>
              <h1>Slide 2</h1>
            </div>
            <div className="custom-card card3" id="3" style={{ zIndex: 4 }}>
              <h1>Slide 3</h1>
            </div>
            <div className="custom-card card4" id="4" style={{ zIndex: 5 }}>
              <h1>Slide 4</h1>
            </div>
            <div className="custom-card card5" id="5" style={{ zIndex: 5 }}>
              <h1>Slide 5</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
};

export default StackCardsScroll;
