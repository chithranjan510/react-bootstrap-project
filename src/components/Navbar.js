/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Navbar.css';
import logo from '../images/portfolio-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        <img src={logo} alt='portfolio' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link text-light' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link text-light' href='#'>
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
