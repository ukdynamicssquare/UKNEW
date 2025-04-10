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
                                        <span>Tell me more &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
                                            <span>Schedule a Free Call Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
                                        <span>Schedule a Free Call Today! &nbsp;<i className="bi bi-arrow-right"></i></span> </a>
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
                            <div className="pin-wrapper">
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
                                <div className='product-side-002-ext'>
                                    <p>Companies that switch to an AI-powered ERP see up to a 40% increase in efficiency. <br /><br />Don’t lag behind. Make it happen today!</p>
                                    <div className="text-lg-start">
                                        <Link href="#exampleModal"><a
                                            data-bs-toggle="modal"
                                            className="btn-get-started scrollto"
                                        >
                                            <span>Schedule a Free Call Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 align-self-center'>
                            <div className='product-side-002-img001'>
                                <img src="/img/n-013.png" alt="Card 6" />

                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/n-014.png" alt="Card 6" className='n-014' />
            </section>


            <section className='solution-new-cta'>
                <div className='asd'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-10'>
                                <div className='solution-new-cta-001'>
                                    <span className='solution-new-cta-t'>CASE STORY</span>
                                    <h3>Learn How UK Defence Apparel Maker Boosted Efficiency By Up To 50% with Business Central.</h3>
                                    <div>
                                        <Link href="#exampleModal"><a
                                            data-bs-toggle="modal"
                                            className="btn-get-started scrollto"
                                        >
                                            <span>Read Case Story &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>



            <section className='solution-new-banner-five'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Business Central Benefits: You Can’t Afford to Ignore</h2>
                                <p>Every business needs more than just accounting software. You need an integrated and centralised system that connects every department seamlessly. Here’s what Dynamics 365 Business Central covers:</p>
                            </div>
                        </div>
                    </div>
                    <div className='row g-3'>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 d-flex'>
                            <div className='solution-new-card-001'>
                                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>

                        <div className='col-lg-7 d-flex'>
                            <div className='solution-new-card-001-p'>
                                <p>No need to juggle multiple tools when one solution does it all. Unify your business and accelerate growth.</p>
                                <Link href="#exampleModal"><a
                                    data-bs-toggle="modal"
                                    className="btn-get-started scrollto"
                                >
                                    <span>Click For a Free Personalised Demo Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='solution-new-six'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Copilot in Dynamics 365 Business Central: ERP with AI Capabilities</h2>
                                <p>What if your ERP wasn’t just a system but an intelligent assistant that worked alongside you? Copilot in Dynamics 365 Business Central brings AI-powered automation, smart insights, and real-time assistance to transform how your business operates. No more guesswork, no more wasted hours: just seamless efficiency!</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='solution-new-six-img'>
                                <img src="/img/solution-new-six-img.png" alt="New Solution" />
                            </div>
                        </div>
                    </div>
                    <div className='row g-3 m-t-4'>
                        <div className='col-lg-4'>
                            <div className='solution-new-six-card'>
                                <h3>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-six-card'>
                                <h3>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-six-card'>
                                <h3>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-six-card'>
                                <h3>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-six-card'>
                                <h3>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-six-card'>
                                <h3>Finance & Accounting</h3>
                                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='solution-new-cta slution-new-cta-two'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-cta-001'>
                                <h3>Act Now or Watch Others Take the Lead</h3>
                                <p>Every moment without an integrated and AI-powered system is a lost opportunity, wasted time, and unnecessary expense. Choose Business Central: The Smartest ERP for Your Business!</p>
                                <p>If Not Now, When?</p>
                                <div>
                                    <Link href="#exampleModal"><a
                                        data-bs-toggle="modal"
                                        className="btn-get-started scrollto"
                                    >
                                        <span>Read Case Story &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/n-015.png" alt="n-015" />
            </section>

            <section className='solution-new-pricing'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='solution-new-banner-sub-head'>
                                <h2>Copilot in Dynamics 365 Business Central: ERP with AI Capabilities</h2>
                                <p>What if your ERP wasn’t just a system but an intelligent assistant that worked alongside you? Copilot in Dynamics 365 Business Central brings AI-powered automation, smart insights, and real-time assistance to transform how your business operates. No more guesswork, no more wasted hours: just seamless efficiency!</p>
                            </div>
                        </div>
                    </div>

                    <div className='row g-3'>
                        <div className='col-lg-4'>
                            <div className='solution-new-pricing-card'>
                                <h3>Business Central<span>Essentials</span>
                                </h3>
                                <h4>£57.50<span>/user/month</span></h4>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-pricing-card col-ff3'>
                                <h3>Business Central<span>Essentials</span>
                                </h3>
                                <h4>£57.50<span>/user/month</span></h4>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='solution-new-pricing-card'>
                                <h3>Business Central<span>Essentials</span>
                                </h3>
                                <h4>£57.50<span>/user/month</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='s-options-end'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="solution-new-banner-sub-head">
                                <h2>Business Central Support Services: Downtime Isn’t an Option</h2>
                                <p>Time is crucial in business, and as a trusted Dynamics 365 Business Central implementation partner in the UK, Dynamics Square understands this thing pretty well. We make every second count! No matter if you’re migrating, optimising, troubleshooting, or scaling, you have access to our fast, expert support that keeps your operations running, without disruptions, delays, or costly mistakes.</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-7 order-2'>
                            <div className='row'>
                                <div className='col-lg-6 d-flex'>
                                    <div className='card557'>
                                        <div className='card-233-body'>
                                            <h3><span><i className="bi bi-check2"></i></span>Automated Follow-ups</h3>
                                        </div>
                                        <p>Sends personalized email follow-ups after customer interactions.</p>

                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='card557'>
                                        <div className='card-233-body'>
                                            <h3><span><i className="bi bi-check2"></i></span>Financial Accuracy</h3>
                                        </div>
                                        <p>Helps with budgeting and forecasting by analyzing historical data.</p>

                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='card557'>
                                        <div className='card-233-body'>
                                            <h3><span><i className="bi bi-check2"></i></span>Inventory Management</h3>
                                        </div>
                                        <p>Uses predictive analytics to find the best stock levels and cut down on waste.</p>

                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='card557'>
                                        <div className='card-233-body'>
                                            <h3><span><i className="bi bi-check2"></i></span>Procurement Simplification</h3>
                                        </div>
                                        <p>Automates vendor comparisons and purchase order creation.</p>

                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='card557'>
                                        <div className='card-233-body'>
                                            <h3><span><i className="bi bi-check2"></i></span>Compliance Assistance</h3>
                                        </div>
                                        <p>Tracks regulatory changes and suggests updates to policies.</p>

                                    </div>
                                </div>
                                <div className='col-lg-6 d-flex'>
                                    <div className='card557'>
                                        <div className='card-233-body'>
                                            <h3><span><i className="bi bi-check2"></i></span>Report Generation</h3>
                                        </div>
                                        <p>Creates detailed financial and operational reports on demand.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 order-1'>
                            <div className='img-backs-sid'>
                                <img src="/img/n-016.png" alt="copil-side" className='im-two' />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/img/n-017.png" alt="copil-side" className='im-one-17' />
            </section>


            <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Business Central?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="https://www.dynamicssquare.co.uk/blog/what-is-dynamics-365-business-central/">
                          <a target="_blank">
                            <b>Dynamics 365 Business Central</b>
                          </a>
                        </Link>
                        &nbsp;is a one-stop solution for all your enterprise
                        needs. Since Business Central is built with excel-like
                        features and easy-to-use navigation, anyone exposed to
                        advanced excel functionality can easily adapt and
                        leverage the powerful use of Business Central.
                      </p>
                      <p>
                        Business Central is designed as a complete{" "}
                        <Link href="/products/microsoft-dynamics-erp/">
                          <a target="_blank">
                            <b>ERP solution</b>
                          </a>
                        </Link>{" "}
                        for modern enterprises seeking to simplify end-to-end
                        enterprise practices from financials to sales,
                        warehousing to supply chain, project management to
                        general reporting, assembly to manufacturing; Business
                        Central is embedded with all potential business
                        management solutions that give you real-time eyes into
                        your business.&nbsp;
                      </p>
                      <p>
                        You can host your application whether on cloud (private
                        or public) or on-premise; the choice is yours. When it
                        comes to{" "}
                        <Link href="https://www.dynamicssquare.co.uk/blog/what-is-dynamics-365-business-central/">
                          <a target="_blank">
                            <b>Dynamics 365 Business Central Overview</b>
                          </a>
                        </Link>
                        , it comprises huge things.&nbsp;
                      </p>
                      <p>
                        To get more information about Business Central, how it
                        works, and how it can transform your business context,
                        do contact Dynamics Square. Our{" "}
                        <Link href="/">
                          <a target="_blank">
                            <strong>
                              Dynamics 365 Business Central experts
                            </strong>
                          </a>
                        </Link>{" "}
                        can assist you with the right and precise information.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      How is Business Central related to Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is the updated version of <Link href="/products/microsoft-dynamics-nav/"><a target="_blank">Dynamics NAV</a></Link>. With its upgrade, Microsoft changed its name
                      too. The Core functionality remains the same and is
                      updated with advanced features and navigation to support
                      modern enterprises and to serve every industry. However,
                      existing Dynamics NAV users can still avail of the support
                      services. Dynamics Square offers highly reliable and
                      efficient NAV and Business Central Support Services at
                      cost-effective rates.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      How do I upgrade to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Often, enterprises seem confused about when is the right
                        time to upgrade to Dynamics 365 Business Central. If the
                        same question is rolling out in your mind, contact{" "}
                        <Link href="/">
                          <a target="_blank">
                            <strong>Dynamics Square</strong>
                          </a>
                        </Link>
                        . We provide free-system health-check to identify your
                        system lacks and upgrading needs considering your
                        current business practices. Our experts can let you know
                        whether you are in need to upgrade your current system
                        or not.
                      </p>
                      <p>
                        To know more about Why move to Dynamics 365 Business
                        Central?&nbsp;
                        <Link href="/contact-us/">
                          <a target="_blank">
                            <b>Contact our Dynamics 365 experts</b>
                          </a>
                        </Link>
                        , we can help you with all your questions. For instance,
                        when you need to upgrade, what are possible personalized
                        options for you? What sort of implementation practices
                        do we follow while upgrading your existing business
                        solution to Microsoft Dynamics 365 Business Central?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      Is there any training available to understand Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Microsoft Dynamics 365 Business Central comes with a
                        simple, easy-to understand user interface and provides a
                        smooth experience to all users, whether administrators
                        or operators. There might be a need for training to
                        understand the workings of added integrations,
                        customizations, and add-ons. In such a case, you can
                        avail yourself of the learning and training provided by
                        your Business Central implementation partner, and they
                        will guide you along the right path.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                      Can I customise Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, Business Central is totally customisable as per
                        your unique business and its changing needs.
                        Irrespective of the industry, business type, and size,
                        you can customise this powerful application to simplify
                        your business operations. In short, customizations are
                        the path to more productivity and easy business growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      What industries can Dynamics 365 Business Central Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      Dynamics 365 Business Central is designed in such a way
                      that any industry from retailers to manufacturers, food &
                      beverages to operations, e-commerce industry to financial
                      services, and more can avail of seamless support in terms
                      of Dynamics 365 business central. Moreover, Business
                      Central can be personalized as per your industry-specific
                      needs, or custom operational navigation takes place in
                      your organization.To get more information about how this
                      ERP solution can be implemented and leveraged by your
                      specific industry, talk to us, we as a Business Central
                      Consulting Services Provider are here to answer all your
                      queries.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      How much does Dynamics 365 Business Central cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <Link href="/dynamics-365-business-central-pricing-licensing/">
                          <a target="_blank">Dynamics 365 Business Central pricing</a>
                        </Link>{" "}
                        goes as per your specific business processes. You can
                        choose out of the given licensing options:
                      </p>
                      <ul>
                        <li>Essential</li>
                        <li>Premium</li>
                        <li>Team Member</li>
                      </ul>
                      <p>
                        Essential plan comes to fulfil your essential business
                        requirement whereas premium comes with extra
                        functionality layers.
                      </p>
                      <ul>
                        <li>
                          For Dynamics 365 Business Central Essential plan, you
                          will be charged £52.80 per user/per month.
                        </li>
                        <li>
                          For Dynamics 365 Business Central Premium plan, you
                          need to invest £75.40 per user/per month.
                        </li>
                        <li>
                          For Dynamics 365 Business Central Team Member, users
                          will be charged £5.82 per user/per month.
                        </li>
                      </ul>
                      <p>
                        If you manage processes like finance, purchase/sales,
                        and inventory, an essential license would be an ideal
                        deal for your business to start your journey.
                      </p>
                      <p>
                        If you are a manufacturer and provide services, a
                        premium license would be the best-suitable way to start
                        with.
                      </p>
                      <p>
                        So, it's up to you, you can buy Business Central suited
                        to your specific needs or user requirements. To know
                        more or which plan would be ideal for your business,
                        Dynamics Square - Microsoft authorized Business Central
                        Consulting Services provider can help.
                      </p>
                      <p>
                        Here you need to understand that this cost is just a
                        licensing cost, it doesn't include any sort of
                        implementation, customization, or integration cost. Your
                        actual costs can be revealed by your Dynamics 365
                        Business Central Implementation Partner once you share
                        your requirement with them.
                      </p>
                      <p>
                        Initially, you can start with Microsoft{" "}
                        <Link href="/blog/dynamics-365-business-central-trial/">
                         <a target="_blank">Business Central Trial</a>
                        </Link>{" "}
                        at no cost for 30 days. After your trial period, if you
                        find Business Central - a suitable deal for your
                        business, you can continue by availing any of the given
                        licensing suited to your budget and requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How do I get ongoing support for Dynamics 365 Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        You will get direct support from Dynamics Square as we
                        are a gold partner for Microsoft's products with
                        existence in the UK market and other global locations
                        with a well-equipped support system. Our support system
                        includes end-user training, technical assistance, and
                        off-hours support whenever required.
                      </p>
                      <p>
                        If you are seeking professional and trustworthy support
                        services, selecting Dynamics Square - a trustworthy
                        Business Central Support Partner in the UK can help.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      How does Power BI Fit with Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central is an all-in-one ERP solution. In case
                        you want advancement in your reporting &amp; analytics
                        terms, seamless integration with <Link href="/products/microsoft-power-bi/"><a target="_blank">Power BI</a></Link> can be done as both are Microsoft's products, hence, Power BI fits well
                        with Dynamic 365 Business Central. Power BI can enable
                        visualization in your reporting, key metrics, and your
                        entire business analytics. You can create your own
                        business reports and dashboards leveraging standard
                        reporting templates and other visuals.
                      </p>
                      <p>
                        If you want expert advice on how you can leverage Power
                        BI and Business Central together, connect with us, being
                        a reliable <Link href="/d365-business-central-support/"><a target="_blank">Business Central Support</a></Link>, <Link href="/dynamics-nav-to-business-central/"><a target="_blank">NAV Upgrade</a></Link>, and Implementation partner, we can always provide you with
                        expert consulting.
                      </p>
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

export default NewSolution;
