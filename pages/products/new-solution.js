import { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useGsapScrollCards from '../../hooks/useGsapScrollCards';
// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const NewSolution = () => {
    /*gsap card scroll*/
    const containerRef = useRef(null);
    useGsapScrollCards(containerRef);
    /*gsap card scroll*/
    return (
        <>
            <Head>
                <title>New Solution</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content="New Solution" />

            </Head>
            <div className='solution-new-banner-one'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='solution-new-banner-one-content'>
                                <h1>Microsoft Dynamics 365 Business Central</h1>
                                <span className='large-heading'>Level up with a solution trusted by<br />
                                    over 45,000 SMBs across the world.</span>
                                <p>Bid adieu to data silos, the biggest culprits behind operational inefficiencies. Adopt an ERP that comes with out-of-the-box AI capabilities, Microsoft Copilot, and has less than 6 months of payback on investment.</p>
                                <div className="text-center">
                                    <Link href="#exampleModal"><a
                                        data-bs-toggle="modal"
                                        className="btn-get-started scrollto"
                                    >
                                        <span>Tell me more</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solution-new-banner-one-img">
                    <img src="/img/n-001.png" alt="New Solution" className=" flot-1" />
                    <img src="/img/n-003.png" alt="New Solution" className="flot-2" />
                    <img src="/img/n-004.png" alt="New Solution" className="flot-3" />
                    <img src="/img/n-005.png" alt="New Solution" className="flot-4" />
                    <div className='flot-5'>
                        <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="New Solution" className="flot-img" />
                    </div>
                    {/* <div className='flot-121'>
                        <div className='border-11'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='border-12'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='border-13'>
                            <span></span>
                          
                        </div>
                    </div> */}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='solution-new-banner-sub-head r-top-60'>
                                    <h2>What is Business Central?</h2>
                                    <p>It is what you need to outperform your competition and make your business thrive. It is an integrated, AI-powered, cloud-based ERP that has got you covered on all fronts: efficiency, scalability, and profitability.</p>

                                    <p>Adopt the best ERP system of 2024 to give a complete makeover to your operations. Transform your business from reactive to proactive by making it agile, intelligent, and up-to-date.</p>
                                    <div className="text-center text-lg-start">
                                        <Link href="#exampleModal"><a
                                            data-bs-toggle="modal"
                                            className="btn-get-started scrollto"
                                        >
                                            <span>Schedule a Free Call Today!</span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="solution-new-banner-two">
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Business Central Implementation: How Does It Help?</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='product-side-001'>
                                <div className="flot-8">
                                    <img src="/img/n-006.png" alt="New Solution" />
                                </div>
                                <img src="/img/n-007.png" alt="New Solution" className="flot-9" />
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='product-side-002-content'>
                                <p><b>If by any chance you are facing any of these issues, you are in deep trouble.</b></p>

                                <p>You need an integrated system that has AI and automation capabilities. This is where Business Central comes to your rescue.</p>

                                <p>Organisations that have implemented Dynamics 365 Business Central have managed to save up to 30% on operational costs.</p>

                                <p>No matter if you are a startup looking for a budget-friendly business solution or a growing business searching for a future-proof solution, Business Central is what you need!</p>
                                <div className="text-lg-start">
                                    <Link href="#exampleModal"><a
                                        data-bs-toggle="modal"
                                        className="btn-get-started scrollto"
                                    >
                                        <span>Schedule a Free Call Today!</span></a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='solution-new-banner-three'>
                <div className="container" ref={containerRef}>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Business Central Implementation: How Does It Help?</h2>
                                <p>Run business with confidence. With Business Central, get rid of disconnected tools and replace inefficiency with automation, guesswork with AI-driven insights, and frustration with seamless control. Here’s how it turns things in favour of your business:</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pin-wrapper" style={{ minHeight: '200vh' }}>
                                <div className="cards">
                                    <div className="custom-card card1" style={{ zIndex: 2 }}>
                                        <div className="card1-content">
                                            <div className="card1-content-inner">
                                                <h3>Automated Finance & Accounting</h3>
                                                <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                                                <ul>
                                                    <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                                                    <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                                                    <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                                                </ul>
                                            </div>
                                            <div className="card1-content-img">
                                                <img src="/img/n-008.png" alt="Card 1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="custom-card card2" style={{ zIndex: 3 }}>
                                        <div className="card1-content">
                                            <div className="card1-content-inner">
                                                <h3>Automated Finance & Accounting</h3>
                                                <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                                                <ul>
                                                    <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                                                    <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                                                    <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                                                </ul>
                                            </div>
                                            <div className="card1-content-img">
                                                <img src="/img/n-009.png" alt="Card 2" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="custom-card card3" style={{ zIndex: 4 }}>
                                        <div className="card1-content">
                                            <div className="card1-content-inner">
                                                <h3>Automated Finance & Accounting</h3>
                                                <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                                                <ul>
                                                    <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                                                    <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                                                    <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                                                </ul>
                                            </div>
                                            <div className="card1-content-img">
                                                <img src="/img/n-010.png" alt="Card 3" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="custom-card card4" style={{ zIndex: 5 }}>
                                        <div className="card1-content">
                                            <div className="card1-content-inner">
                                                <h3>Automated Finance & Accounting</h3>
                                                <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                                                <ul>
                                                    <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                                                    <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                                                    <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                                                </ul>
                                            </div>
                                            <div className="card1-content-img">
                                                <img src="/img/n-011.png" alt="Card 4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="custom-card card5" style={{ zIndex: 6 }}>
                                        <div className="card1-content">
                                            <div className="card1-content-inner">
                                                <h3>Automated Finance & Accounting</h3>
                                                <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get:</p>
                                                <ul>
                                                    <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                                                    <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline.</li>
                                                    <li>Automated invoicing & bank reconciliation to eliminate costly human errors.</li>
                                                </ul>
                                            </div>
                                            <div className="card1-content-img">
                                                <img src="/img/n-012.png" alt="Card 5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solution-new-banner-four'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Business Central Benefits: You Can’t Afford to Ignore</h2>
                                <p>Every successful business has one thing in common: they run on systems that work for them, not against them. Dynamics 365 Business Central is the edge you need to outperform your competitors.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='product-side-002'>
                                <ul>
                                    <li>
                                        <h3>Scale Without the Growing Pains</h3>
                                        <p>Struggling to keep up with increasing orders, expanding teams, or multi-location operations? Business Central automates and streamlines processes, ensuring you can scale effortlessly, with clarity and control!</p>
                                    </li>
                                    <li>
                                        <h3>Scale Without the Growing Pains</h3>
                                        <p>Struggling to keep up with increasing orders, expanding teams, or multi-location operations? Business Central automates and streamlines processes, ensuring you can scale effortlessly, with clarity and control!</p>
                                    </li>
                                    <li>
                                        <h3>Scale Without the Growing Pains</h3>
                                        <p>Struggling to keep up with increasing orders, expanding teams, or multi-location operations? Business Central automates and streamlines processes, ensuring you can scale effortlessly, with clarity and control!</p>
                                    </li>
                                    <li>
                                        <h3>Scale Without the Growing Pains</h3>
                                        <p>Struggling to keep up with increasing orders, expanding teams, or multi-location operations? Business Central automates and streamlines processes, ensuring you can scale effortlessly, with clarity and control!</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    );
}

export default NewSolution;
