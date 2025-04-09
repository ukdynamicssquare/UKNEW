// components/StackCards.js
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StackedCardsOne = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100 * index,
          scale: 0.9,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="stack-container" style={{ padding: '100px 20px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="stack-card"
          style={{
            margin: '40px auto',
            padding: '60px',
            background: '#fff',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            borderRadius: '16px',
            width: '80%',
            maxWidth: '1200px',
            transformOrigin: 'center center',
          }}
        >
          <h3>Card {i + 1}</h3>
          <p>This is some sample content for card {i + 1}.</p>
        </div>
      ))}
    </div>
  );
};

export default StackedCardsOne;
