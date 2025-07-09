import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './pages/Home';
import Template from './pages/Template';
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage/contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/template" element={<Template />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
