import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './FaceProducts.css';

gsap.registerPlugin(ScrollTrigger);

const FaceProducts = () => {

	useEffect(()=> {
		gsap.from([ '.face__product__1 .product__title', '.face__product__1 .product__details' ], {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '.face__product__1',
				start: 'top 80%',
				end: 'bottom 50%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from([ '.face__product__2 .product__title', '.face__product__2 .product__details' ], {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '.face__product__2',
				start: 'top 80%',
				end: 'bottom 50%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from([ '.face__product__3 .product__title', '.face__product__3 .product__details' ], {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '.face__product__3',
				start: 'top 80%',
				end: 'bottom 50%',
				toggleActions: 'play complete none none'
			}
		})
	}, [ ])



	return (
		<section id="face__products" >
			<h2 className="title">Face Products</h2>
			<div className="face__product face__product__1">
				<div className="product__banner">
					<h3 className="product__title">Glow New <br/> Black</h3>
				</div>
				<div className="product__content">		
					<div></div>			
					<p className="product__details">
						 Hydrafresh supports skin integrity, enhances its appearance and relieve skin conditions. It includes nutrition, avoidance of excessive sun exposure and appropriate use of emollients.
					</p>
				</div>
			</div>

			<div className="face__product face__product__2">
				<div className="product__banner">
					<h3 className="product__title">Ore <br/> Creamy</h3>
				</div>
				<div className="product__content">		
					<div></div>			
					<p className="product__details">
						  There are hundreds of cosmetic products on the shelves that promise miracles on your skin. Innovative products for women, because through an exclusive formula, it brings assets that provide several benefits for the skin. To have a beautiful, strong and healthy skin.
					</p>
				</div>
			</div>

			<div className="face__product face__product__3">
				<div className="product__banner">
					<h3 className="product__title">Rose <br/> Flori</h3>
				</div>
				<div className="product__content">		
					<div></div>			
					<p className="product__details">
						  There are hundreds of cosmetic products on the shelves that promise miracles on your skin. Innovative products for women, because through an exclusive formula, it brings assets that provide several benefits for the skin. To have a beautiful, strong and healthy skin.
					</p>
				</div>
			</div>
		</section>
	)
}

export default FaceProducts