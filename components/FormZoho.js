import { useState } from 'react';
import axios from 'axios';

const ZOHO_API_BASE_URL = 'https://www.zohoapis.com/crm/v2/';

const FormZoho = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const accessToken = await authenticateWithZohoCRM();
      const lead = await createLeadInZohoCRM(accessToken, formData);
      console.log('Lead created in Zoho CRM:', lead);
      // Provide feedback to the user indicating successful lead submission
    } catch (error) {
      // Handle errors gracefully and provide feedback to the user
      console.error('Error submitting lead to Zoho CRM:', error);
    }
  };

  const authenticateWithZohoCRM = async () => {
    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;

    try {
      const response = await axios.post(
        'https://accounts.zoho.com/oauth/v2/token',
        {
          grant_type: 'refresh_token',
          client_id: clientId,
          client_secret: clientSecret,
          scope: 'ZohoCRM.modules.ALL',
        }
      );
      return response.data.access_token;
    } catch (error) {
      console.error('Error authenticating with Zoho CRM:', error);
      throw error;
    }
  };

  const createLeadInZohoCRM = async (accessToken, leadData) => {
    try {
      const response = await axios.post(
        `${ZOHO_API_BASE_URL}/Leads`,
        leadData,
        {
          headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating lead in Zoho CRM:', error);
      throw error;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
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
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormZoho;
