import React, { useContext, useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import { SensorContext } from '../context/GlobalState';
import '../css/Sensor.css'

import SmartIcons from './SmartIcons';


const Sensor = ({ label, device, disabled, icon }) => {
  const [sensorValue, setSensorValue] = useState(true)
  const { sensors } = useContext(SensorContext)

  useEffect(() => {
    if (sensors.length === 0) return;

    const deviceInital = async () => {
      const initialData = sensors
      const name = initialData.find(d => d.name === device)
      const value = name.value
      console.log("value", device, value)
      setSensorValue(value)
    }
    deviceInital()
  }, [device, sensors])

  return (
    <div>
      <Card  className={`mb-2 text-center border-1 shadow sensor ${device === "motion" && sensorValue === 1 ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
        <Card.Body>          
          {device === "motion" ?
            <Card.Title className="sensor-value" style={{fontSize: "20px"}}>{sensorValue === 1 ? 'ON' : 'OFF'}</Card.Title>
            : <Card.Title className="sensor-value" style={{fontSize: "20px"}}>{sensorValue ? `${sensorValue}` : '0'}</Card.Title>
          }
          {/* <img src={icon} alt="Home Icon" width="30" height="30" className="d-inline-block align-top rounded-circle" style={{ marginRight: '10px' }} /> */}

          <SmartIcons extraClasses="large-icon" device={device} />
                   
          <Card.Text style={{fontSize: "20px"}}> {label} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Sensor