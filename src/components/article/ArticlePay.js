import React, { Component } from 'react';

const ArticlePay = (props) => {

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
					<a href="#" className="redeem">Redeem now</a>
				</div>
			</article>
		</a>
	)
}

export default ArticlePay;