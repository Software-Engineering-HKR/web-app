import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SensorProvider } from './context/GlobalState';


import Home from "./pages/Home";
import Registration from './pages/Registration';
import Login from './pages/Login';
import User from './pages/User';


function App() {
  return (
    <SensorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User/>} />

        </Routes>
      </BrowserRouter>
    </SensorProvider>
  );

}

export default App;
