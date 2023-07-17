import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import AboutUs from './components/About/AboutUs';

function App() {
  return (
    <div className="fluid-container">
      <Navbar />
      <Home />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
