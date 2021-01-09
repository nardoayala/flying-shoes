import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';
import favicon from '../images/favicon.png';

const Header = () => (
  <header className="header">
    <div className="header__container container">
      <div className="header__brand">
        <Link to="/">
          <img src={favicon} alt="Brand Logo" />
          <span>Flyshoe</span>
        </Link>
      </div>
      <nav className="header__navbar">
        <ul className="header__navbar__links">
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/features">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
