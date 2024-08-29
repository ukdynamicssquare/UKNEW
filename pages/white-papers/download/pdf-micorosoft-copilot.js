import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
const PowerbiPdf = () => {
  return (
    <>
      <Head>
      <title>Microsoft Copilot White Paper| Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/white-papers/download/pdf-micorosoft-copilot/"
        />
      </Head>
     
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1 style={{fontSize:'30px'}}>Microsoft Copilot: The Catalyst for Transformation in Your Business</h1>
              <p>Get Your Copy Now!</p>
              <div className="text-center">
                <div className="">
                  <a
                    href="/pdf/Copilot-UK.pdf"
                    className="btn-get-started scrollto"
                    download
                  >
                    <span>
                      Download <i className="bi bi-file-earmark-pdf"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerbiPdf;
