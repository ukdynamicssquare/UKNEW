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
import { FreeMode, Navigation, Thumbs, Mousewheel } from 'swiper';
const ErpMicrosoftCloudFor = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 Copilot Services - AI-Powered assistance</title>
        <meta
          name="description"
          content="Enhance productivity with Dynamics 365 Copilot Services—AI-powered assistance for automation, insights, and collaboration. Streamline workflows and drive efficiency!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-copilot/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-copilot/" />
        <meta property="og:title" content="Dynamics 365 Copilot Services - AI-Powered assistance" />
        <meta property="og:description" content="Enhance productivity with Dynamics 365 Copilot Services—AI-powered assistance for automation, insights, and collaboration. Streamline workflows and drive efficiency" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/copilot-new-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-copilot/" />
        <meta property="twitter:title" content="Dynamics 365 Copilot Services - AI-Powered assistance" />
        <meta property="twitter:description" content="Enhance productivity with Dynamics 365 Copilot Services—AI-powered assistance for automation, insights, and collaboration. Streamline workflows and drive efficiency" />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/copilot-new-banner.png" />
      </Head>
      <main>
        <section className="top-banner-new top-banner-new-bg">
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
                  <video className="video-screen-home-d" playsInline autoPlay loop muted poster="/img/copilot-new-banner.png">
                    <source src="/video/copiltvide.mp4" type="video/mp4" />
                  </video>
                  {/* <Image src="/img/copilot-new-banner.png" alt="bcvsfinance" width={622} height={347} priority={true} /> */}
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

          </div>
        </section>

        <section>
          <div className='container'>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two section-header-two-p-c">
                  <h2>Dynamics 365 Copilot Empowers <br />Microsoft CRM Solutions</h2>
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
                      <p>Provides actionable intelligence about customer preferences and trends.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Task Prioritization</h3>
                      </div>
                      <p>Uses AI to suggest and prioritize high-impact tasks.</p>

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
                  <h2>Dynamics 365 Copilot in <br />Microsoft ERP Solutions</h2>
                  <p>Microsoft Copilot comes integrated into ERP solutions like Dynamics 365 Finance, Supply Chain Management, and Commerce. It improves back-end processes that help businesses run more smoothly.</p>
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
                        <h3><span><i className="bi bi-check2"></i></span>Financial Accuracy</h3>
                      </div>
                      <p>Helps with budgeting and forecasting by analyzing historical data.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Inventory Management</h3>
                      </div>
                      <p>Uses predictive analytics to find the best stock levels and cut down on waste.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Procurement Simplification</h3>
                      </div>
                      <p>Automates vendor comparisons and purchase order creation.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Compliance Assistance</h3>
                      </div>
                      <p>Tracks regulatory changes and suggests updates to policies.</p>

                    </div>
                  </div>
                  <div className='col-lg-6 d-flex'>
                    <div className='card557'>
                      <div className='card-233-body'>
                        <h3><span><i className="bi bi-check2"></i></span>Report Generation</h3>
                      </div>
                      <p>Creates detailed financial and operational reports on demand.</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-5 order-1'>
                <div className='img-backs-sid'>
                  <img src="/img/fincial-acc-pci.png" alt="copil-side" className='im-two' />
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
                  <h2>Dynamics 365 Solutions Integrated with Copilot</h2>
                  <p>Microsoft Copilot is built into many Dynamics 365 solutions, giving businesses a cohesive set of tools that work in tandem together. These solutions, with the help of Copilot, offer easy-to-use features that make things run more smoothly and get more things done.</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 p-0">
                <Swiper
                  spaceBetween={10}
                  grabCursor={true}
                  modules={[Navigation, Mousewheel]}
                  className="mySwiperss"
                  loop={false}
                  speed={1000}
                  centeredSlides={false}
                  breakpoints={{
                    640: {
                      slidesPerView: 1
                    },
                    768: {
                      slidesPerView: 2
                    },
                    1024: {
                      slidesPerView: 2
                    },
                    1200: {
                      slidesPerView: 3
                    },
                  }}
                >


                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <div>
                        <img src="/img/chapter-01.png" alt="chapter-01" />
                        <h3>Dynamics 365 Sales</h3>
                        <ul>
                          <li><i className="bi bi-check2"></i><span>Automatically generates meeting summaries and follow-up suggestions based on customer interactions</span></li>
                          <li><i className="bi bi-check2"></i><span>Provides predictive analytics to identify and prioritize high-potential leads.</span></li>
                          <li><i className="bi bi-check2"></i><span>Keeps an eye on sales trends to improve strategies in real-time.</span></li>
                          <li><i className="bi bi-check2"></i><span>Facilitates seamless integration with Microsoft Teams for collaborative sales planning.</span></li>
                        </ul>
                      </div>
                      <div className='text-al'>
                        <a href="/products/microsoft-dynamics-365-sales/" className='links-new-1'>Learn More</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <div>
                        <img src="/img/chapter-03.png" alt="chapter-01" />
                        <h3>Dynamics 365 Customer Service</h3>
                        <ul>
                          <li><i className="bi bi-check2"></i><span>Real-time suggestions for resolving customer issues more effectively.</span></li>
                          <li><i className="bi bi-check2"></i><span>Helps provide AI-driven templates for faster, personalized responses.</span></li>
                          <li><i className="bi bi-check2"></i><span>Assists with case management by forecasting resolution times and next best actions</span></li>
                          <li><i className="bi bi-check2"></i><span>Improves the level of service by keeping track of performance and analyzing feedback.</span></li>
                        </ul>
                      </div>
                      <div className='text-al'>
                        <a href="/products/microsoft-dynamics-365-customer-service/" className='links-new-1'>Learn More</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <div>
                        <img src="/img/chapter-04.png" alt="chapter-01" />
                        <h3>Dynamics 365 Marketing</h3>
                        <ul>
                          <li><i className="bi bi-check2"></i><span>Offers personalized campaign suggestions tailored to audience behavior.</span></li>
                          <li><i className="bi bi-check2"></i><span>Enables automated email generation for targeted outreach.</span></li>
                          <li><i className="bi bi-check2"></i><span>Tracks campaign performance and provides actionable insights</span></li>
                          <li><i className="bi bi-check2"></i><span>Supports integration with LinkedIn for extended audience reach.</span></li>
                          <li><i className="bi bi-check2"></i><span>Automated meeting summaries.</span></li>
                          <li><i className="bi bi-check2"></i><span>Intelligent deal predictions and follow-up suggestions.</span></li>
                        </ul>
                      </div>
                      <div className='text-al'>
                        <a href="/products/microsoft-dynamics-365-marketing/" className='links-new-1'>Learn More</a>
                      </div>
                    </div>
                  </SwiperSlide>


                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <div>
                        <img src="/img/chapter-05.png" alt="chapter-01" />
                        <h3>Dynamics 365 Finance</h3>
                        <ul>
                          <li><i className="bi bi-check2"></i><span>Keeps track of costs automatically and gives detailed financial reports.</span></li>
                          <li><i className="bi bi-check2"></i><span>Helps with budgeting and planning your finances based on predictive insights. </span></li>
                          <li><i className="bi bi-check2"></i><span>Monitors compliance with changing regulations.</span></li>
                          <li><i className="bi bi-check2"></i><span>Makes audits easier by using AI to summarize financial info. </span></li>
                        </ul>
                      </div>
                      <div className='text-al'>
                        <a href="/products/microsoft-dynamics-365-finance/" className='links-new-1'>Learn More</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <div>
                        <img src="/img/chapter-02.png" alt="chapter-01" />
                        <h3>Dynamics 365 SCM</h3>
                        <ul>
                          <li><i className="bi bi-check2"></i><span>Helps with demand forecasting to optimize inventory levels.</span></li>
                          <li><i className="bi bi-check2"></i><span>Helps you work in tandem with vendors with real-time information. </span></li>
                          <li><i className="bi bi-check2"></i><span>Automates the creation of purchase orders and restocking alerts.</span></li>
                          <li><i className="bi bi-check2"></i><span>Reduces operational disruptions with predictive maintenance insights.</span></li>
                        </ul></div>
                      <div className='text-al'>
                        <a href="/products/dynamics-365-supply-chain-management/" className='links-new-1'>Learn More</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='slider-card-001'>
                      <div>
                        <img src="/img/chapter-06.png" alt="chapter-01" />
                        <h3>Dynamics 365 Commerce</h3>
                        <ul>
                          <li><i className="bi bi-check2"></i><span>Personalizes shopping experiences with AI-driven product recommendations.</span></li>
                          <li><i className="bi bi-check2"></i><span>Analyzes how customers act to make sales and marketing plans better.  </span></li>
                          <li><i className="bi bi-check2"></i><span>Automates order management and tracking.</span></li>
                          <li><i className="bi bi-check2"></i><span>Enhances in-store and online integration for unified commerce.</span></li>
                        </ul>
                      </div>
                      <div className='text-al'>
                        <a href="/products/microsoft-dynamics-365-commerce/" className='links-new-1'>Learn More</a>
                      </div>
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
                  <span>Key Features</span>
                  <h2>Enhancing Collaboration with Copilot</h2>
                  <p>Improved productivity is the outcome of better teamwork! Dynamics 365 Copilot helps you achieve that by connecting with tools like Microsoft Teams and Office 365 so that professionals can smoothly communicate and collaborate on existing and new projects.</p>
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
                    <h3>Integrated Workspaces</h3>
                    <p>It's built right into Microsoft Teams, which makes it easy for people to work together.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Document Automation</h3>
                    <p>Based on the data you give it, it writes reports, presentations, and letters.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Task Coordination</h3>
                    <p>Assigns and tracks team tasks with intelligent suggestions.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Meeting Summaries: </h3>
                    <p>Generates concise summaries of team meetings.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Knowledge Sharing</h3>
                    <p>Quickly retrieves documents and insights from organizational data.</p>
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
                  <span>Features</span>
                  <h2>Future-Ready with Dynamics 365 Copilot</h2>
                  <p>Microsoft Dynamics 365 Copilot keeps businesses future-ready by continuously evolving with new AI capabilities. Integrated with many business solutions within <a href="/products/microsoft-dynamics-365/">Dynamics 365 suite</a>, it gives you an edge over competition by making your process more efficient.</p>
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
            <div className='row g-3' style={{ paddingTop: "60px" }}>
              <div className='col-lg-4 d-flex'>
                <div className='card556'>
                  <div className='card-233-body'>
                    <h3>Always Learning</h3>
                  </div>
                  <p>Adapts based on what the user wants to do better.</p>

                </div>
              </div>
              <div className='col-lg-4 d-flex'>
                <div className='card556'>
                  <div className='card-233-body'>
                    <h3>Regular Updates</h3>
                  </div>
                  <p>Constant upgrades to features help ensure that the tools are always up to the minute. </p>

                </div>
              </div>
              <div className='col-lg-4 d-flex'>
                <div className='card556'>
                  <div className='card-233-body'>
                    <h3>Adaptability</h3>
                  </div>
                  <p>Expands as per the needs of the business and provides custom solutions.</p>

                </div>
              </div>
              <div className='col-lg-4 d-flex'>
                <div className='card556'>
                  <div className='card-233-body'>
                    <h3>Advanced Analytics: </h3>
                  </div>
                  <p>Uses statistical models to make more accurate forecasts.</p>

                </div>
              </div>
              <div className='col-lg-4 d-flex'>
                <div className='card556'>
                  <div className='card-233-body'>
                    <h3>Security First: </h3>
                  </div>
                  <p>Protects sensitive data with enterprise-grade security measures.</p>

                </div>
              </div>

            </div>
          </div>
        </section>


        <section style={{ overflow: 'hidden' }}>
          <div className="container">
            <div className="row justify-content-center p-realtive">
              <div className="col-lg-12">
                <div className="new-cta-one">
                  <div className="new-cta-one-body new-cta-one-body-padd">
                    <h2>Ready to tap into the potential of Dynamics 365 Copilot? </h2>
                    <p>Experience intelligent automation, enhanced decision-making, and seamless operations at your command!</p>
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-star">Know More!</a>
                  </div>
                </div>
                <div className='abs-pic abs-pic-n'>
                  <img src="/img/sahpe-2212-pic.png" alt="sahpe-2212-pic" />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ErpMicrosoftCloudFor;
