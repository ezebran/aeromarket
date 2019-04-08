import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
	render(){
		return(
			<section className="main">
				<div className="articles">
					<a href="#">
						
							{ Object.keys(this.props.productos).map(key => (
								<Article
									infoProductos = {this.props.productos[key]}
								/>
							))}
						
					</a>
				</div>
			</section>
		)
	}
}

export default Articles;