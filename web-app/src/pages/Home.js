import Sensor from '../component/Sensor';
import Lcd from '../component/Lcd';
import Toggle from '../component/DeviceToggle';
import Header from '../component/Header';

import Registration from "./Registration";

// Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useEffect } from 'react';
import { SensorContext } from '../context/GlobalState';
import { useNavigate } from 'react-router-dom';


const lightIcon = require('../assets/light-icon.png');
const homeIcon = require('../assets/home-icon.png');
const motionIcon = require('../assets/motion.png');
const gasIcon = require('../assets/gas.png');
const moistureIcon = require('../assets/moisture.png');
const steamIcon = require('../assets/steam.png');
const lightIco = require('../assets/light.png');





export const Home = () => {

  const navigate = useNavigate();


  const { user, setUser } = useContext(SensorContext)
  useEffect(() => { if (!user) navigate("/login") }, [user])

  return (
    <>{<>
      <span id='Home' />
      <Header />
      <Container className="mt-3">
        <Row>
          <Col sm={6} md={6} lg={6}>
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

          <Col sm={6} md={6} lg={6}>
            <Row>
              <Col sm={12} lg={6}>
                <Sensor label={"Motion"} device="motion" icon={motionIcon} />
              </Col>
              <Col sm={12} lg={6}>
                <Sensor label={"Gas"} device="gas" icon={gasIcon} />
              </Col>
              <Col sm={12} lg={6}>
                <Sensor label={"Moisture"} device="moisture" icon={moistureIcon} />
              </Col>
              <Col sm={12} lg={6}>
                <Sensor label={"Light"} device="light" icon={lightIco} />
              </Col>
              <Col sm={12} lg={6}>
                <Sensor label={"Steam"} device="steam" icon={steamIcon} />
              </Col>
            </Row>
          </Col>

          <Row id='Settings' style={{ marginTop: 'auto', marginBottom: '25rem' }}>
            <Col sm={12} md={7}>
              <Lcd label={"LCD"} />
            </Col>
        </Row>

        </Row>
      </Container>
    </>
    }
    </>
  )
}
export default Home;

