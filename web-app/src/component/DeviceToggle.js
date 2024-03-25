import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import ToggleButton from 'react-bootstrap/ToggleButton';
import SmartIcons from './SmartIcons';
import { SensorContext } from '../context/GlobalState';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DeviceToggle({ label, device, disabled }) {
    const [checked, setChecked] = useState(false);
    const { sensors } = useContext(SensorContext)

    useEffect(() => {
        if (sensors.length === 0) return;

        const deviceInital = async () => {
            const initialData = sensors
            const deviceStatus = initialData.find(d => d.name === device)?.status ?? 0;
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
                <Row className="align-items-center justify-content-between w-100 mx-0">
                    <Col xs={2} md={4} xl={2}>
                        <SmartIcons className="large-icon" device={device} active={checked} />
                    </Col>
                    <Col xs={10} md={8} xl={10}>
                        <Row className="justify-content-end">
                            <Col xs={12} className="device-toggle-name text-right">
                                {label}
                            </Col>
                            <Col xs={12} className="device-toggle-status text-right">
                                {checked ? 'On' : 'Off'}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </ToggleButton>
        </>
    );
}

export default DeviceToggle;

