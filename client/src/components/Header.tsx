import React, { Component } from 'react';
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
					<a href="/login">Profile</a>
					<a href="/">Groups</a>
					<a href="/">Settings</a>
					<a href="/">{ this.props.user.email }</a>
				</p>
			</header>
		);
	}
}

export default Header;