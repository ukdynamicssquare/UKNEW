import { useEffect } from 'react';

export default function useLocomotiveScroll(containerRef, options = {}) {
  useEffect(() => {
    let locoScroll;
    async function initLocomotive() {
      // Dynamically import Locomotive Scroll so it only runs on the client side.
      const LocomotiveScrollModule = await import('locomotive-scroll');
      const LocomotiveScroll = LocomotiveScrollModule.default;
      
      // Initialize Locomotive Scroll on the containerRef element.
      locoScroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        // Merge any additional options passed into the hook.
        ...options,
      });
    }
    
    if (containerRef.current) {
      initLocomotive();
    }
    
    // Cleanup on unmount: destroy the Locomotive Scroll instance.
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [containerRef, options]);
}
