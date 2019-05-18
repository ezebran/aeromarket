import React, { Component } from 'react';


const Redeem = (props) => {

	return(
	<div class="modal" id="modal">
		<form>
			<a href="#" className="m-close"><span className="icon-cross"></span></a>
			<h4 className="m-title">Do you want to redeem this product?</h4>
			<div className="m-product">
				<picture>
					<source srcSet="assets/images/product-pics/AcerAspire-x2.png" media="(min-width: 600px)" />
					<img src="assets/images/product-pics/AcerAspire-x1.png" />
				</picture>
				<div className="m-info-product">
					<h5>Phones</h5>
					<h4 className="m-p-name">iPhone 8</h4>
					<div className="m-calc">
						<h4>2000 <span> Your current points.</span></h4>
						<h4>- 630 <span> Price of the product.</span></h4>
						<hr className="m-gray-line" />
						<h4>1370 <span> Points after the exchange.</span></h4>
					</div>
				</div>
			</div>
			<input type="submit" value="Redeem now!" className="btn btn-active" />
		</form>
	</div>
	)
}

export default Redeem;