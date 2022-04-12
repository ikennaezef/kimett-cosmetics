import { useRef, useLayoutEffect } from 'react';
import { gsap, Power3 } from 'gsap';

import './Header.css';



const Header = () => {

	let tl = new gsap.timeline();
	let ease = Power3.easeOut();

	let headerTitle = useRef(null);
	let headerP = useRef(null);
	let exploreBtn = useRef(null);

	useLayoutEffect(()=> {
		tl.from([headerTitle, headerP], 1, {
			opacity: 0,
			delay: 1,
			stagger: {
				amount: .4
			},
			ease: ease
		})
		.from(exploreBtn, 2, {
			opacity: 0,
			ease: ease
		})
	}, [ ])

	return (
		<header className="header" >
			<div className="header__content container">
				<h2 ref={el => headerTitle = el} >
					<span>You are</span>
					<br/> Beau-ti-ful
				</h2>
				<p ref={el => headerP =el} >Express and Embrace your Individual Style</p>
				<a href="#know_us" className="explore-btn" ref={el => exploreBtn = el} >Explore</a>
			</div>
		</header>
	)
}

export default Header