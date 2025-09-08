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
        <title>Dynamics 365 for Small Businesses UK</title>
        <meta
          name="description"
          content="Explore Dynamics 365 for small businesses! Boost efficiency, improve customer engagement, and streamline operations with Microsoft's powerful business solutions."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-for-small-businesses/"
        />

      </Head>


      <main>
        <section className="top-banner-new">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Dynamics 365 for Small Businesses</h1>
                <h2>Imagine, Achieve, and Thrive with Smart Business Solutions</h2>
                <p>Transform how your business runs with tools designed to streamline processes, scale efficiently, and fuel success.</p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i>  Accelerate your workflows</li>
                  <li><i className="bi bi-check-circle-fill"></i>  Optimize your spending</li>
                  <li><i className="bi bi-check-circle-fill"></i>  Make data-driven choices</li>
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
                  <h2>Are These Business Hurdles Depriving You of the Success You Deserve?</h2>
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
                  <h3>Managing Growth vs. Profitability</h3>
                  <p>Balancing expansion while keeping profitability intact can be daunting without the right tools.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>38% </span>of startups fail because of cash flow</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Disconnected Data and Compliance Woes</h3>
                  <p>Managing operations and compliance becomes needlessly hard when dealing with fragmented data and spreadsheets.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>82% </span>of organizations struggle with data integration</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Aligning Operations with Strategic Goals</h3>
                  <p>Turning big plans into actionable results is challenging without streamlined processes.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>40% </span>of productivity boost achieved through automation</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Budget and Resource Constraints</h3>
                  <p>Advanced tools often feel out of reach due to limited resources.</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>56% </span>of startups find compliance regulations challenging</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Scaling Operations Effectively</h3>
                  <p>Growth brings complexity; handle it with scalable solutions.</p>
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
                  <h2>Smarter Solutions for Growing Businesses</h2>
                  <p>For a small business, every decision counts! It can be hard to keep track of finances, customer relationships, and growth. <a href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</a> makes these things easier by giving you customised solutions that work in great tandem to facilitate smooth operations. This saves you time and helps you make intelligent choices. Get the tools you need to beat the competition and steer your business to achieve greatness. </p>
                </header>
              </div>
            </div>

            <div className="row g-2">
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="/products/dynamics-365-business-central/">
                    <p className='tags-strip'>
                      Core Recommendation
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/dynamics-365-businesscentral.svg" width={48} height={48} alt="businesscentral" />
                      <h3>Dynamics 365<br />
                        Business Central</h3>
                    </div>
                    <div className="card-body">
                      <p>Streamline operations, manage finances effectively, and integrate seamlessly with other Microsoft tools.</p>
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
                      <img src="/img/menu-icons/dynamics-365-sales.svg" width={48} height={48} alt="businesscentral" />
                      <h3>Dynamics 365<br />
                        Sales</h3>
                    </div>
                    <div className="card-body">
                      <p>Centralize customer data, track leads, and close deals faster with AI-driven insights and simplified quoting.</p>
                      <div className='cat-float'>
                        <span>Get Started</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 d-flex'>
                <div className="card-44">
                  <a href="#" style={{ pointerEvents: 'none' }}>
                    <p className='tags-strip'>
                      For Marketing Needs
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/Customer-Insights.png" width={48} height={48} alt="businesscentral" />
                      <h3>Dynamics 365<br />
                        Customer Insights</h3>
                    </div>
                    <div className="card-body">
                      <p>Discover patterns, predict behaviour, and create personalized customer journeys.</p>
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
                      To Extend ERP Functionality
                    </p>
                    <div className="card-head">
                      <img src="/img/menu-icons/power-pltform.png" width={48} height={48} alt="businesscentral" />
                      <h3>Microsoft <br />
                        Power Platform</h3>
                    </div>
                    <div className="card-body">
                      <p>Create custom apps, automate repetitive tasks, and visualize key metrics with real-time dashboards.</p>
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
            <div className="row d-none d-md-block">
              <div className="col-lg-12">
                <div className="chal-pic-banner">
                  <Image src="/img/group-35368.png" width={1305} height={313} alt="smart-busimess-mamangemt" />
                </div>
              </div>
            </div>
            <div className="row d-md-none">
              <div className="col-lg-12">
                <div className="card-233">
                  <div className="card-233-body">
                    <h3>Affordable Solutions, Powerful Returns</h3>
                    <p>Flexible plans designed to maximize value and deliver measurable returns.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Quick Setup, Easy to Use</h3>
                    <p>Intuitive interfaces get you up and running fast.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Be More Efficient with Automation</h3>
                    <p>Streamline workflows, minimize errors, and free up time for strategic priorities.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Centralized Insights</h3>
                    <p>Access all your data in one place to make better decisions faster.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Adapts as You Scale</h3>
                    <p>Features that evolve with your business needs, ensuring long-term adaptability.</p>
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
                    <h2>You can <span>save upto 40%</span> on implementation and upgrade costs!</h2>
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-star">See How It Works for Your Business?</a>
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
                    <Image
                      src="/img/case-studies-1.jpg"
                      alt="crm-trading"
                      width={850}
                      height={410}
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
                    <Image
                      src="/img/case-studies-2.jpg"
                      alt="case-studies-2.jpg"
                      width={850}
                      height={410}
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
                    <Image
                      src="/img/case-studies-3.jpg"
                      alt="timesco-logo"
                      width={850}
                      height={410}
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
                  <h3>Fuel Your Startup’s Journey with the Right Tools. See How Dynamics Square Can Help</h3>

                  <div className="btn-welcome">
                    <Link href="/contact-us/">
                      <a
                        className="btn-get-started scrollto"
                      >
                        <span>Find out our Approach</span>
                      </a>
                    </Link>
                    <p style={{ paddingTop: '20px' }}>With no-obligation Free Consultation</p>
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

        <section className="solution-faq faq solution-faq-r">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <div className="solution-new-banner-sub-head text-center">
                  <h2>Have you got
                    questions about <br/>Dynamics 365 for Small Businesses?</h2>
                  <p>Click through to our FAQ for the best answers!</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mar-top-7">
              <div className="col-md-8">
                <div className="accordion accordion-flush" id="faqlist1">
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >What is Dynamics 365, and why is it good for small businesses?</button>
                    </h3>
                    <div
                      id="faq-content-1"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        <p>Dynamics 365 is a cloud-based suite of business apps by Microsoft. It's scalable, affordable, and integrates with Microsoft 365. It is ideal for growing small businesses.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2"
                      >Which Dynamics 365 apps are best for small businesses?</button>
                    </h3>
                    <div
                      id="faq-content-2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        <p><b>Dynamics 365 Business Central</b> - for finance, inventory, and operations</p>
                        <p><b>Dynamics 365 Sales</b> - for managing leads and customer relationships</p>
                        <p><b>Customer Service</b> - for support and case management</p>
                        <p><b>Marketing</b> - for email campaigns and customer journeys</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-3"
                      >How much does Dynamics 365 cost for small businesses?</button>
                    </h3>
                    <div
                      id="faq-content-3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        <p>Sales Professional starts at around <b>£50.40user/month</b>, paid yearly, while Business Central</p>
                        <p>Essentials starts at around <b>£57.50/user/month</b>. Microsoft often offers bundled pricing or partner discounts for SMBs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-4"
                      >Can Dynamics 365 integrate with existing tools?</button>
                    </h3>
                    <div
                      id="faq-content-4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                        <p>Yes. It connects with Microsoft 365, Power Platform, and third-party tools like Shopify, QuickBooks, and Mailchimp.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-5"
                      >Is Dynamics 365 easy to implement?</button>
                    </h3>
                    <div
                      id="faq-content-5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div className="accordion-body">
                       <p>Yes. It offers cloud setup, partner support, and user-friendly tools, which are ideal for non-technical teams.</p>
                      </div>
                    </div>
                  </div>
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
