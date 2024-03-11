import React, { useContext, useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import SmartIcons from './SmartIcons';
import { SensorContext } from '../context/GlobalState';


const MeasureSensor = ({ label, device, disabled }) => {
  const [sensorValue, setSensorValue] = useState(0)
  const { sensors } = useContext(SensorContext)

  useEffect(() => {
    const deviceInital = async ()=>{
        const initialData = sensors
        console.log("sensors:" , initialData)
        const deviceName =  initialData.find(d => d.name === device)
        console.log(deviceName)
        const deviceStatus = deviceName.value
        setSensorValue(deviceStatus)
    }
    deviceInital()
}, [device, sensors])

  return (
    <Card className={`mb-2 text-center sensor ${sensorValue ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
      <Card.Body>
                
      <SmartIcons device={device} active={sensorValue} />
        <Card.Title>{sensorValue ? `${sensorValue}` : '0'}</Card.Title>
        <Card.Text> {label} </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MeasureSensor