'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Spinner, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

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
  const [relatedComparisons, setRelatedComparisons] = useState([]);

  // 👇 add a ref for the table area
  const tableRef = useRef(null);

  const featureLabels = {
    overview: "Overview",
    deployment: "Deployment",
    costPerUser: "Cost Per User",
    priceRange: "Price Range",
    costPerProject: "Cost Per Project",
    minImplementationFee: "Minimum Implementation Fee",
    pricingNotes: "Pricing Notes",
    coreModules: "Core Modules",
    scalability: "Scalability",
    customization: "Customization",
    usabilitySupportTraining: "Usability / Support / Training",
    analyticsSecurity: "Analytics & Security",
    keyMarketStrength: "Key Market Strength",
    notableContext: "Notable Context"
  };

  useEffect(() => {
    fetch('https://erptoolapi.onrender.com/api/frontend/products')
      .then(res => res.json())
      .then(data => {
        setAllErps(data);
        if (data.length > 0) {
          setFeatures(Object.keys(data[0].features));

          // Auto pick first 6 ERPs and make 3 pairs
          const pairs = [];
          for (let i = 0; i < data.length - 1 && pairs.length < 3; i += 2) {
            pairs.push([data[i], data[i + 1]]);
          }
          setRelatedComparisons(pairs);
        }
      });
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
    if (selectedErps.some(selected => selected && selected.name === erp.name)) return;

    const updated = [...selectedErps];
    const emptyIndex = updated.findIndex(item => item === null);
    if (emptyIndex !== -1) {
      updated[emptyIndex] = erp;
    }

    setSelectedErps(compactSelections(updated));
    setShowModal(false);
    setActiveBoxIndex(null);
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

      // 👇 scroll after showing table
      setTimeout(() => {
        tableRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 600);
  };

  const handleQuickCompare = (erps) => {
    const updated = [...erps];
    while (updated.length < 4) updated.push(null);
    setSelectedErps(updated);
    setShowTable(true);

    // 👇 scroll after updating table
    setTimeout(() => {
      tableRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormFilled(true);
      setShowFormModal(false);
    }
  };

  const hasEnoughToCompare = selectedErps.filter(Boolean).length >= 2;

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="container py-5">
        <h2 className="mb-4">Compare ERP Systems</h2>

        {/* 👇 attach ref here */}
        <div ref={tableRef} className="table-responsive position-relative">
          <table className="table table-bordered text-center fixed-table">
            <thead>
              <tr>
                {showTable && <th style={{ width: "200px" }}>Feature</th>}
                {compactSelections(selectedErps).map((erp, index) => (
                  <th key={index} style={{ width: `${100 / 4}%` }}>
                    {erp ? (
                      <div className="erp-card position-relative">
                        <button
                          className="btn btn-sm btn-danger position-absolute top-0 end-0 m-1"
                          onClick={() => removeSelection(index)}
                        >
                          ×
                        </button>
                        <img
                          src={`https://cdn.gemsroot.com/${erp.logo}`}
                          alt={erp.name}
                          style={{ maxWidth: "80px", marginBottom: '10px' }}
                        />
                        <h5 style={{ fontSize: '14px', color: '#3d3459' }}>{erp.name}</h5>
                      </div>
                    ) : (
                      <div
                        className="erp-card placeholder-card"
                        onClick={() => { setActiveBoxIndex(index); setShowModal(true); }}
                        style={{ cursor: "pointer" }}
                      >
                        <p className="text-muted">Click to select ERP</p>
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
              <Button onClick={handleCompare} variant="primary">Compare</Button>
            </div>
          )}

          {loading && (
            <div className="text-center my-4">
              <Spinner animation="border" variant="primary" />
            </div>
          )}

          {!formFilled && showTable && (
            <div className="unlock-button-container">
              <Button variant="warning" onClick={() => setShowFormModal(true)}>
                Unlock Full Comparison
              </Button>
            </div>
          )}
        </div>

        {/* Related Comparisons */}
        {relatedComparisons.length > 0 && (
          <div className="mt-5">
            <h4>Most Popular Comparisons</h4>
            <div className="row">
              {relatedComparisons.map((pair, idx) => {
                if (!pair[0] || !pair[1]) return null;
                return (
                  <div
                    key={idx}
                    className="col-md-4 mb-3"
                    onClick={() => handleQuickCompare(pair)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="border rounded p-3 text-center bg-light hover-shadow">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="text-center mx-2">
                          <img
                            src={`https://cdn.gemsroot.com/${pair[0].logo}`}
                            alt={pair[0].name}
                            style={{ maxWidth: "50px", display: "block", margin: "0 auto 5px" }}
                          />
                          <span style={{ fontSize: "13px", color: "#3d3459" }}>{pair[0].name}</span>
                        </div>
                        <span className="fw-bold mx-2">VS</span>
                        <div className="text-center mx-2">
                          <img
                            src={`https://cdn.gemsroot.com/${pair[1].logo}`}
                            alt={pair[1].name}
                            style={{ maxWidth: "50px", display: "block", margin: "0 auto 5px" }}
                          />
                          <span style={{ fontSize: "13px", color: "#3d3459" }}>{pair[1].name}</span>
                        </div>
                      </div>
                      <div className="mt-2 fw-bold text-primary">Click to Compare</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ERP Modal */}
        <Modal show={showModal} size="lg" onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Select an ERP</Modal.Title>
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
                    style={{ pointerEvents: isSelected ? "none" : "auto" }}
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
            <Form onSubmit={handleFormSubmit}>
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
            </Form>
          </Modal.Body>
        </Modal>

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
            min-height: 90px;
          }
          .placeholder-card {
            border: 2px dashed #ccc;
            padding: 20px;
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
          .hover-shadow:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: 0.2s;
          }
        `}</style>
      </div>
    </>
  );
};

export default CompareErps;
