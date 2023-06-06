import React, { useEffect } from 'react';
import Home from './Home';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import { Link, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
