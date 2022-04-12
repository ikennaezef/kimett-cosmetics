import './Footer.css';

import logo from '../../images/logo.svg';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<a href="#" className="logo">
					<img src={logo} alt="Kimett logo" />
				</a>
				<div className="footer__main">
					<div className="footer__text">
						<p>Provide unique experiences for everyone involved with a brand. A trip without time, igniting a flame of enthusiasm and curiosity for each one.</p>
					</div>
					<div className="footer__links">
						<ul>
							<li><h4>Menu</h4></li>
							<li><a href="#">Home</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Products</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Contact</a></li>
						</ul>
						<ul>
							<li><h4>Support</h4></li>
							<li><a href="#">Terms and conditions</a></li>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Legal Mention</a></li>
						</ul>
					</div>
				</div>
				<p className="copy">&copy; 2020. VU'OR Corp. All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer