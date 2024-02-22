//import Light from '../component/Light';
import Sensor from '../component/Sensor';
import Toggle from '../component/DeviceToggle';
import Header from '../component/Header';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';


//const lightIcon = require('../assets/light-icon.png');
//const homeIcon = require('../assets/home-icon.png');
const sensorIcon = require('../assets/sensor-icon.png');


export const Home = () => {

  const [states, setStates] = useState({
    light: 0,
    gas: 0,
    led: false,
    fan: false,
    window: false,
    door: false,
    motion: false
  });

    const updateStates = (newStates) => {
      setStates(newStates);
    };


  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:8080');
    webSocket.onopen = () => {
      console.log('WebSocket connected');
    };
    webSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      updateStates(data);
    };
    webSocket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      webSocket.close();
    };
  }, []);


  return (
    <>
      <Header/>

      <Container className="mt-3">
        <Row>
          <Col sm={6} md={6}>
            <Row>
              <Col sm={4} md={4} >
                <Toggle label={"White LED"} device="led" />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Yellow LED"} device="yellowLed" value={states.light}/>
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Door"} device="door" value={states.door}/>
              </Col>
            </Row>
            <Row>
              <Col sm={4} md={4}>
                <Toggle label={"Window"} device="window"  />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Fan"} device="fan"  />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Other"} device="other"  />
              </Col>
            </Row>
          </Col>

          <Col sm={6} md={6}>
            <Row>
              <Col sm={12} md={6}>
                <Sensor label={"Motion Sensor"} device="motion" icon={sensorIcon} />
              </Col>
              <Col sm={12} md={6}>
                <Sensor label={"Some other sensor"} device="motion" icon={sensorIcon} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Home;

