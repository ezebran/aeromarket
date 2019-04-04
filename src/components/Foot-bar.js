import React, { Component } from 'react';

const FootBar = () => {
	return(
		<div>
			<div className="m-bar">

				<div className="m-bar-content">
					<h2 className="n-products">
						16 of 32 products
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