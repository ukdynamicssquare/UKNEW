import React, { Component } from "react";
import Image from "next/image";
import DeskstopMenu from "./DeskstopMenu";
import MobileMenu from "./MobileMenu";
// import TimerModal from "./TimerModal";


class HeaderWork extends Component {
  componentDidMount() {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("fixed-top");
      } else {
        elementId.classList.remove("fixed-top");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        {/* <TimerModal /> */}
        <header id="header" className="header">
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
                    src="/img/dynamics_square_tm_logo.svg"
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
  }
}
export default HeaderWork;
