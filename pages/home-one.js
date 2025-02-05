import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Mousewheel, Autoplay } from 'swiper';


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
                                    <h1>UK's Trusted Microsoft Solutions Partner</h1>
                                    <h2>We future-proof your business
                                        with scalable Microsoft solutions</h2>
                                    <p>Enabling smooth growth and transformation as your business evolves</p>
                                    <a href="#exampleModal" data-bs-toggle="modal" className='btn btn-home'><img src='/img/buttion-ic-1.png' alt='icons' /> Get started <span><i className="bi bi-arrow-right-circle"></i></span></a>

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
                            <div className='col-md-8'>
                                <div className='new-title-heading'>
                                    <h2>Why Work with Us?</h2>
                                    <p>At Dynamics Square, we don’t just implement Microsoft solutions—we help businesses unlock their full potential. As your trusted Microsoft Business Solutions Partner, we transform the way you work by turning challenges into opportunities with tailored consulting, seamless implementation, and dedicated support.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 d-flex'>
                                <div className='accive-new-list'>
                                    <span>350+</span>
                                    <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='accive-new-list'>
                                    <span>150+</span>
                                    <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='accive-new-list'>
                                    <span>350+</span>
                                    <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='accive-new-list'>
                                    <span>12+</span>
                                    <p>Microsoft-certified technical consultants are just a call away to help you out</p>
                                </div>
                            </div>
                        </div>
                        <div className='row case-div-o'>
                            <div className='col-lg-12'>
                                <h3>See how our customers drive impact</h3>
                            </div>

                            <div className='col-lg-3 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-1.jpg" alt="case-imgs-1" />
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-2.jpg" alt="case-imgs-2" />
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-1.jpg" alt="case-imgs-1" />
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-666'>
                                    <div className='crad-img'>
                                        <img src="/img/case-imgs-4.jpg" alt="case-imgs-4" />
                                        <p>UK's top sexual wellness brand improved productivity by up to 68%</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="#">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-12 text-center to-22'>
                                <a href="#" className='btn-red btn'>Explore more use cases <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gra-sc'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Our Services, Simplified</h2>
                                    <p>At Dynamics Square, we don’t just implement Microsoft solutions—we help businesses unlock their full potential. As your trusted Microsoft Business Solutions Partner, we transform the way you work by turning challenges into opportunities with tailored consulting, seamless implementation, and dedicated support.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40'>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-01.png" alt="serve-ic-01" />
                                        <h3>Consulting</h3>
                                        <p>We analyze your current processes and identify areas where Microsoft Dynamics can add value, ensuring every feature aligns with your needs.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-02.png" alt="serve-ic-02" />
                                        <h3>Implementation</h3>
                                        <p>From Business Central to Dynamics 365 Finance and beyond, we handle every detail for a smooth, disruption-free deployment.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-03.png" alt="serve-ic-03" />
                                        <h3>Upgrade</h3>
                                        <p>Our team works behind the scenes to keep your systems running at peak performance while you focus on growing your business.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
                                </div>
                            </div>
                            <div className='col-lg-3 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <img src="/img/serve-ic-04.png" alt="serve-ic-04" />
                                        <h3>Ongoing Support</h3>
                                        <p>Our team works behind the scenes to keep your systems running at peak performance while you focus on growing your business.</p>
                                    </div>
                                    {/* <a href="#">Read more</a> */}
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
                                    <h2>Our Industry Expertise</h2>
                                    <p>At Dynamics Square, we don’t just implement Microsoft solutions—we help businesses unlock their full potential. As your trusted Microsoft Business Solutions Partner, we transform the way you work by turning challenges into opportunities with tailored consulting, seamless implementation, and dedicated support.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40'>
                            <div className='col-lg-4 d-flex'>
                                <div className='card-668'>
                                    <a href="#">
                                        <img src="/img/ind-i-01.jpg" alt="serve-ic-01" />
                                        <h3>Education</h3>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 d-flex'>
                                <div className='card-668'>
                                    <a href="#">
                                        <img src="/img/ind-i-03.jpg" alt="serve-ic-01" />
                                        <h3>Manufacturing</h3>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 d-flex'>
                                <div className='card-668'>
                                    <a href="#">
                                        <img src="/img/ind-i-01.jpg" alt="serve-ic-01" />
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
                                    <h2>How We Works? It’s Simple.</h2>
                                </div>
                            </div>
                        </div>

                        <div className='row g-4 m--t-40'>
                            <div className='col-lg-6 d-flex'>
                                <div className='card-669'>
                                    <img src="/img/card-669-01.png" alt="card-669-01" />
                                    <h3>Understand Your Needs</h3>
                                    <p>We’ll start with a deep dive into your business challenges and objectives.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <img src="/img/card-669-02.png" alt="card-669-01" />
                                    <h3>Craft the Solution</h3>
                                    <p>Using Microsoft’s suite of tools, we design a customized roadmap for your transformation.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <img src="/img/card-669-03.png" alt="card-669-01" />
                                    <h3>Seamless Deployment</h3>
                                    <p>Our team handles everything from integration to training, so you can hit the ground running.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 d-flex'>
                                <div className='card-669 '>
                                    <img src="/img/card-669-04.png" alt="card-669-01" />
                                    <h3>Support that Scales</h3>
                                    <p>With ongoing monitoring and optimization, we ensure your solutions evolve as your business grows.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>



        </>
    );
}

export default HomeOne;
