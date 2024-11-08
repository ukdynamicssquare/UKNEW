// pages/EstimateForm.js
import React, { useState } from 'react';

const EstimateForm = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div style={containerStyle}>
      {/* Assembly Section */}
      <div style={estimateSectionStyle}>
        <div style={assemblyHeaderStyle}>
          <h3 style={titleStyle}>
            Assemblies <span style={subtitleStyle}>(Requires sales, purchasing, inventory, and advanced inventory)</span>
            — Click to minimize
          </h3>
          <div style={toggleWrapperStyle} onClick={handleToggle}>
            <div style={{ ...sliderStyle, backgroundColor: toggle ? '#ff0055' : '#ccc' }}>
              <div style={{ ...toggleKnobStyle, transform: toggle ? 'translateX(20px)' : 'translateX(0)' }}>
                <span style={toggleTextStyle}>{toggle ? 'YES' : 'NO'}</span>
              </div>
            </div>
          </div>
        </div>
        <ul style={listStyle}>
          <li>Assembly BOMs</li>
          <li>Assembly Orders</li>
        </ul>
      </div>

      {/* Form Section */}
      <form style={formStyle}>
        <p style={instructionStyle}>
          Use this form to send your estimate to us. We'll follow up to discuss next steps for your ERP migration.
        </p>

        <div style={formRowStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Full Name <span style={requiredStyle}>*</span></label>
            <input type="text" style={inputStyle} placeholder="Full Name" required />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Company <span style={requiredStyle}>*</span></label>
            <input type="text" style={inputStyle} placeholder="Company" required />
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Email <span style={requiredStyle}>*</span></label>
            <input type="email" style={inputStyle} placeholder="Email" required />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Phone</label>
            <input type="tel" style={inputStyle} placeholder="Phone" />
          </div>
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Message</label>
          <textarea style={{ ...inputStyle, height: '80px' }} placeholder="Message"></textarea>
        </div>

        <button type="submit" style={buttonStyle}>Send My Estimate</button>
      </form>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#333',
};

const estimateSectionStyle = {
  border: '1px solid #ddd',
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '5px',
};

const assemblyHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0,
};

const subtitleStyle = {
  fontSize: '14px',
  color: '#666',
  fontWeight: 'normal',
};

const toggleWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const sliderStyle = {
  position: 'relative',
  width: '40px',
  height: '20px',
  borderRadius: '20px',
  transition: 'background-color 0.4s',
  display: 'flex',
  alignItems: 'center',
};

const toggleKnobStyle = {
  position: 'absolute',
  top: '2px',
  left: '2px',
  width: '36px',
  height: '16px',
  backgroundColor: '#fff',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '10px',
  color: '#333',
  transition: 'transform 0.4s, color 0.4s',
};

const toggleTextStyle = {
  color: '#333',
  fontWeight: 'bold',
};

const listStyle = {
  listStyleType: 'disc',
  paddingLeft: '20px',
  margin: '10px 0',
};

const formStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '5px',
};

const instructionStyle = {
  fontSize: '14px',
  marginBottom: '20px',
};

const formRowStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '15px',
};

const formGroupStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  fontSize: '14px',
  marginBottom: '5px',
};

const requiredStyle = {
  color: 'red',
};

const inputStyle = {
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  color: '#ff0055',
  backgroundColor: 'transparent',
  border: '2px solid #ff0055',
  borderRadius: '25px',
  cursor: 'pointer',
  transition: '0.3s',
};

buttonStyle[':hover'] = {
  backgroundColor: '#ff0055',
  color: 'white',
};

export default EstimateForm;

