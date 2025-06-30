import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import useCardScrollEffect from "/components/useCardScrollEffect";

const Continia = () => {

  useCardScrollEffect()

  return (
    <>
      <Head>
        <title>Service Management with Business Central</title>
        <meta name="robots" content="noindex, nofollow" />
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
      <div className='solution-new-banner-one solution-new-banner-one-colo'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Continia for Dynamics 365 Business Central</h1>
                <span className='large-heading'>Finance Chaos Ends Here</span>
                <p>Are your invoices piling up? Expense claims crawl through spreadsheets? Output delivery still needs a human nudge? Gain full control with Continia for Dynamics 365 Business Central. It eliminates every blind spot before it costs you.</p>
                <div className="text-center">
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Book Demo Now! &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
              <div className='m-b-image-banner m-b-image-banner-nn'>
                <Image src="/img/cont-shape-pic.png" alt='bc-support-banner' width={944} height={322} />
              </div>
              <div className='m-b-image-banner-bott'>
                <Image src="/img/cont-shape.png" alt='cont-shape' width={1898} height={470} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className='bg-003s pd-con-60'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6 align">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>The Consequences of Manual Finance</h2>
                <p>Be it a missed invoice, lost receipt, or late payment, it isn’t your finance team but the outdated system and manual processes.</p>
                <p><b>Here’s what your business is grappled with when you manually manage your invoices:</b></p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Vendor invoices enter the system three days late</span></li>
                  <li><i className="bi bi-check"></i><span>Receipts for field expenses are emailed, lost, then questioned</span></li>
                  <li><i className="bi bi-check"></i><span>Payment approvals pause every weekend</span></li>
                  <li><i className="bi bi-check"></i><span>Reports take hours to compile</span></li>
                  <li><i className="bi bi-check"></i><span>Audits bring dread and overtime</span></li>

                </ul>
                <p>These are not small problems. And by the time you realise you're spending millions in salaries to fight fires created by bad systems, it’s too late.
                  This is where Continia for Dynamics 365 Business Central comes to your rescue.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Know How It Works &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/con-side-01.png" alt="con-side-01" width={485} height={450} className='im-two' />
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='bg-003-021 pd-con-61'>
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
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <img src="/img/con-ic-01.png" alt="con-ic-01" width={197} height={76} />
                <p><b>Document Capture</b><br />
                  to process invoices without lifting a finger</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <img src="/img/con-ic-02.png" alt="con-ic-02" width={197} height={76} />
                <p><b>Expense Management</b><br />
                  that eliminates paper receipts and messy spreadsheets </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <img src="/img/con-ic-03.png" alt="con-ic-03" width={197} height={76} />
                <p><b>Payment Management</b><br />
                  that keeps errors and missed deadlines off your books </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <img src="/img/con-ic-04.png" alt="con-ic-04" width={197} height={76} />
                <p><b>Document Output </b><br />
                  for seamless, consistent communication with vendors and clients </p>
              </div>
            </div>

          </div>
          <div className="row min-m-t-20">
            <div className="col-lg-6 align-self-center">
              <div className="card-700-bot">
                <p>This is how you remove inefficiency without replacing your systems. Just add Continia and let Business Central work smarter, not harder.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Automate with Continia &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-001'>
                <h3>Avoid late tax submissions because receipts weren’t coded</h3>
                <p>Manual work creates liabilities. Continia integration prevents them. Don’t risk your reputation.</p>
                <div>
                  <Link href="#exampleModal"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Stay Audit-ready with Continia  &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="n-015" />
      </section>

      <section className='solution-new-banner-three pd-con-63'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>The Stack of Continia Tools</h2>
                <p>Manual processes are eating hours, missing deadlines, and draining your finance team. Continia for Dynamics 365 Business Central fixes that. These are not tools but time-savers that sit natively inside your ERP and quietly get the hard work done.</p>
                <p><b>Here’s what makes Continia Business Central a no-brainer for modern finance operations:</b></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>For Your Customers</h3>
                      <p>Every touchpoint becomes faster, clearer, and more reliable. Confidence builds with every on-time visit and accurate invoice.</p>
                      <p><b>Key Features:</b></p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>Vendor invoices enter the system three days late</span></li>
                        <li><i class="bi bi-check"></i> <span>Receipts for field expenses are emailed, lost, then questioned.</span></li>
                        <li><i class="bi bi-check"></i> <span>Payment approvals pause every weekend</span></li>
                        <li><i class="bi bi-check"></i> <span>Reports take hours to compile.</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/con-side-02.png" width={580} height={456} alt="con-side-02" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>For Your Customers</h3>
                      <p>Every touchpoint becomes faster, clearer, and more reliable. Confidence builds with every on-time visit and accurate invoice.</p>
                      <p><b>Key Features:</b></p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>Vendor invoices enter the system three days late</span></li>
                        <li><i class="bi bi-check"></i> <span>Receipts for field expenses are emailed, lost, then questioned.</span></li>
                        <li><i class="bi bi-check"></i> <span>Payment approvals pause every weekend</span></li>
                        <li><i class="bi bi-check"></i> <span>Reports take hours to compile.</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/con-side-03.png" width={580} height={456} alt="con-side-03" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>For Your Customers</h3>
                      <p>Every touchpoint becomes faster, clearer, and more reliable. Confidence builds with every on-time visit and accurate invoice.</p>
                      <p><b>Key Features:</b></p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>Vendor invoices enter the system three days late</span></li>
                        <li><i class="bi bi-check"></i> <span>Receipts for field expenses are emailed, lost, then questioned.</span></li>
                        <li><i class="bi bi-check"></i> <span>Payment approvals pause every weekend</span></li>
                        <li><i class="bi bi-check"></i> <span>Reports take hours to compile.</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/con-side-04.png" width={580} height={456} alt="con-side-04" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>For Your Customers</h3>
                      <p>Every touchpoint becomes faster, clearer, and more reliable. Confidence builds with every on-time visit and accurate invoice.</p>
                      <p><b>Key Features:</b></p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>Vendor invoices enter the system three days late</span></li>
                        <li><i class="bi bi-check"></i> <span>Receipts for field expenses are emailed, lost, then questioned.</span></li>
                        <li><i class="bi bi-check"></i> <span>Payment approvals pause every weekend</span></li>
                        <li><i class="bi bi-check"></i> <span>Reports take hours to compile.</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/con-side-05.png" width={580} height={456} alt="con-side-05" />
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nnn-bg pd-con-64">

        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>The Stack of Continia Tools</h2>
                <p>Manual processes are eating hours, missing deadlines, and draining your finance team. Continia for Dynamics 365 Business Central fixes that. These are not tools but time-savers that sit natively inside your ERP and quietly get the hard work done.</p>
                <p><b>Here’s what makes Continia Business Central a no-brainer for modern finance operations:</b></p>
              </div>
            </div>
          </div>
          <div className="row solution-new-tab-content d-lg-none">
            <div className="col-lg-12">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Process Automation with Precision</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Accuracy Where It Matters Most</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Built-in Security and Compliance</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Real-Time Visibility and Control</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>ROI You Can Measure in Days</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Sustainability</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
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
          <div className="row tabs-none">
            <div className="cpl-lg-12">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3 solution-new-tab solution-new-tab-cant"
                  id="s-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="s-pills-home-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-1"
                    aria-selected="true"
                  >
                    <h3><img src="/img/autostop-01.png" alt="autostop-01" width={24} height={24} />Process Automation with Precision</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-2"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-2"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-02.png" alt="autostop-02" width={24} height={24} />Accuracy Where It Matters Most</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-hpme-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-hpme-3"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-hpme-3"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-03.png" alt="autostop-03" width={24} height={24} />Built-in Security and Compliance</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-4"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-4"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-04.png" alt="autostop-04" width={24} height={24} />Real-Time Visibility and Control</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-5"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-5"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-05.png" alt="autostop-05" width={24} height={24} />ROI You Can Measure in Days</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-6"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-6"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-06.png" alt="autostop-06" width={24} height={24} />Sustainability</h3>
                  </button>

                </div>
                <div
                  className="tab-content solution-new-tab-content solution-new-tab-cant-cont"
                  id="s-pills-tabContent-"
                >
                  <div
                    className="tab-pane fade show active"
                    id="s-pills-home-1"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-1-tab"
                  >
                    <div className="inner-con-div">
                      <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                      <p><b>Key Aspects</b></p>
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-2"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-2-tab"
                  >
                    <div className="inner-con-div">
                      <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                      <p><b>Key Aspects</b></p>
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-hpme-3"
                    role="tabpanel"
                    aria-labelledby="s-pills-hpme-3-tab"
                  >
                    <div className="inner-con-div">
                      <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                      <p><b>Key Aspects</b></p>
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-4"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-4-tab"
                  >
                    <div className="inner-con-div">
                      <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                      <p><b>Key Aspects</b></p>
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-5"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-5-tab"
                  >
                    <div className="inner-con-div">
                      <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                      <p><b>Key Aspects</b></p>
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-6"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-6-tab"
                  >
                    <div className="inner-con-div">
                      <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                      <p><b>Key Aspects</b></p>
                      <div className="row">
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                          <div className="inner-con-div-card">
                            <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
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
      <section className='solution-new-cta pd-con-65'>
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
      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/con-side-01.png" alt="con-side-01" width={485} height={450} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>The Consequences of Manual Finance</h2>
                <p>Be it a missed invoice, lost receipt, or late payment, it isn’t your finance team but the outdated system and manual processes.</p>
                <p><b>Here’s what your business is grappled with when you manually manage your invoices:</b></p>
                <ul className="bx-pi-cc">
                  <li><div className="im-60-b"><img src="/img/autostop-07.png" alt="autostop-02" width={24} height={24} /></div><span>Know which vendors delay payments and which team delays approvals</span></li>
                  <li><div className="im-60-b"><img src="/img/autostop-08.png" alt="autostop-02" width={24} height={24} /></div><span>Know which vendors delay payments and which team delays approvals</span></li>
                  <li><div className="im-60-b"><img src="/img/autostop-09.png" alt="autostop-02" width={24} height={24} /></div><span>Know which vendors delay payments and which team delays approvals</span></li>
                  <li><div className="im-60-b"><img src="/img/autostop-10.png" alt="autostop-02" width={24} height={24} /></div><span>Know which vendors delay payments and which team delays approvals</span></li>
                </ul>

                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Empower Your Business with Continia Today &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003s pd-con-67'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>The Consequences of Manual Finance</h2>
                <p>Be it a missed invoice, lost receipt, or late payment, it isn’t your finance team but the outdated system and manual processes.</p>
                <p><b>Here’s what your business is grappled with when you manually manage your invoices:</b></p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Vendor invoices enter the system three days late</span></li>
                  <li><i className="bi bi-check"></i><span>Receipts for field expenses are emailed, lost, then questioned</span></li>
                  <li><i className="bi bi-check"></i><span>Payment approvals pause every weekend</span></li>
                  <li><i className="bi bi-check"></i><span>Reports take hours to compile</span></li>
                  <li><i className="bi bi-check"></i><span>Audits bring dread and overtime</span></li>

                </ul>
                <p>These are not small problems. And by the time you realise you're spending millions in salaries to fight fires created by bad systems, it’s too late.
                  This is where Continia for Dynamics 365 Business Central comes to your rescue.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Know How It Works &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/con-side-01.png" alt="con-side-01" width={485} height={450} className='im-two' />
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="solution-faq faq pd-con-68">
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
      </section>
    </>
  );
};

export default Continia;
