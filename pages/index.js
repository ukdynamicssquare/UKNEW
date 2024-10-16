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
import ExpandableCard from '../components/ExpandableCard';


export default function Home() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Head>
        <title>Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™</title>
        <meta
          name="description"
          content="As a leading Microsoft Dynamics 365 Partner in the UK, our experts help businesses achieve desired results with the implementation of Dynamics 365 apps such as Business Central, NAV, AX, and Power BI. Contact us Today!"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/" />
        <meta property="og:title" content="Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™" />
        <meta property="og:description" content="Dynamics Square is UK's leading Gold Microsoft Dynamics 365 Partner helping businesses to achieve desired results with Dynamics 365 apps and services." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/" />
        <meta property="twitter:title" content="Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™" />
        <meta property="twitter:description" content="Dynamics Square is UK's leading Gold Microsoft Dynamics 365 Partner helping businesses to achieve desired results with Dynamics 365 apps and services." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.dynamicssquare.co.uk/#organization",
                  name: "Dynamics Square",
                  url: "https://www.dynamicssquare.co.uk/",
                  sameAs: [
                    "https://www.facebook.com/dynamicssquareuk/",
                    "https://twitter.com/dsquare_uk",
                    "https://www.linkedin.com/showcase/dynamics-square-uk/",
                    "https://www.youtube.com/c/DynamicsSquare",
                  ],
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.dynamicssquare.co.uk/#logo",
                    inLanguage: "en-GB",
                    url: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    contentUrl:
                      "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                    width: "1024",
                    height: "1024",
                    caption: "Dynamics Square UK",
                  },
                  image: { "@id": "https://www.dynamicssquare.co.uk/#logo" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.dynamicssquare.co.uk/#website",
                  url: "https://www.dynamicssquare.co.uk/",
                  name: "Trusted Microsoft Dynamics 365 Partner UK | Business Central Partner - Dynamics Square™",
                  description:
                    "Dynamics Square is UK's leading Microsoft Dynamics 365 Partner. We help businesses implement Microsoft Dynamics 365 solutions. Contact us to know more.",
                  publisher: {
                    "@id": "https://www.dynamicssquare.co.uk/#organization",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate:
                          "https://www.dynamicssquare.co.uk/?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                  inLanguage: "en-GB",
                },
                {
                  "@type": "ImageObject",
                  "@id": "https://www.dynamicssquare.co.uk/#primaryimage",
                  inLanguage: "en-GB",
                  url: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  contentUrl:
                    "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
                  width: 1561,
                  height: 667,
                  caption: "dynamicssquare",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.dynamicssquare.co.uk/#webpage",
                  url: "https://www.dynamicssquare.co.uk/",
                  name: "Dedicated Dynamics 365 CRM and ERP Partner for UK Region | Dynamics Square UK",
                  isPartOf: {
                    "@id": "https://www.dynamicssquare.co.uk/#website",
                  },
                  about: {
                    "@id": "https://www.dynamicssquare.co.uk/#organization",
                  },
                  primaryImageOfPage: {
                    "@id": "https://www.dynamicssquare.co.uk/#primaryimage",
                  },
                  datePublished: "2021-08-31T06:09:16+00:00",
                  dateModified: "2021-11-07T09:15:37+00:00",
                  description:
                    "Dynamics Square is Dynamics 365 partner in the UK who help your business succeed by deploying the finest CRM, ERP, and Microsoft cloud solutions for your unique needs.",
                  breadcrumb: {
                    "@id": "https://www.dynamicssquare.co.uk/#breadcrumb",
                  },
                  inLanguage: "en-US",
                  potentialAction: [
                    {
                      "@type": "ReadAction",
                      target: ["https://www.dynamicssquare.co.uk/"],
                    },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.dynamicssquare.co.uk/#breadcrumb",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home" },
                  ],
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Dynamics Square UK Ltd.",
              description:
                "We assist your company business in scaling up by giving unbiased advise on the best Microsoft ERP and CRM solutions.",
              image:
                "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              alternateName:
                "Dynamics Square software company in London, United Kingdom",
              telephone: "+44-207-193-2502, +44-747-927-3380",
              email: "info@dynamicssquare.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kemp House, 152-160 City Road",
                addressLocality:
                  "Kemp House, 152-160 City Road, London, EC1V 2NX, U.K.",
                addressRegion: "London",
                addressCountry: "United Kingdom",
                postalCode: "EC1V 2NX",
              },
              brand: {
                "@type": "Brand",
                name: "Dynamics Square UK Ltd.",
                logo: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "1280",
              },
              url: "https://www.dynamicssquare.co.uk/",
              sameAs: [
                "https://www.facebook.com/dynamicssquareuk/",
                "https://twitter.com/dsquare_uk",
                "https://www.linkedin.com/showcase/dynamics-square-uk/",
                "https://www.youtube.com/c/DynamicsSquare",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              Headline:
                "We help you effectively leverage the potential of Microsoft Dynamics CRM, ERP, and cloud technologies.",
              description:
                "What do you have a goal, a vision, or a problem to solve? We have 260+ Microsoft certified consultants, creative thinkers, and developers ready to assist you with your digital transformation journey. Our objective is to solve your challenges and turn your idea into a reality.",
              Keywords: [
                "dynamics 365 partner uk",
                "erp consultants UK",
                "crm consultancy",
                "d365 business central",
                "crm expert online",
                "d365 for finance",
                "Microsoft NAV partner",
                "dynamics crm implementation",
                "d365 field service",
                "crm implementation services",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Dynamics Square UK Ltd.",
              alternateName:
                "Dynamics Square Microsoft Gold Partner company in London, UK",
              url: "https://www.dynamicssquare.co.uk/",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "localBusiness",
              name: "Dynamics Square UK Ltd.",
              description:
                "As a Dynamics 365 partner, we assist your business in scaling up by giving unbiased advise on the best Microsoft dynamics ERP and CRM solutions.",
              image:
                "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              alternateName: "Dynamics Square Software company in London, UK",
              telephone: "+442071932502, +447479273380",
              email: "info@dynamicssquare.co.uk",
              priceRange: "£££-£££",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kemp House, 152-160 City Road",
                addressLocality:
                  "Kemp House, 152-160 City Road, London, EC1V 2NX, U.K.",
                addressRegion: "London",
                addressCountry: "UK",
                postalCode: "EC1V 2NX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.52706865727293,
                longitude: -0.08876773400079006,
              },

              brand: {
                "@type": "Brand",
                name: "Dynamics Square UK Ltd.",
                logo: "https://www.dynamicssquare.co.uk/img/dynamicssqure-logo.svg",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.3",
                reviewCount: "1260",
              },

              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednessday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "5:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday - closed",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday - Closed",
                },
              ],

              url: "https://www.dynamicssquare.co.uk/",
              sameAs: [
                "https://www.facebook.com/dynamicssquareuk/",
                "https://twitter.com/dsquare_uk",
                "https://www.linkedin.com/showcase/dynamics-square-uk/",
                "https://www.youtube.com/c/DynamicsSquare",
              ],
            }),
          }}
        />
      </Head>
      <main>




        <section id="h-banner" className="hero hero-home">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className='wellcome-heading-main'>
                  <h1 data-aos="fade-up">
                    UK's <span>Trusted</span>  Microsoft Solutions Partner
                  </h1>
                  <p>Being reckoned as a leading Microsoft Dynamics 365 partner, and new-gen technology innovator, Dynamics Square holds expertise in AI, advanced automation, cloud solutions, training, and consulting.</p>
                  <div className="text-center btn-welcome">
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="btn-get-started scrollto"
                      >
                        <span>Achieve More Together </span>
                      </a>
                    </Link>
                  </div>
                <div className='col-flot-icons'>
                 
                  <figure>
                    <Image src="/img/cluth-patner.png" alt="cluth-patner" width={103} height={112} />
                  </figure>
                  <figure>
                    <Image src="/img/m-partner.png" alt="m-partner.png" width={223} height={62} />
                  </figure>
                  <figure>
                    <Image src="/img/trust-pilot-logo.png" alt="trust-pilot-logo.png" width={127} height={60} />
                  </figure>
                 
                </div>

                  <div className='float-left-div'>
                    <span className='train'></span>
                    <div className='cont'><span>172%</span> ROI</div>
                  </div>
                  <div className='float-left-div float-right-div'>
                    <span className='train'>4X</span>
                    <div className='cont'><span>Improved </span>Productivity</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <section style={{ marginBottom: '0px' }} className='po-relativ'>
          <div className="containesr">
            <header className="section-header section-header-home" style={{ marginBottom: '-75px', position: 'relative', zIndex: '1' }}>
              <h2>Connected in Every Way. Always.</h2>
              <p>Seamlessly Connected to Microsoft Apps - All United in One Place</p>
            </header>

            <ExpandableCard />

            <div className="vide-s-home" style={{ margin: '' }}>

              <video className="video-screen-home" playsInline autoPlay loop muted poster="/img/h-bnner.png">
                <source src="/video/home-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>




        <section id="services" className="services home-serv-bg">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>350+ Businesses Rely on Dynamics Square </h2>
                  <p><strong>Long-term commitment is at the heart of our mission</strong>: Formed in the year 2011, we have come a long way by building trust among 350+ clients as a reliable Microsoft Dynamics Solution Partner. We take pride in helping organizations succeed and adapt continuously, with Microsoft Dynamics 365 Product Suite.</p>
                </header>
              </div>
            </div>
            <div className="row gy-2">
              <div className="col-lg-12">
                <div className="bg-h-color">
                  <figure>
                    <Image src="/img/parweld-new-logo.png" alt="parweld-new-logo" width={223} height={78} />
                  </figure>
                  <figure>
                    <Image src="/img/Arteak-new-logo.png" alt="Arteak-new-logo" width={241} height={78} />
                  </figure>
                  <figure><img src="/img/Ncc-new-logo.png" alt="Ncc-new-logo" width={174} height={78} /></figure>
                  <figure> <Image src="/img/Comxo-new-logo.png" alt="Comxo-new-logo" width={230} height={78} /></figure>
                  <figure> <Image src="/img/mta-new-logo.png" alt="mta-new-logo" width={122} height={78} /></figure>
                  {/* <img src="/img/COMXO-LIMITED-logo.png" alt="client-logs" /> */}

                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>Microsoft Business Apps: New Age Solutions to Drive Exponential Growth</h2>
                  <p>The world is changing, and so is technology! If you're struggling to thrive in a fast-paced market, don't worry. Dynamics Square will address your business challenges with Microsoft Business Apps </p>
                </header>
              </div>
            </div>
            <div className="row">


              <div className="tabs-service-slide">
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-service-one-tab" data-bs-toggle="tab" data-bs-target="#nav-service-one" type="button" role="tab" aria-controls="nav-service-one" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Business Central</button>
                  <button className="nav-link" id="nav-service-two-tab" data-bs-toggle="tab" data-bs-target="#nav-service-two" type="button" role="tab" aria-controls="nav-service-two" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-finance.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Finance</button>
                  <button className="nav-link" id="nav-service-five-tab" data-bs-toggle="tab" data-bs-target="#nav-service-five" type="button" role="tab" aria-controls="nav-service-five" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Supply Chain</button>
                  <button className="nav-link" id="nav-service-three-tab" data-bs-toggle="tab" data-bs-target="#nav-service-three" type="button" role="tab" aria-controls="nav-service-three" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-sales.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure>Sales</button>
                  <button className="nav-link" id="nav-service-four-tab" data-bs-toggle="tab" data-bs-target="#nav-service-four" type="button" role="tab" aria-controls="nav-service-four" aria-selected="true"><figure>
                    <img src="/img/menu-icons/power-bi.svg" alt="power-bi" width="48" height="48" />
                  </figure>Power BI</button>

                  <button className="nav-link" id="nav-service-six-tab" data-bs-toggle="tab" data-bs-target="#nav-service-six" type="button" role="tab" aria-controls="nav-service-six" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </figure> Customer Service</button>



                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade active show" id="nav-service-one" role="tabpanel" aria-labelledby="nav-service-one-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <div className="inner-info-left">
                          <h3>Smart, AI-enabled ERP for SMBs</h3>
                          <p>Outperform smartly with the ERP trusted by 96% of Fortune 500 companies.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Enjoy more savings with low cost of ownership</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Boost efficiency with AI and automated workflows</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>No more manual data entry or app-switching</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Increase revenue with precise cash flow forecasts</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Flexibility to manage your business from anywhere</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Cloud-Enabled Growth</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/AI-powered-efficiency.png" alt="AI-powered-efficiency" />
                            <span>AI-Powered Efficiency</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/work-on-the-move.png" alt="work-on-the-move" />
                            <span>Work on the Move</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/flexible-integration.png" alt="flexible-integration" />
                            <span>Flexible Integration</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/intelligent-decision-making.png" alt="intelligent-decision-making" />
                            <span>Intelligent Decision Making </span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-service-two" role="tabpanel" aria-labelledby="nav-service-two-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Accurate financials, every time, on time</h3>
                          <p>Boost ROI, Cut Risks: Automate Financial Activities</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Real-time financial analytics for informed decisions</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>AI-driven insights for proactive risk management</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Streamline operations and improve cash flow with automation</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Stay compliant with ever-changing global financial regulations</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Get a unified financial view to make informed decisions</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/financial-agility.png" alt="financial-agility" />
                            <span>Accurate financial forecasting</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/AI-Powerdbilling.png" alt="AI-Powerdbilling" />
                            <span>AI for risk predictions</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cash-flow.png" alt="cash-flow" />
                            <span>Automated financial workflows</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/away-from-dijointed.png" alt="away-from-dijointed" />
                            <span>Regulatory compliance tools</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="cloud_done" />
                            <span>Secure, unified data platform</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-three" role="tabpanel" aria-labelledby="nav-service-three-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Close deals faster and win more customers</h3>
                          <p>Leverage AI to simplify sales, convert leads fast and expand customer base.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Use Copilot to reduce mundane tasks </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Ease selling with intelligent customer insights </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Meet customer’s preferences with personalized interactions</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Filter the right customers with AI-based scoring and visualizations</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Integrated sales processes within the Microsoft Ecosystem</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="control_point_duplicate" />
                            <span>AI-powered Sales Automation</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="perm_data_setting" />
                            <span>Integration with native Solutions</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="data_exploration" />
                            <span>Data-driven sales strategies</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="aspect_ratio" />
                            <span>Avail Real-time insights</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Unified-data.png" alt="Unified-data" />
                            <span>Shorten sales cycle using AI</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-four" role="tabpanel" aria-labelledby="nav-service-four-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Visualise Data, See Beyond the Numbers</h3>
                          <p>Transform data into actionable insight and make data driven decisions.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Enhanced decision making with real-time insights</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improved operational efficiency with increased productivity</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Analyse customer behavior for tailored experience</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Simplify data visualization and report generation</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improves communication and enable team collaboration</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/experimental-journey.png" alt="experimental-journey" />
                            <span>Cloud-based data connectivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/multi-channel-campaign.png" alt="multi-channel-campaign" />
                            <span>Data transformation and modeling</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/customer-insights.png" alt="customer-insights" />
                            <span>Interactive reports and dashboards</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Scalable-market.png" alt="Scalable-market" />
                            <span>Advanced data analytics</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/realtime-performance.png" alt="realtime-performance" />
                            <span>Fully secured data</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-five" role="tabpanel" aria-labelledby="nav-service-five-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Secure, smart and optimised Supply Chain</h3>
                          <p>Be disruption-ready, mitigate supply chain issues with Dynamics 365 SCM.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Boosted Performance with Intelligent Guidance</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Proactive Issue Detection for Quality Assurance</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Complete Visibility for Supply Chain Efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Resource Management for Optimal Material Use</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Maximized Equipment Effectiveness for Productivity</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/unmatched-cybersecurity.png" alt="unmatched-cybersecurity" />
                            <span>Strategic Supply Chain Mapping</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/proactive-inventory-management.png" alt="proactive-inventory-management" />
                            <span>Efficient Procurement Solutions</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/warehouse-optimisation.png" alt="warehouse-optimisation" />
                            <span>Streamlined Manufacturing Flow</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/agile-manufacturing-practice.png" alt="agile-manufacturing-practice" />
                            <span>Effective Order & Pricing System</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/minimise-downtime.png" alt="minimise-downtime" />
                            <span>Optimized Warehouse & Fulfillment</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-six" role="tabpanel" aria-labelledby="nav-service-six-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Empower agents to offer great customer experience</h3>
                          <p>Get advanced tools and real-time insights to build lasting customer relationships.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Advanced service delivery tracking and placements</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Deliver consistent support across multiple channels </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Personalize customer interactions through AI-Insights</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improved innovation with real-time feedback and analysis.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Enable self-service options for faster issue resolution.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Seamless-support.png" alt="Seamless-support" />
                            <span>Seamless Support</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/customer-accesibility.png" alt="customer-accesibility" />
                            <span>Enhanced Customer Accessibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Personalisation-for-customer.png" alt="Personalisation-for-customer" />
                            <span>AI-Driven Personalization</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/issuee-resolution.png" alt="issuee-resolution" />
                            <span>Proactive Issue Resolution</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Knowledge-management.png" alt="Knowledge-management" />
                            <span>Knowledge Management </span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link href="#exampleModal">
                            <a
                              data-bs-toggle="modal"
                              className="btn-get-started scrollto"
                            >
                              <span>Get Started</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>




            </div>
          </div>
        </section>

        <section className="m-botom-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>Still Not Utilizing Microsoft Cloud Technology? </h2>
                  <p>Don’t Worry, I'm Here to Help You Roar!</p>
                </header>
              </div>
            </div>
            <div className="row mascot-bg">
              <div className="col-lg-6">
                <div className="mas-left">
                  <div className="text-ar">
                    <h3>Looking for a Dynamics 365 <br /> implementation partner?</h3>
                    <Link href="#exampleModal">
                      <a
                        data-bs-toggle="modal"
                        className="scrollto-tops"
                      >
                        <span>Get Started <i className="bi bi-arrow-right"></i></span>
                      </a>
                    </Link>
                  </div>
                  <video className="video-l" autoPlay loop muted playsInline poster="">
                    <source src="/video/animation-hover.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mas-left-right">
                  <div className="text-ar text-r-right">
                    <h3>Want to know what more <br />Dynamics 365 can do?</h3>
                    <Link href="/products/microsoft-dynamics-365/">
                      <a
                        className="scrollto-tops-right"
                      >
                        <span>Get Started <i className="bi bi-arrow-right"></i></span>
                      </a>
                    </Link>
                  </div>
                  <video className="video-r" autoPlay loop muted playsInline poster="">
                    <source src="/video/animation-hover.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="post-mas"><img src="/img/mascut-png.png" alt="mascut-png" width="341" height="341" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="b--colo-new">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>Reimagine your Business growing at scale </h2>
                  <p>Create a breakthrough with Dynamics Square’s expertise in delivering the right implementation, upgrade or support services. Know what your business needs. </p>
                </header>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="business-app-card">
                  <div className="app-head">
                    <div className='app-hovers'>
                      <figure>
                        <img src="/img/app-head-icons-1.png" alt="Implementation" width={48} height={48} />
                      </figure>
                      <video autoPlay muted playsInline loop>
                      
                      <source src="/video/Scale-video-1.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Implementation</h3>
                  </div>
                  <div className="app-body">
                    <p>Elevate your business with AI workflows you can trust through our Dynamics 365 implementation services. Our experienced teams excel in onsite, hybrid, or remote models, ensuring smooth and successful implementations. </p>
                    <Link href="/our-services/dynamics-365-implementation-services/"><a>Learn More </a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="business-app-card">
                  <div className="app-head">
                    <div className='app-hovers'>
                      <figure>
                        <img src="/img/app-head-icons-2.png" alt="Implementation"  width={48} height={48} />
                      </figure>
                      <video autoPlay playsInline muted loop>
                      <source  src="/video/Scale-video-2.mp4" type="video/mp4" />
                      
                      </video>
                    </div>
                    <h3>Upgrade</h3>
                  </div>
                  <div className="app-body">
                    <p>Improve your business impact with our Dynamics 365 upgrade services. Trust us to expertly upgrade your legacy system, ensuring seamless transitions, minimal disruptions, and optimized operations for future growth.</p>
                    <Link href="/our-services/dynamics-365-upgrade-services/"><a>Learn More </a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="business-app-card">
                  <div className="app-head">
                    <div className='app-hovers'>
                      <figure>
                        <img src="/img/app-head-icons-3.png" alt="Implementation"  width={48} height={48} />
                      </figure>
                      <video autoPlay playsInline muted loop >
                      <source src="/video/Scale-video-3.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Support</h3>
                  </div>
                  <div className="app-body">
                    <p>Ensure long-term benefits with our Dynamics 365 support services. Our certified experts provide solutions, training, and implementation, managing your lifecycle with real-time help, ensuring 24/7 Dynamics 365 support.</p>
                    <Link href="/our-services/dynamics-365-support-services/"><a>Learn More </a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="business-app-card">
                  <div className="app-head">
                    <div className='app-hovers'>
                      <figure>
                        <img src="/img/app-head-icons-4.png" alt="Implementation"  width={48} height={48} />
                      </figure>
                      <video autoPlay playsInline muted loop >
                      <source src="/video/Scale-video-4.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Consulting</h3>
                  </div>
                  <div className="app-body">
                    <p>Maximise your Dynamics 365 project with our expert consulting services: right software selection, accurate assessments, future roadmaps, business case creation, migration planning, health checks, and license support.</p>
                    <Link href="/our-services/dynamics-365-consultant/"><a>Learn More </a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="business-app-card">
                  <div className="app-head">
                    <div className='app-hovers'>
                      <figure>
                        <img src="/img/app-head-icons-5.png" alt="Implementation"  width={48} height={48} />
                      </figure>
                      <video autoPlay playsInline muted loop s>
                      <source src="/video/Scale-video-5.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Audit</h3>
                  </div>
                  <div className="app-body">
                    <p>We optimise your Dynamics 365 investment with professional audit services. Starting with initial assessments to in-depth analysis, we uncover key insights and offer precise recommendations for strategic improvements.</p>
                    <Link href="/free-dynamics-365-system-health-check/"><a>Learn More </a></Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="business-app-card">
                  <div className="app-head">
                    <div className='app-hovers'>
                      <figure>
                        <img src="/img/app-head-icons-6.png" alt="Implementation"  width={48} height={48} />
                      </figure>
                      <video autoPlay playsInline muted loop >
                      <source src="/video/Scale-video-6.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <h3>Training</h3>
                  </div>
                  <div className="app-body">
                    <p>Experience our Dynamics 365 training services alongside engaging in-person sessions and innovative experimental modules. Our adaptable programs ensure your business stays agile and responsive to market shifts, fostering growth and success.</p>
                    <Link href="/our-services/dynamics-365-training/"><a>Learn More </a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='relt-pos'>
          <div className="container rr-bg-colgr">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <header className="section-header section-header-home">
                  <h2>Become An Industry Leader</h2>
                  <p>By implementing Dynamics 365 Business Applications.</p>
                </header>
              </div>
            </div>
            <div className="row g-66">


              <div className="tabs-service-slide-solution">
                <div className="nav nav-tabs mb-3" id="nav-tab-new" role="tablist">

                  <button className="nav-link active" id="nav-industry-one-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-one" type="button" role="tab" aria-controls="nav-industry-one" aria-selected="true"><div className="rounded-circle"><img src="/img/shopping_cart.png" alt="E-commerce" width="32" height="32" /></div><span>E-commerce</span></button>
                  <button className="nav-link" id="nav-industry-two-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-two" type="button" role="tab" aria-controls="nav-industry-two" aria-selected="true"><div className="rounded-circle"><img src="/img/school.png" alt="Education" width="32" height="32" /></div><span>Education</span></button>
                  <button className="nav-link" id="nav-industry-three-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-three" type="button" role="tab" aria-controls="nav-industry-three" aria-selected="true"><div className="rounded-circle"><img src="/img/manufacturing-ds-uk-ico.png" alt="Manufacturing" width="32" height="32" /></div><span>Manufacturing</span></button>
                  <button className="nav-link" id="nav-industry-four-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-four" type="button" role="tab" aria-controls="nav-industry-four" aria-selected="true"><div className="rounded-circle"><img src="/img/rocket_launch.png" alt="StartUp" width="32" height="32" /></div><span>StartUp</span></button>
                  <button className="nav-link" id="nav-industry-five-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-five" type="button" role="tab" aria-controls="nav-industry-five" aria-selected="true"><div className="rounded-circle"><img src="/img/volunteer_activism.png" alt="Not for Profit" width="32" height="32" /></div><span>Not for Profit</span></button>
                  <button className="nav-link" id="nav-industry-six-tab" data-bs-toggle="tab" data-bs-target="#nav-industry-six" type="button" role="tab" aria-controls="nav-industry-six" aria-selected="true"><div className="rounded-circle"><img src="/img/fastfood.png" alt="Food & Beverages" width="32" height="32" /></div><span>Food & Beverages</span></button>
                  <Link href="/industries/"><button className="nav-link"><div className="rounded-circle"><img src="/img/add_circle.png" alt="Explore More" width="32" height="32" /></div><span><a>Explore More</a></span></button></Link>



                </div>

                <div className="tab-content" id="nav-tabContentss">

                  <div className="tab-pane fade active show" id="nav-industry-one" role="tabpanel" aria-labelledby="nav-industry-one-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                        <Image width={414} height={465} src="/img/001.png" alt="E-commerce" />
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>E-commerce </span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Scale Your Online Stores Confidently</h3>
                          <p>Delivering exceptional experiences to your buyers and sellers, all in one place.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Seamless Order Processing</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Smart Inventory Management</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Efficient Shipping Integration</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Automated Financial Insights</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Enhanced Customer Service</span></li>
                          </ul>
                          <Link href="/industries/ecommerce/"><a className="lins-indu">Know more about solutions</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-two" role="tabpanel" aria-labelledby="nav-industry-two-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                        <Image  width={414} height={465} src="/img/002.png" alt="Education" />
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Education</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Automate Your Education System with Dynamics 365 </h3>
                          <p>Manage staff, student & curriculum data with AI-powered ERP & CRM solution</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Improved learning paths</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Automated admin tasks</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Student, Staff Management</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Alumni Relations & Fundraising</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Enhanced Stakeholder Collaboration</span></li>
                          </ul>
                          <Link href="/industries/dynamics-365-for-education/"><a className="lins-indu">Know more about solutions</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-three" role="tabpanel" aria-labelledby="nav-industry-three-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                        <Image  width={414} height={465} src="/img/003.png" alt="Manufacturing" />
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Manufacturing </span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Connect, Collaborate & Overcome Disruptions</h3>
                          <p>Modernise your supply chain for better visibility, planning, and efficiency</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Minimise Unplanned Downtime</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Predictive Maintenance</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Demand Forecasting & Planning</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Smart Factory Solutions</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Supply Chain Visibility</span></li>
                          </ul>
                          <Link href="/industries/microsoft-cloud-for-manufacturing/"><a className="lins-indu">Know more about solutions</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-four" role="tabpanel" aria-labelledby="nav-industry-four-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                        <Image width={414} height={465} src="/img/004.png" alt="StartUp" />
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>StartUp</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Committing to helping your business stay relevant</h3>
                          <p>Grow by incorporating digital business strategy, customer experience, marketing modernization, and data and AI expertise with Microsoft's business solutions.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Marketing Campaigns</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Automated Workflows</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Program Dashboard </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Financial Analysis</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Informed Decision Making</span></li>
                          </ul>
                          <Link href="/industries/startups/"><a className="lins-indu">Know more about solutions</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-five" role="tabpanel" aria-labelledby="nav-industry-five-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                        <Image width={414} height={465} src="/img/005.png" alt="Not For Profit" />
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Not For Profit</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Witness the Growth of Substance with Government-Specific ERP Solutions</h3>
                          <p>Make your vision a reality by ensuring the desired performance.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Fundraising Management </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Volunteer Management</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Action Dashboard</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Consumer Marketing Journey</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Analysis of the Impact Created</span></li>
                          </ul>
                          <Link href="/industries/microsoft-cloud-for-nonprofit/"><a className="lins-indu">Know more about solutions</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-industry-six" role="tabpanel" aria-labelledby="nav-industry-six-tab">
                    <div className="tab-industry-contant-one">

                      <div className="right-sect">
                        <div className="d-colomn">
                         <Image width={414} height={465} src="/img/006.png" alt="Food & Beverage" />
                        </div>

                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Food & Beverage</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Reduce complexity, Exceed expectations</h3>
                          <p>Optimise your processes to unlock unlimited growth opportunities.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Simplified Supply Chain Management</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improved Production and Quality Control</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Automated Replenishment</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Quality Assurance</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Enhanced Collaboration</span></li>

                          </ul>
                          <Link href="/industries/food-and-beverages/"><a className="lins-indu">Know more about solutions</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="achive-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="achive-left">
                  <h3>About Dynamics Square</h3>
                  <p>As a Gold Microsoft Dynamics Partner, we can help you revolutionise your business processes and operations while leveraging the power of the cloud, AI, and ML.</p>

                  <p>Since 2011, we have been serving our global customers, enabling them to make more profits by implementing tech-driven cloud solutions.</p>
                  <p>We are one of the trusted dynamics consultants and certified Microsoft CRM & ERP partners, helping businesses like yours to achieve exponential growth while resolving critical business problems with 100% user satisfaction</p>
                  <div className="btn-welcome">
                    <Link href="/about-us/">
                      <a
                        className="btn-get-started scrollto"
                      >
                        <span>Find out our Approach</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <figure className="acive-fig">
                  <Image src="/img/micro-about-pic.png" alt="micro-about-pic" width={669} height={543} />
                </figure>
              </div>
            </div>
            <div className="row world-achive">
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="home-side-new-heading">
                  <h2>See how our customers drive impact</h2>
                  <p>By implementing Dynamics 365 Business Applications</p>
                </div>
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
                        <div className='col-lg-7'>
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
                        <div className='col-lg-7'>
                          <div className='test-s-info'>
                            <figure>
                              <Image src="/img/testimonials/Jonathan-W.png" alt="Jonathan-W" width={84} height={84}  />
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
                        <div className='col-lg-7'>
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
                        <div className='col-lg-7'>
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
                        <div className='col-lg-7'>
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
            <div className='row'>
              <div className="col-md-12">
                <div className="case-mor-link">
                  <Link href="/case-studies/" ><a>Read more success stories</a></Link>
                </div>
              </div>
            </div>

          </div>
        </section>





      </main>
    </>
  );
}
