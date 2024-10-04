import { useState, useEffect } from 'react';

const MultiStepForm = () => {
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    agreed: false,
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
      // If multi-select, check if at least one option is selected
      setAnswered(value.length > 0);
      setErrorMessage(''); // Clear error message
    } else {
      // For single-select and radio options, automatically move to the next step when selected
      if (value) {
        setAnswered(true);
        setErrorMessage(''); // Clear error message
        setCurrentStep(currentStep + 1); // Automatically move to the next step
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

    setCurrentStep(currentStep + 1);
    setAnswered(false); // Reset for the next question
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswered(true); // Show Next button for already answered questions
      setErrorMessage(''); // Clear error message
    }
  };

  const handleSkip = () => {
    setCurrentStep(currentStep + 1);
    setAnswered(false); // Reset for the next question
    setErrorMessage(''); // Clear error message
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

    console.log('Form Submitted', formData);
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true); // Set submission status to true
    } else {
      alert('There was an error submitting the form.');
    }
  };

  // Calculate progress (current step / total steps)
  const totalSteps = questions.length + 1; // +1 for the static field step
  const progress = (currentStep / totalSteps) * 100;

  if (loading) return <div className="spinner"></div>; // Show loading spinner while fetching

  const currentQuestion = questions[currentStep];

  return (
   <section>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-8'>
            <div>
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {submitted ? ( // Show Thank you message if submitted
        <div>
          <h2>Thank you for your submission!</h2>
        </div>
      ) : (
        <>
          <h2>Step {currentStep + 1} of {totalSteps}</h2>

          {showQuestion ? (
            currentStep < questions.length ? (
              <QuestionForm
                question={currentQuestion}
                handleInputChange={handleInputChange}
                formData={formData}
                errorMessage={errorMessage} // Pass the error message to the QuestionForm
              />
            ) : (
              <form className='servay-form-new'>
                {/* Static form fields in the last step */}
                <div className=''>
                  <label>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleStaticFieldChange}
                    className='form-control'
                  />
                  {staticErrorMessages.name && <div className="error-message">{staticErrorMessages.name}</div>}
                </div>
                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleStaticFieldChange}
                      className='form-control'
                  />
                  {staticErrorMessages.email && <div className="error-message">{staticErrorMessages.email}</div>}
                </div>
                <div>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleStaticFieldChange}
                      className='form-control'
                  />
                  {staticErrorMessages.phone && <div className="error-message">{staticErrorMessages.phone}</div>}
                </div>
                <div>
                  <label>Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleStaticFieldChange}
                      className='form-control'
                  />
                  {staticErrorMessages.company && <div className="error-message">{staticErrorMessages.company}</div>}
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={formData.agreement}
                    onChange={handleAgreementChange}
                  />
                  <label>I agree to the terms *</label>
                  {staticErrorMessages.agreement && <div className="error-message">{staticErrorMessages.agreement}</div>}
                </div>
              </form>
            )
          ) : (
            <div>Loading step...</div> // Show loading message when changing steps
          )}

          <div>
            {/* Show previous button */}
            {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}

            {/* Show Next button for multi-select questions */}
            {currentStep < questions.length && (
              <button
                onClick={() => {
                  if (answered) {
                    setCurrentStep(currentStep + 1);
                  } else {
                    setErrorMessage('Please answer the question before proceeding.');
                  }
                }}
              >
                Next
              </button>
            )}

            {/* Submit button only on the last step */}
            {currentStep === questions.length && (
              <button onClick={handleSubmit}>Submit</button>
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
      <div className='x-customasdasd'>
        <label>{ques_name}{mandatory === "1" && ' *'}</label>
  
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
  
       
      </div>
    );
  };

export default MultiStepForm;
