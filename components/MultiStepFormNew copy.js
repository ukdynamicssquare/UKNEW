import { useState, useEffect } from 'react';

const MultiStepFormNew = () => {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [staticErrorMessages, setStaticErrorMessages] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
  const isValidPhoneNumber = (phone) => /^\d{10,15}$/.test(phone);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('https://blognew.dynamicssquare.co.uk/api/get-all-questions-new/1');
      const data = await response.json();
      setQuestions(data);
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  const handleInputChange = (quesId, value, isMultiSelect = false) => {
    setFormData({
      ...formData,
      [quesId]: value,
    });
  };

  const handleStaticFieldChange = (e) => {
    const { name, value, type } = e.target;
    if (name === 'phone' && type === 'tel') {
      if (!/^\d*$/.test(value)) return;
    }
    if (name === 'name' && type === 'text') {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAgreementChange = (e) => {
    setFormData({
      ...formData,
      agreement: e.target.checked,
    });
  };

  const validateStaticFields = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    else if (!/^[a-zA-Z\s]*$/.test(formData.name)) errors.name = 'Name can only contain letters and spaces.';
    if (!formData.email) errors.email = 'Email is required.';
    else if (!emailPattern.test(formData.email)) errors.email = 'Invalid email format or not allowed domain.';
    if (!formData.phone) errors.phone = 'Phone number is required.';
    else if (!isValidPhoneNumber(formData.phone)) errors.phone = 'Phone number must be between 10 and 15 digits.';
    if (!formData.company) errors.company = 'Company name is required.';
    if (!formData.agreement) errors.agreement = 'You must agree to the terms.';
    setStaticErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStaticFields()) return;
    let dynamicData = {};
    questions.forEach((question) => {
      const quesId = question.ques_id.toString();
      const answer = formData[quesId];
      dynamicData[quesId] = question.type === 'multi_select' ? (Array.isArray(answer) ? answer : []) : answer || '';
    });

    const structuredData = {
      ...dynamicData,
      est_id: '1',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      terms_agree: formData.agreed ? 1 : 0,
    };

    const response = await fetch('https://blognew.dynamicssquare.co.uk/api/estimation-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(structuredData),
    });

    if (response.ok) setSubmitted(true);
    else alert('There was an error submitting the form.');
  };

  return (
    <section className='ks-pding'>
      <div className='container'>
        <div className='row justify-content-center shdee'>
          <div className='col-lg-10'>
            <div className='f-cust-height'>
              {submitted ? (
                <div className='tt-text-cet'>
                  <h2>Thank you for your submission!</h2>
                </div>
              ) : (
                <>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      {questions.map((question, index) => (
                        <QuestionForm
                          key={index}
                          question={question}
                          handleInputChange={handleInputChange}
                          formData={formData}
                          errorMessage={errorMessage}
                        />
                      ))}
                      <form className='servay-form-new'>
                        <div className='tt-heading-box tt-heading-box-two'>
                          <h2>Almost there!</h2>
                          <p>Say goodbye to hours of research. With our ERP Pricing Estimator, you can streamline your decision-making process and make an informed choice in minutes.</p>
                        </div>
                        <div className="mb-3 form-group">
                          <input type="text" name="name" value={formData.name} onChange={handleStaticFieldChange} className='form-control' placeholder='Name' />
                          {staticErrorMessages.name && <div className="error-message">{staticErrorMessages.name}</div>}
                        </div>
                        <div className="mb-3 form-group">
                          <input type="email" name="email" value={formData.email} onChange={handleStaticFieldChange} className='form-control' placeholder='Email' />
                          {staticErrorMessages.email && <div className="error-message">{staticErrorMessages.email}</div>}
                        </div>
                        <div className="mb-3 form-group">
                          <input type="tel" name="phone" value={formData.phone} onChange={handleStaticFieldChange} className='form-control' placeholder='Phone' />
                          {staticErrorMessages.phone && <div className="error-message">{staticErrorMessages.phone}</div>}
                        </div>
                        <div className="mb-3 form-group">
                          <input type="text" name="company" value={formData.company} onChange={handleStaticFieldChange} className='form-control' placeholder='Company Name' />
                          {staticErrorMessages.company && <div className="error-message">{staticErrorMessages.company}</div>}
                        </div>
                        <div className="mb-3 form-group dd-fflex">
                          <input type="checkbox" checked={formData.agreement} onChange={handleAgreementChange} />
                          <label className='s-fontz'>
                            <span>I agree to the <a href="/privacy-policy/" target="_blank">Privacy Policy</a> and <a href="/terms-of-use/" target="_blank">Terms of Service</a>.</span>
                          </label>
                          {staticErrorMessages.agreement && <div className="error-message">{staticErrorMessages.agreement}</div>}
                        </div>
                        <button type="button" onClick={handleSubmit} className='btn-submit button-group-stylea'>See Your Estimate</button>
                      </form>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuestionForm = ({ question, handleInputChange, formData, errorMessage }) => {
  const { ques_id, ques_title, ques_details, type, mandatory, options } = question;

  return (
    <div className='x-customa-sd'>
      <label className='t-ti-head'>{ques_title}{mandatory === "1" && ' *'}</label>
      <p>{ques_details}</p>
      {type === 'single_select' && (
        <select
          onChange={(e) => handleInputChange(ques_id, e.target.value)}
          value={formData[ques_id] || ''}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}
      {type === 'multi_select' && (
        <div>
          {options.map((option, index) => (
            <div key={index} className="form-check x-custom">
              <input
                type="checkbox"
                className="form-check-input"
                id={`multi-select-${ques_id}-${index}`}
                value={option}
                checked={formData[ques_id]?.includes(option) || false}
                onChange={(e) => {
                  let selectedOptions = formData[ques_id] || [];
                  if (e.target.checked) {
                    selectedOptions = [...selectedOptions, option];
                  } else {
                    selectedOptions = selectedOptions.filter((opt) => opt !== option);
                  }
                  handleInputChange(ques_id, selectedOptions, true);
                }}
              />
              <label className="form-check-label" htmlFor={`multi-select-${ques_id}-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {type === 'radio' && (
        <div>
          {options.map((option, index) => (
            <div key={index} className="form-check x-custom">
              <input
                type="radio"
                className="form-check-input"
                id={`radio-${ques_id}-${index}`}
                value={option}
                checked={formData[ques_id] === option}
                onChange={(e) => handleInputChange(ques_id, e.target.value)}
              />
              <label className="form-check-label" htmlFor={`radio-${ques_id}-${index}`}>{option}</label>
            </div>
          ))}
        </div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default MultiStepFormNew;
