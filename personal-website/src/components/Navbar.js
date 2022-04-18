import React, { useState, useEffect } from 'react';
//import { Button } from './Button';
//import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.jpg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <a onClick={closeMobileMenu} className = 'navbar-logo' href='/'>
          <img alt='logo' src={logo} />
        </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <a onClick={closeMobileMenu} className = 'nav-links' href='/'>
                Home
            </a>
            </li>
            <li className='nav-item'>
              <a onClick={closeMobileMenu} className = 'nav-links' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
            <a onClick={closeMobileMenu} className = 'nav-links' href='#portfolio'>
                Portfolio
            </a>
            </li>
            <li className='nav-item'>
            <a onClick={closeMobileMenu} className = 'nav-links' href='#contact'>
                Contact
            </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;