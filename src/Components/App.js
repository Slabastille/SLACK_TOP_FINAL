import React, { useEffect } from 'react';
import Home from './pages/Home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { Link, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Faq from './pages/Faq';
import Channel from './channel';
import Messages from './messages';
import Time from './time';
import Podium from './podium';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/time" element={<Time />} />
        <Route path="/podium" element={<Podium />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
