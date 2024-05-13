import React, { useRef ,useState,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const TestFormWorkingcopy = () => {
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
    job:'',
    service:'',
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
        // Send form data via EmailJS
        emailjs.sendForm('service_lqazf46', 'template_e13glbp', e.target, 'JMglIoOzliJzdMCd4')
          .then((result) => {
            console.log('EmailJS success:', result.text);
          })
          .catch((error) => {
            console.error('EmailJS error:', error.text);
          });


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
        
        //add email js code here
        
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
            <input
              type="text"
              className="form-control"
              placeholder="job title"
              name="job"
              value={formData.job} 
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
                <select className="form-select" name="service" aria-label="Default select example"  value={formData.service}   onChange={handleChange}>
                  <option disabled hidden value="">Looking For?</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Upgrade/Migration">Upgrade/Migration</option>
                  <option value="Support">Support</option>
                </select>
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

export default TestFormWorkingcopy;
