import React from 'react';

const MainBar = (props) => {
	let objSize = props.paginacion.cantidadProdus;
	let artPosicion = props.paginacion.productosPorPag * props.paginacion.pagActual;


	const paginacionBarMas = (e) => {
		e.preventDefault();

		if(objSize != artPosicion){
			var pagEnBar = props.paginacion.pagActual + 1;

			props.obtenerProductos(pagEnBar);		
		}else{
			document.getElementsByClassName("icon-keyboard_arrow_right").setAttribute("class", "coso");
		}



	}

	const paginacionBarMenos = (e) => {
		e.preventDefault();

		var pagEnBar = props.paginacion.pagActual - 1;

		props.obtenerProductos(pagEnBar);

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

					<hr />

					<ul>
						<li className="p-sort">Sort by:</li>

						<a href="#">
							<li className="btn btn-active">Most recent</li>
						</a>

						<a href="#">
							<li className="btn btn-light">Lowest price</li>
						</a>

						<a href="#">
							<li className="btn btn-light">Highest price</li>
						</a>
					</ul>

				</div>

				<a href="#" className="arrow-cont" onClick={paginacionBarMenos}>
					<span className="icon-keyboard_arrow_left arrow-icon"></span>
				</a>
				<a href="#" className="arrow-cont" onClick={paginacionBarMas}>
					<span className="icon-keyboard_arrow_right arrow-icon"></span>
				</a>
			</div>

			<hr className="gray-line" />
		</div>
	)
}

export default MainBar;