
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Light.css'

const Light = ({ label, disabled, icon }) => {
    const [ledStatus, setLedStatus] = useState(false);
  
    useEffect(() => {
      const websocketUrl = 'ws://localhost:8080'
      const ws = new WebSocket(websocketUrl);
  
      ws.onopen = () => {
        console.log('Connected to the WebSocket server');
      };
  
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.led !== undefined) {
            setLedStatus(data.led ? true : false);
          }
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      };
  
      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      return () => ws.close();
    }, []);
  
    
    const sendDeviceCommand = async (device, command) => {
      try {
        await axios.post(`http://localhost:5000/api/${device}`, { command });
      } catch (error) {
        console.error('Error sending device command:', error);
      }
    };
  
  
    const handleClick = () => {
      if (ledStatus) {
        setLedStatus(false)
        sendDeviceCommand('led', '0')
      } 
      else if (!ledStatus) {
        setLedStatus(true)
        sendDeviceCommand('led', '1')
      }
    };
  
    return (
      <button 
        className={`button ${disabled ? 'disabled' : ''} ${ledStatus ? 'on' : ''}`} 
        onClick={handleClick}
        disabled={disabled}
      >
        <span className="button-label">{label}</span>
        {icon && <img src={icon} alt="Icon" className="button-icon" />} 
        {/* Toggle label below */}
        <div className="button-status-label">{ledStatus ? 'On' : 'Off'}</div>
      </button>
    );
  }
  
  export default Light;
