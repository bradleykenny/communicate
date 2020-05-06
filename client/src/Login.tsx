import React, { Component } from 'react';
import axios from 'axios';
import { loginRequest } from './actions/login';

import './style/Card.css';
import './style/Login.css';

class Login extends Component<{}, {}> {

	render() {
		return (
			<div id="loginApp">
				<div className="card loginCard">
					<form onSubmit={ this.submitForm }>
						<h1 id="logo">
							<a href="/login" className="loginLogo">communicate</a>
						</h1>
						<input type="text" placeholder="Username" name="username" tabIndex={1} />
						<input type="password" placeholder="Password" name="password" tabIndex={2} />
						<p>
							<a href="/register">Don't have an account with us?</a>
						</p>
						<button tabIndex={3}>Submit</button>
					</form>
				</div>
			</div>
		);
	}

 	submitForm = async (e: any) => {
		 try {
			e.preventDefault();
			console.log(process.env.REACT_APP_API);
			let username = e.target.username.value;
			let password = e.target.password.value;
			let res = await axios.post(process.env.REACT_APP_API + "/login", { username: username, password: password });
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	}
}

export default Login;