import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/MobileMenu.scss';

const MobileMenu = () => (
  <div className="modal-menu">
    <ul className="modal-menu__links">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/features">Features</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

export default MobileMenu;
