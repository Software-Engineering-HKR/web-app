//import Light from '../component/Light';
import Sensor from '../component/Sensor';
import Toggle from '../component/DeviceToggle';
import Header from '../component/Header';

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//const lightIcon = require('../assets/light-icon.png');
//const homeIcon = require('../assets/home-icon.png');
const sensorIcon = require('../assets/sensor-icon.png');


export const Home = () => {

  return (
    <>
      <Header/>

      <Container className="mt-3">
        <Row>
          <Col sm={6} md={6}>
            <Row>
              <Col sm={4} md={4} >
                <Toggle label={"White LED"} device="whiteLed" />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Yellow LED"} device="yellowLed" />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Door"} device="door" />
              </Col>
            </Row>
            <Row>
              <Col sm={4} md={4}>
                <Toggle label={"Window"} device="window" disabled={true} />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Fan"} device="fan" disabled={true} />
              </Col>
              <Col sm={4} md={4}>
                <Toggle label={"Other"} device="other" disabled={true} />
              </Col>
            </Row>
          </Col>

          <Col sm={6} md={6}>
            <Row>
              <Col sm={12} md={6}>
                <Sensor label={"Motion Sensor"} device="motionSensor" icon={sensorIcon} />
              </Col>
              <Col sm={12} md={6}>
                <Sensor label={"Some other sensor"} device="motionSensor" icon={sensorIcon} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Home;

