import Sensor from '../component/Sensor';
import Lcd from '../component/Lcd';
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
      <span id='Home' />
      <Header />
      <Container className="mt-3">
        <Row>
          <Col sm={6} md={6} lg={7}>
            <Row>
              <Col sm={12} lg={6} >
                <Toggle label={"White LED"} device="led" />
              </Col>
              <Col sm={12} lg={6}>
                <Toggle label={"Yellow LED"} device="yellow-led" />
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={4}>
                <Toggle label={"Door"} device="door" />
              </Col>
              <Col sm={12} lg={4}>
                <Toggle label={"Window"} device="window" />
              </Col>
              <Col sm={12} lg={4}>
                <Toggle label={"Fan"} device="fan" />
              </Col>
            </Row>

          </Col>

          <Col sm={6} md={6} lg={5}>
            <Row>
              <Col sm={12} md={6}>
                <Sensor label={"Motion Sensor"} device="motion" icon={sensorIcon} />
              </Col>
              <Col sm={12} md={6}>
                <Sensor label={"Gas Sensor"} device="gas" icon={sensorIcon} />
              </Col>
              <Col sm={12} md={6}>
                <Sensor label={"Moisture Sensor"} device="moisture" icon={sensorIcon} />
              </Col>
              <Col sm={12} md={6}>
                <Sensor label={"Light Sensor"} device="light" icon={sensorIcon} />
              </Col>
              <Col sm={12} md={6}>
                <Sensor label={"Steam Sensor"} device="steam" icon={sensorIcon} />
              </Col>
            </Row>



          </Col>
        </Row>

        <Row id='Settings' style={{ marginTop: '15rem', marginBottom: '25rem' }}>
          <Row className="justify-content-md-left" style={{ paddingBottom: '20px' }}>
            <Col md={8} className="text-left">
              <h2>Settings</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={8}>
              <Lcd label={"Window"} />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}
export default Home;

