import Light from '../component/Light';
import Sensor from '../component/Sensor';
import '../css/homePage.css'


const lightIcon = require('../assets/light-icon.png');
const homeIcon = require('../assets/home-icon.png');
const sensorIcon = require('../assets/sensor-icon.png');


export const Home = () => {

  return (
    <><div className="home-page">
      <h1>Welcome to your smart home!</h1>
      <img src={homeIcon} alt="Home Icon" className="home-icon" />
    </div>
    <div className='devices'>
      <p className="devices-p">Devices</p>
      <Light label={"White led"} icon={lightIcon}/>
      <Light label={"Yellow led"} icon={lightIcon}/>

    </div>
    <div className='sensors'>
    <p className="sensors-p">Sensors</p>
      <Sensor label={"Motion Sensor"} icon={sensorIcon}/>
    </div>

    </>
  )
}
export default Home;

