import React, { useEffect, useState } from 'react'
import '../css/Sensor.css'


const Sensor = ({label ,disabled, icon}) => {
  const[sensorValue, setSensorValue] = useState(false)

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

  return (
    <div
    className={`sensor ${disabled ? 'disabled' : ''} ${sensorValue ? 'on' : ''}`} 
    disabled={disabled}
  >
    <span className="sensor-label">{label}</span>
    {icon && <img src={icon} alt="Icon" className="sensor-icon" />} 
    <div className="sensor-status-label">{sensorValue ? 'Motion' : 'No motion'}</div>
  </div>
    )
}

export default Sensor