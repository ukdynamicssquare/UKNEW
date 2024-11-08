import { useState, useEffect } from 'react';

const MultiStepFormNew = () => {
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    agreement: false,
  });
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [staticErrorMessages, setStaticErrorMessages] = useState({});
  const [fetchError, setFetchError] = useState(''); // New state for fetch errors
  const [submitted, setSubmitted] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
  const isValidPhoneNumber = (phone) => /^\d{10,15}$/.test(phone);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://blognew.dynamicssquare.co.uk/api/get-all-questions-new/1');
        if (!response.ok) throw new Error('Failed to fetch questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleInputChange = (quesId, value, isMultiSelect = false) => {
    if (isMultiSelect) {
      // Handle multi-select, ensure an empty array is set if no options are selected
      setFormData({
        ...formData,
        [quesId]: value.length > 0 ? value : [], // default to an empty array if no selection
      });
    } else {
      // Handle radio or other single-value inputs
      setFormData({
        ...formData,
        [quesId]: value || 'No', // default to 'No' if no value is selected
      });
    }
  };

  const handleStaticFieldChange = (e) => {
    const { name, value, type } = e.target;
    if (name === 'phone' && type === 'tel') {
      if (!/^\d*$/.test(value)) return; // Only numeric characters for phone
    }
    if (name === 'name' && type === 'text') {
      if (!/^[a-zA-Z\s]*$/.test(value)) return; // Only letters and spaces for name
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
    console.log("handleSubmit triggered"); 
    if (!validateStaticFields()) return;

    let dynamicData = {};
    questions.forEach((question) => {
      const quesId = question.ques_id.toString();
      let answer = formData[quesId];

      if (!answer && question.type === 'radio') {
        answer = 'No';
      }

      if (Array.isArray(answer) && answer.length === 0 && question.type === 'multi_select') {
        answer = [];
      }

      dynamicData[quesId] = answer || ''; // Use the default value if not set
    });

    const structuredData = {
      ...dynamicData,
      est_id: '1',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      terms_agree: formData.agreement ? 1 : 0,
    };

    console.log('Submitting Data:', structuredData); // Check the data being submitted

    try {
      const response = await fetch('https://blognew.dynamicssquare.co.uk/api/estimation-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(structuredData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const result = await response.json();
      console.log('Server Response:', result); // Log the server's response

      // If response is successful, handle form submission state here
      setSubmitted(true);
    } catch (error) {
      console.error('Submission Error:', error.message); // Log any error if submission fails
      alert('There was an error submitting the form.');
    }
  };

  return (
    <section className="ks-pding">
      <div className="container">
        <div className="row justify-content-center shdee">
          <div className="col-lg-10">
            <div className="f-cust-height">
              {submitted ? (
                <div className="tt-text-cet">
                  <h2>Thank you for your submission!</h2>
                </div>
              ) : (
                <>
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      {fetchError && <div className="error-message">{fetchError}</div>} {/* Error handling for fetch */}
                      {questions.map((question, index) => (
                        <QuestionForm
                          key={index}
                          question={question}
                          handleInputChange={handleInputChange}
                          formData={formData}
                          staticErrorMessages={staticErrorMessages} // Pass error messages for dynamic fields
                        />
                      ))}
                      <form  onSubmit={(e) => e.preventDefault()} className="servay-form-new">
                        <div className="tt-heading-box tt-heading-box-two">
                          <h2>Almost there!</h2>
                          <p>
                            Say goodbye to hours of research. With our ERP Pricing Estimator, you can streamline your decision-making process and make an informed choice in minutes.
                          </p>
                        </div>
                        <div className="mb-3 form-group">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleStaticFieldChange}
                            className="form-control"
                            placeholder="Name"
                          />
                          {staticErrorMessages.name && <div className="error-message">{staticErrorMessages.name}</div>}
                        </div>
                        <div className="mb-3 form-group">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleStaticFieldChange}
                            className="form-control"
                            placeholder="Email"
                          />
                          {staticErrorMessages.email && <div className="error-message">{staticErrorMessages.email}</div>}
                        </div>
                        <div className="mb-3 form-group">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleStaticFieldChange}
                            className="form-control"
                            placeholder="Phone"
                          />
                          {staticErrorMessages.phone && <div className="error-message">{staticErrorMessages.phone}</div>}
                        </div>
                        <div className="mb-3 form-group">
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleStaticFieldChange}
                            className="form-control"
                            placeholder="Company Name"
                          />
                          {staticErrorMessages.company && <div className="error-message">{staticErrorMessages.company}</div>}
                        </div>
                        <div className="mb-3 form-group dd-fflex">
                          <input type="checkbox" checked={formData.agreement} onChange={handleAgreementChange} />
                          <label className="s-fontz">
                            <span>
                              I agree to the <a href="/privacy-policy/" target="_blank">Privacy Policy</a> and{' '}
                              <a href="/terms-of-use/" target="_blank">Terms of Service</a>.
                            </span>
                          </label>
                          {staticErrorMessages.agreement && <div className="error-message">{staticErrorMessages.agreement}</div>}
                        </div>
                        <button type="button" onClick={handleSubmit} className="btn-submit button-group-stylea">
                          See Your Estimate
                        </button>
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

const QuestionForm = ({ question, handleInputChange, formData, staticErrorMessages }) => {
  const { ques_id, ques_title, ques_details, type, mandatory, options } = question;

  return (
    <div className="x-customa-sd">
      <label className="t-ti-head">
        {ques_title}
        {mandatory === '1' && ' *'}
      </label>
      <p dangerouslySetInnerHTML={{ __html: ques_details }}></p>

      {type === 'radio' && (
        <div className="switch-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={formData[ques_id] === "Yes"}
              onChange={(e) => handleInputChange(ques_id, e.target.checked ? "Yes" : "No")}
            />
            <span className="slider">
              <span className="text-left">Yes</span>
              <span className="text-right">No</span>
            </span>
          </label>
        </div>
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
                checked={formData[ques_id]?.includes(option)}
                onChange={(e) => handleInputChange(ques_id, e.target.checked ? [...formData[ques_id], option] : formData[ques_id]?.filter((opt) => opt !== option))}
              />
              <label className="form-check-label" htmlFor={`multi-select-${ques_id}-${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}

      {staticErrorMessages[ques_id] && <div className="error-message">{staticErrorMessages[ques_id]}</div>}
    </div>
  );
};

export default MultiStepFormNew;
