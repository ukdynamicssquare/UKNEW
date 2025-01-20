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
import FormNewUIndsustry from "../components/FormNewUIndsustry";

const MicrosoftCloudForNonpro = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 for Large Businesses UK</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Explore Dynamics 365 for small businesses! Boost efficiency, improve customer engagement, and streamline operations with Microsoft's powerful business solutions."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-for-large-businesses/"
        />

      </Head>


      <main>
        <section className="top-banner-new">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Dynamics 365 for Large Businesses</h1>
                <h2>Empower Your Enterprise to Lead on a Global Scale</h2>
                <p>Accelerate transformation with tools designed to keep your enterprise ahead in a rapidly evolving global market.</p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i>Accelerated product delivery</li>
                  <li><i className="bi bi-check-circle-fill"></i>Global operations alignment</li>
                  <li><i className="bi bi-check-circle-fill"></i>Unified customer engagement strategies</li>
                  <li><i className="bi bi-check-circle-fill"></i>Resilient and agile supply chains</li>
                  <li><i className="bi bi-check-circle-fill"></i>Advanced analytics for strategic decision-making</li>
                </ul>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 align-self-center">
                <div>
                  <FormNewUIndsustry />
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
                  <span>Challenges</span>
                  <h2>Big Dreams Throw Great Challenges. Here’s What Could Be Holding You Back: </h2>
                  {/* <p>Overcoming Startup Challenges with Microsoft ERP Solutions</p> */}
                </header>
              </div>
            </div>

            <div className="row g-5 ps-realtive">
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="dashed-border"></div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Scaling Without Compromise </h3>
                  <p>Expanding globally often creates challenges in maintaining operational consistency and efficiency. </p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>77% </span>of business leaders face rising costs when scaling operations</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Retaining and Developing Talent </h3>
                  <p>Innovative HR tactics and tools help make sure that employees are happy and loyal, which is important for building a strong workforce. </p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>46% </span>of leaders face workforce challenges, including talent shortages</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Surpassing Customer Expectations </h3>
                  <p>Meeting rising customer demands across multiple channels is vital for sustained loyalty and growth. </p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>80% </span>of consumers prioritize experience alongside products or services</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Innovation in the Face of Complexity </h3>
                  <p>Balancing operational requirements along with the need to introduce innovation can slow down progress and the ability to respond to market changes. </p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>53% </span>of executives face operational complexities in innovation</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Navigating Compliance Across Regions </h3>
                  <p>Adhering to diverse regulatory frameworks across borders requires robust tools to minimize risk and maintain trust. </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12 text-center">
              <div className="bnt-tras">
                <a href="">Read More</a>
              </div>
            </div> */}

          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two">
                  <span>Key Solution</span>
                  <h2>Grow and Thrive with Advanced Business Solutions</h2>
                  <p>Large enterprises must overcome intricate challenges, from managing diverse operations to delivering exceptional customer experiences. Microsoft Dynamics 365 offers enterprise-ready tools to optimize your workflows, foster collaboration, and meet business objectives with confidence. </p>
                </header>
              </div>
            </div>

            <div className="row g-2 mobie-scroll-small">
            <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/dynamics-365-supply-chain-management/">
                    <p className='tags-strip'>
                    Core Recommendation 
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="supplychainmanagement" width={48} height={48} />
                      <h3>Supply Chain <br/>
                      Management</h3>
                    </div>
                    <div className="card-body">
                      <p>Achieve end-to-end supply chain visibility and form strong supplier relationships with real-time insights. </p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
  
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/microsoft-dynamics-365-finance/">
                    <p className='tags-strip'>
                    For Operational Excellence 
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-finance.svg" alt="finance" width={48} height={48} />
                      <h3>Dynamics 365<br/>
                      Finance</h3>
                    </div>
                    <div className="card-body">
                      <p>Gain financial clarity and automate processes to drive better decisions and ensure compliance. </p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/microsoft-dynamics-365-customer-service/">
                    <p className='tags-strip'>
                    For Great Customer Experiences
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-customer-service.svg" alt="dynamics-365-customer-service" width={48} height={48} />
                      <h3>Dynamics 365 <br/>
                      Customer Service</h3>
                    </div>
                    <div className="card-body">
                      <p>Deliver seamless support across channels with AI-enhanced service and case resolution. </p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/microsoft-dynamics-365-field-service/">
                    <p className='tags-strip'>
                    Dynamics 365 Field Service 
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-fieldservice.svg" alt="dynamics-365-fieldservice"  width={48} height={48} />
                      <h3>Dynamics 365  <br/>
                      Field Service </h3>
                    </div>
                    <div className="card-body">
                      <p>Enhance field operations with precise scheduling and live updates to exceed customer expectations. </p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="#" style={{pointerEvents:'none'}}>
                    <p className='tags-strip'>
                    For Seamless Operations 
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/Customer-Insights.png" alt="customer_insights" width={48} height={48} />
                      <h3>Dynamics 365  <br/>
                      Electronic Invoicing </h3>
                    </div>
                    <div className="card-body">
                      <p>Gain actionable customer insights to drive engagement and loyalty.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="#" style={{pointerEvents:'none'}}>
                    <p className='tags-strip'>
                    Remote Assist 
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/Customer-Insights.png" alt="customer_insights" width={48} height={48} />
                      <h3>Dynamics 365  <br/>
                      Remote Assist  </h3>
                    </div>
                    <div className="card-body">
                      <p>Helps empower remote teams with real-time collaboration tools for faster problem-solving. </p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="#" style={{pointerEvents:'none'}}>
                    <p className='tags-strip'>
                    For Data-Driven Insights
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/Customer-Insights.png" alt="customer_insights" width={48} height={48} />
                      <h3>Dynamics 365  <br/>
                      Customer Insights</h3>
                    </div>
                    <div className="card-body">
                      <p>Gain actionable customer insights to drive engagement and loyalty.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>


              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/microsoft-power-platform/">
                    <p className='tags-strip'>
                    For Productivity Boost
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/power-pltform.png" alt="power-apps" width={48} height={48} />
                      <h3>Microsoft <br/>
                      Power Platform</h3>
                    </div>
                    <div className="card-body">
                      <p>Design custom apps, automate workflows, and visualize data to streamline complex tasks. </p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
             
             
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="#" style={{pointerEvents:'none'}}>
                    <p className='tags-strip'>
                    AI-Powered Assistance
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/copilate-small.png" alt="copilate" width={48} height={48} />
                      <h3>Microsoft  <br/>
                      Copilot</h3>
                    </div>
                    <div className="card-body">
                      <p>AI-driven tools for Sales and Service to streamline workflows and boost efficiency.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="#" style={{pointerEvents:'none'}}> 
                    <p className='tags-strip'>
                    For Risk Management 
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/fraud-protection.png" alt="fraud-protection" width={48} height={48} />
                      <h3>Dynamics 365   <br/>
                      Fraud Protection</h3>
                    </div>
                    <div className="card-body">
                      <p>Safeguard your business with advanced fraud detection and prevention capabilities.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
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
                  <h2>Why Choose Dynamics 365?</h2>
                </header>
              </div>
            </div>
            {/* <div className="row d-none d-md-block">
              <div className="col-lg-12">
                <div className="chal-pic-banner">
                  <img src="/img/group-35368.png" alt="smart-busimess-mamangemt" />
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card-234">
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Seamless Global Growth </h3>
                    <p>As your business grows, you can use tools that help it run internationally while still being relevant locally. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Workforce Empowerment </h3>
                    <p>Foster a motivated workforce with intuitive tools for HR management and employee development. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Customer-Centered Innovation </h3>
                    <p>Keep customers at the forefront by delivering tailored solutions and experiences. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Enhanced Financial Oversight </h3>
                    <p>Simplify complex financial processes with automated insights and comprehensive reporting. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Agile Supply Chain Management </h3>
                    <p>Adapt quickly to changes with supply chain tools designed for resilience and responsiveness. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Real-Time Insights </h3>
                    <p>Use advanced analytics to guide decisions and stay ahead of market demands. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Simplified Compliance </h3>
                    <p>Stay up to date with global regulations using integrated compliance tools. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Unified Customer Engagement </h3>
                    <p>Build trust and loyalty through consistent, multi-channel customer experiences. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Flexible and Scalable Solutions </h3>
                    <p>Tailor Dynamics 365 to meet your unique needs and expand capabilities as your business grows. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Built-In Fraud Detection </h3>
                    <p>Reduce the risks by using strong tools to stop scams and keep your business safe. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Automation That Works </h3>
                    <p>Free up resources by automating time-intensive processes across departments. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Collaborative Excellence </h3>
                    <p>Break down silos and enable teams to work together more effectively with centralized solutions. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Smarter Business Growth </h3>
                    <p>Track performance metrics and KPIs to make informed decisions and stay on target. </p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Tools for Global Success </h3>
                    <p>Operate seamlessly across international borders with adaptable, localized solutions.</p>
                  </div>
              
                 
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
                    <h2><span>Save 40% </span> on deployment and upgrade costs!</h2>
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-star">See how this can make a real difference for your business and take it to the next level</a>
                  </div>
                </div>
                {/* <div className='abs-pic'>
                  <img src="/img/sahpe-2212-pic.png" alt="sahpe-2212-pic" />
                </div> */}
              </div>

            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two">
                  <span>Use Cases</span>
                  <h2>See how our customers drive impact</h2>
                </header>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-12'>
                <div className='test-slider-tab-list'>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={30}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <Image src="/img/Arteak-new-logo.png" alt='Arteak-new-logo' width={241} height={78} />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className='thum-tab'>
                        <Image src="/img/parweld-new-logo.png" alt='parweld-new-logo' width={223} height={78} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <Image src="/img/green-wireless-logo.png" alt='green-wireless-logo' width={163} height={72} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <Image src="/img/timesco-logo.png" alt='timesco-logo' width={191} height={40} />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <Image src="/img/omicron_engineering_blur.png" alt='omicron_engineering_blur' width={180} height={41} />
                      </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/Comxo-new-logo.png" alt='tbalist' />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='thum-tab'>
                        <img src="/img/Md-new-logo.png" alt='tbalist' />
                      </div>
                    </SwiperSlide> */}
                  </Swiper>
                </div>

                <div className='test-slider-contant'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#736799',
                      '--swiper-pagination-color': '#736799',
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className='row pd-20'>
                        <div className='col-lg-7 d-flex'>
                          <div className='test-s-info'>
                            <figure>
                              <Image src="/img/testimonials/Terence-Turner.png" alt="erence-Turner" width={84} height={84} />
                              <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                              <h5>Terence Turner</h5>
                              <span>General Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Precision in <br />Financial Analytics</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              80%
                            </div>
                            <div className='r-left'>
                              <p>Productivity Boost <br /> from Automation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row pd-20'>
                        <div className='col-lg-7 d-flex'>
                          <div className='test-s-info'>
                            <figure>
                              <Image src="/img/testimonials/Jonathan-W.png" alt="Jonathan-W" width={84} height={84} />
                              <p>We have worked with Dynamics Square since 2019. Our working relationship has built during this period, and we have found them to be very professional</p>
                              <h5>Jonathan W</h5>
                              <span>Technical Director</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              3X
                            </div>
                            <div className='r-left'>
                              <p>Growth in ROI</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              70%
                            </div>
                            <div className='r-left'>
                              <p>Improved <br />Finance Efficiency </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row pd-20'>
                        <div className='col-lg-7 d-flex'>
                          <div className='test-s-info'>
                            <figure>
                              <Image src="/img/avatar.png" alt="avatar" width={84} height={84} />
                              <p>Kudos to Dynamics Square for seamless implementation support.Their dedication made us confident in a successful launch!</p>
                              <h5>Andy Bird</h5>
                              <span>Managing Director</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Optimized <br />Replenishment Procedures</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              60%
                            </div>
                            <div className='r-left'>
                              <p>Operational <br />Efficiency Surge</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row pd-20'>
                        <div className='col-lg-7 d-flex'>
                          <div className='test-s-info'>
                            <figure>
                              <Image src="/img/avatar.png" alt="avatar" width={84} height={84} />
                              <p>Dynamics Square has been a solid partner for 4 years, skillfully upgrading us from NAV2018 to Business Central. They offer great value and professionalism.</p>
                              <h5>Mark Shaxted</h5>
                              <span>Operations Manager</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Growth in <br />Production Capacity</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              70%
                            </div>
                            <div className='r-left'>
                              <p>Increase <br />in ROI </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='row pd-20'>
                        <div className='col-lg-7 d-flex'>
                          <div className='test-s-info'>
                            <figure>
                              <Image src="/img/avatar.png" alt="avatar" width={84} height={84} />
                              <p>Impressed by Dynamics Square's ERP upgrade & customization. Their virtual collaboration made our transition seamless. Highly recommend for business growth.</p>
                              <h5>Tristan Cliffe</h5>
                              <span>Director</span>
                            </figure>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              2X
                            </div>
                            <div className='r-left'>
                              <p>Improved Deliverable <br />Timeliness</p>
                            </div>
                          </div>
                          <div className='test-inf-achive'>
                            <div className='f-left'>
                              95%
                            </div>
                            <div className='r-left'>
                              <p>Enhanced Client<br />Understanding</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>


                  </Swiper>
                </div>
              </div>


            </div>

          </div>
        </section>


        <section>
          <div className='container'>
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <header className="section-header-two">
                  <h2>Check out some of our <br />case studies</h2>
                </header>
              </div>
            </div>
            <div className='row'>
              <div className="col-lg-4 d-flex">
                <div className="commen-box-2 commen-box-9">
                  <div className="icons icons-0102">
                    <img
                      src="/img/case-studies-1.jpg"
                      alt="crm-trading"
                    />
                  </div>
                  <div className="commen-boc-2-info">
                    <p>
                      UK's top personal care brand boosted operational efficiency up to 4X by upgrading from Dynamics NAV 2009 to Dynamics NAV 2018.
                    </p>
                  </div>
                  <div className="btn-003">
                    <a
                      href="/case-studies/nav09-nav18-upgrade/"
                      className="btn btn md btn-danger"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="commen-box-2 commen-box-9">
                  <div className="icons icons-0102">
                    <img
                      src="/img/case-studies-2.jpg"
                      alt="case-studies-2.jpg"
                    />
                  </div>
                  <div className="commen-boc-2-info">
                    <p>
                      UK's top sexual wellness brand improved productivity by up to 68% by upgrading to Business Central On-premise from Dynamics NAV.
                    </p>
                  </div>
                  <div className="btn-003">
                    <a
                      href="/case-studies/nav09-to-business-central-upgrade/"
                      className="btn btn md btn-danger"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-flex">
                <div className="commen-box-2 commen-box-9">
                  <div className="icons icons-0102">
                    <img
                      src="/img/case-studies-3.jpg"
                      alt="timesco-logo"
                    />
                  </div>
                  <div className="commen-boc-2-info">
                    <p>
                      A medical instrument supplier and manufacturer doubled revenue and improved production capacity by upgrading to Business Central Online from Dynamics NAV.
                    </p>
                  </div>
                  <div className="btn-003">
                    <a
                      href="/case-studies/nav13R2-to-business-central/ "
                      className="btn btn md btn-danger"
                    >
                      Read Case Study
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 text-center">
                <div className="bnt-tras">
                  <a href="/case-studies/">Read more success stories</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="achive-sec achive-sec-new">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="achive-left achive-left-new text-center">
                  <h3>Let’s Move Your Business Forward</h3>

                  <div className="btn-welcome">
                    <Link href="/contact-us/">
                      <a
                        className="btn-get-started scrollto"
                      >
                        <span>Get Started Today!</span>
                      </a>
                    </Link>
                    <p style={{ paddingTop: '20px' }}>Ready to simplify complexities, connect globally, and elevate customer experiences?</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div class="section-title">
                  <span class="line"></span>
                  <h3>About Dynamics Square</h3>
                  <span class="line"></span>
                </div>
              </div>
            </div>
            <div className="row world-achive world-achive-center">
              <div className="col-lg-4">
                <div className="w-achive-l">
                  <figure>
                    <Image src="/img/group.png" alt="group" width={98} height={98} />
                  </figure>
                </div>
                <div className="w-achive-b">
                  <h4>350+</h4>
                  <p><span>Project Succesess</span>Over 350 projects delivered & counting! Join our journey to success.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="w-achive-l">
                  <figure>
                    <Image src="/img/manage_accounts.png" alt="manage_accounts" width={98} height={98} />
                  </figure>
                </div>
                <div className="w-achive-b">
                  <h4>150+</h4>
                  <p><span>Microsoft Certified Consultant
                  </span>Proactive & dedicated Microsoft experts at your service.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="w-achive-l">
                  <figure>
                    <Image src="/img/schedule.png" alt="schedule" width={98} height={98} />
                  </figure>
                </div>
                <div className="w-achive-b">
                  <h4>24/<span>7</span></h4>
                  <p><span>Dedicated Support</span>Get help anytime with our full range of services</p>
                </div>
              </div>
            </div>
          </div>
        </section>




      </main>
    </>
  );
};

export default MicrosoftCloudForNonpro;
