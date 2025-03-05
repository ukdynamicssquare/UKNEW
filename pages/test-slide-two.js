import { useRef } from 'react';
import Head from 'next/head';
import useLocomotiveScroll from '../hooks/useLocomotiveScroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import default styles

export default function Home() {
  // Create a ref for the scroll container.
  const containerRef = useRef(null);

  // Initialize Locomotive Scroll with your containerRef and optional settings.
  useLocomotiveScroll(containerRef, {
    // You can pass additional Locomotive Scroll options here, e.g.:
    multiplier: 1.2,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  return (
    <>
    <Head>
      <title>test slide</title>
    <meta name="robots" content="noindex, nofollow" />
    </Head>
    <div 
      data-scroll-container 
      ref={containerRef} 
      style={{ overflow: 'hidden' }} // Ensure overflow is hidden if needed
    >
      {/* Your page content goes here */}
      <section data-scroll-section style={{ minHeight: '100vh', background: '#f44336' }}>
        <h1>Section 1</h1>
        <p>Content for Section 1</p>
      </section>
      <section data-scroll-section style={{ minHeight: '100vh', background: '#4caf50' }}>
        <h1>Section 2</h1>
        <p>Content for Section 2</p>
      </section>
      <section data-scroll-section style={{ minHeight: '100vh', background: '#2196f3' }}>
        <h1>Section 3</h1>
        <p>Content for Section 3</p>
      </section>
      <footer data-scroll-section style={{ minHeight: '50vh', background: '#333', color: '#fff' }}>
        <p>Footer content here</p>
      </footer>
    </div>
    
    </>
  );
}
