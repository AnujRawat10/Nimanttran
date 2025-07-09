import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Template from './pages/Template';
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/template" element={<Template />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
