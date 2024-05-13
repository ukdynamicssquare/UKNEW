import React, { useRef ,useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const Formpop = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
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
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(()=>{
    setFormData((prevFormData)=>({...prevFormData, currentPageUrl}));
  },[currentPageUrl]);    
    
  useEffect(()=>{
    setCurrentPageUrl(window.location.href);
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Replace any non-numeric characters with an empty string
    const cleanedValue = value.replace(/\D/g, '');
    // Limit to 13 characters
    const truncatedValue = cleanedValue.slice(0, 13);
    setFormData({ ...formData, phone: truncatedValue });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validateForm(formData);
  if (Object.keys(validationErrors).length === 0) {
    setSubmitting(true);
    try {
      // Send form data via EmailJS
      await emailjs.sendForm('service_lqazf46', 'template_e13glbp', e.target, 'JMglIoOzliJzdMCd4');

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
          message: '',
          // job: '',
          // service: '',
          currentPageUrl: '',
        });



        setTimeout(() => {
          event.target.reset();
          event.target.remove();
          Cookies.set('popupModalShown', true, { expires: 1 });
          setShowModal(false);
          router.push("/thank-you/");
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
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
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
    return /^\d{10,13}$/.test(phone);
  };




    return (
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
          <input
            type="tel"
            className="form-control"
            placeholder="*Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
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
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="*How Can We Help You?"
            rows="3"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>
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
    );
}

export default Formpop;
