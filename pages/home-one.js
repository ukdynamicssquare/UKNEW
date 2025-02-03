import React from 'react';
import Head from "next/head";

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
                                    <div className='orbit-container'></div>

                                    <h1>UK's Trusted Microsoft Solutions Partner</h1>
                                    <h2>We future-proof your business
                                        with scalable Microsoft solutions</h2>
                                    <p>Enabling smooth growth and transformation as your business evolves</p>
                                    <a href="" className='btn btn-home'><img src='/img/buttion-ic-1.png' alt='icons' /> Get started <span><i className="bi bi-send"></i></span></a>
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
