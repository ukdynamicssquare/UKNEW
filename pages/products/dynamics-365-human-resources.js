import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../public/data/human_faq.json';
import useCardScrollEffect from "../../components/useCardScrollEffect";
// import BcPopPdf from '../../components/BCPdfPopup';
import NavBar from '../../components/NavBar';
import BlogFinanaceCard from '../../components/BlogFinanaceCard';



// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const HumanResour = () => {
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
        <title>Dynamics 365 Human Resources | Dynamics Square UK</title>
        <meta
          name="description"
          content="Transform HR operations with Dynamics 365 Human Resources. Manage talent, payroll, and compliance effortlessly with Dynamics Square UK." />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/" />
        <meta property="og:title" content="Dynamics 365 Human Resources | Dynamics Square UK" />
        <meta property="og:description" content="Transform HR operations with Dynamics 365 Human Resources. Manage talent, payroll, and compliance effortlessly with Dynamics Square UK." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Human-Resource-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-human-resources/" />
        <meta property="twitter:title" content="Dynamics 365 Human Resources | Dynamics Square UK" />
        <meta property="twitter:description" content="Transform HR operations with Dynamics 365 Human Resources. Manage talent, payroll, and compliance effortlessly with Dynamics Square UK." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Human-Resource-banner.png" />

      </Head>

      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 Human Resources</h1>
                <span className='large-heading'>Create a workplace where people and business thrive together</span>
                <p>Dynamics 365 for HR combines every process in one platform with the help of AI (Microsoft Copilot) and automation to help managers and employees work smarter. Be it payroll or performance tracking, everything runs with greater accuracy and speed. This connected cloud ERP brings employee self-service, predictive insights, and a faster return on investment for organisations seeking stronger HR management. </p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Tell Me More! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
              <div className='m-b-image'>
                <Image src="/img/Human-Resource-banner.png" alt='Human-Resource-banner' width={1098} height={657} />
              </div>
            </div>

          </div>
        </div>
        <div className="solution-new-banner-one-img solution-new-banner-one-img-f">
          <Image src="/img/hr-banner.png" alt="hr-banner" width={1920} height={948} className="flot-1" />
          {/* <img src="/img/n-003.png" alt="New Solution" className="flot-2" />
          <img src="/img/n-004.png" alt="New Solution" className="flot-3" />
          <img src="/img/n-005.png" alt="New Solution" className="flot-4" /> */}
          <div className='flot-5'>
            <img src="/img/hr-banner-icon.png" alt="" className="flot-img" width={48} height={48} />
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
                <h2>What is Dynamics 365 Human Resources?</h2>
                <p>Dynamics 365 Human Resources serves as a complete HR management solution from Microsoft that centralises every core function of your workforce in one smart system. The answer to the question: what is Dynamics 365 Human Resources, lies in its ability to connect payroll, recruitment, performance, and self-service experiences together.</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> Central HR system with payroll and recruiting integration</li>
                  <li><i className="bi bi-check2"></i> Self-service access for employees and managers</li>
                  <li><i className="bi bi-check2"></i> Real-time workforce insights with Microsoft Copilot</li>
                </ul>
                <div className="text-lg-start">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Explore More Use Cases  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Human Resources Implementation: Why Is It Necessary?</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/hr-side-01.png" width={513} height={455} alt="New Solution" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="New Solution" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <p>If your organisation faces these challenges, efficiency and employee satisfaction suffer badly.</p>
                <p>You need a connected system with AI and automation to transform HR management. This is where Dynamics 365 Human Resources becomes critical.</p>
                <p>Organisations using Dynamics 365 Human Resources streamline leave and absence programmes with global compliance, connect payroll providers for accurate reporting, and improve recruitment with LinkedIn Talent Solutions.</p>
                <div className="text-lg-start">
                  <Link href="#exampleModal" ><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Your Free Demo!&nbsp;<i className="bi bi-arrow-right"></i></span> </a>
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
                <h2>Key Features of Dynamics 365 Human Resources</h2>
                <p>Dynamics 365 Human Resources features help you run HR with confidence. Upgrade from disconnected tools, guesswork, and manual errors to automation, AI-driven insights, and clarity. </p>
                <p>With dedicated Dynamics 365 HR management support from Dynamics Square, you keep every HR system on track. Here is how this <a href="/products/microsoft-dynamics-erp/">Microsoft ERP</a> strengthens your organisation:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">

              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smarter Payroll and Finance Integration</h3>
                      <p>Payroll errors damage trust and waste resources. Dynamics 365 Human Resources connects payroll systems and provides:</p>
                      <ul>
                        <li>Automated payroll integration with providers for accurate processing</li>
                        <li>Real-time expense and budget tracking for better cost control</li>
                        <li>Built-in compliance to simplify tax filing and audits</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/hr-side-02.png" width={574} height={369} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Employee Self-Service and Manager Tools</h3>
                      <p>Managers need faster ways to get things done, and employees want easy access to their information. Dynamics 365 Human Resources delivers:</p>
                      <ul>
                        <li>Leave and absence requests directly through Microsoft Teams</li>
                        <li>Rich employee profiles with skills, certifications, and career data</li>
                        <li>Goal setting, training, and performance tracking on one platform</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/hr-side-03.png" width={574} height={360} alt="Card 2" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Recruiting and Talent Acquisition Add-On</h3>
                      <p>Hiring delays affect growth and team performance. Microsoft Dynamics 365 Human Resources improves recruitment with:</p>
                      <ul>
                        <li>Seamless integration with LinkedIn Talent Solutions</li>
                        <li>Automated tracking of applications and interviews</li>
                        <li>Data-driven insights for selecting the right candidates faster</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/hr-side-04.png" width={574} height={360} alt="Card 3" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Benefits and Compensation Programmes</h3>
                      <p>Attractive benefits and fair compensation help retain talent. With Dynamics 365 Human Resources, organisations can:</p>
                      <ul>
                        <li>Create flexible benefits packages with self-service enrolment</li>
                        <li>Automate company-wide compensation rollouts with defined rules</li>
                        <li>Track life events and adjust benefits quickly to stay compliant</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/hr-side-05.png" width={584} height={369} alt="Card 4" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Copilot and AI-Driven Insights</h3>
                      <p>AI improves every decision when used effectively. With <a href="/products/dynamics-365-copilot/">Microsoft Copilot</a> built in, you get:</p>
                      <ul>
                        <li>Real-time dashboards that track workforce performance</li>
                        <li>Predictive analytics that anticipate HR trends and risks</li>
                        <li>AI-powered chat to answer HR queries instantly</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/hr-side-06.png" width={571} height={369} alt="Card 5" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Seamless Integrations with Microsoft Ecosystem</h3>
                      <p>Switching tools reduces productivity. <a href="/products/dynamics-365-business-central/">Business Central</a> integrates smoothly, and so does HR:</p>
                      <ul>
                        <li>Microsoft 365 for collaboration and workflow</li>
                        <li>Power Platform for custom HR apps and process automation</li>
                        <li>Power BI for workforce planning and analytics dashboards</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/hr-side-07.png" width={571} height={369} alt="Card 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='row t-80'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>See Business Central Results: <br />A Total Economic Impact™ Study</h2>
                <p>A 2024 study by Forrester looked at how companies using Business Central <br />cut costs and ran things more smoothly.</p>
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
          </div> */}
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>CASE STORY</span>
                  <h3>Check out some of our case studies to see how Dynamics 365 has made a difference for our clients.</h3>
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


      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Benefits of Dynamics 365 Human Resources</h2>
                <p>Every strong organisation relies on systems that support both business and people. Dynamics 365 Human Resources benefits create efficiency, clarity, and better employee experiences across every level of the company.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Scale Without Barriers</h3>
                    <p>Managing expanding teams, new locations, and global compliance rules can feel overwhelming. Dynamics 365 Human Resources automates routine administration, connects payroll and benefits, and gives managers full visibility to scale confidently.</p>
                  </li>
                  <li>
                    <h3>Improve Cash Flow and Control HR Costs</h3>
                    <p>Financial blind spots in payroll or benefits directly affect profitability. With integrated payroll systems, budget tracking, and Copilot-driven forecasts, you always see how compensation, taxes, and expenses impact your business.</p>
                  </li>
                  <li>
                    <h3>Self-Service That Empowers Employees and Managers</h3>
                    <p>Employees prefer quick access to leave requests, training, and performance data. With Dynamics 365 Human Resources self-service, both employees and managers gain clarity through Microsoft Teams, reducing admin workload and improving satisfaction.</p>
                  </li>
                  <li>
                    <h3>Automate HR Tasks and Save Hours</h3>
                    <p>Manual HR administration consumes valuable time. Automating payroll, absence tracking, and compliance frees HR teams to focus on strategic goals like retention and employee growth instead of paperwork.</p>
                  </li>
                  <li>
                    <h3>Make Decisions with Real-Time Insights</h3>
                    <p>Gut-driven decisions often backfire in HR. With real-time dashboards, workforce analytics, and predictive AI, managers confidently adjust compensation, recruitment, or benefits based on data.</p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p>Connected HR systems improve compliance and productivity while reducing HR costs across the organisation. Companies using Dynamics 365 report higher retention and better employee satisfaction.</p>
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
                <Image src="/img/hr-side-08.png" width={416} height={485} alt="Card 6" />

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
                <h2>Modules in Dynamics 365 Human Resources</h2>
                <p>HR requires more than payroll or leave tracking. With <a href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance and Operations</a> Human Resources, every function connects in one place for a complete view of people, costs, and compliance.</p>
                <p>Here is what <a href="/products/microsoft-dynamics-365/">Dynamics 365</a> covers:</p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-01.png" width={36} height={36} alt="hr-banner-icon-01" />
                <h3>Payroll and Finance</h3>
                <p>Integrated payroll with providers, real-time cost tracking, and compliance-ready reporting.</p>
                <a href="/products/dynamics-365-business-central/financial-management/" target='_blank'>Learn More</a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-02.png" width={36} height={36} alt="hr-banner-icon-02" />
                <h3>Benefits and Compensation</h3>
                <p>Create flexible benefits packages, manage enrolment, and roll out company-wide compensation changes with confidence.</p>
                {/* <a href="/products/dynamics-365-business-central/supply-chain-management/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-03.png" width={36} height={36} alt="hr-banner-icon-03" />
                <h3>Recruiting Add-On</h3>
                <p>Track applicants, automate interviews, and connect with LinkedIn Talent Solutions for faster hiring.</p>
                {/* <a href="/products/dynamics-365-business-central/sales-order-management/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-04.png" width={36} height={36} alt="hr-banner-icon-04" />
                <h3>Employee Self-Service</h3>
                <p>Leave requests, training enrolment, and performance tracking through Teams and mobile access.</p>
                {/* <a href="/products/dynamics-365-business-central/project-management/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-05.png" width={36} height={36} alt="hr-banner-icon-05" />
                <h3>Performance and Training</h3>
                <p>Set goals, monitor feedback, and track certifications to improve growth and retention.</p>
                {/* <a href="/products/dynamics-365-business-central/warehouse-management/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-06.png" width={36} height={36} alt="hr-banner-icon-06" />
                <h3>Workforce Insights and Analytics</h3>
                <p>Use <a href="/products/microsoft-power-bi/">Power BI dashboards</a> and embedded analytics for better workforce planning.</p>
                {/* <a href="/products/dynamics-365-business-central/service-management/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-07.png" width={36} height={36} alt="hr-banner-icon-07" />
                <h3>Service and Case Management</h3>
                <p>Automate scheduling, track HR cases in real time, and monitor service agreements.</p>
                {/* <a href="/products/dynamics-365-business-central/manufacturing-management/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-08.png" width={36} height={36} alt="hr-banner-icon-08" />
                <h3>Leave and Absence Management</h3>
                <p>Create compliant leave programmes that adapt to global regulations and keep employees informed.</p>
                {/* <a href="/products/dynamics-365-copilot/" target='_blank'>Learn More</a> */}
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <img src="/img/hr-banner-icon-09.png" width={36} height={36} alt="hr-banner-icon-09" />
                <h3>Microsoft Copilot and AI Agents</h3>
                <p>AI-driven predictions, chat-based assistance, and workforce insights that help HR teams act faster.</p>
                <a href="/products/dynamics-365-copilot/" target='_blank'>Learn More</a>
              </div>
            </div>

            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>Dynamics 365 Human Resources payroll and every other module work as part of one connected system.</p>
                <a href='/contact-us/' style={{ cursor: 'pointer' }}
                  className="btn-get-started"
                >
                  <span>Book Your Free Demo Today &nbsp;<i className="bi bi-arrow-right"></i></span></a>
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
                <h2>Copilot in Dynamics 365 Human Resources</h2>
                <p>Imagine an HR system that acts as a partner instead of a tool. Copilot in Dynamics 365 Human Resources brings AI-powered automation, smart insights, and instant assistance to every stage of HR management. No wasted time, only seamless efficiency.</p>
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
                <h3>Transform the Way HR Works</h3>
                <p>Copilot automates repetitive tasks, giving HR teams time to focus on people, not paperwork.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Get Answers in Seconds</h3>
                <p>No need to search through reports. Ask Copilot, and the information appears instantly.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Support Recruiting and Employee Growth</h3>
                <p>Struggling with job descriptions, performance reviews, or employee communications? Copilot helps create and refine them.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Empower Managers and Employees</h3>
                <p>From leave requests to payroll cheques, Copilot acts as an <a href="/blog/from-assistants-to-autonomous-the-rise-of-ai-agents-in-dynamics-365/">AI agent in Dynamics 365</a> HR, simplifying processes for everyone.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Spot Trends Before They Impact Performance</h3>
                <p>Missed workforce trends lead to lost opportunities. Copilot identifies patterns and risks early, so HR leaders act with confidence.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <h3>Strengthen Decision-Making with Predictive Insights</h3>
                <p>Copilot uses predictive analytics to forecast workforce needs, helping leaders plan ahead with accuracy.</p>
              </div>
            </div>
            <div className='col-lg-12 text-center' style={{ paddingTop: '40px' }}>
              <div className='solution-new-six-card-cat'>
                <h3>Ready to experience smarter HR management? See Copilot in action today</h3>
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
                <h3>Start Your HR Transformation Now</h3>
                <p>Every HR delay affects payroll, compliance, and talent. Start a Dynamics 365 Human Resources trial with expert guidance for faster processes, engaged employees, and confident decision-making.</p>
                <div>
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Experience HR in Action Today &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/hr-banner-icon-10.png" alt="hr-banner-icon-10" />
      </section>

      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Human Resources Pricing</h2>
                <p>Microsoft keeps the pricing of Dynamics 365 Human Resources transparent and affordable, helping organisations manage workforce costs while improving employee satisfaction.</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            {/* <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Free Trial</span>
                </h3>
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <h4>£0.0*</h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Try for Free </a>
                <p className='disclm'>*Get a 30-day free trial to see it for yourself.</p>
              </div>
            </div> */}
            <div className='col-lg-6 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 Human Resources</h3>
                <p>Includes full application capabilities such as payroll integration, benefits management, leave tracking, and performance monitoring.</p>
                <h4>£103.80 <span>user/month, paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>Paid yearly, excluding VAT.</p>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Dynamics 365 Human Resources Self Service</h3>
                <p>Provides employee and manager self-service features for requests, training, and performance tracking.</p>
                <h4>£3.10 <span>user/month, paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Connect With Us to Get Started</a>
                <p className='disclm'>Paid yearly, excluding VAT.</p>
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
                <h2>Dynamics Square Services for Dynamics 365 Human Resources</h2>
                <p>Deploying Dynamics 365 Human Resources effectively requires the right partner. At Dynamics Square, we provide tailored services that ensure you gain the full value of your HR investment.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center" style={{paddingBottom:'30px'}}>
            <div className="col-lg-4 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/hr-banner-icon-11.png" alt="hr-banner-icon-11" width={42} height={42} />
                <h3>Dynamics 365 HR Implementation</h3>
                <p>Seamless deployment of HR capabilities, aligned with your business processes.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/hr-banner-icon-12.png" alt="hr-banner-icon-12" width={40} height={40} />
                <h3>Dynamics 365 HR Support</h3>
                <p>Continuous assistance to keep systems optimised and aligned with HR goals.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-4 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/hr-banner-icon-13.png" alt="hr-banner-icon-13" width={40} height={36} />
                <h3>Payroll Integration</h3>
                <p>Configure and connect Dynamics 365 Human Resources payroll with providers for accurate salary processing and compliance.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>  
          </div>
           <div className="row justify-content-center">
            <div className="col-lg-6 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/hr-banner-icon-14.png" alt="hr-banner-icon-14" width={44} height={32} />
                <h3>Recruiting Add-On</h3>
                <p>Integrate the Dynamics 365 Human Resources recruiting add-on with LinkedIn Talent Solutions to attract and hire better talent.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-6 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                {/* <img className="image-backx" src="/img/free-cons.png" alt="free-cons" /> */}
                <Image src="/img/hr-banner-icon-15.png" alt="hr-banner-icon-15" width={38} height={44} />
                <h3>Finance and Supply Chain Integration</h3>
                <p>Extend HR capabilities by linking with Dynamics 365 Finance and Dynamics 365 Supply Chain Management for unified operations.</p>
                <a href="/products/dynamics-365-supply-chain-management/" >Get Started <i className="bi bi-arrow-right"></i></a>
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
                          <a href="https://youtu.be/568w868TJdw?si=ULTGoaJJhz9Atmr2" target='_blank'>
                            <img src="/img/y-thum-01.jpg" width={273} height={192} alt="bc-8-20" />
                            <h3>Foster organizational agility with Microsoft Dynamics 365 Human Resources</h3>
                            <p>Learn how Microsoft Dynamics 365 Human Resources can help HR leaders to foster organizational agility with business process, task, and compliance management.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/LKmtKeN2hwk?si=ApJU_46aphXvKfz1" target='_blank'>
                            <img src="/img/y-thum-02.jpg" width={273} height={192} alt="bc-8-21" />
                            <h3>How to optimize HR programs with Microsoft Dynamics Human Resources</h3>
                            <p>Learn how to strengthen your operational HR programs, like benefits, leave and absence, and compliance with Microsoft Dynamics 365 Human Resources.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/8EKxmQLteto?si=D42o3JbtSRdHIhun" target='_blank'>
                            <img src="/img/y-thum-03.jpg" width={273} height={192} alt="bc-8-21" />
                            <h3>How to transform your employee experience with Microsoft Dynamics 365 Human Resources</h3>
                            <p>Learn how to foster self-service to provide a better employee experience and optimize workforce costs with Microsoft Dynamics 365 Human Resources.</p>
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
                  questions about Human Resources?</h2>
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
      {/* <BcPopPdf pdfType={pdfType} /> */}
    </>
  );
};

export default HumanResour;
