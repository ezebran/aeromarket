import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {

componentDidMount() {
	this.obtenerUsuario();
}


obtenerUsuario = async () => {
	let url = `https://aerolab-challenge.now.sh/user/me/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlkNmIwNzQ0OTNjMTAwNmQ2Y2UyMDUiLCJpYXQiOjE1NTM4MjA0MjN9.nU-Iph4W6yDDcUzFgBQ-5ePJ2xgmbLtOQn8S0RTE2dI`;

	await fetch(url)
		.then(respuesta => {
			return respuesta.json();
		})
		.then(usuarios => {
			console.log(usuarios)
		})
}

  render() {
    return (
		<Header />       
    );
  }
}

export default App;
