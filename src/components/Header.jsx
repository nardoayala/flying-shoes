import React from 'react';
import '../styles/components/Header.scss';
import favicon from '../images/favicon.png';

const Header = () => (
  <header className='header'>
    <div className='header__container container'>
      <div className='header__brand'>
        <a href='/'>
          <img src={favicon} alt='Brand Logo' />
          <span>Flyshoe</span>
        </a>
      </div>
      <nav className='header__navbar'>
        <ul className='header__navbar__links'>
          <li>
            <a href='/'>
              About
            </a>
          </li>
          <li>
            <a href='/'>
              Features
            </a>
          </li>
          <li>
            <a href='/'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
