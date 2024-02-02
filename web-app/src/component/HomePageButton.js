/*import React from 'react';
import '../css/Button.css';

const HomePageButton = ({ label, onClick, disabled, icon }) => {

  return (
    <button className={`button ${disabled ? 'disabled' : ''}`} >
      <span className="button-label">{label}</span>
      {icon && <img src={icon} alt="Icon" className="button-icon" />} 
      {onClick}
    </button>
  );
}

export default HomePageButton;*/

import React, { useState } from 'react';
import '../css/Button.css';

const HomePageButton = ({ label, onClick, disabled, icon }) => {
  // State to manage whether the button is on or off
  const [isOn, setIsOn] = useState(false);


  const handleClick = () => {
    setIsOn(!isOn); // change state to the opposite of the current
    if(onClick) {
      onClick(); // Call original onClick function if provided
    }
  };

  return (
    <button 
      className={`button ${disabled ? 'disabled' : ''} ${isOn ? 'on' : ''}`} 
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="button-label">{label}</span>
      {icon && <img src={icon} alt="Icon" className="button-icon" />} 
      {/* Toggle label below */}
      <div className="button-status-label">{isOn ? 'On' : 'Off'}</div>
    </button>
  );
}

export default HomePageButton;
