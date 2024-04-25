import React, { useRef ,useState, useEffect } from 'react';
import Form from "./Form";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import FormFooterSubscriber from './FormFooterSubscriber';
import Image from 'next/image';
import Link from "next/link"; 
const Footer = () =>{
  
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal]  = useState(false);
  function handleCloseModal(){            
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
}

useEffect(() => {
  // Load the Zoho script after DOM content is fully loaded
  const loadScript = () => {
    const script = document.createElement('script');
    script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=7d98a8d359385b8d1798afa307a3c86d82bc80479df2e27b3a3c26ffc2a8ecd4aad0079010bb1de7c7499400fdc67cf9gidcb2e56e93109ad2008b2af840003a6d2a3190cf7c200ad12b766709849a5f597gid8a9ff4b6ce4e5d9b5e45f3bd3c55c86ef2a5bdbd2b757611fcfed3ff6306239egid6b7817c2b1048dc191afa600364b3bd1f34a12242ccaa99750718688c3d1e8bf&tw=0aa0ddf528e1e51427b4c971acb9d65405e7d1f11fdc8824cf64f544cd4d80bd`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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

const handleSubmit = async (event) => {
  setDisplay("spinner-border text-success");
  event.preventDefault();
  setDisplay("spinner-border text-success");
  const formData = new FormData(event.target);
  const url = 'https://crm.zoho.in/crm/WebToLeadForm';

  try {
      // Send email using EmailJS
      await emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', event.target, 'xIFtTfBj6NR498Plv');


      // Submit form data to Zoho CRM
      const response = await fetch(url, {
          method: 'POST',
          body: formData
      });

      if (response.ok) {
          console.log('Form submitted successfully!');
          // Reset form fields manually
          event.target.querySelectorAll('input, textarea').forEach((field) => {
              field.value = '';
              // router.push('/thank-you/');
          });

          // Redirect to thank you page after 4 seconds
          setTimeout(() => {
            event.target.reset();
              router.push('/thank-you/');
          }, 100);
      } else {
          console.error('Failed to submit form:', response.statusText);
      }
  } catch (error) {
      console.error('Error submitting form:', error);
  }
};

    return(
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
             <form id='webform196947000014082098' onSubmit={handleSubmit} action='https://crm.zoho.in/crm/WebToLeadForm' name='webform196947000014082098' method='POST' acceptCharset='UTF-8'>
             <input type='text' style={{ display: 'none' }} name='xnQsjsdp'
            value='1976372d81c8c887ec22b7f1cf5b83d759ddc661af97f10f96048ab274a9c79f' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD'
            value='37198717f72b12d3ca5e9b417164021d99d42e235ca33ef82c2cb73bd9907f883cb6752fe91da7174d2a0d4ea743d0bc' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.co.uk/thank-you/' />
                  <div className="mb-3">
                    <input
                      type="text"
                      id='Last_Name'
                      className="form-control"
                      placeholder="*Full Name"
                      name="Last Name"
                      required
                    />
                    <input type="hidden" value={router.asPath} name="url" />
                  </div>

                  <div className="mb-3">
                    <input
                      id='Email'
                      type="email"
                      className="form-control"
                      placeholder="*Work Email"
                      name="Email"
                      pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      id='Company'
                      className="form-control"
                      placeholder="*Company Name"
                      name="Company"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      id='Phone'
                      className="form-control"
                      placeholder="*Phone Number"
                      name="Phone"
                      pattern="^\d{10,13}$"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id='Description'
                      placeholder="*How Can We Help You?"
                      rows="3"
                      name="Description"
                      required
                    ></textarea>
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
                    <button
                      type="submit"
                      className="btn btn-primary fomr-submit"
                    >
                      Submit
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
                    style={{marginBottom:"20px"}}
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