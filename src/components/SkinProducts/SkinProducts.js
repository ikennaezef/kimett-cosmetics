import { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './SkinProducts.css';
import ribbon from '../../images/ribbon.png';
import coffee from '../../images/coffee.png';
import aloe from '../../images/aloevera.png';

gsap.registerPlugin(ScrollTrigger);


const SkinProducts = () => {

	useEffect(()=> {
		gsap.from([ '.skin__product__2 .product__title', '.skin__product__2 .product__details' ], {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '.skin__product__2',
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from('.skin__product__3 .product__content', {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '.skin__product__3',
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})

		gsap.from('.skin__product__4 .product__content', {
			duration: 2,
			opacity: 0,
			ease: 'ease-in',
			scrollTrigger: {
				trigger: '.skin__product__4',
				start: 'top 80%',
				end: 'bottom 60%',
				toggleActions: 'play complete none none'
			}
		})
	}, [ ])

	return (
		<section id="skin__products">
			<div className="ribbon">
				<img src={ribbon} alt="ribbon"/>
			</div>
			<h2 className="title">Skin Products</h2>
			<div className="skin__product skin__product__1">
				<div className="product__banner">
					<h3 className="product__title">Coffe <br/> Hydra</h3>
				</div>
				<div className="product__content">				
					<p className="product__details">
						 There are hundreds of cosmetic products on the shelves that promise miracles on your skin. Innovative products for women, because through an exclusive formula, it brings assets that provide several benefits for the skin. To have a beautiful, strong and healthy skin.
					</p>
					<div></div>	
				</div>
			</div>

			<div className="skin__product skin__product__2">
				<div className="product__banner">
					<h3 className="product__title">Vera <br/> Flare</h3>
				</div>
				<div className="product__content">				
					<p className="product__details">
						 There are hundreds of cosmetic products on the shelves that promise miracles on your skin. Innovative products for women, because through an exclusive formula, it brings assets that provide several benefits for the skin. To have a beautiful, strong and healthy skin.
					</p>
					<div></div>	
				</div>
			</div>

			<div className="skin__product skin__product__3">
				<div className="product__image">
					<img src={coffee} alt="coffee hydrakimett" />
				</div>
				<div className="product__content">
					<h3 className="product__title">Coffee <br/> HydraKimett</h3>
					<p className="product__details">
						Aligning products of extreme quality with the goal of bringing a result never dreamed of. Kimett trusts in the power of beauty, which is why we exist. We aim to bring facial, hair and body products with the divine quality of the Gods. Always aiming for exclusivity in packaging, service, and of course, in Divine quality.
					</p>
				</div>
			</div>

			<div className="skin__product skin__product__4">
				<div className="product__image">
					<img src={aloe} alt="aloevera kimett" />
				</div>
				<div className="product__content">
					<h3 className="product__title">AloeVera <br/> Kimett</h3>
					<p className="product__details">
						We aim to bring facial, hair and body products with the divine quality of the Gods. Always aiming for exclusivity in packaging, service, and of course, in Divine quality.
					</p>
				</div>
			</div>
		</section>
	)
}

export default SkinProducts