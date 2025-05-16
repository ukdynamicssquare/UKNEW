import React from 'react';

const MobileMenu = () => {
  return (
    <>
      <div className="mobile-menu-section-wr">

        <div className="togglr-icon-nav">
          <div className="cont-m-mobile">
            <a
              className="getstarted custtss"
              href="tel:+442037697689"
              target="_self"
            >
              <i className="bi bi-telephone-fill"></i></a>
          </div>
          <a
            href="#offcanvasWithBothOptions"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasWithBothOptions"
            aria-label="offcanvas"
          >
            <i className="bi bi-list mobile-nav-toggle"></i>
          </a>
        </div>
        <div className="mobile-new-nav">
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <a href="/" className="logo d-flex align-items-center">
                <img
                  src="/img/dynamicssqure-logo.svg"
                  alt="Dynamics Square logo"
                  width="282" height="19"
                />
              </a>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="accordion" id="mobile-toggle-nav">
              <div className="accordion-item">
                  <div className="accordion-header" id="list-0">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsezero"
                      aria-expanded="false"
                      aria-controls="collapsezero"
                    >
                      <a href="#">
                        <span>Company By Size</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapsezero"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-0"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a href="/erp-for-startups/">Startup</a>
                          </li>
                          <li>
                            <a href="/dynamics-365-for-small-businesses/">Small Business</a>
                          </li>
                          <li>
                            <a href="/dynamics-365-for-medium-businesses/">Mid Size</a>
                          </li>
                          <li>
                            <a href="/dynamics-365-for-large-businesses/">Enterprise</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="list-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <a href="#">
                        <span>Solutions</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-1"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a href="/products/microsoft-dynamics-365/">
                              <span>Microsoft Dynamics 365</span>
                            </a>
                          </li>
                          <li>
                            <a href="/products/dynamics-365-business-central/">
                              Business Central
                            </a>
                          </li>
                          <li>
                            <a href="/products/microsoft-dynamics-365-finance/">
                              Finance
                            </a>
                          </li>
                          <li>
                            <a href="/products/dynamics-365-supply-chain-management/">
                              Supply Chain Management
                            </a>
                          </li>
                          <li>
                            <a href="/products/microsoft-dynamics-365-sales/">
                              Sales
                            </a>
                          </li>
                          <li>
                            <a href="/products/microsoft-dynamics-365-customer-service/">
                              Customer Service
                            </a>
                          </li>
                          <li>
                            <a href="/products/microsoft-dynamics-365-field-service/">
                              Field Service
                            </a>
                          </li>
                          <li>
                            <a href="/products/dynamics-365-project-operations/">
                              Project Operations
                            </a>
                          </li>
                          <li>
                            <a href="/products/microsoft-dynamics-365-marketing/">
                              Marketing
                            </a>
                          </li>
                          <li>
                            <a href="/products/microsoft-dynamics-365-commerce/">
                              Commerce
                            </a>
                          </li>
                          <li>
                            <a href="/products/dynamics-365-human-resources/">
                              Human Resource
                            </a>
                          </li>
                          <li>
                            <a href="/products/azure-iot-internet-of-things/">
                              <span>Azure IoT</span>
                            </a>
                            <ul>
                              <li>
                                <a href="/products/azure-iot-hub/">
                                  IoT Hub
                                </a>
                              </li>
                              <li>
                                <a href="/products/azure-iot-central/">
                                  IoT Central
                                </a>
                              </li>
                              <li>
                                <a href="/products/azure-sphere/">
                                  Azure Sphere
                                </a>
                              </li>
                              <li>
                                <a href="/products/azure-iot-edge/">
                                  IoT Edge
                                </a>
                              </li>
                              <li>
                                <a href="/products/azure-digital-twins/">
                                  Digital Twins
                                </a>
                              </li>
                              <li>
                                <a href="/products/azure-machine-learning/">
                                  Machine Learning
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/products/microsoft-power-platform/">
                              <span>Power Platform</span>
                            </a>
                            <ul>
                              <li>
                                <a href="/products/microsoft-power-bi/">
                                  Power BI
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-power-apps/">
                                  Power Apps
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-power-automate/">
                                  Power Automate
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-power-virtual-agents/">
                                  Power Virtual Agents
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href="#">
                              <span>More Solutions</span>
                            </a>
                            <ul>
                              <li>
                                <a href="/products/microsoft-dynamics-erp/">
                                  ERP Solutions (NAV/AX/GP)
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-dynamics-crm/">
                                  CRM Solutions
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-azure/">
                                  Microsoft Azure
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-dynamics-365/mixed-reality/">
                                  Mixed Reality
                                </a>
                              </li>
                              <li>
                                <a href="/products/microsoft-dynamics-365-ai/">
                                  Artificial Intelligence (AI)
                                </a>
                              </li>
                            </ul>
                          </li>
                          {/* <li>
                  <a href="#">
                    <span>Must Read</span>
                  </a>
                </li>

                <li>
                  <a href="/microsoft-dynamics-365-cloud-vs-on-premise/">
                    Cloud vs On-premise Comparison
                  </a>
                </li>
                <li>
                  <a href="/d365-business-central-vs-d365-finance/">
                    Business Central vs Finance
                  </a>
                </li>
                <li>
                  <a href="/why-choose-microsoft-dynamics-365-business-central/">
                    Why Choose D365 Business Central?
                  </a>
                </li>
                <li>
                  <a href="/10-reasons-to-choose-dynamics-365/">
                    Why Migrate to Dynamics 365?
                  </a>
                </li>
                <li>
                  <a href="/advantages-capabilities/">
                    Business Central - Advantages & Capabilities
                  </a>
                </li>
                <li>
                  <a href="/dynamics-365-finance-operations-vs-sap-erp/">
                    Dynamics 365 Finance & Operations vs SAP ERP
                  </a>
                </li>
                <li>
                  <a href="/dynamics-365-business-central-vs-sap-business-one/">
                    Dynamics 365 Business Central vs SAP Business
                    One
                  </a>
                </li>
                <li>
                  <a href="/dynamics-365-business-central-vs-netsuite">
                    Dynamics 365 Business Central vs. NetSuite
                  </a>
                </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="list-7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      <a href="/industries/">
                        <span>Add-Ons</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-7"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a href="/continia-for-dynamics-365-business-central/">Continia integration</a>
                          </li>
                          <li>
                            <a href="/insights-works-for-dynamics-365-business-central/">Insight Works</a>
                          </li>
                          <li>
                            <a href="/sana-commerce-for-dynamics-365-business-central/">Sana Commerce</a>
                          </li>
                          <li>
                            <a href="/wms-for-business-central/">Mobile WMS BC</a>
                          </li>
                          <li>
                            <a href="/continia-document-capture-with-business-central/">Continia OCR</a>
                          </li>
                          <li>
                            <a href="/continia-expense-management/">Continia expense management</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="list-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <a href="/industries/">
                        <span>Industries</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-2"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a href="/industries/startups/">Startups</a>
                          </li>
                          <li>
                            <a href="/industries/microsoft-cloud-for-nonprofit/">
                              Not for Profit (Microsoft Cloud)
                            </a>
                          </li>
                          <li>
                            <a href="/industries/ecommerce/">Ecommerce</a>
                          </li>
                          <li>
                            <a href="/industries/dynamics-365-for-education/">D365 for Education</a>
                          </li>
                          <li>
                            <a href="/industries/microsoft-cloud-for-manufacturing/">
                              Manufacturing (Microsoft Cloud)
                            </a>
                          </li>
                          <li>
                            <a href="/industries/professional-services/">
                              Professional Services
                            </a>
                          </li>
                          <li>
                            <a href="/industries/food-and-beverages/">
                              Food & Beverages
                            </a>
                          </li>
                          <li>
                            <a href="/industries/dynamics-365-for-healthcare/">
                              Dynamics 365 for Healthcare
                            </a>
                          </li>
                          <li>
                            <a href="/industries/dynamics-365-automotive-accelerator/">
                              Automotive Accelerator
                            </a>
                          </li>
                          <li>
                            <a href="/industries/dynamics-365-for-retail/">
                              Dynamics 365 for Retail
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="list-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <a href="#">
                        <span>Our Services</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-3"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a href="/our-services/dynamics-365-implementation-services/">
                              Implementation Services
                            </a>
                          </li>
                          <li>
                            <a href="/our-services/dynamics-365-support-services/">
                              Support Services
                            </a>
                          </li>
                          <li>
                            <a href="/our-services/dynamics-365-upgrade-services/">
                              Upgrade Services
                            </a>
                          </li>
                          <li>
                            <a href="/our-services/dynamics-365-training/">
                              Dynamics 365 Training
                            </a>
                          </li>
                          <li>
                            <a href="/our-services/dynamics-365-consultant/">
                              Dynamics 365 Consultants
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="list-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      <a href="#">
                        <span>Company</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-4"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a href="/about-us/">About Us</a>
                          </li>
                          <li>
                            <a href="/why-us/">Why Us</a>
                          </li>
                          <li>
                            <a href="/partner/">Partners</a>
                          </li>
                          <li>
                            <a href="/career/">Careers</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-header" id="list-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      <a href="#">
                        <span>Resources</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-5"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <div className="iner-list">
                        <ul>
                          <li>
                            <a
                              href="/blog/"
                              target="_self"
                            >
                              Blogs
                            </a>
                          </li>
                          <li>
                            <a href="/ebook/">eBooks</a>
                          </li>

                          <li>
                            <a href="/case-studies/">Case Studies</a>
                          </li>
                          <li>
                            <a href="/guides/">Guides</a>
                          </li>
                          <li>
                            <a href="/white-papers/">White Papers</a>
                          </li>
                          <li>
                            <a href="/webinars/">Webinars</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <a className="nav-link" href="/contact-us/">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
