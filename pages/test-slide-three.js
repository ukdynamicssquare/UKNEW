'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';
export default function FullPageScroll() {
  const horizontalRef = useRef(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const gsap = (await import('gsap')).default;
      const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      gsap.registerPlugin(ScrollTrigger);

      // Smooth Scrolling Setup
      const smoother = gsap.to('html, body', {
        scrollBehavior: 'smooth',
        duration: 1.5,
        ease: 'power2.inOut',
      });

      // Horizontal Scroll
      let sections = gsap.utils.toArray('.horizontal-slide');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: horizontalRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
        },
      });

      // Vertical Pinning
      gsap.utils.toArray('.vertical-section').forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
        });
      });
    };

    loadGSAP();
  }, []);

  return (
    <>
     <Head>
        <title>Test Slide</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <style>
        {`
          .vertical-section {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            scroll-snap-align: start;
          }
          .section-1 { background: #ff5733; }
          .section-2 { background: #33ff57; }
          .section-3 { background: #3357ff; }
          .horizontal-container {
            display: flex;
            width: 300vw;
            height: 100vh;
            scroll-snap-type: x mandatory;
          }
          .horizontal-slide {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            scroll-snap-align: start;
          }
          .slide-1 { background: #ff33a1; }
          .slide-2 { background: #a133ff; }
          .slide-3 { background: #33a1ff; }
        `}
      </style>
      
      <div className="vertical-section section-1">Vertical Section 1</div>
      <div className="vertical-section section-2">Vertical Section 2</div>
      <div className="vertical-section section-3">Vertical Section 3</div>
      <div ref={horizontalRef} className="horizontal-container">
        <div className="horizontal-slide slide-1">Horizontal Slide 1</div>
        <div className="horizontal-slide slide-2">Horizontal Slide 2</div>
        <div className="horizontal-slide slide-3">Horizontal Slide 3</div>
      </div>
    </>
  );
}
