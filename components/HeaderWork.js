import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeskstopMenu from "./DeskstopMenu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
// import TimerModal from "./TimerModal";

const HeaderWork = () => {
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();

  // Define the specific link where you want to add the class
  const specificPath = "/"; // Change this to your desired link
  const isSpecificPath = router.pathname === specificPath;

  // Determine which logo to show based on the current route
  const getLogoSrc = () => {
    switch (router.pathname) {
      case "/":
        return "/img/dynamics_square_tm_logo_footer.svg";  // Replace with the logo for the About page
      // case "/services":
      //   return "/img/services_logo.svg"; 

      default:
        return "/img/dynamics_square_tm_logo.svg"; // Default logo
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };


    // Handle hover tab switching
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", (event) => {
        const targetTab = new bootstrap.Tab(event.target);
        targetTab.show();
      });
    });

    window.addEventListener("scroll", handleScroll);

    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => { });
      });
    };
  }, []);

  return (
    <>
      {/* <TimerModal /> */}
      <header
        id="header"
        className={`header ${isFixed ? 'fixed-top' : ''} ${isSpecificPath ? 'specific-header' : ''}`}
      >
        <div className="top-header-sec">
          <a href="mailto:info@dynamicssquare.co.uk">
            <span><i className="bi bi-envelope"></i> info@dynamicssquare.co.uk</span>
          </a>
          <a href="tel:+442071932502">
            <span><i className="bi bi-telephone"></i> 0207 193 2502</span>
          </a>
        </div>
        <div className="container-fluid">
          <nav id="navbar" className="navbar">
            <div className="left-logo">
              <a href="/" className="logo">
                <img
                  src={getLogoSrc()}
                  alt="Dynamics Square TM Logo"
                  width="282"
                  height="19"
                />
              </a>
            </div>
            <div className="right-nav">
              <DeskstopMenu />
            </div>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default HeaderWork;
