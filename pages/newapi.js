// pages/index.js
import { useState } from 'react';
import staticContent from '../public/data/static-content.json'; // Assuming static content is in a JSON file
import Head from 'next/head';

import dynamic from 'next/dynamic';
const ScrollReveal = dynamic(() => import('../components/ScrollReveal'), {
    ssr: false,
  });

export default function Newapi({ content }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [response, setResponse] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);

        // Simulate fetching AI response or using static content
        if (option === "Option A") {
            setResponse(content.responseA);
        } else if (option === "Option B") {
            setResponse(content.responseB);
        } else {
            setResponse("Sorry, no information available for this option.");
        }

        setCurrentStep(currentStep + 1);
    };

    return (
      <>
      <Head>
        <title>Testing Auto Page</title>
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>
       <div className='container-fluid' style={{background:"#000000",height:"100vh",color:"#ffffff"}}>
       <div style={{ padding: '20px 10px 500px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to Our B2B Platform</h1>

            {currentStep === 0 && (
                <div>
                    <p>{content.question1}</p>
                    {content.options1.map((option, index) => (
                        <button
                            key={index}
                            style={{ margin: '5px', padding: '10px', background: '#ffcc00', border: 'none', cursor: 'pointer' }}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}

            {currentStep === 1 && response && (
                <div>
                    <h2>Your Selection</h2>
                    <p>{response}</p>
                    <button
                        style={{ marginTop: '10px', padding: '10px', background: '#ffcc00', border: 'none', cursor: 'pointer' }}
                        onClick={() => setCurrentStep(0)}
                    >
                        Start Over
                    </button>
                </div>
            )}
        </div>







        <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>
       </div>
      </>
    );
}

export async function getStaticProps() {
    // Load the static content during build time
    return {
        props: {
            content: staticContent,
        },
    };
}
