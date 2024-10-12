import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='logo-right'>
        <img src="/images/img_header_logo.svg" alt="logo"  />
        </div>
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li>SHOP</li>
        <li>SKILLS</li>
        <li>STORIES</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      <div className="icons">
      <img src="/images/img_contrast.svg" alt="Search" className="icon" />
      <img src="/images/img_favorite.svg" alt="Favorites" className="icon" />
        <img src="/images/img_bag.svg" alt="Cart" className="icon" />
        <img src="/images/img_lock.svg" alt="Profile" className="icon" />
        
        <div>
        <button className="dropdown-button">
          <span className="button-text">ENG</span>
          <img src="/images/img_checkmark.svg" alt="" className="dropdown-icon" />
        </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
