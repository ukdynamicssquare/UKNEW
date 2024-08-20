// components/FormCaseScroll.js
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FormCaseScroll = ({ onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();
  const [currentPageUrl, setCurrentPageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    message: '',
    // job: '',
    // service: '',
    currentPageUrl: '',
    formtag: 'Case Studies form'
  });

  const [defaultCountryCode, setDefaultCountryCode] = useState('gb'); // Default to 'us'

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, currentPageUrl }));
  }, [currentPageUrl]);

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
  }, []);


  /*auto fetch*/
  useEffect(() => {
    // Fetch IP information when the component mounts
    fetchCountryCodeByIP();
  }, []);

  const fetchCountryCodeByIP = () => {
    fetch(`https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch IP information');
        }
        return response.json();
      })
      .then(data => {
        let countryCode = data.country_code.toLowerCase();
        console.log("Country Code:", countryCode); // 
        setDefaultCountryCode(countryCode);
        console.log("Default Country Code:", defaultCountryCode);
      })
      .catch(error => {
        console.error('Error fetching IP information:', error);
        setDefaultCountryCode('gb');
      });
  };




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // const handlePhoneChange = (e) => {
  //   const { value } = e.target;
  //   const cleanedValue = value.replace(/\D/g, '');
  //   const truncatedValue = cleanedValue.slice(0, 13);
  //   setFormData({ ...formData, phone: truncatedValue });
  //   setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  // };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const validationErrors = validateForm(formData);
   
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      onClose();
      try {
        // Send form data via EmailJS
        await emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', e.target, 'xIFtTfBj6NR498Plv');

        const response = await fetch('https://blognew.dynamicssquare.co.uk/api/formData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('Form submitted successfully');
          console.log('Form Data:', formData);
          // Clear form data after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            companyname: '',
            // job: '',
            // service: '',
            currentPageUrl: '',
          });

          setFormSubmitted(true);
       
         
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  
  };


  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.companyname.trim()) {
      errors.companyname = 'Company name is required';
    }
  
    // if (!formData.job.trim()) {
    //   errors.job = 'Job title is required';
    // }
    // if (!formData.service.trim()) {
    //   errors.service = 'Service selection is required';
    // }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Phone number should be between 10 to 13 characters
    return /^\d{10,15}$/.test(phone);
  };


















  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setFormSubmitted(true);
//     onClose();
//   };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <h4>Read The Case Study Now!</h4>
        <p></p>
        {/* <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <button type="submit">Submit</button>
        </form> */}
         <div className="main-form-wrper">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="*Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input type="hidden" name="currentPageUrl" value={currentPageUrl} />
            <input type="hidden" value="Case Studies Form" name="formtag" />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="*Work Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="*Company Name"
              name="companyname"
              value={formData.companyname}
              onChange={handleChange}
            />
            {errors.companyname && <div className="text-danger">{errors.companyname}</div>}
          </div>
          <div className="mb-3">
            {/* <input
              type="tel"
              className="form-control"
              placeholder="*Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
            /> */}
            <PhoneInput inputStyle={{ width: '100%', height: 'auto' }}
              country={defaultCountryCode} // Set default country code
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="form-control" // CSS class for the input
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
                onBlur: () => {
                  if (formData.phone.trim() !== '') { // Check if phone number is not empty before validation
                    if (!isValidPhoneNumber(formData.phone)) {
                      setErrors({ ...errors, phone: 'Invalid phone number format' });
                    } else {
                      delete errors.phone; // Clear error if phone number is valid
                    }
                  } else {
                    delete errors.phone; // Clear error if phone number is empty
                  }
                }
              }}
              // onlyCountries={['us', 'ca', 'mx', 'gb']}
              countryCodeEditable={false}
              excludeCountries={['pk']}
            />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}
          </div>
          {/* <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Job Title"
              name="job"
              value={formData.job}
              onChange={handleChange}
            />
            {errors.job && <div className="text-danger">{errors.job}</div>}
          </div>
          <div className="mb-3">
            <select
              className="form-select"
              name="service"
              aria-label="Default select example"
              value={formData.service}
              onChange={handleChange}
            >
              <option disabled hidden value="">
                Looking For?
              </option>
              <option value="Implementation">Implementation</option>
              <option value="Upgrade/Migration">Upgrade/Migration</option>
              <option value="Support">Support</option>
            </select>
            {errors.service && <div className="text-danger">{errors.service}</div>}
          </div> */}
         
          <div className="mb-3 form-check">
            <input type="checkbox" checked readOnly className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label">
              I agree to the
              <a href="/privacy-policy/" target="_blank">
                {' '}
                Privacy Policy{' '}
              </a>
              and
              <a href="/terms-of-use/" target="_blank">
                {' '}
                Terms of Service{' '}
              </a>
              .
            </label>
          </div>

          <div className="spiner-wrper">
            <button type="submit" className="btn btn-primary fomr-submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitting && <div className="spinner-border text-primary" role="status"></div>}
          </div>
        </form>
      </div>
      </div>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup-form {
        background: white;
    padding: 30px 40px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    max-width: 500px;
    width: 500px;
        }

        .popup-form h4 {
         margin-bottom: 20px;
    color: var(--color-blue);
    font-size: 22px;
    text-align: center;
    padding: 10px 0px 10px;
        }
        @media (max-width:768px){
        .popup-form{
         padding: 20px 15px;
         margin: 5px;
        }
         .popup-form h4{
          font-size: 20px;
         }
        }
       
      `}</style>
    </div>
  );
};

export default FormCaseScroll;
