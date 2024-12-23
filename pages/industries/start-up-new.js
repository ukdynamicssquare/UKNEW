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
import FormNewUIndsustry from "../../components/FormNewUIndsustry";
const MicrosoftCloudForNonprofit = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        <title>Dynamics 365 for Retail Industry | Dynamics Square</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Discover how Dynamics Square enhances retail industry success with Dynamics 365, providing AI-driven omni-channel solutions for an exceptional retail experience."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-retail/"
        />

      </Head>


      <main>
        <section className="top-banner-new">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Dynamics 365 for Startup</h1>
                <h2>Get Started with Microsoft Solutions to Fuel Your Growth</h2>
                <p>Discover tools that grow with you, from day one to launch day</p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i>  Simplified Setup</li>
                  <li><i className="bi bi-check-circle-fill"></i>  real-time insights</li>
                  <li><i className="bi bi-check-circle-fill"></i>  flexibility for every growth</li>
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
                  <h2>Unify your Diverse Retail Business with Dynamics 365 for Retail </h2>
                  <p>Overcoming Startup Challenges with Microsoft ERP Solutions</p>
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
                  <h3>Limited Budget and Resources</h3>
                  <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it."</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>29% </span>of startups run out of cash before they can scale</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Limited Budget and Resources</h3>
                  <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it."</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>29% </span>of startups run out of cash before they can scale</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Limited Budget and Resources</h3>
                  <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it."</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>29% </span>of startups run out of cash before they can scale</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Limited Budget and Resources</h3>
                  <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it."</p>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <div className="card-21">
                  <h3><span>29% </span>of startups run out of cash before they can scale</h3>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-20">
                  <h3>Limited Budget and Resources</h3>
                  <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it."</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <div className="bnt-tras">
                <a href="">Read More</a>
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
                  <h2>Microsoft Business Central-
                    Your all-in-one solution for smarter business management</h2>
                </header>
              </div>
            </div>
            <div className="row d-none d-md-block">
              <div className="col-lg-12">
                <div className="chal-pic-banner">
                  <img src="/img/smart-busimess-mamangemt.png" alt="smart-busimess-mamangemt" />
                </div>
              </div>
            </div>
            <div className="row d-md-none">
              <div className="col-lg-12">
                <div className="card-233">
                  <div className="card-233-body">
                    <h3>Limited Budget and Resources</h3>
                    <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Limited Budget and Resources</h3>
                    <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Limited Budget and Resources</h3>
                    <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Limited Budget and Resources</h3>
                    <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it.</p>
                  </div>
                  <div className="card-233-body">
                    <h3>Limited Budget and Resources</h3>
                    <p>Get enterprise-level tools at startup-friendly prices. Avoid costly IT setups and pay only for what you need, when you need it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="new-cta-one">
                  <div className="new-cta-one-body">
                    <h2>You can <span>save upto 40%</span> on implementation and upgrade costs!</h2>
                    <a href="#exampleModal" data-bs-toggle="modal" className="btn-get-star">Want to know more?</a>
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
                  <h3>Fuel Your Startup’s Journey with the Right Tools. See How Dynamics Square Can Help</h3>

                  <div className="btn-welcome">
                    <Link href="/about-us/">
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

export default MicrosoftCloudForNonprofit;
