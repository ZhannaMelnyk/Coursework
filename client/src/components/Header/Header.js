import React from "react";
import '../../styles/Header.css'
import { Link } from "react-router-dom";
const logo = require('../../assets/Bakery-logo.png')

class Header extends React.Component {
	render() {
		return <header className='header'>
			<img className='header__logo' src={logo} alt='bakery-logo' />
			<div className='header__rectangle' />
			<nav className='header__nav'>
				<Link to='/'>Home</Link>
				<Link to='/lalala'>Card</Link>
			</nav>
		</header>
	}
}

export default Header;