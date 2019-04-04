import React, { Component } from 'react';

class Articles extends Component {
	render(){
		return(
			<section className="main">
				<div className="articles">
					<a href="#">
					<article>
						<div className="buy-icon">
							<img src="assets/images/icons/buy-blue.svg" />
						</div>
						<picture>
							<source srcset="assets/images/product-pics/AcerAspire-x2.png" media="(min-width: 600px)" />
							<img src="assets/images/product-pics/AcerAspire-x1.png" />
						</picture>

						<hr className="gray-line" />
						
						<h5>Phones</h5>
						<h4>iPhone 8</h4>
						<div class="info-hover">
							<div className="buy-icon-hover">
								<img src="assets/images/icons/buy-white.svg" />
							</div>
							<div className="price">
								<h3>12.000</h3>
								<img src="assets/images/icons/coin.svg" />
							</div>
							<a href="#" className="redeem">Redeem now</a>
						</div>
					</article>
					</a>
				</div>
			</section>
		)
	}
}

export default Articles;