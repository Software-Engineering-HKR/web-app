import React, { useContext, useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import SmartIcons from './SmartIcons';
import { SensorContext } from '../context/GlobalState';


const Sensor = ({ label, device, disabled }) => {
  const [sensorValue, setSensorValue] = useState(false)
  const { sensors } = useContext(SensorContext)

  useEffect(() => {
    setSensorValue(sensors[device])
    console.log("data:", device)
  }, [sensors])

  return (
    <Card className={`mb-2 text-center sensor ${sensorValue ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
      <Card.Body>
                
      <SmartIcons device={device} active={sensorValue} />
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