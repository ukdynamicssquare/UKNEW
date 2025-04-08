import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
const NewSolution = () => {
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
                                <span className='large-heading'>Level up with a solution trusted by<br/>
                                    over 40,000 SMBs across the world.</span>
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
                    {/* <div className='border-11'> 
                        <span></span>
                        <span></span>
                    </div>
                    <div className='border-12'> 
                        <span></span>
                        <span></span>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default NewSolution;
