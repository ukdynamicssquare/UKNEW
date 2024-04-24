import React, { useRef ,useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const FormOld = () => {

  const router = useRouter();

  useEffect(() => {
    // Load the Zoho script after DOM content is fully loaded
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=2c5936cf1b13e2557f047af1137e75ab2c2394b10051200cd01339553d3eb4cbc6b688c8563100587be6ff5e7f265aaagid253c6e50e2d546a9a5c47bf7e5835c8b3746eb98abe43a3341867560ca07e5b6gid92f76bfefff98e356dfb74dd8e90a75ee5b8b082c68228da98bb2c21a5751c7egidf15eb6e6ab4994b733a549883d96f3689126c705bb5474ac92df68037231fe5f&tw=baef35bd0b82caad0797da01246cfc68d28961878249ffa504fccf881a08d7dc`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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


  
  // const router = useRouter();
  // const [display, setDisplay] = useState("dspn");
  // const form = useRef();
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
      
  // };


    return (
      <>
      <div className="main-form-wrper">
      <form id='webform196947000014082124' onSubmit={handleSubmit} action='https://crm.zoho.in/crm/WebToLeadForm' name='webform196947000014082124' method='POST' acceptCharset='UTF-8'>
      <input type='text' style={{ display: 'none' }}name='xnQsjsdp' value='374376e66ef4f8e383a380ac3d4d470a77836bcfb86092aef107f9a10ed1fb02' />
         <input type='hidden' name='zc_gad' id='zc_gad' value='' />
         <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='068f8759fafa7a62e3bc6f68cd2fed1e30c410e2022a1b5cdf4e97e658a626637a9570abab2f51dc15b3e789f0625c65' />
         <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
         <input type='text' style={{ display: 'none' }} name='returnURL' value='https://www.dynamicssquare.ca/thank-you/' />
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
 </>
    );
}

export default FormOld;
