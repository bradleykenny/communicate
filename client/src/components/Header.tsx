import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../style/Header.css";

class Header extends Component<{ user: { email: string } }, {}> {
	render() {
		const { user } = this.props;
		return (
			<header>
				<h1 id="logo">
					<a href="/" className="headerLogo">communicate</a>
				</h1>
				<p>
					<a href="/">Home</a>
					<a href="/">Profile</a>
					<a href="/">Groups</a>
					<a href="/">Settings</a>
					<a href="/">{ this.props.user.email }</a>
				</p>
			</header>
		);
	}
}

function mapStateToProps(state: any) {
	const { user } = state.auth;
	return {
		user
	};
}

const connectedLoginPage = connect(mapStateToProps)(Header);
export default connectedLoginPage; 