import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">logoipsum</div>
      <nav className="nav-links">
        <a href="#" className="nav-link">About us</a>
        <a href="#" className="nav-link">Services</a>
         <a href='#'className="nav-link">Case Studies</a>
    
        <a href="#" className="nav-link">Blog</a>
        <a href='#'className="nav-link">How it works</a>
        <a href='#'className="nav-link">Hire</a>
      </nav>
      <button className="contact-btn">Contact us</button>
    </header>
  );
};

export default Navbar;