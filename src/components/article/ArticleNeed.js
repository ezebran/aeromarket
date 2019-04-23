import React, { Component } from 'react';

const ArticleNeed = (props) => {

	return(
		<a href="#">
			<article>
				<div class="btn miss-coin">
					You need 1000 <img src="assets/images/icons/coin.svg" />
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
}

export default ArticleNeed;