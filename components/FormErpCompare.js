'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FormErpCompare = ({ onSuccess }) => {
  const router = useRouter();
  const form = useRef();
  const [currentPageUrl, setCurrentPageUrl] = useState('');
  const [defaultCountryName, setDefaultCountryName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyname: '',
    currentPageUrl: '',
    defaultCountryName: '',
    formtag: 'ERP Compare Form'
  });

  const [defaultCountryCode, setDefaultCountryCode] = useState('gb'); 
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Fetch country by IP
  useEffect(() => {
    fetch(`https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`)
      .then((res) => res.json())
      .then((data) => {
        setDefaultCountryCode(data.country_code.toLowerCase());
        setDefaultCountryName(data.country_name);
      })
      .catch(() => setDefaultCountryCode('gb'));
  }, []);

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
    setFormData((prev) => ({
      ...prev,
      currentPageUrl: window.location.href,
      defaultCountryName,
    }));
  }, [defaultCountryName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    setErrors((prev) => ({ ...prev, phone: '' }));
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid work email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.companyname.trim()) errors.companyname = 'Company name is required';
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)(?!outlook.com)(?!live.com)(?!yahoo.co.in)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => /^\d{10,15}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        await emailjs.sendForm('service_x0eo9w8', 'template_e2eswsj', e.target, 'xIFtTfBj6NR498Plv');
        await fetch('https://blognew.dynamicssquare.co.uk/api/formData', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (onSuccess) onSuccess(); // 🔥 notify parent
        setFormData({
          name: '',
          email: '',
          phone: '',
          companyname: '',
          currentPageUrl: '',
          defaultCountryName: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
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
          <PhoneInput
            inputStyle={{ width: '100%' }}
            country={defaultCountryCode}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phone',
              required: true,
            }}
            countryCodeEditable={false}
            excludeCountries={['pk']}
          />
          {errors.phone && <div className="text-danger">{errors.phone}</div>}
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" checked readOnly className="form-check-input" />
          <label className="form-check-label">
            I agree to the
            <a href="/privacy-policy/" target="_blank"> Privacy Policy </a>
            and
            <a href="/terms-of-use/" target="_blank"> Terms of Service</a>.
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
};

export default FormErpCompare;
