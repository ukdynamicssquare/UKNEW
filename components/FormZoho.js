import { useState } from 'react';

const FormZoho = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Exchange refresh token for access token
      const authResponse = await fetch('https://accounts.zoho.com/oauth/v2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          refresh_token: '1000.bd063b1f5307ae842054d5247eb54cfd.a8ea6e3c82be093cdad397a6f4c37f4b',
          client_id: '1000.RCESGIFMS3K5CP9EDQTCLP7VH9081W',
          client_secret: 'aacee8f5995bab8e889ba09fe80766d3cf2451a389',
          grant_type: 'refresh_token',
        }),
      });

      const authData = await authResponse.json();
      const accessToken = authData.access_token;

      // Use access token to make authenticated request to Zoho CRM API
      const leadData = {
        data: {
          Last_Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Description: formData.message,
          // Additional fields as needed
        },
      };

      const apiResponse = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
        method: 'POST',
        headers: {
          'Authorization': `Zoho-oauthtoken ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const responseData = await apiResponse.json();
      console.log(responseData);

      // Handle success
      console.log('Form submitted successfully!');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormZoho;

