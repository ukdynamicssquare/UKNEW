import React from 'react';
import MultiStepFormNew from '../components/MultiStepFormNew';
import Head from 'next/head';
import FooterHide from '../components/FooterHide';

const TestForm = () => {
    
    return (
        <div>
            <Head>
                <title>test form</title>
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <section>
            <MultiStepFormNew />




            </section>
            <FooterHide />
        </div>
    );
}

export default TestForm;
