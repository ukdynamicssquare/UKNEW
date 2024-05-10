import React, { useRef ,useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const TestForm = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [currentPageUrl, setCurrentPageUrl] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    companyname:'',
    message: '',
    currentPageUrl:''
  });

  useEffect(()=>{
    setFormData((prevFormData)=>({...prevFormData, currentPageUrl}));
  },[currentPageUrl]);    
    
  useEffect(()=>{
    setCurrentPageUrl(window.location.href);
  },[]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://blognew.dynamicssquare.co.uk/api/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        
        // Log form data before sending via EmailJS
        console.log('Form Data:', formData);
        
        // Send form data via EmailJS
        emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', e.target, 'xIFtTfBj6NR498Plv')
          .then((result) => {
            console.log('EmailJS success:', result.text);
          })
          .catch((error) => {
            console.error('EmailJS error:', error.text);
          });
        
        // Redirect to thank you page after submission
        setTimeout(function() {
          router.push("/thank-you/");
        }, 1000);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div>
      <div className="main-form-wrper">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="* Full Name"
              name="name"
              value={formData.name} 
              onChange={handleChange}
            />
            <input type="hidden" name="currentPageUrl" value={currentPageUrl} />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="* Work Email"
              name="email"
              value={formData.email} 
              onChange={handleChange}
            />
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
          </div>
          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="*Phone Number"
              name="phone"
              value={formData.phone} 
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="* How Can We Help You?"
              rows="3"
              name="message"
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
          </div>
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
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TestForm;
