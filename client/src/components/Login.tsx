import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/login';

import '../style/Card.css';
import '../style/Login.css';

type LoginState = {
	username?: string, 
	password?: string, 
	submitted?: boolean
}

type LoginProps = {
	dispatch: any, 
	loggingIn: boolean,
}

class Login extends Component<LoginProps, LoginState> {

	constructor(props: any) {
		super(props);

		this.state = {
			username: '',
			password: '',
			submitted: false
		};
	}

	handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { name, value } = e.currentTarget;
		this.setState({ [name]: value });
	}
	
	handleSubmit = (e: any) => {
		e.preventDefault();

		this.setState({ submitted: true });
		const { username, password } = this.state;
		const { dispatch } = this.props;
		if (username && password) {
			dispatch(login(username, password));
		}
	}

	render() {
		const { loggingIn } = this.props;
		const { username, password, submitted } = this.state;

		return (
			<div id="loginApp">
				<div className="card loginCard">
					<form onSubmit={ this.handleSubmit }>
						<h1 id="logo">
							<a href="/login" className="loginLogo">communicate</a>
						</h1>
						<input type="text" placeholder="Username" name="username" value={ username } onChange={ this.handleChange } tabIndex={1} />
						{submitted && !username &&
							<div className="help-block">Username is required</div>
						}
						<input type="password" placeholder="Password" name="password" value={ password } onChange={ this.handleChange } tabIndex={2} />
						{submitted && !password &&
							<div className="help-block">Password is required</div>
						}
						<p>
							<a href="/register">Don't have an account with us?</a>
						</p>
						<button tabIndex={3}>Submit</button>
						{ loggingIn && <p>Checking...</p> }
					</form>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state: any) {
	const { loggingIn } = state.auth;
	return {
		loggingIn
	};
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export default connectedLoginPage; 