import Head from 'next/head';
import FooterHide from '../../../components/FooterHide';

const PdfCRMDownload = () => {
  return (
    <>
      <Head>
      <title>Dynamics GP to BC Guide Download | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/guides/download/Pdf-dynamics-gp-to-bc/"
        />
      </Head>
     
      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1 style={{fontSize:'28px !important'}}>A Complete Guide for Microsoft Dynamics GP to BC Migration PDF</h1>
              <div className="text-center">
                <div className="">
                  <a
                    href="/pdf/DynamicsGP-BC-ebook.pdf"
                    className="btn-get-started scrollto"
                    target='_blank'
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
      <FooterHide />
    </>
  );
};

export default PdfCRMDownload;
