import React from 'react';
import PulseButton from './PulseButton';

const DeskstopMenu = () => {
  return (
    <>
      <ul>
        <li className="dropdown megamenu megamenu-new">
          <a href="#">
            <span>Solution</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="megamenu-list">
            <div className="left-list">
              <div className="d-flex">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                  >
                    <a>
                      <span>By Size</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-addon-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-addon"
                    aria-selected="false"
                  >
                    <a>
                      <span>ERP</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-CRM-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-CRM"
                    aria-selected="false"
                  >
                    <a>
                      <span>CRM</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-settingss-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settingss"
                    aria-selected="false"
                  >
                    <a href="#">
                      <span>Integrations</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    aria-selected="false"
                  >
                    <a>
                      <span>Power Platform</span>
                    </a>
                  </div>
                  {/* <div
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    aria-selected="false"
                  >
                    <a href="#">
                      <span>Power Platform</span>
                    </a>
                  </div> */}
                  <div
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    aria-selected="false"
                  >
                    <a href="#">
                      <span>Legacy Dynamics</span>
                    </a>
                  </div>
                 
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                  >
                    <div className="container">
                       <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/erp-for-startups/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/store.png"
                                  alt="azure"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Startup</span>
                                <p>Smart ERP solutions to kickstart your growth</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-365-for-small-businesses/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/storefront.png"
                                  alt="mixed-Reality-icons"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Small Business</span>
                                <p>Simplifying business for small, ambitious teams</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-365-for-medium-businesses/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/group-3535.png"
                                  alt="AI"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Mid Size</span>
                                <p>Powering growth for mid-sized businesses.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-365-for-large-businesses/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/factory.png"
                                  alt="AI"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Enterprise</span>
                                <p>Advanced ERP for large, global enterprises</p>
                              </div>
                            </a>
                          </div>
                        </div>
                     
                      </div> 
                      
                    </div>
                  </div>
                  <div className="tab-pane cc-height fade" id="v-pills-addon">
                    <div className="container">
                        <div className="row g-1">
                        {/* <div className='col-lg-12'>
                          <div className='mm-title'>
                            <p>ERP</p>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-businesscentral.svg"
                                  alt="dynamics-365-businesscentral"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Business Central</span>
                                <p>All-in-one solution for all your business practices</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-finance/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-finance.svg"
                                  alt="dynamics-365-finance"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Finance</span>
                                <p>Improve your finance practices</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-supply-chain-management/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-supplychainmanagement.svg"
                                  alt="dynamics-365-supplychainmanagement"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Supply Chain</span>
                                <p>
                                  Optimize operations and drive agile
                                  Supply Chain
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-human-resources/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-HRM.svg"
                                  alt="dynamics-365-HRM"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Human Resource</span>
                                <p>
                                  Optimize Your Resource Utilization
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-commerce/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-commerce.svg"
                                  alt="dynamics-365-commerce"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Commerce</span>
                                <p>
                                  Unify Your Back-Office, In-Store,
                                  And Digital Experience
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-project-operations/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-project-management.svg"
                                  alt="dynamics-365-project-management"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Project Operations</span>
                                <p>
                                  Automate and streamline your
                                  projects
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>

                      </div> 
                      
                    </div>
                  </div>
                  <div className="tab-pane cc-height fade" id="v-pills-CRM">
                    <div className="container">
                        <div className="row g-1">
                        
                        {/* <div className='col-lg-12'>
                          <div className='mm-title'>
                            <p>CRM-Customer Engagement</p>
                          </div>
                        </div> */}
                         <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-sales/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-sales.svg"
                                  alt="dynamics-365-sales"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Sales</span>
                                <p>
                                  Drive end-to-end sales practices
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-marketing/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-marketing.svg"
                                  alt="dynamics-365-marketing"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Marketing</span>
                                <p>
                                  Maximize ROI with integrated
                                  Marketing
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-field-service/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-fieldservice.svg"
                                  alt="dynamics-365-fieldservice"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Field Service</span>
                                <p>
                                  Drive connected and collaborated
                                  field service
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      
                      
                      
                        {/* <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-human-resources/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-HRM.svg"
                                  alt="dynamics-365-HRM"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Human Resource</span>
                                <p>
                                  Optimize Your Resource Utilization
                                </p>
                              </div>
                            </a>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-customer-service/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-customer-service.svg"
                                  alt="dynamics-365-customer-service"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Customer Service</span>
                                <p>
                                  Drive omnichannel customer
                                  experience
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/d365-icon.png"
                                  alt="d365-icon"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics 365 Suite</span>
                                <p>Empower the Business with a suite of Advanced Solutions </p>
                              </div>
                            </a>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-customer-engagement/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-customer-engagement.svg"
                                  alt="dynamics-365-customer-engagement"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Customer Engagement</span>
                                <p>
                                  Improve Your marketing capabilities
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                       
                      
                       

                      </div> 
                      
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-bi/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/power-bi.svg"
                                  alt="power-bi"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power BI</span>
                                <p>
                                  Create powerful visual insights,
                                  analytics
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-apps/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/power-apps.svg"
                                  alt="power-apps"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power Apps</span>
                                <p>
                                  Build web & mobile apps with zero or
                                  minimal code
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-automate/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/power-automate.svg"
                                  alt="power-automate"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power Automate</span>
                                <p>
                                  Automate your processes to improve
                                  workflows
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-virtual-agents/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/virtual agent.svg"
                                  alt="virtual agent"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power Virtual Agents</span>
                                <p>
                                  Create powerful AI Bots to maximize
                                  productivity
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-nav/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/NAV.png"
                                  alt="NAV"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics NAV</span>
                                <p>
                                  A flexible ERP solution for SMBs
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-crm/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/CRM.png"
                                  alt="CRM"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics CRM</span>
                                <p>
                                  Increase Revenue and Customer
                                  Satisfaction
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-ax/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/AX.png"
                                  alt="AX"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics AX</span>
                                <p>
                                  The Most Complete, Agile And
                                  Powerful ERP
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-gp/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/GP.png"
                                  alt="GP"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics GP</span>
                                <p>
                                  Accounting software designed for
                                  SMEs
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-erp/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/ERP.png"
                                  alt="GP"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics ERP</span>
                                <p>
                                  Streamline Entire Business Management with Ease
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-finance-operations/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/F&Q.png"
                                  alt="GP"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics F&O</span>
                                <p>
                                  Accelerate your Finance and Inventory more Efficiently
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  {/* <div
                    className="tab-pane fade"
                    id="v-pills-settingss"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-azure/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/azure.svg"
                                  alt="azure"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Microsoft Azure</span>
                                <p>
                                  Create secure, future-ready cloud
                                  solutions
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365/mixed-reality/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/mixed-Reality-icons.svg"
                                  alt="mixed-Reality-icons"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Mixed Reality</span>
                                <p>
                                  Technology that modernises your
                                  workforce
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-ai/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/AI.svg"
                                  alt="AI"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Artificial Intelligence</span>
                                <p>
                                  Leverage Microsoft's deep learning
                                  technology
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-sustainability-manager/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Sustainability-Manager.png"
                                  alt="AI"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Sustainability Manager</span>
                                <p>
                                  Record, report, and reduce the environmental impact
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-nav-to-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/NAV.png"
                                  alt="NAV Upgrade"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Nav Upgrade</span>
                                <p>
                                  Let us help you with a smoother and stress-free NAV upgrade process
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-non-profit-accelerator/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/non-profit.png"
                                  alt="NAV Upgrade"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Non-profits Accelerator</span>
                                <p>Supercharge Non-profits with AI</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-business-central/customisation/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-businesscentral.svg"
                                  alt="businesscentral"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Business Central Customisations</span>
                                <p>Personalise Business Central to meet unique customer needs and boost ROI</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-settingss"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/continia-for-dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/continia.png"
                                  alt="continia"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Continia integration</span>
                                <p>Scan, analyse, and process documents with optimum quality</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/insights-works-for-dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Insight_Work.png"
                                  alt="Insight_Work"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Insight Works</span>
                                <p>Optimise your inventory and distribution operations effortlessly</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/sana-commerce-for-dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Sana_Commerce.png"
                                  alt="Sana_Commerce"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Sana Commerce</span>
                                <p>Avail a cloud e-commerce solution to supercharge your online store</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/wms-for-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Insight_Work.png"
                                  alt="Sana_Commerce"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Mobile WMS BC</span>
                                <p>Optimize warehouse operations, simplify inventory, boost profits</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/continia-document-capture-with-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/continia.png"
                                  alt="Sana_Commerce"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Continia OCR</span>
                                <p>Transform document management, streamline processing, manage easily</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/continia-expense-management/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/continia.png"
                                  alt="Sana_Commerce"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Continia Expense Management </span>
                                <p>Monitor corporate expenses, eliminate manual errors with Continia</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/shopify-connector-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/shopify-integration-logo.svg"
                                  alt="shopify-integration-logo"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Shopify Connector</span>
                                <p>Digitalize your business to reach global customers</p>
                              </div>
                            </a>
                          </div>
                        </div> */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-list ">
              <div className="rigt-list-menu rigt-list-menu-new p-relativ">
                <p>Essential Tool</p>
                <ul>
                  <li>
                    <a href="/erp-implementation-cost-calculator/">
                      <span className='menu-title-new'>
                        Get Your ERP Cost Estimate
                      </span>
                      <span className='menu-title-para'>
                        Quick, free, and tailored to your business.
                      </span>
                      <span className='menu-title-link'>
                        Check Now <i className="bi bi-arrow-right"></i>
                      </span>
                      
                    </a>
                  </li>
                  {/* <li>
                    <a href="/dynamics-nav-to-business-central/">
                      <span className='menu-title-new'>
                        Get Your ERP Cost Estimate
                      </span>
                      <span className='menu-title-para'>
                        Quick, free, and tailored to your business.
                      </span>
                      <span className='menu-title-link'>
                        Check Now <i className="bi bi-arrow-right"></i>
                      </span>
                      
                    </a>
                  </li> */}

                </ul>
                <div className='pp-absol'>
                  <a href="/products/microsoft-dynamics-365/"><img src="/img/menu--ss.png" alt="menu--ss" /></a>
                </div>
              </div>
            </div>
           
          </div>
          
        </li>

        <li className="dropdown dropdown-smal-mega">
          <a href="/industries/">
            <span>Industries</span>{" "}
            <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/startups/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Startup.png"
                      alt="Startup"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Startups</span>
                    <p>Support your startup ideation and maximise your growth</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/microsoft-cloud-for-nonprofit/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Not-FOr-Profit.png"
                      alt="Not FOr Profit"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Not for Profit (Microsoft Cloud)</span>
                    <p>Carry out mission-critical Challenges with perfect tools</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-education/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/education.png"
                      alt="education"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>D365 for Education</span>
                    <p>Effectively manage students and staff for overall growth</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/ecommerce/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/E-commerce.png"
                      alt="E-commerce"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Ecommerce</span>
                    <p>Optimise E-commerce processes with real-time stocks</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/microsoft-cloud-for-manufacturing/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/MAnufacturing.png"
                      alt="MAnufacturing"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Manufacturing (Microsoft Cloud)</span>
                    <p>Connect your people and operations to drive profitability</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/professional-services/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Professional-ervice.png"
                      alt="Professional-ervice"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Professional Services</span>
                    <p>Streamline administration processes leveraging automation</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/food-and-beverages/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Food.png"
                      alt="Food"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Food & Beverages</span>
                    <p>Manage supply and inventory processes with real-time data</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-healthcare/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/healthcare.png"
                      alt="healthcare"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Dynamics 365 for Healthcare</span>
                    <p>Track clinical operations while enhancing patient experience</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-automotive-accelerator/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/automaotive.png"
                      alt="automaotive"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Automotive Accelerator</span>
                    <p>Maintain, manage, and streamline an automotive business</p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-retail/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/retail-icon.png"
                      alt="retail-icon"
                      width="48" height="48"
                    />
                  </div>
                  <div className="content">
                    <span>D365 for Retail</span>
                    <p>Optimize retail operations with seamless user experience</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/our-services/">
            <span>Our Services</span>
            <i className="bi bi-chevron-down"></i>
          </a>
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
        </li>
        <li className="dropdown">
          <a href="#">
            <span>Company</span>{" "}
            <i className="bi bi-chevron-down"></i>
          </a>
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
        </li>
        <li className="dropdown">
          <a href="#">
            <span>Resources</span>{" "}
            <i className="bi bi-chevron-down"></i>
          </a>
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
        </li>
        <li>
          <PulseButton />
        </li>
      </ul>
    </>
  );
}

export default DeskstopMenu;
