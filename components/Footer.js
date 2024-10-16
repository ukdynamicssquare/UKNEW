import React, { useRef, useState, useEffect } from 'react';
import Form from "./Form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
// import FormFooterSubscriber from './FormFooterSubscriber';
import Image from 'next/image';
import Link from "next/link";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Footer = () => {
  const [display, setDisplay] = useState("dspn");
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
      .forEach(el => el.classList.remove("modal-backdrop"));
  }
  const router = useRouter();
  const form = useRef();
  const [currentPageUrl, setCurrentPageUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    message: '',
    formtag: 'CTA Form',
    // job: '',
    // service: '',
    currentPageUrl: '',
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

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };

  // const handlePhoneChange = (e) => {
  //   const { value } = e.target;

  //   const cleanedValue = value.replace(/\D/g, '');

  //   const truncatedValue = cleanedValue.slice(0, 13);
  //   setFormData({ ...formData, phone: truncatedValue });

  //   setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        // Send form data via EmailJS
        await emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', e.target, 'xIFtTfBj6NR498Plv');
        // await emailjs.sendForm('service_lqazf46', 'template_e13glbp', e.target, 'JMglIoOzliJzdMCd4');

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
    return /^\d{10,15}$/.test(phone);
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
                      <input type="hidden" value="CTA Form" name="formtag" />
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
                  Kemp House, 124 City Road,London, <br/>EC1V 2NX, U.K.
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
                  +44 745 994 8273
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
                  {/* <p>Subscribe Newsletter</p>
                  <span>
                    Get Dynamics 365 Product Updates, Free Webinars, Blogs,
                    Offers And Much More!
                  </span> */}
                  {/* <FormFooterSubscriber /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright &nbsp;<span>2024 Dynamics Square.</span>
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
export default Footer