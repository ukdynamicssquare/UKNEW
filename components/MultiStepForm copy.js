import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const MultiStepFormasdasd = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    feedback: ''
  });
  const [errors, setErrors] = useState({});
  // const response = await fetch('/data/formdata_two.json');
  const totalSteps = 3;

  const validateStep = () => {
    let stepErrors = {};
    if (step === 1 && !formData.name) {
      stepErrors.name = 'Name is required';
    }
    if (step === 2 && !formData.age) {
      stepErrors.age = 'Age is required';
    }
    if (step === 3 && !formData.feedback) {
      stepErrors.feedback = 'Feedback is required';
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (validateStep()) {
      emailjs
        .sendForm(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          e.target,
          'YOUR_USER_ID'
        )
        .then(
          (result) => {
            console.log('Form submitted:', result.text);
          },
          (error) => {
            console.log('Failed to submit form:', error.text);
          }
        );
    }
  };

  const ProgressBar = ({ step, totalSteps }) => {
    const percentage = (step / totalSteps) * 100;

    return (
      <div style={{ margin: '20px 0' }}>
        <div
          style={{
            height: '10px',
            width: '100%',
            backgroundColor: '#e0e0e0',
            borderRadius: '5px',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${percentage}%`,
              backgroundColor: '#0070f3',
              borderRadius: '5px',
              transition: 'width 0.3s ease-in-out',
            }}
          />
        </div>
        <p style={{ textAlign: 'center', margin: '10px 0' }}>
          Step {step} of {totalSteps}
        </p>
      </div>
    );
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Multi-Step Survey Form</h1>
      <ProgressBar step={step} totalSteps={totalSteps} />

      {step === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Age Information</h2>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Feedback</h2>
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
          />
          {errors.feedback && (
            <p style={{ color: 'red' }}>{errors.feedback}</p>
          )}
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default MultiStepFormasdasd;
