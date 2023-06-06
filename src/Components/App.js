import React, { useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { Link, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Faq from './pages/Faq';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
