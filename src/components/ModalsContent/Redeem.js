import React, { Component } from 'react';


const Redeem = (props) => {

	const toggleCartf = (e) => {
		e.preventDefault();

		let carrito = document.getElementById('redeemModal');
		carrito.classList.toggle("show-modal");

		let modalContent = document.getElementById('modal-content-r');
		modalContent.classList.toggle("form-e");
	}

	let product = props.redeemContent;
	// console.log(prodducto)
	return(
	<div class="modal" id="redeemModal">
		<form id="modal-content-r" class>
			<a href="#" className="m-close" onClick={toggleCartf}><span className="icon-cross"></span></a>
			<h4 className="m-title">Do you want to redeem this product?</h4>
			<div className="m-product">
					<picture>
						<source srcSet={props.redeemImgs.hdUrl} media="(min-width: 600px)" />
						<img src={props.redeemImgs.url} />
					</picture>
				<div className="m-info-product">
					<h5>{props.redeemContent.category}</h5>
					<h4 className="m-p-name">{props.redeemContent.name}</h4>
					<div className="m-calc">
						<h4>{props.userPoints}<span> Your current points.</span></h4>
						<h4>- {props.redeemContent.cost} <span> Price of the product.</span></h4>
						<hr className="m-gray-line" />
						<h4>{props.userPoints - props.redeemContent.cost} <span> Points after the exchange.</span></h4>
					</div>
				</div>
			</div>
			<input type="submit" value="Redeem now!" className="btn btn-active m-auto" />
		</form>
	</div>
	)
}

export default Redeem;