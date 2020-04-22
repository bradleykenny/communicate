import React, { Component } from 'react';
import axios from 'axios';

import './style/Login.css';
import './style/Card.css';

import Card from './Card';

type LoginState = {
	values: string,
	username: string,
	password: string,
}

class Login extends Component<{}, LoginState> {

	constructor(props: {}) {
		super(props);
		this.state = {
			values: "default",
			username: "",
			password: "",
		}
	}

	render() {
		return (
			<div className="app">
				<div className="card">
					<form>
						<p>{ this.state.values }</p>
						<input type="text" placeholder="Username" value={ this.state.username } onChange={ this.handleUsernameChange }/>
						<input type="password" placeholder="Password" value={ this.state.password } onChange={ this.handlePasswordChange } />
						<button onClick={ this.submitForm }>Submit</button>
					</form>
				</div>
			</div>
		);
	}

	handleUsernameChange = (e: any) => {
		this.setState({ username: e.target.value });
	}

	handlePasswordChange = (e: any) => {
		this.setState({ password: e.target.value });
	}

 	submitForm = async (e: any) => {
		e.preventDefault();
		console.log(this.state);
		let res = await axios.post("http://localhost:5000/auth", this.state);
		this.setState({ values: res.data.toString() });
	}
}

export default Login;