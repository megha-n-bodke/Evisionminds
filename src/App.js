import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="fluid-container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
