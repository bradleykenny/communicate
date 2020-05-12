import React, { Component } from 'react';
import "../style/Header.css";

import { UserData } from '../actions/user';

class Header extends Component<{ user: UserData }, {}> {
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
					<a href="/logout">{ this.props.user.email }</a>
				</p>
			</header>
		);
	}
}

export default Header;