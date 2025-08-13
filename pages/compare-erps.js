'use client';

import React, { useState, useEffect } from 'react';
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
  const [showTable, setShowTable] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showFormModal, setShowFormModal] = useState(false);

  // Fetch from API
  useEffect(() => {
    fetch('https://erptoolapi.onrender.com/api/frontend/products') // <-- Replace with actual API URL
      .then(res => res.json())
      .then(data => {
        setAllErps(data);
        if (data.length > 0) {
          setFeatures(Object.keys(data[0].features));
        }
      })
      .catch(err => console.error("Error loading ERP data:", err));
  }, []);

  const handleSelect = (erp) => {
    if (selectedErps.some(selected => selected && selected.name === erp.name)) {
      return;
    }
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
                    <img src={`https://cdn.gemsroot.com/${erp.logo}`} alt={erp.name} style={{ maxWidth: "100%", height: "auto" }} />
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
                      <th key={erp.name}>{erp.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, rowIndex) => {
                    const shouldBlurRow = !formFilled && rowIndex >= Math.floor(features.length / 2);
                    return (
                      <tr key={feature}>
                        <td className="text-start text-capitalize">{feature}</td>
                        {visibleData.map((erp) => (
                          <td
                            key={erp.name + feature}
                            className={shouldBlurRow ? "blurred-cell" : ""}
                          >
                            {Array.isArray(erp.features[feature])
                              ? erp.features[feature].join(", ")
                              : erp.features[feature]}
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
              {allErps.map((erp, idx) => {
                const isSelected = selectedErps.some(sel => sel && sel.name === erp.name);
                return (
                  <div
                    key={idx}
                    className={`col-6 mb-3 ${isSelected ? "opacity-50" : ""}`}
                    onClick={() => !isSelected && handleSelect(erp)}
                    style={{ pointerEvents: isSelected ? "none" : "auto" }}
                  >
                    <div className="border p-2 rounded bg-light text-center h-100">
                      <h6>{erp.name}</h6>
                      <img src={`https://cdn.gemsroot.com/${erp.logo}`} alt={erp.name} style={{ maxWidth: "100%", height: "auto" }} />
                      {/* {isSelected && (
                        <div className="text-danger small mt-1">Already Selected</div>
                      )} */}
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
