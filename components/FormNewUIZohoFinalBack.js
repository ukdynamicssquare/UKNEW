import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const FormNewUIZohoFinalBack = () => {
  const router = useRouter();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const form = useRef();


  useEffect(() => {
    // Load the Zoho script after DOM content is fully loaded
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=75e5e8b5c1709521ebfaa5af17f541f15a8d2c442b923240377a68818e33bad096370e54b4fc0f0838b1c33bf07a1e3cgidfcf6850d87f437adffbb16a63b2030dc478b8c7c05e1c7c250912beb1f7f455agidf0bcbd4a3d828621cf3737f9f6278ccc2d37a9d433add202a3944f7b42c19ac0gid360cd4f69299d31ac772552cc0960219ad75b22d8dafea9f68a5dfe869f6f407&tw=6da3954f3a2164bbc4d4f060739c6fe5074f6c7acffb39b8b3f6ebc75a4e087e`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
      script.async = true;
      document.body.appendChild(script);
    };

    if (document.readyState === 'complete') {
      loadScript();
    } else {
      window.addEventListener('DOMContentLoaded', loadScript);
    }

    // Clean up function to remove the script when the component unmounts
    return () => {
      const script = document.querySelector('script[src^="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet"]');
      if (script) {
        script.remove();
      }
    };
  }, []);


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,13}$/;
    const isValid = phoneRegex.test(phone);
    if (!isValid && phone.length > 0) {
      setPhoneError("Please enter a valid phone number (10-13 digits).");
    } else {
      setPhoneError("");
    }
    return isValid;
  };

  const validateName = (name) => {
    if (!name) {
      setNameError("Please enter your full name.");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateCompanyName = (companyName) => {
    if (!companyName) {
      setCompanyNameError("Please enter your company name.");
      return false;
    } else {
      setCompanyNameError("");
      return true;
    }
  };

  const validateMessage = (message) => {
    if (!message) {
      setMessageError("Please enter your message.");
      return false;
    } else {
      setMessageError("");
      return true;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Ensure that form.current is defined before accessing its properties
    if (!form.current) {
      console.error("Form reference is not set.");
      return;
    }

    const formData = new FormData(form.current);
    const url = 'https://crm.zoho.in/crm/WebToLeadForm';
    let isValid = true;

    isValid = validateName(formData.get('Last Name')) && isValid;
    isValid = validateCompanyName(formData.get('Company')) && isValid;
    isValid = validateMessage(formData.get('Description')) && isValid;

    const email = formData.get('Email');
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid work email address.");
      isValid = false;
    } else {
      setEmailError(""); // Clear email error if email is valid
    }

    const phone = formData.get('phone');
    if (phone && !validatePhone(phone)) {
      isValid = false;
    }

    if (isValid) {
      setIsSubmitting(true); // Start loading animation

      try {
        await emailjs.sendForm('service_x0eo9w8', 'template_20o8u0f', e.target, 'xIFtTfBj6NR498Plv');
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully!');
        setTimeout(() => {
          router.push("/thank-you/");
        }, 300); // Redirect to thank-you page after 5 seconds
      } catch (error) {
        console.error('Error sending form:', error);
        // Handle error, e.g., display error message to user
      } finally {
        setIsSubmitting(false); // Stop loading animation regardless of success or failure
      }
    }
  };


  return (
    <div className='rows-box-sh'>
      <div id='crmWebToEntityForm' className="main-form-wrper main_form-wrper_contact">
        <form id='webform196947000014082029' ref={form} onSubmit={sendEmail} action='https://crm.zoho.in/crm/WebToLeadForm' name='WebToLeads196947000014082029' method='POST' acceptCharset='UTF-8'>
          <input type='text' style={{ display: 'none' }} name='xnQsjsdp'
			value='f5c6c7223f1d12531ca55695a66e01bf52572d24ba60884f7ac486a711dd382e' />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' />
          <input type='text' style={{ display: 'none' }} name='xmIwtLD'
			value='c3c08ed63bbfb986983fdb9dd44152fac7ab421cfdc9c5f76bbb2a8861665ce990d5895035b672d0b354ff9030fb4a16' />
          <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
          <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.co.uk/thank-you/' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="Last Name"
                  id="name"
                  onBlur={() => validateName(form.current.name.value)}
                  onChange={() => setNameError("")}

                />
                <label htmlFor="name">*Name</label>
                <input type="hidden" value={router.asPath} name="url" />
                <input type="hidden" value={router.asPath} name="LEADCF1" />
              </div>
              {nameError && <small className="text-danger">{nameError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="LEADCF5"
                />
                <label htmlFor="Job">Job title</label>
              </div>
            </div>

            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  name="Email"
                  onBlur={(e) => {
                    if (!validateEmail(e.target.value)) {
                      setEmailError("Please enter a valid work email address.");
                    } else {
                      setEmailError("");
                    }
                  }}
                />
                <label htmlFor="email">*Work Email</label>
              </div>
              {emailError && <small className="text-danger">{emailError}</small>}
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder=""
                  name="Phone"
                  onBlur={(e) => validatePhone(e.target.value)}
                />
                <label htmlFor="phone">Phone Number</label>
              </div>
              {phoneError && <small className="text-danger">{phoneError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="Company"
                  onBlur={() => validateCompanyName(form.current.Company.value)}
                  onChange={() => setCompanyNameError("")}
                />
                <label htmlFor="Company Name">*Company Name</label>
              </div>
              {companyNameError && <small className="text-danger">{companyNameError}</small>}
            </div>
            <div className='col-lg-6'>
              <div className="mb-3 form-group">
                <select className="form-select" name="LEADCF7" aria-label="Default select example" defaultValue="">
                  <option disabled hidden value="">Looking For?</option>
                  <option value="Implementation">Implementation</option>
                  <option value="Upgrade/Migration">Upgrade/Migration</option>
                  <option value="Support">Support</option>
                </select>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className="mb-3 form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder=""
                  rows="3"
                  name="Description"
                  onBlur={() => validateMessage(form.current.Description.value)}
                  onChange={() => setMessageError("")}
                ></textarea>
                <label htmlFor="message">*Any specific requirements or questions?</label>
              </div>
              {messageError && <small className="text-danger">{messageError}</small>}
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
                {/* <div className='zcwf_col_fld'>
                        <input type='submit' id='formsubmit' className='btn btn-primary fomr-submit formsubmit zcwf_button' value='Submit' title='Submit' />
                    </div> */}
                <button
                  id='formsubmit'
                  type="submit"
                  title='Submit'
                  value='Submit'
                  className="btn btn-primary fomr-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Let’s Connect'}
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
                    <a href="tel:+12898070740" target="_self">
                      <img src="/img/group_call.png" alt="group_call" />
                      <span>Call</span>
                    </a>
                  </div>
                  <div className='icns-boxx'>
                    <a href="mailto:info@dynamicssquare.com">
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
                  <span>+1 289 807 0740</span>
                </div>
                <div className="cont-info">
                  <span>
                    <span>
                      Email Us:{" "}
                    </span>
                    <a href="mailto:info@dynamicssquare.com">
                      info@dynamicssquare.com
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Do not remove this --- Analytics Tracking code starts */}
          {/* <script id='wf_anal' src='https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=948f4cd9be9bd0a0990742d73cae57054f6db4cf60fadf1c40179e618e27a154bc383e6d0864f0639a6bf156e9e0b82dgidcfca0836293a502444394c44154c5d181e2746b3c7b72fb2a29bbf5bd484edf3gid79441142bac69bf8063093608e61e40a0111ece3fbd86a8ba67d66f194a16099gidae57229cd5d755a9095560a43b789a9936b26d3eb67c9fc12f7c2a21479003b9&tw=e3f350a1f3532d71831c9cd9681bf1dca97bd3f0990fa5ae18c4613ed902cbb6'></script> */}
        </form>
      </div>
    </div>
  );
}

export default FormNewUIZohoFinalBack;
