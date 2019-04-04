import React, { Component } from 'react';
import Header from './components/Header';
import MainBar from './components/Main-bar';
import Articles from './components/Articles';

class App extends Component {

token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlkNmIwNzQ0OTNjMTAwNmQ2Y2UyMDUiLCJpYXQiOjE1NTM4MjA0MjN9.nU-Iph4W6yDDcUzFgBQ-5ePJ2xgmbLtOQn8S0RTE2dI';

state = {
	usuarios: {}
}

componentDidMount() {
	this.obtenerUsuario();
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
			console.log(usuarios)
		})
}

  render() {
    return (
    	<div>
			<Header 
				usuarios = {this.state.usuarios}
			/>
			<MainBar />
			<Articles />
		</div>
    );
  }
}

export default App;
