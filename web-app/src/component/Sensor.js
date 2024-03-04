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
        <Card.Title>{sensorValue ? 'ON' : 'OFF'}</Card.Title>
        <Card.Text> {label} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Sensor