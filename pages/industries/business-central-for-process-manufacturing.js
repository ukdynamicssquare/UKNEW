import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";
import Blog from "../../components/Blog";
const Manufacturing = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Microsoft Business Central for Process Manufacturing | Dynamics Square</title>
        <meta
          name="description"
          content="Optimise your process manufacturing with Business Central. Streamline production, manage resources, and ensure quality with an integrated, scalable ERP solution."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/business-central-for-process-manufacturing/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/industries/business-central-for-process-manufacturing/" />
        <meta property="og:title" content="Microsoft Business Central for Process Manufacturing | Dynamics Square" />
        <meta property="og:description" content="Optimise your process manufacturing with Business Central. Streamline production, manage resources, and ensure quality with an integrated, scalable ERP solution." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/BC-Process-Manufacturing.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/industries/business-central-for-process-manufacturing/" />
        <meta property="twitter:title" content="Microsoft Business Central for Process Manufacturing | Dynamics Square" />
        <meta property="twitter:description" content="Optimise your process manufacturing with Business Central. Streamline production, manage resources, and ensure quality with an integrated, scalable ERP solution." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/BC-Process-Manufacturing.png" />
      </Head>
  
      <main>
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>Process Manufacturing in Business Central </h1>
                <p>Streamlines operational processes, manages costs, maintains the utmost product quality, and performs accurate sequence planning with Process Manufacturing in Business Central. </p>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get in Touch</span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image
                  src="/img/BC-Process-Manufacturing.png"
                  alt="Microsoft Cloud For Manufacturing"
                  width={665}
                  height={447}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>What is Process Manufacturing?</h2>
              <p>Imagine manufacturing a product with the right amount of ingredients in the right quantity to produce a perfect product. This is how process manufacturing works. It takes different raw materials in different quantities to produce a useful product. You can relate the process of manufacturing to the process of baking a cake. However, the production quantity in process manufacturing is limitless, and businesses have to follow a systematic strategy to control the quality of different processes. Like managing inventory of raw and finished products, maintaining the right quantity of materials for different operations, and tracking the entire production line in real-time. </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>How Business Central is perfect for Process Manufacturing?</h2>
                <p>Process manufacturing includes numerous processes, from collecting raw materials to storing the inventory at the right place. Such processes and complications cannot be managed manually. Such businesses need an advanced Microsoft ERP solution, like Business Central, that can streamline different operations while eliminating system complexities. It eradicates the different challenges of modern technology and innovation to achieve great profitability and business efficiency. </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Business Central ERP for manufacturing industries allows businesses to manage, store, and utilise complex process formulas through digital means while maintaining complete data privacy. </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p><a href="/blog/business-central-for-manufacturing/" target="_blank" >Business Central for Manufacturing</a> comes with a real-time inventory management system to help you track BOM (bill of materials) and product demand forecasting. Also, you can get live insights to eliminate any chances of overstocking and stock depletion. </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Simplify production by leveraging different capabilities of Dynamics 365 BC, like scheduling, production planning, resource allocation, and progressive tracking of product quality. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="image" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>Talk to Process Manufacturing Experts! </h3>
                  <p>Explore the endless growth opportunities of leveraging Business Central in any manufacturing industry to achieve sustainable goals. </p>
                  <div className="m-o-t m-o-t-inde">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Explore Now! </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry_service_bottoms">
          <div className="container">
            <header className="section-header">
              <h2>Process Manufacturing in Business Central: <br />Top Industry-oriented Features </h2>
            </header>
            <div className="row position-relative">
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/BOM-with-Multi-Level-Consumption.png"
                      alt="BOM-with-Multi-Level-Consumption"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>BOM with Multi-Level Consumption </h3>
                    <p>Track the actual consumption of raw materials for each milestone of the production process. It will ensure accurate consumption and let you calculate the precise cost of a product calculating different parameters.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Production-Order-Management.png"
                      alt="Production-Order-Management"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Production Order Management</h3>
                    <p>Manage the entire production cycle, following diverse quality parameters to ensure optimum product quality until the final stage of the manufacturing process. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Work-in-Progress-Tracking.png"
                      alt="Work-in-Progress-Tracking"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Work in Progress Tracking</h3>
                    <p>Track the WIP inventory with real-time data insights to lower the overall cost and supercharge production. You can track the inventory by utilising data on different parameters, including product location, stage of manufacturing, and quality. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Finite-Scheduling.png"
                      alt="Finite-Scheduling"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Finite Scheduling</h3>
                    <p>Schedule the production process, setting up different parameters for a streamlined process. Set up the scheduling based on machine efficiency and the availability of resources while optimising production efficiency. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Batch-and-Lot-Management.png"
                      alt="Batch-and-Lot-Management"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Batch and Lot Management</h3>
                    <p>Manage and track production batches throughout the manufacturing process. It will enable you to trace the exact location of the product while collecting details of the product for future use. </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Formula-and-Production-Analysis.png"
                      alt="Formula-and-Production-Analysis"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Formula and Production Analysis</h3>
                    <p>Track the difference between the amount of planned and actual resource utilisation for different processes. This will help you find the top areas for improvement while optimising the production quality.</p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Industry-Specific-Reporting.png"
                      alt="Industry-Specific-Reporting"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Industry Specific Reporting</h3>
                    <p>Build reports using pre-built templates in Business Central using data reporting and analysis capabilities. Also, you can <a href="/blog/business-central-with-power-platform-integration/" target="_blank" >integrate Power BI with Business Central</a> to build advanced reports based on numerous parameters. </p>
                  </div>
                </div>

                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img text-center">
                    <img
                      src="/img/Integration-with-D365-Solutions.png"
                      alt="Integration-with-D365-Solutions"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="card_new_content">
                    <h3>Integration with D365 Solutions</h3>
                    <p>Integrate Business Central with any solution available under the Microsoft Dynamics 365 ecosystem using Business Central extension technology. You can integrate <a href="/products/dynamics-365-supply-chain-management/" target="_blank" rel="noopener noreferrer">Dynamics 365 Supply Chain Management</a> to manage raw materials and optimise inventory.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <Image
                      src="/img/BC-Process-Manufacturing-side.png"
                      className="BC-Process-Manufacturing-side"
                      alt="manufacturing side"
                      width={423}
                      height={464}
                    />
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>Business Central for Manufacturing – Is it Customizable? </h2>
                  <p><a href="/products/dynamics-365-business-central/" target="_blank">Microsoft Business Central</a> is a powerful yet flexible Microsoft solution that can be personalised to meet unique business needs. With its cloud capabilities and AI-integrated system, you can modify Business Central to meet the specific needs of your business.</p>
                  <p>It empowers you to tailor the entire production process, set up automation to boost productivity, promote collaboration for a centralised approach, and integrate different solutions to meet uniqueness.</p>
                  <div className="text-lg-start mm-t">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Contact a Manufacturing Expert! </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>Simplify Production and Boost Efficiency with Business Central </h3>
                  <p>Before going forward with Microsoft Business Central ERP implementation, you need to go for a Business Central free trial so that you can understand its capabilities and decide whether this solution suits you or not. </p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Book a Free Business Central Demo </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h2>Explore Other Industries</h2>
            </header>
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
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
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
                            <Link href="/industries/food-and-beverages/">
                              <a><div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt="Food-and-beverage"
                                />
                              </div>
                                <div className="text-wrp-content">
                                  <h3>Food & Beverages</h3>
                                  <p>
                                    Efficiently manage your inventory and supply
                                    chain by implementing Dynamics 365 for Food
                                    and Beverages business.
                                  </p>
                                  <span>Explore Now</span>
                                </div></a>
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-nonprofit/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/NotforProfit.svg"
                                    alt="NotforProfit"
                                  />
                                </div>
                                  <div className="text-wrp-content">
                                    <h3>Not for Profit</h3>
                                    <p>
                                      Bring Transparency And Drive Efficiency In
                                      Your Non-Profit Organization With Microsoft
                                      Dynamics 365 For Charities.
                                    </p>
                                    <span>Explore Now</span>
                                  </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                  />
                                </div>
                                  <div className="text-wrp-content">
                                    <h3>E-Commerce</h3>
                                    <p>
                                      Optimize Your End-To-End Ecommerce Processes
                                      And Improve Your Customer Experience.
                                    </p>
                                    <span>Explore Now</span>
                                  </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/professional-services/">
                                <a><div className="img-wrp">
                                  <img
                                    src="/img/proffesional-service.svg"
                                    alt="proffesional-service"
                                  />
                                </div>
                                  <div className="text-wrp-content">
                                    <h3>Professional Services</h3>
                                    <p>
                                      Streamline And Efficiently Manage Your
                                      Professional Services with Microsoft
                                      Dynamics 365 Business Applications.
                                    </p>
                                    <span>Explore Now</span>
                                  </div></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/startups/">
                                <a><div className="img-wrp">
                                  <img src="/img/start-up.svg" alt="start-up" />
                                </div>
                                  <div className="text-wrp-content">
                                    <h3>Startups</h3>
                                    <p>
                                      Leverage maximum possible resources to
                                      manage end-to-end business processes for
                                      your Startup with Microsoft Dynamics 365.
                                    </p>
                                    <span>Explore Now</span>
                                  </div></a>
                              </Link>
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
        

        <section className="blogs-extra">
          <div className="container">
            <header className="section-header">
              <h2>Explore Our Recent Blogs & Resources</h2>
            </header>
            <div className="row top-2 gx-5 justify-content-center">
              <Blog />
              {/* <div className="col-lg-6 align-self-center">
                <Image src="/img/n/Cloud-For-Manufacturing-banner.png" alt="pic" width={640} height={366} priority={true} />
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Manufacturing;
