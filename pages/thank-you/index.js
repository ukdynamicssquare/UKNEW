import Head from 'next/head';
import Link from "next/link";
import FooterHide from '../../components/FooterHide';
const ThankYou = () => {

  return (
    <>
      <Head>
        <title>Thank You | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/thank-you/"
        />
      </Head>
      <section className="thnak-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 align-self-center">
                <div className='iner-divv'>
                <h1>Thank You !</h1>
                <p>Hi there,</p>
                <p>Thank you for contacting Dynamics Square! We’re excited to help you streamline your business with Microsoft Dynamics 365.</p>
                <p>Our team will be in touch soon to discuss your needs. </p>
                <p>Until then, stay updated with our latest updates and insights on <a href="https://www.linkedin.com/showcase/dynamics-square-uk/" target="_blank" ><b>LinkedIn</b></a>. </p>
              <div className="text-left">
                <div>
                  <a href="/" className="btn-get-started scrollto">
                    <span>Back to Home</span>
                  </a>
                </div>
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

export default ThankYou;
