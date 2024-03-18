import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

const CasetManagement = () => {
  return (
    <>
      <Head>
      <title>Asset Management in Supply Chain Management | Dynamics Square UK</title>
        <meta
          name="description"
          content="Asset management in supply chain to optimise inventory, reduce costs, and improve efficiency. Key to seamless operations and customer satisfaction."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-supply-chain-management/case-management/"
        />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Asset Management in Supply Chain Management | Dynamics Square UK" />
        <meta property="og:description" content="Asset management in supply chain to optimise inventory, reduce costs, and improve efficiency. Key to seamless operations and customer satisfaction." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-supply-chain-management/case-management/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/assest-manage-banner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Asset Management in Supply Chain Management | Dynamics Square UK" />
        <meta name="twitter:description" content="Asset management in supply chain to optimise inventory, reduce costs, and improve efficiency. Key to seamless operations and customer satisfaction." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/assest-manage-banner.png" />

        <meta name="robots" content="noindex, nofollow" />

      </Head>
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Management in Dynamics 365  for Customer Service</h1>
              <p>Track and boost the issue resolution process along with offering an ideal customer experience with Case Management in Dynamics 365 for Customer Service.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    href="#exampleModal"><a data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Schedule a Demo Now!</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/assest-manage-banner.png"
                alt="Asset Management"
                width={665} height={447}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
          <header className="section-header">
            <h2>What is Case Management Module in Dynamics 365 for Customer Service? Case management is a module </h2>
            <p>Asset management is an essential add-on to manage, maintain, and track the physical assets of an organisation on a regular basis. Such assets include machines, forklifts, vehicles, and other complex equipment.</p>
            <p>The asset management module of Dynamics 365 SCM not only manages assets but also tracks all maintenance and service activities. This module empowers businesses to streamline all machines and physical assets by maintaining them in the best possible condition. With proper tracking and maintenance of the machine, you can smooth daily operations and enhance overall efficiency while reducing operational costs.</p>
          </header>
          </div>
        </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
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
                        <div className="wr-in">
                          <img src="/img/track_assets.png" alt="track_assets" />
                        </div>
                        <span>Track Assets</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                       <p>Track and record all assets containing different parameters of health, which include purchase data, warranty data, service records, and scheduled maintenance.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img src="/img/optimise_machine_performances.png" alt="optimise_machine_performances" />
                        </div>
                        <span>Optimise Machine Performances</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Collect data through AI and IoT devices to maintain asset health and predict potential issues that can hamper asset performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <hr className="mob-disp" />
              <div className="finace-acc">
                <div className="accordion" id="accnewadasd">
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
                        <div className="wr-in">
                          <img src="/img/Warehouse-Picks.png" alt="Warehouse-Picks" />
                        </div>
                        <span>Manage Maintenane/Servicing</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewadasd"
                    >
                      <div className="accordion-body">
                       <p>Evaluate the assets to schedule preventive maintenance and servicing activities to avoid any kind of fault or breakdown, and track work orders.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img
                            src="/img/mobile_accessibility.png"
                            alt="mobile_accessibility"
                          />
                        </div>
                        <span>Mobile Accessibility</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewadasd"
                    >
                      <div className="accordion-body">
                       <p>Modify information related to any asset using a dedicated mobile application that you can access without any issue.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Eliminate Challenges with Dynamics 365 Supply Chain Management</h3>
                <p>Implementing the asset management module of Dynamics 365 Supply Chain Management can give you control over all asset inventory, vehicle maintenance, and schedule services. Also, it eliminates all possible risks that can hamper the smooth functioning of assets or production machines. It avoids any kind of disruption and ensures a consistent workflow throughout the production cycle.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link  href="#exampleModal"><a data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Schedule a Free Demo!</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="side-heading-custom-01">
                <h2>Core Functionalities of Asset Management Module</h2>
              </div>
              <div className="custom-p-001">
                <p>Asset Management is an advanced module that offers numerous tools and capabilities to manage and maintain assets while streamlining maintenance jobs. It is capable of scheduling maintenance jobs, tracking work orders, collecting historical data, and optimising inventory levels. Some of its core functionalities are:</p>
                <div className="row" style={{paddingTop:'40px'}}>
                  <div className="col-lg-6">
                  <p>
                  <ul>
                  <li>Asset master data management</li>
                  <li>Funcitonal location management</li>
                  <li>Asset hierarchy management</li>
                  <li>Work order management</li>
                  <li>Maintenance scheduling</li>
                  <li>Spare parts management</li>
                  <li>Meter reading tracking</li>

                  </ul>
                  </p>
                  </div>
                  <div className="col-lg-6">
                  <p>
                  <ul>
                  <li>Calibration Management</li>
                  <li>Mobile App functionality</li>
                  <li>Seamless integration</li>
                  <li>Document Management</li>
                  <li>Budget and Forecasting</li>
                  <li>Compliance Management</li>
                  <li>Mobile app Functionality</li>

                  </ul>
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section>
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-lg-10">
          <header className="section-header">
            <h2>Benefits of Asset Management in Dynamics 365</h2>
            <p>The asset management module offers various practical benefits to all businesses. Some of the major benefits are:</p>
          </header>
          </div>
        </div>
      <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/preventive_maintenance.png" alt="preventive_maintenance" width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Preventive Maintenance</h3>
                  <p>Perform scheduled maintenance or service on machines to ensure proper functioning and eliminate any chances of unplanned downtime and equipment failure.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                <Image src="/img/improve_maintenance_planning.png" alt="improve_maintenance_planning"  width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Improve Maintenance Planning</h3>
                  <p>Perform proper maintenance planning, ensuring the right availability of resources, spare parts, and expertise to resolve any kind of complex issue.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                <Image src="/img/extended_asset_life.png" alt="extended_asset_life"  width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Extended Asset Life</h3>
                  <p>Proper servicing and replacing parts before they start to malfunction increases the overall life of assets and reduces the cost.</p>
                </div>
              </div>
           
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/data_driven_decision_making.png"
                    alt="data_driven_decision_making"
                    width={84} height={84}
                  />
                </div>
                <div className="style-grid-content">
                  <h3>Data-driven Decision Making</h3>
                  <p>Get real-time data insights to maximise asset performance while optimising the maintenance strategy.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/accurate_asset_records.png" alt="accurate_asset_records"  width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Accurate Asset Records</h3>
                  <p>Record all asset data and centralise it for a unified approach. Also, you can see the asset history and machine service record to simplify auditing processes.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/increased_asset_utilisation.png" alt="increased_asset_utilisation"  width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Increased Asset Utilisation</h3>
                  <p>Optimise the usage of assets to enhance performance and identify areas for improvement to enhance overall output. </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>

    <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/assest-manage-side.png"
                  alt="assest-manage-side"
                  width={482} height={513}
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>Asset Management in Different Industries</h2>
              </div>
              <div className="custom-p-001">
                <p>The asset management module of <Link href="/products/dynamics-365-supply-chain-management/"><a>Dynamics 365 Supply Chain Management</a></Link> allows you to make maintenance plans and track the usage of all assets, whether poorly or over utilised.</p>
                <p>Microsoft is so flexible that it enables you to integrate an asset management module with any solution available in the Dynamics 365 Ecosystem. Leveraging this capability, you can integrate <Link href="/products/microsoft-dynamics-365-finance/"><a>Dynamics 365 Finance</a></Link> with Dynamics 365 SCM to connect different departments and work in a collaborative way. Some of the major industries where asset management can be utilised are:</p>
                <p>
                  <ul>
                  <li>Manufacturing</li> 
                  <li>Automotive</li> 
                  <li>Not-for-profit</li> 
                  <li>Retail and Distribution</li> 
                  <li>Healthcare</li> 
                  </ul>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default CasetManagement;

