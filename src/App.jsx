import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer'; 
import Home from './pages/Home';
import ContactPage from './pages/ContactPage/contact';
import Template from './pages/Template';
import Packagesplan from './pages/PackagePlans/PackagePlans';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/template" element={<Template />} />
        <Route path="/packages" element={<Packagesplan />} />
        {/* Add more pages like About, Pricing, Services here if needed */}
      </Routes>
      <Footer />
    </>

  );
}

export default App;
