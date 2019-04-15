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

obtenerProductos = async (pagBar) => {
	let url = `https://aerolab-challenge.now.sh/products/?token=${this.token}`;
	const artPorPag = this.state.paginacion.productosPorPag;
	await fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
		.then(productos => {
			var pagEnMbar;
			if(pagBar == undefined){
				pagEnMbar = 1;
			}else{
				pagEnMbar = pagBar;
			}
			var paginacionCopy = this.state.paginacion
			paginacionCopy.cantidadProdus = productos.length
			paginacionCopy.pagActual = pagEnMbar
			
			this.setState({
				paginacion: paginacionCopy,
				productos: productos				
			})			
		})


	let hasta = artPorPag * this.state.paginacion.pagActual;
	let desde = hasta - artPorPag;
	var produs = [];

	for(let i = 0;i < artPorPag;i++){
		produs.push(this.state.productos[desde]);
		desde++;
	}

	
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
				obtenerProductos = {this.obtenerProductos}
			/>
			<Articles 
				productos = {this.state.productos}
			/>
			<FootBar
				paginacion = {this.state.paginacion}
				obtenerProductos = {this.obtenerProductos}
			/>
		</div>
    );
  }
}

export default App;
