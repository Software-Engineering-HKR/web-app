import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ToggleButton from 'react-bootstrap/ToggleButton';
import SmartIcons from './SmartIcons';
import { SensorContext } from '../context/GlobalState';

function DeviceToggle({ label, device, disabled }) {
    const [checked, setChecked] = useState(false);
    const { sensors } = useContext(SensorContext)

    useEffect(() => {
        if (sensors.length === 0) return;
        
        const deviceInital =async  ()=>{
            const initialData =  sensors
            const deviceName = initialData.find(d => d.name ===device)
            const deviceStatus = deviceName.status
            setChecked(deviceStatus)
        }
        deviceInital()
    }, [device, sensors])

    const sendDeviceCommand = async (device, command) => {
      try {
        await axios.post(`http://localhost:5000/api/${device}`, { command });
      } catch (error) {
        console.error('Error sending device command:', error);
      }
    };

    return (
        <>
            <ToggleButton
                className={`mb-2 device-toggle-button ${disabled ? 'disabled' : ''}`}
                id={`toggle-${device}`} // Ensuring unique ID based on device prop
                type="checkbox"
                variant="outline-primary"
                checked={checked} // says if the radio button is off/on
                value={checked ? 'On' : 'Off'} // The value submitted with the form will be 'On' or 'Off'
                onChange={(e) => {
                    sendDeviceCommand(device, checked ? '0' : '1')
                    setChecked(!checked); // Changes the checked state
                    
                }}
                disabled={disabled}
                
            >
                <div className="device-content">
                    <span className="button-label">{label}</span>
                    <SmartIcons device={device} active={checked} />
                    <span className="button-status-label">{checked ? 'On' : 'Off'}</span>
                </div>

            </ToggleButton>
        </>
    );
}

export default DeviceToggle;

