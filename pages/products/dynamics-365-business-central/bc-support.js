import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
const BcSupport = () => {
    useCardScrollEffect()

    return (
        <>
            <Head>
                <title>Business Central Support</title>
                <meta name="description" content="Business Central Support" />
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className='solution-new-banner-one'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='solution-new-banner-one-content'>
                                <h1>Microsoft Dynamics 365 Business Central</h1>
                                <span className='large-heading'>Level up with a solution trusted<br /> by over 45,000 SMBs across the world.</span>
                                <p>Bid adieu to data silos, the biggest culprits behind operational inefficiencies. Adopt Business Central, an advanced ERP that comes with out-of-the-box AI capabilities, Microsoft Copilot, and has less than 6 months of payback on investment. </p>
                                <div className="text-center">
                                    <Link href="#exampleModal"><a
                                        data-bs-toggle="modal"
                                        className="btn-get-started scrollto"
                                    >
                                        <span>Tell me more &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                                    </Link>
                                </div>
                            </div>
                            <div className='m-b-image-banner'>
                                <Image src="/img/bc-support-banner.png" alt='bc-support-banner' width={1097} height={656} />
                                <div className='ff-one'>  <span className=''>Dedicated Key Account Manager</span></div>
                                <div className='ff-two'>  <span className=''>Dedicated Key Account Manager</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className='bg-003'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="supprt-header-new-one">
                                <h2>Experience Reliable & Responsive Business Central Support</h2>
                                <p>Do you use Dynamics 365 Business Central and require consistent support? Managing complicated customisations, troubleshooting to avoid disruptions, offering required user training, helping with optimisation, and controlling updates smoothly all depend on dependable Dynamics 365 ERP support.</p>
                                <p>To solve operational problems and improve efficiency, Dynamics Square provides thorough Business Central implementation services. Our knowledgeable staff guarantees your ERP system changes with your company demands and fixes problems fast.</p>
                                <p>As a certified Microsoft Gold Partner in the UK, we offer premium support, proactive diagnostics, and strategic growth solutions. Dynamics Square is your reliable Business Central support partner guaranteeing seamless operations and ongoing development whether you require ad-hoc assistance, prepaid hours, or annual support.</p>
                                <Link href="#exampleModal"><a
                                    data-bs-toggle="modal"
                                    className="btn-get-started scrollto"
                                >
                                    <span>Schedule a Free Call Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                                </Link>
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='support-image--one'>
                                <Image src="/img/bc-support-side-01.png" alt='bc-support' width={402} height={436} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solution-new-banner-three'>
                {/* <div className="container" ref={containerRef}> */}
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Business Central Features: What’s Inside? </h2>
                                <p>Run business with confidence. With Business Central, get rid of disconnected tools and replace inefficiency with automation, guesswork with AI-driven insights, and frustration with seamless control. Here’s how it turns things in favour of your business: </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="stached-scroll-card">
                                <div className='mycard'>
                                    <div className='mycard__inner_two'>
                                        <h3>Ad-Hoc Support</h3>
                                        <div className='mycard__inner_gir'>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Our ad-hoc support services are designed to provide you with the help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>r it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Ou help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='mycard'>
                                    <div className='mycard__inner_two'>
                                        <h3>Prepaid Hours Support</h3>
                                        <div className='mycard__inner_gir'>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Our ad-hoc support services are designed to provide you with the help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>r it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Ou help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div className='mycard'>
                                    <div className='mycard__inner_two'>
                                        <h3>Yearly Support</h3>
                                        <div className='mycard__inner_gir'>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Our ad-hoc support services are designed to provide you with the help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>r it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Ou help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='mycard'>
                                    <div className='mycard__inner_two'>
                                        <h3>End-User Training</h3>
                                        <div className='mycard__inner_gir'>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Our ad-hoc support services are designed to provide you with the help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>r it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                            <div className='mycard__inner_gird-colomn'>
                                                <img src="/img/suppot-icon-001.png" alt="suppot-icon-001" />
                                                <h4>Ad-Hoc Support</h4>
                                                <p>Need immediate assistance? Ou help you need, when you need it. Whether it's a quick question or a complex issue, our team is here to assist you.</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                               



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BcSupport;
