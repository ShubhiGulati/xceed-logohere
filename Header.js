import React, { useState } from 'react';
import './Header.css';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">
        <h2 className="header-logo">
            LOGO<span style={{ color: '#00bfa5' }}>HERE</span>
          </h2>
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Submit Order</a></li>
          <li><button className="btn btn-primary">Try for Free</button></li>
        </ul>
      </nav>
     
    </header>
  );
}

export default Header;

