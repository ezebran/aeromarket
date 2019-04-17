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

			this.setState({
				paginacion: paginacionCopy,
				productos: productos				
			})
						
		})


	let hasta = artPorPag * this.state.paginacion.pagActual;
	let desde = hasta - artPorPag;
	var produs = [];

	let produsSinOrdenar = this.state.productos;
	let botonMenor = document.getElementById('porMenor');
	let botonMayor = document.getElementById('porMayor');
	let botonReciente = document.getElementById('reciente');

	if(this.state.paginacion.ordenadoPor == 2){
		var produsXmenor = produsSinOrdenar.sort(function (prev, next){
			return prev.cost - next.cost;
		})
		this.setState({
			productos: produsXmenor
		})

		botonMenor.classList.remove("btn-light");
		botonMenor.classList.add("btn-active");

		botonMayor.classList.remove("btn-active");
		botonMayor.classList.add("btn-light");

		botonReciente.classList.remove("btn-active");
		botonReciente.classList.add("btn-light");

	} else if(this.state.paginacion.ordenadoPor == 3){

		var produsXmayor = produsSinOrdenar.sort(function (prev, next){
			return next.cost - prev.cost;
		})
		this.setState({
			productos: produsXmayor
		})

		botonMenor.classList.remove("btn-active");
		botonMenor.classList.add("btn-light");

		botonMayor.classList.remove("btn-light");
		botonMayor.classList.add("btn-active");

		botonReciente.classList.remove("btn-active");
		botonReciente.classList.add("btn-light");
	}else{
		var produsRecientes = produsSinOrdenar.sort(function (prev, next){
			return prev._id - next._id;
		})
		this.setState({
			productos: produsRecientes
		})

		botonMenor.classList.remove("btn-active");
		botonMenor.classList.add("btn-light");

		botonMayor.classList.remove("btn-active");
		botonMayor.classList.add("btn-light");

		botonReciente.classList.remove("btn-light");
		botonReciente.classList.add("btn-active");
	}

	for(let i = 0;i < artPorPag;i++){
		produs.push(this.state.productos[desde]);
		desde++;
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
