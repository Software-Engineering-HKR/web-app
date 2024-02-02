import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


import { Home } from "./pages/Home";
import Lightings from "./pages/Lightings";

function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/home" element={<Home  />} />
        <Route path="/lightings" element={<Lightings />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
