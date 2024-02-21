import ToggleButton from 'react-bootstrap/ToggleButton';
import SmartIcons from './SmartIcons';
import { useState } from 'react';
import axios from 'axios';


function DeviceToggle({ label, device, disabled, value }) {

    const [status, setStatus] = useState(false);
  
    const sendDeviceCommand = async (device, command) => {
      try {
        await axios.post(`http://localhost:5000/api/${device}`, { command });
      } catch (error) {
        console.error('Error sending device command:', error);
      }
    };
  
    const handleClick = () => {
      if (status) {
        setStatus(false)
        sendDeviceCommand(`${device}`, '0')
      } 
      else if (!status) {
        setStatus(true)
        sendDeviceCommand(`${device}`, '1')

      }
    };

    return (
        <>
            <ToggleButton
                className={`mb-2 device-toggle-button ${disabled ? 'disabled' : ''} ${value? 'on' : ''}`}
                id={`toggle-${device}`} // Ensuring unique ID based on device prop
                type="checkbox"
                variant="outline-primary"
                checked={value} // says if the radio button is off/on
                value={value ? 'On' : 'Off'} // The value submitted with the form will be 'On' or 'Off'
                disabled={disabled}
                onClick={handleClick}
            >
                <div className="device-content">
                    <span className="button-label">{label}</span>                
                    <SmartIcons device={device} active={value} />
                    <span className="button-status-label">{value ? 'On' : 'Off'}</span>
                </div>

            </ToggleButton>
        </>
    );
}

export default DeviceToggle;

