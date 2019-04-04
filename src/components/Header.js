import React, { Component } from 'react';

const Header = () => {
	return(
		<header>
			<nav>
				<img src="assets/images/aerolab-logo.svg" />
				<div className="user-nav">
					<h2 id="name">John Kite</h2>
					<div className="btn btn-light">
						<h2>6000</h2>
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