import React, { useRef ,useState ,useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
const Form = () => {

  const router = useRouter();

  useEffect(() => {
    // Load the Zoho script after DOM content is fully loaded
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=72fde086fe71742abe472f8f5f83bd8a9014a7d1dee6cd8f3f9ae50958c6a8e42ef776b61dc01558b65dc3a5430d7bcdgida70d14ebb06061ff99ccd8870a904e6cebd4cee039b6ada7e8abc04d0008c38dgid2fb1d0ab224cf29e67d99f002ddc9beb6322a4e938a349c3fffd7367a098a1e0gidbe99666b3f08eda521a98ba18c67439c9eb98ef83df7caf9975f0d20bd8b8d10&tw=21b88d0bb22c968d5ad29a3277797ff5563f6466461d13f8bdb43e4c2bd1ccb9`; // Replace YOUR_ZOHO_SCRIPT_ID with your actual Zoho script ID
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
      <input type='text' style={{ display: 'none' }} name='xnQsjsdp'
            value='619b8b11b0ae6310b5470e689bcd13bbffaa7f91673dd30967f199c1f013985a' />
         <input type='hidden' name='zc_gad' id='zc_gad' value='' />
         <input type='text' style={{ display: 'none' }} name='xmIwtLD'
            value='cd676e510e147b9bacf3c870a1c020b55e43a92d6f1e564743ed0e51eda16ed8907ffa93299cd964c3ec1681faed91a3' />
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
 </>
    );
}

export default Form;
