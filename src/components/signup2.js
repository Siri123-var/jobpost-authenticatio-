import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo..svg'; // Adjust the path if necessary
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Import email and phone icons from react-icons
import axios from 'axios'; // Import axios for API calls

const SignupPage2 = () => {
  const [email, setEmail] = useState('');
  const [emailOTP, setEmailOTP] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [mobileOTP, setMobileOTP] = useState('');
  const [message, setMessage] = useState(''); // State to store success message
  const [error, setError] = useState(''); // State to store error message
  const navigate = useNavigate();

  const handleEmailVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/verify-email', { email, otp: emailOTP });
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // Store the JWT token
        setMessage('Email verified successfully');
        setError('');
      }
    } catch (error) {
      console.error(error);
      setError('Email verification failed');
      setMessage('');
    }
  };

  const handleMobileVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/users/verify-mobile', { phoneNo, otp: mobileOTP });
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token); // Store the JWT token
        setMessage('Mobile number verified successfully');
        setError('');
        setTimeout(() => {
          navigate('/interview'); // Redirect to the next page after 2 seconds
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setError('Mobile verification failed');
      setMessage('');
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
    width: '590px',
    height: '580px',
    position: 'absolute',
    top: '150px',
    left: '900px',
    gap: '0px',
    borderRadius: '15px 15px 15px 15px',
    border: '1px solid #000',
    opacity: '0px',
    backgroundColor: '#f8f9fa',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '100px',
    paddingRight: '100px',
    marginRight: '100px',
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

  const inputLayoutStyle = {
    width: '542px',
    height: '50px',
    top: '400px',
    left: '1029px',
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
    marginTop: '20px',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    fontFamily: 'DM Sans',
  };

  const signupTextStyle = {
    fontFamily: 'DM Sans',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '41.66px',
    color: '#000000',
    height: '42px',
    //paddingTop: '232px',
    textAlign: 'center',
    //marginTop: '30px',
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

  return (
    <div>
      <div style={navbarStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <button style={buttonStyle}>Contact</button>
      </div>
      <div style={leftTextStyle}>
        Lorem Ipsum is simply dummy text of the printing and <br />typesetting industry. Lorem Ipsum has been the industry's <br />standard dummy text ever since the 1500s, when an <br />unknown printer took a galley
      </div>
      <div style={rectangleStyle}>
        <div style={signupTextStyle}>Sign Up</div>
        <div style={lineTextStyle}>Lorem Ipsum is simply dummy text</div>
        <form onSubmit={handleEmailVerification}>
          <div style={inputLayoutStyle}>
            <FaEnvelope style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={inputLayoutStyle}>
            <FaEnvelope style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Email OTP"
              style={inputStyle}
              value={emailOTP}
              onChange={(e) => setEmailOTP(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              ...inputLayoutStyle,
              backgroundColor: '#007bff',
              color: '#fff',
              justifyContent: 'center',
              width: '95%',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')} // Revert color on mouse leave
          >
            Verify Email
          </button>
        </form>
        <form onSubmit={handleMobileVerification}>
          <div style={inputLayoutStyle}>
            <FaPhone style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Phone Number"
              style={inputStyle}
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <div style={inputLayoutStyle}>
            <FaPhone style={iconStyle} size={24} />
            <input
              type="text"
              placeholder="Mobile OTP"
              style={inputStyle}
              value={mobileOTP}
              onChange={(e) => setMobileOTP(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              ...inputLayoutStyle,
              backgroundColor: '#007bff',
              color: '#fff',
              justifyContent: 'center',
              width: '95%',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Change color on hover
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')} // Revert color on mouse leave
          >
            Verify Mobile
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', color: 'green' }}>{message}</p>} {/* Display success message */}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
};

export default SignupPage2;