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
	pagActual: 1
}

componentDidMount() {
	this.obtenerUsuario();
	this.obtenerProductos();
}

obtenerProductos = async () => {
	let url = `https://aerolab-challenge.now.sh/products/?token=${this.token}`;
	let produs = []
	const artPorPag = 16;
	await fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
		.then(productos => {

			this.setState({
				productos: productos
			})
			produs = productos;
			
		})
	let hasta = artPorPag * 1;
	let desde = hasta - artPorPag;
	for(let i = 0;i < artPorPag;i++){
		console.log(desde);
		desde++
	}
	console.log(desde)
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
				productos = {this.state.productos}
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
