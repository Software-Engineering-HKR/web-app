import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SensorProvider } from './context/GlobalState';


import Home from "./pages/Home";
import Registration from './component/Registration';


function App() {
  return (
    <SensorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />

        </Routes>
      </BrowserRouter>
    </SensorProvider>
  );

}

export default App;
