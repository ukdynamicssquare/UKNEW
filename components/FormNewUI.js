import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const FormNewUI = () => {
  const router = useRouter();
  const form = useRef();
  const [currentPageUrl, setCurrentPageUrl] = useState('');
  const [defaultCountryName, setDefaultCountryName] = useState(''); // Default to 'us'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    message: '',
    job: '',
    service: '',
    currentPageUrl: '',
    defaultCountryName: '',
    formtag: 'Contact Us Form'
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const [defaultCountryCode, setDefaultCountryCode] = useState('gb'); // Default to 'us'

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
        let countryName=data.country_name;
        console.log("Country Code:", countryCode); // 
        setDefaultCountryCode(countryCode);
        setDefaultCountryName(countryName);
        
        console.log("Default Country Code:", defaultCountryCode);
      })
      .catch(error => {
        console.error('Error fetching IP information:', error);
        setDefaultCountryCode('gb');
      });
  };


  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, currentPageUrl }));
  }, [currentPageUrl]);

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, defaultCountryName }));
  }, [defaultCountryName]);

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
    setDefaultCountryName(defaultCountryName);
  }, []);








  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };

  // const handlePhoneChange = (e) => {
  //   const { value } = e.target;
  //   // Replace any non-numeric characters with an empty string
  //   const cleanedValue = value.replace(/\D/g, '');
  //   // Limit to 13 characters
  //   const truncatedValue = cleanedValue.slice(0, 13);
  //   setFormData({ ...formData, phone: truncatedValue });
  //   // Clear error message for the phone field
  //   setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        // Send form data via EmailJS
        await emailjs.sendForm('service_x0eo9w8', 'template_20o8u0f', e.target, 'xIFtTfBj6NR498Plv');

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
            defaultCountryName: '',
            message: '',
            job: '',
            service: '',
            currentPageUrl: '', 
            formtag: ''
          });
          setTimeout(() => {
            router.push('/thank-you/');
          }, 1000);
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
    // if (!formData.phone.trim()) {
    //   errors.phone = 'Phone number is required';
    // } else if (!isValidPhoneNumber(formData.phone)) {
    //   errors.phone = 'Invalid phone number';
    // }
    if (!formData.companyname.trim()) {
      errors.companyname = 'Company name is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
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


  return (
    <div className='rows-box-sh'>
      <div className="main-form-wrper main_form-wrper_contact">
        <form ref={form} onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="name"
                  value={formData.name}
                  onChange={handleChange}

                />
                <label htmlFor="name">*Name</label>
                <input type="hidden" name="currentPageUrl" value={currentPageUrl} />
                <input type="hidden" value="Contact Us Form" name="formtag" />
              </div>
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                />
                <label htmlFor="Job">Job title</label>
              </div>
              {errors.job && <div className="text-danger">{errors.job}</div>}
            </div>

            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">*Work Email</label>
              </div>
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                {/* <input
                  type="tel"
                  className="form-control"
                  placeholder=""
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                /> */}
                <PhoneInput inputStyle={{ width: '100%', height: 'auto',paddingLeft:"60px" }}
                  country={defaultCountryCode}
                  type="tel" // Set default country code
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder=""
                  inputClass="form-control" // CSS class for the input
                  inputProps={{
                    name: 'phone',
                    required: false,
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
                <input type="hidden" value={defaultCountryName} name="countryName" />

                {/* <label htmlFor="phone">Phone Number</label> */}
              </div>
              {errors.phone && <div className="text-danger">{errors.phone}</div>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="companyname"
                  value={formData.companyname}
                  onChange={handleChange}
                />
                <label htmlFor="Company Name">*Company Name</label>
              </div>
              {errors.companyname && <div className="text-danger">{errors.companyname}</div>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
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

              </div>
              {errors.service && <div className="text-danger">{errors.service}</div>}
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <textarea
                  className="form-control"
                  placeholder=""
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">*Any specific requirements or questions?</label>
              </div>
              {errors.message && <div className="text-danger">{errors.message}</div>}
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="form-check-input"
                  id="exampleCheck1"
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
              <div className="spiner-wrper">
                <button
                  type="submit"
                  className="btn btn-primary fomr-submit"
                  disabled={submitting} // Disable button while submitting
                >
                  {submitting ? 'Sending...' : 'Let’s Connect'}
                </button>
              </div>
            </div>

          </div>
          <div className='row pa-43'>
            <div className='col-lg-5'>
              <div className='text-center text-center-ff'>
                <p>Get in touch Instantly</p>
                <div className='coant-ii d-flex'>
                  <div className='icns-boxx'>
                    <a href="tel:+442037697689" target="_self">
                      <img src="/img/group_call.png" alt="group_call" />
                      <span>Call</span>
                    </a>
                  </div>
                  <div className='icns-boxx'>
                    <a href="mailto:info@dynamicssquare.co.uk">
                      <img src="/img/group_mail.png" alt="group_mail" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>
              <div className="addre-rigt-new">
                <div className="cont-info">
                  <span>
                    Sales Support:{" "}
                  </span>
                  <span> + 44 203 769 7689</span> <br/><span style={{marginLeft:'102px'}}></span>
                
                </div>
                <div className="cont-info">
                  <span>
                    Technical Support:{" "}
                  </span>
                  <span>+44 (0) 207 097 8987 </span>
                </div>
                <div className="cont-info">
                  <span>
                    <span>
                      Email Us:{" "}
                    </span>
                    <a href="mailto:info@dynamicssquare.co.uk">
                      info@dynamicssquare.co.uk
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

export default FormNewUI;
