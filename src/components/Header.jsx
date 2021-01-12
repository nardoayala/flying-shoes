import React from 'react';
import { Link } from 'react-router-dom';
import ModalMenu from './ModalMenu';
import './styles/Header.scss';
import hideMenuOnScroll from '../utils/hideMenuOnScroll';
import toggleModal from '../utils/toggleModal';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalMenuVisible: false,
    };
  }

  componentDidMount() {
    hideMenuOnScroll();
  }

  handleScroll = () => {
    const { modalMenuVisible } = this.state;
    if (!modalMenuVisible) {
      hideMenuOnScroll();
    }
    console.log('hey There');
  };

  handleClick = () => {
    this.setState((prevState) => ({
      modalMenuVisible: !prevState.modalMenuVisible,
    }));
    const { modalMenuVisible } = this.state;
    toggleModal(modalMenuVisible);
  };

  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <span
            className="header__burger-button"
            role="button"
            aria-label="Burger Button"
            tabIndex={0}
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
          />
          <div className="header__brand">
            <Link to="/">
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
        <ModalMenu />
      </header>
    );
  }
}

export default Header;
