import React, { Component } from 'react';

const Article = (props) => {

	const toggleCartf = (e) => {
		e.preventDefault();

		let carrito = document.getElementById('redeemModal');
		carrito.classList.toggle("show-modal");

		let modalContent = document.getElementById('modal-content-r');

		modalContent.classList.toggle("form-e");

		// setState({
		// 	redeemContent: props.infoProductos
		// })
		const product = props.infoProductos;
		props.renderRedeem(product)
	}



	if(props.infoProductos.cost > props.infoUsuarios.points){
		return(
			<a href="#">
				<article>
					<div class="btn miss-coin">
						You need { props.infoProductos.cost - props.infoUsuarios.points }+ <img src="assets/images/icons/coin.svg" />
					</div>
					<picture>
						<source srcSet={props.infoProductos.img.hdUrl} media="(min-width: 600px)" />
						<img src={props.infoProductos.img.url} />
					</picture>

					<hr class="gray-line" />

					<h5>{props.infoProductos.category}</h5>
					<h4>{props.infoProductos.name}</h4>
				</article>
			</a>
		)
	}else{
		return(
			<a href="#">
				<article>
					<div className="buy-icon">
						<img src="assets/images/icons/buy-blue.svg" />
				</div>
					<picture>
						<source srcSet={props.infoProductos.img.hdUrl} media="(min-width: 600px)" />
						<img src={props.infoProductos.img.url} />
					</picture>

					<hr className="gray-line" />

					<h5>{props.infoProductos.category}</h5>
					<h4>{props.infoProductos.name}</h4>
					<div className="info-hover">
						<div className="buy-icon-hover">
							<img src="assets/images/icons/buy-white.svg" />
						</div>
						<div className="price">
							<h3>{props.infoProductos.cost}</h3>
							<img src="assets/images/icons/coin.svg" />
						</div>
						<a href="#" className="redeem" onClick={toggleCartf}>Redeem now</a>
					</div>
			</article>
		</a>
	)
	}
}

export default Article;