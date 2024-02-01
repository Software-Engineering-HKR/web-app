import React from 'react';
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

export default HomePageButton;