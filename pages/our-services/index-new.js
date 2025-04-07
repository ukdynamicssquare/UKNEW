import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";
import useSectionScroll from '../../hooks/useSectionScroll';
const Inedex = () => {
  const { goToSection } = useSectionScroll()
  // useSectionScroll({ excludeSelector: '.horizontal-container' });

  return (
    <>
      <Head>
        <title>Microsoft Dynamics Services | Trusted by 300+ Clients</title>
        <meta
          name="description"
          content="Power your business by our unique Microsoft Dynamics Services that includes Implementation services, cloud migration, consulting services and upgrade."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/our-services/"
        />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Head>


      <section className="panel panel-new-haed" style={{ transform: 'translateZ(0)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h1>OUR SERVICES</h1>
              <h2>Microsoft Business Applications,
                Tailored for Your Success</h2>
              <p>At Dynamics Square, we have the Microsoft expertise, solutions and experience to help you navigate continual change—whether it’s to solve the most formidable business challenge or seize the next big opportunity.</p>
              <a
                id="scrollToSection2"
                className="btn-light"
                // onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                onClick={() => goToSection(1)}
              >
                Scroll Down
                <div class="scroll-down-aaa">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>
      <section id='kasd' className="panel panel-new-haed-side" style={{ transform: 'translateZ(0)', backgroundColor: 'rgb(244 240 250)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <span className='s-ttgs'>Consulting</span>
              <h2>Plan with Confidence,
              Execute with Precision</h2>
              <p>Our expert consultants analyze your business needs and recommend the best Microsoft Dynamics 365 solution. Whether you need process optimization or digital transformation, we help you achieve faster ROI with future-ready strategies.</p>
              <div className="text-center text-lg-start">
                <Link href="/our-services/dynamics-365-consultant/"><a
                  className="btn-get-started scrollto"
                >
                  <span>Find out more <i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='bacg-over'>
                <Image src="/img/our-ser-01.png" width={363} height={321} alt="Our Services" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id='kasd' className="panel panel-new-haed-side" style={{ transform: 'translateZ(0)' }}>
        <div className="container">
          <div className="row">
            <div className='col-lg-6 align-self-center'>
              <div className='bacg-over'>
                <Image src="/img/our-ser-02.png" width={511} height={286} alt="Our Services" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <span className='s-ttgs'>Implementation</span>
              <h2>Seamless Microsoft
              Dynamics 365 Implementation</h2>
              <p>Our end-to-end implementation services ensure a smooth, risk-free transition to Microsoft Dynamics 365. From initial setup to go-live, we help you minimize downtime and maximize efficiency.</p>
              <div className="text-center text-lg-start">
                <Link href="/our-services/dynamics-365-implementation-services/"><a
                  className="btn-get-started scrollto"
                >
                  <span>Find out more <i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id='kasd' className="panel panel-new-haed-side" style={{ transform: 'translateZ(0)', backgroundColor: 'rgb(244 240 250)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <span className='s-ttgs'>Upgrade</span>
              <h2>Stay Ahead with the Latest
              Dynamics 365 Features</h2>
              <p>Running an outdated ERP? Upgrade to the latest Dynamics 365 version with zero disruptions and improved scalability. We handle the entire upgrade process, ensuring your data and workflows remain intact.</p>
              <div className="text-center text-lg-start">
                <Link href="/our-services/dynamics-365-upgrade-services/"><a
                  className="btn-get-started scrollto"
                >
                  <span>Find out more <i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='bacg-over'>
                <Image src="/img/our-ser-03.png" width={350} height={288} alt="Our Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='kasd' className="panel panel-new-haed-side" style={{ transform: 'translateZ(0)' }}>
        <div className="container">
          <div className="row">
            <div className='col-lg-6 align-self-center'>
              <div className='bacg-over'>
                <Image src="/img/our-ser-04.png" width={318} height={274} alt="Our Services" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <span className='s-ttgs'>Support & Training</span>
              <h2>Expert Support,
              Whenever You Need It</h2>
              <p>From troubleshooting to user training, our dedicated support team ensures your Dynamics 365 solution performs optimally. We offer flexible support plans and in-depth training to empower your workforce.</p>
              <div className="text-center text-lg-start">
                <Link href="/our-services/dynamics-365-training/"><a
                  className="btn-get-started scrollto"
                >
                  <span>Find out more <i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id='kasd' className="panel panel-new-haed-side" style={{ transform: 'translateZ(0)', backgroundColor: 'rgb(244 240 250)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <span className='s-ttgs'>Integration Services</span>
              <h2>Connect, Automate, and Scale
              with Smart Integrations</h2>
              <p>Enhance productivity by integrating Dynamics 365 with third-party apps, CRMs, eCommerce platforms, and legacy systems. Our tailored integrations ensure seamless data flow across your business.</p>
              <div className="text-center text-lg-start">
                <Link href="#kasd"><a
                  className="btn-get-started scrollto"
                >
                  <span>Find out more <i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='bacg-over'>
                <Image src="/img/our-ser-05.png" width={335} height={303} alt="Our Services" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gra-scss panel'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-9'>
              <div className='new-title-heading title-heading-center'>
                <h2>Trusted by Businesses Across the UK</h2>

              </div>
            </div>
          </div>

          <div className='row g-3 m--t-40'>
            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
              <div className='card-669 card-669-p card-669-liner'>
                <img src="/img/testimonials/Terence-Turner.png" alt="card-669-01" width={126} height={126} />
                <h3>Terence Turner</h3>
                <span>General Manager</span>
                <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
              <div className='card-669 card-669-p'>
                <img src="/img/testimonials/Jonathan-W.png" alt="card-669-01" width={126} height={126} />
                <h3>Jonathan W</h3>
                <span>Technical Director</span>
                <p>We have worked with Dynamics Square since 2019. Our working relationship has built during this period, and we have found them to be very professional.</p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
              <div className='card-669 card-669-p card-669-liner'>
                <img src="/img/avatar.png" alt="card-669-01" width={126} height={126} />
                <h3>Mark Shaxted</h3>
                <span>Operations Manager</span>
                <p>Dynamics Square has been a solid partner for 4 years, skillfully upgrading our Microsoft Dynamics NAV to Dynamics 365 Business Central. They offer great value and professionalism.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='panel'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 col-sm-12'>
              <div className='new-title-heading'>
                <h2>Why Work with Us?</h2>
                <p>At Dynamics Square, we don’t just implement Microsoft solutions—we help businesses unlock their full potential. As your trusted Microsoft Business Solutions Partner, we transform the way you work by turning challenges into opportunities with tailored consulting, seamless implementation, and dedicated support.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
              <div className='accive-new-list'>
                <span>500+</span>
                <p>Innovative implementations delivered with strategy, precision, and success.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
              <div className='accive-new-list'>
                <span>150+</span>
                <p>Skilled professionals with deep, industry-specific expertise driving innovation.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
              <div className='accive-new-list'>
                <span>14+</span>
                <p>Years of industry mastery, delivering excellence in every solution.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
              <div className='accive-new-list'>
                <span>12+</span>
                <p>Industries transformed with cutting-edge technology and innovation.</p>
              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  );
}

export default Inedex;
