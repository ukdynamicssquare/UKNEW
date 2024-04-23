import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormZoho = () => {
    const [accessToken, setAccessToken] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://www.zohoapis.in/crm/v2/Leads',
                {
                    data: [{
                        First_Name: formData.firstName,
                        Last_Name: formData.lastName,
                        Email: formData.email,
                        Phone: formData.phone
                    }]
                },
                {
                    headers: {
                        'Authorization': `Zoho-oauthtoken ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {
                console.log('Lead created successfully');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: ''
                });
            } else {
                console.error('Failed to create lead');
            }
        } catch (error) {
            console.error('Error creating lead:', error);
            if (error.response) {
                console.error('Response status:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                console.error('Request failed:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
        }
    };

    useEffect(() => {
      const refreshAccessToken = async () => {
                  try {
                      const response = await axios.post('https://accounts.zoho.in/oauth/v2/token?client_id=1000.RCESGIFMS3K5CP9EDQTCLP7VH9081W&client_secret=aacee8f5995bab8e889ba09fe80766d3cf2451a389&refresh_token=1000.bd063b1f5307ae842054d5247eb54cfd.a8ea6e3c82be093cdad397a6f4c37f4b&redirect_uri=https://localhost:3000&grant_type=refresh_token');
                      accessToken = response.data.access_token;
                      console.log(accessToken);
                  } catch (error) {
                      console.error(error.message);
                  }
              };
       
        refreshAccessToken();
          });

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormZoho;
