import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import './App.css';

function App() {
  return (
    <div className="fluid-container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
