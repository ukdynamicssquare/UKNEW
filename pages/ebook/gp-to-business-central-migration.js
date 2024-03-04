import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import emailjs from "@emailjs/browser";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
const StartGuideGp = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("exampleModal1").classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
  }
  const sendEmail = (e) => {
    setDisplay("spinner-border text-success");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4voumj7",
        "template_68k24ku",
        form.current,
        "mJ38M6WTmU7KRrtuZ"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(function () {
      setCloseModal(true);
      e.target.reset();
      router.push("/guides/download/Pdf-dynamics-gp-to-bc/");
    }, 500);
  };

  return (
    <>
      <Head>
        <title>The Quick Guide to Dynamics GP to Business Central Migration</title>
        <meta
          name="description"
          content="Download our free eBook - Unlock seamless transitions with 'Dynamics GP to Business Central Migration.' Utilise the evolution of your business effortlessly."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/ebook/gp-to-business-central-migration/"
        />
      </Head>

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>A Complete Guide for Microsoft Dynamics GP (Great Plains) to Business Central Migration </h1>
              <br />
              <div>
                <div className="text-center text-lg-start">
                  <Link href="#exampleModal1">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Download Now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <Image
                src="/img/dynamics-GP-BC-Ebook-banner-image.png"
                alt="dynamics-GP-BC-Ebook-banner-image"
                width={800} height={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>This Perfect eBook will guide you through: </h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-let">
                  <h3>The need of future ready solutions</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Why Businesses are upgrading to BC</h3>
                  <div className="shape"></div>
                </div>
                <div className="left-let">
                  <h3>Top benefits of moving to BC</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image
                  src="/img/dynamics-GP-BC-tablet.png"
                  alt="dynamics-GP-BC-tablet"
                  width={487} height={613}
                />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                <div className="left-rit">
                  <h3>Why you should migrate</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>When Microsoft will end supporting GP</h3>
                  <div className="shape-l"></div>
                </div>
                <div className="left-rit">
                  <h3>Overall migration cost</h3>
                </div>
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
                <Image src="/img/erp-left-about.png" alt="erp-left-about" width={337} height={460} />
              </div>
            </div>
            {/* <div className="col-lg-1 align-self-center"></div> */}
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h3>What's more about this eBook? </h3>
                <p>The world is accepting cutting-edge technology and AI-powered solutions to handle the complex business scenarios we are facing around the globe. <Link href="/products/dynamics-365-business-central/"><a>Business Central</a></Link> is one such solution that empowers you to streamline complex operations while pushing you to attain a greater level of business growth. </p>
                <p>With intense embedded AI and automation capabilities, Business can help you reduce the overall operational cost while automating your business for good. </p>
                <p>With graphics and visual content, you will be able to understand all the practical factors of accepting Business Central as your primary support partner for growth. </p>
                <p>It is designed in such a way that all businesses, regardless of size, can discover the benefits of moving to Business Central with confidence and knowledge.</p>
                <p>This eBook will guide you through the most frequently asked queries of international businesses that have migrated their systems from GP (Great Plains) to Business Central. Also, it will help you decide whether it is the right time for your unique business to migrate to Business Central or not. </p>
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
                <h3 style={{marginBottom:'15px'}}>Start your Business Central Journey Right Now! </h3>
                <p>Discover the path of efficient business to drive a smoother future with Microsoft Dynamics 365 Business Central.</p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal1">
                    <a
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto"
                    >
                      <span>Get your free copy now!</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="header-title-left">
            <h3>FAQ</h3>
          </div>
          <div className="row pd-121">
            <div className="col-lg-6 align-self-center">
              <div className="fax-accd">
                <div className="accordion" id="faqaccer">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >How do I migrate from GP to Business Central? </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>The process of migrating from GP to Business Central is easy once you have the right Dynamics 365 solution partner. Otherwise, the entire process of understanding the business requirement and customising the solution would become complex. Once you have the right partner, they will do everything for you.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >Why migrate from Dynamics GP to BC? </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>You must migrate to Business Central to meet changing modern business demands, avail a centralised solution for everything, and customise the BC to meet unique needs. Also, to lower the overall operational cost, get automatic system updates and obtain consistent Microsoft support to run everything smoothly. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >How Can a Migration Partner Help? </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>A migration partner can help you understand your business requirements and guide you towards the right path of growth. Also, the right Microsoft migration partner, like Dynamics Square, can help you choose the right licencing plan and customise the solutions to meet unique demands. </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefour"
                        aria-expanded="false"
                        aria-controls="collapsefour"
                      >Is Microsoft Dynamics GP available in the cloud? </button>
                    </h3>
                    <div
                      id="collapsefour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfour"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>As per the latest updates, Microsoft has stopped offering <Link href="/products/microsoft-dynamics-gp/"><a>Dynamics GP</a></Link> to businesses regardless of deployment type, whether on-premises or cloud. So, to avail of cloud functionalities, you will need to implement a cloud-based ERP solution, like Business Central, Dynamics 365 Finance, or other <Link href="/products/microsoft-dynamics-365/"><a>Dynamics 365 solutions</a></Link>.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsefive"
                        aria-expanded="false"
                        aria-controls="collapsefive"
                      >How will this guide help me? </button>
                    </h3>
                    <div
                      id="collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingfive"
                      data-bs-parent="#faqaccer"
                    >
                      <div className="accordion-body">
                        <p>This guide will help you understand the business demand for migrating to Business Central from Dynamics GP. Also, this will help you dive deeper into the various aspects of Business Central and how it can be your partner in growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="pic-l2">
              <Image src="/img/Cover_Book_Moc.png" alt="Cover_Book_Moc" width={582} height={466} />
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
                        required
                      />
                      <input type="hidden" value={router.asPath} name="url" />
                    </div>

                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="email"
                        pattern="^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="company_name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        pattern="^\d{10,13}$"
                        required
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree to the {" "}
                        <Link href="/privacy-policy/">
                          <a target="_blank">Privacy Policy</a>
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms-of-use/" target="_blank">
                        <a target="_blank">Terms of Service</a>
                        </Link>
                        .
                      </label>
                    </div>

                    <div className="spiner-wrper">
                      <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                      >
                        Download Now
                      </button>
                      <div className={display} role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
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
};

export default StartGuideGp;
