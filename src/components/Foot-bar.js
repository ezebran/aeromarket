import React, { Component } from 'react';

const FootBar = (props) => {
	let objSize = props.paginacion.cantidadProdus;
	let artPosicion = props.paginacion.productosPorPag * props.paginacion.pagActual;
	return(
		<div>
			<div className="m-bar">

				<div className="m-bar-content">
					<h2 className="n-products">
						{artPosicion} of {objSize} products
						<a href="#" className="arrow-cont arrow-resp">
							<span className="icon-keyboard_arrow_right arrow-icon"></span>
						</a>
					</h2>


				</div>
				<a href="#" className="arrow-cont">
					<span className="icon-keyboard_arrow_right arrow-icon"></span>
				</a>
			</div>

			<hr className="gray-line gl-foot" />
		</div>
	)
}

export default FootBar;