import React from 'react';
import MultiStepForm from '../components/MultiStepForm';
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
            <MultiStepForm />

            </section>
            <FooterHide />
        </div>
    );
}

export default TestForm;
