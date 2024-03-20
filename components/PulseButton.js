import { useEffect } from 'react';

const PulseButton = () => {
  useEffect(() => {
    const triggerAnimation = () => {
      const element = document.querySelector('.custtsss');
      if (element) {
        element.classList.add('animation-class'); // Add class to start animation
        setTimeout(() => {
          element.classList.remove('animation-class'); // Remove class after animation completes
        }, 2000); // Animation duration (2 seconds)
      }
    };
    // Initial trigger
    triggerAnimation();

    // Set interval to trigger animation every 8 seconds
    const interval = setInterval(triggerAnimation, 5000); // 8000 milliseconds = 8 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    // Your component JSX
    <a
    className="getstarted custtsss"
    href="/contact-us/"
    target="_self"
  > Contact Us</a>
  );
};

export default PulseButton;
