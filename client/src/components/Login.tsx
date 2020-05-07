import React, { Component } from 'react';
import axios from 'axios';
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
						<input type="password" placeholder="Password" name="password" value={ password } onChange={ this.handleChange } tabIndex={2} />
						<p>
							<a href="/register">Don't have an account with us?</a>
						</p>
						<button tabIndex={3}>Submit</button>
						{ loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
					</form>
				</div>
			</div>
		);
	}

 	// submitForm = async (e: any) => {
	// 	 try {
	// 		e.preventDefault();
	// 		console.log(process.env.REACT_APP_API);
	// 		let username = e.target.username.value;
	// 		let password = e.target.password.value;
	// 		let res = await axios.post(process.env.REACT_APP_API + "/login", { username: username, password: password });
	// 		console.log(res);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }
}

function mapStateToProps(state: any) {
    const { loggingIn } = state.auth;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export default connectedLoginPage; 