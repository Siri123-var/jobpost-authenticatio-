import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo..svg'; // Adjust the path if necessary
import { FaHome } from 'react-icons/fa';

const SchedulePage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [candidate, setCandidate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:4000/api/jobs', {
        jobTitle,
        jobDescription,
        experienceLevel,
        candidate,
        endDate,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      if (response.status === 201) {
        setMessage('Job posted successfully!');
        setError('');
        // Clear the form fields
        setJobTitle('');
        setJobDescription('');
        setExperienceLevel('');
        setCandidate('');
        setEndDate('');
      }
    } catch (error) {
      console.error('Job posting failed:', error);
      setError(error.response ? error.response.data.message : 'An error occurred');
      setMessage('');
    }
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signup'); // Redirect to the login page
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
    top: '10px',
    left: '1500px',
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

  const underlineStyle = {
    width: '1900px',
    height: '0px',
    border: '1px solid #C5C5C5',
    position: 'absolute',
    top: '120px',
    left: '0',
    opacity: '0px',
  };

  const polygonStyle = {
    width: '0',
    height: '0',
    top: '69.83px',
    left: '1655.95px',
    gap: '0px',
    opacity: '0px',
    angle: '180 deg',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #A8A8A8',
  };

  const textStyle = {
    width: '100px',
    height: '26px',
    top: '47.44px',
    left: '1509.17px',
    gap: '0px',
    opacity: '0px',
    fontFamily: 'DM Sans',
    fontSize: '19.9px',
    fontWeight: '400',
    lineHeight: '25.91px',
    textAlign: 'left',
  };

  const ellipseStyle = {
    width: '31.1px',
    height: '31.1px',
    backgroundColor: '#A8A8A8',
    borderRadius: '50%',
    top: '44.95px',
    left: '1458.17px',
  };

  const rectangleStyle = {
    width: '190.34px',
    height: '51px',
    position: 'absolute',
    top: '3px',
    left: '1620px',
    gap: '0px',
    borderRadius: '6.22px 6.22px 6.22px 6.22px',
    border: '1.24px solid #000',
    opacity: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10px',
  };

  const verticalLineStyle = {
    height: '800px',
    position: 'absolute',
    top: '120px',
    left: '100px',
    zIndex: 10,
    border: '1px solid #C5C5C5',
  };

  const homeButtonStyle = {
    width: '43px',
    height: '43px',
    position: 'absolute',
    top: '194px',
    left: '27px',
    padding: '0px 3.96px 7.17px 5px',
    gap: '0px',
    opacity: '0px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  };

  const inputStyle = {
    padding: '20px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '500px',
    height: '30px',
    margin: '10px',
    '::placeholder': {
      fontSize: '50px',
      color: '#535353B2',
    },
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '1200px',
    margin: '80px',
    marginTop: '150px',
    paddingLeft: '200px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '90vh',
    paddingLeft: '50px',
  };

  const labelStyle = {
    fontSize: '25px',
    fontWeight: '500',
    color: '#000000',
    width: '150px',
    whiteSpace: 'nowrap',
    padding: '20px',
    fontFamily: 'DM Sans',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'left',
    fontFamily: 'DM Sans',
    fontSize: '32px',
    fontWeight: '400',
    lineHeight: '41.66px',
    textAlign: 'left',
  };

  const inputStyle2 = {
    width: '100px',
    height: '20px',
    padding: '20px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    margin: '10px',
    alignItems: 'flex-end',
    marginLeft: '550px',
    paddingBottom: '20px',
    '::placeholder': {
      fontSize: '50px',
      color: '#535353B2',
    },
  };
    const logoutButtonStyle = {
      width: '70px',
      height: '40px',
      position: 'absolute',
      top: '250px',
      left: '25px',
      padding: '10px',
      gap: '0px',
      opacity: '0px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '15px',
      cursor: 'pointer',
      marginleft: '10px',
      paddingLeft: '10px',
    };


  return (
    <div style={containerStyle}>
      <div style={navbarStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <button style={buttonStyle}>Contact</button>
        <div style={rectangleStyle}>
          <div style={ellipseStyle}></div>
          <div style={textStyle}>Your Name</div>
          <div style={polygonStyle}></div>
        </div>
      </div>
      <div style={underlineStyle}></div>
      <div style={verticalLineStyle}></div>
      <button style={homeButtonStyle}>
        <FaHome size={40} />
      </button>
      <button style={logoutButtonStyle} onClick={handleLogout}>
        Logout
      </button>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Job Title</label>
          <input
            type="text"
            placeholder="Enter Job Title"
            style={inputStyle}
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Job Description</label>
          <textarea
            placeholder="Enter Job Description"
            style={inputStyle}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Experience Level</label>
          <input
            type="text"
            placeholder="Select Experience Level"
            style={inputStyle}
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Add Candidate</label>
          <input
            type="text"
            placeholder="Add Candidate"
            style={inputStyle}
            value={candidate}
            onChange={(e) => setCandidate(e.target.value)}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>End Date</label>
          <input
            type="date"
            placeholder="Select a Date"
            style={inputStyle}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            ...inputStyle2,
            backgroundColor: '#007bff',
            color: '#fff',
            paddingTop: '10px',
            paddingBottom: '25px',
            marginTop: '10px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')} // Change color on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')} // Revert color on mouse leave
        >
          Submit
        </button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SchedulePage;