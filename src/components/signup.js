import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo..svg'; // Adjust the path if necessary
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaUsers } from 'react-icons/fa';
import axios from 'axios';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [employeeSize, setEmployeeSize] = useState('');
  const [message, setMessage] = useState(''); // State to store success message
  const [error, setError] = useState(''); // State to store error message

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phoneNo || !companyName || !companyEmail || !employeeSize) {
      setError('All fields are required');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/api/users/signup', {
        name,
        phoneNo,
        companyName,
        companyEmail,
        employeeSize,
      });
      console.log(response.data);
      if (response.status === 200) { // Check for status 201
        setMessage('Details saved successfully!'); // Set success message
        setError(''); // Clear any previous error message
        setTimeout(() => {
          navigate('/signup2'); // Redirect to signup2 page after 2 seconds
        }, 2000);
      } else {
        setError('Failed to register user');
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setError(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  const navbarStyle = {
    width: '1580px',
    height: '43px',
    position: 'absolute',
    top: '47px',
    left: '55px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '0px',
    opacity: '0px',
  };

  const logoStyle = {
    width: '165px',
    height: '43px',
    gap: '0px',
    opacity: '0px',
  };

  const buttonStyle = {
    width: '108px',
    height: '36px',
    position: 'absolute',
    top: '2px',
    left: '1527px',
    gap: '0px',
    opacity: '0px',
    fontFamily: 'DM Sans',
    fontSize: '28px',
    fontWeight: '500',
    lineHeight: '36.46px',
    textAlign: 'left',
    color: '#576474',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const rectangleStyle = {
    width: '619px',
    height: '700px',
    position: 'absolute',
    top: '180px',
    left: '990px',
    gap: '0px',
    borderRadius: '15px 15px 15px 15px',
    border: '1px solid #000',
    opacity: '0px',
    backgroundColor: '#f8f9fa',
    flexDirection: 'column',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
  };

  const signupTextStyle = {
    fontFamily: 'DM Sans',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '41.66px',
    color: '#000000',
    height: '42px',
    paddingtop: '232px',
    textAlign: 'center',
    marginTop: '30px',
  };

  const lineTextStyle = {
    fontFamily: 'DM Sans',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '20.83px',
    color: '#292929B2',
    height: '21px',
    gap: '0px',
    opacity: '0px',
    textAlign: 'center',
    marginTop: '3px',
  };

  const inputLayoutStyle = {
    width: '542px',
    height: '59px',
    gap: '0px',
    opacity: '0px',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    margin: '15px',
    border: '1px solid black',
    borderRadius: '15px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  };

  const iconStyle = {
    marginRight: '20px',
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    fontFamily: 'DM Sans',
  };

  const leftTextStyle = {
    width: '622px',
    height: '116px',
    position: 'absolute',
    top: '553px',
    left: '124px',
    gap: '0px',
    opacity: '0px',
    fontFamily: 'DM Sans',
    fontSize: '22.24px',
    fontWeight: '500',
    lineHeight: '28.95px',
    color: '#292929B2',
  };

  return (
    <div>
      <div style={navbarStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <button style={buttonStyle}>Contact</button>
      </div>
      <div style={rectangleStyle}>
        <div style={signupTextStyle}>Sign Up</div>
        <div style={lineTextStyle}>Lorem Ipsum is simply dummy text</div>
        <form onSubmit={handleSubmit}>
          <div style={inputLayoutStyle}>
            <FaUser style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Name"
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={inputLayoutStyle}>
            <FaPhone style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Phone No."
              style={inputStyle}
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div style={inputLayoutStyle}>
            <FaBuilding style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Company Name"
              style={inputStyle}
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div style={inputLayoutStyle}>
            <FaEnvelope style={iconStyle} size={24} />
            <input
              type="email"
              placeholder="Company Email"
              style={inputStyle}
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
          </div>
          <div style={inputLayoutStyle}>
            <FaUsers style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Employee Size"
              style={inputStyle}
              value={employeeSize}
              onChange={(e) => setEmployeeSize(e.target.value)}
            />
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'DM Sans', fontSize: '14px', color: '#292929B2' }}>
            By clicking on proceed you will accept our<br />
            Terms & Conditions
          </p>
          <button
            type="submit"
            style={{
              ...inputLayoutStyle,
              backgroundColor: '#007bff',
              color: '#fff',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')} // Revert color on mouse leave
          >
            Proceed
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', color: 'green' }}>{message}</p>} {/* Display success message */}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>} {/* Display error message */}
      </div>
      <div style={leftTextStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      </div>
    </div>
  );
};

export default SignupPage;