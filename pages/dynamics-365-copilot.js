import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper';
const ErpMicrosoftCloudFor = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Copilot| Dynamics Square</title>
        <meta name="robots" content='noindex, nofollow' />
        <meta
          name="description"
          content="Find the best ERP solutions for startups! Streamline operations, enhance productivity, and drive growth with tailored ERP systems for small businesses in UK."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/erp-for-startups/"
        />

      </Head>
      <main>
        <section className="top-banner-new">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Dynamics 365 Copilot</h1>
                <h2>Unleash Productivity with Dynamics 365 Copilot</h2>
                <p>Transform your workflows, automate tasks, and accelerate decision-making with Microsoft Dynamics 365 Copilot.</p>
                <div className='ne-callt-batt'>
                  <Link href="#exampleModal">
                    <a data-bs-toggle="modal"

                      className="btn-get-started scrollto"
                    >
                      <span>Talk to Our Experts!</span></a>
                  </Link>
                </div>

              </div>
              <div className="col-lg-6 align-self-center">
                <div className='text-center'>
                  <Image src="/img/copilot-new-banner.png" alt="bcvsfinance" width={622} height={347} priority={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two section-header-two-p-c">
                  <span>Introduction to Microsoft Dynamics 365 Copilot</span>
                  <h2>Make Your Business More Efficient with Microsoft Copilot!</h2>
                  <p>Microsoft Dynamics 365 Copilot is the next-generation AI assistant that is meant to help businesses be more productive and make better decisions. As part of the Dynamics 365 ecosystem, it works well with ERP and CRM solutions to give you information, make tasks easier, and improve teamwork.</p>
                </header>
              </div>
            </div>

            <div className='row g-3'>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className='card555'>
                  <div className='card555-body'>
                    <img src="/img/i-cons-12.png" width={48} height={48} alt="icons" />
                    <h3 className="card-title">Better Decision-Making</h3>
                    <p>Provides real-time insights to support data-driven decisions.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className='card555'>
                  <div className='card555-body'>
                    <img src="/img/i-cons-13.png" width={48} height={48} alt="icons" />
                    <h3 className="card-title">Simplified Operations</h3>
                    <p>Automates repetitive tasks, saving time and reducing errors.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className='card555'>
                  <div className='card555-body'>
                    <img src="/img/i-cons-14.png" width={48} height={48} alt="icons" />
                    <h3 className="card-title">Better User Experience</h3>
                    <p>Intuitive design with context-sensitive AI assistance for various workflows.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex">
                <div className='card555'>
                  <div className='card555-body'>
                    <img src="/img/i-cons-15.png" width={48} height={48} alt="icons" />
                    <h3 className="card-title">Collaborative Intelligence</h3>
                    <p>Helps people from different departments to work together better by acting as a smart assistant.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* <div className="row g-5 ps-realtive">
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Tight Budgets and Resource Crunches</h3>
                  <p>No hefty upfront costs! No overextending of your budget! Set your business up for success by acquiring enterprise-grade tools with startup-friendly pricing options.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>38% </span>of startups fail due to cash flow problems</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Data Silos and Disconnected Systems</h3>
                  <p>Bid adieu to scattered tools and fragmented information. Integrate your operations on a unified platform to enable seamless data flow and informed decision-making.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>82% </span>of organizations report challenges with data integration.</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Manual Workflows and Inefficiencies</h3>
                  <p>Reduce administrative burden with automation. Focus on innovation while your routine tasks handle themselves.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>40%  </span>increase in productivity due to automation</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Compliance and Regulatory Demands</h3>
                  <p>Stay ahead of legal and regulatory requirements with built-in tools for reporting and compliance management—no stress, no hassle.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>56%  </span>of startups find regulatory compliance burdensome</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Resource Constraints and Project Management</h3>
                  <p>Maximize efficiency by allocating resources smartly and tracking projects in real-time, ensuring smooth operations even with a lean team.</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-12 text-center">
              <div className="bnt-tras">
                <a href="#">Explore More!</a>
              </div>
            </div> */}

          </div>
        </section>

        <section>
          <div className='container'>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two section-header-two-p-c">
                  <h2>Dynamics 365 Copilot Empowers Microsoft CRM Solutions</h2>
                  <p>Microsoft Dynamics 365 Copilot enhances customer relationship management (CRM) by transforming how businesses interact with customers and manage relationships. It works with the Dynamics 365 Sales, Customer Service, and Customer Insights solutions to give customers the best experiences possible.</p>
                </header>
              </div>
            </div>


            <div className='row'>
              <div className='col-lg-7'>
                <div className='row'>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Automated Follow-ups</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Real-Time Suggestions</h3>
                      </div>
                      <p>Tells you what to do next while you're talking to a customer.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Data Simplification</h3>
                      </div>
                      <p>Creates summaries of interactions with customers for future reference.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Task Prioritization</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='img-backs-sid'>
                  <img src="/img/copil-side.png" alt="copil-side" className='im-two' />
                  <img src="/img/bb-gg.png" alt="copil-side" className='im-one' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                {/* <header className="section-header-two-side">
                  <h2>Dynamics 365 Copilot Empowers <br />Microsoft CRM Solutions</h2>
                  <p>Microsoft Dynamics 365 Copilot enhances customer relationship management (CRM) by transforming how businesses interact with customers and manage relationships. It works with the Dynamics 365 Sales, Customer Service, and Customer Insights solutions to give customers the best experiences possible.</p>
                  <span>Features & Benefits:</span>
                </header> */}
                <header className="section-header-two section-header-two-p-c">
                  <h2>Dynamics 365 Copilot Empowers Microsoft CRM Solutions</h2>
                  <p>Microsoft Dynamics 365 Copilot enhances customer relationship management (CRM) by transforming how businesses interact with customers and manage relationships. It works with the Dynamics 365 Sales, Customer Service, and Customer Insights solutions to give customers the best experiences possible.</p>
                </header>
              </div>
            </div>


            <div className='row'>
              <div className='col-lg-7 order-2'>
                <div className='row'>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Automated Follow-ups</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Real-Time Suggestions</h3>
                      </div>
                      <p>Tells you what to do next while you're talking to a customer.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Data Simplification</h3>
                      </div>
                      <p>Creates summaries of interactions with customers for future reference.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Task Prioritization</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 order-1'>
                <div className='img-backs-sid'>
                  <img src="/img/copil-side.png" alt="copil-side" className='im-two' />
                  <img src="/img/bb-gg.png" alt="copil-side" className='im-one' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-22-or">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="headin-444">
                  <h3>Make Your Business More Efficient <br />with Microsoft Copilot!</h3>
                  <p>Microsoft Copilot is built into many Dynamics 365 solutions, giving businesses a cohesive set of tools that work in tandem together. These solutions, with the help of Copilot, offer easy-to-use features that make things run more smoothly and get more things done.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 p-0">
                <Swiper
                  slidesPerView={5} /* Show 4 slides at a time */
                  spaceBetween={10} /* Space between slides */
                  pagination={{
                    clickable: true,
                  }}
                  modules={[]}
                  className="mySwiperss"
                loop={true} 
                speed={1000} 
                centeredSlides={true} 
                >
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <img src="/img/chapter-01.png" alt="chapter-01" />
                      <h3>Dynamics 365 Sales</h3>
                      <ul>
                        <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                        <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information.</span></li>
                        <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <img src="/img/chapter-02.png" alt="chapter-01" />
                      <h3>Supply Chain Management</h3>
                      <ul>
                        <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                        <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information.</span></li>
                        <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <img src="/img/chapter-03.png" alt="chapter-01" />
                      <h3>Customer Service</h3>
                      <ul>
                        <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                        <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information.</span></li>
                        <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <img src="/img/chapter-04.png" alt="chapter-01" />
                      <h3>Copilot in Marketing</h3>
                      <ul>
                        <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                        <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information.</span></li>
                        <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <img src="/img/chapter-05.png" alt="chapter-01" />
                      <h3>Dynamics 365 Marketng</h3>
                      <ul>
                        <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                        <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information.</span></li>
                        <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                      </ul>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <img src="/img/chapter-06.png" alt="chapter-01" />
                      <h3>Dynamics 365 power BI</h3>
                      <ul>
                        <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                        <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information.</span></li>
                        <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                        <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                      </ul>
                    </div>
                  </SwiperSlide>



                </Swiper>
              </div>
            </div>
          </div>
        </section>




        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two">
                  <span>Key Solution</span>
                  <h2>Microsoft Dynamics 365 Business Central—Your Comprehensive Solution for Smarter Business Management</h2>
                </header>
              </div>
            </div>
            <div className="row d-none d-md-block">
              <div className="col-lg-12">
                <div className="chal-pic-banner">
                  <img src="/img/colilte-full-banner.png" alt="colilte-full-banner" />
                </div>
              </div>
            </div>
            <div className="row d-md-none">
              <div className="col-lg-12">
                <div className="card-233">
                  <div className="card-233-body">
                    <h3>AI-Powered Assistance</h3>
                    <p>Get intelligent, context-driven insights to streamline tasks and improve decisions.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Live Data Insights</h3>
                    <p>Access real-time performance metrics for sales, finances, and inventory.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Actionable Alerts</h3>
                    <p>Get notified for critical tasks, pending approvals, and probable issues.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Financial Mastery</h3>
                    <p>Effortlessly keep track of cash flow, manage budgets, and supervise accounts with confidence.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Seamless Integrations</h3>
                    <p>Easily connect Microsoft tools like Teams, Office, and third-party apps to get more done.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two">
                  <span>Key Solution</span>
                  <h2>Microsoft Dynamics 365 Business Central—Your Comprehensive Solution for Smarter Business Management</h2>
                </header>
              </div>
            </div>
            <div className="row d-none d-md-block">
              <div className="col-lg-12">
                <div className="chal-pic-banner">
                  <img src="/img/colilte-full-banne-1.png" alt="colilte-full-banner" />
                </div>
              </div>
            </div>
            <div className='row' style={{paddingTop:"60px"}}>
                  <div className='col-lg-4 d-flex'>
                    <div className='card556'>
                      <div className='card-233-body'>
                        <h3>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-4 d-flex'>
                    <div className='card556'>
                      <div className='card-233-body'>
                        <h3>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-4 d-flex'>
                    <div className='card556'>
                      <div className='card-233-body'>
                        <h3>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-4 d-flex'>
                    <div className='card556'>
                      <div className='card-233-body'>
                        <h3>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
                  <div className='col-lg-4 d-flex'>
                    <div className='card556'>
                      <div className='card-233-body'>
                        <h3>Customer Insights</h3>
                      </div>
                      <p>Sends personalized email follow-ups after customer interactions.</p>

                    </div>
                  </div>
            
                </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row justify-content-center p-realtive">
              <div className="col-lg-12">
                <div className="new-cta-one">
                  <div className="new-cta-one-body">
                    <h2> <span>Save upto 40%</span> on deployment and upgrade costs!</h2>
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-star">See How It Works for Your Startup?</a>
                  </div>
                </div>
                {/* <div className='abs-pic'>
                <img src="/img/sahpe-2212-pic.png" alt="sahpe-2212-pic" />
                </div> */}
              </div>

            </div>
          </div>
        </section>




     

    




      </main>
    </>
  );
};

export default ErpMicrosoftCloudFor;
