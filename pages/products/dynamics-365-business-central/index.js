import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/business_centeral_faq.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";


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

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Business Central Partner UK</title>
        <meta
          name="description"
          content="We are the UK's leading Microsoft Dynamics 365 Business Central partner offering our cost-effective and reliable services to SMBs. Schedule a free demo today!"
        />
        <meta name="keywords" content="Microsoft Dynamics 365 Business Central, Business Central UK, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Business Dynamics 365, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365,Microsfot 365 Business, Microsoft Bc, Microsoft Business Central Pricing UK, Microsoft Business Central Partner, Business Central Integration, MS Dynamics Business Central, Business Central Support"></meta>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Business Central Partner UK" />
        <meta property="og:description" content="We are the UK's leading Microsoft Dynamics 365 Business Central partner offering our cost-effective and reliable services to SMBs. Schedule a free demo today!" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Business Central Partner UK" />
        <meta property="twitter:description" content="We are the UK's leading Microsoft Dynamics 365 Business Central partner offering our cost-effective and reliable services to SMBs. Schedule a free demo today!" />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />

      </Head>

      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Business Central</h1>
                <span className='large-heading'>Level up with a solution trusted<br /> by over 45,000 SMBs across the world.</span>
                <p>Eliminate data silos, the biggest culprits behind operational inefficiencies. Adopt Dynamics 365 Business Central (D365 BC), an advanced ERP that comes with out-of-the-box AI capabilities, Microsoft Copilot, and has less than 6 months of payback on investment.</p>
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
                <Image src="/img/bc-mobile-banner.png" alt='bc-mobile-banner' width={1098} height={657} />
              </div>
            </div>

          </div>
        </div>
        <div className="solution-new-banner-one-img">
          <Image src="/img/banner-tt-01.png" alt="New Solution" width={1920} height={948} className="flot-1" />
          {/* <img src="/img/n-003.png" alt="New Solution" className="flot-2" />
          <img src="/img/n-004.png" alt="New Solution" className="flot-3" />
          <img src="/img/n-005.png" alt="New Solution" className="flot-4" /> */}
          <div className='flot-5'>
            <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="New Solution" className="flot-img" width={48} height={48} />
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
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head r-top-60'>
                <h2>What is Dynamics 365 Business Central?</h2>
                <p>Dynamics 365 Business Central is a complete business system from Microsoft that brings your core operations into one smart system. Stay steady, save time, and make better decisions as your business keeps moving forward with this AI-powered ERP.</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> One system for finance, sales, and stock</li>
                  <li><i className="bi bi-check2"></i> Out-of-the-box Copilot</li>
                  <li><i className="bi bi-check2"></i> Real-time data for faster, clearer decisions</li>
                </ul>
                <div className="text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Try for Free  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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

      <section className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Implementation: How Does It Help?</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/n-006.png" width={513} height={455} alt="New Solution" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="New Solution" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <p><b>If by any chance you are facing any of these issues, you are in deep trouble. </b></p>

                <p>You need an integrated system that has AI and automation capabilities. This is where Business Central ERP comes to your rescue. </p>

                <p>Organisations that have <a href="/dynamics-365-business-central-implementation/" target='_blank'>implemented Dynamics 365 Business Central</a> have managed to save up to 30% on operational costs.</p>

                <p>Whether starting small or growing fast, D365 Business Central is what you need.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Your Free Demo!  &nbsp;<i className="bi bi-arrow-right"></i></span> </a>
                  </Link>
                </div>
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
                <h2>Dynamics 365 Business Central Features: What’s Inside? </h2>
                <p>Run business with confidence with Business Central cloud ERP. Get rid of disconnected tools and replace inefficiency with automation, guesswork with AI-driven insights, and frustration with seamless control. Here’s how it turns things in favour of your business:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* <div className="pin-wrapper">
                <div className="cards">
                  <div className="custom-card card1" style={{ zIndex: 2 }}>
                    <div className="card1-content">
                      <div className="card1-content-inner">
                        <h3>Automated Finance & Accounting </h3>
                        <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                        <ul>
                          <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                          <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                          <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline. </li>
                        </ul>
                      </div>
                      <div className="card1-content-img">
                        <Image src="/img/n-008.png" width={574} height={369} alt="Card 1" />
                      </div>
                    </div>
                  </div>

                  <div className="custom-card card2" style={{ zIndex: 3 }}>
                    <div className="card1-content">
                      <div className="card1-content-inner">
                        <h3>Smart Inventory & Supply Chain </h3>
                        <p>Every product you mismanage is money lost. Business Central ensures you: </p>
                        <ul>
                          <li>Avoid stockouts with demand forecasting. </li>
                          <li>Cut carrying costs by ordering just the right amount. </li>
                          <li>Automate vendor & purchase order management to reduce delays. </li>
                        </ul>
                      </div>
                      <div className="card1-content-img">
                        <Image src="/img/n-009.png" width={574} height={360} alt="Card 2" />
                      </div>
                    </div>
                  </div>

                  <div className="custom-card card3" style={{ zIndex: 4 }}>
                    <div className="card1-content">
                      <div className="card1-content-inner">
                        <h3>AI-Driven Insights: With Out-of-the-box Copilot </h3>
                        <p>Your competitors are using data to make smarter, faster decisions; are you? With Business Central, you: </p>
                        <ul>
                          <li>Get real-time dashboards to track sales, expenses & customer behaviour. </li>
                          <li>Use predictive analytics to anticipate trends and demand shifts. </li>
                          <li>Optimise pricing & marketing strategies using AI-driven insights. </li>
                        </ul>
                      </div>
                      <div className="card1-content-img">
                        <Image src="/img/n-010.png" width={574} height={360} alt="Card 3" />
                      </div>
                    </div>
                  </div>

                  <div className="custom-card card4" style={{ zIndex: 5 }}>
                    <div className="card1-content">
                      <div className="card1-content-inner">
                        <h3>Sales CRM: Close More Deals, Faster </h3>
                        <p>Your sales team shouldn’t waste time manually tracking leads or missing follow-ups. Business Central empowers them to: </p>
                        <ul>
                          <li>Automate lead nurturing so no opportunity slips through the cracks. </li>
                          <li>Track every customer interaction for personalised service. </li>
                          <li>Turn data into sales strategies and know what works, and double down. </li>
                        </ul>
                      </div>
                      <div className="card1-content-img">
                        <Image src="/img/n-011.png" width={584} height={369} alt="Card 4" />
                      </div>
                    </div>
                  </div>

                  <div className="custom-card card5" style={{ zIndex: 6 }}>
                    <div className="card1-content">
                      <div className="card1-content-inner">
                        <h3>Seamless Integrations: Work Smarter, Not Harder </h3>
                        <p>Switching between platforms kills productivity. Microsoft Business Central integrates effortlessly with:</p>
                        <ul>
                          <li>Microsoft 365 for smooth collaboration. </li>
                          <li>Power BI for next-level analytics & custom dashboards. </li>
                          <li>Third-party apps like Shopify, PayPal & more to fit your workflow. </li>
                        </ul>
                      </div>
                      <div className="card1-content-img">
                        <Image src="/img/n-012.png" width={571} height={369} alt="Card 5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting </h3>
                      <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                      <ul>
                        <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                        <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                        <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-008.png" width={574} height={369} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smart Inventory & Supply Chain </h3>
                      <p>Every product you mismanage is money lost. Business Central ensures you: </p>
                      <ul>
                        <li>Avoid stockouts with demand forecasting. </li>
                        <li>Cut carrying costs by ordering just the right amount. </li>
                        <li>Automate vendor & purchase order management to reduce delays. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-009.png" width={574} height={360} alt="Card 2" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>AI-Driven Insights: With Out-of-the-box Copilot </h3>
                      <p>Your competitors are using data to make smarter, faster decisions; are you? With Dynamics 365 Business Central, you:</p>
                      <ul>
                        <li>Get real-time dashboards to track sales, expenses & customer behaviour. </li>
                        <li>Use predictive analytics to anticipate trends and demand shifts. </li>
                        <li>Optimise pricing & marketing strategies using AI-driven insights. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-010.png" width={574} height={360} alt="Card 3" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Sales CRM: Close More Deals, Faster </h3>
                      <p>Your sales team shouldn’t waste time manually tracking leads or missing follow-ups. BC ERP empowers them to:</p>
                      <ul>
                        <li>Automate lead nurturing so no opportunity slips through the cracks. </li>
                        <li>Track every customer interaction for personalised service. </li>
                        <li>Turn data into sales strategies and know what works, and double down. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-011.png" width={584} height={369} alt="Card 4" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Seamless Integrations: Work Smarter, Not Harder </h3>
                      <p>Switching between platforms kills productivity. Microsoft Business Central integrates effortlessly with:</p>
                      <ul>
                        <li>Microsoft 365 for smooth collaboration. </li>
                        <li>Power BI for next-level analytics & custom dashboards. </li>
                        <li>Third-party apps like Shopify, PayPal & more to fit your workflow. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-012.png" width={571} height={369} alt="Card 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row t-80'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>See Business Central Results: <br />A Total Economic Impact™ Study</h2>
                <p>A 2024 study by Forrester looked at how companies using Business Central <br />cut costs and ran things more smoothly.</p>
                <div className="text-lg-start">
                  <a className="btn-get-started scrollto" href="/pdf/TheTEIOfAMigrationToMicrosoftDynamics365BusinessCentral.pdf" download >
                    <span>Get the Full Report &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                 
                </div>
              </div>
            </div>
          </div>
          <div className='row t-81'>
            <div className='col-lg-4 d-flex'>
              <div className='icons-box-9901'>
                <img src="/img/bc-8-01.png" width={65} height={65} alt="bc-8-01" />
                <h5>265%</h5>
                <span>Return over 3 years </span>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='icons-box-9901'>
                <img src="/img/bc-8-02.png" width={65} height={65} alt="bc-8-02" />
                <h5>{"<"} 6 months</h5>
                <span>Of payback on investment</span>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='icons-box-9901'>
                <img src="/img/bc-8-03.png" width={65} height={65} alt="bc-8-03" />
                <h5>Up to 12.5%</h5>
                <span>Productivity boost for finance and ops teams</span>
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
                  <span className='solution-new-cta-t'>CASE STORY</span>
                  <h3>Learn How UK Defence Apparel Maker Boosted Efficiency By Up To 50% with Business Central ERP.</h3>
                  <div>
                    <Link href="/case-studies/"><a

                      className="btn-get-started scrollto"
                    >
                      <span>Read Case Story &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Business Central Benefits: <br/>You Can’t Afford to Ignore </h2>
                <p>Every successful business has one thing in common: they run on systems that work for them, not against them. Dynamics 365 Business Central is the edge you need to outperform your competitors. </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Scale Without the Growing Pains</h3>
                    <p>Struggling to keep up with increasing orders, expanding teams, or multi-location operations? Business Central ERP automates and streamlines processes, ensuring you can scale effortlessly, with clarity and control! </p>
                  </li>
                  <li>
                    <h3>Improve Cash Flow & Cut Unnecessary Costs </h3>
                    <p>Cash flow has to be maintained at any cost. Delayed invoicing, financial blind spots, and poor forecasting can choke your profitability. With real-time financial insights & AI-powered predictions with Microsoft Copilot, you always know where your money is going. </p>
                  </li>
                  <li>
                    <h3>Prevent Stockouts & Overstocks— Every Order Counts </h3>
                    <p>Ever lost a customer because an item was “out of stock”? Or worse—ended up over-ordering, tying up valuable cash in unsold inventory? Business Central’s AI-driven inventory management ensures you stock just right. </p>
                  </li>
                  <li>
                    <h3>Stop Wasting Hours on Manual Tasks </h3>
                    <p>Still managing finances, payroll, or compliance manually? Automate 90% of your repetitive admin tasks so you can focus on growing your business instead of getting buried in paperwork. </p>
                  </li>
                  <li>
                    <h3>Make Smart Decisions—Not Gut-Feeling Guesses </h3>
                    <p>What if you could predict demand, analyse customer behaviour, and instantly see the financial impact of every decision? Dynamics 365 Business Central gives you real-time data, so you make decisions backed by facts, not assumptions. </p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p>Companies that switch to an AI-powered ERP see up to a 40% increase in efficiency. </p>
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




      <section className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Modules: <br/>All Your Business Needs in One Place </h2>
                <p>Every business needs more than just accounting software. You need an integrated and centralised system that connects every department seamlessly. </p>
                <p>Here’s what Dynamics 365 Business Central covers: </p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-04.png" width={48} height={49} alt="bc-8-04" />
                <h3>Finance & Accounting</h3>
                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting. </p>
                <a href="/products/dynamics-365-business-central/financial-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-05.png" width={48} height={49} alt="bc-8-05" />
                <h3>Supply Chain & Inventory Management</h3>
                <p>AI-powered demand forecasting, stock-level alerts, and vendor automation. </p>
                <a href="/products/dynamics-365-business-central/supply-chain-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-06.png" width={48} height={49} alt="bc-8-06" />
                <h3>Sales CRM</h3>
                <p>Track leads, automate follow-ups, and close deals faster. </p>
                <a href="/products/dynamics-365-business-central/sales-order-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-07.png" width={48} height={49} alt="bc-8-07" />
                <h3>Project Management</h3>
                <p>Cost analysis and job tracking help managers monitor schedules and costs. </p>
                <a href="/products/dynamics-365-business-central/project-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-08.png" width={48} height={49} alt="bc-8-08" />
                <h3>Warehouse Management</h3>
                <p>AI-driven warehouse management optimises storage, order fulfilment, and stock levels. </p>
                <a href="/products/dynamics-365-business-central/warehouse-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-09.png" width={48} height={49} alt="bc-8-09" />
                <h3>Service Management</h3>
                <p>Automate scheduling, real-time case tracking, and SLA monitoring to improve customer service. </p>
                <a href="/products/dynamics-365-business-central/service-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-10.png" width={48} height={49} alt="bc-8-10" />
                <h3>Manufacturing & Production</h3>
                <p>Automate work orders, optimise supply planning, and reduce waste. </p>
                <a href="/products/dynamics-365-business-central/manufacturing-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-11.png" width={48} height={49} alt="bc-8-11" />
                <h3>HR & Payroll</h3>
                <p>Automate compliance, salary processing, and employee record-keeping. </p>
                <a href="/products/dynamics-365-business-central/human-resource-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/bc-8-12.png" width={48} height={49} alt="bc-8-12" />
                <h3>AI & Business Intelligence</h3>
                <p>Get actionable insights, predictive analytics, and smarter decision-making. </p>
                {/* <a href="/co" target='_blank'>Learn More</a> */}
              </div>
            </div>

            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>No need to juggle multiple tools when one solution does it all. Unify your business and accelerate growth. </p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Click For a Free Personalised Demo Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='solution-new-six'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Copilot in Dynamics 365 Business Central:<br/> ERP with AI Capabilities</h2>
                <p>What if your ERP wasn’t just a system but an intelligent assistant that worked alongside you? Copilot in Dynamics 365 Business Central brings AI-powered automation, smart insights, and real-time assistance to transform how your business operates. No more guesswork, no more wasted hours: just seamless efficiency! </p>
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
                <h3>Transform the Way You Work  </h3>
                <p>Copilot helps you stay up to speed and competitive by taking care of repetitive tasks. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Get Answers in Seconds with AI-Powered Chat</h3>
                <p>No more digging through reports or chasing down data. Just ask Copilot! </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Drive Creativity and Sell More, Smarter  </h3>
                <p>Struggling with marketing copy, product descriptions, or sales emails? Let Copilot do it for you. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Focus on Customers, Not Data Entry  </h3>
                <p>Your sales team should be building relationships, not drowning in manual order processing. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>AI That Spots Trends Before You Do  </h3>
                <p>Missed trends equate to missed opportunities. Copilot helps you make smarter decisions. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card-cat'>
                <h3>Ready to move faster? See Copilot in Action!</h3>
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
      <section className='solution-new-banner-fives'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Make Business Central Work Smarter<br/> for Your Business</h2>
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
      </section>

      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>Act Now or Watch Others Take the Lead</h3>
                <p>Every moment without an integrated and AI-powered system is a lost opportunity, wasted time, and unnecessary expense. Choose Business Central: The Smartest Cloud ERP for Your Business!</p>
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

      <section className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>D365 Business Central Pricing & Licensing:<br/> Invest in Growth, Not Complexity </h2>
                <p>Effortless scaling unlocks when you choose to invest in Business Central Cloud ERP. Decisions that used to wait for days, now take seconds! </p>
                <p>Transparent Pricing for UK Businesses </p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Free Trial</span>
                </h3>
                <h4>FREE</h4>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Essentials</span>
                </h3>
                <h4>£57.50<span>/user/month</span></h4>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Premium</span>
                </h3>
                <h4>£82.20<span>/user/month</span></h4>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Team Member</span>
                </h3>
                <h4>£6.60<span>/user/month</span></h4>
              </div>
            </div>

          </div>
          <div className='row'>
            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>No hidden fees. No overpriced customisations. Just the right tools to power your business.
                  The Cost of Doing Nothing? Far Greater. Compare plans and find your perfect fit!</p>
                < a href="/products/dynamics-365-business-central/pricing-licensing" className="btn-get-started scrollto">
                  <span>Learn More! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Dynamics 365 Business Central Support Services: Downtime Isn’t an Option </h2>
                <p>Time is crucial in business, and as a trusted Dynamics 365 Business Central implementation partner in the UK, Dynamics Square understands this thing pretty well. We make every second count! No matter if you’re migrating, optimising, troubleshooting, or scaling, you have access to our fast, expert support that keeps your operations running, without disruptions, delays, or costly mistakes. </p>
                <p>Dynamics Square helps you with: </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 order-2'>
              <div className='row'>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Fresh Implementation & Migration Assistance</h3>
                    </div>
                    <p>Get up and running without headaches or hiccups. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Customisation & Optimisation</h3>
                    </div>
                    <p>Tailor Business Central ERP to match your workflows perfectly.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>24/7 Troubleshooting & Issue Resolution</h3>
                    </div>
                    <p>No waiting. No guesswork. Just solutions.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Performance Tuning & Upgrades</h3>
                    </div>
                    <p>Stay ahead with the latest features, AI enhancements & security updates. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>User Training & Best Practices</h3>
                    </div>
                    <p>Empower your team to maximise efficiency and productivity.</p>

                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div style={{ marginLeft: '15px' }}>
                    < a href="/d365-business-central-support/" className="btn-get-started scrollto">
                      <span>Learn More! &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 order-1'>
              <div className='img-backs-sid'>
                <Image src="/img/n-016.png" alt="copil-side" width={401} height={455} className='im-two' />
              </div>
            </div>
          </div>
        </div>
        <div className='n-017'><img src="/img/n-017.png" width={698} height={449} alt="copil-side" className='im-one-17' /></div>
      </section>

      <section className='p-t-1-100'>
        <div className='container'>
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head">
              <h2>Get Started with Business Central</h2>
              <p>Reports, e-books, videos, training, and more, everything you need to explore the system.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                   <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-05-tab" data-bs-toggle="pill" data-bs-target="#pills-home-05" type="button" role="tab" aria-controls="pills-home-05" aria-selected="false">Case Stories</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-01-tab" data-bs-toggle="pill" data-bs-target="#pills-home-01" type="button" role="tab" aria-controls="pills-home-01" aria-selected="true">Studies</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-02-tab" data-bs-toggle="pill" data-bs-target="#pills-home-02" type="button" role="tab" aria-controls="pills-home-02" aria-selected="false">e-Books</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-03-tab" data-bs-toggle="pill" data-bs-target="#pills-home-03" type="button" role="tab" aria-controls="pills-home-03" aria-selected="false">Podcasts</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-04-tab" data-bs-toggle="pill" data-bs-target="#pills-home-04" type="button" role="tab" aria-controls="pills-home-04" aria-selected="false">Guides</button>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              {/* <p className='pt-200'><b>Reach new markets with Business Central</b></p> */}
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade" id="pills-home-01" role="tabpanel" aria-labelledby="pills-home-01-tab">

                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/pdf/Break-into-new-markets-with-Business-Central.pdf" download>
                            <img src="/img/bc-8-17.png" width={273} height={192} alt="bc-8-17" />
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
                          <a href="/pdf/TheTEIOfAMigrationToMicrosoftDynamics365BusinessCentral.pdf" download>
                            <img src="/img/bc-8-18.png" width={273} height={192} alt="bc-8-18" />
                            <h3>See how firms gained from Business Central</h3>
                            <p>This 2024 Forrester study shows the returns real customers saw after getting started.</p>
                            <div className='ct--a'>
                              <span>Download the study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/pdf/IDC- MarketScape.pdf" download>
                            <img src="/img/bc-8-19.png" width={273} height={192} alt="bc-8-19" />
                            <h3>Why IDC picked Microsoft as a Leader</h3>
                            <p>Read how Microsoft stands out in small business ERP software. </p>
                            <div className='ct--a'>
                              <span>Read the excerpt</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="tab-pane fade" id="pills-home-02" role="tabpanel" aria-labelledby="pills-home-02-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/upgrade-nav-to-business-central/">
                            <img src="/img/Ebook-Nav-to-BC.png" width={273} height={192} alt="bc-8-17" />
                            <h3>Your Guide to Dynamics GP to Business Central Migration</h3>
                            <p>Find how businesses are moving from Microsoft GP to Business Central with confidence.</p>
                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/gp-to-bc-migration/">
                            <img src="/img/dynamics-GP-BC-Ebook-featured-image.png" width={273} height={192} alt="bc-8-18" />
                            <h3>Quick Start Guide for Upgrading NAV to Business Central</h3>
                            <p>Learn when, why, and how to upgrade from Dynamics NAV to Business Central with confidence.</p>
                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div>

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
                          <a href="https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh" target='_blank'>
                            <img src="/img/bc-8-21.png" width={273} height={192} alt="bc-8-21" />
                            <h3>Unpacking Microsoft Dynamics 365 Business Central for Growth</h3>
                            <p>Learn how Business Central helps streamline operations and scale growth in this expert-driven podcast episode.</p>
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
                  <div className="tab-pane fade" id="pills-home-04" role="tabpanel" aria-labelledby="pills-home-04-tab"><div className='row'>
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
                  </div>
                  <div className="tab-pane fade show active" id="pills-home-05" role="tabpanel" aria-labelledby="pills-home-05-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/case-studies/microsoft-business-central-implementation/">
                            <img src="/img/Summit-Systems.png" width={273} height={192} alt="bc-8-17" />
                            <h3>Driving Efficiency with Microsoft Business Central for Manufacturers</h3>
                            <p>A UK plastic automation company streamlined operations and scaled growth with Dynamics 365 Business Central.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/case-studies/quickbooks-to-business-central-migration/">
                            <img src="/img/Greenstar.jpg" width={273} height={192} alt="bc-8-18" />
                            <h3>From QuickBooks to Business Central: A Seamless ERP Upgrade</h3>
                            <p>A Moroccan fruit importer improved inventory, sales, and distribution by upgrading from QuickBooks to Business Central.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/case-studies/odoo-erp-to-business-central-migration/">
                            <img src="/img/GTT-Wireless.jpg" width={273} height={192} alt="bc-8-19" />
                            <h3>Upgrading from Odoo to Business Central with Mobile WMS</h3>
                            <p>A wireless tech provider streamlined warehouse operations by moving from Odoo ERP to Business Central.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>
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

export default BusinessCentral;
