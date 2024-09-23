import React, { useRef, useState,useEffect } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const CommonEbookForm = () => {
    const router = useRouter();
    const [display, setDisplay] = useState(false);
    const [closeModal, setCloseModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [defaultCountryCode, setDefaultCountryCode] = useState('gb'); 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      company_name: '',
      phone: '',
    });
    const form = useRef();
  
  
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
  
    const validate = () => {
      const newErrors = {};
  
      if (!formData.name) {
        newErrors.name = 'Full Name is required';
      }
      const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
      if (!formData.company_name) {
        newErrors.company_name = 'Company Name is required';
      }
      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (!isValidPhoneNumber(formData.phone)) {
        errors.phone = 'Invalid phone number';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone Number is required';
      } else {
        const phonePattern = /^\d{10,13}$/;
        if (!phonePattern.test(formData.phone)) {
          newErrors.phone = 'Invalid phone number';
        }
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      // Clear the error for the field being edited
      if (errors[name]) {
        setErrors({
          ...errors,
          [name]: '',
        });
      }
    };
  
    const handlePhoneChange = (phone) => {
      setFormData({ ...formData, phone });
      // Clear error message for the phone field
      setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
    };
  
  
    const sendEmail = async (e) => {
      e.preventDefault();
      if (!validate()) {
        return;
      }
  
      setDisplay(true);
  
  
      try {
        const result = await emailjs.sendForm('service_4voumj7', 'template_68k24ku', form.current, 'mJ38M6WTmU7KRrtuZ');
        console.log(result.text);
        setFormData({
          name: '',
          email: '',
          company_name: '',
          phone: '',
        });

        const redirectMapping = {
            '/ebook/d365-supply-chain-management/': 'https://www.dynamicssquare.co.uk/guides/download/Pdf-d365-supply-chain-management/',
            '/ebook/dynamics-365-finance/': 'https://www.dynamicssquare.co.uk/guides/download/Pdf-guide-finance/',
            '/ebook/dynamics-crm/': 'https://www.dynamicssquare.co.uk/guides/download/Pdf-dynamics-crm/',
            '/ebook/gp-to-bc-migration/': 'https://www.dynamicssquare.co.uk/guides/download/Pdf-dynamics-gp-to-bc/',
            '/ebook/how-to-choose-right-erp/': 'https://www.dynamicssquare.co.uk/thank-you/how-to-choose-right-erp/',
            '/ebook/upgrade-nav-to-business-central/': 'https://www.dynamicssquare.co.uk/thank-you-for-registration/'
          };

          const redirectUrl = redirectMapping[router.asPath];
          router.push(redirectUrl);




        // router.push("https://www.dynamicssquare.com/guides/download/power-guide-pdf/");
      } catch (error) {
        console.error(error.text);
      } finally {
        setDisplay(false);
      }
    };
  
    const isValidPhoneNumber = (phone) => {
      // Phone number should be between 10 to 13 characters
      return /^\d{10,15}$/.test(phone);
    };
  











    return (
        <>

        {!closeModal && (
            <div
              className="modal fade form-main-model"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModal1Label"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="exampleModal1Label">
                    Register For Free EBook
                    </h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <p></p>
                  </div>
                  <p>Fill the form and receive it straight to your inbox.</p>
                  <div className="modal-body">
                    <div className="main-form-wrper">
    
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <span className="error">{errors.name}</span>}
                          <input type="hidden" value={router.asPath} name="url" />
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
                          {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="*Company Name"
                            name="company_name"
                            value={formData.company_name}
                            onChange={handleChange}
                          />
                          {errors.company_name && <span className="error">{errors.company_name}</span>}
                        </div>
                        <div className="mb-3">
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
                            countryCodeEditable={false}
                            // onlyCountries={['us', 'ca', 'mx', 'gb']}
                            excludeCountries={['pk']}
                          />
                          {errors.phone && <span className="error">{errors.phone}</span>}
                          {/* <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && <span className="error">{errors.phone}</span>} */}
                        </div>
                       
                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            checked
                            readOnly
                            className="form-check-input"
                          />
                          <label className="form-check-label">
                            I agree to the
                            <a href="/privacy-policy/" target="_blank">
                              {" "}
                              Privacy Policy{" "}
                            </a>
                            and
                            <a href="/terms-of-use/" target="_blank">
                              {" "}
                              Terms of Service{" "}
                            </a>
                            .
                          </label>
                        </div>
    
                        <div className="spinner-wrapper spinner-wrapper-custom">
                          <button
                            type="submit"
                            className="btn btn-primary fomr-submit"
                            disabled={display}
                          >
                            {display ? 'Submitting...' : 'Submit'}
                          </button>
                          
                          {display && (
                            <div className="spinner-border text-success" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
    
    
    
    
    
    
    
    
    
    
    
        </>
    );
}

export default CommonEbookForm;
