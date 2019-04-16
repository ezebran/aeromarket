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
		cantidadProdus: 0,
		ordenadoPor: 1
	}
}
//1 = reciente, 2 = porMenor, 3 = porMayor
componentDidMount() {
	this.obtenerUsuario();
	this.obtenerProductos();
	this.ordenadoPor();
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
				pagEnMbar = this.state.paginacion.pagActual;
			}else{
				pagEnMbar = pagBar;
			}
			var paginacionCopy = this.state.paginacion
			paginacionCopy.cantidadProdus = productos.length
			paginacionCopy.pagActual = pagEnMbar
			console.log(this.state.paginacion.pagActual)
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

	if(this.state.paginacion.ordenadoPor == 2){

		produs.sort(function (prev, next){
			return prev.cost - next.cost;
		})
		let botonMenor = document.getElementById('porMenor');
		botonMenor.classList.remove("btn-light");
		botonMenor.classList.add("btn-active");

		let botonMayor = document.getElementById('porMayor');
		botonMayor.classList.remove("btn-active");
		botonMayor.classList.add("btn-light");

		let botonReciente = document.getElementById('reciente');
		botonReciente.classList.remove("btn-active");
		botonReciente.classList.add("btn-light");
	}

	this.setState({
		productos: produs
	})	
}

ordenadoPor = (num) => {
	if(num == undefined){
		num = this.state.paginacion.ordenadoPor;
	}
	var pagCopy = this.state.paginacion;
		pagCopy.ordenadoPor = num;
		this.setState({
			paginacion: pagCopy
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
// console.log(this.state.ordenadoPor)


  render() {
    return (
    	<div>
			<Header 
				usuarios = {this.state.usuarios}
			/>
			<MainBar
				paginacion = {this.state.paginacion}
				obtenerProductos = {this.obtenerProductos}
				ordenadoPor = {this.ordenadoPor}
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
