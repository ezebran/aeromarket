import React, { Component } from 'react';

const Header = (props) => {


	return(
		<header>
			<nav>
				<img src="assets/images/aerolab-logo.svg" />
				<div className="user-nav">
					<h2 id="name">{props.usuarios.name}</h2>
					<div className="btn btn-light">
						<h2>{props.usuarios.points}</h2>
						<img src="assets/images/icons/coin.svg" />
					</div>
				</div>
			</nav>
			<div className="h-banner">
				<h1>Electronics</h1>
			</div>
		</header>
	)
}

export default Header;