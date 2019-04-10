import React from 'react';

const MainBar = (props) => {
	let objSize = props.paginacion.cantidadProdus;
	return(
		<div>
			<div className="m-bar">

				<div className="m-bar-content">
					<h2 className="n-products">
						11 of {objSize} products
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
				<a href="#" className="arrow-cont">
					<span className="icon-keyboard_arrow_right arrow-icon"></span>
				</a>
			</div>

			<hr className="gray-line" />
		</div>
	)
}

export default MainBar;