import React from 'react'
import '../css/homePage.css'
import HomePageButton from '../component/HomePageButton'
const lightIcon = require('../assets/light-icon.png'); // Replace with the path to your icon
const homeIcon = require('../assets/home-icon.png');

export const Home = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <><div className="home-page">
      <h1>Welcome to your smart home!</h1>
      <img src={homeIcon} alt="Home Icon" className="home-icon" />
    </div><HomePageButton label="Lighting" onClick={handleClick} icon={lightIcon} />
    </>
  )
}
