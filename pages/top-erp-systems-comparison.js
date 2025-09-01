'use client';

import React, { useState, useEffect } from 'react';
import { Modal, Button, Spinner, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import faqData from '../public/data/erp_faq.json';
import FormErpCompare from '../components/FormErpCompare';
const CompareErps = () => {
  const [allErps, setAllErps] = useState([]);
  const [features, setFeatures] = useState([]);
  const [selectedErps, setSelectedErps] = useState([null, null, null, null]);
  const [showModal, setShowModal] = useState(false);
  const [activeBoxIndex, setActiveBoxIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showFormModal, setShowFormModal] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const featureLabels = {
    overview: "Overview",
    deployment: "Deployment",
    costPerUser: "Cost Per User",
    priceRange: "Price Range",
    // costPerProject: "Cost Per Project",
    // minImplementationFee: "Minimum Implementation Fee",
    // pricingNotes: "Pricing Notes",
    coreModules: "Core Modules",
    scalability: "Scalability",
    customization: "Customization",
    usabilitySupportTraining: "Usability / Support / Training",
    analyticsSecurity: "Analytics & Security",
    keyMarketStrength: "Key Market Strength",
    notableContext: "Notable Context",
    customerPerceptionUpdates: "Customer Perception Updates"
  };

  // useEffect(() => {
  //   fetch('https://erptoolapi.onrender.com/api/frontend/products')
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllErps(data);
  //       if (data.length > 0) {
  //         setFeatures(Object.keys(data[0].features));
  //       }
  //     })
  //     .catch(err => console.error("Error loading ERP data:", err));
  // }, []);

  // 👉 Define your desired order here
  const featureOrder = [
    "overview",
    "deployment",
    "priceRange",
    "costPerUser",
    // "costPerProject",
    // "minImplementationFee",
    // "pricingNotes",
    "coreModules",
    "scalability",
    "customization",
    "usabilitySupportTraining",
    "analyticsSecurity",
    "keyMarketStrength",
    "notableContext",
  ];

  useEffect(() => {
    fetch('https://erptoolapi.onrender.com/api/frontend/products')
      .then(res => res.json())
      .then(data => {
        setAllErps(data);

        if (data.length > 0) {
          const apiFeatures = Object.keys(data[0].features);

          // Keep your manual order first, then append any new API keys
          const orderedFeatures = [
            ...featureOrder,
            ...apiFeatures.filter(f => !featureOrder.includes(f))
          ];

          setFeatures(orderedFeatures);
        }
      })
      .catch(err => console.error("Error loading ERP data:", err));
  }, []);

  const compactSelections = (arr) => {
    if (!showTable) {
      const filled = [...arr];
      while (filled.length < 4) filled.push(null);
      return filled;
    } else {
      const filled = arr.filter(Boolean);
      if (filled.length < 4) filled.push(null);
      return filled;
    }
  };

  const handleSelect = (erp) => {
    // Prevent duplicate selection
    if (selectedErps.some(selected => selected && selected.name === erp.name)) return;

    // Fill the first available slot from the left
    const updated = [...selectedErps];
    const emptyIndex = updated.findIndex(item => item === null);
    if (emptyIndex !== -1) {
      updated[emptyIndex] = erp;
    }

    setSelectedErps(compactSelections(updated));
    setShowModal(false);
    setActiveBoxIndex(null); // no need to track active box anymore
  };




  const removeSelection = (index) => {
    const updated = [...selectedErps];
    updated[index] = null;
    setSelectedErps(compactSelections(updated));
  };

  const handleCompare = () => {
    setLoading(true);
    setTimeout(() => {
      setShowTable(true);
      setSelectedErps(compactSelections(selectedErps));
      setLoading(false);
    }, 600);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormFilled(true);
      setShowFormModal(false);
    }
  };

  const hasEnoughToCompare = selectedErps.filter(Boolean).length >= 2;


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
        <title>ERP Comparison 2025: Which System Fits Your Business Needs?</title>
        <meta
          name="description"
          content="Compare top ERP systems for 2025. Get features, pricing, and benefits to find the best ERP software that fits your business needs and boosts efficiency."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/top-erp-systems-comparison/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/top-erp-systems-comparison/" />
        <meta property="og:title" content="ERP Comparison 2025: Which System Fits Your Business Needs?" />
        <meta property="og:description" content="Compare top ERP systems for 2025. Get features, pricing, and benefits to find the best ERP software that fits your business needs and boosts efficiency.​" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/about-pic.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/top-erp-systems-comparison/" />
        <meta property="twitter:title" content="ERP Comparison 2025: Which System Fits Your Business Needs?" />
        <meta property="twitter:description" content="Compare top ERP systems for 2025. Get features, pricing, and benefits to find the best ERP software that fits your business needs and boosts efficiency." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/about-pic.png" />
      </Head>
      <div className="container py-5">
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <div className='solution-new-banner-one-content'>
              <h1 className='large-heading'>Compare the Top ERP Systems for Your Business in 2025 </h1>
              <p>Start with our side-by-side ERP software comparison 2025 tool, covering top ERP systems for 2025 in terms of features, pricing, and deployment. Assess capabilities, estimate ERP cost per user, and shortlist platforms that match your requirements across cloud ERP systems for 2025 and on-premises ERP systems. </p>
              <p>Request ERP demos and price quotes for leading options below or browse categories to compare industry picks and other popular segments.
                Read our selection guide packed with practical insights to support a confident choice among the top 10 ERP systems for 2025 so you choose the best ERP software for your business in 2025. </p>
            </div>
          </div>

        </div>

        <div className='row pdd-100'>
          <div className='col-lg-12'>
            <div className="table-responsive position-relative">
              <table className="table table-bordered text-center fixed-table">
                <thead>
                  <tr>
                    {showTable && <th className='mm-s' style={{ width: "200px" }}>Feature</th>}
                    {compactSelections(selectedErps).map((erp, index) => (
                      <th className='mm-s' key={index} style={{ width: `${100 / 4}%` }}>
                        {erp ? (
                          <div className="erp-card position-relative">
                            <button
                              className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
                               onClick={() => removeSelection(index)}
                            >
                              ×
                            </button>
                            <img
                              className="mobile-small"
                              src={`https://cdn.gemsroot.com/${erp.logo}`}
                              alt={erp.name}
                              style={{ maxWidth: "200px", marginBottom: "10px" }}
                              onError={(e) => (e.currentTarget.src = "/img/e-r-p-logo.png")}
                            />
                            <h5 style={{ fontSize: "14px", color: "#3d3459" }}>{erp.name}</h5>
                           
                          </div>
                        ) : (
                          <div
                            className="erp-card placeholder-card"
                            onClick={() => { setActiveBoxIndex(index); setShowModal(true); }}
                            style={{ cursor: "pointer" }}
                          >
                            {/* 👇 Default ERP logo here */}
                            <img
                              src="/img/e-r-p-logo.png"
                              alt="Default ERP"
                              style={{ maxWidth: "80px", marginBottom: "10px" }}
                            />
                            <p className="text-muted mm-p">Select ERP</p>
                           
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>

                {showTable && (
                  <tbody>
                    {features.map((feature, rowIndex) => {
                      const shouldBlurRow = !formFilled && rowIndex >= Math.floor(features.length / 2);
                      return (
                        <tr key={feature}>
                          <td className="text-start tt">
                            <b>{featureLabels[feature] || feature}</b>
                          </td>
                          {compactSelections(selectedErps).map((erp, colIndex) => (
                            <td key={colIndex} className={shouldBlurRow ? "blurred-cell" : ""}>
                              {erp
                                ? Array.isArray(erp.features[feature])
                                  ? erp.features[feature].join(", ")
                                  : erp.features[feature]
                                : null
                              }
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>

              {hasEnoughToCompare && !showTable && (
                <div className="text-center my-3">
                  <Button className='btn-get-started brrt' onClick={handleCompare} variant="primary">Compare</Button>
                </div>
              )}

              {loading && (
                <div className="text-center my-4">
                  <Spinner animation="border" variant="primary" />
                </div>
              )}

              <div className='m-hidess'>
                {!formFilled && showTable && (
                  <div className="unlock-button-container">
                    <Button className='btn-get-started brrt' variant="warning" onClick={() => setShowFormModal(true)}>
                      Unlock Full Comparison
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className='d-hidess-no'>
              {!formFilled && showTable && (
                <div className="unlock-button-n">
                  <Button variant="warning" className='btn-get-started brrt' onClick={() => setShowFormModal(true)}>
                    Unlock Full Comparison
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ERP Modal */}
        <Modal show={showModal} size="lg" onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title><div className='text-center'>Select an ERP</div></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {allErps.map((erp, idx) => {
                const isSelected = selectedErps.some(sel => sel && sel.name === erp.name);
                return (
                  <div
                    key={idx}
                    className={`col-6 col-md-4 mb-3 ${isSelected ? "opacity-50" : ""}`}
                    onClick={() => !isSelected && handleSelect(erp)}
                    style={{ pointerEvents: isSelected ? "none" : "auto", cursor: 'pointer' }}
                  >
                    <div className="border p-2 rounded bg-light text-center h-100">
                      <img src={`https://cdn.gemsroot.com/${erp.logo}`} alt={erp.name} style={{ maxWidth: "100px", marginBottom: '15px' }} />
                      <h5 style={{ fontSize: '13px', color: '#3d3459' }}>{erp.name}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>

        {/* Form Modal */}
        <Modal show={showFormModal} onHide={() => setShowFormModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Unlock Full Comparison</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormErpCompare onSuccess={() => {
              setFormFilled(true);
              setShowFormModal(false);
            }} />
            {/* <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit">Submit</Button>
            </Form> */}
          </Modal.Body>
        </Modal>



        <section className="solution-faq faq solution-faq-r pdd-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 ">
                <div className="solution-new-banner-sub-head text-center">
                  <h2>Have you got
                    questions about ERP Systems?</h2>
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
                    <button className="btn faq-btn-l btn-get-started brrt" onClick={handleLoadMore}>
                      Load More <i className="bi bi-chevron-down"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>




          </div>
        </section>


        <style jsx>{`
          .fixed-table {
  table-layout: fixed;
  width: 100%;
}

.fixed-table th:first-child,
.fixed-table td:first-child {
  width: 200px ;
  vertical-align: middle;
}

.fixed-table th:not(:first-child),
.fixed-table td:not(:first-child) {
  width: calc((100% - 200px) / 4) !important;
  font-size: 13px;
  padding: 15px;
}
          .erp-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 120px;
          }
            .erp-card p{
            margin-bottom:0px
            }
          .placeholder-card {
           
          }
          .blurred-cell {
            position: relative;
          }
          .blurred-cell::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(4px);
            pointer-events: none;
          }
          .unlock-button-container {
            position: absolute;
            bottom: 25%;
            left: 50%;
            transform: translate(-50%,-25%);
            z-index: 10;
          }
          .tt {
            color: #3d3459 !important;
            font-size: 15px !important;
            padding: 15px;
          }
            .pdd-100{
            padding-top:60px
            }
            .pdd-120{
            padding-top:80px
            }
            .mm-s{
            }
            .d-hidess-no{
            display:none;
            text-align: center;
    padding: 30px 0px 0px;
            }
    
            @media (max-width:768px){
              .mm-s{
             width: 200px !important;
            }
              .fixed-table th:not(:first-child),
.fixed-table td:not(:first-child) {
width: 200px !important;
}
.m-hidess{
display:none
}
.d-hidess-no{
            display:block
            }
            .mobile-small{
            width:100px
            }
            }
        `}</style>
      </div>
    </>
  );
};

export default CompareErps;
