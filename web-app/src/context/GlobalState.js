import React, { createContext, useState, useEffect } from 'react';

export const SensorContext = createContext();

export const SensorProvider = ({ children }) => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    const websocketUrl = 'ws://localhost:8080';
    const ws = new WebSocket(websocketUrl);

    ws.onopen = () => {
      console.log('Connected to the WebSocket server');
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(data)
        setSensors(data);
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


  return (
    <SensorContext.Provider value={{
      sensors
    }}>
      {children}
    </SensorContext.Provider>
  );
};
