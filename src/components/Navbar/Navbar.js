import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <img src={logo} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav my-3">
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#home">HOME</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#about">ABOUT</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#services">SERVICES</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#solutions">SOLUTIONS</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#products">PRODUCTS</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#videos">VIDEOS</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#downloads">DOWNLOADS</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#career">CAREER</a>
            </li>
            <li className="nav-item py-2">
              <a className="nav-link active" aria-current="page" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
