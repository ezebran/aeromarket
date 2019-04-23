import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
	render(){
		return(
			<section className="main">
				<div className="articles">
					
						
							{ Object.keys(this.props.productos).map(key => (
								<Article
									infoProductos = {this.props.productos[key]}
									infoUsuarios = {this.props.usuarios}
								/>
							))}
						
					
				</div>
			</section>
		)
	}
}

export default Articles;