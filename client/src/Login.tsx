import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './style/Card.css';
import './style/Login.css';

type LoginState = {
	loggedin: string,
	username: string,
	password: string,
}

class Login extends Component<{}, LoginState> {

	constructor(props: {}) {
		super(props);
		this.state = {
			loggedin: "",
			username: "",
			password: "",
		}
	}

	render() {
		return (
			<div id="loginApp">
				<div className="card loginCard">
					<form>
						<h1 id="logo">
							<a href="/login" className="loginLogo">communicate</a>
						</h1>
						<input type="text" placeholder="Username" value={ this.state.username } onChange={ this.handleUsernameChange } tabIndex={1} />
						<input type="password" placeholder="Password" value={ this.state.password } onChange={ this.handlePasswordChange } tabIndex={2} />
						<p><a href="/register">Don't have an account with us?</a></p>
						<button onClick={ this.submitForm } tabIndex={3}>Submit</button>
						<p>{ this.state.loggedin }</p>
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
		 try {
			e.preventDefault();
			console.log(this.state);
			let res = await axios.post("http://localhost:5000/login", this.state);
			this.setState({ loggedin: "Correct credentials." });
			if (res.data === true) {
				
			} else {
				this.setState({ loggedin: "Incorrect username/password." })
			}
		} catch (e) {
			console.log(e);
		}
	}
}

export default Login;