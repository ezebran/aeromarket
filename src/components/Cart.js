import React, { Component } from 'react';


const Cart = (props) => {

	const toggleCartf = (e) => {
		e.preventDefault();

		let carrito = document.getElementById('purchaseModal');
		carrito.classList.toggle("show-modal");

		let modalContent = document.getElementById('modal-content-p');
		
		modalContent.classList.toggle("form-e");
	}

	return(
		<a href="#" className="carrito-btn" onClick={toggleCartf}>
			<img src="assets/images/icons/buy-gray.svg" />
		</a>
	)
}

export default Cart;