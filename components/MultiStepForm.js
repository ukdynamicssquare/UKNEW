import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/router';
const MultiStepForm = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(null);
    const [formValues, setFormValues] = useState({
        industry: '',
        employees: '',
        annual_revenue: '',
        regions: '',
        looking_for: '',
        financeSystem: '',
        Fixed_assets: '',
        budget_project: '',
        expected_imeline: '',
        business_include: '',
        sales_orders: '',
        hold_inventry: '',
        ware_house: '',
        manufacture_items: '',
        access_system: '',
        employees_count: '',
        name: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        agreement: false
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch form data and set up polling
    useEffect(() => {
       const fetchData = async () => {
    try {
        // Fetch the form data from the API
        const response = await fetch(`${process.env.BACKEND_URL}/api/get-all-questions/1`);
        
        // Parse the response as JSON
        const data = await response.json();
        
        // Log the fetched data
        console.log('Fetched API data:', data);
        
        // Update the state with the fetched data
        setFormData(data);
    } catch (error) {
        // Log any errors
        console.error('Error fetching data:', error);
    }
};

        fetchData();

        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    // Handle step navigation
    const nextStep = () => {
        if (!validateStep()) {
            return;
        }
        setStep(step + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'phoneNumber' && type === 'text') {
            // Allow only numeric values
            if (!/^\d*$/.test(value)) {
                return;
            }
        }
        if (name === 'name' && type === 'text') {
            // Allow only letters and spaces for name
            if (!/^[a-zA-Z\s]*$/.test(value)) {
                return;
            }
        }

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: checked
                ? [...prevValues[name], value]
                : prevValues[name].filter((item) => item !== value)
        }));
    };

    // Validate fields for current step
    const validateStep = () => {
        let valid = true;
        let errors = {};
        const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
        const isValidPhoneNumber = (phone) => {
            // Phone number should be between 10 to 15 characters
            return /^\d{10,15}$/.test(phone);
        };

        if (step === 4) {
            if (!formValues.name) {
                errors.name = 'Name is required';
                valid = false;
            }
            if (!formValues.email) {
                errors.email = 'Email is required';
                valid = false;
            } else if (!emailPattern.test(formValues.email)) {
                errors.email = 'Email is invalid or is from a restricted domain';
                valid = false;
            }
            if (!formValues.companyName) {
                errors.companyName = 'Company Name is required';
                valid = false;
            }
            if (!formValues.phoneNumber) {
                errors.phoneNumber = 'Phone Number is required';
                valid = false;
            } else if (!isValidPhoneNumber(formValues.phoneNumber)) {
                errors.phoneNumber = 'Phone Number must be between 10 to 15 digits and contain only numbers';
                valid = false;
            }
            if (!formValues.agreement) {
                errors.agreement = 'You must agree to the terms and conditions';
                valid = false;
            }
        }

        setErrors(errors);
        return valid;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateStep()) {
            return;
        }

        setLoading(true);
        setSuccessMessage('');

        try {
            const result = await emailjs.send(
                'service_fg00l58',
                'template_25hm17g',
                { ...formValues, url: router.asPath },
                'QyvWavOKod6guRB-s'
            );
            console.log('Success:', result.text);
            setSuccessMessage('Form submitted successfully!');
            setFormValues({
                industry: '',
                employees: '',
                annual_revenue: '',
                regions: '',
                financeSystem: '',
                Fixed_assets: '',
                looking_for: '',
                sales_orders: '',
                budget_project: '',
                expected_imeline: '',
                business_include: '',
                hold_inventry: '',
                ware_house: '',
                manufacture_items: '',
                access_system: '',
                employees_count: '',
                name: '',
                email: '',
                companyName: '',
                phoneNumber: '',
                agreement: false
            });
            // setStep(1);
        } catch (error) {
            console.error('Error:', error.text);
            setSuccessMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
        setTimeout(function () {
            e.target.reset();
            router.push("/thank-you/");
        }, 500);
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    const renderDynamicFields = () => {
        const stepData = formData[`step${step}`];
        if (!stepData || !stepData.fields) {
            return <div>Error: Step data not found.</div>;
        }

        return (
            <>
                {stepData.fields.map((field, index) => (
                    <>
                        <div className='f-start' key={index}>
                            <h4>{field.label}</h4>
                            <div className='mb-3'>
                                {field.type === 'select' && (
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name={field.name}
                                        value={formValues[field.name] || ''}
                                        onChange={handleChange}
                                    >
                                        <option value="">Choose...</option>
                                        {field.options.map((option, idx) => (
                                            <option key={idx} value={option}>{option}</option>
                                        ))}
                                    </select>
                                )}
                                {field.type === 'text' && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={field.name}
                                        value={formValues[field.name] || ''}
                                        onChange={handleChange}
                                    />
                                )}
                                {field.type === 'number' && (
                                    <input
                                        type="number"
                                        className="form-control"
                                        name={field.name}
                                        value={formValues[field.name] || ''}
                                        onChange={handleChange}
                                    />
                                )}
                                {field.type === 'checkbox' && (
                                    <>
                                        {field.options.map((option, idx) => (
                                            <div className="form-check" key={idx}>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id={`${field.name}-${idx}`} // Unique ID for each checkbox
                                                    name={field.name}
                                                    value={option}
                                                    checked={formValues[field.name] ? formValues[field.name].includes(option) : false}
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label className="form-check-label" htmlFor={`${field.name}-${idx}`}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </>
                                )}
                                {field.type === 'radio' && (
                                    <>
                                        {field.options.map((option, idx) => (
                                            <div className={`form-check ${field.layout === 'inline' ? 'form-check-inline' : ''}`} key={idx}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name={field.name}
                                                    id={`${field.name}-${idx}`} // Unique ID for each radio button
                                                    value={option}
                                                    checked={formValues[field.name] === option}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label" htmlFor={`${field.name}-${idx}`}> {/* Unique ID for each label */}
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                ))}
            </>
        );
    };
    const currentStepData = formData[`step${step}`];
    return (
        <>
            <section className='bg-dd'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <div className='erp-head'>
                                <h1>Get a quick quote for ERP</h1>
                                <p>Streamline your Process Optimization and Automate Your Enterprise Data with Microsoft Dynamics ERP</p>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center pad-100'>
                        <div className='col-lg-7'>
                            <ProgressBar step={step} />
                            <div className='c-f-headin'>
                                <h2>{currentStepData.heading}</h2>
                                <p>{currentStepData.paragraph}</p>
                            </div>
                            <form className='servay-form-new' onSubmit={handleSubmit}>
                                {step === 4 ? (
                                    <>
                                        <div className='f-start'>
                                            <h4>Name</h4>
                                            <div className='mb-3'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    value={formValues.name}
                                                    onChange={handleChange}
                                                />
                                                <input type="hidden" value={router.asPath} name="url" />
                                                {errors.name && <div className="error">{errors.name}</div>}
                                            </div>
                                        </div>
                                        <div className='f-start'>
                                            <h4>Email ID</h4>
                                            <div className='mb-3'>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formValues.email}
                                                    onChange={handleChange}
                                                />
                                                {errors.email && <div className="error">{errors.email}</div>}
                                            </div>
                                        </div>
                                        <div className='f-start'>
                                            <h4>Company Name</h4>
                                            <div className='mb-3'>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="companyName"
                                                    value={formValues.companyName}
                                                    onChange={handleChange}
                                                />
                                                {errors.companyName && <div className="error">{errors.companyName}</div>}
                                            </div>
                                        </div>
                                        <div className='f-start'>
                                            <h4>Phone Number</h4>
                                            <div className='mb-3'>
                                                <input
                                                   type="text"
                                                    className="form-control"
                                                    name="phoneNumber"
                                                    value={formValues.phoneNumber}
                                                    onChange={handleChange}
                                                     maxLength="15"
                                                />
                                                {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                                            </div>
                                        </div>
                                        <div className='f-start'>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="agreement"
                                                    checked={formValues.agreement}
                                                    onChange={handleChange}
                                                />
                                                <label className="form-check-label">
                                                    I agree to the terms and conditions
                                                </label>
                                                {errors.agreement && <div className="error">{errors.agreement}</div>}
                                            </div>
                                        </div>
                                        <input type="hidden" value={router.asPath} name="url" /> {/* Hidden URL field */}
                                        <button type="button" className='btn btn-secondary' onClick={prevStep}>
                                            Previous
                                        </button>
                                        {loading ? (
                                            <button type="button" className='btn btn-success' disabled>
                                                Loading...
                                            </button>
                                        ) : (
                                            <button type="submit" className='btn btn-success'>
                                                Complete
                                            </button>
                                        )}
                                        {successMessage && <div className="success">{successMessage}</div>}
                                    </>
                                ) : (
                                    <>
                                        {renderDynamicFields()}
                                        {step > 1 && (
                                            <button type="button" className='btn btn-secondary' onClick={prevStep}>
                                                Previous
                                            </button>
                                        )}
                                        {step < 4 && (
                                            <button type="button" className='btn btn-success' onClick={nextStep}>
                                                Next
                                            </button>
                                        )}
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
               
            </section>
        </>
    );
};

const ProgressBar = ({ step }) => {
    const steps = 4;
    const progress = (step / steps) * 100;

    return (
        <div className="progress-bar-container">
            <div className='bb-whi'>
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p>{`Page ${step} of ${steps}`}</p>
            <style jsx>{`
        .progress-bar-container {
          margin-bottom: 20px;
        }
        .progress-bar {
          height: 5px;
          background-color: #0070f3;
          border-radius: 5px;
        }
          .bb-whi{
          background: #cad9eb;
          }
      `}</style>
        </div>
    );
};

export default MultiStepForm;
