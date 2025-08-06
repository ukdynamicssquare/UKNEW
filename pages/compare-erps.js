'use client';

import React, { useState } from 'react';
import { Modal, Button, Spinner, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";


const allErps = [
  { name: "ERPNext", slug: "erpnext", cloud: true, crm: true, inventory: true, hr: true, customizable: true, mobile: true, api: true, price: "$20", demoUrl: "#" },
  { name: "Odoo", slug: "odoo", cloud: true, crm: true, inventory: true, hr: true, customizable: true, mobile: true, api: true, price: "$25", demoUrl: "#" },
  { name: "Zoho ERP", slug: "zoho", cloud: true, crm: true, inventory: true, hr: false, customizable: false, mobile: true, api: true, price: "$30", demoUrl: "#" },
  { name: "SAP B1", slug: "sap", cloud: false, crm: true, inventory: true, hr: true, customizable: true, mobile: true, api: true, price: "$100", demoUrl: "#" },
  { name: "NetSuite", slug: "netsuite", cloud: true, crm: true, inventory: true, hr: true, customizable: true, mobile: true, api: true, price: "$150", demoUrl: "#" },
  { name: "MS Dynamics", slug: "msdynamics", cloud: true, crm: true, inventory: true, hr: true, customizable: true, mobile: true, api: true, price: "$120", demoUrl: "#" },
  { name: "TallyPrime", slug: "tally", cloud: false, crm: false, inventory: true, hr: false, customizable: false, mobile: false, api: false, price: "$15", demoUrl: "#" },
  { name: "QuickBooks", slug: "quickbooks", cloud: true, crm: true, inventory: false, hr: false, customizable: false, mobile: true, api: true, price: "$40", demoUrl: "#" },
  { name: "Marg ERP", slug: "marg", cloud: false, crm: true, inventory: true, hr: false, customizable: false, mobile: false, api: false, price: "$10", demoUrl: "#" },
  { name: "Busy ERP", slug: "busy", cloud: false, crm: true, inventory: true, hr: true, customizable: false, mobile: true, api: false, price: "$12", demoUrl: "#" },
];

const CompareErps = () => {
  const [selectedErps, setSelectedErps] = useState([null, null, null, null]);
  const [showModal, setShowModal] = useState(false);
  const [activeBoxIndex, setActiveBoxIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showFormModal, setShowFormModal] = useState(false);

  const handleSelect = (erp) => {
    if (activeBoxIndex !== null) {
      const updated = [...selectedErps];
      updated[activeBoxIndex] = erp;
      setSelectedErps(updated);
      setShowModal(false);
      setActiveBoxIndex(null);
    }
  };

  const removeSelection = (index) => {
    const updated = [...selectedErps];
    updated[index] = null;
    setSelectedErps(updated);
  };

  const handleCompare = () => {
    setLoading(true);
    setTimeout(() => {
      setShowTable(true);
      setLoading(false);
    }, 800);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormFilled(true);
      setShowFormModal(false);
    }
  };

  const visibleData = selectedErps.filter(Boolean);
  const hasEnoughToCompare = visibleData.length >= 2;

  const features = ["price", "cloud", "crm", "inventory", "hr", "customizable", "mobile", "api", "demo"];

  return (
    <>
    <Head>
         <meta name="robots" content="noindex, nofollow" />
    </Head>
    <div className="container py-5">
      <h2 className="mb-4">Compare ERP Systems</h2>

      {/* ERP Select Boxes */}
      <div className="row g-4 mb-4">
        {selectedErps.map((erp, index) => (
          <div key={index} className="col-6 col-md-3">
            <div
              className="border rounded p-3 h-100 text-center position-relative shadow-sm bg-light erp-box"
              onClick={() => {
                setActiveBoxIndex(index);
                setShowModal(true);
              }}
            >
              {erp ? (
                <>
                  <button
                    className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSelection(index);
                    }}
                  >
                    ×
                  </button>
                  <h5>{erp.name}</h5>
                </>
              ) : (
                <p className="text-muted my-5">Click to select ERP</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Compare Button */}
      {hasEnoughToCompare && (
        <div className="text-center mb-4">
          <Button onClick={handleCompare} variant="primary">Compare</Button>
        </div>
      )}

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Comparison Table */}
      {showTable && visibleData.length > 0 && (
        <>
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th>Feature</th>
                  {visibleData.map((erp) => (
                    <th key={erp.slug}>{erp.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, rowIndex) => {
                  const shouldBlurRow = !formFilled && rowIndex >= Math.floor(features.length / 2);
                  return (
                    <tr key={feature}>
                      <td className="text-start text-capitalize">{feature === 'demo' ? 'Demo' : feature}</td>
                      {visibleData.map((erp) => (
                        <td
                          key={erp.slug + feature}
                          className={shouldBlurRow ? "blurred-cell" : ""}
                        >
                          {feature === 'demo' ? (
                            <a href={erp.demoUrl} target="_blank" rel="noopener noreferrer">View Demo</a>
                          ) : (
                            typeof erp[feature] === 'boolean'
                              ? (erp[feature] ? '✅' : '❌')
                              : erp[feature]
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {!formFilled && (
            <div className="text-center mt-3">
              <Button variant="warning" onClick={() => setShowFormModal(true)}>
                Unlock Full Comparison
              </Button>
            </div>
          )}
        </>
      )}

      {/* ERP Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select an ERP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {allErps.map((erp, idx) => (
              <div key={idx} className="col-6 mb-3" onClick={() => handleSelect(erp)}>
                <div className="border p-2 rounded bg-light text-center h-100">
                  <h6>{erp.name}</h6>
                  <small>{erp.price}</small>
                </div>
              </div>
            ))}
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

      {/* Inline Styling */}
      <style jsx>{`
        .erp-box {
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }

        .erp-box:hover {
          transform: scale(1.03);
        }

        .blurred-cell {
          position: relative;
        //   color: transparent !important;
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
      `}</style>
    </div>
    </>
  );
};

export default CompareErps;
