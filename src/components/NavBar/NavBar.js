import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import logo from '../../images/logo.svg';

const NavBar = () => {

	const [navOpen, setNavOpen] = useState(false);

	window.onscroll = () => setNavOpen(false);

	return (
		<div className="nav-wrapper">
			<nav className="nav container">
				<a href="#" className="cart-btn">Cart</a>
				<Link to="/" className="logo">
					<img src={logo} alt="Kimett Logo" />
				</Link>
				<button className={ navOpen ? "menu-btn active" : "menu-btn" } onClick={ () => setNavOpen(!navOpen) }>
					<div className="lines">
						<div className="line line-1"></div>
						<div className="line line-2"></div>
					</div>
					<span>Menu</span>
				</button>
				<ul className={ navOpen ? "nav-links active" : "nav-links" }>
					<li className="nav-link"><Link to="/" onClick={()=> setNavOpen(false)} >Home</Link></li>
					<li className="nav-link"><Link to="/products" onClick={()=> setNavOpen(false)} >Our Products</Link></li>
					<li className="nav-link"><a href="#" onClick={()=> setNavOpen(false)}>About Us</a></li>
				</ul>
			</nav>
		</div>
	)
}

export default NavBar