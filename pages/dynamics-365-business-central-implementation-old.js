import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../public/data/business_centeral_faq.json';
import useCardScrollEffect from "../components/useCardScrollEffect";

const BusinessCentralImplementation = () => {
  /*gsap card scroll*/
  // const containerRef = useRef(null);
  // useGsapScrollCards(containerRef);
  /*gsap card scroll*/

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  return (
    <>
      <Head>
        <title>
          Dynamics 365 Business Central Implementation | Dynamics Square™
        </title>
        <meta
          name="description"
          content="Get fast, efficient Microsoft dynamics 365 Business Central implementation with Dynamics Square UK – tailored ERP solutions for UK businesses of all sizes."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/dynamics-365-business-central-implementation/"
        />
        <meta name="robots" content="noindex, nofollow" />

      </Head>

      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Business Central</h1>
                <span className='large-heading'>Dynamics 365 Business Central Support Services</span>
                <p>Dynamics Square's Dynamics 365 Business Central Support Services can help you to improve your business operations. Our all-encompassing support guarantees the smooth operation of your Microsoft ERP solution, therefore enabling you to concentrate on efficiency and expansion. </p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Tell me more &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
              <div className='m-b-image-banner'>
                <Image src="/img/bc-support-banner.png" alt='bc-support-banner' width={1097} height={656} />
                <div className='ff-one'>  <span className=''>Dedicated Key Account Manager</span></div>
                <div className='ff-two'>  <span className=''>Rapid Issue Resolution</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <section className='bg-003'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="supprt-header-new-one">
                <h2>Experience Reliable & Responsive Business Central Support</h2>
                <p>Do you use <a href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</a> and require consistent support? Managing complicated customisations, troubleshooting to avoid disruptions, offering required user training, helping with optimisation, and controlling updates smoothly all depend on dependable Dynamics 365 ERP support.</p>
                <p>To solve operational problems and improve efficiency, Dynamics Square provides thorough Business Central implementation services. Our knowledgeable staff guarantees your ERP system changes with your company demands and fixes problems fast.</p>
                <p>As a certified Microsoft Gold Partner in the UK, we offer premium support, proactive diagnostics, and strategic growth solutions. Dynamics Square is your reliable Business Central support partner guaranteeing seamless operations and ongoing development whether you require ad-hoc assistance, prepaid hours, or annual support.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Schedule a Free Call Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='support-image--one'>
                <Image src="/img/bc-support-side-01.png" alt='bc-support' width={402} height={436} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-004'>
        <div className="container">
          <div className='row' style={{ paddingBottom: '20px' }}>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Benefits of Implementing<br />
                  Dynamics 365 Business Central</h2>
                <p>Implementing Business Central is not about replacing legacy systems. It’s about recalibrating how your business runs structurally, financially, and strategically.</p>
                <p>Here’s what actually changes when Business Central is implemented right:</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-01.png" alt="serv-01" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-02.png" alt="serv-02" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-03.png" alt="serv-03" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-04.png" alt="serv-04" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-05.png" alt="serv-05" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-06.png" alt="serv-06" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-07.png" alt="serv-07" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <img src="/img/serv-08.png" alt="serv-08" width="32" height="32" />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-8'>
              <div style={{ paddingTop: '20px' }}>
                <p><b>With all these aforementioned benefits, it’s time to make your business agile!</b></p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Book a Free Consultation Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-005'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Why the Right Implementation Partner Matters</h2>
                <p><b>Is it important to go with an experienced Business Central implementation partner?</b></p>
                <p>Research by Gartner reveals a striking reality: Between 55% and 75% of ERP initiatives don’t hit the mark on their objectives, leaving businesses with untapped potential and unmet goals.</p>
                <p>So, what does this research indicate? The intervention of a Dynamics 365 implementation partner who holds expertise in your business domain becomes crucial. With 11+ industries penetrated, Dynamics Square can help you avoid these frequently made ERP implementation mistakes</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-6 d-flex'>
              <div className='card-671'>
                <h3>Lack of a Clear Implementation Plan</h3>
                <p>Without a structured plan, businesses end up with unnecessary delays, budget overruns, and feature misalignment.</p>
                <p>Dynamics Square has certified Microsoft consultants with deep industry expertise. They analyse your business and devise a detailed Business Central implementation project plan. This helps ensure a seamless transition from planning to execution.</p>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='card-671'>
                <h3>Lack of a Clear Implementation Plan</h3>
                <p>Without a structured plan, businesses end up with unnecessary delays, budget overruns, and feature misalignment.</p>
                <p>Dynamics Square has certified Microsoft consultants with deep industry expertise. They analyse your business and devise a detailed Business Central implementation project plan. This helps ensure a seamless transition from planning to execution.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='solution-new-banner-three'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Implementation Methodology: A Proven Approach</h2>
                <p>Dynamics Square is a certified Microsoft partner that helps businesses get the most out of Dynamics 365 Business Central implementation. Speaking of Business Central implementation methodology, we follow Microsoft Sure Step methodology, which enables us to build a clear path from challenge to solution. Our approach blends proven frameworks with real-world agility, ensuring faster rollouts, minimal risk, and systems that are ready to grow with you.</p>
                <p>Here’s a sneak peek into how the implementation takes place, in general:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting </h3>
                      <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                      <ul>
                        <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                        <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-01.jpg" width={580} height={408} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting </h3>
                      <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                      <ul>
                        <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                        <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-02.jpg" width={580} height={408} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting </h3>
                      <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                      <ul>
                        <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                        <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-03.jpg" width={580} height={408} alt="Card 1" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-006'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>The Role of AI and Automation in Business Central Implementation</h2>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-6 d-flex'>
              <div className='card-672'>
                <img src="/img/rectang-04.png" alt="rectang-04" />
                <h3>Copilot in Microsoft Business Central: AI That Works for You</h3>
                <p>With out-of-the-box Microsoft Copilot integration, your teams have an assistant that automates repetitive tasks, analyses financial data at the blink of an eye, and helps in making data-driven decisions. Copilot in Microsoft Business Central takes efficiency to the next level by:</p>
                <ul>
                  <li>Automating invoice processing and approvals </li>
                  <li>Providing real-time business insights through AI-powered reporting </li>
                  <li>Enhancing customer interactions with intelligent forecasting </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='card-672'>
                <img src="/img/rectang-05.png" alt="rectang-04" />
                <h3>Copilot in Microsoft Business Central: AI That Works for You</h3>
                <p>With out-of-the-box Microsoft Copilot integration, your teams have an assistant that automates repetitive tasks, analyses financial data at the blink of an eye, and helps in making data-driven decisions. Copilot in Microsoft Business Central takes efficiency to the next level by:</p>
                <ul>
                  <li>Automating invoice processing and approvals </li>
                  <li>Providing real-time business insights through AI-powered reporting </li>
                  <li>Enhancing customer interactions with intelligent forecasting </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className='bg-005'>
        <div className='container'>
          <div className="row">
          <div className="col-lg-7">
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Implementation Cost: What to Expect?</h2>
                <p>Need clarity on Business Central implementation cost? While costs vary based on business size and requirements, here’s what to expect:</p>
                <div className='ol-list'>
                  <div className='ol-listitem'>
                  Implementation Stage
                  </div>
                  <div className='ol-listitem'>
                  Licensing
                  </div>
                  <div className='ol-listitem'>
                  Customization
                  </div>
                  <div className='ol-listitem'>
                  Data Migration
                  </div>
                  <div className='ol-listitem'>
                  Training
                  </div>
                  <div className='ol-listitem'>
                  Support & Maintenance
                  </div>
                </div>
                <p>Dynamics Square ensures you get maximum value for your investment without overspending. Besides, you can use our ERP implementation cost calculator to calculate the actual cost of implementation.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Calculate Your ERP Cost &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className='col-lg-5 align-self-center'>
              <div className='support-image--one'>
                <Image src="/img/rectang-06.png" alt='bc-support' width={513} height={510} />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>Frustrated with slow support, costly add-ons, and surface-level fixes? Not anymore.</h3>
                <p>Get a dedicated team, resolve issues faster, anytime, pay only for the support you utilise, and be a witness to transparent communication.</p>
                <p>If Not Now, When?</p>
                <div>
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Your Free Demo Today!  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="n-015" />
      </section>
      <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Dynamics Square: Your Hand-Holding Partner</h2>
                <p>At Dynamics Square, we believe in going beyond issue resolution and working as an extension of your team. Our support approach is proactive, strategic, and human-centric. Here’s what makes us your ideal partner:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 order-1 align-self-center'>
              <div className='row'>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Dedicated Support Team</h3>
                    </div>
                    <p>Work with certified Business Central consultants who understand your industry and business goals.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Timely Communication</h3>
                    </div>
                    <p>Expect rapid response times, clear updates, and complete transparency at every stage.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Growth-Focused Solutions</h3>
                    </div>
                    <p>Our focus is on assisting you in scaling, from daily issue resolution to long-term system enhancement.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Microsoft-Certified Excellence</h3>
                    </div>
                    <p>As a trusted Microsoft Solutions Partner, we adhere to best practices and deliver value-driven results.</p>

                  </div>
                </div>


              </div>
            </div>
            <div className='col-lg-5 order-2'>
              <div className='img-backs-sid'>
                <Image src="/img/n-016.png" alt="copil-side" width={401} height={455} className='im-two' />
              </div>
            </div>
          </div>
        </div>
     
      </section>



      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Have you got
                  questions about Business Central?</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </div>
            </div>
          </div>


          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              )}
            </div>
          </div>




        </div>
      </section>

    </>


  );
};

export default BusinessCentralImplementation;
