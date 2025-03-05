import Head from 'next/head';
import useSectionScroll from '../hooks/useSectionScroll';


export default function Home() {
  // Initialize the section scroll behavior with default settings.
  useSectionScroll();

  return (
    <>
    <Head>
      <title>test slide</title>
    <meta name="robots" content="noindex, nofollow" />
    </Head>
      {/* Full-page panels */}
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-primary text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 1</h1>
        <p>Content for Section 1</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-secondary text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 2</h1>
        <p>Content for Section 2</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-success text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 3</h1>
        <p>Content for Section 3</p>
      </div>
      <div
        className="panel vh-100 d-flex flex-column align-items-center justify-content-center bg-danger text-white text-center p-4"
        style={{ transform: 'translateZ(0)' }}
      >
        <h1>Section 4</h1>
        <p>Content for Section 4</p>
      </div>
    </>
  );
}
