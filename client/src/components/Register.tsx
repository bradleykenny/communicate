import React, { Component } from 'react';
import axios from 'axios';

import { history } from'../services/history';

import '../style/Card.css';
import '../style/Login.css';

type RegisterState = {
	email?: string,
	username?: string,
	firstName?: string,
	lastName?: string,
	password?: string,
	confirmPassword?: string,
}

class Register extends Component<{}, RegisterState> {

	constructor(props: {}) {
		super(props);
		this.state = {
			email: "",
			username: "",
			firstName: "",
			lastName: "",
			password: "",
			confirmPassword: "",
		}
	}

	handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}

	submitForm = async (e: any) => {
		e.preventDefault();
		axios.post(`${ process.env.REACT_APP_API }/register`, this.state);
		alert("Account created.");
		history.push("/login");
	}

	render() {
		const { email, username, firstName, lastName, password, confirmPassword } = this.state;
		
		return (
			<div id="loginApp">
				<div className="card loginCard">
					<form onSubmit={ this.submitForm }>
						<h1 id="logo">
							<a href="/register" className="loginLogo">communicate</a>
						</h1>
						<input className="textField" type="text" placeholder="Email" name="email" value={ email } onChange={ this.handleChange } tabIndex={1} />
						<input className="textField" type="text" placeholder="Username" name="username" value={ username } onChange={ this.handleChange } tabIndex={2} />
						<input className="textField" type="text" placeholder="First Name" name="firstName" value={ firstName } onChange={ this.handleChange } tabIndex={3} />
						<input className="textField" type="text" placeholder="Last Name" name="lastName" value={ lastName } onChange={ this.handleChange } tabIndex={4} />
						<input className="textField" type="password" placeholder="Password" name="password" value={ password } onChange={ this.handleChange } tabIndex={5} />
						<input className="textField" type="password" placeholder="Confirm Password" name="confirmPassword" value={ confirmPassword } onChange={ this.handleChange } tabIndex={6} />
						<p><a href="/login">Already have an account?</a></p>
						<button tabIndex={7}>Submit</button>
					</form>
				</div>
			</div>
		);
	}

}

export default Register;