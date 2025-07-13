import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      startEvent: 'DOMContentLoaded',
    });

    // Refresh AOS just in case on initial mount
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
