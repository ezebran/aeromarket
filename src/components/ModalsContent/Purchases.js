import React, { Component } from 'react';


const Purchases = (props) => {

	const toggleCartf = (e) => {
		e.preventDefault();

		let carrito = document.getElementById('purchaseModal');
		carrito.classList.toggle("show-modal");
		
		let modalContent = document.getElementById('modal-content-p');
		modalContent.classList.toggle("form-e");
	}

	return(
	<div class="modal" id="purchaseModal">
		<form id="modal-content-p" class>
			<a href="#" className="m-close" onClick={toggleCartf}><span className="icon-cross"></span></a>
			<h4 className="m-title">list of products redeemed</h4>

			<div className="m-product bor-bot">
				<picture>
					<source srcSet="assets/images/product-pics/AcerAspire-x2.png" media="(min-width: 600px)" />
					<img src="assets/images/product-pics/AcerAspire-x1.png" />
				</picture>
				<div className="m-info-product">
					<h5>Phones</h5>
					<h4 className="m-p-name">iPhone 8</h4>
					<div className="pb-price">
						<h5>12.000</h5>
						<img src="assets/images/icons/coin.svg" />
					</div>

				</div>
			</div>

			<div className="m-product bor-bot">
				<picture>
					<source srcSet="assets/images/product-pics/AcerAspire-x2.png" media="(min-width: 600px)" />
					<img src="assets/images/product-pics/AcerAspire-x1.png" />
				</picture>
				<div className="m-info-product">
					<h5>Phones</h5>
					<h4 className="m-p-name">iPhone 8</h4>
					<div className="pb-price">
						<h5>12.000</h5>
						<img src="assets/images/icons/coin.svg" />
					</div>

				</div>
			</div>

			<div className="m-product bor-bot">
				<picture>
					<source srcSet="assets/images/product-pics/AcerAspire-x2.png" media="(min-width: 600px)" />
					<img src="assets/images/product-pics/AcerAspire-x1.png" />
				</picture>
				<div className="m-info-product">
					<h5>Phones</h5>
					<h4 className="m-p-name">iPhone 8</h4>
					<div className="pb-price">
						<h5>12.000</h5>
						<img src="assets/images/icons/coin.svg" />
					</div>

				</div>
			</div>

			<div className="m-product bor-bot">
				<picture>
					<source srcSet="assets/images/product-pics/AcerAspire-x2.png" media="(min-width: 600px)" />
					<img src="assets/images/product-pics/AcerAspire-x1.png" />
				</picture>
				<div className="m-info-product">
					<h5>Phones</h5>
					<h4 className="m-p-name">iPhone 8</h4>
					<div className="pb-price">
						<h5>12.000</h5>
						<img src="assets/images/icons/coin.svg" />
					</div>

				</div>
			</div>
		</form>
	</div>
	)
}

export default Purchases;