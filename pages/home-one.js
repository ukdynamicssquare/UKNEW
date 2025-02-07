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


const HomeOne = () => {
    return (
        <>
            <Head>
                <title>
                    Dynamics Square Home New
                </title>
                <meta title='robots' content='noindex ,nofollow' />
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
                                    <h1>Microsoft Experts for UK Businesses</h1>
                                    <h2>When results count, <br/>Dynamics Square delivers! </h2>
                                    <p>By implementing Microsoft’s AI-powered solutions, we empower businesses to streamline operations, boost efficiency, and scale with confidence. Ready to take the next step?</p>
                                    <a href="#exampleModal" data-bs-toggle="modal" className='btn btn-home'><img src='/img/buttion-ic-1.png' alt='icons' /> Make It Happen! <span><i className="bi bi-arrow-right-circle"></i></span></a>

                                </div>
                                <div className='specialtitle'>
                                    <p>and see the magic <img src="/img/mask-group-aa.png" alt="mask-group-aa" /></p>
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
                                            <img src="/img/cad-i-1.png" alt="cad-i-1.png" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <img src="/img/cad-i-2.png" alt="cad-i-1.png" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <img src="/img/cad-i-3.png" alt="cad-i-1.png" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <img src="/img/cad-i-4.png" alt="cad-i-1.png" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='slider0-img'>
                                            <img src="/img/cad-i-5.png" alt="cad-i-1.png" />
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
                                    <p>Trusted by 500 Businesses</p>
                                    <ul>
                                        <li>
                                            <img src="/img/cli-1.png" alt="cli-1.png" />
                                        </li>
                                        <li>
                                            <img src="/img/cli-2.png" alt="cli-2.png" />
                                        </li>
                                        <li>
                                            <img src="/img/cli-3.png" alt="cli-3.png" />
                                        </li>
                                        <li>
                                            <img src="/img/cli-4.png" alt="cli-4.png" />
                                        </li>
                                        <li>
                                            <img src="/img/cli-5.png" alt="cli-5.png" />
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
                                    <h2>Your Partner: At a Glance</h2>
                                    <p>We have been consistently delivering impactful solutions, earning trust through innovation & commitment and empowering businesses to achieve excellence.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>500+</span>
                                    <p>Successful Project Deployments</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>150+</span>
                                    <p>Skilled Professionals</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>12+</span>
                                    <p>Years of Excellence</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>11+</span>
                                    <p>Industry Penetration</p>
                                </div>
                            </div>
                        </div>
                        <div className='row case-div-o'>
                            <div className='col-lg-12'>
                                <h3>See how our customers drive impact</h3>
                            </div>

                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-2.jpg" alt="case-imgs-1" />
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-3.jpg" alt="case-imgs-2" />
                                        <p>How car restoration and customization company has enhanced their ROI by 30%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-1.jpg" alt="case-imgs-1" />
                                        <p>UK's top defence apparel manufacturer boosted efficiency and accuracy by 50%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-4.jpg" alt="case-imgs-4" />
                                        <p>Leading manufacturer of orthopedic implants has gained 80% more visibility</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
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
                                    <h2>Our Services, Simplified</h2>
                                    <p>Explore how we can help you achieve business clarity and success through:</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40 '>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-01.png" alt="serve-ic-01" />
                                        <h3>Consulting</h3>
                                        <p>Expert guidance to optimise your business processes.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-02.png" alt="serve-ic-02" />
                                        <h3>Implementation</h3>
                                        <p>Expert execution for a smooth transition and business continuity.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-03.png" alt="serve-ic-03" />
                                        <h3>Upgrade</h3>
                                        <p>Regular upgrades to maintain system competitiveness.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-04.png" alt="serve-ic-04" />
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
                                    <h2>Our Industry Expertise</h2>
                                    <p>We bring industry-specific expertise to address the unique challenges of:</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40 sliding-row'>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="#">
                                        <img src="/img/ind-i-01.jpg" alt="serve-ic-01" />
                                        <h3>Education</h3>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="#">
                                        <img src="/img/ind-i-02.jpg" alt="serve-ic-01" />
                                        <h3>Manufacturing</h3>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="#">
                                        <img src="/img/ind-i-03.jpg" alt="serve-ic-01" />
                                        <h3>Food & Beverages</h3>
                                    </a>
                                </div>
                            </div>

                            <div className='col-lg-12 text-center to-22'>
                                <a href="#" className='btn-red btn'>Discover our industry expertise <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gra-scs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2 style={{marginBottom:'0px'}}>How We Works? It’s Simple</h2>
                                </div>
                            </div>
                        </div>

                        <div className='row g-4 m--t-40'>
                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669'>
                                    <img src="/img/card-669-01.png" alt="card-669-01" />
                                    <h3>Understand Your Needs</h3>
                                    <p>We’ll start with a deep dive into your business challenges and objectives.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <img src="/img/card-669-02.png" alt="card-669-01" />
                                    <h3>Craft the Solution</h3>
                                    <p>Using Microsoft’s suite of tools, we design a customized roadmap for your transformation.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <img src="/img/card-669-03.png" alt="card-669-01" />
                                    <h3>Seamless Deployment</h3>
                                    <p>Our team handles everything from integration to training, so you can hit the ground running.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 '>
                                    <img src="/img/card-669-04.png" alt="card-669-01" />
                                    <h3>Support that Scales</h3>
                                    <p>With ongoing monitoring and optimization, we ensure your solutions evolve as your business grows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gra-scss'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2 style={{marginBottom:'0px'}}>What our Customer says</h2>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40'>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p card-669-liner'>
                                    <img src="/img/testimonials/Terence-Turner.png" alt="card-669-01" />
                                    <h3>Terence Turner</h3>
                                    <span>General Manager</span>
                                    <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p'>
                                    <img src="/img/testimonials/Jonathan-W.png" alt="card-669-01" />
                                    <h3>Jonathan W</h3>
                                    <span>Technical Director</span>
                                    <p>We have worked with Dynamics Square since 2019. Our working relationship has built during this period, and we have found them to be very professional.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p card-669-liner'>
                                    <img src="/img/avatar.png" alt="card-669-01" />
                                    <h3>Mark Shaxted</h3>
                                    <span>Operations Manager</span>
                                    <p>Dynamics Square has been a solid partner for 4 years, skillfully upgrading us from NAV2018 to Business Central. They offer great value and professionalism.</p>
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
                                        <img src="/img/res-tag-01.jpg" alt="res-tag-01" />
                                        <span><a href="/products/dynamics-365-copilot/">Copilot</a></span>
                                        <p>Microsoft Copilot: The Catalyst for Transformation in Your Business - Download Now!</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/products/dynamics-365-copilot/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <img src="/img/res-tag-02.jpg" alt="res-tag-01" />
                                        <span><a href="/white-papers/">Whitepaper</a></span>
                                        <p>The Future of Finance Management</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/white-papers/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <img src="/img/res-tag-03.jpg" alt="res-tag-01" />
                                        <span><a href="/guides/">Ebook</a></span>
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/guides/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <img src="/img/res-tag-04.jpg" alt="res-tag-01" />
                                        <span><a href="/erp-implementation-cost-calculator/">Calculator</a></span>
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
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
