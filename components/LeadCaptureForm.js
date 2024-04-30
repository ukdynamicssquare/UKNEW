import { useEffect } from 'react';

const LeadCaptureForm = () => {
    useEffect(() => {
        const loadReCaptcha = () => {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };

        loadReCaptcha();

        return () => {
            // Cleanup function to remove the script when component unmounts
            document.body.removeChild(document.body.lastElementChild);
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        
        // Check mandatory fields
        const mandatoryFields = ['Company', 'Last Name', 'Email'];
        for (let i = 0; i < mandatoryFields.length; i++) {
            const fieldName = mandatoryFields[i];
            const fieldValue = form.elements[fieldName].value.trim();
            if (fieldValue === '') {
                alert(`${fieldName} cannot be empty.`);
                return;
            }
        }
    
        // Validate email
        const emailField = form.elements['Email'];
        const emailValue = emailField.value.trim();
        if (!validateEmail(emailValue)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        // Validate reCAPTCHA
        const reCaptchaResponse = grecaptcha.getResponse();
        if (reCaptchaResponse === '') {
            alert('Please complete the reCAPTCHA.');
            return;
        }
    
        // Submit form
        form.submit();
    };

    const validateEmail = (email) => {
        // Email validation logic
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div id='crmWebToEntityForm' className='zcwf_lblLeft crmWebToEntityForm'>
            <form id='webform196947000014499196' action='https://crm.zoho.in/crm/WebToLeadForm' name='WebToLeads196947000014499196' method='POST' onSubmit={handleSubmit} acceptCharset='UTF-8'>
                <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='2eff51a98c3b83d0ba1da0e6ad8586cfd66d65f07996635af7f4c547e902a43b' />
                <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='e796a731d2e1ae89ac28f80b1f8635a5fa37b81e9971b3340992e22b732b788abdb5e20be6bfdbf637e0fdf024ea748d' />
                <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
                <input type='text' style={{ display: 'none' }} name='returnURL' value='https://dynamicssquare.co.uk/thank-you/' />
                <div className='zcwf_title'>CTA Pop-up Test</div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Last_Name'>Full Name<span style={{ color: 'red' }}>*</span></label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxLength='80' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Email'>Email<span style={{ color: 'red' }}>*</span></label></div>
                    <div className='zcwf_col_fld'><input type='text' ftype='email' autoComplete='false' id='Email' name='Email' crmlabel='' maxLength='100' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Company'>Company<span style={{ color: 'red' }}>*</span></label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Company' name='Company' maxLength='200' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Phone'>Phone</label></div>
                    <div className='zcwf_col_fld'><input type='text' id='Phone' name='Phone' maxLength='30' /></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'><label htmlFor='Description'>Description</label></div>
                    <div className='zcwf_col_fld'><textarea id='Description' name='Description'></textarea></div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'></div>
                    <div className='zcwf_col_fld'>
                        <div className='g-recaptcha' data-sitekey='6Le6PcwpAAAAAKpYwYlpvlrO5ckC40YI6S_D8eFq' data-theme='light' data-callback='rccallback196947000014499196' captcha-verified='false' id='recap196947000014499196'></div>
                        <div id='recapErr196947000014499196' style={{ fontSize: '12px', color: 'red', visibility: 'hidden' }}>Captcha validation failed. If you are not a robot then please try again.</div>
                    </div>
                </div>
                <div className='zcwf_row'>
                    <div className='zcwf_col_lab'></div>
                    <div className='zcwf_col_fld'><input type='submit' id='formsubmit' className='formsubmit zcwf_button' value='Submit' title='Submit' /><input type='reset' className='zcwf_button' name='reset' value='Reset' title='Reset' /></div>
                </div>
            </form>
        </div>
    );
};

export default LeadCaptureForm;
