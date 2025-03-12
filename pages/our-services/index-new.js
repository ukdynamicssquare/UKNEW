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
              <button 
          id="scrollToSection2" 
          className="btn btn-light mt-3"
          // onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          onClick={() => goToSection(1)}
        >
          Go to Section 2
        </button>
              <div className="text-center">
                <Link href="#kasd"><a
                  className="btn-get-started scrollto"
                >
                  <span>Schedule a Demo</span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='kasd' className="panel" style={{ transform: 'translateZ(0)',backgroundColor:'rgb(244 240 250)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <h2>Microsoft Business Applications,
                Tailored for Your Success</h2>
              <p>At Dynamics Square, we have the Microsoft expertise, solutions and experience to help you navigate continual change—whether it’s to solve the most formidable business challenge or seize the next big opportunity.</p>
              <div className="text-center text-lg-start">
                <Link href="#kasd"><a
                  className="btn-get-started scrollto"
                >
                  <span>Schedule a Demo</span></a>
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


      <section id='kasd' className="panel" style={{ transform: 'translateZ(0)'}}>
        <div className="container">
          <div className="row">
          <div className='col-lg-6 align-self-center'>
              <div className='bacg-over'>
              <Image src="/img/our-ser-01.png" width={363} height={321} alt="Our Services" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <h2>Microsoft Business Applications,
                Tailored for Your Success</h2>
              <p>At Dynamics Square, we have the Microsoft expertise, solutions and experience to help you navigate continual change—whether it’s to solve the most formidable business challenge or seize the next big opportunity.</p>
              <div className="text-center text-lg-start">
                <Link href="#kasd"><a
                  className="btn-get-started scrollto"
                >
                  <span>Schedule a Demo</span></a>
                </Link>
              </div>
            </div>
           
          </div>
        </div>
      </section>

      <section id='kasd' className="panel" style={{ transform: 'translateZ(0)',backgroundColor:'rgb(244 240 250)'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <h2>Microsoft Business Applications,
                Tailored for Your Success</h2>
              <p>At Dynamics Square, we have the Microsoft expertise, solutions and experience to help you navigate continual change—whether it’s to solve the most formidable business challenge or seize the next big opportunity.</p>
              <div className="text-center text-lg-start">
                <Link href="#kasd"><a
                  className="btn-get-started scrollto"
                >
                  <span>Schedule a Demo</span></a>
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







    </>
  );
}

export default Inedex;
