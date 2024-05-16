import React, { useContext, useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import { SensorContext } from '../context/GlobalState';
import '../css/Sensor.css'

import SmartIcons from './SmartIcons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
      <Card className={`mb-2 text-center border-1 shadow sensor ${device === "motion" && sensorValue === 1 ? 'on' : ''} ${disabled ? 'disabled' : ''}`}>
        <Card.Body>
          <Row className="align-items-center justify-content-between w-100 mx-0">
            <Col xs={2} md={4} xl={4}>
              <SmartIcons extraClasses="extra-large-icon" device={device} />
            </Col>
            <Col xs={10} md={8} xl={8}>
              {device === "motion" ?
                <Card.Title className="sensor-value">{sensorValue === 1 ? 'ON' : 'OFF'}</Card.Title>
                : <Card.Title className="sensor-value">{sensorValue ? `${sensorValue}` : '0'}</Card.Title>
              }
              <Card.Text className="sensor-lable">{label}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Sensor