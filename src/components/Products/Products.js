import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Products.css';
import ribbonImage from '../../images/ribbon.svg';
import coffee from '../../images/coffee.png';
import aloe from '../../images/aloevera.png';
import bannerImg from '../../images/Banner.svg';

gsap.registerPlugin(ScrollTrigger);


const Products = () => {

	let product1  = useRef(null);
	let product2  = useRef(null);

	useEffect(()=> {
		gsap.from(product1, {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: product1,
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from(product2, {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: product2,
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})
	}, [ ])

	return (
		<section id="products">
			<div className="ribbon">
				<img src={ribbonImage} alt="ribbon" />
			</div>
			<div className="products__title">
				<h2>Our Products</h2>
				<p>Products tailored to fit your skin >>>>>>  </p>
			</div>
			<div className="product product-1">
				<div className="product__image">
					<img src={coffee} alt="coffee hydrakimett" />
				</div>
				<div className="product__content" ref={el => product1 = el} >
					<h3 className="product__title">Coffee <br/> HydraKimett</h3>
					<p className="product__details">
						Aligning products of extreme quality with the goal of bringing a result never dreamed of. Kimett trusts in the power of beauty, which is why we exist. We aim to bring facial, hair and body products with the divine quality of the Gods. Always aiming for exclusivity in packaging, service, and of course, in Divine quality.
					</p>
				</div>
			</div>
			<div className="product product-2">
				<div className="product__content"  ref={el => product2 = el}>
					<h3 className="product__title">AloeVera <br/> HydraKimett</h3>
					<p className="product__details">
						 We aim to bring facial, hair and body products with the divine quality of the Gods. Always aiming for exclusivity in packaging, service, and of course, in Divine quality.
					</p>
				</div>
				<div className="product__image">
					<img src={aloe} alt="aloe vera hydrakimett" />
				</div>
			</div>
			<div className="product product-3">
				<div className="product__banner">
					<h3 className="product__title">Glow Kimett <br/> Hydrafresh</h3>
				</div>
				<div className="product__content">		
					<div></div>			
					<p className="product__details">
						 Hydrafresh supports skin integrity, enhances its appearance and relieve skin conditions. It includes nutrition, avoidance of excessive sun exposure and appropriate use of emollients.
					</p>
				</div>
			</div>
			<div className="banner">
				<img src={bannerImg} alt="kimett banner"/>
			</div>
		</section>
	)
}

export default Products