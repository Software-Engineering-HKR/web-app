import React, { useContext, useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
// import SmartIcons from './SmartIcons';
import { SensorContext } from '../context/GlobalState';


const Sensor = ({ label, device, disabled }) => {
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
    <Card className={`mb-2 text-center sensor ${device === "motion" && sensorValue === 1 ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
      <Card.Body>
        {/* <SmartIcons device={device} active={sensorValue} /> */}
        
        {device === "motion" ?
          <Card.Title className="sensor-value" >{sensorValue === 1 ? 'ON' : 'OFF'}</Card.Title>
          : <Card.Title className="sensor-value">{sensorValue ? `${sensorValue}` : '0'}</Card.Title>
        }
        <Card.Text> {label} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Sensor