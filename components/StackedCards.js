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
              <div className="custom-card card1" style={{ zIndex: 2 }}>
                <div className='card1-content'>
                  <div className='card1-content-inner'>
                    <h3>Automated Finance & Accounting</h3>
                    <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                    <ul>
                      <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                      <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                      <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                    </ul>
                  </div>
                  <div className='card1-content-img'>
                    <img src="/img/n-008.png" alt="Card 1" />
                  </div>
                </div>
              </div>
              <div className="custom-card card2" style={{ zIndex: 3 }}>
              <div className='card1-content'>
                  <div className='card1-content-inner'>
                    <h3>Automated Finance & Accounting</h3>
                    <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                    <ul>
                      <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                      <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                      <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                    </ul>
                  </div>
                  <div className='card1-content-img'>
                    <img src="/img/n-009.png" alt="Card 1" />
                  </div>
                </div>
              </div>
              <div className="custom-card card3" style={{ zIndex: 4 }}>
              <div className='card1-content'>
                  <div className='card1-content-inner'>
                    <h3>Automated Finance & Accounting</h3>
                    <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                    <ul>
                      <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                      <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                      <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                    </ul>
                  </div>
                  <div className='card1-content-img'>
                    <img src="/img/n-010.png" alt="Card 1" />
                  </div>
                </div>
              </div>
              <div className="custom-card card4" style={{ zIndex: 5 }}>
              <div className='card1-content'>
                  <div className='card1-content-inner'>
                    <h3>Automated Finance & Accounting</h3>
                    <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                    <ul>
                      <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                      <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                      <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                    </ul>
                  </div>
                  <div className='card1-content-img'>
                    <img src="/img/n-011.png" alt="Card 1" />
                  </div>
                </div>
              </div>
              <div className="custom-card card5" style={{ zIndex: 5 }}>
              <div className='card1-content'>
                  <div className='card1-content-inner'>
                    <h3>Automated Finance & Accounting</h3>
                    <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                    <ul>
                      <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                      <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                      <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                    </ul>
                  </div>
                  <div className='card1-content-img'>
                    <img src="/img/n-006.png" alt="Card 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackCardsScroll;
