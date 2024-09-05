import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
const IndustriesList = () => {
  return (
    <>
      <Head>
        <title>Dyanmics 356 for Industries | Dynamics Square</title>
        <meta
          name="description"
          content="Power the growth of your industry by implementing Dynamics 365 Business applications. Our Dynamics 365 experts have the expertise to assist you in any time."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>


      <div className="heo-banner-industry">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="indu-heading-cenetr">
                <h1>Unlock the Power of Dynamics 365 Tailored to Your Industry Needs</h1>
                <p>Explore how Dynamics 365 transforms your industry, empowering your business to innovate, grow, and succeed.</p>
                <a href="" className="btn">Contact Us</a>
                <span>Discover how we can customize Dynamics 365<br />
                  for your specific business needs.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bott-in-imag">
          <div className="lef-p">
            <img src="/img/ll-pic.png" alt="picture" />
          </div>
          <div className="right-p">
            <img src="/img/rr-pic.png" alt="picture" />
          </div>
        </div>
      </div>

      <section className="bg-gradin-bl">
        <div className="container">
          <header className="section-header">
            <h2>Choose your Industry</h2>
          </header>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one">
                <a href="">
                  <div className="pic">
                    <img src="/img/rectangle-01.jpg" alt="Manufacturing" />
                    <h3>Manufacturing</h3>
                  </div>
                  <div className="pic-body">
                    <h4>Streamline Processes <br/> Maximise Production </h4>
                    <ul>
                      <li>Increased Inventory Management </li>
                      <li>Improved Production Planning </li>
                      <li>Streamlined Quality Control </li>
                    </ul>
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one">
                <a href="">
                  <div className="pic">
                    <img src="/img/rectangle-02.jpg" alt="Retail " />
                    <h3>Retail </h3>
                  </div>
                  <div className="pic-body">
                    <h4>Digitalise Retail <br/>Empower Customers </h4>
                    <ul>
                      <li>Personalised Customer Experiences </li>
                      <li>Optimised Inventory Management </li>
                      <li>RSeamless Omnichannel Retailing </li>
                    </ul>
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one">
                <a href="">
                  <div className="pic">
                    <img src="/img/rectangle-03.jpg" alt="Healthcare" />
                    <h3>Healthcare</h3>
                  </div>
                  <div className="pic-body">
                    <h4>Boost Patient Care <br/>Maximise Efficiency </h4>
                    <ul>
                      <li>Better Patient Care </li>
                      <li>Enriched Clinical Efficiency </li>
                      <li>Efficient Medical Administration </li>
                    </ul>
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one">
                <a href="">
                  <div className="pic">
                    <img src="/img/rectangle-04.jpg" alt="Financial Services " />
                    <h3>Financial Services </h3>
                  </div>
                  <div className="pic-body">
                    <h4>Simplify Finances <br/>Utilise Automation </h4>
                    <ul>
                      <li>Proactive Customer Support </li>
                      <li>Improved Risk Management</li>
                      <li>Smooth Omnichannel Experience </li>
                    </ul>
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one">
                <a href="">
                  <div className="pic">
                    <img src="/img/rectangle-05.jpg" alt="Professional Services " />
                    <h3>Professional Services </h3>
                  </div>
                  <div className="pic-body">
                    <h4>Delight Customers <br/>Build Strong Relationships </h4>
                    <ul>
                      <li>Boosted Project Visibility </li>
                      <li>Improved Resource Optimisation </li>
                      <li>Amplified Client Satisfaction </li>
                    </ul>
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one">
                <a href="">
                  <div className="pic">
                    <img src="/img/rectangle-06.jpg" alt="Logistics and Transportation " />
                    <h3>Logistics and Transportation </h3>
                  </div>
                  <div className="pic-body">
                    <h4>Optimise Logistics <br/>Drive Efficiency </h4>
                    <ul>
                      <li>Greater Supply Chain Control </li>
                      <li>Real-time Supply Chain Tracking </li>
                      <li>Reduced Warehouse Costs </li>
                    </ul>
                    <span>Learn More</span>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="ind-index-heading">
                    <h2>Why Choose Us </h2>
                    <h3>Your Business. Our Expertise </h3>
                    <p>We’re more than a service provider; we're your strategic partner in growth. From simplifying business operations to resolving critical errors, our tailored solutions are designed to drive efficiency, improve profitability, and deliver exceptional results. </p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="indut-icon-card-one">
                <img src="/img/in-icon-01.png" alt="Successful Implementation" width={40} height={40} />
                <h4>Successful Implementation</h4>
                <p>350+ Businesses Trust Us: Successful businesses have chosen us for transformative results. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="indut-icon-card-one">
                <img src="/img/in-icon-02.png" alt="Successful Implementation" width={40} height={40} />
                <h4>Certified Professionals</h4>
                <p>150+ Consultants are just a call away: Our expert consultants are always ready to assist you. </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="indut-icon-card-one">
                <img src="/img/in-icon-03.png" alt="Successful Implementation" width={40} height={40} />
                <h4>Quick Turnaround Time</h4>
                <p>24/7 Availability for Constant Growth: We're committed to your success, offering round-the-clock assistance</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="indut-icon-card-one">
                <img src="/img/in-icon-04.png" alt="Successful Implementation" width={40} height={40} />
                <h4>Long-term commitment</h4>
                <p>14+ Years of Industrial Experience: Leverage our deep-rooted industry knowledge and proven track record. </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};
export default IndustriesList;
