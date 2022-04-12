import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './KnowUs.css';
import ribbon from '../../images/ribbon.svg';
import womanImage from '../../images/beautiful-african-woman.png';
gsap.registerPlugin(ScrollTrigger);

const KnowUs = () => {

	let sectionRef = useRef(null);
	let imageRef = useRef(null);
	let contentRef = useRef(null);
	
	useEffect(()=> {
		gsap.from(imageRef, {
			duration: 2,
			x: '-60',
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from(contentRef, {
			duration: 2,
			x: '80',
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})
	}, [ ])


	return (
		<section id="know_us" className="know_us" ref={el => sectionRef = el}>
			<div className="ribbon">
				<img src={ribbon} alt="ribbon" />
			</div>
			<div className="display container">
				<div className="image">
					<img src={womanImage} alt="beautiful woman" ref={el => imageRef = el } />
				</div>
				<div className="content" ref={el => contentRef = el} >
					<h2 className="large_title">
						No one is the <br/> same as you
					</h2>
					<div className="know_us_small">
						<h4>Know Us</h4>
						<p>Kimett we trust in the power of beauty, which is why we exist. We aim to bring facial, hair and body products with the divine quality of the Gods. Always aiming for exclusivity in packaging, service, and of course, in Divine quality.</p>
					</div>
				</div>
			</div>
			
		</section>
	)
}

export default KnowUs