import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Mousewheel, Autoplay } from 'swiper';
import FooterNew from '../components/FooterNew';
import Image from 'next/image';


const HomeOne = () => {
    return (
        <>
            <Head>
                <title>Trusted Microsoft Dynamics 365 Partner in UK - Dynamics Square™</title>
                <meta
                    name="description"
                    content="As a trusted UK Microsoft Dynamics 365 Partner, we help businesses succeed with Business Central, F&O & Power BI implementation. Contact us today!"
                />
                <link rel="canonical" href="https://www.dynamicssquare.co.uk/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dynamicssquare.co.uk/" />
                <meta property="og:title" content="Trusted Microsoft Dynamics 365 Partner in UK - Dynamics Square™" />
                <meta property="og:description" content="As a trusted UK Microsoft Dynamics 365 Partner, we help businesses succeed with Business Central, F&O & Power BI implementation. Contact us today!" />
                <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/" />
                <meta property="twitter:title" content="Trusted Microsoft Dynamics 365 Partner in UK - Dynamics Square™" />
                <meta property="twitter:description" content="As a trusted UK Microsoft Dynamics 365 Partner, we help businesses succeed with Business Central, F&O & Power BI implementation. Contact us today!" />
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
                                    name: "Trusted Microsoft Dynamics 365 Partner in UK - Dynamics Square™",
                                    description:
                                        "As a trusted UK Microsoft Dynamics 365 Partner, we help businesses succeed with Business Central, F&O & Power BI implementation. Contact us today!",
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
                <section className='home-baner-head-new'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>

                                <div className='floting-b'>
                                    <div className="orbit-parent">
                                        <div className="orbit-child child1"></div>
                                        <div className="orbit-child child2"></div>
                                        <div className="orbit-child child3"></div>
                                    </div>
                                </div>
                                <div className='home-baner-head'>
                                    <h1>UK's Trusted Microsoft Dynamics 365 Partner</h1>
                                    <h2>When results count, <br />Dynamics Square delivers! </h2>
                                    <p>Dominate and thrive with AI-powered Microsoft solutions. With Dynamics Square, Your Success is Powered by Years of Proven Expertise—No Matter the Industry!</p>
                                    <a href="#exampleModal" data-bs-toggle="modal" className='btn btn-home'><img src='/img/buttion-ic-1.png' width={26} height={26} alt='icons' /> Make It Happen! <span><i className="bi bi-arrow-right-circle"></i></span></a>

                                </div>
                                <div className='specialtitle'>
                                    <p>and see the magic <img src="/img/mask-group-aa.png" width={87} height={87} alt="mask-group-aa" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-lg-12 p-0'>
                                <Swiper
                                    autoplay={{
                                        delay: 0,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    spaceBetween={10}
                                    grabCursor={true}
                                    modules={[Navigation, Mousewheel, Autoplay]}
                                    className="mySwip"
                                    loop={true}
                                    speed={30000}
                                    centeredSlides={false}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2
                                        },
                                        768: {
                                            slidesPerView: 3
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 4
                                        },
                                        1400: {
                                            slidesPerView: 5
                                        },
                                    }}
                                >


                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <Image src="/img/cad-i-1.png" alt="cad-i-1.png" width={467} height={230} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <Image src="/img/cad-i-2.png" alt="cad-i-1.png" width={467} height={230} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <Image src="/img/cad-i-3.png" alt="cad-i-1.png" width={467} height={230} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <Image src="/img/cad-i-4.png" alt="cad-i-1.png" width={467} height={230} />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <Image src="/img/cad-i-5.png" alt="cad-i-1.png" width={467} height={230} />
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='client-home-new-list'>
                                    <p>Trusted by 500+ Businesses Globally</p>
                                    <ul>
                                        <li>
                                            <Image src="/img/cli-1.png" alt="cli-1.png" width={223} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-2.png" alt="cli-2.png" width={174} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-3.png" alt="cli-3.png" width={230} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-4.png" alt="cli-4.png" width={241} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-5.png" alt="cli-5.png" width={122} height={78} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8 col-md-12 col-sm-12'>
                                <div className='new-title-heading'>
                                    <h2>Dynamics Square: Your Microsoft Solutions Partner</h2>
                                    <p>As a Dynamics 365 implementation partner, we have been consistently delivering impactful solutions, earning trust through innovation & commitment and empowering businesses to achieve excellence, no matter what the industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>500+</span>
                                    <p>Innovative implementations delivered with strategy, precision, and success.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>150+</span>
                                    <p>Skilled professionals with deep, industry-specific expertise driving innovation.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>14+</span>
                                    <p>Years of industry mastery, delivering excellence in every solution.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>12+</span>
                                    <p>Industries transformed with cutting-edge technology and innovation.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row case-div-o'>
                            <div className='col-lg-12'>
                                <h3>Growth Stories That Resonate: See Success in Action</h3>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <Image src="/img/case-imgs-2.jpg" alt="case-imgs-1" width={610} height={592} />
                                        <p>London’s top college boosts departmental synergy by 80% with a system upgrade.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/case-studies/upgrade-from-nav09-to-business-central/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <Image src="/img/case-imgs-3.jpg" alt="case-imgs-2" width={610} height={592} />
                                        <p>A car restoration company boosted ROI by 30% through custom solutions.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/case-studies/access-dimension-erp-to-business-central-migration/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <Image src="/img/case-imgs-1.jpg" alt="case-imgs-1" width={610} height={592} />
                                        <p>A renowned UK defence apparel company maximised efficiency by 50%.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/case-studies/nav2009R2-to-business-central/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <Image src="/img/case-imgs-4.jpg" alt="case-imgs-4" width={610} height={592} />
                                        <p>Strategic advancements led an orthopedic implant manufacturer to 60% more visibility.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/case-studies/upgrading-to-dynamics-365-business-central/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-12 text-center to-22'>
                                <a href="/case-studies/" className='btn-red btn'>Explore more use cases <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gra-sc op-01'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Our Services: Smart & Simple</h2>
                                    <p>We merge strategy, technology, and years of deep industry expertise to engineer and deliver solutions that drive real results.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40 '>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-01.png" alt="serve-ic-01" width={40} height={40} />
                                        <h3>Consulting</h3>
                                        <p>Expert guidance to optimise your business processes.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-02.png" alt="serve-ic-02" width={40} height={40} />
                                        <h3>Implementation</h3>
                                        <p>Expert execution for a smooth transition and business continuity.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-03.png" alt="serve-ic-03" width={40} height={40} />
                                        <h3>Upgrade</h3>
                                        <p>Regular upgrades to maintain system competitiveness.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-04.png" alt="serve-ic-04" width={40} height={40} />
                                        <h3>Ongoing Support</h3>
                                        <p>Proactive solutions to keep your systems running smoothly.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-12 text-center to-22'>
                                <a href="/our-services/" className='btn-red btn'>Explore More! <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gra-scs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Your Industry? Our Expertise!</h2>
                                    <p>Dynamics Square brings decades of deep industry expertise that merges ongoing industry insights with Microsoft technology to help you capitalise on your biggest opportunities.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row g-3 m--t-40 sliding-row'>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="/industries/dynamics-365-for-education/">
                                        <Image src="/img/ind-i-01.jpg" alt="serve-ic-01" width={818} height={792} />
                                        <div className='flt'>
                                            <h3>Education</h3>
                                            <p>Modernising education with technology-driven solutions and tools.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="/industries/microsoft-cloud-for-manufacturing/">
                                        <Image src="/img/ind-i-02.jpg" alt="serve-ic-01" width={818} height={792} />
                                        <div className='flt'>
                                            <h3>Manufacturing</h3>
                                            <p>Implementing automation for improved manufacturing performance.</p>
                                        </div>

                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="/industries/food-and-beverages/">
                                        <Image src="/img/ind-i-03.jpg" alt="serve-ic-01" width={818} height={792} />
                                        <div className='flt'>
                                            <h3>Food & Beverages</h3>
                                            <p>Manage supply and inventory processes with real-time data.</p>
                                        </div>

                                    </a>
                                </div>
                            </div>

                            <div className='col-lg-12 text-center to-22'>
                                <a href="/industries/" className='btn-red btn'>Discover our industry expertise <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-gra-sc'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Smart AI Solutions for Every Business </h2>
                                    <p>Stay agile and adaptable with modern AI solutions meant to give you the required competitive edge. Dynamics Square empowers businesses of all sizes to harness Microsoft Dynamics 365 solutions tailored for their growth. </p>
                                </div>
                            </div>
                        </div>
                        <div className='row g-3 m--t-40 '>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-2.png" alt="startic-01" width={40} height={40} />
                                        <h3>Startups </h3>
                                        <p>Agile, cost-effective solutions to set a strong foundation for growth. </p>
                                    </div>
                                    <a href="/erp-for-startups/">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-01.png" alt="startic-02" width={40} height={40} />
                                        <h3>Small Businesses </h3>
                                        <p>Scalable tools to drive efficiency, productivity, and customer engagement. </p>
                                    </div>
                                    <a href="/dynamics-365-for-small-businesses/">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-03.png" alt="sstartic-03" width={40} height={40} />
                                        <h3>Medium Businesses </h3>
                                        <p>Advanced solutions to streamline operations and boost profitability. </p>
                                    </div>
                                    <a href="/dynamics-365-for-medium-businesses/">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-04.png" alt="startic-04" width={40} height={40} />
                                        <h3>Large Enterprises </h3>
                                        <p>Enterprise-grade solutions designed to optimise processes and accelerate success. </p>
                                    </div>
                                    <a href="/dynamics-365-for-large-businesses/">Get Started</a>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>

                {/* <section className='bg-gra-scs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Our method? As straightforward as your goals!</h2>
                                    <p>Simplify transformation with a Microsoft Dynamics 365 implementation partner dedicated to your growth.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-4 m--t-40'>
                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669'>
                                    <Image src="/img/card-669-01.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Discover What Matters</h3>
                                    <p>We listen to understand your challenges and goals deeply.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <Image src="/img/card-669-02.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Craft the Solution</h3>
                                    <p>With Microsoft tools, we design solutions that fit your vision.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <Image src="/img/card-669-03.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Flawless Execution</h3>
                                    <p>From integration to training, we handle every step for you.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 '>
                                    <img src="/img/card-669-04.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Growth-Ready Support</h3>
                                    <p>We adapt and optimise your systems as your business evolves.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className='bg-gra-scss'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>We Deliver What Matters—Because Your Growth Matters Most</h2>
                                    <p>At Dynamics Square, we’ve guided businesses to optimise operations and boost performance. From 4x revenue growth to an 87% jump in customer retention, our results speak volumes.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40'>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p card-669-liner'>
                                    <img src="/img/testimonials/Terence-Turner.png" alt="card-669-01" width={126} height={126} />
                                    <h3>Terence Turner</h3>
                                    <span>General Manager</span>
                                    <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p'>
                                    <img src="/img/testimonials/Jonathan-W.png" alt="card-669-01" width={126} height={126} />
                                    <h3>Jonathan W</h3>
                                    <span>Technical Director</span>
                                    <p>We have worked with Dynamics Square since 2019. Our working relationship has built during this period, and we have found them to be very professional.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p card-669-liner'>
                                    <img src="/img/avatar.png" alt="card-669-01" width={126} height={126} />
                                    <h3>Mark Shaxted</h3>
                                    <span>Operations Manager</span>
                                    <p>Dynamics Square has been a solid partner for 4 years, skillfully upgrading our Microsoft Dynamics NAV to Dynamics 365 Business Central. They offer great value and professionalism.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='bg-gra-scs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Resources & Insights</h2>
                                    <p>Discover knowledge-packed resources designed to help you make informed decisions.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row m--t-40'>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-05.png" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/white-papers/micorosoft-copilot/">Whitepaper</a></span>
                                        <p>Microsoft Copilot: The Catalyst for Transformation in Your Business.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/white-papers/micorosoft-copilot/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-02.jpg" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/white-papers/micorosoft-finance/">Whitepaper</a></span>
                                        <p>The Future of Finance Management.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/white-papers/micorosoft-finance/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-03.jpg" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/guides/">Guide</a></span>
                                        <p>A Complete Guide to Dynamics CRM.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/guides/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-04.png" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/erp-implementation-cost-calculator/">Calculator</a></span>
                                        <p>Dynamics 365 ERP Implementation Price Calculator.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/erp-implementation-cost-calculator/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </main>


            <FooterNew />

        </>
    );
}

export default HomeOne;
