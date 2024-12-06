import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import FormCaseScroll from "../../components/FormCaseScroll"; 

const DynamicsNav2013BusinessCentralUpgrade = () => {

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
      <title>Dynamics NAV 2013 R2 to Business Central Upgrade | Case Study</title>
        <meta
          name="description"
          content="UK's leading fragrance supplier worked with Dynamics Square to Dynamics NAV 2013 R2 to Business Central Upgrade. Read the case story to gain insights."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/nav-2013-r2-to-business-central-upgrade/"
        />
      </Head>
      <div className={showPopup ? "blur-content" : ""}>
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Dynamics NAV 2013 R2 to Business Central Upgrade</h1>
                  {/* <p>Boost up the operational efficiency with Microsoft Dynamics NAV 2018</p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <Image
                  src="/img/Dynamics-365-Business-Central.png"
                  alt="Business central casestudy"
                  width={1024} height={597}
                  priority = {true}
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
               <div> <div><img
                    src="/img/casestudy-pic.png"
                    alt="casestudy-pic"
                  /></div>
                </div></div>
                <div className="col-lg-9">
                  <p>At Dynamics Square, we're passionate about empowering businesses to achieve their full potential. As a leading Microsoft Solutions Partner with a global reach, we've been helping organizations of all sizes streamline operations, boost productivity, and drive growth for over 14 years.</p>
                  <p>Our team of 150+ certified experts leverage deep industry knowledge and cutting-edge Microsoft technologies to deliver tailored solutions that meet your unique needs. Whether you're looking to modernize your business processes, improve customer experiences, or enhance decision-making, we've got you covered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
         <div className="row justify-content-center">
          <div className="col-lg-9">
          <header className="section-header">
            <h2>
              What are The <br />
              Business Challenges
            </h2>
            <p>A leading orthodontic supplier in the UK, a well-established company specialising in orthodontic products, was seeking to enhance its operational efficiency, improve data visibility, and support future growth. The company's existing Dynamics NAV 2013 R2 solution, while effective, was no longer sufficient to meet the evolving needs of the business.</p>
          </header>
          </div>
         </div>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/cast-stu-pic.png" alt="cast-stu-pic" width={484} height={407}/>
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Limited Scalability:</b> The existing system struggled to handle increased business volume and complexity.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Inefficient Processes:</b> Manual processes and data entry errors hindered productivity.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Lack of Real-Time Insights:</b> Limited visibility into inventory levels, sales performance, and financial data.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><b>Integration Challenges:</b> Difficulty in integrating with other systems, such as the warehouse management system and mobile applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
            <header className="section-header">
            <h2>Solution Delivered</h2>
            <p>Dynamics Square, a trusted Microsoft Dynamics partner, was selected to implement Dynamics 365 Business Central. The solution addressed the client's specific needs:</p>
          </header>
            </div>
          </div>
          
          <div className="row mobile-margin-01">
            <div className="col-lg-12">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="industries-list-more">
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p>Core ERP Functionality: Implemented core ERP modules to streamline financial management, sales, purchasing, and inventory control.</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Integration with Warehouse Management System: Integrated the Tasklet WMS to optimize warehouse operations and improve inventory accuracy.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Document Automation: Utilized Continia Document Capture to automate document handling and improve efficiency.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Document Management: Implemented Zetadocs Capture with Business Central to streamline document management process.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Mobile Accessibility: Leveraged mobile capabilities to enable remote access and field operations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Customization and Configuration: Tailored the solution to meet the client's unique business processes and requirements.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Training and Support: Provided comprehensive training to users and ongoing support to ensure smooth operations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <header className="section-header">
            <h2>Insightful Findings</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Cloud-Based ERP Accelerates Digital Transformation: Cloud-based solutions like D365 Business Central enable rapid deployment and scalability.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Integration is Key to Seamless Operations: Integrating various systems, such as WMS and mobile applications, can significantly improve efficiency and data accuracy.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Automation Streamlines Processes: Automating manual tasks, such as document capture, reduces errors and frees up time for value-added activities.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Mobile Access Enhances Productivity: Mobile capabilities empower employees to work remotely and access critical information on the go.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Data-Driven Decision Making: Real-time insights and analytics provided by D365 Business Central enable data-driven decision-making.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Ongoing Support is Essential: Post-implementation support is crucial to ensure system stability and address evolving business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="Group1435" width={640} height={598}/>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="case-clent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="case-clent-test">
                <p>
                  We are impressed with their product awareness, technical
                  skills and commitment to us. They analyze the situation and
                  deliver to best fit our requirement and solutions.
                </p>
                <h4>Mark Shaxted</h4>
                <span>Operations Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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

export default DynamicsNav2013BusinessCentralUpgrade;
