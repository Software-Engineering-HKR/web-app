import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SensorProvider } from './context/GlobalState';


import Home from "./pages/Home";

function App() {
  return (
    <SensorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SensorProvider>
  );

}

export default App;
