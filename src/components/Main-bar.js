import React from 'react';

const MainBar = (props) => {
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
	
	const ordenarPorReciente = (e) => {
		e.preventDefault();

		props.ordenadoPor(1);
		props.obtenerProductos();
	}
	
	const ordenarPorMenorPrecio = (e) => {
		e.preventDefault();

		props.ordenadoPor(2);
		props.obtenerProductos();
	}

	const ordenarPorMayorPrecio = (e) => {
		e.preventDefault();

		props.ordenadoPor(3);
		props.obtenerProductos();
	}
	
	const ordenarProductos = (e) => {
		e.preventDefault();

		let orden = e.target.value;

		if(orden == "reciente"){
			props.ordenadoPor(1);
		}else if(orden == "porMenor"){
			props.ordenadoPor(2);
		}else{
			props.ordenadoPor(3);
		}

		props.obtenerProductos();
	}
	return(
		<div>
			<div className="m-bar">

				<div className="m-bar-content">
					<h2 className="n-products">
						{artPosicion} of {objSize} products
				<div class="arrows-cont">
					<a href="#" className="arrow-cont arrow-resp" onClick={paginacionBarMenos}>
						<span className="icon-keyboard_arrow_left arrow-icon"></span>
					</a>
					<a href="#" className="arrow-cont arrow-resp" onClick={paginacionBarMas}>
						<span className="icon-keyboard_arrow_right arrow-icon"></span>
					</a>
				</div>
					</h2>

					<hr />

					<ul>
						<li className="p-sort">Sort by:</li>
						<select id="sort" onChange={ordenarProductos}>
							<option value="reciente" id="reciente">Most recent</option>
							<option value="porMenor" id="porMenor">Lowest price</option>
							<option value="porMayor" id="porMayor">Highest price</option>
						</select>

					</ul>

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

			<hr className="gray-line" />
		</div>
	)
}

export default MainBar;