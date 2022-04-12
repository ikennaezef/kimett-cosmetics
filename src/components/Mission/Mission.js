import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Mission.css';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {

	let messageRef = useRef(null);

	useEffect(() => {
		gsap.from(messageRef, {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: messageRef,
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'restart complete reverse reset'
			}
		})
	}, [ ])

	return (
		<section id="mission">
			<div className="banner">
				<div className="content">
					<h2>You are beautiful</h2>
					<h2>You are beautiful</h2>
				</div>
			</div>
			<div className="message container">
				<h2 ref={el => messageRef = el} >"Kimett, we are <br/> welcoming challenges to foster <br/> our beauty. People inspire us <br/> and we want to inspire <br/> them too."</h2>
			</div>
		</section>
	)
}

export default Mission