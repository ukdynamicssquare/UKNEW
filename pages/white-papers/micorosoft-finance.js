import React, { useRef, useState,useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const WhitepaerguideFianace = () => {

  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [defaultCountryCode, setDefaultCountryCode] = useState('us'); 
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
      setDefaultCountryCode('us');
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
      router.push("/white-papers/download/pdf-micorosoft-finance/");
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
      <Head>
      <title>Dynamics 365 Finance with Copilot WhitePaper | Dynamics Square</title>
        <meta
          name="description"
          content="How Dynamics 365 Finance with Copilot boosts efficiency, automates tasks, and drives smarter financial decisions in this comprehensive whitepaper."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/white-papers/micorosoft-copilot/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>The Future of Finance Management: Transform the way Finance works
              with Microsoft Copilot</h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Download now!</span></a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <img width={800} src="/img/finace-white-papper-banner.png" alt="whitepaper-one" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>The White paper will Walk you Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>The Future of Finance Management: Dynamics 365 Finance</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Finance
                  Microsoft – Your Partner for Business Success</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Common Financial Challenges in Modern Industries</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image src="/img/finace-whitper-center.png" alt="tablet-ebook" width={487} height={613} />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>The Perfect Solution to Eliminate all Financial Challenges</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Microsoft 365 Copilot for Finance</h3>
                  <div className="shape-l"></div>
                </div>
                {/* <div className="left-rit">
                  <h3>Copilot for Individuals and Organisations</h3>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboot-erp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="pic-ll">
                <Image
                  src="/img/erp-left-about.png"
                  alt="erp-left-about"
                  width={337} height={460}
                />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>What’s More in This White Paper?</h3>
                <p>The whitepaper goes into great detail about Microsoft Dynamics 365 Finance, and Microsoft Copilot comes integrated into it, showing how they can completely change the way you handle your finances. It starts by listing the main financial problems that companies have, like inefficient processes, poor data quality, regulatory compliance complexities, lack of integration, and multi-entity management. These problems make it harder to make decisions, run operations efficiently, and keep track of finances correctly.</p>
                <p>Microsoft Dynamics 365 Finance is a strong business solution that improves finance-related tasks, automates work processes, and gathers all data in one place. It helps increase the output of various crucial processes such as automated bank reconciliation, cash flow management, and customised financial reporting.</p>
                <p>The integrated Microsoft Copilot helps automate repetitive processes, offer real-time information, and improve the abilities of users by acting as a personal assistant to them. Copilot’s functionalities, such as tracking customer balances, generating automated emails, and centralizing financial data, are emphasized for their ability to save time and improve accuracy.</p>
                <p>The white paper concludes with an emphasis on using an advanced financial management tool like Dynamics 365 Finance powered with Copilot to deal with challenges. The solution helps drive business growth through new ideas and increase overall efficiency through process automation. No wonder why it is the preferred choice for companies that want to improve their finances and be successful in the long run.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="images" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left call_to_action-lefts">
                <h3>Want to digitally transform your business with AI and modern tech?</h3>
                <p>Press the Download Now button and uncover the knowledge, especially curated for you. </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal1"><a
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Get a Copy now!</span></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {!closeModal && (
        <div
          className="modal fade form-main-model"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Register For White Paper
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

                    <div className="spinner-wrapper spinner-wrapper-custom jj">
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

          <style jsx>{`
            form .error {
    color: #bb2b36;
    font-size: 12px;
    margin-top: 0.25em;
}
    .jj{
display: flex;
    align-items: center;
    gap: 15px;
}
        `}
        </style>

        </div>
       
      )}
    </>
  );
};

export default WhitepaerguideFianace;
