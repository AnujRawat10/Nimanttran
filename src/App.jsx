import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './component/Header';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage/contact';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more pages like About, Pricing, Services here if needed */}
      </Routes>
    </>
  );
}

export default App;
