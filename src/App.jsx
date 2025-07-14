import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './component/Header';
import Footer from './component/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage/contact';
import Template from './pages/Templates/Template';
import Template2 from './pages/Templates/Template2';
import Packagesplan from './pages/PackagePlans/PackagePlans';
import AdminPanel from './pages/Admin/AdminPanel';
import TemplateForm from './component/TemplateForm';
import DynamicTemplate from './component/DynamicTemplate';

function App() {
  const location = useLocation();

  // Admin route should hide header/footer
  const hideHeaderFooter = location.pathname.startsWith('/admin') || location.pathname.startsWith('/preview');

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/packages" element={<Packagesplan />} />
        <Route path="/template1" element={<Template />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template-form" element={<TemplateForm selectedTemplate="template1" />} />
        
        {/* Preview dynamic template based on slug */}
        <Route path="/preview/:slug" element={<DynamicTemplate />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
