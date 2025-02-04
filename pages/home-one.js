import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Mousewheel,Autoplay } from 'swiper';


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
                                    modules={[Navigation, Mousewheel,Autoplay]}
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
                </section>
            </main>



        </>
    );
}

export default HomeOne;
