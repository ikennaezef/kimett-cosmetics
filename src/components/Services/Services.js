import { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Services.css';

import blackskin from '../../images/black-skin-beauty-small.png';
import model from '../../images/beautiful-african-woman-2.png';
import afrohair from '../../images/afro-hair.png';

gsap.registerPlugin(ScrollTrigger);


const Services = () => {

	useEffect(()=> {
		gsap.from('.service', {
			duration: 2.5,
			y: '60',
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '#services .content',
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})
	}, [ ])

	return (
		<section id="services">
			<div className="container">
				<div>
					<img src={model} alt="beautiful african woman" />
					<img src={afrohair} alt="afro hair"/>
				</div>
				<div className="content">
					<h4 className="title">Experience the best with Kimett</h4>
					<p className="service">Hair Treatment</p>
					<p className="service">Nail Ressurrection</p>
					<p className="service">Healthier Skin</p>
					<p className="service">Best Skincare</p>
					<p className="service">Heals</p>
				</div>
				<div>
					<img src={blackskin} alt="beautiful black skin" />
				</div>
			</div>
		</section>
	)
}

export default Services