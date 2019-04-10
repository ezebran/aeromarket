import React, { Component } from 'react';
import Header from './components/Header';
import MainBar from './components/Main-bar';
import Articles from './components/Articles';
import FootBar from './components/Foot-bar';

class App extends Component {

token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlkNmIwNzQ0OTNjMTAwNmQ2Y2UyMDUiLCJpYXQiOjE1NTM4MjA0MjN9.nU-Iph4W6yDDcUzFgBQ-5ePJ2xgmbLtOQn8S0RTE2dI';

state = {
	usuarios: {},
	productos: [],
	paginacion: {
		pagActual: 1,
		productosPorPag: 16,
		cantidadProdus: 0
	}
}

componentDidMount() {
	this.obtenerUsuario();
	this.obtenerProductos();
}

obtenerProductos = async () => {
	let url = `https://aerolab-challenge.now.sh/products/?token=${this.token}`;
	const artPorPag = this.state.paginacion.productosPorPag;
	await fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
		.then(productos => {

			var paginacionCopy = this.state.paginacion
			paginacionCopy.cantidadProdus = productos.length
			
			this.setState({
				paginacion: paginacionCopy,
				productos: productos				
			})			
		})

	
	let hasta = artPorPag * 2;
	let desde = hasta - artPorPag;
	var produs = [];

	for(let i = 0;i < artPorPag;i++){
		produs.push(this.state.productos[desde]);
		desde++;
	}

	console.log(produs)
	console.log(this.state.paginacion.cantidadProdus)
	this.setState({
		productos: produs
	})	
}

obtenerUsuario = async () => {
	let url = `https://aerolab-challenge.now.sh/user/me/?token=${this.token}`;

	await fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
		.then(usuarios => {
			this.setState({
				usuarios: usuarios
			})
		})
}




  render() {
    return (
    	<div>
			<Header 
				usuarios = {this.state.usuarios}
			/>
			<MainBar
				paginacion = {this.state.paginacion}
			/>
			<Articles 
				productos = {this.state.productos}
			/>
			<FootBar />
		</div>
    );
  }
}

export default App;
