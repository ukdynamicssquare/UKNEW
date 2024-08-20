import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import FormCaseScroll from "../../components/FormCaseScroll"; // Adjust the path as needed

const CrmTrading = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Check local storage to see if the form has already been submitted
    const formSubmittedState = localStorage.getItem('formSubmitted') === 'true';
    if (formSubmittedState) {
      setShowPopup(false);
      return; // Exit if the form was already submitted
    }

    const handleScroll = () => {
      const position = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrolledPercentage = (position / (scrollHeight - clientHeight)) * 100;

      setScrollPosition(scrolledPercentage);

      if (scrolledPercentage > 10 && !showPopup) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [scrollPosition, showPopup]);

  const handlePopupClose = () => {
    setShowPopup(false); // Hide the popup
    localStorage.setItem('formSubmitted', 'true'); // Save state to local storage
  };

  return (
    <>
      <Head>
        <title>Dynamics NAV 2009 to NAV 2018 Upgrade | Case Study</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={showPopup ? "blur-content" : ""}>
        <section className="hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="webin-top-left case-study-bann">
                  <div className="top-se">
                    <span className="date-ti">Case Study</span>
                    <h1>Dynamics NAV 2009 to NAV 2018 Upgrade</h1>
                    <p>Boost up the operational efficiency with Microsoft Dynamics NAV 2018</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="sider-over">
                  <Image
                    src="/img/Dynamics-365-Business-Central.png"
                    alt="Business central casestudy"
                    width={1024}
                    height={597}
                    priority={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cast-studi-into">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row bg-case">
                  <div className="col-lg-3 align-self-center">
                    <div><img src="/img/casestudy-pic.png" alt="casestudy-pic" /></div>
                  </div>
                  <div className="col-lg-9">
                    <p>A leading wholesaler...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of your sections here */}
      </div>

      {/* Pop-up Form */}
      {showPopup && <FormCaseScroll onClose={handlePopupClose} />}
      <style jsx>{`
        .blur-content {
          filter: blur(7px);
          transition: filter 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default CrmTrading;
