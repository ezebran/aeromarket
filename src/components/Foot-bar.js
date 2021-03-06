import React, { Component } from 'react';

const FootBar = (props) => {
	let objSize = props.paginacion.cantidadProdus;
	let artPosicion = props.paginacion.productosPorPag * props.paginacion.pagActual;
	var pagActual =  props.paginacion.pagActual;

	const paginacionBarMas = (e) => {
		e.preventDefault();


		if(objSize != artPosicion){
			var pagEnBar = pagActual + 1;

			props.obtenerProductos(pagEnBar);		
		}
	}

	const paginacionBarMenos = (e) => {
		e.preventDefault();


		if(pagActual != 1){
			var pagEnBar = pagActual - 1;

			props.obtenerProductos(pagEnBar);			
		}
	}
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
				<div class="arrows-cont">
					<a href="#" className="arrow-cont" onClick={paginacionBarMenos}>
						<span className="icon-keyboard_arrow_left arrow-icon"></span>
					</a>
					<a href="#" className="arrow-cont" onClick={paginacionBarMas}>
						<span className="icon-keyboard_arrow_right arrow-icon"></span>
					</a>
				</div>
			</div>

			<hr className="gray-line gl-foot" />
		</div>
	)
}

export default FootBar;