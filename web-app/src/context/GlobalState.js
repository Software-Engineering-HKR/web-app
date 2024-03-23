import React, { createContext, useState, useEffect } from 'react';

export const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [sensors, setSensors] = useState([]);
  const [lcd, setLcd] = useState([]);

  useEffect(() => {
    const websocketUrl = 'ws://localhost:8080';
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      console.log('Connected to the WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const rawData = JSON.parse(event.data);
        // Merge devices and sensors arrays into a single array
        const mergedData = [...rawData.devices, ...rawData.sensors]
          // Filter out the _id field from each element
          .map(item => {
            const { _id, ...rest } = item;
            return rest;
          });
        setSensors(mergedData);
        setLcd(rawData.lcd)
        console.log(mergedData)
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Clean up function to close websocket connection when component unmounts
    return () => {
      ws.close();
      console.log('Disconnected from the WebSocket server');

    };
  }, []);

  //console.log(sensors)




  return (
    <SensorContext.Provider value={{
      sensors,
      lcd
    }}>
      {children}
    </SensorContext.Provider>
  );
};
