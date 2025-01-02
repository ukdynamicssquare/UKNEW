import React, { useRef, useState, useEffect } from 'react';
import Form from "./Form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import FormFooterSubscriber from './FormFooterSubscriber';
import Image from 'next/image';
import Link from "next/link";
import ReCAPTCHA from 'react-google-recaptcha';
const FooterZohoFinalCopy = () => {

  const router = useRouter();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [companyNameError, setCompanyNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission
  const [display, setDisplay] = useState("dspn");

  const [closeModal, setCloseModal] = useState(false);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");
  const recaptchaRef = useRef();
  const RECAPTCHA_SITE_KEY = "6LcpJc0pAAAAAEqpqhJA21kqjTWsKpnhsdrbaUej";
  function handleCloseModal() {
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
      .forEach(el => el.classList.remove("modal-backdrop"));
  }
  const form = useRef();
  useEffect(() => {
    // Load the Zoho script after DOM content is fully loaded
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=ff35fc84fead2bb8f7ee4371c237518663b4b89ebcf813141d6a58670bc2ecbede3086472f0597699cbf4a50db363e95gid07addfd1a31ff25f5879e269e263c5da8f28390f6f650c5d8d8852d2a93580c9gidef1953d0b493ba0ef4fc086c3f29386c9b755cde4750f62b191aee93c2653f29gid541e9a1a97e35246af4064b4a60813132b7d15a5f8c5f90779bb9a22ded79962&tw=8d56c88576e7dfe7877cba12b7c54a1c13a0215b28fc234745b78ab4d32555ab`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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
    // Check if reCAPTCHA is verified
    if (!isRecaptchaVerified) {
      setRecaptchaError("Please complete the reCAPTCHA challenge.");
      return;
    } else {
      setRecaptchaError(""); // Clear reCAPTCHA error if verified
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
        await emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', e.target, 'xIFtTfBj6NR498Plv');
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
    <>
      {!closeModal &&
        <div
          className="modal fade form-main-model"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Request Callback
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <p></p>
              </div>
              <p>
                Please complete the form below and we will be in touch or{" "}
                <a href="tel:+2818990865" target="_self" rel="">
                  book a call
                </a>{" "}
                with one of our Microsoft consultants.
              </p>
              <div className="modal-body">
                <div id='crmWebToEntityForm' className="main-form-wrper">
                  <form id='webform196947000014082098' ref={form} onSubmit={sendEmail} action='https://crm.zoho.in/crm/WebToLeadForm' name='webform196947000014082098' method='POST' acceptCharset='UTF-8'>
                    <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='ddd8c6934302410eb1e18ce3630a401e40eddc0f2e0cf25e5b2c3962bfebfbcf' />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='ef05890eba0f9662528983bce3ce5ea84eb622cc32a31f3f2751bd3c84eeb71fbeb503f0aaeacdcb37096a71c6aeb020' />
                    <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                    <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.co.uk/thank-you/' />
                    <div className="mb-3">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="*Full Name"
                        name="Last Name"
                        onBlur={() => validateName(form.current.name.value)}
                        onChange={() => setNameError("")}
                      />
                      <input type="hidden" value={router.asPath} name="url" />
                      {nameError && <small className="text-danger">{nameError}</small>}
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="Email"
                        onBlur={(e) => {
                          if (!validateEmail(e.target.value)) {
                            setEmailError("Please enter a valid work email address.");
                          } else {
                            setEmailError("");
                          }
                        }}
                      />
                      {emailError && <small className="text-danger">{emailError}</small>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="Company"
                        onBlur={() => validateCompanyName(form.current.Company.value)}
                        onChange={() => setCompanyNameError("")}
                      />
                      {companyNameError && <small className="text-danger">{companyNameError}</small>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="Phone"
                        onBlur={(e) => validatePhone(e.target.value)}
                        required
                      />
                      {phoneError && <small className="text-danger">{phoneError}</small>}
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="*How Can We Help You?"
                        rows="3"
                        name="Description"
                        onBlur={() => validateMessage(form.current.Description.value)}
                        onChange={() => setMessageError("")}
                      ></textarea>
                      {messageError && <small className="text-danger">{messageError}</small>}
                    </div>
                    <div className="mb-3 form-check" style={{marginLeft:'-25px'}}>
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => {
                          setIsRecaptchaVerified(true);
                          setRecaptchaError(""); // Clear error message on successful verification
                        }}
                      />

                      {/* Render reCAPTCHA error message */}
                      {recaptchaError && <small className="text-danger">{recaptchaError}</small>}
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
                   

                    <div className="spiner-wrper">
                      {/* <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                      >
                        Submit
                      </button> */}
                      <button
                        id='formsubmit'
                        type="submit"
                        title='Submit'
                        value='Submit'
                        className="btn btn-primary fomr-submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : ' Submit'}
                      </button>
                      {/* <div className={display} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

      }

      <section id="services" className="services bg-shape ovr-f hidesec">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Book a Free Consultation</h2>
            <p>
              See How Dynamics Square Can Help Transform Your Business With
              Microsoft Business Applications.
            </p>
          </header>
          <div className="row justify-content-md-center">
            <div className="col-lg-10 col-md-10">
              <div className="row g-0 extra-height">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="main-form-wrper-common">
                    <Form />
                  </div>
                </div>
                <div className="col-sm-4 col-md-6 col-lg-6 hide-c">
                  <img
                    src="/img/contactfor-sede-img.jpg"
                    alt="contactfor-sede-img"
                    className="image-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-contact-s">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Kemp House, 124 City Road,London, EC1V 2NX, U.K.
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+442071932502">
                    +44 207 193 2502
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  International House 61 Mosley Street, Manchester, M2 3HZ,
                  United Kingdom
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+447479273380">
                    +44 747 927 3380
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Izabella House, 24 - 26 Regents Place, City Centre, Birmingham
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+441213182798">
                    +44 121 318 2798
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div>
            {/* <div className="col-lg-3">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  Utrechtseweg 341, 3818 EL Amersfoort, Netherlands
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">
                  <a target="_self" rel="" href="tel:+3197010257044">
                    +31 970 102 57044
                  </a>
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">info@dynamicssquare.co.uk</div>
              </div>
            </div> */}

          </div>
        </div>
      </div>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <a><Image
                    src="/img/dynamics_square_tm_logo_footer.svg"
                    alt="Dynamics Square TM Logo"
                    style={{ marginBottom: "20px" }}
                    width={230} height={81}
                  /></a>
                </Link>
                <p>
                  Dynamics Square is UK's leading Microsoft Gold Certified
                  Partner that caters to the needs of orgnisations who can
                  source next-gen Microsoft Business Apps from our highly
                  skilled Microsoft consultants.
                </p>
                <Image
                  src="/img/microsoft-partner-footer.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width={230} height={200}
                /><br />
                <Image
                  src="/img/Tech-For-Socil-Impact.svg"
                  alt="Tech-For-Socil-Impact"
                  className="footer-img m-r"
                  width={230} height={120}
                /> <br />
                {/* <Image
                  src="/img/UK-badge.png"
                  alt="UK badge"
                  className="footer-img"
                  width={98} height={98}
                /> */}
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>BUSINESS APPS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-business-central/">
                      Business Central
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-finance/">
                      Finance
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/dynamics-365-supply-chain-management/">
                      Supply Chain
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-365-sales/">
                      Sales
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-power-bi/">
                      Power BI
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-azure/">Azure IoT</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-erp/">
                      ERP (NAV/GP/AX)
                    </Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/products/microsoft-dynamics-crm/">
                      CRM
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-12 footer-links">
                <p>QUICK LINKS</p>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/about-us/">About us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/why-us/">Why Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/our-services/">Our Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/partner/">Our Partners</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/contact-us/">Contact Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <a
                      href="https://www.dynamicssquare.co.uk/blog/"
                      rel=""
                      target="_self"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/privacy-policy/">Privacy policy</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <Link href="/modern-slavery-act/">Modern Slavery Act</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 text-md-start">
                <p>CONNECT WITH US</p>

                <div className="social-links mt-3">
                  <a
                    target="_blank"
                    rel=""
                    href="https://twitter.com/dsquare_uk"
                    className="twitter"
                    aria-label="Twitter"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.facebook.com/dynamicssquareuk/"
                    className="facebook"
                    aria-label="Facebook"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.instagram.com/dynamicssquareuk/"
                    className="instagram"
                    aria-label="Instagram"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    target="_blank"
                    rel=""
                    href="https://www.linkedin.com/showcase/dynamics-square-uk/"
                    className="linkedin"
                    aria-label="Linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
                <div className="footer-bottm-subscriber">
                  <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span>
                  <FormFooterSubscriber />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2025 Dynamics Square.</span>
            <div className="footer-extra-link">
              <Link href="/terms-of-use/">Terms of Use </Link>
              <Link href="/cookie-policy/">| Cookie </Link>
              {/* <Link href="/sitemap.xml">| Sitemap</Link> */}
            </div>
          </div>
        </div>
      </footer>
      <div className='call-bb-wr'>
        <button className="fixed-button wobble" type="button">
          <a href="tel:+442071932502" target="_self" aria-label="telephone"><i className="bi bi-telephone-fill"></i></a>
        </button>

      </div>

    </>

  );
}
export default FooterZohoFinalCopy