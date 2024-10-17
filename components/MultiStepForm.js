import { useState, useEffect } from 'react';

const MultiStepForm = () => {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    // agreed: false,
  });
  const [answered, setAnswered] = useState(false); // Track if the current question is answered
  const [loading, setLoading] = useState(true); // Loading state for questions
  const [showQuestion, setShowQuestion] = useState(false); // Manage question visibility
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
  const [staticErrorMessages, setStaticErrorMessages] = useState({}); // Error messages for static fields
  const [submitted, setSubmitted] = useState(false); // Track form submission status


  // Email validation pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;

  // Phone number validation (10-15 digits only)
  const isValidPhoneNumber = (phone) => {
    return /^\d{10,15}$/.test(phone);
  };





  // Fetch the questions from the API
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('https://blognew.dynamicssquare.co.uk/api/get-all-questions/1');
      const data = await response.json();
      setQuestions(data);
      setLoading(false); // Set loading to false after fetching
    };

    fetchQuestions();
  }, []);

  // Simulate a loading effect when moving to the next step
  useEffect(() => {
    if (!loading && currentStep < questions.length) {
      setShowQuestion(false); // Reset visibility
      const timer = setTimeout(() => {
        setShowQuestion(true);
      }, 100); // 2 seconds delay before showing the question
      return () => clearTimeout(timer);
    }
  }, [currentStep, loading, questions]);

  const handleInputChange = (quesId, value, isMultiSelect = false) => {
    setFormData({
      ...formData,
      [quesId]: value,
    });

    if (isMultiSelect) {
      setAnswered(value.length > 0);
      setErrorMessage('');
    } else {
      // For single select (radio buttons), use a timeout to delay the next step
      if (value) {
        setAnswered(true);
        setErrorMessage('');
        setTimeout(() => {
          setCurrentStep((prevStep) => prevStep + 1);
        }, 500); // 2 seconds delay
      }
    }
  };

  const handleNext = () => {
    const currentQuestion = questions[currentStep];

    if (currentQuestion.type === 'single_select' && !formData[currentQuestion.ques_id]) {
      setErrorMessage('Please select an option before moving to the next step.');
      return;
    }

    if (currentQuestion.type === 'multi_select' && !(formData[currentQuestion.ques_id]?.length > 0)) {
      setErrorMessage('Please select at least one option or skip this question.');
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
    setErrorMessage('');
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
      setErrorMessage('');
    }
  };

  const handleSkip = () => {
    setCurrentStep(currentStep + 1);
    setAnswered(false); // Reset for the next question
    setErrorMessage(''); // Clear error message
  };


  const isNextButtonVisible = () => {
    if (currentStep < questions.length) {
      const currentQuestion = questions[currentStep];
      if (currentQuestion.type === 'multi_select') {
        return formData[currentQuestion.ques_id]?.length > 0; // Show next if at least one option is selected
      }
      return !!formData[currentQuestion.ques_id]; // Show next if an option is selected
    }
    return false; // Always show next button for the last static step
  };





  const handleStaticFieldChange = (e) => {
    const { name, value, type } = e.target;

    // Phone number validation (allow only digits)
    if (name === 'phone' && type === 'tel') {
      if (!/^\d*$/.test(value)) {
        return; // Prevent non-numeric input
      }
    }

    // Name validation (allow only letters and spaces)
    if (name === 'name' && type === 'text') {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        return; // Prevent invalid characters
      }
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

    // Name validation
    if (!formData.name) {
      errors.name = 'Name is required.';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      errors.name = 'Name can only contain letters and spaces.';
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required.';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email format or not allowed domain.';
    }

    // Phone validation
    if (!formData.phone) {
      errors.phone = 'Phone number is required.';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Phone number must be between 10 and 15 digits.';
    }

    // Company name validation
    if (!formData.company) {
      errors.company = 'Company name is required.';
    }

    // Agreement checkbox validation
    if (!formData.agreement) {
      errors.agreement = 'You must agree to the terms.';
    }

    setStaticErrorMessages(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = async () => {
    if (!validateStaticFields()) {
      return; // Prevent submission if validation fails
    }

    // Prepare dynamic form data based on the fetched questions
    let dynamicData = {};

    questions.forEach(question => {
      const quesId = question.ques_id.toString(); // Convert question ID to string if necessary
      const answer = formData[quesId];

      // Handle multi-select answers (convert to array)
      if (question.type === 'multi_select') {
        dynamicData[quesId] = Array.isArray(answer) ? answer : []; // Ensure multi-select answers are arrays
      } else {
        dynamicData[quesId] = answer || ''; // For other types, store as a string
      }
    });

    // Add static fields
    const structuredData = {
      ...dynamicData, // Spread the dynamic data
      'est_id': '1', // Static field
      'name': formData.name,
      'email': formData.email,
      'phone': formData.phone,
      'terms_agree': formData.agreed ? 1 : 0, // Convert boolean to 1 or 0
    };

    console.log('Submitting Data:', structuredData);

    // Make the API request
    const response = await fetch('https://blognew.dynamicssquare.co.uk/api/estimation-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(structuredData), 
    });

    if (response.ok) {
      setSubmitted(true); // Set submission status to true
    } else {
      alert('There was an error submitting the form.');
    }
  }

  // Calculate progress (current step / total steps)
  const totalSteps = questions.length + 1; // +1 for the static final step
  const progress = currentStep < questions.length ? (currentStep / totalSteps) * 100 : 100; // 100% for the last static step

  if (loading) return <div className='myloading'><div className="spinner"></div></div>; // Show loading spinner while fetching

  const currentQuestion = questions[currentStep];

  return (
    <section className='ks-pding'>
      <div className='container'>
        <div className='row justify-content-center shdee'>
          <div className='col-lg-10'>
            <div>
              {/* Show the progress bar and current step only if it's not the last step */}
              {currentStep < questions.length && (
                <>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className='tt-heading-box'>
                    <h1>Save Time, Get Accurate ERP Pricing</h1>
                    {/* <p>Say goodbye to hours of research. With our ERP Pricing Estimator, you can streamline your decision-making process and make an informed choice in minutes.</p> */}
                  </div>
                  {/* <h2>Step {currentStep + 1} of {totalSteps - 1}</h2> */}
                </>
              )}

              {submitted ? (
                <div className='tt-text-cet'>
                  <h2>Thank you for your submission!</h2>
                </div>
              ) : (
                <>
                  {showQuestion ? (
                    currentStep < questions.length ? (
                      <QuestionForm
                        question={questions[currentStep]}
                        handleInputChange={handleInputChange}
                        formData={formData}
                        errorMessage={errorMessage}
                      />
                    ) : (
                      <form className='servay-form-new'>
                        <div className='tt-heading-box tt-heading-box-two'>
                          <h2>Almot there!</h2>
                          <p>Say goodbye to hours of research. With our ERP Pricing Estimator, you can streamline your decision-making process and make an informed choice in minutes.</p>
                        </div>
                        <div  className="mb-3 form-group">
                          {/* <label>Name *</label> */}
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleStaticFieldChange}
                            className='form-control'
                               placeholder='Name'
                          />
                          {staticErrorMessages.name && <div className="error-message">{staticErrorMessages.name}</div>}
                        </div>
                        <div  className="mb-3 form-group">
                          {/* <label>Email *</label> */}
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleStaticFieldChange}
                            className='form-control'
                            placeholder='Email'
                          />
                          {staticErrorMessages.email && <div className="error-message">{staticErrorMessages.email}</div>}
                        </div>
                        <div  className="mb-3 form-group">
                          {/* <label>Phone *</label> */}
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleStaticFieldChange}
                            className='form-control'
                               placeholder='Phone'
                          />
                          {staticErrorMessages.phone && <div className="error-message">{staticErrorMessages.phone}</div>}
                        </div>
                        <div  className="mb-3 form-group">
                          {/* <label>Company Name *</label> */}
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleStaticFieldChange}
                            className='form-control'
                               placeholder='Company Name'
                          />
                          {staticErrorMessages.company && <div className="error-message">{staticErrorMessages.company}</div>}
                        </div>
                        <div  className="mb-3 form-group">
                          <input
                            type="checkbox"
                            checked={formData.agreement}
                            onChange={handleAgreementChange}
                          />
                          <label className='s-fontz'><span>I agree to the<a href="/privacy-policy/" target="_blank"> Privacy Policy</a>and<a href="/terms-of-use/" target="_blank"> Terms of Service </a>.</span></label>
                          {staticErrorMessages.agreement && <div className="error-message">{staticErrorMessages.agreement}</div>}
                        </div>
                        <button type="button" onClick={handleSubmit} className='btn-submit button-group-stylea'>See Your Estimate</button>
                      </form>
                    )
                  ) : (
                    <div>Loading...</div>
                  )}

                  <div className='button-group ccx-button'>
                    {currentStep > 0 && (
                      <button onClick={handlePrevious} className='btn-previous n-ned'>
                        <i className="bi bi-arrow-left"></i>
                      </button>
                    )}
                    {isNextButtonVisible() && (
                      <button onClick={handleNext} className='btn-next button-group-style'>
                        Next
                      </button>
                    )}
                  </div>
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
  const { ques_id, ques_name, type, mandatory, options } = question;

  return (
    <div className='x-customa-sd'>
      <label className='t-ti-head'>{ques_name}{mandatory === "1" && ' *'}</label>
      {type === 'radio' && (
        <>
          <div className="form-check x-custom">
            {options.map((option, index) => (
              <div className='x-customs' key={index}>
                <input
                  type="radio"
                  className="form-check-input"
                  id={`radio-${ques_id}-${index}`} // Unique ID for radio button
                  value={option}
                  checked={formData[ques_id] === option}
                  onChange={(e) => handleInputChange(ques_id, e.target.value)}
                />
                <label className="form-check-label" htmlFor={`radio-${ques_id}-${index}`}>{option}</label> {/* Link label to radio button */}
              </div>
            ))}
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Show error message */}
          </div>
        </>
      )}
      {type === 'single_select' && (
        <>
          <select
            onChange={(e) => handleInputChange(ques_id, e.target.value)}
            value={formData[ques_id] || ''}
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Show error message */}
        </>
      )}

      {type === 'multi_select' && (
        <>
          <div className="form-check x-custom">
            {options.map((option, index) => (
              <div className='x-customs' key={index}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`multi-select-${ques_id}-${index}`} // Unique ID for checkbox
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
                <label className="form-check-label" htmlFor={`multi-select-${ques_id}-${index}`}>{option}</label> {/* Link label to checkbox */}
              </div>
            ))}
            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Show error message */}
          </div>
        </>
      )}




    </div>
  );
};

export default MultiStepForm;
