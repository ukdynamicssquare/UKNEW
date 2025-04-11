import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useGsapScrollCards from '../../hooks/useGsapScrollCards';
import faqData from '../../public/data/business_centeral_faq.json';

// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const NewSolution = () => {
  /*gsap card scroll*/
  const containerRef = useRef(null);
  useGsapScrollCards(containerRef);
  /*gsap card scroll*/
  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };


  return (
    <>

      <Head>
        <title>New Solution</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="New Solution" />

      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Business Central</h1>
                <span className='large-heading'>Level up with a solution trusted by<br />
                  over 45,000 SMBs across the world.</span>
                <p>Bid adieu to data silos, the biggest culprits behind operational inefficiencies. Adopt Business Central, an advanced ERP that comes with out-of-the-box AI capabilities, Microsoft Copilot, and has less than 6 months of payback on investment. </p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Tell me more &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="solution-new-banner-one-img">
          <Image src="/img/banner-tt.png" alt="New Solution" width={1893} height={948} className=" flot-1" />
          {/* <img src="/img/n-003.png" alt="New Solution" className="flot-2" />
          <img src="/img/n-004.png" alt="New Solution" className="flot-3" />
          <img src="/img/n-005.png" alt="New Solution" className="flot-4" /> */}
          <div className='flot-5'>
            <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="New Solution" className="flot-img" />
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
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='solution-new-banner-sub-head r-top-60'>
                  <h2>What is Business Central?</h2>
                  <p>It is what you need to outperform your competition and make your business thrive. It is an integrated, AI-powered, cloud-based ERP that has got you covered on all fronts: efficiency, scalability, and profitability. </p>

                  <p>Adopt the best ERP system of 2024 to give a complete makeover to your operations. Transform your business from reactive to proactive by making it agile, intelligent, and up-to-date. </p>
                  <div className="text-center text-lg-start">
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
                  <img src="/img/n-006.png" alt="New Solution" />
                </div>
                <img src="/img/n-007.png" alt="New Solution" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <p><b>If by any chance you are facing any of these issues, you are in deep trouble. </b></p>

                <p>You need an integrated system that has AI and automation capabilities. This is where Business Central comes to your rescue. </p>

                <p>Organisations that have implemented Dynamics 365 Business Central have managed to save up to 30% on operational costs.</p>

                <p>No matter if you are a startup looking for a budget-friendly business solution or a growing business searching for a future-proof solution, Business Central is what you need! </p>
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
        <div className="container" ref={containerRef}>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Features: What’s Inside? </h2>
                <p>Run business with confidence. With Business Central, get rid of disconnected tools and replace inefficiency with automation, guesswork with AI-driven insights, and frustration with seamless control. Here’s how it turns things in favour of your business: </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="pin-wrapper">
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
                        <img src="/img/n-008.png" alt="Card 1" />
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
                        <img src="/img/n-009.png" alt="Card 2" />
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
                        <img src="/img/n-010.png" alt="Card 3" />
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
                        <img src="/img/n-011.png" alt="Card 4" />
                      </div>
                    </div>
                  </div>

                  <div className="custom-card card5" style={{ zIndex: 6 }}>
                    <div className="card1-content">
                      <div className="card1-content-inner">
                        <h3>Seamless Integrations: Work Smarter, Not Harder </h3>
                        <p>Switching between platforms kills productivity. Business Central integrates effortlessly with: </p>
                        <ul>
                          <li>Microsoft 365 for smooth collaboration. </li>
                          <li>Power BI for next-level analytics & custom dashboards. </li>
                          <li>Third-party apps like Shopify, PayPal & more to fit your workflow. </li>
                        </ul>
                      </div>
                      <div className="card1-content-img">
                        <img src="/img/n-012.png" alt="Card 5" />
                      </div>
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
                <h2>Business Central Benefits: You Can’t Afford to Ignore </h2>
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
                    <p>Struggling to keep up with increasing orders, expanding teams, or multi-location operations? Business Central automates and streamlines processes, ensuring you can scale effortlessly, with clarity and control! </p>
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
                    <p>What if you could predict demand, analyse customer behaviour, and instantly see the financial impact of every decision? Business Central gives you real-time data, so you make decisions backed by facts, not assumptions. </p>
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
                <img src="/img/n-013.png" alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
        <img src="/img/n-014.png" alt="Card 6" />
        </div>
      </section>


      <section className='solution-new-cta'>
        <div className='asd'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>CASE STORY</span>
                  <h3>Learn How UK Defence Apparel Maker Boosted Efficiency By Up To 50% with Business Central.</h3>
                  <div>
                    <Link href="#exampleModal"><a
                      data-bs-toggle="modal"
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
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Supply Chain & Inventory Management</h3>
                <p>AI-powered demand forecasting, stock-level alerts, and vendor automation. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Sales CRM</h3>
                <p>Track leads, automate follow-ups, and close deals faster. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Project Management</h3>
                <p>Cost analysis and job tracking help managers monitor schedules and costs. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Warehouse Management</h3>
                <p>AI-driven warehouse management optimises storage, order fulfilment, and stock levels. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Service Management</h3>
                <p>Automate scheduling, real-time case tracking, and SLA monitoring to improve customer service. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>Manufacturing & Production</h3>
                <p>Automate work orders, optimise supply planning, and reduce waste. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>HR & Payroll</h3>
                <p>Automate compliance, salary processing, and employee record-keeping. </p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <h3><span><i className="bi bi-check2"></i></span>AI & Business Intelligence</h3>
                <p>Get actionable insights, predictive analytics, and smarter decision-making. </p>
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
                <img src="/img/solution-new-six-img.png" alt="New Solution" />
              </div>
            </div>
          </div>
          <div className='row g-3 m-t-4'>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Transform the Way You Work  </h3>
                <p>Copilot helps you stay up to speed and competitive by taking care of repetitive tasks. </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Get Answers in Seconds with AI-Powered Chat</h3>
                <p>No more digging through reports or chasing down data. Just ask Copilot! </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Drive Creativity and Sell More, Smarter  </h3>
                <p>Struggling with marketing copy, product descriptions, or sales emails? Let Copilot do it for you. </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Focus on Customers, Not Data Entry  </h3>
                <p>Your sales team should be building relationships, not drowning in manual order processing. </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>AI That Spots Trends Before You Do  </h3>
                <p>Missed trends equate to missed opportunities. Copilot helps you make smarter decisions. </p>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='solution-new-six-card'>
                <h3>Finance & Accounting</h3>
                <p>Real-time cash flow tracking, automated invoicing, and compliance-ready reporting.</p>
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
                <p>Every moment without an integrated and AI-powered system is a lost opportunity, wasted time, and unnecessary expense. Choose Business Central: The Smartest ERP for Your Business!</p>
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
                <h2>Business Central Pricing & Licensing: Invest in Growth, Not Complexity </h2>
                <p>Effortless scaling unlocks when you choose to invest in Business Central. Decisions that used to wait for days, now take seconds! </p>
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
          </div>
        </div>
      </section>


      <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Business Central Support Services: Downtime Isn’t an Option </h2>
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
                    <p>Tailor Business Central to match your workflows perfectly.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>24/7 Troubleshooting & Issue Resolution</h3>
                    </div>
                    <p>24/7 Troubleshooting & Issue Resolution</p>

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
                    <p>TEmpower your team to maximise efficiency and productivity.</p>

                  </div>
                </div>
               
              </div>
            </div>
            <div className='col-lg-5 order-1'>
              <div className='img-backs-sid'>
                <img src="/img/n-016.png" alt="copil-side" className='im-two' />
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-017.png" alt="copil-side" className='im-one-17' />
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
}

export default NewSolution;
