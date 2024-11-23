import React from 'react';
import logo from '../images/logo..svg'; // Adjust the path if necessary
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const InterviewPage = () => {
  const navigate = useNavigate();

  const handleCreateInterview = () => {
    navigate('/schedule'); // Navigate to the schedule page
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
    border:'1px solid #C5C5C5',
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
   opacity:'0px',
   angle: '180 deg',
   //backgroundColor: '#A8A8A8',
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
    //width: '1px',
    height: '800px',
    //backgroundColor: '#C5C5C5',
    position: 'absolute',
    top: '120px', // Adjust this value as needed
    left: '100px',
    //borderLeft: '1px solid #C5C5C5 ', // Use borderTop to create a straight line
    zIndex: 10,
    border:'1px solid #C5C5C5',
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
  const createInterviewButtonStyle = {
    width: '250px',
    height: '57px',
    position: 'absolute',
    top: '187px',
    left: '167px',
    gap: '0px',
    borderRadius: '8.32px 8.32px 8.32px 8.32px',
    opacity: '0px',
    backgroundColor: '#007bff', // Add a background color for visibility
    color: '#fff', // Add text color
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'DM Sans',
    fontSize: '30px',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
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
      <button style={createInterviewButtonStyle} onClick={handleCreateInterview}>
        Create Interview
      </button>

    </div>
  );
};

export default InterviewPage;