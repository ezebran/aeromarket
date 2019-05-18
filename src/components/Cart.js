import React, { Component } from 'react';


const Cart = (props) => {

	const toggleCartf = (e) => {
		e.preventDefault();

		let carrito = document.getElementById('modal');
		carrito.classList.toggle("show-modal");
	}

	return(
		<a href="#" className="carrito-btn" onClick={toggleCartf}>
			<img src="assets/images/icons/buy-gray.svg" />
		</a>
	)
}

export default Cart;