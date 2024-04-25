import React, { useRef ,useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
const Formpop = () => {
  const router = useRouter();
  const [display, setDisplay] = useState("dspn");
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load the Zoho script after DOM content is fully loaded
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=d8ba4ac3397fe3a421ac843cc3bd2d6c2966fdf7fc40874914a6f890ad5c57af819259419aebb974507b5258a1b5f42egidb0c4efd50af7bae73bec1ffd2c9df5462335e6bb688cfff3bfdb26b38a26ce56gidcf314961c125132d47016a60111af1ced4ec2d5ef89bad792b52ca9cc8cca6c0gid59ed896f277a6073aca28b622a4e19cc3061deafd3be154cd64bacf31359adcf&tw=9e3eeb625b645638945c0cc9ac0910c04275023c7e7e9d60569178b341a0a639`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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
    event.preventDefault();
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
            setTimeout(function() {
              event.target.reset();
              event.target.remove();
              Cookies.set('popupModalShown', true, { expires: 1 });
              setShowModal(false);
              router.push("/thank-you/");
            }, 1000);
        } else {
            console.error('Failed to submit form:', response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};




    return (
        <div>
              <div className="main-form-wrper">
      <form id='webform196947000014082111' onSubmit={handleSubmit} action='https://crm.zoho.in/crm/WebToLeadForm' name='webform196947000014082111' method='POST' acceptCharset='UTF-8'>
      <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='b84311cf3774c5e60d12e7a19e898d8b03a032492f8df9999c6012edbcb01985' />
         <input type='hidden' name='zc_gad' id='zc_gad' value='' />
         <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='3c5835584363e46fd3f0ee75eb5d2faa4e1a861b7f00c74a6e93e7f4281aa051618ebe130d7b5d3a4179cd112a6f7edf' />
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
    );
}

export default Formpop;
