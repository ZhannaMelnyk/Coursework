import React from 'react';
import './Footer.css';
const logo = require('../../assets/Footer-bakery-logo.png');

export default class Footer extends React.Component {
  render() {
    return <footer className='footer'>
      <img className='footer__logo' src={logo} alt='bakery-logo' />
    </footer>
  }
}