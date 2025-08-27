import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeskstopMenu from "./DeskstopMenu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
// import TimerModal from "./TimerModal";

const HeaderWork = () => {
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const gname="services-header"
  const headerClassMap = {
    "/": "specific-header",
    "/products/dynamics-365-business-central/bc-support": `${gname}`,
    "/dynamics-365-business-central-implementation": `${gname}`,
    "/d365-business-central-support": `${gname}`,
     "/products/dynamics-365-business-central": `${gname}`,
     "/products/microsoft-dynamics-365-finance": `${gname}`,
    "/products/dynamics-365-business-central/financial-management": `${gname}`,
    "/products/dynamics-365-business-central/sales-order-management": `${gname}`,
    "/products/dynamics-365-business-central/supply-chain-management": `${gname}`,
    "/products/dynamics-365-business-central/warehouse-management": `${gname}`,
    "/products/dynamics-365-business-central/project-management": `${gname}`,
    "/products/dynamics-365-business-central/service-management": `${gname}`,
     "/continia-for-dynamics-365-business-central": `${gname}`,
      "/continia-expense-management": `${gname}`,
       "/book-a-demo": `${gname}`,
  };

  const currentHeaderClass = headerClassMap[router.pathname] || "";

  const getLogoSrc = () => {
    switch (router.pathname) {
      case "/":
        return "/img/dynamics_square_tm_logo_footer.svg";
      default:
        return "/img/dynamics_square_tm_logo.svg";
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
        className={`header ${isFixed ? "fixed-top" : ""} ${currentHeaderClass}`}
      >
        <div className="top-header-sec">
          <a href="mailto:info@dynamicssquare.co.uk">
            <span><i className="bi bi-envelope"></i> info@dynamicssquare.co.uk</span>
          </a>
          <a href="tel:+442037697689">
            <span><i className="bi bi-telephone"></i> 0203 769 7689</span>
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
