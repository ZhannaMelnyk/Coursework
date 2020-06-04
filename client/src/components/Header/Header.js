import React from "react";
import '../../styles/Header.css'
import { Link } from "react-router-dom";
import SearchBoxContainer from "../SearchBox/SearchBoxContainer";
const logo = require('../../assets/Bakery-logo.png')

class Header extends React.Component {
	render() {
		return <header className='header'>
			<Link className='header__logo-link' to='/products'>
				<img className='header__logo' src={logo} alt='bakery-logo' />
			</Link>
			<div className='header__rectangle' />
			<nav className='header__nav'>
				<Link to='/products'>Home</Link>
				<Link to='/cart'>Cart</Link>
			</nav>
			<SearchBoxContainer />
		</header>
	}
}

export default Header;