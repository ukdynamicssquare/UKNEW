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
        <title>
          Microsoft Dynamics 365 Business Central Partner - Dynamics Square UK
        </title>
        <meta
          name="description"
          content="Simplify operations with Microsoft Dynamics 365 Business Central. Scalable cloud ERP for SMEs by Dynamics Square UK, your trusted ERP partner."
        />
        <meta name="keywords" content="Microsoft Dynamics 365 Business Central, Business Central UK, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Business Dynamics 365, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365,Microsfot 365 Business, Microsoft Bc, Microsoft Business Central Pricing UK, Microsoft Business Central Partner, Business Central Integration, MS Dynamics Business Central, Business Central Support"></meta>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/"
        />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Business Central Partner - Dynamics Square UK" />
        <meta property="og:description" content="Simplify operations with Microsoft Dynamics 365 Business Central. Scalable cloud ERP for SMEs by Dynamics Square UK, your trusted ERP partner." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Business Central Partner - Dynamics Square UK" />
        <meta property="twitter:description" content="Simplify operations with Microsoft Dynamics 365 Business Central. Scalable cloud ERP for SMEs by Dynamics Square UK, your trusted ERP partner." />
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
          <Image src="/img/banner-tt.png" alt="New Solution" width={1893} height={948} className="flot-1" />
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
                <p>Dynamics 365 Business Central is what you need to outperform your competition and make your business thrive. It is an integrated, AI-powered, cloud-based ERP that has got you covered on all fronts: efficiency, scalability, and profitability.</p>

                <p>Deploy this Microsoft ERP system to give a complete makeover to your operations. Transform your business from reactive to proactive by making it agile, intelligent, and up-to-date.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Free Call Today!  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
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

                <p>No matter if you are a startup looking for a budget-friendly business solution or a growing business searching for a future-proof solution, D365 Business Central is what you need!</p>
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
        </div>
      </section>


      <section className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Business Central Benefits: You Can’t Afford to Ignore </h2>
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



      <section className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Modules: All Your Business Needs in One Place </h2>
                <p>Every business needs more than just accounting software. You need an integrated and centralised system that connects every department seamlessly. </p>
                <p>Here’s what Dynamics 365 Business Central covers: </p>
              </div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Finance & Accounting</h3>
                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting. </p>
                <a href="/products/dynamics-365-business-central/financial-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Supply Chain & Inventory Management</h3>
                <p>AI-powered demand forecasting, stock-level alerts, and vendor automation. </p>
                <a href="/products/dynamics-365-business-central/supply-chain-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Sales CRM</h3>
                <p>Track leads, automate follow-ups, and close deals faster. </p>
                <a href="/products/dynamics-365-business-central/sales-order-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Project Management</h3>
                <p>Cost analysis and job tracking help managers monitor schedules and costs. </p>
                <a href="/products/dynamics-365-business-central/project-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Warehouse Management</h3>
                <p>AI-driven warehouse management optimises storage, order fulfilment, and stock levels. </p>
                <a href="/products/dynamics-365-business-central/warehouse-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Service Management</h3>
                <p>Automate scheduling, real-time case tracking, and SLA monitoring to improve customer service. </p>
                <a href="/products/dynamics-365-business-central/service-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Manufacturing & Production</h3>
                <p>Automate work orders, optimise supply planning, and reduce waste. </p>
                <a href="/products/dynamics-365-business-central/manufacturing-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>HR & Payroll</h3>
                <p>Automate compliance, salary processing, and employee record-keeping. </p>
                <a href="/products/dynamics-365-business-central/human-resource-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>AI & Business Intelligence</h3>
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
                <h2>Copilot in Dynamics 365 Business Central: ERP with AI Capabilities</h2>
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
                <h2>D365 Business Central Pricing & Licensing: Invest in Growth, Not Complexity </h2>
                <p>Effortless scaling unlocks when you choose to invest in Business Central Cloud ERP. Decisions that used to wait for days, now take seconds! </p>
                <p>Transparent Pricing for UK Businesses </p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-4'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Essentials</span>
                </h3>
                <h4>£57.50<span>/user/month</span></h4>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Premium</span>
                </h3>
                <h4>£82.20<span>/user/month</span></h4>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Team Member</span>
                </h3>
                <h4>£6.60<span>/user/month</span></h4>
              </div>
            </div>
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
