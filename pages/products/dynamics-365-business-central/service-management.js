import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import useCardScrollEffect from "/components/useCardScrollEffect";

const ServiceManagmentNew = () => {

  useCardScrollEffect()

  return (
    <>
     <Head>
        <title>Service Management with Business Central</title>
      
        <meta
          name="description"
          content="Optimise your service management with Dynamics 365 Business Central. Streamline operations, boost efficiency, and deliver exceptional service experiences."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/service-management/"
        />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Service Management with Business Central " />
        <meta property="og:description" content="Optimise your service management with Dynamics 365 Business Central. Streamline operations, boost efficiency, and deliver exceptional service experiences." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/service-management/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/service-managment-banner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Service Management with Business Central" />
        <meta name="twitter:description" content="Optimise your service management with Dynamics 365 Business Central. Streamline operations, boost efficiency, and deliver exceptional service experiences." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/service-managment-banner.png" />
      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Service Management in Dynamics 365 Business Central</h1>
                <span className='large-heading'>Turn Service Chaos into Seamless Control with Business Central</span>
                <p>Struggling to track service contracts, fix scheduling messes, or retain customers when your support falters? The missing piece is precision. Manage contracts, assets, and technicians from one screen. Give customers service that never slips.</p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Demo Now! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
              <div className='m-b-image-banner'>
                <Image src="/img/service-managment-banner.png" alt='bc-support-banner' width={970} height={641} />
                <div className='ff-one'>  <span className=''>Dynamic Sales Insights</span></div>
                <div className='ff-two'>  <span className=''>Real-time Inventory Visibility</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className='bg-003'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-7 align">
              <div className="supprt-header-new-one">
                <h2>What Happens When You Don’t Have Proper Service Management?</h2>
                <p>Every misfired ticket, technician routed late, and asset history lost in a spreadsheet adds up to lost trust, time, and money.</p>
                <p>Your service team becomes firefighting support staff, not strategic brand ambassadors. Consequences? Churn, bad reviews, internal fatigue, and cost blowouts.</p>
                <p>Clients expect fast, consistent, and reliable fixes. The moment you can't deliver, they move on. You can’t afford guesswork anymore, or can you?</p>
                <p><b>Every delayed ticket costs trust.</b></p>
                 <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Talk to Us! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/service-managment-side-01.png" alt="service-managment-side-01" width={318} height={436} className='im-two' />
              </div>
            </div>
          </div>
         
        </div>
      </section>

      <section className='s-options-ends'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='img-backs-sid text-center'>
                <Image src="/img/service-managment-side-02.png" alt="service-managment-side-02" width={383} height={487} className='im-two' />
              </div>
            </div>
            <div className='col-lg-7'>
              <div className="solution-new-banner-sub-head">
                <h2>The Importance of Service Management in D365 Business Central</h2>
                <p>Product delivery ends at the sale. But the relationship starts after the invoice. That’s where your service team steps in.</p>
                <p>Whether you manage field service teams, service contracts, warranties, or equipment repairs, your efficiency depends on one thing: visibility and action from a single source.</p>
                <p>That source is Business Central for service management. This modern Microsoft ERP comes with out-of-the-box Copilot that further improves efficiency and accuracy.</p>
                <p><b>Customers notice everything. Be ready before they ask.</b></p>
                <div className="cc-mm-2">
                  <Link href="#exampleModal"><a style={{ marginTop: '15px' }}
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Free Demo Today! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>
        <section className='bg-003-01'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What Is Business Central for Service Management?</h2>
                <p>Dynamics 365 Business Central Service Management is the system that keeps your customers loyal and your service teams sharp.</p>
                <p><b>It enables you to:</b></p>

              </div>
            </div>
          </div>
          <div className="row g-3 ">
            <div className="col-lg-4 col-md-6  d-flex">
              <div className="card-700">
                <p>Schedule service personnel and equipment efficiently</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  d-flex">
              <div className="card-700">
                <p>Maintain full visibility over service history, contracts and warranties</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  d-flex">
              <div className="card-700">
                <p>Automate service orders, invoicing and reporting</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  d-flex">
              <div className="card-700">
                <p>Manage service inventory and spare parts in real-time</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6  d-flex">
              <div className="card-700">
                <p>Track profitability across service orders and contracts</p>
              </div>
            </div>
          </div>
          <div className="row min-m-t-20">
            <div className="col-lg-7 align-self-center">
              <div className="card-700-bot">
                <p>This is not a help desk ticket tool. It’s a full-featured service management in Business Central ERP that treats service like a business line, not an afterthought.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Run on Business Central to Own the Edge &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>

          </div>
          <div className="card-700-image">
            <img src="/img/Union-shape-one.png" alt="Union-shape-one" />
          </div>
        </div>
      </section>
       <section className='bg-003-tt'>
        <div className="container my-float-i">
          <div className="row" style={{ paddingBottom: '20px' }}>
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Core Functionalities in Service Management in Business Central ERP</h2>
                <p>These core functionalities in service management in Business Central ERP exist to protect time, trust, and margin.</p>
              </div>
            </div>
          </div>
          <div className="row g-3 ">
            <div className="col-lg-6 d-flex">
              <div className="card-700 card-700-a">
                <p><b>Service Contract Management</b></p>
                <ul>
                  <li>Define SLAs, billing cycles and response times</li>
                  <li>Automate renewals and notifications</li>
                  <li>Track contract profitability</li>
                  <li>Associate service items and warranties</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="card-700 card-700-a">
                <p><b>Service Order Handling</b></p>
                <ul>
                  <li>Create, track and complete service orders from anywhere</li>
                  <li>Link jobs to contracts, equipment or customers</li>
                  <li>Assign tasks based on availability and skills</li>
                  <li>Track labour, part usage and resolution time</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="card-700 card-700-a">
                <p><b>Service Item Lifecycle</b></p>
                <ul>
                  <li>Register and track customer assets</li>
                  <li>Monitor usage history, warranties, replacements</li>
                  <li>Plan proactive maintenance schedules</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="card-700 card-700-a">
                <p><b>Real-Time Inventory Coordination</b></p>
                <ul>
                  <li>See part availability across locations</li>
                  <li>Trigger purchase or transfer orders automatically</li>
                  <li>Allocate parts to specific jobs</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="card-700 card-700-a">
                <p><b>Resource Allocation and Skills Matching</b></p>
                <ul>
                  <li>Assign jobs based on technician skill and availability</li>
                  <li>View workload calendars</li>
                  <li>Avoid idle time and overlapping schedules</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="card-700 card-700-a">
                <p><b>Mobile Accessibility and Updates</b></p>
                <ul>
                  <li>Service teams can access assignments on any device</li>
                  <li>Real-time updates on job status and customer feedback</li>
                  <li>Upload photos, notes, and time logs directly from the field</li>
                </ul>
              </div>
            </div>
           
          </div>
          <div className="row min-m-t-20">
            <div className="col-lg-7 align-self-center">
              <div className="card-700-bot">
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Take the Lead with Business Central! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>

          </div>
          <div className="card-700-image-t">
            <img src="/img/Union-shape-one.png" alt="Union-shape-one" />
          </div>
        </div>
      </section>
        <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10'>
              <div className='solution-new-cta-001'>
                <h3>Every missed service call costs trust. Don’t let it happen.</h3>
                <p>Competitors who deploy Business Central for service management are not just gaining efficiency. They are raising expectations in the market.</p>
                <div>
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Start Service Precision with Business Central  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
                <h2>Benefits of Business Central for Service Management</h2>
                <p>Choosing Business Central for service management changes your business in ways clients and your own teams feel instantly.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-p'>
                      <h3>For Your Customers</h3>
                      <p>Every touchpoint becomes faster, clearer, and more reliable. Confidence builds with every on-time visit and accurate invoice.</p>
                      <ul>
                        <li>Faster resolution times</li>
                        <li>Fewer escalations</li>
                        <li>Real-time updates</li>
                        <li>No missed appointments or services</li>
                        <li>Transparent billing and contracts</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/service-managment-side-03.png" width={580} height={456} alt="service-managment-side-03" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-p'>
                      <h3>For Your Team</h3>
                      <p>They spend less time figuring out what to do and more time doing it right.</p>
                      <ul>
                        <li>Less manual tracking</li>
                        <li>Clearer job assignments</li>
                        <li>Smart inventory usage</li>
                        <li>Stronger contract renewals</li>
                        <li>Complete asset visibility</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/service-managment-side-04.png" width={581} height={456} alt="service-managment-side-03" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-p'>
                      <h3>For Your Bottom Line</h3>
                      <p>What used to leak margin now creates measurable value.</p>
                      <ul>
                        <li>Reduced downtime and errors</li>
                        <li>More billable hours per technician</li>
                        <li>Better contract revenue forecasting</li>
                        <li>Lower parts wastage</li>
                        <li>Enhanced client retention</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/service-managment-side-04.png" width={580} height={456} alt="Card 3" />
                    </div>
                  </div>
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
                <h3>Your Next Step Is the Only Step That Matters</h3>
                <p>You’ve read the real problems. You’ve seen how service management in Business Central ERP changes the service game from reactive to revenue-generating.</p>
                <p>Don’t let service chaos take the lead.</p>
                <div>
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Don’t let service chaos take the lead  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="n-015" />
      </section>
       <section className='bg-003-x'>
        <div className="container my-float-i">
          <div className="row" style={{ paddingBottom: '30px' }}>
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Who Is Business Central Service Management For?</h2>
                <p>Dynamics 365 Business Central Service Management is designed for any business where service delivery, field response, and asset uptime aren’t negotiable. If your teams operate on-site, if your revenue depends on consistent service contracts, and if downtime equals cost, this system is what you need.</p>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-12">
              <div className="row g-3">
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card-701">
                    <p><b>Field Service Providers:</b> HVAC, telecoms, repair services, IT maintenance</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card-701">
                    <p><b>OEMs and Equipment Sellers:</b> Manufacturers with service obligations</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card-701">
                    <p><b>Retail Chains and Franchises:</b> Who need to service in-store assets</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card-701">
                    <p><b>Facilities Management Firms:</b> Handling diverse contracts and buildings</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card-701">
                    <p><b>Utilities and Infrastructure:</b> Managing public services and equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-700-bot">
                <p>If job tickets still get printed, contract renewals live in inboxes, and no one knows what’s been serviced, your system isn’t serving you. It is no less than a liability.</p>
                <p><b>Service Better. Now.</b></p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Book a Demo &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    


      <section className='s-options-end'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-7 order-1 align-self-center'>
              <div className='row'>
                <div className="col-lg-12">
                  <div className="solution-new-banner-sub-head">
                    <h2>Why Dynamics Square UK for D365 Business Central Service Management Deployment</h2>
                    <p>Implementation is the difference between buying potential and experiencing results. Dynamics Square, a seasoned Microsoft Dynamics 365 partner in the UK, helps tailor, deploy, and support D365 Business Central Managed Services so your service engine runs like a precision machine.</p>
                    <p><b>Our teams don’t just install software. They enable transformation:</b></p>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Discovery and gap analysis</h3>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Business central implementation roadmaps</h3>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Data migration and integrations</h3>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Training field and admin teams</h3>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Real-time reporting dashboards</h3>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Ongoing support for continuous growth</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p style={{ paddingTop: '20px' }}>Every business has different pressure points. Dynamics Square, as a Microsoft Dynamics 365 implementation partner, configures Microsoft Dynamics 365 to match your actual ground-level needs.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-5 order-2 align-self-center'>
              <div className='img-backs-sid'>
                <Image src="/img/n-016.png" alt="copil-side" width={401} height={455} className='im-two' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section className="solution-faq faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="solution-new-banner-sub-head">
                <h2>Have you got questions about D365 Business Central Support?</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </div>

            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      How do I get technical support for Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The process of getting technical support for Business
                        Central is straightforward. If there is a need, contact
                        Dynamics Square and schedule a demo with one of our
                        experts. After that, evaluate the issues, and our team
                        will provide you with the best solution possible on
                        time.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      How to get help for Business Central Migration?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        <a href="https://blog.dynamicssquare.co.uk/migrate-nav-to-business-central/">
                          Business Central Migration
                        </a>{" "}
                        can be hectic if you have not selected the right
                        Business Central support partner. Dynamics Square can
                        help any business with a seamless migration process,
                        including an affordable quotation, timely
                        implementation, best support, and training if required.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      What is the Dynamics 365 Business Central Support
                      Lifecycle?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The D365 Business Central versions before April 2019
                        followed the <b>Fixed Lifecycle Policy</b>, which
                        includes ten years of continuous support from the date
                        of implementation and five years of Mainstream Support
                        with an additional five years of Extended Support. The{" "}
                        <b>Modern Lifecycle Policy</b> covers the asset till the
                        customer has a license to use a particular product or
                        service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      What is the difference between Dynamics 365 and Business
                      Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Dynamics 365 is an all-in-one solution that combines
                        different CRM (Customer Relationship Manager) and ERP
                        (Enterprise Resource Planning) applications. In
                        contrast, Business Central is one of the applications
                        from Dynamics 365 applications as an ERP but has some
                        features of CRM as well.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      What is included in Dynamics 365 Business Central
                      Essentials?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central with Cloud deployment offers two
                        license plans: Essentials (£57.50 per user/month) and
                        Premium (£82.20 per user/month). Dynamics 365 Business
                        Central Essential comes with Finance Management, Sales
                        and Marketing, Purchasing Payables, Inventory, Supply
                        Planning and Availability, Project Management, and
                        Warehouse Management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      Is Business Central a database?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Business Central isn't a database, but one or more
                        databases exist in Business Central that contain data
                        for the entire organisation. The database is built using
                        a set of data sets, including tables, reports, and data
                        structures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      What are Business Central Modules?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        D365 Business Central is a powerful{" "}
                        <Link href="/products/microsoft-dynamics-erp/">
                          <a target="_blank">ERP solution</a>
                        </Link>{" "}
                        that streamlines all business management processes and
                        operations. It has modules including Financial
                        Management, Customer Relationship Management, Supply
                        Chain Management, Project Management, Human Resources
                        Management,{" "}
                        <Link href="/industries/microsoft-cloud-for-manufacturing/">
                          <a target="_blank">Cloud for Manufacturing</a>
                        </Link>
                        , and Service Management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-8"
                    >
                      How do I open a case with Microsoft Business Central
                      Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        The process of getting premium support is easy and
                        simple. Whenever you encounter an issue with your
                        system, you need to <b>schedule a call</b> with Dynamics
                        Square. The dedicated team will analyse the issue's
                        complexity and provide you with a solution so that you
                        can resume business operations soon.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-9"
                    >
                      What is a Support Request for Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        A "Support Request" is a query, or an inquiry submitted
                        to a company's website where the Business Central
                        support services are available. The support request can
                        be for a specific module or a function of Business
                        Central, and the team of Dynamic Square will resolve any
                        query with quality services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-10"
                    >
                      How to raise a ticket for Dynamics 365 Business Central
                      Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>
                        Whenever your current BC shows any issue, whether small
                        or complex, you need to{" "}
                        <Link href="/contact-us/"><a target="_blank">schedule a call</a></Link> with
                        Dynamics Square. Once the team receives a call, they
                        transfer it to the dedicated support team to resolve the
                        query soon. Also, you will get updates about the status
                        of your ticket on your email automatically.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ServiceManagmentNew;
