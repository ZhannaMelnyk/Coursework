import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const logo = require('../../assets/Bakery-logo.png')

class Header extends React.Component {
  render() {
    return <header className='header'>
      <Link to='/products'>
        <img className='header__logo' src={logo} alt='bakery-logo' />
      </Link>
      <div className='header__rectangle' />
      <nav className='header__nav'>
        <Link to='/products'>Home</Link>
      </nav>
    </header>
  }
}

export default Header;