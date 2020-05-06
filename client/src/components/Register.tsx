import React, { Component } from 'react';
import axios from 'axios';

import '../style/Card.css';
import '../style/Login.css';

type RegisterState = {
	values: string,
	username: string,
	firstName: string,
	lastName: string,
	password: string,
	confirmPassword: string,
}

class Register extends Component<{}, RegisterState> {

	constructor(props: {}) {
		super(props);
		this.state = {
			values: "false",
			username: "",
			firstName: "",
			lastName: "",
			password: "",
			confirmPassword: "",
		}
	}

	render() {
		return (
			<div id="loginApp">
				<div className="card loginCard">
					<form>
						<h1 id="logo">
							<a href="/register" className="loginLogo">communicate</a>
						</h1>
						<input type="text" placeholder="Username" value={ this.state.username } onChange={ this.handleUsernameChange } tabIndex={1} />
						<input type="text" placeholder="First Name" value={ this.state.firstName } onChange={ this.handleFirstNameChange } tabIndex={2} />
						<input type="text" placeholder="Last Name" value={ this.state.lastName } onChange={ this.handleLastNameChange } tabIndex={3} />
						<input type="password" placeholder="Password" value={ this.state.password } onChange={ this.handlePasswordChange } tabIndex={4} />
						<input type="password" placeholder="Confirm Password" value={ this.state.confirmPassword } onChange={ this.handleConfirmPasswordChange } tabIndex={5} />
						<p><a href="/login">Already have an account?</a></p>
						<button onClick={ this.submitForm } tabIndex={6}>Submit</button>
						{/* <br></br><br></br><br></br><p>correct? { this.state.values }</p> */}
					</form>
				</div>
			</div>
		);
	}

	handleUsernameChange = (e: any) => {
		this.setState({ username: e.target.value });
	}

	handleFirstNameChange = (e: any) => {
		this.setState({ firstName: e.target.value });
	}

	handleLastNameChange = (e: any) => {
		this.setState({ lastName: e.target.value });
	}

	handlePasswordChange = (e: any) => {
		this.setState({ password: e.target.value });
	}

	handleConfirmPasswordChange = (e: any) => {
		this.setState({ confirmPassword: e.target.value });
	}

 	submitForm = async (e: any) => {
		e.preventDefault();
		console.log(this.state);
		let res = await axios.post(`${ process.env.REACT_APP_API }/register`, this.state);
		this.setState({ values: res.data.toString() });
	}
}

export default Register;