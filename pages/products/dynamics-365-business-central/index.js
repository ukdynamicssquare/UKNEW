import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/business_centeral_faq.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import BcPopPdf from '../../../components/BCPdfPopup';
import NavBar from '../../../components/NavBar';
import BlogFinanaceCard from '../../../components/BlogFinanaceCard';



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
        <title>Microsoft Dynamics 365 Business Central Partner UK</title>
        <meta
          name="description"
          content="Transform your business with Dynamics 365 Business Central, the smartest cloud ERP. Partner with a trusted Microsoft expert in the UK for AI-powered solutions."
        />
        <meta name="keywords" content="Microsoft Dynamics 365 Business Central, Business Central UK, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Business Dynamics 365, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365,Microsfot 365 Business, Microsoft Bc, Microsoft Business Central Pricing UK, Microsoft Business Central Partner, Business Central Integration, MS Dynamics Business Central, Business Central Support"></meta>
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Business Central Partner UK" />
        <meta property="og:description" content="Transform your business with Dynamics 365 Business Central, the smartest cloud ERP. Partner with a trusted Microsoft expert in the UK for AI-powered solutions." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Business Central Partner UK" />
        <meta property="twitter:description" content="Transform your business with Dynamics 365 Business Central, the smartest cloud ERP. Partner with a trusted Microsoft expert in the UK for AI-powered solutions." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/business-center-new-banner.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What is Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central is a one-stop solution for all your enterprise needs. Since Business Central is built with excel-like features and easy-to-use navigation, anyone exposed to advanced excel functionality can easily adapt and leverage the powerful use of Business Central.Business Central is designed as a complete ERP solution for modern enterprises seeking to simplify end-to-end enterprise practices from financials to sales, warehousing to supply chain, project management to general reporting, assembly to manufacturing; Business Central is embedded with all potential business management solutions that give you real-time eyes into your business. You can host your application whether on cloud (private or public) or on-premise; the choice is yours. When it comes to Dynamics 365 Business Central Overview, it comprises huge things. To get more information about Business Central, how it works, and how it can transform your business context, do contact Dynamics Square. Our Dynamics 365 Business Central experts can assist you with the right and precise information."
                  }
                }, {
                  "@type": "Question",
                  "name": "How is Business Central related to Dynamics NAV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central is the updated version of Dynamics NAV. With its upgrade, Microsoft changed its name too. The Core functionality remains the same and is updated with advanced features and navigation to support modern enterprises and to serve every industry. However, existing Dynamics NAV users can still avail of the support services. Dynamics Square offers highly reliable and efficient NAV and Business Central Support Services at cost-effective rates."
                  }
                }, {
                  "@type": "Question",
                  "name": "How do I upgrade to Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Often, enterprises seem confused about when is the right time to upgrade to Dynamics 365 Business Central. If the same question is rolling out in your mind, contact Dynamics Square. We provide free-system health-check to identify your system lacks and upgrading needs considering your current business practices. Our experts can let you know whether you are in need to upgrade your current system or not. To know more about Why move to Dynamics 365 Business Central? Contact our Dynamics 365 experts, we can help you with all your questions. For instance, when you need to upgrade, what are possible personalized options for you? What sort of implementation practices do we follow while upgrading your existing business solution to Microsoft Dynamics 365 Business Central?"
                  }
                }, {
                  "@type": "Question",
                  "name": "Is there any training available to understand Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Microsoft Dynamics 365 Business Central comes with a simple, easy-to understand user interface and provides a smooth experience to all users, whether administrators or operators. There might be a need for training to understand the workings of added integrations, customizations, and add-ons. In such a case, you can avail yourself of the learning and training provided by your Business Central implementation partner, and they will guide you along the right path."
                  }
                }, {
                  "@type": "Question",
                  "name": "Can I customise Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Business Central is totally customisable as per your unique business and its changing needs. Irrespective of the industry, business type, and size, you can customise this powerful application to simplify your business operations. In short, customisations are the path to more productivity and easy business growth."
                  }
                }, {
                  "@type": "Question",
                  "name": "What industries can Dynamics 365 Business Central Support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central is designed in such a way that any industry from retailers to manufacturers, food & beverages to operations, e-commerce industry to financial services, and more can avail of seamless support in terms of Dynamics 365 business central. Moreover, Business Central can be personalized as per your industry-specific needs, or custom operational navigation takes place in your organization.To get more information about how this ERP solution can be implemented and leveraged by your specific industry, talk to us, we as a Business Central Consulting Services Provider are here to answer all your queries."
                  }
                }, {
                  "@type": "Question",
                  "name": "How much does Dynamics 365 Business Central cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central pricing goes as per your specific business processes. You can choose out of the given licensing options:Essential Premium Team Member Essential plan comes to fulfil your essential business requirement whereas premium comes with extra functionality layers. For Dynamics 365 Business Central Essential plan, you will be charged £57.50 per user/per month. For Dynamics 365 Business Central Premium plan, you need to invest £82.20 per user/per month. For Dynamics 365 Business Central Team Member, users will be charged £6.60 per user/per month. If you manage processes like finance, purchase/sales, and inventory, an essential license would be an ideal deal for your business to start your journey. If you are a manufacturer and provide services, a premium license would be the best-suitable way to start with. So, it's up to you, you can buy Business Central suited to your specific needs or user requirements. To know more or which plan would be ideal for your business, Dynamics Square - Microsoft authorized Business Central Consulting Services provider can help. Here you need to understand that this cost is just a licensing cost, it doesn't include any sort of implementation, customization, or integration cost. Your actual costs can be revealed by your Dynamics 365 Business Central Implementation Partner once you share your requirement with them. Initially, you can start with Microsoft Business Central Trial at no cost for 30 days. After your trial period, if you find Business Central - a suitable deal for your business, you can continue by availing any of the given licensing suited to your budget and requirements."
                  }
                }, {
                  "@type": "Question",
                  "name": "How do I get ongoing support for Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You will get direct support from Dynamics Square as we are a gold partner for Microsoft's products with existence in the UK market and other global locations with a well-equipped support system. Our support system includes end-user training, technical assistance, and off-hours support whenever required. If you are seeking professional and trustworthy support services, selecting Dynamics Square - a trustworthy Business Central Support Partner in the UK can help."
                  }
                }, {
                  "@type": "Question",
                  "name": "How does Power BI Fit with Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business Central is an all-in-one ERP solution. In case you want advancement in your reporting & analytics terms, seamless integration with Power BI can be done as both are Microsoft's products, hence, Power BI fits well with Dynamic 365 Business Central. Power BI can enable visualization in your reporting, key metrics, and your entire business analytics. You can create your own business reports and dashboards leveraging standard reporting templates and other visuals. If you want expert advice on how you can leverage Power BI and Business Central together, connect with us, being a reliable Business Central Support, NAV Upgrade, and Implementation partner, we can always provide you with expert consulting."
                  }
                }]
              }

            ),
          }}
        />

      </Head>

      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Business Central</h1>
                <span className='large-heading'>Deploy a solution trusted <br />by over 45,000 SMBs across the world</span>
                <p>Microsoft Dynamics 365 Business Central eliminates the need for multiple tools and acts as a single source of truth across your operations. Business Central is an advanced Microsoft ERP with out-of-the-box AI capabilities and has less than 6 months of payback on investment.</p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Try for Free &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
          {/* <div className='flot-5'>
            <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="New Solution" className="flot-img" width={48} height={48} />
          </div> */}
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
                <h2>What is Dynamics 365 Business Central?</h2>
                <p>Microsoft Dynamics 365 Business Central ties together your finance, operations, sales, customer service, project management services and more to deliver a 360-degree business management system through AI, automation, and real-time insights.</p>
                <p>D365 Business Central brings your teams and business processes in sync to help your company scale and thrive with precision and efficiency. D365 Business Central brings your teams and business processes in sync to help your company scale and thrive with precision and efficiency. </p>
                <p>Due to its modular structure and cloud-based deployment, Dynamics 365 Business Central is highly flexible in terms of customisation. Businesses can add/remove Business Central functionalities based on their requirements. This means Business Central ERP can be customised to cater to different industries and operations.</p>
                <p><b>In short, Microsoft Business Central is:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> All-in-one system for finance and operations</li>
                  <li><i className="bi bi-check2"></i> An AI-powered ERP with out-of-the-box Copilot</li>
                  <li><i className="bi bi-check2"></i> A scalable cloud platform that grows with your business</li>
                </ul>
                <p>Ready to move to this powerful cloud-based Microsoft ERP to unlock the growth of your business?</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Your Free Business Central Demo  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>


                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='dsa-mine'><img src="/img/bb-cc-busneww.png" alt="busines central dashboard" /></div>
            </div>
          </div>

        </div>
      </div>
      <NavBar />

      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Challenges Solved by Business Central</h2>
                <p><a href="/products/dynamics-365-business-central/advantages-capabilities/">Dynamics 365 Business Central capabilities</a> address challenges that a modern business can potentially face. Some of the most certain challenges include:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8" style={{ textAlign: 'center' }}>
                  <Image src="/img/bb-cc-busnew-01.png" width={320} height={440} alt="New Solution" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="New Solution" className="flot-9 flot-10" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <ul>
                  <li><i className="bi bi-check2"></i> Operating on outdated, legacy solutions like <a href="/products/microsoft-dynamics-nav/">Dynamics NAV</a></li>
                  <li><i className="bi bi-check2"></i> Disconnected systems (no single source of truth)</li>
                  <li><i className="bi bi-check2"></i> Reduced productivity due to repetitive manual tasks</li>
                  <li><i className="bi bi-check2"></i> Issues navigating complex processes or data-heavy systems</li>
                  <li><i className="bi bi-check2"></i> Financial close cycles take too long, causing reporting delays</li>
                  <li><i className="bi bi-check2"></i> Poor forecasting due to fragmented data & manual entries</li>
                  <li><i className="bi bi-check2"></i> No multi-site capabilities, resulting in errors and duplication</li>
                  <li><i className="bi bi-check2"></i> Bank reconciliations wasting hours and remain prone to human error</li>
                  <li><i className="bi bi-check2"></i> Difficulty staying compliant with local tax and reporting laws</li>
                </ul>
                <p>And the list goes on…</p>
                <p>Business Central ERP is an integrated system that addresses all these aforementioned problems and beyond. It helps future-proof your business whether you are a startup that has just kicked off its operations or a promising growing business.</p>
                <p>Whether starting small or growing fast, D365 Business Central is what you need.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal" ><a
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
      <section id='section3' className='solution-new-banner-three' style={{ paddingBottom: '80px' }}>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Business Central Capabilities</h2>
                <p>Microsoft Dynamics 365 Business Central capabilities make it a widely preferred choice by small and midsize businesses.</p>
                <p><a href="/blog/business-central-for-accounting/">Is Business Central for Accounting</a>? Yes… and no. D365 BC is much more than just being accounting software. It supports companies across industries and keeps teams connected anywhere in the world.</p>
                <p><b>Business Central comes with the following capabilities:</b></p>
              </div>
            </div>
          </div>
          {/* <div className="row">
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
          </div> */}

          <div className="row mar-top-7">
            <div className="col-lg-10">
              <div className="accordion accordion-flush acc-bc-ho" id="bclist1">
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-1">
                    <div className='bec-acc'>
                      <h3>Financial Management</h3>
                      <span>General ledger, accounts payable and receivable, VAT and tax management, budgets, cash flow forecast, fixed assets, <a href="/blog/multi-entity-multi-currency-consolidation-in-business-central">multi-currency support</a></span>
                    </div>
                  </div>

                  <div
                    id="bc-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist1"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Financial Management Features:</h4>
                        <p>General ledger, accounts payable and receivable, VAT and tax management, dimensions, budgets, cost accounting, deferrals, allocation accounts, multiple currencies, consolidation, intercompany postings, fixed assets, cash management, bank reconciliation, reminders, check writing, subscription billing, and recurring and consumption-based billing.</p>
                        <h4>Business Central Financial Management Overview:</h4>
                        <p>Dynamics 365 Business Central Finance functionality simplifies daily accounting and covers advanced financial operations.
                          <a href="/products/dynamics-365-business-central/financial-management/">The Business Central Financial Management module</a> contains features like ledger posting, dimensions, VAT management, AP and AR, budgets, bank connectivity, reconciliations, subscription billing, and more. Leaders have access to timely Business Central reporting with reliable numbers for planning and compliant close.
                        </p>
                        <h4>Business Central Financial Management Benefits:</h4>
                        <ul>
                          <li>Faster financial close</li>
                          <li>Accurate forecasting</li>
                          <li>Stronger compliance</li>
                          <li>Improved, real-time visibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-2">
                    <div className='bec-acc'>
                      <h3>Supply Chain Management</h3>
                      <span>Purchasing, inventory control, demand forecasting, warehouse management, manufacturing, planning and availability</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist2"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Supply Chain Management Features:</h4>
                        <p>Purchasing, vendor management, invoice discounts, alternative vendors, product information management, item attributes and variants, item references, substitutions with Copilot, inventory control and costing, item tracking, multiple locations, SKUs, transfers, shipping agents, item charges, planning and availability, demand forecasting, ATP or CTP, reservation, calendars, warehouse management, bins and picks, FEFO picking, cross docking, and manufacturing.</p>
                        <h4>Business Central Supply Chain Management Overview:</h4>
                        <p>Microsoft <a href="/products/dynamics-365-business-central/supply-chain-management/">Business Central Supply Chain module</a> helps manage inventory, vendors, and logistics with real-time visibility and automation.</p>
                        <p>D365 Business Central (BC) Supply Chain Management functionality comes with features like end-to-end flow across purchasing, inventory, planning, warehouse, and manufacturing. </p>
                        <p>Teams manage vendors and prices, maintain rich item data, track stock with serial or lot, plan supply through MPS or MRP, promise dates with ATP or CTP, and run warehousing with bins, picks, and put aways. This way, operations stay coordinated and timely.</p>
                        <h4>Business Central Supply Chain Management Benefits:</h4>
                        <ul>
                          <li>On-time deliveries</li>
                          <li>Lower stock holding</li>
                          <li>Stronger supplier control</li>
                          <li>Efficient warehouse flow</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-3">
                    <div className='bec-acc'>
                      <h3>Sales Management</h3>
                      <span>Sales quotes, order management, flexible pricing, invoice discounts, return management, Copilot sales assistance</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist3"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Sales Management Features:</h4>
                        <p>Customer records, quotes, blanket orders, sales orders, flexible line pricing and discounts, campaign pricing, invoice discounts, partial shipping, returns management, and <a href="/products/microsoft-dynamics-365-sales/copilot/">Microsoft Copilot sales assistance</a>.</p>
                        <h4>Business Central Sales Management Overview:</h4>
                        <p><a href="/products/dynamics-365-business-central/sales-order-management/">Dynamics 365 Business Central Sales</a> streamlines quotes, orders, and pricing to build stronger customer relationships.</p>
                        <p>Business Central Sales functionality handles the order to invoice journey. Teams create quotes and orders, apply price lists and discounts, ship partially when required, manage returns and credit, and generate accurate invoices. Microsoft Copilot in Business Central can suggest sales lines from natural prompts or files, which speeds document creation and reduces manual entry.</p>
                        <h4>Business Central Sales Management Benefits:</h4>
                        <ul>
                          <li>Faster order cycle</li>
                          <li>Accurate pricing logic</li>
                          <li>Happier repeat customers</li>
                          <li>Stronger sales control</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-4">
                    <div className='bec-acc'>
                      <h3>Ecommerce Management</h3>
                      <span>Shopify integration, multi-store management, customer sync, inventory synchronization, e-documents support</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist4"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Ecommerce Management Features:</h4>
                        <p><a href="/shopify-connector-business-central/">Shopify connector</a>, multi store scenarios, sync items, inventory, customers, orders and transactions, Shopify DTC and B2B, metafields support, scheduled background sync, export posted invoices, and electronic documents handling with Microsoft Copilot mapping.</p>
                        <h4>Business Central Ecommerce Management Overview:</h4>
                        <p>D365 Business Central Ecommerce module helps connect online stores and business processes for seamless selling and fulfilment. </p>
                        <p>Products, variants, prices, and stock flow to Shopify, while orders, customers, edits, refunds, and fulfilments flow back. Teams run DTC and B2B models, map metafields, and schedule sync tasks, with electronic documents supported for compliant billing.</p>
                        <h4>Business Central Ecommerce Management Benefits:</h4>
                        <ul>
                          <li>Unified commerce data</li>
                          <li>Fewer order errors</li>
                          <li>Faster fulfilment cycles</li>
                          <li>Connected operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-5">
                    <div className='bec-acc'>
                      <h3>Customer Relationship Management</h3>
                      <span>Contact management, campaigns, opportunity tracking, email logging, Dynamics 365 Sales integration</span>

                    </div>
                  </div>

                  <div
                    id="bc-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist5"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Customer Relationship Management Features:</h4>
                        <p>Contacts and accounts, profiling and ABC segmentation, campaigns, interaction and document history, email logging with Exchange, opportunity management, and <a href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</a> integration.</p>
                        <h4>Business Central Customer Relationship Management Overview:</h4>
                        <p>Dynamics 365 Business Central CRM module centralises customer data to improve campaigns, sales, and engagement.</p>
                        <p>This <a href="/blog/crm-functionality-in-dynamics-365-business-central/">Business Central CRM functionality</a> covers contact centric selling. Teams manage people and companies, track calls, meetings, and files, plan and run campaigns, score segments, and follow opportunities through defined stages. Integration with Dynamics 365 Sales supports lead to cash flow, shared price lists, inventory checks, and order sync for fulfilment and billing.</p>
                        <h4>Business Central Customer Relationship Management Benefits:</h4>
                        <ul>
                          <li>Centralised customer view</li>
                          <li>Targeted campaigns</li>
                          <li>Better pipeline clarity</li>
                          <li>Higher retention rates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-6">
                    <div className='bec-acc'>
                      <h3>Project Management</h3>
                      <span>Project setup, budgeting, time tracking, resource allocation, invoicing, WIP calculation</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist6"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Project Management Features:</h4>
                        <p>Project setup and tasks, budgets, resource and capacity planning, timesheets, WIP calculation, project invoicing, project-specific prices and costs, and project-based replenishment.</p>

                        <h4>Business Central Project Management Overview:</h4>
                        <p><a href="/products/dynamics-365-business-central/project-management/">Microsoft Dynamics 365 Business Central Project Management</a> functionality supports planning, tracking, and billing for successful project delivery.</p>
                        <p>Project Management functionality in Business Central allows managers to create tasks and budgets, allocate resources, collect time, calculate WIP to the ledger, and invoice fixed price or time and materials. Projects draw items through assembly to order or purchase creation, with role-based pages and reports for progress, costs, and profitability.</p>
                        <h4>Business Central Project Management Benefits:</h4>
                        <ul>
                          <li>On schedule delivery</li>
                          <li>Controlled project costs</li>
                          <li>Accurate phased billing</li>
                          <li>Clear profitability view</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-7">
                    <div className='bec-acc'>
                      <h3>Service Management</h3>
                      <span>Service contracts, work order management, dispatching, service pricing, warranty tracking, Field Service integration</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist7"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Service Management Features:</h4>
                        <p>Planning and dispatching, service contracts, warranties, service items, service orders and repairs, service price management, and <a href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service integration</a>.</p>
                        <h4>Business Central Service Management Overview:</h4>
                        <p><a href="/products/dynamics-365-business-central/service-management/">Microsoft Business Central Service Management functionality</a> enhances service delivery with better scheduling and contract management.</p>
                        <p>The role of Service Management functionality in Business Central is to ensure service as a connected workflow. Teams dispatch technicians, manage contracts and entitlements, track service items and parts, set price groups for labour and materials, and invoice completed work. </p>
                        <p>Integration with Dynamics 365 Field Service carries work orders, consumption, and completion data back for accurate billing and inventory impact.</p>
                        <h4>Business Central Service Management Benefits:</h4>
                        <ul>
                          <li>Faster service response</li>
                          <li>Lower service costs</li>
                          <li>Contract-driven control</li>
                          <li>Higher satisfaction levels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-8">
                    <div className='bec-acc'>
                      <h3>Human Resources Management</h3>
                      <span>Employee records, absence tracking, payments, reimbursements</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist8"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Human Resources Management Features:</h4>
                        <p>Employee records, contracts and qualifications, absence registration and analysis, and employee payments and reimbursements.</p>
                        <h4>Business Central Human Resources Management Overview:</h4>
                        <p>D365 Business Central Human Resources module simplifies employee data management and streamlines HR tasks.</p>
                        <p>The HR functionality in Business Central helps HR teams to maintain accurate employee data, register leave with category or period filters, and process reimbursements through journals, including foreign currency claims. Clean records and basic reporting support compliance needs and smooth handling of day-to-day HR tasks.</p>
                        <h4>Business Central Human Resources Management Benefits:</h4>
                        <ul>
                          <li>Organised employee records</li>
                          <li>Clear absence trends</li>
                          <li>Smooth reimbursements</li>
                          <li>Lighter admin effort</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-9">
                    <div className='bec-acc'>
                      <h3>Business Intelligence: Analytics and Reporting</h3>
                      <span><a href="/products/microsoft-power-bi/">Power BI integration</a>, 300+ built-in KPIs, financial reporting, data analysis with Copilot, 400+ reports</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist9"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Business Intelligence Features:</h4>
                        <p><a href="/blog/power-bi-reports/">Power BI reports</a>, 300+ built-in KPIs, self-service financial reporting, Excel export and layouts, built-in Data Analysis, Analysis Assist with Copilot, 400+ built-in reports, and ESG figures in statements.</p>
                        <h4>Business Central Business Intelligence Overview:</h4>
                        <p>Dynamics 365 Business Central Business Intelligence delivers insights and reporting tools for smarter decision-making.</p>
                        <p>Using Microsoft Business Central, teams can view reports in the client or mobile, set thresholds, share scorecards, and build statements from the chart of accounts. Besides, features like Lists support pivot-style analysis, while <a href="/blog/microsoft-dynamics-copilot/">Microsoft Copilot</a> prepares analysis tabs from plain prompts. Excel layouts and OneDrive links streamline reporting cycles.</p>
                        <h4>Business Central Business Intelligence Benefits:</h4>
                        <ul>
                          <li>Deeper KPI insight</li>
                          <li>Faster ad hoc analysis</li>
                          <li>Flexible reporting stacks</li>
                          <li>Confident analysis daily</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-10">
                    <div className='bec-acc'>
                      <h3>Security</h3>
                      <span>Access control, compliance tools, multi-factor authentication, Microsoft Cloud security</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist10"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Security Features:</h4>
                        <p>Role-based access, privacy controls, audit and compliance foundations, Microsoft Cloud security, tenant data separation, and multi-factor authentication.</p>
                        <h4>Business Central Security Overview:</h4>
                        <p>Microsoft Dynamics 365 Business Central Security protects data with enterprise-grade security and compliance features.</p>
                        <p>In Business Central, access aligns with roles and permissions, privacy controls apply across services, and compliance frameworks support regional obligations. Authentication and tenant separation keep information segmented while teams work efficiently across integrated business processes.</p>
                        <h4>Business Central Security Benefits:</h4>
                        <ul>
                          <li>Strong data protection</li>
                          <li>Regulatory compliance</li>
                          <li>Granular access control</li>
                          <li>Enterprise-level cloud trust</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-11">
                    <div className='bec-acc'>
                      <h3>Workflows and Automation</h3>
                      <span>Approval workflows, Power Automate integration, AI assistance</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-11"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist11"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Workflows and Automation Features:</h4>
                        <p>Approval workflows, <a href="/products/microsoft-power-automate/">Power Automate integration</a>, and out-of-the-box Microsoft Copilot (AI) assistance for steps and mapping.</p>
                        <h4>Business Central Workflows and Automation Overview:</h4>
                        <p>Business Central Workflows and Automation streamline approvals and reduce manual tasks.</p>
                        <p>Business Central supports approvals and background processing across finance, purchasing, and sales. Power Automate connects workflows across teams, while Microsoft Copilot in Business Central assists with mappings and repetitive steps, which shortens cycle times and reduces manual entry. Processes keep moving while teams focus attention on higher value work.</p>
                        <h4>Business Central Workflows and Automation Benefits:</h4>
                        <ul>
                          <li>Faster approvals flow</li>
                          <li>Reduced manual errors</li>
                          <li>Smarter workflows</li>
                          <li>Smarter workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

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
                <h2>Microsoft Copilot in Business Central</h2>
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
                <h3>Chat with Copilot Gives Guidance Inside Business Central</h3>
                <p>Ask questions in plain words, learn features, and follow guided steps directly in the app to complete daily work faster.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Responsible AI Safeguards Company Data Always</h3>
                <p>Data remains within tenant boundaries, with permissions carried through, and privacy and compliance supported by Microsoft’s Responsible AI principles.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Bank Reconciliation Assist Matches Transactions with Confidence Faster</h3>
                <p>AI improves matching of bank statement lines, suggests ledger accounts, and helps finance teams reconcile balances with less manual effort.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Electronic Document Mapping Links Vendor Invoices with Purchase Orders</h3>
                <p>Copilot speeds invoice processing by suggesting mappings between vendor e-documents and purchase orders, reducing errors and saving processing time.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Item Substitution Suggestions Save Time and Prevent Duplicates</h3>
                <p>Copilot identifies close alternatives for items by scanning descriptions, which helps staff avoid duplicates and improves catalogue accuracy.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Marketing Text Suggestions Speed Product Listings and Pages</h3>
                <p>AI drafts item descriptions based on product attributes, giving brand-friendly phrasing to list items faster across sales channels.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>AI Agents Like <a href="/blog/sales-order-agent-explained-features-setup-and-benefits/">Sales Order Agent</a> Transform Daily Workflows</h3>
                <p>Agents such as the Sales Order Agent handle customer requests end-to-end, turning conversations into orders with user oversight.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Copilot Studio Builds Conversational Experiences Tied to Data</h3>
                <p>Businesses can design chat experiences connected to records and workflows, enabling staff to query data and act on processes easily.</p>
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
      

      <section id='section4' className='p-t-1-100'>
        <div className='container'>
          <div className="col-lg-8">
            <div className="solution-new-banner-sub-head">
              <h2>Why Business Central is Preferred by Small and Midsize Businesses</h2>
              <p>Irrespective of the industry, Dynamics 365 Business Central is the go-to choice for most SMBs. Some of the industries where this <a href="/products/microsoft-dynamics-erp/">Microsoft Cloud ERP</a> is deployed are:</p>
              <p>Manufacturing & Distribution |   Logistics & Supply Chain | Healthcare & Medical Service Providers | Education | Food and Beverages</p>
              <p>And the list goes on… Let’s explore more about the Business Central ERP solution.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link  active" id="pill-bc-01-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-01" type="button" role="tab" aria-controls="pill-bc-01" aria-selected="true">Forrester Study</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pill-bc-02-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-02" type="button" role="tab" aria-controls="pill-bc-02" aria-selected="false">Success Stories</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pill-bc-03-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-03" type="button" role="tab" aria-controls="pill-bc-03" aria-selected="false">Best ERP Solution</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pill-bc-04-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-04" type="button" role="tab" aria-controls="pill-bc-04" aria-selected="false">Highly Rated</button>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              {/* <p className='pt-200'><b>Reach new markets with Business Central</b></p> */}
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pill-bc-01" role="tabpanel" aria-labelledby="pill-bc-01-tab">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='solution-new-banner-sub-head'>
                          <p>A 2024 Total Economic Impact™ Study by Forrester looked at how companies using Business Central cut costs and ran things more smoothly.</p>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
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
                      <div className='col-lg-12'>
                        <div className="text-lg-start">
                          <button
                            className="btn-get-started scrollto pdf-dd"
                            onClick={() => handleOpenModal('pdf1')}
                          >
                            Get the Full Report* &nbsp;<i className="bi bi-arrow-right"></i>
                          </button>
                          <p className='disclm'>*This report was commissioned by Microsoft and conducted by Forrester Consulting. All rights belong to their respective owners.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pill-bc-02" role="tabpanel" aria-labelledby="pill-bc-02-tab">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div>
                          <p>Stats speak for themselves. When a solution is trusted by over 45,000 SMBs, it is for a reason. It is for the results that Microsoft Business Central has delivered.</p>
                          <p><b>Business Central Success Stories:</b></p>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card-0-001'>
                          <a>
                            <img src="/img/bb-cc-busnew-03.jpg" width={733} height={384} alt="bc-8-17" />
                            <h3>A reputed brand from the oil & gas industry achieved:</h3>
                            <ul>
                              <li>Up to 5x faster financial reporting</li>
                              <li>400% faster month-end close process</li>
                            </ul>
                            {/* <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div> */}
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card-0-001'>
                          <a>
                            <img src="/img/bb-cc-busnew-04.jpg" width={733} height={384} alt="bc-8-17" />
                            <h3>A leading laboratory equipment manufacturer attained:</h3>
                            <ul>
                              <li>20% reduction in order processing times</li>
                              <li>From 3 days to 2 hours reduction in data repair times</li>
                            </ul>
                            {/* <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div> */}
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card-0-001'>
                          <a>
                            <img src="/img/bb-cc-busnew-05.jpg" width={733} height={384} alt="bc-8-17" />
                            <h3>A well-known freight company achieved:</h3>
                            <ul>
                              <li>33% improvement in close time</li>
                              <li>18% boost in on-time collections</li>
                            </ul>
                            {/* <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pill-bc-03" role="tabpanel" aria-labelledby="pill-bc-03-tab">
                    <div className='row'>
                      <div><p>Business Central is the best cloud-based ERP for growing businesses.</p>
                        <p><b>Key aspects:</b></p></div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Integrated Microsoft ERP</h3>
                          <p>Integrated Microsoft ERP: Connects easily with Microsoft 365 apps like Outlook, Excel, Teams, OneDrive, and <a href="/products/microsoft-power-platform/">Power Platform</a> to boost productivity and collaboration.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Out-of-the-box Microsoft Copilot</h3>
                          <p>First AI assistant across business functions that simplifies daily tasks such as creating sales lines, reconciling banks, analysing data, and mapping e-documents.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Cloud-based flexibility</h3>
                          <p>Delivers scalability, easier onboarding, and frees IT resources while ensuring security, privacy, and compliance.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex' Cloud-base>
                        <div className='solution-new-six-card'>
                          <h3>Fast to implement, easy to configure</h3>
                          <p>Businesses can start quickly, tailor settings for specific industries, and use in-product wizards and Microsoft Learn resources.</p>
                        </div>
                      </div>

                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Built-in analytics</h3>
                          <p>Out-of-the-box KPIs, dashboards, and Power BI integration provide insights for every role.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Global-ready</h3>
                          <p>Supports 50+ languages and 170+ localisations to meet local compliance and reporting needs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pill-bc-04" role="tabpanel" aria-labelledby="pill-bc-04-tab">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='image-list-new' style={{ padding: '0px 0px' }}>
                          <p><b>Rated highly by leading tech platforms</b></p>
                          <div className="image-list-new-im image-list-new-im-flex">
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

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='image-list-new' style={{ padding: '40px 0px 0px' }}>
                          <div className="image-list-new-im image-list-new-im-flex">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Trusted Microsoft Dynamics 365 Business Central Services by Dynamics Square</h2>
                <p>We are among the UK’s most trusted Microsoft Dynamics 365 Business Central partners. Our team helps small and mid-sized businesses run better with Dynamics 365 Business Central. From first setup to ongoing care, we make sure your system supports your goals at every step.</p>
                <p>With our industry knowledge, firms manage finance, sales, projects, and supply chains in one connected place. This reduces waste, improves clarity, and helps decision-makers act with confidence.</p>
                <p><b>Microsoft Dynamics 365 Business Central Services</b></p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <img src="/img/new-b-i01.png" width={32} height={32} alt="new-b-i01" />
                <h3>Implementation</h3>
                <p>Our team at Dynamics Square carries out smooth <a href="/dynamics-365-business-central-implementation/">Business Central implementations</a>. We study your business needs carefully and configure the system so that every process runs in line with your goals.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <img src="/img/new-b-i02.png" width={32} height={32} alt="new-b-i02" />
                <h3>Upgrade and Migration</h3>
                <p>Older systems can slow down growth. Microsoft Dynamics 365 Business Central helps firms move data safely from on-premises legacy systems into a cloud ERP that always stays up to date.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <img src="/img/new-b-i03.png" width={32} height={32} alt="new-b-i03" />
                <h3>Support and Maintenance</h3>
                <p>Dynamics Square provides <a href="/d365-business-central-support/">Business Central support</a> and regular system care. Our focus is on keeping your ERP running smoothly, solving issues quickly, and improving efficiency without disruption.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <img src="/img/new-b-i04.png" width={32} height={32} alt="new-b-i04" />
                <h3>Consulting</h3>
                <p>Our consultants guide firms on how to get the best from Business Central. With better planning, clearer reporting, and smoother workflows, businesses improve daily results.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <img src="/img/new-b-i05.png" width={32} height={32} alt="new-b-i05" />
                <h3>Customisation</h3>
                <p>Every company works in its own way. Dynamics 365 Business Central allows tailored extensions and add-ons. Dynamics Square designs changes that match the way your teams actually work.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <img src="/img/new-b-i06.png" width={32} height={32} alt="new-b-i06" />
                <h3>Integration</h3>
                <p>Business Central connects easily with Microsoft 365, Power Platform, and other third-party applications from ISVs. Dynamics Square integrates these systems so that staff can work from one source of truth.</p>
              </div>
            </div>



            <div className='col-lg-12'>
              <div className='solution-new-card-001 solution-new-card-0011-p'>
                <p>Our team of specialists is ready to help you make Business Central work for your business. Speak with us today and take the next step in managing finance, supply chain, sales, and service through one trusted system.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal" ><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                    style={{ display: 'inline-block', color: '#fff' }}
                  >
                    <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span> </a>
                  </Link>
                </div>
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


      <section  className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Why Dynamics Square</h2>
                <p>Dynamics Square is a trusted <a href="/our-services/dynamics-365-implementation-services/">Microsoft Dynamics 365 implementation partner</a> in the UK. We help small and mid-sized businesses manage finance, supply chain, sales, service, and projects with Microsoft Dynamics 365 Business Central. Our team focuses on steady results, clear guidance, and strong support. Businesses choose Dynamics Square as their Business Central implementation partner because we are:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Certified Microsoft Partner</h3>
                    <p>Proven expertise with 500+ successful projects and 150+ certified consultants</p>
                  </li>
                  <li>
                    <h3>Profound Industry Experience</h3>
                    <p>14+ years of experience with 12+ industries transformed</p>
                  </li>
                  <li>
                    <h3>Solution Architects</h3>
                    <p>We question, analyse, recommend, before we deploy</p>
                  </li>
                  <li>
                    <h3>360°Dynamics Expertise</h3>
                    <p>ERP, CRM, ISVs, Power Platform, all under one roof</p>
                  </li>
                  <li>
                    <h3>Agile Global Teams</h3>
                    <p>Collaborative and responsive onsite and offshore teams</p>
                  </li>
                  <li>
                    <h3>Presence Since NAV 5.0 and AX Era</h3>
                    <p>Experts who are into this when legacy systems used to be a big thing</p>
                  </li>
                  <li>
                    <h3>Value-Driven</h3>
                    <p>Hybrid model = cost-efficiency + personalised attention</p>
                  </li>
                  <li>
                    <h3>Trusted Long-Term Partner</h3>
                    <p>Our average client stays for 5+ years, and grows with us</p>
                  </li>
                  <li>
                    <h3>24x7 Customer Support</h3>
                    <p>Continuous support to keep your business up and running.</p>
                  </li>
                  <li>
                    <h3>Customer Satisfaction</h3>
                    <p>Our clients vouch for us. They share their success stories with us.</p>
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
                <Image src="/img/bb-cc-busnew-06.png" width={401} height={455} alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
          <img src="/img/n-014.png" width={604} height={958} alt="Card 6" />
        </div>
      </section>

      <section id='section7' className='solution-new-banner-fives'>
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
      </section>
      <section className="solution-new-banner-two" style={{ backgroundColor: '#fff' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics’ Square Custom Business Central Solution</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8" style={{ textAlign: 'center' }}>
                  <Image src="/img/bb-cc-busnew-02.png" width={395} height={440} alt="New Solution" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="New Solution" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <p><b>Import Consignment Solution</b></p>
                <p>Manufacturers and supply chain firms in the UK depend heavily on overseas shipments. Delays, poor visibility, and scattered paperwork often create planning gaps that affect production. Import Consignment Solution is a Business Central based solution created by Dynamics Square to fix these challenges in a simple and direct way.</p>
                <p>With this extension, companies can see every container linked with purchase orders, record shipment details, and manage critical documents in one system. Teams can follow expected arrival times, split orders where needed, and track real dates against original plans. This means fewer surprises, steady production flow, and greater control over consignments.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal" ><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Explore the Solution&nbsp;<i className="bi bi-arrow-right"></i></span> </a>
                  </Link>
                </div>
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
                    <span>Get Your Free Trial of BC Today*  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
                <h2>D365 Business Central Pricing & Licensing:<br /> Invest in Growth, Not Complexity </h2>
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
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <h4>£0.0*</h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Try for Free </a>
                <p className='disclm'>*Get a 30-day free trial to see it for yourself.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Essentials</span>
                </h3>
                <p>Handle finance, sales, and operations through one smart system. Built-in Copilot (Microsoft AI) helps you drive clarity, speed, and stronger outcomes.</p>
                <h4>£57.50<span>/user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Premium</span>
                </h3>
                <p>Access every feature from the Essentials plan, along with advanced tools for service and manufacturing. Designed for expanding teams seeking better clarity.</p>
                <h4>£82.20<span>/user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Team Member</span>
                </h3>
                <p>Gain access to view records, approve requests, and edit specific details. A perfect match for those supporting daily tasks across departments.</p>
                <h4>£6.60<span>/user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>

          </div>
          {/* <div className='row'>
            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011-p'>
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


      {/* <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Extend Smartly with Attach Licenses</h2>
                <p>Add new Dynamics 365 apps without paying the full price. Attach licenses allow you to expand across key areas while keeping your budget in check. Ideal for brands planning to add:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='hov-card-im01'>
                <a href="#exampleModal" data-bs-toggle="modal"><img src="/img/bcplusales.png" alt="" /></a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hov-card-im01'>
                <a href="#exampleModal" data-bs-toggle="modal"><img src="/img/bcpluscutmer.png" alt="" /></a>
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
      </section> */}

      <section id='section9' className='p-t-1-1000'>
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
                    <button className="nav-link" id="pills-home-01-tab" data-bs-toggle="pill" data-bs-target="#pills-home-01" type="button" role="tab" aria-controls="pills-home-01" aria-selected="true">Researches</button>
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
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-06-tab" data-bs-toggle="pill" data-bs-target="#pills-home-06" type="button" role="tab" aria-controls="pills-home-06" aria-selected="false">Blog</button>
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
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a onClick={() => handleOpenModal('pdf3')}>
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
                            <h3>Quick Start Guide for Upgrading NAV to Business Central</h3>
                            <p>Learn when, why, and how to upgrade from Dynamics NAV to Business Central with confidence.</p>

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
                            <h3>Your Guide to Dynamics GP to Business Central Migration</h3>
                            <p>Find how businesses are moving from Microsoft GP to Business Central with confidence.</p>
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
                  <div className="tab-pane fade" id="pills-home-06" role="tabpanel" aria-labelledby="pills-home-06-tab"><div className='row'>
                    <BlogFinanaceCard categorySlug='business-central' />

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
      <BcPopPdf pdfType={pdfType} />
    </>
  );
};

export default BusinessCentral;
