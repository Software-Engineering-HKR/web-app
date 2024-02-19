import React, { useEffect, useState } from 'react'


import Card from 'react-bootstrap/Card';

import { MdOutlineSensors } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";


const Sensor = ({ label, disabled, icon }) => {
  const [sensorValue, setSensorValue] = useState(false)

  useEffect(() => {
    const websocketUrl = 'ws://localhost:8080'
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      console.log('Connected to the WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.motionSensor !== undefined) {
          setSensorValue(data.motionSensor ? true : false);
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };
    setSensorValue(true)
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => ws.close();
  }, []);

  /* Fake a on/off Signals*/
  useEffect(() => {
    // Simulate sensor value change every 2 minutes (120,000 milliseconds)
    const intervalId = setInterval(() => {
      setSensorValue(prevSensorValue => !prevSensorValue); // Toggle sensor value
    }, 5000); // 120,000 milliseconds = 2 minutes

    
    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);

  return (
    <Card className={`mb-2 text-center sensor ${sensorValue ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
      <Card.Body>
        {sensorValue ? <MdOutlineSensors size={50} className="card-icon-top" /> : <FaDotCircle size={10} className="card-icon-top" />}
        <Card.Title>{sensorValue ? 'Motion' : 'No motion'}</Card.Title>
        <Card.Text> {label} </Card.Text>
      </Card.Body>
    </Card>

    /*<div
    className={`sensor ${disabled ? 'disabled' : ''} ${sensorValue ? 'on' : ''}`} 
    disabled={disabled}
  >
    <span className="sensor-label">{label}</span>
    {icon && <img src={icon} alt="Icon" className="sensor-icon" />} 
    <div className="sensor-status-label">{sensorValue ? 'Motion' : 'No motion'}</div>
  </div>*/
  )
}

export default Sensor