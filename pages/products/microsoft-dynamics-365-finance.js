import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../public/data/finance_faq.json';
import useCardScrollEffect from "../../components/useCardScrollEffect";
import BcPopPdf from '../../components/BCPdfPopup';
import NavBar from '../../components/NavBar';
import BlogFinanaceCard from '../../components/BlogFinanaceCard';



// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const BusinessCentral = () => {
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

  const [pdfType, setPdfType] = useState(null);
  const handleOpenModal = (type) => {
    setPdfType(type);
    // Open modal manually (needed since you use Bootstrap)
    const modal = new bootstrap.Modal(document.getElementById('pdfModel'));
    modal.show();
  };

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Finance Partner | Dynamics Square</title>
        <meta
          name="description"
          content="Boost your financial visibility and faster your financial decision making by implementing Microsoft Dynamics 365 Finance. Book a free consultation today."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Finance Partner | Dynamics Square" />
        <meta property="og:description" content="Boost your financial visibility and faster your financial decision making by implementing Microsoft Dynamics 365 Finance. Book a free consultation today." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Dynamics-365-Finance-Banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Finance Partner | Dynamics Square" />
        <meta property="twitter:description" content="Boost your financial visibility and faster your financial decision making by implementing Microsoft Dynamics 365 Finance. Book a free consultation today." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Dynamics-365-Finance-Banner.png" />

      </Head>

      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Finance</h1>
                <span className='large-heading'>Deploy AI-powered Dynamics 365 Finance with a proven 106 percent ROI in three years.</span>
                <p>Boost your organisation's ability to develop, modify, and control budgets, while enabling faster financial decision-making with Microsoft Dynamics 365 Finance.</p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Tell me more &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
              <div className='m-b-image'>
                <Image src="/img/Dynamics-365-Finance-Banner.png" alt='Dynamics-365-Finance-Banner' width={1098} height={657} />
              </div>
            </div>

          </div>
        </div>
        <div className="solution-new-banner-one-img solution-new-banner-one-img-f">
          <Image src="/img/f-mobile-banner.png" alt="New Solution" width={1237} height={993} className="flot-1" />
          {/* <img src="/img/n-003.png" alt="New Solution" className="flot-2" />
          <img src="/img/n-004.png" alt="New Solution" className="flot-3" />
          <img src="/img/n-005.png" alt="New Solution" className="flot-4" /> */}
          <div className='flot-5  flot-5-a'>
            <img src="/img/menu-icons/dynamics-365-finance.svg" alt="New Solution" className="flot-img" width={48} height={48} />
          </div>
          {/* <div className='flot-121'>
                        <div className='border-11'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='border-12'>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='border-13'>
                            <span></span>
                          
                        </div>
                    </div> */}

        </div>
        <div className='container' id='section1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head r-top-60'>
                <h2>What is dynamics 365 Finance?</h2>
                <p>Microsoft Dynamics 365 Finance is an enterprise-grade ERP software solution that helps organisations achieve financial accuracy and transparency. Implementing Dynamics 365 Finance enables you to track and monitor your financial operations in real-time, predict financial outcomes, and manage global risks to drive agility while maximising growth in your business.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>See It in Action  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>


                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='image-list-new'>
                <p><b>Rated highly by leading tech platforms</b></p>
                <div className="image-list-new-im">
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-01.png" alt="rartin-log-01" width={140} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-02.png" alt="rartin-log-01" width={204} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-03.png" alt="rartin-log-01" width={130} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-04.png" alt="rartin-log-01" width={129} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-05.png" alt="rartin-log-01" width={155} height={54} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />

      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          {/* <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Implementation: <br/>Why Your Business Needs It</h2>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/ff-finance-side.png" width={535} height={455} alt="New Solution" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="New Solution" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Dynamics 365 Finance Implementation: <br />Why Your Business Needs It</h2>
                </div>
                <p>If you face these challenges, your financial health is already at risk.</p>
                <p>You need a single finance system that gives accuracy, automation, and intelligence. This is where Dynamics 365 Finance helps you gain control.</p>
                <p>Companies using Dynamics 365 Finance have observed faster book closure, improved cash flow, and better profit margins.</p>
                <p>Whether your organisation is growing across cities or expanding worldwide, Dynamics 365 Finance gives the strength and clarity you need.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal" ><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule Your Finance Demo Now  &nbsp;<i className="bi bi-arrow-right"></i></span> </a>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id='section3' className='solution-new-banner-three'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Inside Dynamics 365 Finance: What Powers Your Business</h2>
                <p>Run finance with confidence using Dynamics 365 Finance. Replace manual entries with automation, remove delays with AI powered insights, and eliminate compliance risks with real-time control. Here’s how it transforms finance for your enterprise:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting</h3>
                      <p>Handling accounts manually? Every delay and mistake hits margins. With Dynamics 365 Finance, you get:</p>
                      <ul>
                        <li>Automated journal entries and reconciliations to close faster.</li>
                        <li>AI powered forecasts to stay ahead of cash flow risks.</li>
                        <li>Built in compliance support to stay audit ready always.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-01.png" width={574} height={369} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Intelligent Cash & Collections</h3>
                      <p>Liquidity gaps slow growth and create stress. Dynamics 365 for Finance helps you:</p>
                      <ul>
                        <li>Monitor cash flow with predictive analytics.</li>
                        <li>Automate collections with rules and AI based reminders.</li>
                        <li>Reduce write offs and improve payment timelines.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-02.png" width={574} height={360} alt="Card 2" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smart Budgeting & Forecasting</h3>
                      <p>Guesswork in planning costs both money and trust. With Dynamics 365 Finance, you:</p>
                      <ul>
                        <li>Create intelligent budget proposals from historical data.</li>
                        <li>Run rolling forecasts that adjust as numbers change.</li>
                        <li>Save time and redirect effort toward strategy.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-03.png" width={574} height={360} alt="Card 3" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Global Scale & Compliance</h3>
                      <p>Growth across regions adds complex financial rules. Dynamics 365 Finance ensures you:</p>
                      <ul>
                        <li>Manage multi entity and multi-currency in one place.</li>
                        <li>Stay compliant with local tax and reporting requirements.</li>
                        <li>Handle electronic invoicing and regulatory changes smoothly.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-04.png" width={584} height={369} alt="Card 4" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Seamless Integrations: Finance Connected</h3>
                      <p>Disconnected systems weaken decision making. Dynamics 365 Finance integrates with:</p>
                      <ul>
                        <li>Microsoft 365 for productivity and collaboration.</li>
                        <li>Power BI for advanced financial dashboards.</li>
                        <li>Partner apps to expand capabilities without disruption.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-05.png" width={571} height={369} alt="Card 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row t-80'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>See Dynamics 365 Finance Results: A Total Economic Impact™ Study</h2>
                <p>A study by Forrester found that companies running Dynamics 365 Finance cut legacy costs, boosted productivity, and achieved remarkable ROI.</p>
                <div className="text-lg-start">
                  {/* <a className="btn-get-started scrollto" href="/pdf/TheTEIOfAMigrationToMicrosoftDynamics365BusinessCentral.pdf" target="_blank">
                    <span>Get the Full Report &nbsp;<i className="bi bi-arrow-right"></i></span></a> */}

                  {/* <button
                    className="btn-get-started scrollto pdf-dd"
                    onClick={() => handleOpenModal('pdf1')}
                  >Get the Full Report* &nbsp;<i className="bi bi-arrow-right"></i>
                  </button>
                  <p className='disclm'>*This report was commissioned by Microsoft and conducted by Forrester Consulting. All rights belong to their respective owners.</p> */}

                </div>
              </div>
            </div>
          </div>
          <div className='row t-81'>
            <div className='col-lg-4 d-flex'>
              <div className='icons-box-9901'>
                <img src="/img/bc-8-01.png" width={65} height={65} alt="bc-8-01" />
                <h5>106%</h5>
                <span>ROI over 3 years</span>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='icons-box-9901'>
                <img src="/img/bc-8-02.png" width={65} height={65} alt="bc-8-02" />
                <h5>$3.9M</h5>
                <span>Legacy cost savings</span>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='icons-box-9901'>
                <img src="/img/bc-8-03.png" width={65} height={65} alt="bc-8-03" />
                <h5>$8.9M</h5>
                <span>Productivity improvements</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>Power Your Finance Future</span>
                  <h3>Drive growth with AI-driven insights, automation, and control across every financial decision.</h3>
                  <div>
                    <Link href="/contact-us/"><a

                      className="btn-get-started scrollto"
                    >
                      <span>Get Started Today &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Benefits: <br />The Edge Every Business Needs</h2>
                <p>Every successful enterprise has one thing in common: they run finance on systems that drive growth, not slow it down. Dynamics 365 Finance is the clarity and control your business needs. As a Dynamics 365 Finance partner, we make sure you get the most out of this Microsoft cloud ERP.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Close Books Faster, With Accuracy</h3>
                    <p>Still taking weeks to reconcile and report? Dynamics 365 Finance automates journal entries, reconciliations, and reporting so your team closes books in days, not months.</p>
                  </li>
                  <li>
                    <h3>Strengthen Cash Flow & Reduce Risk</h3>
                    <p>Unclear visibility into cash can choke expansion. With predictive analytics and AI powered forecasts, you see cash flow in real time and act before problems hit.</p>
                  </li>
                  <li>
                    <h3>Automate Collections & Protect Margins</h3>
                    <p>Chasing payments drains resources. With Copilot, automate collections, predict customer payment behaviour, and cut write offs while improving on time payments.</p>
                  </li>
                  <li>
                    <h3>Plan with Confidence, Not Guesswork</h3>
                    <p>Budgeting errors cost growth. Dynamics 365 Finance uses intelligent budget proposals and rolling forecasts, helping you align strategy with real data instead of assumptions.</p>
                  </li>
                  <li>
                    <h3>Scale Globally Without Compliance Headaches</h3>
                    <p>Expanding across countries adds complexity. Dynamics 365 Finance supports multi entity, multi-currency, and global compliance so you stay aligned with local tax and regulatory requirements everywhere. </p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p>Companies that implement Dynamics 365 Finance have reported faster closings, stronger compliance, and productivity improvements worth millions.</p>
                  <div className="text-lg-start">
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Claim Your Free Consultation!  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/n-013.png" width={513} height={510} alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
          <img src="/img/n-014.png" width={604} height={958} alt="Card 6" />
        </div>
      </section>




      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Modules: <br />Everything Finance Demands, Together</h2>
                <p>Enterprises need more than basic accounting tools. You need an intelligent, centralised system that unifies global finance, strengthens compliance, and delivers AI powered insights.</p>
                <p>Here’s what Dynamics 365 Finance covers:</p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-01.png" width={48} height={49} alt="ff-finance-i-01" />
                <h3>Financial Planning & Analysis</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-02.png" width={48} height={49} alt="ff-finance-i-02" />
                <h3>Accounting & Financial Close</h3>
                <p>Automated journal entries, reconciliations, and faster financial closing cycles.</p>

              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-03.png" width={48} height={49} alt="ff-finance-i-03" />
                <h3>Cash & Treasury Management</h3>
                <p>Real time cash flow tracking, predictive liquidity insights, and credit risk automation.</p>

              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-04.png" width={48} height={49} alt="ff-finance-i-04" />
                <h3>Tax Management</h3>
                <p>Centralised tax rules, automated calculation, and regulatory compliance across regions.</p>

              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-05.png" width={48} height={49} alt="ff-finance-i-05" />
                <h3>Quote to Cash</h3>
                <p>AI driven billing, collections automation, and smarter accounts receivable management.</p>

              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-06.png" width={48} height={49} alt="ff-finance-i-06" />
                <h3>Global Compliance & Governance</h3>
                <p>Multi-currency, multi entity, and country specific regulatory support in one system.</p>

              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-07.png" width={48} height={49} alt="ff-finance-i-07" />
                <h3>Subscription & Revenue Management</h3>
                <p>Flexible recurring billing, contract management, and revenue recognition automation.</p>

              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-08.png" width={48} height={49} alt="ff-finance-i-08" />
                <h3>Expense & Cost Management</h3>
                <p>Automated expense reporting, cost tracking, and role-based approvals to control spend.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/ff-finance-i-09.png" width={48} height={49} alt="ff-finance-i-09" />
                <h3>AI (Copilot) & Business Intelligence</h3>
                <p>Predictive insights, automated reports, and real time decision support with Microsoft Copilot.</p>
              </div>
            </div>

            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>Why manage finance with scattered tools when one intelligent system brings everything together? Unify your finance and accelerate growth with Dynamics 365 Finance. </p>
                {/* <a style={{cursor:'pointer'}} onClick={() => handleOpenModal('pdf4')}
                  className="btn-get-started"
                >
                  <span>Download Business Central Capability Guide* &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                   <p className='disclm'>This document is published by Microsoft. Dynamics Square is sharing it for informational purposes only as a Microsoft Solutions Partner. All content and rights belong to Microsoft Corporation. </p> */}
              </div>

            </div>

          </div>
        </div>
      </section>
      <section id='section6' className='solution-new-six'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Copilot in Dynamics 365 Finance: AI That Redefines Finance</h2>
                <p>What if your finance system worked like a strategic advisor instead of a record keeper? Copilot in Dynamics 365 Finance brings AI powered intelligence, automation, and real-time insights to finance leaders. It eliminates bottlenecks and accelerates financial clarity.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='solution-new-six-img'>
                <Image src="/img/solution-new-six-img.png" width={1282} height={383} alt="New Solution" />
              </div>
            </div>
          </div>
          <div className='row g-3 m-t-4'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Enhanced Collections Management</h3>
                <p>Summarise account details, track overdue payments, and identify customers with pending balances instantly.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Plan with Precision</h3>
                <p>Budgeting, forecasting, and scenario planning powered by AI means finance leaders can respond faster with data backed decisions.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Get Instant Financial Insights</h3>
                <p>Spot trends, market shifts, and demand patterns with data captured in real time to support faster decisions.</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Automate Manual Tasks</h3>
                <p>Cut repetitive finance activities through automation and save time with AI-generated summaries.</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Stay Ahead with Predictive Intelligence</h3>
                <p>Detect financial risks and opportunities before they impact business outcomes with proactive intelligence.</p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Simplify Compliance and Reporting</h3>
                <p>Generate accurate reports, automate tax processes, and keep pace with changing regulations confidently.</p>

              </div>
            </div>

            <div className='col-lg-12'>
              <div className='text-center'>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Book a Demo!  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id='section7' className='solution-new-banner-fives'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Make Business Central Work Smarter<br /> for Your Business</h2>
                <p>Add trusted apps that help shape Business Central around your needs. From payments to mobility, reporting to sales, find tools that fit right in and make daily work easier. </p>
              </div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/shopify-connector-business-central/">
                  <img src="/img/bc-8-13.png" width={273} height={192} alt="bc-8-13" />
                  <h3>Shopify Connector</h3>
                  <p>Keep stock, orders, and customer details in sync</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/blog/yavrio-integration-with-business-central/">
                  <img src="/img/bc-8-14.png" width={273} height={192} alt="bc-8-14" />
                  <h3>Bank Feeds and Payments</h3>
                  <p>Handle bank transactions and payments directly from Business Central</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/continia-for-dynamics-365-business-central/">
                  <img src="/img/bc-8-15.png" width={273} height={192} alt="bc-8-15" />
                  <h3>Document Management</h3>
                  <p>Scan, store, and track documents without switching systems</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/wms-for-business-central/">
                  <img src="/img/bc-8-16.png" width={273} height={192} alt="bc-8-16" />
                  <h3>Mobile WMS</h3>
                  <p>Pick, pack, and move stock on the go with handheld devices</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>The Right Time for Smarter Finance Is Now</h3>
                <p>Every day without an intelligent finance system means higher risks, delayed insights, and missed savings. Choose Dynamics 365 Finance ERP: The Smartest Cloud Finance Solution for Modern Enterprises.</p>
                <p>Don’t Wait. Take the Step Toward Intelligent Finance. </p>
                <div>
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Try Dynamics 365 Finance Today  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="n-015" />
      </section>

      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Pricing & Licensing</h2>
                <p>Financial clarity drives better decisions, faster growth, and lasting resilience. With Dynamics 365 Finance, businesses in the UK gain the power to simplify complexity, strengthen control, and scale with confidence.</p>
              </div>
            </div>
          </div>

          <div className='row g-3 justify-content-center'>
            {/* <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Free Trial</span>
                </h3>
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <h4>£0.0*</h4>
                <a href="#exampleModal"  data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Try for Free </a>
                <p className='disclm'>*Get a 30-day free trial to see it for yourself.</p>
              </div>
            </div> */}
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365<span>Finance</span>
                </h3>
                <p>Take control with an intelligent and automated financial management platform built to support accuracy, compliance, and speed.</p>
                <h4>£161.50<span>per user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 <span>Finance Premium</span>
                </h3>
                <p>Equip your teams with advanced business performance tools for sharper decisions and stronger outcomes.</p>
                <h4>£230.70<span>per user/month <br />(billed annually)</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>


          </div>
          {/* <div className='row'>
            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>No hidden fees. No overpriced customisations. Just the right tools to power your business.
                  The Cost of Doing Nothing? Far Greater. Compare plans and find your perfect fit!</p>
                < a href="/products/dynamics-365-business-central/pricing-licensing" className="btn-get-started scrollto">
                  <span>Learn More! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>


      <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Expand Your Capabilities with Attach Licenses</h2>
                <p>Strengthen Dynamics 365 Finance by attaching other Microsoft business applications at a reduced rate. Pay less while gaining connected power across functions. Perfect for businesses ready to expand without overspending.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='table-responsive table-new-style'>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Attach License Type</th>
                      <th scope="col">Price per User/Month (ex VAT)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sales Attach</td>
                      <td>£16.50</td>
                    </tr>
                    <tr style={{ backgroundColor: '#6f4b801c' }}>
                      <td>Customer Service Attach</td>
                      <td>£16.50</td>
                    </tr>
                    <tr>
                      <td>Field Service Attach</td>
                      <td>£16.50</td>
                    </tr>
                    <tr style={{ backgroundColor: '#6f4b801c' }}>
                      <td>Project Operations Attach</td>
                      <td>£16.50</td>
                    </tr>
                    <tr>
                      <td>Commerce Attach</td>
                      <td>£16.50</td>
                    </tr>
                    <tr style={{ backgroundColor: '#6f4b801c' }}>
                      <td>Supply Chain Management Attach</td>
                      <td>£24.70</td>
                    </tr>
                  </tbody>
                </table>
                <p><b>Note:</b> Actual pricing may vary slightly based on currency conversion, contracts, or Microsoft price changes.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section className="busnes-upgrade-serve-one" style={{ paddingTop: '0px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="solution-new-banner-sub-head">
                <h2>What Dynamics 365 Finance Services Do We Offer?</h2>
                <p>Strategically work towards fulfilling your financial vision with Dynamics Square - most trusted and reliable Microsoft Solutions Partner in UK.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/settings_b.png" alt="settings_b" width={48} height={48} />
                <h3>Implementation</h3>
                <p>Get optimum D365 finance implementation services suited to your customised business needs.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/outbound.png" alt="outbound" width={48} height={48} />
                <h3>Upgrade</h3>
                <p>Bring innovation and drive agility in your financial operations all through D365 Finance Upgrade.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/person_pin.png" alt="person_pin" width={48} height={48} />
                <h3>Support</h3>
                <p>Ensure smoother and uninterrupted flow in your business with our continuous support services.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <img className="image-backx" src="/img/free-cons.png" alt="free-cons" />
                <Image src="/img/forum.png" alt="forum" width={48} height={48} />
                <h3>Consulting</h3>
                <p>Get optimum D365 finance implementation services suited to your customised business needs.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='section9' className='p-t-1-60'>
        <div className='container'>
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head">
              <h2>Get Started with Microsoft Dynamics 365 Finance</h2>
              <p>Reports, e-books, videos, training, and more, everything you need to explore the system.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-02-tab" data-bs-toggle="pill" data-bs-target="#pills-home-02" type="button" role="tab" aria-controls="pills-home-02" aria-selected="false">e-Books</button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-01-tab" data-bs-toggle="pill" data-bs-target="#pills-home-01" type="button" role="tab" aria-controls="pills-home-01" aria-selected="true">Researches</button>
                  </li> */}

                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-03-tab" data-bs-toggle="pill" data-bs-target="#pills-home-03" type="button" role="tab" aria-controls="pills-home-03" aria-selected="false">Podcasts</button>
                  </li>
                  {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-04-tab" data-bs-toggle="pill" data-bs-target="#pills-home-04" type="button" role="tab" aria-controls="pills-home-04" aria-selected="false">Guides</button>
                  </li> */}
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-05-tab" data-bs-toggle="pill" data-bs-target="#pills-home-05" type="button" role="tab" aria-controls="pills-home-05" aria-selected="false">Videos</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-06-tab" data-bs-toggle="pill" data-bs-target="#pills-home-06" type="button" role="tab" aria-controls="pills-home-06" aria-selected="false">White Paper</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-07-tab" data-bs-toggle="pill" data-bs-target="#pills-home-07" type="button" role="tab" aria-controls="pills-home-07" aria-selected="false">Blogs</button>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              {/* <p className='pt-200'><b>Reach new markets with Business Central</b></p> */}
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  {/* <div className="tab-pane fade" id="pills-home-01" role="tabpanel" aria-labelledby="pills-home-01-tab">

                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a onClick={() => handleOpenModal('pdf2')}>
                            <img src="/img/bc-8-18.png" width={273} height={192} alt="bc-8-17" />
                            <h3>Reach new markets with Business Central</h3>
                            <p>Research from Nucleus shows better productivity, lower costs, and stronger control.</p>
                            <div className='ct--a'>
                              <span>Download the report</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a onClick={() => handleOpenModal('pdf1')}>
                            <img src="/img/bc-8-17.png" width={273} height={192} alt="bc-8-18" />
                            <h3>See how firms gained from Business Central</h3>
                            <p>This 2024 Forrester study shows the returns real customers saw after getting started.</p>
                            <div className='ct--a'>
                              <span>Download the study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div> */}
                  <div className="tab-pane fade show active" id="pills-home-02" role="tabpanel" aria-labelledby="pills-home-02-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/dynamics-365-finance/">
                            <img src="/img/nav-guide-pic.png" width={273} height={192} alt="bc-8-17" />
                            <h3>Dynamics 365 Finance Guide </h3>
                            <p>A Quick Start Guide To Dynamics 365 Finance</p>
                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      {/* <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/upgrade-nav-to-business-central/">
                            <img src="/img/dynamics-SCM-Ebook-featured-image.png" width={273} height={192} alt="bc-8-17" />
                            <h3>A Complete Guide to Dynamics SCM</h3>
                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-03" role="tabpanel" aria-labelledby="pills-home-03-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/44hqw-S27D0?si=mCEpK1p1hVAXszlj" target='_blank'>
                            <img src="/img/bc-8-20.png" width={273} height={192} alt="bc-8-20" />
                            <h3>Is Your Business Ready for an ERP System?</h3>
                            <p>Explore key signs, benefits, and steps to ERP readiness with Dynamics Square experts in this episode.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST" target='_blank'>
                            <img src="/img/bc-8-22.png" width={273} height={192} alt="bc-8-22" />
                            <h3>Signs Your Business Is Ready for an ERP System</h3>
                            <p>Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="tab-pane fade" id="pills-home-04" role="tabpanel" aria-labelledby="pills-home-04-tab"><div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                      <div className='card0-01 card0-02'>
                        <a href="/guides/business-central-guide-for-smb/">
                          <img src="/img/chapter5-5.png" width={273} height={192} alt="bc-8-17" />
                          <h3>Comprehensive Business Central Guide for SMBs in 2025</h3>
                          <p>A detailed guide helping SMBs automate operations, improve scalability, and prepare for long-term digital growth.</p>
                          <div className='ct--a'>
                            <span>View this Guide</span>
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>
                  </div> */}
                  <div className="tab-pane fade" id="pills-home-05" role="tabpanel" aria-labelledby="pills-home-05-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/f0EmJkDmpg4?si=8kVDObQ4LcrEHEzO" target='_blank'>
                            <img src="/img/Dynamics-365-Finance-Banner.png" width={273} height={192} alt="bc-8-20" />
                            <h3>Microsoft Dynamics 365 Finance Premium</h3>
                            <p>Introducing business performance management capabilities in Dynamics 365 Finance.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/43S3_bV8ht0?si=F4Tmf_ebE7D7HsOS" target='_blank'>
                            <img src="/img/Dynamics-365-Finance-Banner.png" width={273} height={192} alt="bc-8-21" />
                            <h3>Microsoft Copilot for Finance</h3>
                            <p>Introducing Microsoft Copilot for Finance, the AI assistant for finance professionals.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/0G2HO5dSVoM?si=VfXiFOIQUnK2RuWO" target='_blank'>
                            <img src="/img/Dynamics-365-Finance-Banner.png" width={273} height={192} alt="bc-8-21" />
                            <h3>Get started with the Financial Reconciliation Agent for Copilot for Finance</h3>
                            <p>The Financial Reconciliation Agent in Microsoft 365 Copilot for Finance simplifies and automates</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-06" role="tabpanel" aria-labelledby="pills-home-06-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/white-papers/micorosoft-finance/">
                            <img src="/img/finacne-white-paper-category.png" width={273} height={192} alt="bc-8-17" />
                            <h3>Build Resilience in Your Financial Operations</h3>
                            <p>A maturity model designed to strengthen people, processes, and technology.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-07" role="tabpanel" aria-labelledby="pills-home-07-tab">
                    <div className='row'>
                      <BlogFinanaceCard categorySlug="dynamics-365-finance" />

                    </div>
                  </div>

                </div>
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
                  questions about Dynamics 365 Finance?</h2>
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
      <BcPopPdf pdfType={pdfType} />
    </>
  );
};

export default BusinessCentral;
