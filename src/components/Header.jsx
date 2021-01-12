import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './styles/Header.scss';

import ModalMenu from './ModalMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      isVisible: true,
      isModalVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      isVisible,
    });
  };

  handleClick = () => {
    const { isModalVisible } = this.state;
    const modalMenu = document.querySelector('.modal-menu');
    if (!isModalVisible) {
      modalMenu.style.transform = 'translateX(0)';
    } else {
      modalMenu.style.transform = 'translateX(-769px)';
    }
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  render() {
    const { prevScrollpos, isVisible, isModalVisible } = this.state;
    return (
      <header
        className={classnames('header', {
          'header--hidden': !isVisible && !isModalVisible,
          'header--dark-traslucid': prevScrollpos !== 0 && !isModalVisible,
        })}
      >
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
