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
        <title>Dynamics 365 for Medium Businesses | Dynamics Square UK</title>
        <meta
          name="description"
          content="Unlock growth with Dynamics 365 for Medium Businesses—streamline operations, boost productivity, and drive smarter decisions with powerful ERP & CRM tools."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-for-medium-businesses/"
        />

      </Head>


      <main>
        <section className="top-banner-new">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Dynamics 365 for Medium Businesses</h1>
                <h2>Take Your Business Global with Confidence and Clarity</h2>
                <p>Expand without limits! Gain the confidence to succeed in a connected global market.</p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i>Faster time-to-market</li>
                  <li><i className="bi bi-check-circle-fill"></i>Global reach</li>
                  <li><i className="bi bi-check-circle-fill"></i>Omnichannel customer engagements</li>
                  <li><i className="bi bi-check-circle-fill"></i>Optimized supply chain</li>
                  <li><i className="bi bi-check-circle-fill"></i>AI-powered insights</li>
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
                  <h2>Medium-Sized Business, Big Challenges? Here’s What Might Be Slowing You Down:</h2>
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
                  <h3>Managing growth effectively</h3>
                  <p>Balancing growth with stability can be tough, but with the right tools, it becomes achievable.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>74% </span>of business leaders report rising costs hinder growth</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Recruiting and retaining skilled employees</h3>
                  <p>Hiring and keeping the best talent requires effort and strategy, but it’s key to success.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>46% </span>of medium business leaders face labor shortages</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Attracting customers and retaining them</h3>
                  <p>Finding and keeping happy customers is challenging, but their loyalty is what drives your business.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>22% </span>of small businesses fail due to low demand</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Developing new products or innovation</h3>
                  <p>Innovation can feel overwhelming, but it’s the lifeblood that keeps your business ahead of the competition.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>77% </span>of mid-sized firms find advanced business solutions expensive</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Limited access to advanced solutions</h3>
                  <p>Limited resources shouldn’t limit your potential; affordable, powerful solutions can level the playing field.</p>
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
                  <p>Medium-sized businesses often face growing pains—managing expanding teams, supply chains, and customer expectations. <a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</a> empowers you to scale confidently, offering real-time insights, automation, and enhanced collaboration. It’s the perfect partner to refine processes and support your ambitions. Focus on what you do best while we help you operate smarter and grow faster.</p>
                </header>
              </div>
            </div>

            <div className="row g-2 mobie-scroll-small">
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/dynamics-365-business-central/">
                    <p className='tags-strip'>
                      Core Recommendation
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="businesscentral" width={48} height={48} />
                      <h3>Dynamics 365<br/>
                        Business Central</h3>
                    </div>
                    <div className="card-body">
                      <p>Streamlines processes, makes financial management better, and works in tandem with Microsoft tools.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/microsoft-dynamics-365-sales/">
                    <p className='tags-strip'>
                    For CRM Needs
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-sales.svg" alt="dynamics-365-salesl" width={48} height={48} />
                      <h3>Dynamics 365<br/>
                      Sales</h3>
                    </div>
                    <div className="card-body">
                      <p>Facilitates centralized customer data, AI-driven insights, lead tracking, and simplified quoting processes.</p>
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
                    For Financial Precision
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-finance.svg" alt="finance" width={48} height={48} />
                      <h3>Dynamics 365<br/>
                      Finance</h3>
                    </div>
                    <div className="card-body">
                      <p>Automate accounting, improve financial visibility, and ensure compliance with ease.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/dynamics-365-supply-chain-management/">
                    <p className='tags-strip'>
                    Production & Supply Chain
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="supplychainmanagement" width={48} height={48} />
                      <h3>Supply Chain <br/>
                      Management</h3>
                    </div>
                    <div className="card-body">
                      <p>Reimagine operations with demand forecasting, supplier management, and real-time supply chain analytics.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/dynamics-365-human-resources/">
                    <p className='tags-strip'>
                    For Workforce Empowerment
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-HRM.svg" alt="supplychainmanagement" width={48} height={48} />
                      <h3>Dynamics 365  <br/>
                      Human Resources</h3>
                    </div>
                    <div className="card-body">
                      <p>Enhance employee experience, simplify HR processes, and improve workforce productivity.</p>
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
                    For Customer Excellence
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-customer-service.svg" alt="dynamics-365-customer-service" width={48} height={48} />
                      <h3>Dynamics 365 <br/>
                      Customer Service</h3>
                    </div>
                    <div className="card-body">
                      <p>Deliver exceptional support with AI insights, omnichannel engagement, and seamless case management.</p>
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
                    For Field Operations
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-fieldservice.svg" alt="dynamics-365-fieldservice"  width={48} height={48} />
                      <h3>Dynamics 365  <br/>
                      Field Service </h3>
                    </div>
                    <div className="card-body">
                      <p>Improve on-site service delivery with intelligent scheduling and real-time updates.</p>
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
                      <p>Build custom apps, automate tasks, and generate real-time dashboards to improve workflows.</p>
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
                    Security & Fraud Prevention
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
                    <h3><span><i className="bi bi-check2"></i></span>Streamlined Growth Management</h3>
                    <p>Effortlessly manage business expansion with integrated solutions that ensure smooth scaling and profitability.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Talent Empowerment and Retention</h3>
                    <p>Improve employee experience, streamline HR processes, and retain top talent to support long-term growth.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Customer-Centric Innovation</h3>
                    <p>Easily innovate and improve your products or services based on deep customer insights and AI-driven analytics.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Simplified Financial Management</h3>
                    <p>Gain full financial control with automated accounting, accurate forecasting, and real-time budget visibility.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Optimized Supply Chain Visibility</h3>
                    <p>Address supply chain challenges with real-time insights, accurate demand forecasting, and stronger supplier relationships.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Data-Driven Decisions at Your Fingertips</h3>
                    <p>Leverage AI-powered insights to make informed decisions, predict trends, and unlock new growth opportunities.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Effortless Regulatory Compliance</h3>
                    <p>Simplify compliance with built-in tools that keep you up-to-date with the latest regulations and requirements.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Omnichannel Engagement Made Simple</h3>
                    <p>Engage customers across all touchpoints with a seamless experience that increases satisfaction and loyalty.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Agile and Flexible Solutions</h3>
                    <p>Adapt easily to changing market demands and evolving business needs with scalable and customizable features.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Global Expansion with Local Adaptability</h3>
                    <p>Take your business globally without losing the local touch; kudos to tools that ensure smooth international operations.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Increased Efficiency with Automation</h3>
                    <p>Reduce manual work and streamline operations by automating key tasks, freeing up resources for innovation.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Centralized Collaboration</h3>
                    <p>Foster teamwork across departments with centralized tools that connect your entire workforce in real-time.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Real-Time Analytics for Smarter Growth</h3>
                    <p>Make confident decisions with access to real-time dashboards, tracking KPIs, and performance metrics.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Customizable to Fit Your Business</h3>
                    <p>Tailor the platform to your unique workflows, ensuring the solution adapts to your specific business needs.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Integrated Fraud Protection</h3>
                    <p>Protect your business from fraud with advanced detection tools that ensure a secure operating environment.</p>
                  </div>
                  <div className="card-233-body">
                    <h3><span><i className="bi bi-check2"></i></span>Cost-Effective and Scalable Solutions</h3>
                    <p>Enjoy significant cost savings with a solution that grows with your business, adapting to new challenges.</p>
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
                    <h2>You can <span>save upto 40%</span> on deployment and upgrade costs!</h2>
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-star">See how it addresses your business challenges and accelerates growth</a>
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
                  <h3>Time to Take Your Medium Business Up A Notch with the Right Tools</h3>

                  <div className="btn-welcome">
                    <Link href="/contact-us/">
                      <a
                        className="btn-get-started scrollto"
                      >
                        <span>Get Started Today!</span>
                      </a>
                    </Link>
                    <p style={{ paddingTop: '20px' }}>See How Dynamics Square Can Help!</p>
                  </div>
                </div>
              </div>

            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className="section-title">
                  <span className="line"></span>
                  <h3>About Dynamics Square</h3>
                  <span className="line"></span>
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
