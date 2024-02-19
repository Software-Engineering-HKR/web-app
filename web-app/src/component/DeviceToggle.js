import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ToggleButton from 'react-bootstrap/ToggleButton';
import SmartIcons from './SmartIcons';

function DeviceToggle({ label, device, disabled }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        const websocketUrl = 'ws://localhost:8080'
        const ws = new WebSocket(websocketUrl);

        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.led !== undefined) {
                    setChecked(data.led ? true : false);
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => ws.close();
    }, []);


    const sendDeviceCommand = async (device, command) => {
        try {
            await axios.post(`http://localhost:5000/api/${device}`, { command });
        } catch (error) {
            console.error('Error sending device command:', error);
        }
    };

    /* Listens to when checked is changed*/
    useEffect(() => {
        console.log('Checked state changed to:', checked);

        const command = checked ? '1' : '0';
        sendDeviceCommand('led', command);

    }, [checked, device]);

    return (
        <>
            <ToggleButton
                className={`mb-2 device-toggle-button ${disabled ? 'disabled' : ''} ${checked ? 'on' : ''}`}
                id={`toggle-${device}`} // Ensuring unique ID based on device prop
                type="checkbox"
                variant="outline-primary"
                checked={checked} // says if the radio button is off/on
                value={checked ? 'On' : 'Off'} // The value submitted with the form will be 'On' or 'Off'
                onChange={(e) => {
                    setChecked(e.currentTarget.checked); // Changes the checked state
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