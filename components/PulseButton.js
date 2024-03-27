import { useEffect } from 'react';

const PulseButton = () => {
  useEffect(() => {
    const triggerAnimation = () => {
      const element = document.querySelector('.custtsss');
      if (element) {
        element.classList.add('animation-class'); // Add class to start animation
        setTimeout(() => {
          element.classList.remove('animation-class'); // Remove class after animation completes
        }, 5000); // Animation duration (2 seconds)
      }
    };
    // Initial trigger
    triggerAnimation();

    // Set interval to trigger animation every 8 seconds
    const interval = setInterval(triggerAnimation, 6000); // 8000 milliseconds = 8 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    // Your component JSX
    <div className="button-new custtsss" id="button-2">
    <div id="slide"></div>
    <a href="/contact-us/">Contact Us</a>
  </div>
  );
};

export default PulseButton;
