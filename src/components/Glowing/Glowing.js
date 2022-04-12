import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Glowing.css';
import model from '../../images/model.png';
import woman from '../../images/beautiful-african-woman-2.png';

gsap.registerPlugin(ScrollTrigger);

const Glowing = () => {

	let img1 = useRef(null);
	let img2 = useRef(null);
	let glowingContent = useRef(null);

	useEffect(()=> {

		gsap.from(img1, {
			duration: 2,
			x: '-30',
			opacity: 0,
			ease: 'ease',
			scrollTrigger: {
				trigger: '.glowing__main',
				start: 'top 70%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from(img2, {
			duration: 2,
			x: '40',
			opacity: 0,
			ease: 'ease',
			scrollTrigger: {
				trigger: '.glowing__main',
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from(glowingContent, {
			duration: 2,
			y: '20',
			opacity: 0,
			ease: 'ease',
			scrollTrigger: {
				trigger: '.glowing__main',
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

	}, [ ])

	return (
		<section id="glowing">
			<div className="glowing__main container">
				<div>
					<img src={model} alt="beautiful model" ref={el => img1 = el} />
				</div>
				<div>
					<img src={woman} alt="beautiful model" ref={el => img2 = el}/>
					<div className="glowing__content" ref={el => glowingContent = el} >
						<h2 className="glowing__title">Keep <br/> Glowing</h2>
						<p>At Kimett, we trust in the power of beauty, which is why we exist. We aim to bring facial, hair and body products.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Glowing