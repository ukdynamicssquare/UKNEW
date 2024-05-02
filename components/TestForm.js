"use client"
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import axios from 'axios';
const TestForm = () => {
    const router = useRouter();
    const [display, setDisplay] = useState("dspn");
    const form = useRef();
    const [currentPageUrl, setCurrentPageUrl] = useState('');
    useEffect(() => {
        setCurrentPageUrl(window.location.href);
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company_name: '',
        phone: '',
        message: '',
        currentPageUrl: ''

    });
    useEffect(() => {
        setFormData((prevFormData) => ({ ...prevFormData, currentPageUrl }));
    }, [currentPageUrl]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://blognew.dynamicssquare.co.uk/api/formData', formData);
            console.log(response.data);
            setTimeout(function () {
                e.target.reset();
                router.push("/thank-you/");
            }, 500);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        
    };

    // const sendEmail = (e) => {
    //   setDisplay("spinner-border text-success");
    //   e.preventDefault();

    //   emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', form.current, 'xIFtTfBj6NR498Plv')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });

    //     setTimeout(function() {
    //       e.target.reset();
    //       router.push("/thank-you/");
    //     }, 500);
    //   alert();

    // };


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
                            onChange={handleChange}
                            required
                        />
                        <input type="hidden" name="currentPageUrl" value={currentPageUrl} />
                    </div>

                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="* Work Email"
                            name="email"
                            onChange={handleChange}

                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="*Company Name"
                            name="company_name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="*Phone Number"
                            name="phone"
                            onChange={handleChange}

                            required
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea2"
                            placeholder="* How Can We Help You?"
                            rows="3"
                            name="message"
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            checked
                            readOnly
                            className="form-check-input"
                            id="exampleCheck2"
                            aria-labelledby="lbl-main-checkbox"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck2">
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
    );
}

export default TestForm;